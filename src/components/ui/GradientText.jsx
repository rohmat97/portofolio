import React from 'react';

const GradientText = ({ children, className = '', colors = ['#38bdf8', '#a855f7', '#34d399'], animationSpeed = 4 }) => {
  const gradientString = `linear-gradient(to right, ${colors.join(', ')})`;

  return (
    <span
      className={`inline-block bg-clip-text text-transparent animate-gradient-text ${className}`}
      style={{
        backgroundImage: gradientString,
        backgroundSize: '300% 100%',
        animationDuration: `${animationSpeed}s`,
      }}
    >
      {children}
    </span>
  );
};

export default GradientText;
