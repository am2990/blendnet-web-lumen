
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'default',
  size = 'md'
}) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-brand-primary';
  
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative">
        <div className={`font-bold ${sizeClasses[size]} ${textColor}`}>
          <span>blend</span>
          <span className="text-brand-secondary">net</span>
        </div>
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-brand-secondary rounded-full animate-pulse" />
      </div>
    </Link>
  );
};

export default Logo;
