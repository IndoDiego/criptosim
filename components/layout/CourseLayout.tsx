import React from 'react';
import { useGameState } from '../../context/GameStateContext';
import { LESSONS, CHECKPOINTS } from '../../constants';
import Sidebar from './Sidebar';
import Header from './Header';
import IslandDilemma from '../lessons/IslandDilemma';
import BlockBuilder from '../lessons/BlockBuilder';
import WalletDrill from '../lessons/WalletDrill';
import InvestorPitch from '../lessons/InvestorPitch';
import Phase1Checkpoint from '../checkpoint/Phase1Checkpoint';
import WelcomeScreen from './WelcomeScreen';
import ComingSoon from '../common/ComingSoon';

const lessonComponents: { [key: string]: React.FC } = {
  '1.1': IslandDilemma,
  '1.2': BlockBuilder,
  '1.3': WalletDrill,
  '1.4': InvestorPitch,
  'C1': Phase1Checkpoint,
};

const CourseLayout: React.FC = () => {
  const { activeLessonId } = useGameState();

  const renderContent = () => {
    if (!activeLessonId) {
      return <WelcomeScreen />;
    }
    const ActiveComponent = lessonComponents[activeLessonId] || ComingSoon;
    return <ActiveComponent />;
  };

  const activeContent = activeLessonId ? LESSONS.find(l => l.id === activeLessonId) || CHECKPOINTS.find(c => c.id === activeLessonId) : null;
  const title = activeContent ? `${activeContent.id}: ${activeContent.title}` : 'CryptoSim: The Learning Ledger';

  return (
    <div className="flex h-screen bg-dark-bg font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={title} />
        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CourseLayout;
