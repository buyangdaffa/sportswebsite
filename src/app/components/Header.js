// components/Header.js
import React from 'react';
import Link from 'next/link';
import SocialMedia from './SocialMedia';

const Header = () => {
  return (
    <><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dokdo&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link><header className="bg-[#BF0000] w-full top-0 z-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center">

          {/* Left Navigation */}
          <nav className="flex flex-col">
            {/* First Line */}
            <div className="flex gap-8">
              <SocialMedia />
            </div>

            {/* Separator Line */}
            <hr className="border-t-3 border-[#242024]" />

            {/* Second Line */}
            <div className="flex gap-8 justify-center">
              <Link href="/about" className="text-2xl font-bebas py-3 font-semibold text-[#242024] hover:text-[#F3F4F5]">
                About
              </Link>
              <Link href="/team" className="text-2xl font-bebas py-3 font-semibold text-[#242024] hover:text-[#F3F4F5]">
                Team
              </Link>
              <Link href="/matches" className="text-2xl font-bebas py-3 font-semibold text-[#242024] hover:text-[#F3F4F5]">
                Matches
              </Link>
            </div>
          </nav>

          {/* Center Logo */}
          <div className="py-4">
            <Link href="/">
              <img src="/images/garudanusantaralogo.png" alt="Garuda Nusantara Logo" className="h-[96px] mx-auto cursor-pointer" />
            </Link>
          </div>

          {/* Right Navigation */}
          <nav className="flex flex-col">
            {/* First Line */}
            <div className="flex gap-8 justify-center">
              <Link href="#signin" className="text-2xl font-bebas py-3 font-semibold text-[#242024] hover:text-[#F3F4F5] flex items-center">
                <img src="/images/log-in.svg" alt="Log In" className="w-6 h-6 mr-2 hover:fill-[#F3F4F5]" />
                Sign In
              </Link>
            </div>

            {/* Separator Line */}
            <hr className="border-t-3 border-[#242024]" />

            {/* Second Line */}
            <div className="flex gap-8 justify-center">
              <Link href="/media" className="text-2xl font-bebas py-3 font-semibold text-[#242024] hover:text-[#F3F4F5]">
                Media
              </Link>
              <Link href="#news" className="text-2xl font-bebas py-3 font-semibold text-[#242024] hover:text-[#F3F4F5]">
                News
              </Link>
              <Link href="#fanzone" className="text-2xl font-bebas py-3 font-semibold text-[#242024] hover:text-[#F3F4F5]">
                Fan Zone
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header></>
  );
};

export default Header;