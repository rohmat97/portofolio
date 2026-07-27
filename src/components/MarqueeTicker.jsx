import React from 'react';

const MarqueeTicker = () => {
  const items = [
    'REACT NATIVE',
    'SPRING BOOT',
    'NUXT 3',
    'TYPESCRIPT',
    'NEXT.JS',
    'MICROSERVICES',
    'AWS & GCP',
    'VITEST & JEST',
    'ZOD TYPE-SAFETY',
    'FINTECH ARCHITECTURE',
  ];

  return (
    <div className="w-full bg-slate-950/80 border-y border-slate-900 py-3 overflow-hidden no-print">
      <div className="flex w-max animate-marquee space-x-8">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-8">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-slate-400 hover:text-cyan-400 transition-colors uppercase">
              {item}
            </span>
            <span className="text-cyan-500 font-mono text-xs">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
