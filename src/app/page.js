'use client';
import React, { useState } from 'react';
import MatchCard from './components/MatchCard'; // Import the MatchCard component
import Link from 'next/link';
import Header from './components/Header';

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
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dokdo&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 to-white">
      {/* Header */}
      <Header />
      

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
                altText={match.title} />
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
    </div></>
  );
};

export default LandingPage;
