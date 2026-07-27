import React, { useMemo } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import PlanetCyberCyan from './PlanetCyberCyan';
import PlanetEmeraldMatrix from './PlanetEmeraldMatrix';
import PlanetVioletNebula from './PlanetVioletNebula';

const DynamicSectionBackground = () => {
  const activeSection = useActiveSection();

  // Meteors array for shower effect
  const meteors = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 80}%`,
      right: `${Math.random() * 35}%`,
      duration: `${Math.random() * 4 + 3}s`,
      delay: `${Math.random() * 5}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden no-print transition-all duration-700">
      
      {/* GLOBAL CELESTIAL PASSING METEORS */}
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

      {/* 1. HERO SECTION (HOME): 3D Ringed Cyber Cyan Planet */}
      <div
        className={`absolute top-[6%] right-[-6%] transition-opacity duration-1000 ${
          activeSection === 'home' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <PlanetCyberCyan />
      </div>

      {/* 2. ABOUT SECTION: 3D Emerald Matrix Planet & Moons */}
      <div
        className={`absolute top-[15%] left-[-6%] transition-opacity duration-1000 ${
          activeSection === 'about' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <PlanetEmeraldMatrix />
      </div>

      {/* 3. SKILLS SECTION: 3D Violet Nebula Planet & Cosmic Belt */}
      <div
        className={`absolute top-[12%] right-[-5%] transition-opacity duration-1000 ${
          activeSection === 'skills' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <PlanetVioletNebula />
      </div>

      {/* 4. PROJECTS SECTION: Deep Supernova Core */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          activeSection === 'projects' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute top-[25%] left-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-500/20 blur-3xl animate-pulse" />
      </div>

      {/* 5. EXPERIENCE SECTION: Ice Planet & Energy Corona */}
      <div
        className={`absolute bottom-[8%] right-[-6%] transition-opacity duration-1000 ${
          activeSection === 'experience' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <PlanetCyberCyan />
      </div>

      {/* 6. CONTACT SECTION: Cyber Beacon Planet */}
      <div
        className={`absolute bottom-[10%] left-[-6%] transition-opacity duration-1000 ${
          activeSection === 'contact' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <PlanetEmeraldMatrix />
      </div>

    </div>
  );
};

export default DynamicSectionBackground;
