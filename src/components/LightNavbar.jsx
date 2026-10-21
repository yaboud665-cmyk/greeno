import React from 'react';
import greenoImg from '../assets/greeno.png';
import { missions } from '../data/missions';

export const LightNavbar = ({ activeMissionId, onSelectMission }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e5f5ea] shadow-xs">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Brand Mini Avatar */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-100 p-1 flex items-center justify-center border border-emerald-300">
            <img src={greenoImg} alt="Greeno" className="w-full h-full object-contain" />
          </div>
          <span className="text-base sm:text-lg font-black text-[#1b834a] tracking-tight">
            Greeno
          </span>
        </div>

        {/* Center/Right: Clean light mission tabs */}
        <nav className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-1 px-1">
          {missions.map((m) => {
            const isActive = m.id === activeMissionId;
            return (
              <button
                key={m.id}
                onClick={() => onSelectMission(m.id)}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#1b834a] text-white shadow-xs scale-102'
                    : 'bg-[#f0fbf4] text-[#24613b] hover:bg-[#e1f7e8]'
                }`}
              >
                <span>{m.emoji}</span>
                <span>{m.title}</span>
              </button>
            );
          })}
        </nav>

      </div>
    </header>
  );
};

export default LightNavbar;
