import  { useState } from 'react';
import greenoImg from '../assets/greeno.png';
import { ArrowLeft, ChevronDown, ChevronUp, Sparkles, BookOpen, Lightbulb } from 'lucide-react';
import { HeaderIcon, MissionScene, StepGraphic } from '../components/MissionIllustrations';

export const ActivityDetails = ({
  activity,
  onBack
}) => {
  const [showFullExplanation, setShowFullExplanation] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);

  // Determine dynamic grid columns based on number of steps
  const getGridColsClass = (stepsCount) => {
    if (stepsCount === 4) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    if (stepsCount === 2) return "grid-cols-1 sm:grid-cols-2";
    if (stepsCount >= 5) return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5";
    return "grid-cols-1 md:grid-cols-3";
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-3 sm:p-6 lg:p-8">
      {/* Back button */}
      <div className="mb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-[#1b834a] hover:text-[#126839] font-black text-base sm:text-lg cursor-pointer transition-colors"
        >
          <ArrowLeft size={20} strokeWidth={2.8} />
          <span>Back</span>
        </button>
      </div>

      {/* Outer Card Container */}
      <div className="bg-[#f8fdf9] rounded-[28px] sm:rounded-[36px] border border-[#e5f5ea] p-4 sm:p-6 md:p-8 shadow-xs">
        
        {/* Header row: Icon + Title on left, Speech bubble + Mascot on right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          {/* Title & Icon */}
          <div className="flex items-center gap-3.5 self-start sm:self-auto">
            {/* Dynamic Header Icon matching the mission category */}
            <HeaderIcon type={activity.headerIcon} />

            <div>
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#1b834a] bg-[#eaf7ee] px-3 py-0.5 rounded-full inline-block mb-1">
                {activity.category}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1f3a2b] tracking-tight leading-tight">
                {activity.title}
              </h1>
            </div>
          </div>

          {/* Speech bubble + Greeno mascot */}
          <div className="flex items-center gap-2.5 self-end sm:self-auto">
            {/* Speech bubble */}
            <div className="relative bg-[#ebf7ee] border-2 border-[#ccecd5] text-[#1b6b3e] px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-sm sm:text-base font-extrabold shadow-2xs leading-snug text-center">
              <div>{activity.mascotQuoteLine1}</div>
              <div>{activity.mascotQuoteLine2}</div>
              <div className="hidden sm:block absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[8px] border-l-[#ebf7ee]"></div>
            </div>

            {/* Mascot */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 animate-bounce" style={{ animationDuration: '3s' }}>
              <img
                src={greenoImg}
                alt="Greeno character"
                className="w-full h-full object-contain filter drop-shadow-xs"
              />
            </div>
          </div>
        </div>

        {/* MISSION IMAGE & STORY CARD */}
        <div className="bg-white rounded-[24px] sm:rounded-[30px] border border-[#e8f3ec] p-4 sm:p-6 mb-6 shadow-xs">
          <div className="grid md:grid-cols-12 gap-5 items-center">
            
            {/* Mission Image Area */}
            <div className="md:col-span-5 w-full">
              <div className="relative w-full h-48 sm:h-56 bg-gradient-to-br from-[#ebf7ee] to-[#dcf2e3] rounded-2xl sm:rounded-3xl border-2 border-[#b8e2c5] overflow-hidden flex items-center justify-center shadow-inner group">
                <div className="absolute top-3 left-3 z-10 bg-white/95 text-[#1b834a] text-xs font-black px-3 py-1 rounded-full border border-emerald-200 shadow-2xs flex items-center gap-1.5">
                  <Sparkles size={14} className="text-amber-500" />
                  <span>Mission Photo</span>
                </div>

                {activity.imageUrl ? (
                  <img
                    src={activity.imageUrl}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <MissionScene type={activity.id} title={activity.title} />
                )}
              </div>
            </div>

            {/* Mission Explanation & Story */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2 text-[#1b834a]">
                <BookOpen size={20} />
                <h3 className="font-black text-lg sm:text-xl text-[#1f3a2b]">
                  About This Mission
                </h3>
              </div>

              <p className="text-sm sm:text-base font-semibold text-gray-700 leading-relaxed mb-3.5">
                {activity.overview}
              </p>

              {/* Toggle to see more details & tips */}
              <button
                onClick={() => setShowFullExplanation(!showFullExplanation)}
                className="self-start inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-[#1b834a] hover:text-[#126839] bg-[#ebf7ee] hover:bg-[#def0e3] px-4 py-2 rounded-xl transition-all cursor-pointer"
              >
                <Lightbulb size={16} className="text-amber-500" />
                <span>{showFullExplanation ? "Hide Details" : "Read Full Story & Fun Facts"}</span>
                {showFullExplanation ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {/* Expanded details */}
              {showFullExplanation && (
                <div className="mt-3.5 p-4 bg-[#f5fbf7] rounded-2xl border border-[#d8eedf] space-y-2.5 text-xs sm:text-sm animate-fadeIn">
                  <div className="text-[#1a5e37] font-bold leading-relaxed flex items-start gap-2">
                    <span className="text-lg flex-shrink-0">💡</span>
                    <span>{activity.funFact}</span>
                  </div>
                  
                  <div className="pt-2 border-t border-[#e2f3e8]">
                    <span className="font-black text-gray-800 block mb-1.5 text-xs sm:text-sm">
                      ✂️ What you'll need:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activity.materials.map((item, idx) => (
                        <span key={idx} className="bg-white border border-[#cdebd5] text-gray-800 px-2.5 py-1 rounded-xl text-xs sm:text-sm font-bold">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Inner White Card: Dynamic Steps */}
        <div className="bg-white rounded-[24px] sm:rounded-[30px] border border-[#e8f3ec] p-5 sm:p-7 md:p-8 shadow-xs">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl sm:text-2xl font-black text-[#1e3b2c] text-left">
              {activity.stepsHeadline || `Follow these ${activity.steps.length} simple steps:`}
            </h2>
            <span className="text-xs sm:text-sm font-extrabold text-[#1b834a] bg-[#ebf7ee] px-3 py-1 rounded-full hidden sm:inline-block">
              Click a step for more guidance!
            </span>
          </div>

          {/* Dynamic Step Cards Grid - Flexible for 2, 3, 4 or more steps */}
          <div className={`grid gap-4 sm:gap-5 ${getGridColsClass(activity.steps.length)}`}>
            {activity.steps.map((step) => {
              const isSelected = selectedStep === step.number;
              return (
                <div 
                  key={step.number}
                  onClick={() => setSelectedStep(isSelected ? null : step.number)}
                  className={`bg-white rounded-2xl sm:rounded-3xl border p-4 sm:p-5 flex flex-col items-center text-center transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#1b834a] ring-2 ring-[#1b834a]/20 shadow-sm'
                      : 'border-[#edf3ee] hover:border-[#b8e2c5] hover:shadow-xs'
                  }`}
                >
                  <div className="w-full flex items-center justify-between mb-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1b834a] text-white text-xs sm:text-sm font-black flex items-center justify-center">
                      {step.number}
                    </div>
                    <span className="text-xs font-black text-[#1b834a]">
                      {isSelected ? "▲ Less" : "▼ Details"}
                    </span>
                  </div>
                  
                  {/* Dynamic Step SVG Graphic */}
                  <div className="w-full h-32 flex items-center justify-center mb-3">
                    <StepGraphic type={step.type} />
                  </div>

                  <p className="text-base sm:text-lg font-black text-[#2d4738] leading-snug">
                    {step.text}
                  </p>

                  {isSelected && (
                    <div className="mt-3.5 pt-2.5 border-t border-gray-100 text-xs sm:text-sm text-gray-700 font-semibold text-left bg-emerald-50/50 p-2.5 rounded-xl">
                      {step.details}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ActivityDetails;
