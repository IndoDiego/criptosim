import React, { createContext, useState, useContext, ReactNode } from 'react';
import type { GameState, GameStateContextType, Progress, AppStatus } from '../types';
import { LESSONS, CHECKPOINTS, COURSE_PROGRESSION } from '../constants';

const defaultProgress: Progress = {};
COURSE_PROGRESSION.forEach((id, index) => {
  defaultProgress[id] = index === 0 ? 'unlocked' : 'locked';
});

const defaultState: GameState = {
  progress: defaultProgress,
  xp: 0,
  badges: [],
  trophies: [],
  activeLessonId: null,
  appStatus: 'landing',
};

const GameStateContext = createContext<GameStateContextType | undefined>(undefined);

export const GameStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>(defaultState);

  const setActiveLessonId = (id: string | null) => {
    setGameState(prev => ({ ...prev, activeLessonId: id }));
  };
  
  const completeLesson = (lessonId: string) => {
    setGameState(prev => {
      const lesson = LESSONS.find(l => l.id === lessonId);
      const currentItemIndex = COURSE_PROGRESSION.findIndex(id => id === lessonId);
        
      if (!lesson || currentItemIndex === -1 || prev.progress[lessonId] === 'completed') return prev;

      const newProgress = { ...prev.progress, [lessonId]: 'completed' as const };
      
      let nextItemId: string | null = null;
      if (currentItemIndex + 1 < COURSE_PROGRESSION.length) {
          nextItemId = COURSE_PROGRESSION[currentItemIndex + 1];
          newProgress[nextItemId] = 'unlocked';
      }

      const newBadges = prev.badges.some(b => b.id === lesson.reward.badge.id) 
        ? prev.badges 
        : [...prev.badges, lesson.reward.badge];

      return {
        ...prev,
        progress: newProgress,
        xp: prev.xp + lesson.reward.xp,
        badges: newBadges,
        activeLessonId: nextItemId
      };
    });
  };
  
  const completeCheckpoint = (checkpointId: string) => {
    setGameState(prev => {
      const checkpoint = CHECKPOINTS.find(c => c.id === checkpointId);
      const currentItemIndex = COURSE_PROGRESSION.findIndex(id => id === checkpointId);
        
      if (!checkpoint || currentItemIndex === -1 || prev.progress[checkpointId] === 'completed') return prev;
      
      const newProgress = { ...prev.progress, [checkpointId]: 'completed' as const };
      
      let nextItemId: string | null = null;
      if (currentItemIndex + 1 < COURSE_PROGRESSION.length) {
          nextItemId = COURSE_PROGRESSION[currentItemIndex + 1];
          newProgress[nextItemId] = 'unlocked';
      }
      
      const newTrophies = prev.trophies.some(t => t.id === checkpoint.reward.trophy.id)
        ? prev.trophies
        : [...prev.trophies, checkpoint.reward.trophy];
      
      return {
        ...prev,
        progress: newProgress,
        xp: prev.xp + checkpoint.reward.xp,
        trophies: newTrophies,
        activeLessonId: null, 
      };
    });
  };

  const loginAndShowPaywall = () => {
    setGameState(prev => ({ ...prev, appStatus: 'paywall' }));
  };

  const confirmPaymentAndStartCourse = () => {
    setGameState(prev => ({ ...prev, appStatus: 'course' }));
  };


  const value = { ...gameState, completeLesson, completeCheckpoint, setActiveLessonId, loginAndShowPaywall, confirmPaymentAndStartCourse };

  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  );
};

export const useGameState = (): GameStateContextType => {
  const context = useContext(GameStateContext);
  if (context === undefined) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }
  return context;
};