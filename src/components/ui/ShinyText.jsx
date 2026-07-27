import React from 'react';

const ShinyText = ({ children, className = '', speed = 3 }) => {
  return (
    <span
      className={`relative inline-block bg-gradient-to-r from-cyan-300 via-indigo-200 to-purple-300 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer ${className}`}
      style={{ animationDuration: `${speed}s` }}
    >
      {children}
    </span>
  );
};

export default ShinyText;
