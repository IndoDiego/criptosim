import React from 'react';
import { useGameState } from './context/GameStateContext';
import LandingPage from './components/landing/LandingPage';
import Paywall from './components/landing/Paywall';
import CourseLayout from './components/layout/CourseLayout';

const App: React.FC = () => {
  const { appStatus } = useGameState();

  switch (appStatus) {
    case 'paywall':
      return <Paywall />;
    case 'course':
      return <CourseLayout />;
    case 'landing':
    default:
      return <LandingPage />;
  }
};

export default App;