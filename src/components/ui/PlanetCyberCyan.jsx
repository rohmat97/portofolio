import React from 'react';

const PlanetCyberCyan = () => {
  return (
    <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] flex items-center justify-center pointer-events-none select-none">
      {/* Outer Atmosphere Glow */}
      <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
      
      {/* 3D Planet Sphere */}
      <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#031525] via-[#073b4c] to-[#06b6d4] shadow-[inset_-25px_-25px_50px_rgba(0,0,0,0.8),0_0_60px_rgba(6,182,212,0.5)] border border-cyan-400/40 relative overflow-hidden flex items-center justify-center">
        {/* Surface Texture Swirls */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-300/20 via-transparent to-transparent mix-blend-overlay" />
        <div className="absolute -top-10 -left-10 w-full h-full rounded-full border-[12px] border-cyan-400/10 blur-sm" />
      </div>

      {/* Orbiting Neon Planetary Ring */}
      <div className="absolute w-[150%] h-[60px] sm:h-[90px] border-[6px] border-cyan-400/60 rounded-full rotate-[-28deg] shadow-[0_0_35px_#38bdf8,inset_0_0_20px_#38bdf8] pointer-events-none" />
      <div className="absolute w-[155%] h-[70px] sm:h-[100px] border-2 border-cyan-300/30 rounded-full rotate-[-28deg] blur-[1px]" />
    </div>
  );
};

export default PlanetCyberCyan;
