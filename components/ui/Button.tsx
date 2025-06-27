import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-2 rounded-lg font-semibold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-card';
  
  const variantClasses = {
    primary: 'bg-brand-primary hover:bg-indigo-500 focus:ring-brand-primary text-white',
    secondary: 'bg-brand-secondary hover:bg-green-500 focus:ring-brand-secondary text-white',
    ghost: 'bg-transparent border border-dark-border hover:bg-dark-border text-dark-text-secondary',
    light: 'bg-white text-brand-primary hover:brightness-95 focus:ring-brand-primary'
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;