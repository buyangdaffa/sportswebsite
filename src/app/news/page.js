'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';

const News = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 to-white">
      <Header />

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

export default News;
