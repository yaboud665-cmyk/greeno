import React, { useState } from 'react';
import { missions } from './data/missions';
import ActivityDetails from './pages/ActivityDetails';
import LightNavbar from './components/LightNavbar';

export default function App() {
  const [activeMissionId, setActiveMissionId] = useState(missions[0].id);

  const currentMission = missions.find(m => m.id === activeMissionId) || missions[0];

  const handleBack = () => {
    const currentIndex = missions.findIndex(m => m.id === activeMissionId);
    if (currentIndex > 0) {
      setActiveMissionId(missions[currentIndex - 1].id);
    } else {
      alert("You are at the first activity!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0fdf4] via-[#eaf7ee] to-[#f4fbf7] text-gray-800">
      {/* Light Clean Navbar at the top to switch between missions */}
      <LightNavbar
        activeMissionId={activeMissionId}
        onSelectMission={setActiveMissionId}
      />

      {/* Same Single Component Reused for all missions */}
      <main className="py-4 px-2 sm:px-4">
        <ActivityDetails
          key={currentMission.id}
          activity={currentMission}
          onBack={handleBack}
        />
      </main>
    </div>
  );
}
