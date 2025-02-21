'use client';
import React, { useState } from 'react';
import MatchCard from './MatchCard';
import { matches } from './Matches';

const MatchesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 5 < matches.length ? prevIndex + 5 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 5 >= 0 ? prevIndex - 5 : matches.length - (matches.length % 5)
    );
  };

  return (
    <div className="min-h-screen bg-[#DDDDDD] bg-cover bg-center">
      <div className="text-4xl pl-10 pt-10 text-[#242024] font-bold font-bebas mb-2">Upcoming Matches</div>
      <div className="flex flex-wrap justify-center gap-20 p-8">
        {matches.slice(currentIndex, currentIndex + 5).map((match) => (
          <MatchCard
            key={match.id}
            imageSrc={match.coverImage}
            altText={match.title}
          />
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="px-4 bg-gray-800 text-white rounded-lg font-bebas"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg font-bebas"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MatchesSection;