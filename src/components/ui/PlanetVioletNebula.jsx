import React from 'react';

const PlanetVioletNebula = () => {
  return (
    <div className="relative w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] flex items-center justify-center pointer-events-none select-none">
      {/* Outer Nebula Atmosphere Glow */}
      <div className="absolute inset-0 rounded-full bg-purple-600/25 blur-3xl animate-pulse" />
      
      {/* 3D Planet Sphere */}
      <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#17052c] via-[#3b0764] to-[#a855f7] shadow-[inset_-30px_-30px_60px_rgba(0,0,0,0.85),0_0_80px_rgba(168,85,247,0.5)] border border-purple-400/40 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-300/25 via-transparent to-transparent" />
      </div>

      {/* Rotating Orbiting Cosmic Belt */}
      <div className="absolute w-[150%] h-[80px] border-4 border-dashed border-purple-400/50 rounded-full rotate-[-20deg] shadow-[0_0_40px_#c084fc] animate-planet-rotate" />
    </div>
  );
};

export default PlanetVioletNebula;
