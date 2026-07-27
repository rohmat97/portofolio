import React from 'react';

const BigMeteor = ({ delay = '0s' }) => {
  return (
    <div
      className="animate-big-meteor top-[-100px] right-[-100px] no-print z-0"
      style={{ '--delay': delay, '--duration': '5s' }}
    >
      {/* 500x500px Fiery Meteor Container */}
      <div className="relative w-[500px] h-[500px] flex items-center justify-center pointer-events-none select-none">
        
        {/* Blazing Fire Tail Stream */}
        <div className="absolute top-[-50px] right-[-100px] w-[600px] h-[120px] bg-gradient-to-l from-transparent via-amber-500/60 to-orange-500/80 blur-md rounded-full rotate-[-25deg]" />
        <div className="absolute top-[-20px] right-[-80px] w-[500px] h-[60px] bg-gradient-to-l from-transparent via-cyan-400/70 to-blue-500/90 blur-sm rounded-full rotate-[-25deg]" />

        {/* 500x500px Outer Flaming Corona Glow */}
        <div className="absolute w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-amber-500/40 via-orange-600/30 to-cyan-400/30 blur-2xl animate-pulse" />

        {/* 500x500px Giant Asteroid Rock Sphere */}
        <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#2a1708] via-[#100702] to-[#040810] border-2 border-amber-500/50 shadow-[0_0_80px_rgba(245,158,11,0.6),inset_-30px_-30px_60px_rgba(0,0,0,0.9)] relative overflow-hidden flex items-center justify-center">
          {/* Surface Craters & Magma Veins */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-400/40 via-orange-500/20 to-transparent mix-blend-screen" />
          <div className="absolute top-8 left-12 w-20 h-20 rounded-full border-4 border-amber-900/60 bg-amber-950/40 shadow-inner" />
          <div className="absolute bottom-12 right-14 w-28 h-28 rounded-full border-4 border-orange-950/70 bg-amber-950/50 shadow-inner" />
          <div className="absolute top-1/2 left-1/3 w-14 h-14 rounded-full border-2 border-amber-800/40 bg-black/60" />
        </div>

      </div>
    </div>
  );
};

export default BigMeteor;
