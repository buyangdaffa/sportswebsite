'use client';
import React from 'react';
import Header from './components/Header';
import ClubBanner from './components/ClubBanner';
import MatchesSection from './components/MatchesSection';
import Footer from './components/Footer';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 to-white">
      <Header />
      <main className="flex-1">
        <ClubBanner />
        <MatchesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
