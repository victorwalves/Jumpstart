import React from 'react';

export function TeamCard({ member, onClick }) {
    return (
        <div
            onClick={() => onClick(member)}
            className="group relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#1A1A1A] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#1DB954]/20 transition-all duration-500 ease-out transform hover:-translate-y-2"
        >
            {/* IMAGE */}
            <img
                src={member.avatar}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                onError={(e) => { e.target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.id}` }}
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300" />

            {/* CONTENT */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-3xl font-black text-white mb-2 leading-none transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {member.name}
                </h3>
                <div className="h-0.5 w-12 bg-[#1DB954] mb-3 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <p className="text-gray-300 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    {member.role}
                </p>
            </div>

            {/* HOVER BORDER */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#1DB954] rounded-3xl transition-colors duration-300 pointer-events-none" />
        </div>
    );
}
