import React, { useMemo } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';

const DynamicSectionBackground = () => {
  const activeSection = useActiveSection();

  // Meteors array for shower effect
  const meteors = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 80}%`,
      right: `${Math.random() * 30}%`,
      duration: `${Math.random() * 4 + 3}s`,
      delay: `${Math.random() * 5}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden no-print transition-all duration-700">
      
      {/* GLOBAL CELESTIAL METEORS */}
      {meteors.map((m) => (
        <div
          key={m.id}
          className="animate-meteor"
          style={{
            top: m.top,
            right: m.right,
            '--duration': m.duration,
            '--delay': m.delay,
          }}
        />
      ))}

      {/* 1. HERO SECTION (HOME): Ringed Cyber Planet & Orbiting Moons */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          activeSection === 'home' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Giant Ringed Planet (Saturn Vibe) */}
        <div className="absolute top-[8%] right-[-5%] w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] rounded-full bg-gradient-to-tr from-cyan-900 via-indigo-950 to-cyan-500/40 border border-cyan-400/30 shadow-[0_0_80px_rgba(6,182,212,0.35)] flex items-center justify-center animate-pulse-glow">
          {/* Orbiting Planetary Ring */}
          <div className="w-[140%] h-[45px] sm:h-[70px] border-4 border-cyan-400/40 rounded-full rotate-[-28deg] shadow-[0_0_30px_#38bdf8] pointer-events-none" />
        </div>
      </div>

      {/* 2. ABOUT SECTION: Emerald Gas Giant & Orbiting Moons */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          activeSection === 'about' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Emerald Planet */}
        <div className="absolute top-[20%] left-[-8%] w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-emerald-950 via-teal-900 to-emerald-400/30 border border-emerald-400/30 shadow-[0_0_90px_rgba(16,185,129,0.35)] flex items-center justify-center">
          <div className="w-[130%] h-[50px] border-2 border-emerald-400/50 rounded-full rotate-[15deg] shadow-[0_0_20px_#34d399]" />
        </div>
        {/* Orbiting Emerald Moon */}
        <div className="absolute top-[12%] left-[18%] w-16 h-16 rounded-full bg-gradient-to-tr from-teal-800 to-emerald-300 shadow-[0_0_20px_#34d399]" />
      </div>

      {/* 3. SKILLS SECTION: Sci-Fi Portal Ring & Deep Violet Nebula */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          activeSection === 'skills' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Rotating Sci-Fi Space Gateway Ring */}
        <div className="absolute top-[15%] right-[5%] w-[400px] h-[400px] rounded-full border-4 border-dashed border-purple-500/40 shadow-[0_0_100px_rgba(168,85,247,0.3)] animate-planet-rotate flex items-center justify-center">
          <div className="w-[280px] h-[280px] rounded-full border-2 border-dotted border-purple-300/30" />
        </div>
      </div>

      {/* 4. PROJECTS SECTION: Deep Indigo Supernova Core */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          activeSection === 'projects' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Supernova Energy Core */}
        <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-500/20 blur-3xl animate-pulse" />
      </div>

      {/* 5. EXPERIENCE SECTION: Blue Ice Planet & Energy Corona */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          activeSection === 'experience' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Ice Planet */}
        <div className="absolute bottom-[10%] right-[-5%] w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-blue-950 via-indigo-900 to-sky-400/40 border border-sky-400/40 shadow-[0_0_100px_rgba(56,189,248,0.35)]">
          <div className="w-[140%] h-[60px] border-2 border-sky-300/40 rounded-full rotate-[-35deg] shadow-[0_0_25px_#38bdf8]" />
        </div>
      </div>

      {/* 6. CONTACT SECTION: Cyber Beacon Planet & Space Grid */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          activeSection === 'contact' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Cyber Teal Planet */}
        <div className="absolute bottom-[15%] left-[-5%] w-[340px] h-[340px] rounded-full bg-gradient-to-tr from-teal-950 via-cyan-900 to-teal-400/40 border border-teal-400/40 shadow-[0_0_80px_rgba(20,184,166,0.35)]" />
      </div>

    </div>
  );
};

export default DynamicSectionBackground;
