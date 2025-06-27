
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-dark-card border border-dark-border rounded-xl p-6 shadow-lg animate-fadeIn ${className}`}>
      {children}
    </div>
  );
};

export default Card;
