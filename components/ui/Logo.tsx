import React from 'react';
import logo from '../../assets/logo.png';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-auto" }) => {
  return (
    <img
      src={logo}
      alt="NAXIT Logo"
      className={className}
    />
  );
};