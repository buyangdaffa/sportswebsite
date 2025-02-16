'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import PlayerCard from '../components/PlayerCard';
import PlayerPosition from '../components/PlayerPosition';

const Team = () => {
    const [selectedPosition, setSelectedPosition] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);

    const players = [
        { id: 1, playername: "Maarten Paes", playerImage: "/images/playerFaces/Asian_v5_883.png", jerseynumber: 1, position: "Goalkeeper" },
        { id: 2, playername: "Kevin Diks", playerImage: "/images/playerFaces/Caucasian_v5_976.png", jerseynumber: 2, position: "Defender" },
        { id: 3, playername: "Jay Idzes", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 3, position: "Midfielder" },
        { id: 4, playername: "Jaïro Riedewald", playerImage: "/images/playerFaces/Asian_v5_883.png", jerseynumber: 4, position: "Defender" },
        { id: 5, playername: "Mees Hilgers", playerImage: "/images/playerFaces/Caucasian_v5_976.png", jerseynumber: 5, position: "Defender" },
        { id: 6, playername: "Sandy Walsh", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 6, position: "Defender" },
        { id: 7, playername: "Marselino Ferdinan", playerImage: "/images/playerFaces/Asian_v5_883.png", jerseynumber: 7, position: "Midfielder" },
        { id: 8, playername: "Yudhi Rifan", playerImage: "/images/playerFaces/Caucasian_v5_976.png", jerseynumber: 8, position: "Midfielder" },
        { id: 9, playername: "Rafael Struick", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 9, position: "Forward" },
        { id: 10, playername: "Egy Maulana Vikri", playerImage: "/images/playerFaces/Asian_v5_883.png", jerseynumber: 10, position: "Midfielder" },
        { id: 11, playername: "Ole Romeny", playerImage: "/images/playerFaces/Caucasian_v5_976.png", jerseynumber: 11, position: "Forward" },
        { id: 12, playername: "Bambang Burhanuddin", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 12, position: "Midfielder" },

        { id: 13, playername: "Abdullah Tarigan", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 13, position: "Goalkeeper" },
        { id: 14, playername: "Dodi Ismail", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 14, position: "Midfielder" },
        { id: 15, playername: "Syamsul Hardianto", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 17, position: "Forward" },
        { id: 16, playername: "Ivar Jenner", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 18, position: "Midfielder" },
        { id: 17, playername: "Thom Haye", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 19, position: "Midfielder" },
        { id: 18, playername: "Shayne Pattynama", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 20, position: "Midfielder" },
        { id: 19, playername: "Nathan Tjoe-A-On", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 21, position: "Defender" },
        { id: 20, playername: "Pieter Purnomo", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 22, position: "Defender" },
        { id: 21, playername: "Eliano Reijnders", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 23, position: "Midfielder" },
        { id: 22, playername: "Calvin Verdonk", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 24, position: "Defender" },
        { id: 23, playername: "Andi Yulianto", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 25, position: "Defender" },
    ];

    // Function to filter players
    const filteredPlayers = selectedPosition === 'All' 
        ? players 
        : players.filter(player => player.position === selectedPosition);

    const handleNext = () => {
        setCurrentIndex(prevIndex => prevIndex + 8 < filteredPlayers.length ? prevIndex + 8 : 0);
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => prevIndex - 8 >= 0 ? prevIndex - 8 : filteredPlayers.length - (filteredPlayers.length % 8));
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 to-white">
            <Header />

            <main className="flex-1">
                <div className="h-screen bg-[url('/images/jaleel-akbash-MCMoD0EXYR8-unsplash.jpg')] bg-cover bg-center relative flex">
                    <div className="w-1/3 flex items-center justify-center">
                        <h2 className="text-9xl font-bebas text-[#F3F4F5] mb-2 underline">FIRST TEAM</h2>
                    </div>
                    <div className="w-2/3 flex flex-col justify-center">
                        <div className="flex justify-center p-4">
                            <PlayerPosition setSelectedPosition={setSelectedPosition} />
                        </div>
                        <div className="flex flex-wrap justify-center gap-20 p-8">
                            {filteredPlayers.slice(currentIndex, currentIndex + 8).map(player => (
                                <PlayerCard
                                    key={player.id}
                                    imageSrc={player.playerImage}
                                    playerName={player.playername}
                                    jerseyNumber={player.jerseynumber}
                                />
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center gap-4 mt-6">
                            <button
                                onClick={handlePrev}
                                className="px-4 bg-gray-800 text-white rounded-lg font-bebas"
                                disabled={currentIndex === 0}
                            >
                                Previous
                            </button>
                            <button
                                onClick={handleNext}
                                className="px-4 py-2 bg-gray-800 text-white rounded-lg font-bebas"
                                disabled={currentIndex + 8 >= filteredPlayers.length}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 px-4 bg-[#242024]">
                <div className="max-w-8xl mx-auto">
                    <h2 className="text-xl text-[#DDDDDD] mb-2 font-bebas">© MuhammadFajrinBuyangDaffa 2025</h2>
                </div>
            </footer>
        </div>
    );
};

export default Team;