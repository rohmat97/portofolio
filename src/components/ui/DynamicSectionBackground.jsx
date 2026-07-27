import React, { useMemo } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';

const DynamicSectionBackground = () => {
  const activeSection = useActiveSection();

  // Matrix particles for About section
  const matrixParticles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
      duration: `${Math.random() * 5 + 4}s`,
      char: i % 3 === 0 ? '0' : i % 3 === 1 ? '1' : '{ }',
    }));
  }, []);

  // Hexagon items for Skills section
  const hexItems = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 40 + 20}px`,
      duration: `${Math.random() * 6 + 4}s`,
      delay: `${Math.random() * 3}s`,
    }));
  }, []);

  // Energy beams for Experience section
  const energyBeams = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 4 + 3}s`,
      delay: `${Math.random() * 4}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden no-print transition-all duration-700">
      
      {/* 1. HERO SECTION: Cosmic Stars & Shooting Stars */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${activeSection === 'home' ? 'opacity-100' : 'opacity-20'}`}>
        <div className="shooting-star top-[12%] right-[8%] [--delay:0s]" />
        <div className="shooting-star top-[40%] right-[30%] [--delay:3.5s]" />
        <div className="shooting-star top-[75%] right-[15%] [--delay:7s]" />
      </div>

      {/* 2. ABOUT SECTION: Matrix Digital Binary Rain */}
      {activeSection === 'about' && (
        <div className="absolute inset-0 transition-all duration-700">
          {matrixParticles.map((p) => (
            <div
              key={p.id}
              className="absolute font-mono text-emerald-400/50 text-xs animate-matrix-fall"
              style={{
                left: p.left,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            >
              {p.char}
            </div>
          ))}
        </div>
      )}

      {/* 3. SKILLS SECTION: Floating Geometric Hexagons */}
      {activeSection === 'skills' && (
        <div className="absolute inset-0 transition-all duration-700">
          {hexItems.map((h) => (
            <div
              key={h.id}
              className="absolute border border-purple-500/20 rounded-xl animate-float-hex bg-purple-900/10"
              style={{
                top: h.top,
                left: h.left,
                width: h.size,
                height: h.size,
                animationDuration: h.duration,
                animationDelay: h.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* 4. PROJECTS SECTION: Floating Light Orbs */}
      {activeSection === 'projects' && (
        <div className="absolute inset-0 transition-all duration-700">
          <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        </div>
      )}

      {/* 5. EXPERIENCE SECTION: Rising Energy Beams */}
      {activeSection === 'experience' && (
        <div className="absolute inset-0 transition-all duration-700">
          {energyBeams.map((b) => (
            <div
              key={b.id}
              className="absolute bottom-0 w-1 bg-gradient-to-t from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 h-48 animate-beam-rise"
              style={{
                left: b.left,
                animationDuration: b.duration,
                animationDelay: b.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* 6. CONTACT SECTION: Cyber Grid Mesh */}
      {activeSection === 'contact' && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f766e15_1px,transparent_1px),linear-gradient(to_bottom,#0f766e15_1px,transparent_1px)] bg-[size:4rem_4rem] transition-all duration-700" />
      )}

    </div>
  );
};

export default DynamicSectionBackground;
