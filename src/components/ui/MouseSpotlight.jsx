import React, { useEffect, useRef } from 'react';

const MouseSpotlight = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    let rafId = null;
    let latestX = -500;
    let latestY = -500;

    const handleMouseMove = (e) => {
      latestX = e.clientX;
      latestY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          if (spotlightRef.current) {
            spotlightRef.current.style.background = `radial-gradient(600px at ${latestX}px ${latestY}px, rgba(56, 189, 248, 0.08), transparent 80%)`;
          }
          rafId = null;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 no-print"
      style={{
        background: `radial-gradient(600px at -500px -500px, rgba(56, 189, 248, 0.08), transparent 80%)`,
      }}
    />
  );
};

export default MouseSpotlight;
