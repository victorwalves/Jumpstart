import React, { useState, useEffect, useRef } from 'react';

export function Wrapped({ member, onClose }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = member.slides.length;
    const timerRef = useRef(null);
    const STORY_DURATION = 6000;

    useEffect(() => {
        startTimer();
        return () => clearTimeout(timerRef.current);
    }, [currentSlide]);

    const startTimer = () => {
        clearTimeout(timerRef.current);
        if (currentSlide < totalSlides - 1) {
            timerRef.current = setTimeout(() => nextSlide(), STORY_DURATION);
        }
    };

    const nextSlide = () => {
        if (currentSlide < totalSlides - 1) setCurrentSlide(prev => prev + 1);
    };

    const prevSlide = () => {
        if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
        else setCurrentSlide(0);
    };

    const handleTap = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;

        if (x < width / 3) prevSlide();
        else nextSlide();
    };

    const slide = member.slides[currentSlide];

    // Background logic
    const getBg = (name) => {
        const map = {
            'bg-christmas-red': 'bg-[#8E0E00]',
            'bg-christmas-green': 'bg-[#0B4F28]',
            'bg-christmas-gold': 'bg-[#B8860B]',
            'bg-tech': 'bg-[#291e3e]',
            'bg-black': 'bg-black'
        };
        return map[name] || 'bg-black';
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl">
            {/* CLOSE BUTTON */}
            <button
                onClick={onClose}
                className="absolute top-10 right-6 z-[70] text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* PHONE CONTAINER */}
            <div
                onClick={handleTap}
                className="relative w-full h-full md:w-[420px] md:h-[850px] md:rounded-[2rem] overflow-hidden shadow-2xl bg-black"
            >
                {/* BACKGROUND */}
                <div className={`absolute inset-0 transition-colors duration-700 ${getBg(slide.bg)}`}>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />
                </div>

                {/* LOGO */}
                <div className="absolute top-12 left-0 w-full flex justify-center z-20 pointer-events-none">
                    <h3 className="text-2xl font-black tracking-tighter text-white drop-shadow-lg">
                        JUMP<span className="text-[#1DB954]">START</span>
                    </h3>
                </div>

                {/* PROGRESS BARS */}
                <div className="absolute top-6 left-0 w-full px-6 flex gap-1 z-30">
                    {member.slides.map((_, idx) => (
                        <div key={idx} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                            <div
                                className={`h-full bg-white origin-left ${idx < currentSlide ? 'w-full' : 'w-0'
                                    }`}
                                style={{
                                    animation: idx === currentSlide ? `grow ${STORY_DURATION}ms linear` : 'none'
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* CONTENT */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8 text-center z-10 select-none overflow-hidden mt-12 pb-12 w-full">
                    <SlideContent slide={slide} member={member} />
                </div>
            </div>
        </div>
    );
}

function SlideContent({ slide, member }) {
    // Simple, robust animations for content
    const anim = "animate-in fade-in slide-in-from-bottom-8 duration-700 flex flex-col items-center justify-around h-full max-h-[70vh] w-[90%] mx-auto";

    switch (slide.type) {
        case 'intro':
            return (
                <div className={anim}>
                    <div className="flex-1 flex flex-col justify-center w-full">
                        <p className="text-[#FFD700] text-sm font-bold uppercase tracking-widest mb-6">{slide.sticker}</p>
                        <h1 className="text-4xl md:text-6xl font-black uppercase text-white leading-tight mb-8 drop-shadow-lg break-words">
                            {member.name}'s<br />
                            <span className="text-[#1DB954]">2025</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-medium px-4 leading-relaxed">{slide.subtitle}</p>
                    </div>
                </div>
            );
        case 'stat-highlight':
            // Granular sizing logic for better fit
            const len = slide.highlight.length;
            let sizeClass = "text-5xl md:text-7xl";
            if (len > 8) sizeClass = "text-4xl md:text-6xl";
            if (len > 15) sizeClass = "text-3xl md:text-5xl";
            if (len > 25) sizeClass = "text-2xl md:text-4xl";

            return (
                <div className={anim}>
                    <div className="flex-1 flex flex-col justify-center w-full">
                        <h2 className="text-xl md:text-2xl font-bold mb-8 opacity-90 uppercase tracking-wide">{slide.title}</h2>
                        <div className={`${sizeClass} font-black text-[#FFD700] leading-none mb-8 drop-shadow-xl break-words w-full`}>
                            {slide.highlight}
                        </div>
                        <p className="text-base md:text-lg font-bold mb-8 uppercase tracking-widest text-[#1DB954]">{slide.highlightLabel}</p>
                        <p className="text-xl md:text-2xl font-medium opacity-90 leading-relaxed mx-auto">{slide.text}</p>
                    </div>
                </div>
            );
        case 'chart':
            return (
                <div className={anim}>
                    <div className="w-full flex-1 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-black mb-4">{slide.title}</h2>
                        <p className="mb-12 text-lg md:text-xl opacity-80">{slide.subtitle}</p>

                        <div className="space-y-8 w-full max-w-sm mx-auto">
                            {slide.chartData.map((d, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <div className="flex justify-between text-sm md:text-base font-bold uppercase tracking-wider">
                                        <span>{d.label}</span>
                                        <span className="opacity-70">{d.value}</span>
                                    </div>
                                    <div className="h-6 md:h-8 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-1000 ease-out"
                                            style={{
                                                width: `${Math.min((d.value / (Math.max(...slide.chartData.map(x => x.value)) * 1.2)) * 100 + 10, 100)}%`,
                                                backgroundColor: d.color
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-12 text-sm opacity-60 text-center font-mono border-t border-white/10 pt-6 w-full max-w-xs mx-auto">{slide.footer}</p>
                    </div>
                </div>
            );
        case 'persona':
            return (
                <div className={anim}>
                    <div className="flex-1 flex flex-col justify-center items-center w-full">
                        {slide.showAvatar && (
                            <div className="w-40 h-40 md:w-52 md:h-52 mx-auto rounded-full border-4 border-[#1DB954] overflow-hidden mb-8 shadow-[0_0_30px_rgba(29,185,84,0.4)]">
                                <img
                                    src={member.avatar}
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.id}` }}
                                />
                            </div>
                        )}
                        <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tight leading-none break-words w-full">{slide.mainText}</h1>
                        <p className="text-lg md:text-xl mb-10 opacity-90 mx-auto">{slide.subText}</p>
                        <span className="bg-white text-black font-bold px-8 py-3 rounded-full transform -rotate-2 inline-block shadow-xl text-base md:text-lg">
                            {slide.sticker}
                        </span>
                    </div>
                </div>
            );
        case 'quote':
            return (
                <div className={anim}>
                    <div className="flex-1 flex flex-col justify-center w-full">
                        <h2 className="text-base md:text-xl font-bold mb-12 opacity-60 uppercase tracking-widest">{slide.title}</h2>
                        <h1 className="text-3xl md:text-5xl font-black italic mb-12 leading-snug text-[#FFD700]">
                            "{slide.quote}"
                        </h1>
                        {slide.subText && <p className="text-lg opacity-80 mb-8 mx-auto">{slide.subText}</p>}
                        <div className="text-7xl md:text-8xl filter drop-shadow-2xl animate-pulse">{slide.emoji}</div>
                    </div>
                </div>
            );
        case 'list':
            return (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 w-full md:w-full max-w-md mx-auto text-left bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex flex-col justify-center min-h-[50vh]">
                    <h2 className="text-3xl md:text-4xl font-black mb-10 text-center uppercase tracking-tight">{slide.title}</h2>
                    <div className="space-y-10">
                        {slide.items.map((item, i) => (
                            <div key={i} className="flex flex-col gap-2 border-l-4 border-[#1DB954] pl-6">
                                <p className="text-xs md:text-sm uppercase tracking-widest opacity-60 font-bold">{item.label}</p>
                                <p className="text-2xl md:text-3xl font-bold text-white break-words leading-tight">{item.value}</p>
                                {item.sub && <p className="text-sm md:text-base opacity-50">{item.sub}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            );
        case 'outro':
            return (
                <div className={anim}>
                    <div className="flex-1 flex flex-col justify-center w-full">
                        <h1 className="text-5xl md:text-6xl font-black mb-10 text-[#FFD700] leading-none drop-shadow-lg break-words">{slide.title}</h1>
                        <p className="text-xl md:text-2xl mb-16 opacity-90 mx-auto font-medium">{slide.text}</p>
                        <a
                            href={slide.ctaLink}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#1DB954] hover:bg-[#1ed760] text-black text-lg md:text-xl font-black py-5 w-full rounded-full shadow-[0_0_20px_rgba(29,185,84,0.4)] hover:scale-105 transition-all inline-block uppercase tracking-wide truncate px-4"
                        >
                            {slide.cta}
                        </a>
                        {slide.footer && <p className="mt-12 text-sm opacity-50 font-mono tracking-widest uppercase">{slide.footer}</p>}
                    </div>
                </div>
            );
        default: return null;
    }
}
