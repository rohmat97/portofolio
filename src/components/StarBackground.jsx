import React, { useMemo } from 'react';

const StarBackground = () => {
  // Generate 70 random sparkling stars
  const stars = useMemo(() => {
    return Array.from({ length: 70 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2.5 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.7 + 0.3,
      color: i % 4 === 0 ? '#38bdf8' : i % 5 === 0 ? '#c084fc' : '#ffffff',
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden no-print">
      {/* Sparkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            boxShadow: `0 0 6px ${star.color}`,
            '--duration': star.duration,
            '--delay': star.delay,
          }}
        />
      ))}

      {/* Periodic Shooting Stars */}
      <div className="shooting-star top-[15%] right-[10%] [--delay:0s]" />
      <div className="shooting-star top-[40%] right-[30%] [--delay:4s]" />
      <div className="shooting-star top-[70%] right-[20%] [--delay:8s]" />
    </div>
  );
};

export default StarBackground;
