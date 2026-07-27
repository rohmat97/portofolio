import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('.glass-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      {/* Small Glowing Center Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-cyan-400 pointer-events-none z-[9999] transition-transform duration-75 no-print"
        style={{
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0) scale(${isHovered ? 1.8 : 1})`,
          boxShadow: '0 0 10px #38bdf8, 0 0 20px #38bdf8',
        }}
      />

      {/* Outer Magnetic Ring Follower */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-cyan-400/60 pointer-events-none z-[9998] transition-all duration-300 ease-out no-print ${
          isHovered ? 'w-14 h-14 bg-cyan-500/10 border-cyan-400 shadow-lg shadow-cyan-500/20' : 'w-9 h-9'
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovered ? 28 : 18)}px, ${position.y - (isHovered ? 28 : 18)}px, 0)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
