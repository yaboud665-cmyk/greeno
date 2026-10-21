import  { createContext, useContext, useState, useEffect } from 'react';

const MissionContext = createContext();

export const useMissions = () => {
  const context = useContext(MissionContext);
  if (!context) {
    throw new Error('useMissions must be used within a MissionProvider');
  }
  return context;
};

export const MissionProvider = ({ children }) => {
  const [totalXP, setTotalXP] = useState(() => {
    const saved = localStorage.getItem('greeno_total_xp');
    return saved !== null ? parseInt(saved, 10) : 40;
  });

  const [completedMissions, setCompletedMissions] = useState(() => {
    const saved = localStorage.getItem('greeno_completed_missions');
    return saved ? JSON.parse(saved) : [];
  });

  const [lastCompletedReward, setLastCompletedReward] = useState(() => {
    const saved = localStorage.getItem('greeno_last_reward');
    return saved ? JSON.parse(saved) : null;
  });

  const studentClass = "Class 4A";

  useEffect(() => {
    localStorage.setItem('greeno_total_xp', totalXP.toString());
  }, [totalXP]);

  useEffect(() => {
    localStorage.setItem('greeno_completed_missions', JSON.stringify(completedMissions));
  }, [completedMissions]);

  useEffect(() => {
    if (lastCompletedReward) {
      localStorage.setItem('greeno_last_reward', JSON.stringify(lastCompletedReward));
    }
  }, [lastCompletedReward]);

  const completeMission = (missionId, points) => {
    const isAlreadyDone = completedMissions.includes(missionId);
    if (!isAlreadyDone) {
      setTotalXP(prev => prev + points);
      setCompletedMissions(prev => [...prev, missionId]);
    }
    setLastCompletedReward({
      missionId,
      points,
      timestamp: Date.now()
    });
  };

  const isMissionCompleted = (missionId) => {
    return completedMissions.includes(missionId);
  };

  const resetProgress = () => {
    setTotalXP(40);
    setCompletedMissions([]);
    setLastCompletedReward(null);
    localStorage.removeItem('greeno_total_xp');
    localStorage.removeItem('greeno_completed_missions');
    localStorage.removeItem('greeno_last_reward');
  };

  // Calculate Level based on XP
  const getLevelInfo = (xp) => {
    if (xp >= 200) return { level: 4, title: "Earth Hero 🌍", nextAt: 300, progress: 100 };
    if (xp >= 120) return { level: 3, title: "Eco Champion 🌟", nextAt: 200, progress: Math.round(((xp - 120) / 80) * 100) };
    if (xp >= 60) return { level: 2, title: "Green Guardian 🛡️", nextAt: 120, progress: Math.round(((xp - 60) / 60) * 100) };
    return { level: 1, title: "Sprout Explorer 🌱", nextAt: 60, progress: Math.round((xp / 60) * 100) };
  };

  const levelInfo = getLevelInfo(totalXP);

  return (
    <MissionContext.Provider
      value={{
        totalXP,
        studentClass,
        completedMissions,
        completeMission,
        isMissionCompleted,
        resetProgress,
        levelInfo,
        lastCompletedReward
      }}
    >
      {children}
    </MissionContext.Provider>
  );
};
