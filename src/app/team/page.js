'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import PlayerCard from '../components/PlayerCard';
import PlayerPosition from '../components/PlayerPosition';
import CoachCard from '../components/CoachCard';

const Team = () => {
    const [selectedPosition, setSelectedPosition] = useState('All');
    const [currentIndexPlayer, setCurrentIndexPlayer] = useState(0);
    const [currentIndexCoach, setCurrentIndexCoach] = useState(0);

    const coaches = [
        { id: 1, coachname: "Buyang Daffa", coachImage: "/images/coachFaces/Asian_v5_883.png", position: "Head Coach" },
        { id: 2, coachname: "Massimiliano Farris", coachImage: "/images/coachFaces/Caucasian_v5_976.png", position: "Assistant Coach" },
        { id: 3, coachname: "Lars Ricken", coachImage: "/images/coachFaces/Scandinavian_v5_1308.png", position: "Head of Youth Development" },
        { id: 4, coachname: "Alejandro Rosalén", coachImage: "/images/coachFaces/Asian_v5_883.png", position: "Goalkeeping Coach" },
        { id: 5, coachname: "Pablo Vercellone", coachImage: "/images/coachFaces/Caucasian_v5_976.png", position: "Goalkeeping Coach" },
        { id: 6, coachname: "Vítor Castanheira", coachImage: "/images/coachFaces/Scandinavian_v5_1308.png", position: "Set Piece Coach" },
        { id: 7, coachname: "Fábio Mahseredjian", coachImage: "/images/coachFaces/Asian_v5_883.png", position: "Fitness Coach" },
        { id: 8, coachname: "Paco De Miguel", coachImage: "/images/coachFaces/Caucasian_v5_976.png", position: "Fitness Coach" },
        { id: 9, coachname: "Riccardo Rocchini", coachImage: "/images/coachFaces/Caucasian_v5_976.png", position: "Coach" },
        { id: 10, coachname: "Mario Cecchi", coachImage: "/images/coachFaces/Caucasian_v5_976.png", position: "Coach" },
        { id: 11, coachname: "Maurizio Trombetta", coachImage: "/images/coachFaces/Caucasian_v5_976.png", position: "Coach" },
        { id: 12, coachname: "Daniel García Vallejo", coachImage: "/images/coachFaces/Caucasian_v5_976.png", position: "Head Performance Analyst" },
        { id: 13, coachname: "Nuno Maurício", coachImage: "/images/coachFaces/Caucasian_v5_976.png", position: "Performance Analyst" },
        { id: 14, coachname: "Michele Salzarulo", coachImage: "/images/coachFaces/Caucasian_v5_976.png", position: "Performance Analyst" },
        { id: 15, coachname: "Mick Court", coachImage: "/images/coachFaces/Caucasian_v5_976.png", position: "Performance Analyst" },

    ];

    const players = [
        { id: 1, playername: "Paes", playerImage: "/images/playerFaces/Asian_v5_883.png", jerseynumber: 1, position: "Goalkeeper" },
        { id: 2, playername: "Diks", playerImage: "/images/playerFaces/Caucasian_v5_976.png", jerseynumber: 2, position: "Defender" },
        { id: 3, playername: "Idzes", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 3, position: "Midfielder" },
        { id: 4, playername: "Riedewald", playerImage: "/images/playerFaces/Asian_v5_883.png", jerseynumber: 4, position: "Defender" },
        { id: 5, playername: "Hilgers", playerImage: "/images/playerFaces/Caucasian_v5_976.png", jerseynumber: 5, position: "Defender" },
        { id: 6, playername: "Walsh", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 6, position: "Defender" },
        { id: 7, playername: "Marselino", playerImage: "/images/playerFaces/Asian_v5_883.png", jerseynumber: 7, position: "Midfielder" },
        { id: 8, playername: "Rifan", playerImage: "/images/playerFaces/Caucasian_v5_976.png", jerseynumber: 8, position: "Midfielder" },
        { id: 9, playername: "Struick", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 9, position: "Forward" },
        { id: 10, playername: "Egy MV", playerImage: "/images/playerFaces/Asian_v5_883.png", jerseynumber: 10, position: "Midfielder" },
        { id: 11, playername: "Romeny", playerImage: "/images/playerFaces/Caucasian_v5_976.png", jerseynumber: 11, position: "Forward" },
        { id: 12, playername: "Bambang", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 12, position: "Midfielder" },

        { id: 13, playername: "Tarigan", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 13, position: "Goalkeeper" },
        { id: 14, playername: "Ismail", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 14, position: "Midfielder" },
        { id: 15, playername: "Hardianto", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 17, position: "Forward" },
        { id: 16, playername: "Jenner", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 18, position: "Midfielder" },
        { id: 17, playername: "Haye", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 19, position: "Midfielder" },
        { id: 18, playername: "Pattynama", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 20, position: "Midfielder" },
        { id: 19, playername: "Tjoe-A-On", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 21, position: "Defender" },
        { id: 20, playername: "Pieter", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 22, position: "Defender" },
        { id: 21, playername: "Reijnders", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 23, position: "Midfielder" },
        { id: 22, playername: "Verdonk", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 24, position: "Defender" },
        { id: 23, playername: "Andi", playerImage: "/images/playerFaces/Scandinavian_v5_1308.png", jerseynumber: 25, position: "Defender" },
    ];

    // Function to filter players
    const filteredPlayers = selectedPosition === 'All' 
        ? players 
        : players.filter(player => player.position === selectedPosition);

    const handleNextPlayers = () => {
        setCurrentIndexPlayer(prevIndex => prevIndex + 8 < filteredPlayers.length ? prevIndex + 8 : 0);
    };

    const handlePrevPlayers = () => {
        setCurrentIndexPlayer(prevIndex => prevIndex - 8 >= 0 ? prevIndex - 8 : filteredPlayers.length - (filteredPlayers.length % 8));
    };

    const handleNextCoaches = () => {
        setCurrentIndexCoach((prevIndex) => prevIndex + 5 < coaches.length ? prevIndex + 5 : 0);
    };
    
    const handlePrevCoaches = () => {
        setCurrentIndexCoach((prevIndex) => prevIndex - 5 >= 0 ? prevIndex - 5 : coaches.length - (coaches.length % 5)
        );
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
                            {filteredPlayers.slice(currentIndexPlayer, currentIndexPlayer + 8).map(player => (
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
                                onClick={handlePrevPlayers}
                                className="w-24 h-12 px-4 bg-[#242024] text-[#f3f4f5] rounded-lg font-bebas text-[24px] text-center align-middle"
                                disabled={currentIndexPlayer === 0}
                            >
                                Previous
                            </button>
                            <button
                                onClick={handleNextPlayers}
                                className="w-24 h-12 px-4 py-2 bg-[#242024] text-[#f3f4f5] rounded-lg font-bebas text-[24px] text-center align-middle"
                                disabled={currentIndexPlayer + 8 >= filteredPlayers.length}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                
                
                <div className="h-screen bg-[#F3F4F5] bg-cover bg-center relative flex flex-col items-center h-[450px]">
                    <div className="text-4xl pt-4 text-[#242024] font-bold font-bebas mb-2 text-center">COACHES</div>
                    <div className="flex flex-wrap justify-center gap-24">
                        {coaches.slice(currentIndexCoach, currentIndexCoach + 5).map((coach) => (
                            <CoachCard
                                key={coach.id}
                                imageSrc={coach.coachImage}
                                coachName={coach.coachname}
                                coachPosition={coach.position} />
                        ))}
                    </div>
                    <div className="flex justify-center gap-4 mt-6">
                        <button
                            onClick={handlePrevCoaches}
                            className="px-4 bg-gray-800 text-white rounded-lg font-bebas"
                            disabled={currentIndexCoach === 0}
                        >
                            Previous
                        </button>
                        
                        <button
                            onClick={handleNextCoaches}
                            className="px-4 py-2 bg-gray-800 text-white rounded-lg font-bebas"
                            disabled={currentIndexCoach + 5 >= coaches.length}
                        >
                            Next
                        </button>
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