import React, { useEffect, useState, useRef } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);
  const activeSection = useActiveSection();
  const particleIdRef = useRef(0);

  // Disable custom cursor particle calculations on touch/mobile devices
  const isPointerFine = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

  useEffect(() => {
    if (!isPointerFine) return;

    const onMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });

      // Spawn 2 cosmic sparkling dust particles on mouse movement
      const colors = ['#38bdf8', '#c084fc', '#34d399', '#fde047', '#ffffff'];
      const symbols = ['✦', '✨', '•', '⋆'];

      const newParticles = Array.from({ length: 2 }).map(() => ({
        id: particleIdRef.current++,
        x: x + (Math.random() - 0.5) * 16,
        y: y + (Math.random() - 0.5) * 16,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2 - 0.5,
        size: Math.random() * 12 + 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        life: 1.0,
      }));

      setParticles((prev) => [...prev.slice(-30), ...newParticles]);
    };

    const onMouseOver = (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('.glass-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [isPointerFine]);

  // Particle decay loop - only active when particles exist
  useEffect(() => {
    if (!isPointerFine || particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            life: p.life - 0.08,
          }))
          .filter((p) => p.life > 0)
      );
    }, 30);

    return () => clearInterval(interval);
  }, [isPointerFine, particles.length]);

  if (!isPointerFine) return null;

  // Section Cursor Ring Themes
  const getCursorTheme = () => {
    switch (activeSection) {
      case 'about':
        return {
          dotBg: 'bg-emerald-400',
          ringBorder: 'border-emerald-400/80',
          ringBg: 'bg-emerald-500/10',
          shadow: '0 0 14px #34d399',
        };
      case 'skills':
        return {
          dotBg: 'bg-purple-400',
          ringBorder: 'border-purple-400/80',
          ringBg: 'bg-purple-500/10',
          shadow: '0 0 14px #c084fc',
        };
      case 'projects':
        return {
          dotBg: 'bg-indigo-400',
          ringBorder: 'border-indigo-400/80',
          ringBg: 'bg-indigo-500/10',
          shadow: '0 0 14px #818cf8',
        };
      case 'experience':
        return {
          dotBg: 'bg-indigo-300',
          ringBorder: 'border-indigo-400/80',
          ringBg: 'bg-indigo-600/15',
          shadow: '0 0 14px #a5b4fc',
        };
      case 'contact':
        return {
          dotBg: 'bg-teal-400',
          ringBorder: 'border-teal-400/80',
          ringBg: 'bg-teal-500/15',
          shadow: '0 0 14px #2dd4bf',
        };
      case 'home':
      default:
        return {
          dotBg: 'bg-cyan-400',
          ringBorder: 'border-cyan-400/80',
          ringBg: 'bg-cyan-500/10',
          shadow: '0 0 14px #38bdf8',
        };
    }
  };

  const theme = getCursorTheme();

  return (
    <>
      {/* Sparkling Cosmic Dust Trail Particles */}
      <div className="fixed inset-0 pointer-events-none z-[9997] overflow-hidden no-print">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute font-mono pointer-events-none select-none transition-transform duration-75"
            style={{
              left: `${p.x}px`,
              top: `${p.y}px`,
              color: p.color,
              fontSize: `${p.size}px`,
              opacity: p.life,
              transform: `scale(${p.life})`,
              textShadow: `0 0 8px ${p.color}, 0 0 14px ${p.color}`,
            }}
          >
            {p.symbol}
          </span>
        ))}
      </div>

      {/* Main Glowing Center Cursor Dot */}
      <div
        className={`fixed top-0 left-0 w-3.5 h-3.5 rounded-full ${theme.dotBg} pointer-events-none z-[9999] transition-transform duration-75 no-print`}
        style={{
          transform: `translate3d(${position.x - 7}px, ${position.y - 7}px, 0) scale(${isHovered ? 1.8 : 1})`,
          boxShadow: theme.shadow,
        }}
      />

      {/* Outer Magnetic Ring Follower */}
      <div
        className={`fixed top-0 left-0 rounded-full border ${theme.ringBorder} ${theme.ringBg} pointer-events-none z-[9998] transition-all duration-300 ease-out no-print ${
          isHovered ? 'w-14 h-14 shadow-lg scale-110' : 'w-9 h-9'
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovered ? 28 : 18)}px, ${position.y - (isHovered ? 28 : 18)}px, 0)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
