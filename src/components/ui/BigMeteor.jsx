import React from 'react';

const BigMeteor = ({ delay = '0s' }) => {
  return (
    <div
      className="animate-big-meteor top-[-150px] right-[-150px] no-print z-0"
      style={{ '--delay': delay, '--duration': '5s' }}
    >
      {/* REAL 500x500px FLAMING METEOR ASTEROID */}
      <div className="relative w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] flex items-center justify-center pointer-events-none select-none">
        
        {/* Blazing Fire Tail Particle Stream */}
        <div className="absolute top-[80px] right-[-60px] w-[550px] h-[140px] bg-gradient-to-l from-transparent via-amber-500/80 to-red-600/90 blur-md rounded-full rotate-[-35deg] shadow-[0_0_50px_#f97316]" />
        <div className="absolute top-[100px] right-[-40px] w-[450px] h-[70px] bg-gradient-to-l from-transparent via-yellow-300 to-amber-500 blur-sm rounded-full rotate-[-35deg]" />

        {/* Real Burning Magma Asteroid Rock Core */}
        <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full bg-gradient-to-tr from-[#1a0800] via-[#5c1d00] to-[#f97316] shadow-[0_0_100px_#f97316,0_0_160px_#ef4444,inset_-35px_-35px_70px_rgba(0,0,0,0.95)] border-2 border-amber-400/60 overflow-hidden flex items-center justify-center">
          
          {/* Scorched Cratering & Molten Magma Veins */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#fde047_0%,#f97316_30%,#7c2d12_70%,#000000_100%)] mix-blend-hard-light opacity-90" />
          
          {/* Molten Magma Sparks & Vein Details */}
          <div className="absolute top-10 left-12 w-24 h-24 rounded-full border-4 border-amber-950/80 bg-amber-900/60 shadow-inner rotate-12" />
          <div className="absolute bottom-12 right-10 w-32 h-32 rounded-full border-4 border-red-950/90 bg-orange-950/70 shadow-inner" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full border-2 border-yellow-500/50 bg-amber-500/30 blur-[1px]" />
          
          {/* Atmospheric Entry Shockwave Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/30 via-orange-500/20 to-transparent animate-pulse" />
        </div>

        {/* Trailing Fire Embers */}
        <div className="absolute top-[160px] right-[100px] w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_15px_#fde047] animate-ping" />
        <div className="absolute top-[220px] right-[180px] w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_12px_#f97316] animate-ping" />
        <div className="absolute top-[280px] right-[260px] w-5 h-5 rounded-full bg-red-500 shadow-[0_0_20px_#ef4444] animate-ping" />

      </div>
    </div>
  );
};

export default BigMeteor;
