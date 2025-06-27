import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useGameState } from '../../context/GameStateContext';
import { LESSONS } from '../../constants';
import Notification from '../ui/Notification';

const IslandDilemma: React.FC = () => {
  const { completeLesson } = useGameState();
  const [choice, setChoice] = useState<'shells' | 'pearls' | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const lesson = LESSONS.find(l => l.id === '1.1')!;

  const handleChoice = (c: 'shells' | 'pearls') => {
    setChoice(c);
  };

  const handleComplete = () => {
    completeLesson('1.1');
    setShowNotification(true);
  };

  return (
    <div className="space-y-6 animate-slideInUp">
      {showNotification && <Notification message={`+${lesson.reward.xp} XP`} icon={lesson.reward.badge.icon} onClose={() => setShowNotification(false)} />}
      
      <Card>
        <h2 className="text-2xl font-bold text-white mb-2">El Qué y el Porqué</h2>
        <p className="text-dark-text-secondary mb-4 italic">{lesson.concept}</p>
        <div className="prose prose-sm md:prose-base prose-invert max-w-none text-dark-text-secondary space-y-4" dangerouslySetInnerHTML={{ __html: lesson.explanatoryContent }} />
      </Card>

      <Card>
        <h2 className="text-2xl font-bold text-white mb-2">Tarea Práctica: El Dilema de la Isla</h2>
        <p className="text-dark-text-secondary mb-4">Estás en una isla con otros 10 habitantes. Deben elegir una moneda para comerciar. ¿Qué eliges?</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => handleChoice('shells')}
            className={`flex-1 p-6 rounded-lg border-2 transition-all ${choice === 'shells' ? 'border-brand-primary bg-indigo-900/30' : 'border-dark-border hover:bg-dark-border'}`}
          >
            <h3 className="text-xl font-bold text-white">🐚 Conchas Marinas</h3>
            <p className="text-dark-text-secondary">Infinitas, fáciles de encontrar en la playa.</p>
          </button>
          <button
            onClick={() => handleChoice('pearls')}
            className={`flex-1 p-6 rounded-lg border-2 transition-all ${choice === 'pearls' ? 'border-brand-primary bg-indigo-900/30' : 'border-dark-border hover:bg-dark-border'}`}
          >
            <h3 className="text-xl font-bold text-white">⚫ Perlas Negras</h3>
            <p className="text-dark-text-secondary">Solo existen 100 en toda la isla.</p>
          </button>
        </div>
      </Card>

      {choice && (
        <Card>
          <h3 className="text-xl font-bold text-white mb-3">Consecuencia de tu Decisión</h3>
          {choice === 'shells' && (
            <div>
              <p className="text-white">Al principio, las conchas funcionan. Pero pronto, todos pasan más tiempo buscando conchas que pescando o construyendo. Hay tantas conchas que cada una compra menos pescado. Esto se llama <span className="font-bold text-red-400">inflación</span>.</p>
            </div>
          )}
          {choice === 'pearls' && (
            <div>
              <p className="text-white">Nadie puede crear más perlas. A medida que la economía de la isla crece (más pescado, más cocos), el valor de cada perla se mantiene estable o incluso aumenta. Esto es <span className="font-bold text-green-400">escasez</span> y actúa como una reserva de valor.</p>
            </div>
          )}
          <div className="mt-4 p-4 bg-dark-bg rounded-lg border border-dark-border">
            <p className="font-mono text-lg text-brand-secondary">💡 Conexión: Bitcoin se parece más a las Perlas Negras (escaso). Tu dinero en el banco, a las Conchas Marinas (puede imprimirse más).</p>
          </div>
          <div className="mt-6 text-center">
            <Button onClick={handleComplete} variant="secondary">
              Completar Lección (+{lesson.reward.xp} XP)
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default IslandDilemma;
