import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useGameState } from '../../context/GameStateContext';
import { LESSONS, CHECKPOINTS } from '../../constants';

const ComingSoon: React.FC = () => {
  const { activeLessonId, completeLesson, completeCheckpoint } = useGameState();

  const handleComplete = () => {
    if (!activeLessonId) return;

    if (LESSONS.some(l => l.id === activeLessonId)) {
      completeLesson(activeLessonId);
    } else if (CHECKPOINTS.some(c => c.id === activeLessonId)) {
      completeCheckpoint(activeLessonId);
    }
  };

  const item = LESSONS.find(l => l.id === activeLessonId) || CHECKPOINTS.find(c => c.id === activeLessonId);

  return (
    <div className="animate-slideInUp">
        <Card className="text-center">
            <div className="mb-4 text-5xl">🏗️</div>
            <h2 className="text-2xl font-bold text-white">¡Contenido en Construcción!</h2>
            <p className="text-dark-text-secondary mt-2 mb-6">
                La simulación interactiva para "{item?.title}" estará disponible próximamente.
            </p>
            <Button onClick={handleComplete} variant="secondary">
                Marcar como Completado (Temporal)
            </Button>
            <p className="text-xs text-dark-text-secondary mt-4">
                Puedes continuar para explorar la estructura completa del curso.
            </p>
        </Card>
    </div>
  );
};

export default ComingSoon;
