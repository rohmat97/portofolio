import React, { useMemo } from 'react';

const StarBackground = () => {
  // Generate 90 bright, vibrant sparkling stars & constellations
  const stars = useMemo(() => {
    return Array.from({ length: 90 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 2.5}px`,
      duration: `${Math.random() * 2.5 + 1.5}s`,
      delay: `${Math.random() * 4}s`,
      color: i % 3 === 0 ? '#38bdf8' : i % 4 === 0 ? '#c084fc' : i % 7 === 0 ? '#34d399' : '#ffffff',
      isSpecial: i % 12 === 0, // 4-point sparkle star ✦
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden no-print">
      {/* Sparkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star ${star.isSpecial ? 'special-star' : ''}`}
          style={{
            top: star.top,
            left: star.left,
            width: star.isSpecial ? 'auto' : star.size,
            height: star.isSpecial ? 'auto' : star.size,
            backgroundColor: star.isSpecial ? 'transparent' : star.color,
            boxShadow: star.isSpecial ? 'none' : `0 0 10px ${star.color}, 0 0 18px ${star.color}`,
            '--duration': star.duration,
            '--delay': star.delay,
            color: star.color,
          }}
        >
          {star.isSpecial ? '✦' : null}
        </div>
      ))}

      {/* Dynamic Shooting Stars */}
      <div className="shooting-star top-[10%] right-[5%] [--delay:0s]" />
      <div className="shooting-star top-[35%] right-[25%] [--delay:3s]" />
      <div className="shooting-star top-[65%] right-[15%] [--delay:6s]" />
      <div className="shooting-star top-[85%] right-[40%] [--delay:9s]" />
    </div>
  );
};

export default StarBackground;
