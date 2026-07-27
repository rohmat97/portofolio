import React from 'react';

const PlanetEmeraldMatrix = () => {
  return (
    <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] flex items-center justify-center pointer-events-none select-none">
      {/* Atmosphere Glow */}
      <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-3xl animate-pulse" />
      
      {/* 3D Planet Sphere */}
      <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#011a10] via-[#02492d] to-[#10b981] shadow-[inset_-30px_-30px_60px_rgba(0,0,0,0.85),0_0_70px_rgba(16,185,129,0.5)] border border-emerald-400/40 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-300/20 via-transparent to-transparent" />
      </div>

      {/* Orbiting Moon 1 */}
      <div className="absolute -top-6 left-12 w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-950 to-teal-400 border border-emerald-300/40 shadow-[0_0_25px_#34d399]" />
      
      {/* Orbiting Moon 2 */}
      <div className="absolute bottom-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-tr from-teal-950 to-emerald-300 border border-emerald-400/40 shadow-[0_0_18px_#34d399]" />
    </div>
  );
};

export default PlanetEmeraldMatrix;
