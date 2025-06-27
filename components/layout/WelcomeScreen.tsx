
import React from 'react';
import { useGameState } from '../../context/GameStateContext';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { LESSONS } from '../../constants';

const WelcomeScreen: React.FC = () => {
  const { setActiveLessonId } = useGameState();

  const handleStartCourse = () => {
    setActiveLessonId(LESSONS[0].id);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center animate-fadeIn">
      <Card className="max-w-2xl">
        <div className="flex flex-col items-center">
            <svg className="w-20 h-20 text-brand-primary mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <h1 className="text-4xl font-black text-white mb-2">Bienvenido a CryptoSim</h1>
            <p className="text-lg text-dark-text-secondary mb-6">
                Tu viaje para dominar los fundamentos de la criptomoneda comienza aquí. Aprende haciendo, no solo leyendo.
            </p>
            <Button onClick={handleStartCourse} variant="primary" className="animate-pulseGlow">
                Comenzar Fase 1
            </Button>
        </div>
      </Card>
    </div>
  );
};

export default WelcomeScreen;
