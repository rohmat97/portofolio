import React from 'react';

const BorderBeam = ({
  size = 150,
  duration = 6,
  delay = 0,
  borderWidth = 1.5,
  colorFrom = '#38bdf8',
  colorTo = '#a855f7',
}) => {
  return (
    <div
      style={{
        '--size': `${size}px`,
        '--duration': `${duration}s`,
        '--anchor': '90deg',
        '--border-width': `${borderWidth}px`,
        '--color-from': colorFrom,
        '--color-to': colorTo,
        '--delay': `-${delay}s`,
      }}
      className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(white,white)]"
    >
      <div className="absolute aspect-square w-[var(--size)] animate-border-beam bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent" />
    </div>
  );
};

export default BorderBeam;
