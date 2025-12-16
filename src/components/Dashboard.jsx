import React from 'react';
import { TeamCard } from './TeamCard';

export function Dashboard({ team, onMemberSelect }) {
    return (
        <div className="relative min-h-screen w-full bg-black selection:bg-[#1DB954] selection:text-black">
            <div className="snow-container" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 py-12 md:py-20 flex flex-col items-center">

                {/* LOGO AREA - Centered and Proportional */}
                <div className="w-full mt-8 mb-8 md:mb-12 flex justify-center text-center">
                    <h2 className="text-4xl font-black tracking-tighter text-white">
                        JUMP<span className="text-[#1DB954]">START</span>
                    </h2>
                </div>

                {/* HEADER TEXT */}
                <header className="text-center max-w-3xl mb-16 md:mb-24">
                    <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
                        <span className="text-[#D42426]">Wrapped</span>
                        <span className="text-[#1DB954]"> 2025</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                        A retrospectiva oficial do time <strong className="text-white">Jumpstart</strong>.
                        <br className="hidden md:block" />
                        {' '}Escolha um card para ver os destaques do ano.
                    </p>
                </header>

                {/* TEAM GRID */}
                {/* TEAM GRID */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 justify-items-center">
                    {team.map((member) => (
                        <div key={member.id} className="w-full max-w-[320px] sm:max-w-none">
                            <TeamCard
                                member={member}
                                onClick={onMemberSelect}
                            />
                        </div>
                    ))}
                </div>

                {/* FOOTER */}
                <footer className="mt-32 text-gray-700 text-sm font-medium uppercase tracking-widest">
                    Jumpstart Immigration © 2025
                </footer>
            </div>
        </div>
    );
}
