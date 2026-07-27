import React, { useEffect, useState } from 'react';

const MouseSpotlight = () => {
  const [position, setPosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 no-print"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(56, 189, 248, 0.08), transparent 80%)`,
      }}
    />
  );
};

export default MouseSpotlight;
