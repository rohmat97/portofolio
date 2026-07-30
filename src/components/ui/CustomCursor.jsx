import React, { useEffect, useState, useRef } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);
  const activeSection = useActiveSection();
  const particleIdRef = useRef(0);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const isHoveredRef = useRef(false);

  // Disable custom cursor particle calculations on touch/mobile devices
  const isPointerFine = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

  useEffect(() => {
    if (!isPointerFine) return;

    let rafId = null;
    let lastX = -100;
    let lastY = -100;
    let lastParticleTime = 0;

    const updateDOMPositions = () => {
      const hovered = isHoveredRef.current;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${lastX - 7}px, ${lastY - 7}px, 0) scale(${hovered ? 1.8 : 1})`;
      }
      if (ringRef.current) {
        const offset = hovered ? 28 : 18;
        ringRef.current.style.transform = `translate3d(${lastX - offset}px, ${lastY - offset}px, 0)`;
      }
      rafId = null;
    };

    const onMouseMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(updateDOMPositions);
      }

      // Spawn particle at most once every 70ms to keep state updates minimal
      const now = Date.now();
      if (now - lastParticleTime > 70) {
        lastParticleTime = now;
        const colors = ['#38bdf8', '#c084fc', '#34d399', '#fde047', '#ffffff'];
        const symbols = ['✦', '✨', '•', '⋆'];

        const newParticle = {
          id: particleIdRef.current++,
          x: lastX + (Math.random() - 0.5) * 16,
          y: lastY + (Math.random() - 0.5) * 16,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 0.5,
          size: Math.random() * 10 + 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          life: 1.0,
        };

        setParticles((prev) => [...prev.slice(-15), newParticle]);
      }
    };

    const onMouseOver = (e) => {
      const isTarget =
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('.glass-card');

      const nextHovered = Boolean(isTarget);
      if (isHoveredRef.current !== nextHovered) {
        isHoveredRef.current = nextHovered;
        setIsHovered(nextHovered);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      if (rafId) cancelAnimationFrame(rafId);
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
            life: p.life - 0.1,
          }))
          .filter((p) => p.life > 0)
      );
    }, 40);

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
              textShadow: `0 0 8px ${p.color}`,
            }}
          >
            {p.symbol}
          </span>
        ))}
      </div>

      {/* Main Glowing Center Cursor Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-3.5 h-3.5 rounded-full ${theme.dotBg} pointer-events-none z-[9999] transition-transform duration-75 no-print`}
        style={{
          transform: `translate3d(-100px, -100px, 0)`,
          boxShadow: theme.shadow,
        }}
      />

      {/* Outer Magnetic Ring Follower */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border ${theme.ringBorder} ${theme.ringBg} pointer-events-none z-[9998] transition-all duration-300 ease-out no-print ${
          isHovered ? 'w-14 h-14 shadow-lg scale-110' : 'w-9 h-9'
        }`}
        style={{
          transform: `translate3d(-100px, -100px, 0)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
