import React from 'react';
import { useNavigate } from 'react-router-dom';

export function HomeSelection() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen w-full bg-black selection:bg-[#1DB954] selection:text-black">
            <div className="snow-container" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 py-12 md:py-20 flex flex-col items-center">

                {/* LOGO AREA */}
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
                        Bem-vindo a retrospectiva do ano.
                        <br className="hidden md:block" />
                        {' '}Selecione uma área para continuar.
                    </p>
                </header>

                {/* SELECTION GRID */}
                <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-stretch max-w-4xl">

                    {/* INVESTIDORES CARD */}
                    <div
                        onClick={() => navigate('/investors')}
                        className="group relative w-full md:w-1/2 aspect-[4/3] md:aspect-square bg-[#111] rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500 border border-white/5 hover:border-[#1DB954]/50 shadow-2xl hover:shadow-[0_0_50px_rgba(29,185,84,0.2)] flex flex-col items-center justify-center p-8"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="text-6xl md:text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                            🚀
                        </div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-white group-hover:text-[#1DB954] transition-colors">
                            Investidores
                        </h2>
                        <p className="mt-4 text-gray-500 text-center font-medium opacity-80 group-hover:opacity-100">
                            Jumpstart & Investors
                        </p>
                    </div>

                    {/* TIME CARD */}
                    <div
                        onClick={() => navigate('/team')}
                        className="group relative w-full md:w-1/2 aspect-[4/3] md:aspect-square bg-[#111] rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500 border border-white/5 hover:border-[#D42426]/50 shadow-2xl hover:shadow-[0_0_50px_rgba(212,36,38,0.2)] flex flex-col items-center justify-center p-8"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D42426]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="text-6xl md:text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                            🧑‍💻
                        </div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-white group-hover:text-[#D42426] transition-colors">
                            Time
                        </h2>
                        <p className="mt-4 text-gray-500 text-center font-medium opacity-80 group-hover:opacity-100">
                            O Dream Team 2025
                        </p>
                    </div>

                </div>

                {/* FOOTER */}
                <footer className="mt-32 text-gray-700 text-sm font-medium uppercase tracking-widest">
                    Jumpstart Immigration © 2025
                </footer>
            </div>
        </div>
    );
}
