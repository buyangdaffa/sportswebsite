'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import PlayerCard from '../components/PlayerCard';
import PlayerPosition from '../components/PlayerPosition';
import CoachCard from '../components/CoachCard';

const Page = () => {
    const [selectedPosition, setSelectedPosition] = useState('All');
    const [currentIndexPlayer, setCurrentIndexPlayer] = useState(0);
    const [currentIndexCoach, setCurrentIndexCoach] = useState(0);

    const coaches = [
        { id: 1, coachname: "Buyang Daffa", coachImage: "/images/coachFaces/pp.JPG", position: "Head Coach" },
        { id: 2, coachname: "Daan Van Basten", coachImage: "/images/coachFaces/ItalMed_v5_1047.png", position: "Assistant Coach" },
        { id: 3, coachname: "Bagus Setiawan", coachImage: "/images/coachFaces/MENA_v5_896.png", position: "Head of Youth Development" },
        { id: 4, coachname: "Eko Wijaya", coachImage: "/images/coachFaces/MESA_v5_725.png", position: "Goalkeeping Coach" },
        { id: 5, coachname: "Johan De Ruiter", coachImage: "/images/coachFaces/Scandinavian_v5_1073.png", position: "Goalkeeping Coach" },
        { id: 6, coachname: "Hendrik Van Leeuwen", coachImage: "/images/coachFaces/SpanMed_v5_1011.png", position: "Set Piece Coach" },
        { id: 7, coachname: "Faisal Hakim", coachImage: "/images/coachFaces/YugoGreek_v5_990.png", position: "Fitness Coach" },
        { id: 8, coachname: "Sven Meijer", coachImage: "/images/coachFaces/ItalMed_v5_1130.png", position: "Fitness Coach" },
        { id: 9, coachname: "Arif Ramadhan", coachImage: "/images/coachFaces/MENA_v5_936.png", position: "Coach" },
        { id: 10, coachname: "Willem Van Dijk", coachImage: "/images/coachFaces/ItalMed_v5_1277.png", position: "Coach" },
        { id: 11, coachname: "Adi Kusuma", coachImage: "/images/coachFaces/MENA_v5_1340.png", position: "Coach" },
        { id: 12, coachname: "Rafael Soetomo", coachImage: "/images/coachFaces/Scandinavian_v5_1329.png", position: "Head Performance Analyst" },
        { id: 13, coachname: "Jansen Vermeer", coachImage: "/images/coachFaces/MENA_v5_1391.png", position: "Performance Analyst" },
        { id: 14, coachname: "Yusuf Al-Farizi", coachImage: "/images/coachFaces/MESA_v5_725.png", position: "Performance Analyst" },
        { id: 15, coachname: "Bram Hendriks", coachImage: "/images/coachFaces/MESA_v5_1007.png", position: "Performance Analyst" },
    ];
    

    const players = [
        { id: 1, playername: "Tarigan", playerImage: "/images/playerFaces/SEAsian_v5_947.png", jerseynumber: 1, position: "Goalkeeper" },
        { id: 2, playername: "Ari", playerImage: "/images/playerFaces/SEAsian_v5_965.png", jerseynumber: 30, position: "Goalkeeper" },
        { id: 3, playername: "Purnomo", playerImage: "/images/playerFaces/Asian_v5_549.png", jerseynumber: 12, position: "Defender" },
        { id: 4, playername: "Rochman", playerImage: "/images/playerFaces/Asian_v5_569.png", jerseynumber: 4, position: "Defender" },
        { id: 5, playername: "Prayitno", playerImage: "/images/playerFaces/Asian_v5_571.png", jerseynumber: 44, position: "Defender" },
        { id: 6, playername: "Yulianto", playerImage: "/images/playerFaces/Asian_v5_591.png", jerseynumber: 2, position: "Defender" },
        { id: 7, playername: "Arifin", playerImage: "/images/playerFaces/Asian_v5_610.png", jerseynumber: 59, position: "Defender" },
        { id: 8, playername: "Burhanuddin", playerImage: "/images/playerFaces/Asian_v5_619.png", jerseynumber: 37, position: "Midfielder" },
        { id: 9, playername: "Suprianto", playerImage: "/images/playerFaces/Asian_v5_636.png", jerseynumber: 8, position: "Midfielder" },
        { id: 10, playername: "Santosa", playerImage: "/images/playerFaces/Asian_v5_709.png", jerseynumber: 15, position: "Midfielder" },
        { id: 11, playername: "Pranata", playerImage: "/images/playerFaces/Asian_v5_710.png", jerseynumber: 33, position: "Midfielder" },
        { id: 12, playername: "Handika", playerImage: "/images/playerFaces/Asian_v5_713.png", jerseynumber: 50, position: "Midfielder" },
        { id: 13, playername: "Ismail", playerImage: "/images/playerFaces/Asian_v5_817.png", jerseynumber: 14, position: "Midfielder" },
        { id: 14, playername: "Rifan", playerImage: "/images/playerFaces/Asian_v5_834.png", jerseynumber: 7, position: "Midfielder" },
        { id: 15, playername: "Supriyadi", playerImage: "/images/playerFaces/Asian_v5_859.png", jerseynumber: 6, position: "Midfielder" },
        { id: 16, playername: "Akbar", playerImage: "/images/playerFaces/Asian_v5_867.png", jerseynumber: 10, position: "Midfielder" },
        { id: 17, playername: "Yahya", playerImage: "/images/playerFaces/Asian_v5_879.png", jerseynumber: 16, position: "Midfielder" },
        { id: 18, playername: "Susilo", playerImage: "/images/playerFaces/Asian_v5_883.png", jerseynumber: 17, position: "Forward" },
        { id: 19, playername: "Musawir", playerImage: "/images/playerFaces/Asian_v5_885.png", jerseynumber: 55, position: "Forward" },
        { id: 20, playername: "Pamungkas", playerImage: "/images/playerFaces/SEAsian_v5_1026.png", jerseynumber: 13, position: "Forward" },
        { id: 21, playername: "Ariyanto", playerImage: "/images/playerFaces/SEAsian_v5_1100.png", jerseynumber: 38, position: "Forward" },
        { id: 22, playername: "Priyadi", playerImage: "/images/playerFaces/SEAsian_v5_1096.png", jerseynumber: 35, position: "Forward" },
        { id: 23, playername: "Hardianto", playerImage: "/images/playerFaces/SEAsian_v5_1203.png", jerseynumber: 9, position: "Forward" },
        { id: 24, playername: "Yulianto", playerImage: "/images/playerFaces/SEAsian_v5_1253.png", jerseynumber: 34, position: "Forward" }
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
                
                
                <div className="bg-[#F3F4F5] bg-cover bg-center relative flex flex-col items-center h-[450px]">
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
                            className="w-24 h-12 px-4 bg-[#242024] text-[#f3f4f5] rounded-lg font-bebas text-[24px] text-center align-middle"
                            disabled={currentIndexCoach === 0}
                        >
                            Previous
                        </button>
                        
                        <button
                            onClick={handleNextCoaches}
                            className="w-24 h-12 px-4 py-2 bg-[#242024] text-[#f3f4f5] rounded-lg font-bebas text-[24px] text-center align-middle"
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
                    <h2 className="text-xl text-center text-[#DDDDDD] mb-2 font-bebas">© MuhammadFajrinBuyangDaffa 2025</h2>
                </div>
            </footer>
        </div>
    );
};

export default Page;