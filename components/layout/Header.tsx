
import React from 'react';
import { useGameState } from '../../context/GameStateContext';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { xp } = useGameState();

  return (
    <header className="flex-shrink-0 bg-dark-card border-b border-dark-border px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white truncate">{title}</h1>
      <div className="flex items-center space-x-2 bg-dark-bg px-4 py-2 rounded-full border border-dark-border">
        <span className="text-yellow-400">✨</span>
        <span className="font-bold text-lg text-white">{xp}</span>
        <span className="text-sm text-dark-text-secondary">XP</span>
      </div>
    </header>
  );
};

export default Header;
