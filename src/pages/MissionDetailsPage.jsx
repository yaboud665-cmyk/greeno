import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ActivityDetails from './ActivityDetails';
import { missions } from '../data/missions';

const MissionDetailsPage = () => {
  const navigate = useNavigate();
  const { missionId } = useParams();

  const currentMission = missions.find(m => m.id === missionId) || missions[0];

  const handleBack = () => {
    navigate('/');
  };

  return (
    <ActivityDetails
      activity={currentMission}
      onBack={handleBack}
    />
  );
};

export default MissionDetailsPage;
