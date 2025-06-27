export interface Lesson {
  id: string;
  phase: number;
  title: string;
  concept: string;
  explanatoryContent: string;
  reward: {
    xp: number;
    badge: Badge;
  };
}

export interface Checkpoint {
  id: string;
  phase: number;
  title: string;
  mission: string;
  reward: {
    xp: number;
    trophy: Trophy;
  };
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Trophy {
  id:string;
  name: string;
  icon: string;
  description: string;
}

export type ProgressStatus = 'locked' | 'unlocked' | 'completed';

export interface Progress {
  [id: string]: ProgressStatus;
}

export type AppStatus = 'landing' | 'paywall' | 'course';

export interface GameState {
  progress: Progress;
  xp: number;
  badges: Badge[];
  trophies: Trophy[];
  activeLessonId: string | null;
  appStatus: AppStatus;
}

export interface GameStateContextType extends GameState {
  completeLesson: (lessonId: string) => void;
  completeCheckpoint: (checkpointId: string) => void;
  setActiveLessonId: (id: string | null) => void;
  loginAndShowPaywall: () => void;
  confirmPaymentAndStartCourse: () => void;
}