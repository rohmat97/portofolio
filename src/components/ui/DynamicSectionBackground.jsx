import React, { useMemo } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import SectionVideoCanvas from './SectionVideoCanvas';

const DynamicSectionBackground = () => {
  const activeSection = useActiveSection();

  // Periodic Meteors firing every 3-5 seconds across the sky
  const periodicMeteors = useMemo(() => {
    return [
      { id: 1, top: '12%', right: '10%', duration: '4s', delay: '0s', color: '#38bdf8' },
      { id: 2, top: '28%', right: '25%', duration: '4.5s', delay: '3.5s', color: '#fde047' },
      { id: 3, top: '50%', right: '15%', duration: '4s', delay: '7s', color: '#c084fc' },
      { id: 4, top: '72%', right: '35%', duration: '4.2s', delay: '10.5s', color: '#34d399' },
    ];
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden no-print transition-all duration-700">
      
      {/* Bottom Gradient Shield to Ensure Crisp Text Legibility Above Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#080c14] via-[#080c14]/80 to-transparent z-10 pointer-events-none" />

      {/* CONTINUOUS PERIODIC PASSING METEORS (EVERY 3.5 SECONDS) */}
      {periodicMeteors.map((m) => (
        <div
          key={m.id}
          className="animate-meteor"
          style={{
            top: m.top,
            right: m.right,
            '--duration': m.duration,
            '--delay': m.delay,
            background: `linear-gradient(-45deg, ${m.color}, rgba(255,255,255,0))`,
            filter: `drop-shadow(0 0 12px ${m.color})`,
          }}
        />
      ))}

      {/* 1. HERO SECTION (HOME): 60FPS Cyber Cosmic Warp */}
      <div
        className={`absolute top-[5%] right-[-5%] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] transition-opacity duration-1000 ${
          activeSection === 'home' ? 'opacity-80' : 'opacity-0'
        }`}
      >
        <div className="relative w-full h-full [mask-image:radial-gradient(circle_at_center,black_35%,transparent_70%)]">
          <SectionVideoCanvas section="home" />
        </div>
      </div>

      {/* 2. ABOUT SECTION: 60FPS Matrix Green Code Rain Animation */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          activeSection === 'about' ? 'opacity-60' : 'opacity-0'
        }`}
      >
        <div className="relative w-full h-full [mask-image:radial-gradient(circle_at_center,black_40%,transparent_75%)]">
          <SectionVideoCanvas section="about" />
        </div>
      </div>

      {/* 3. SKILLS SECTION: 60FPS Swirling Black Hole Event Horizon Animation */}
      <div
        className={`absolute top-[8%] right-[-5%] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] transition-opacity duration-1000 ${
          activeSection === 'skills' ? 'opacity-80' : 'opacity-0'
        }`}
      >
        <div className="relative w-full h-full [mask-image:radial-gradient(circle_at_center,black_35%,transparent_75%)]">
          <SectionVideoCanvas section="skills" />
        </div>
      </div>

      {/* 4. PROJECTS SECTION: 60FPS Meteor Shower & Comet Flight Animation */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          activeSection === 'projects' ? 'opacity-70' : 'opacity-0'
        }`}
      >
        <SectionVideoCanvas section="projects" />
      </div>

      {/* 5. EXPERIENCE SECTION: 60FPS Quasar Pulsar Laser Beam Animation */}
      <div
        className={`absolute bottom-[10%] right-[-5%] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] transition-opacity duration-1000 ${
          activeSection === 'experience' ? 'opacity-80' : 'opacity-0'
        }`}
      >
        <div className="relative w-full h-full [mask-image:radial-gradient(circle_at_center,black_30%,transparent_70%)]">
          <SectionVideoCanvas section="experience" />
        </div>
      </div>

      {/* 6. CONTACT SECTION: 60FPS Cyber Tech Scan Animation */}
      <div
        className={`absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] transition-opacity duration-1000 ${
          activeSection === 'contact' ? 'opacity-70' : 'opacity-0'
        }`}
      >
        <div className="relative w-full h-full [mask-image:radial-gradient(circle_at_center,black_30%,transparent_70%)]">
          <SectionVideoCanvas section="contact" />
        </div>
      </div>

    </div>
  );
};

export default DynamicSectionBackground;
