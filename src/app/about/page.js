'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 to-white">
      {/* Header */}
      <header className="px-[90px] pt-[21px] bg-[#BF0000] flex flex-col items-center">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dokdo&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        {/* Club Logo */}
        <Link href="/" className="animate-character text-4xl text-[#F3F4F5] font-bold font-bebas mb-2">Garuda Nusantara</Link>

        {/* Navbar */}
        <nav className="w-full flex justify-center">
          <div className="space-x-8 pb-3">
            <a href="#About" className="text-xl font-semibold text-[#242024] hover:text-[#F3F4F5]">About</a>
            <a href="#Team" className="text-xl font-semibold text-[#242024] hover:text-[#F3F4F5]">Team</a>
            <a href="#Matches" className="text-xl font-semibold text-[#242024] hover:text-[#F3F4F5]">Matches</a>
            <a href="#Media" className="text-xl font-semibold text-[#242024] hover:text-[#F3F4F5]">Media</a>
            <a href="#News" className="text-xl font-semibold text-[#242024] hover:text-[#F3F4F5]">News</a>
            <a href="#Fans" className="text-xl font-semibold text-[#242024] hover:text-[#F3F4F5]">Fans</a>
            <a href="#Contact" className="text-xl font-semibold text-[#242024] hover:text-[#F3F4F5]">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-2xl font-bold text-[#272776] mb-2">Thank you for visiting!</h2>
          <p className="text-sm text-gray-600">© IntelliAgents 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
