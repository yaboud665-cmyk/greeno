
import { 

  Scissors, 
  Award, 
  Droplets, 
  Sprout, 
  Sun, 
  Sparkles, 
  Search
} from 'lucide-react';

export const StepIllustration = ({ type, stepNumber }) => {
  // Return tailored rich illustrations based on step type
  switch (type) {
    case 'box':
      return (
        <div className="w-full h-36 bg-amber-50/80 rounded-2xl flex items-center justify-center p-3 relative overflow-hidden border border-amber-100 group-hover:scale-105 transition-transform duration-300">
          <div className="absolute top-2 right-2 text-amber-200">
            <Sparkles size={20} />
          </div>
          {/* Cardboard box illustration */}
          <div className="relative flex flex-col items-center">
            {/* Papers inside box */}
            <div className="relative -mb-3 z-10 flex gap-1">
              <div className="w-8 h-10 bg-white shadow-sm rounded-sm transform -rotate-12 border border-amber-200 flex flex-col p-1 gap-1">
                <div className="w-4 h-1 bg-sky-200 rounded"></div>
                <div className="w-5 h-1 bg-sky-100 rounded"></div>
              </div>
              <div className="w-10 h-12 bg-sky-50 shadow-md rounded-sm transform rotate-6 border border-sky-200 flex flex-col p-1.5 gap-1">
                <div className="w-6 h-1.5 bg-emerald-400 rounded"></div>
                <div className="w-5 h-1 bg-emerald-200 rounded"></div>
                <div className="w-7 h-1 bg-gray-200 rounded"></div>
              </div>
            </div>
            {/* Box container */}
            <div className="w-24 h-16 bg-linear-to-b from-amber-200 to-amber-300 rounded-lg shadow-md border-2 border-amber-400 flex items-center justify-center relative">
              <div className="w-10 h-2 bg-amber-400/80 rounded-full"></div>
              <div className="absolute -bottom-1 text-xs font-black text-amber-700/80 tracking-wider">
                RECYCLE
              </div>
            </div>
          </div>
        </div>
      );

    case 'craft':
      return (
        <div className="w-full h-36 bg-sky-50/80 rounded-2xl flex items-center justify-center p-3 relative overflow-hidden border border-sky-100 group-hover:scale-105 transition-transform duration-300">
          <div className="absolute top-2 right-2 text-sky-200">
            <Sparkles size={20} />
          </div>
          {/* Craft notebook and tools illustration */}
          <div className="relative flex items-center justify-center">
            <div className="w-16 h-20 bg-white shadow-md rounded-md border-2 border-emerald-300 p-2 flex flex-col justify-between transform -rotate-6">
              <div className="flex justify-between items-center">
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <div className="w-6 h-1 bg-gray-200 rounded"></div>
              </div>
              {/* Cute drawn star */}
              <div className="self-center text-amber-400 text-lg">⭐</div>
              <div className="w-full h-1.5 bg-emerald-100 rounded"></div>
            </div>
            {/* Floating scissors */}
            <div className="absolute -right-3 -top-1 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center shadow-sm border border-amber-300 transform rotate-12">
              <Scissors size={20} className="text-amber-600" />
            </div>
            {/* Color pencil */}
            <div className="absolute -left-2 -bottom-1 w-8 h-2.5 bg-rose-400 rounded-sm transform -rotate-45 shadow-sm border border-rose-500"></div>
          </div>
        </div>
      );

    case 'show':
      return (
        <div className="w-full h-36 bg-emerald-50/80 rounded-2xl flex items-center justify-center p-3 relative overflow-hidden border border-emerald-100 group-hover:scale-105 transition-transform duration-300">
          <div className="absolute top-2 left-2 text-amber-400 animate-bounce">
            ✨
          </div>
          <div className="absolute top-3 right-3 text-amber-400">
            ⭐
          </div>
          {/* Framed craft and golden medal illustration */}
          <div className="relative flex flex-col items-center">
            <div className="w-20 h-20 bg-white shadow-lg rounded-xl border-2 border-emerald-400 p-2 flex flex-col items-center justify-center">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-1">
                <Sprout size={22} />
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                Greeno Art
              </span>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-amber-400 text-white p-1.5 rounded-full shadow-md border-2 border-white">
              <Award size={18} />
            </div>
          </div>
        </div>
      );

    case 'water':
      return (
        <div className="w-full h-36 bg-blue-50/80 rounded-2xl flex items-center justify-center p-3 relative overflow-hidden border border-blue-100 group-hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 shadow-inner">
            <Droplets size={32} />
          </div>
        </div>
      );

    case 'plant':
      return (
        <div className="w-full h-36 bg-emerald-50/80 rounded-2xl flex items-center justify-center p-3 relative overflow-hidden border border-emerald-100 group-hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shadow-inner">
            <Sprout size={32} />
          </div>
        </div>
      );

    case 'sun':
    case 'energy':
      return (
        <div className="w-full h-36 bg-amber-50/80 rounded-2xl flex items-center justify-center p-3 relative overflow-hidden border border-amber-100 group-hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-500 shadow-inner">
            <Sun size={32} />
          </div>
        </div>
      );

    case 'search':
      return (
        <div className="w-full h-36 bg-teal-50/80 rounded-2xl flex items-center justify-center p-3 relative overflow-hidden border border-teal-100 group-hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shadow-inner">
            <Search size={32} />
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-36 bg-emerald-50 rounded-2xl flex items-center justify-center p-3">
          <Sprout size={32} className="text-emerald-500" />
        </div>
      );
  }
};
