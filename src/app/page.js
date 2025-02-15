'use client';
import React, { useState } from 'react';
import MatchCard from './components/MatchCard'; // Import the MatchCard component
import Link from 'next/link';

const LandingPage = () => {
  const matches = [
    { id: 1, title: "vsFEYENOORD", coverImage: "/images/vsFEYENOORD.png", details: "" },
    { id: 2, title: "vsAJAX", coverImage: "/images/vsAJAX.png", details: "" },
    { id: 3, title: "vsAZ", coverImage: "/images/vsAZ.png", details: "" },
    { id: 4, title: "vsVITESSE", coverImage: "/images/vsVITESSE.png", details: "" },
    { id: 5, title: "vsSPARTAROTTERDAM", coverImage: "/images/vsSPARTAROTTERDAM.png", details: "" },
    { id: 6, title: "vsALMERECITYFC", coverImage: "/images/vsALMERECITYFC.png", details: "" },
    { id: 7, title: "vsFCGRONINGEN", coverImage: "/images/vsFCGRONINGEN.png", details: "" },
    { id: 8, title: "vsCAMBUUR", coverImage: "/images/vsCAMBUUR.png", details: "" },
    { id: 9, title: "vsPSV", coverImage: "/images/vsPSV.png", details: "" },
    { id: 10, title: "vsEXCELSIOR", coverImage: "/images/vsEXCELSIOR.png", details: "" },
    { id: 11, title: "vsADODENHAAG", coverImage: "/images/vsADODENHAAG.png", details: "" },
    { id: 12, title: "vsUNKNOWN", coverImage: "/images/vsUNKNOWN.png", details: "" },
    { id: 13, title: "vsNAC", coverImage: "/images/vsNAC.png", details: "" },
    { id: 14, title: "vsTWENTE", coverImage: "/images/vsTWENTE.png", details: "" },
    { id: 15, title: "vsHEERENVEEN", coverImage: "/images/vsHEERENVEEN.png", details: "" },
    { id: 16, title: "vsFORTUNASITTARD", coverImage: "/images/vsFORTUNASITTARD.png", details: "" },
    { id: 17, title: "vsNEC", coverImage: "/images/vsNEC.png", details: "" },
    { id: 18, title: "vsUTRECHT", coverImage: "/images/vsUTRECHT.png", details: "" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Track the starting index for 5 matches

  const handleNext = () => {
    // Move to the next set of 5 matches, if possible
    setCurrentIndex((prevIndex) =>
      prevIndex + 5 < matches.length ? prevIndex + 5 : 0
    );
  };

  const handlePrev = () => {
    // Move to the previous set of 5 matches, if possible
    setCurrentIndex((prevIndex) =>
      prevIndex - 5 >= 0 ? prevIndex - 5 : matches.length - (matches.length % 5)
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 to-white">
      {/* New Header Structure */}
      <header className="bg-[#BF0000] w-full">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-between items-center">
            
            {/* Left Navigation */}
            <nav className="flex flex-col">
              {/* First Line */}
              <div className="flex gap-8">
                <Link href="/about" className="text-xl py-3 font-semibold text-[#242024] hover:text-[#F3F4F5]">
                About
                </Link>
                <Link href="#Team" className="text-xl py-3 font-semibold text-[#242024] hover:text-[#F3F4F5]">
                Team
                </Link>
              </div>
  
              {/* Separator Line */}
              <hr className="border-t-2 border-[#242024]" />
  
              {/* Second Line */}
              <div className="flex gap-8">
                <Link href="#Matches" className="text-xl py-3 font-semibold text-[#242024] hover:text-[#F3F4F5]">
                Matches
                </Link>
              </div>
            </nav>


            {/* Center Logo */}
            <div className="py-4">
              <img src="/images/garudanusantaralogo.png" alt="Garuda Nusantara Logo" className="h-[96px] mx-auto" />
            </div>


            {/* Right Navigation */}
            <nav className="flex gap-8">
              <Link href="#Media" className="text-xl py-6 font-semibold text-[#242024] hover:text-[#F3F4F5]">
                Media
              </Link>
              <Link href="#News" className="text-xl py-6 font-semibold text-[#242024] hover:text-[#F3F4F5]">
                News
              </Link>
              <Link href="#Contact" className="text-xl py-6 font-semibold text-[#242024] hover:text-[#F3F4F5]">
                Contact
              </Link>
              <button className="text-xl py-6 font-semibold text-[#242024] hover:text-[#F3F4F5]">
                🔍
              </button>
              <button className="text-xl py-6 font-semibold text-[#242024] hover:text-[#F3F4F5]">
                🛒
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="min-h-screen bg-[url('/images/leah-hetteberg-Q-Qd44h6DZU-unsplash.jpg')] bg-cover bg-center">
            
        </div>

        <div className="min-h-screen bg-[#DDDDDD] bg-cover bg-center">
        <div className="text-4xl pl-10 pt-10 text-[#242024] font-bold font-bebas mb-2">Upcoming Matches</div>
          {/* Display 5 matches at once */}
          <div className="flex flex-wrap justify-center gap-20 p-8">
            {matches.slice(currentIndex, currentIndex + 5).map((match) => (
              <MatchCard 
                key={match.id} 
                imageSrc={match.coverImage} 
                altText={match.title} 
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="px-4 bg-gray-800 text-white rounded-lg"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#242024]">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-xl text-[#DDDDDD] mb-2">© MuhammadFajrinBuyangDaffa 2025</h2>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
