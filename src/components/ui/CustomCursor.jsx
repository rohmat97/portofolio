import React, { useEffect, useState } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
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

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  // Section Cursor Configurations
  const getCursorTheme = () => {
    switch (activeSection) {
      case 'about':
        return {
          dotBg: 'bg-emerald-400',
          ringBorder: 'border-emerald-400/70',
          ringBg: 'bg-emerald-500/10',
          shadow: '0 0 12px #34d399',
          shape: 'rounded-lg', // Matrix Square Bracket Shape
        };
      case 'skills':
        return {
          dotBg: 'bg-purple-400',
          ringBorder: 'border-purple-400/70',
          ringBg: 'bg-purple-500/10',
          shadow: '0 0 12px #c084fc',
          shape: 'rounded-[14px] rotate-45', // Diamond Shape
        };
      case 'projects':
        return {
          dotBg: 'bg-indigo-400',
          ringBorder: 'border-indigo-400/70',
          ringBg: 'bg-indigo-500/10',
          shadow: '0 0 12px #818cf8',
          shape: 'rounded-full',
        };
      case 'experience':
        return {
          dotBg: 'bg-indigo-300',
          ringBorder: 'border-indigo-400/80',
          ringBg: 'bg-indigo-600/15',
          shadow: '0 0 12px #a5b4fc',
          shape: 'rounded-2xl',
        };
      case 'contact':
        return {
          dotBg: 'bg-teal-400',
          ringBorder: 'border-teal-400/80',
          ringBg: 'bg-teal-500/15',
          shadow: '0 0 12px #2dd4bf',
          shape: 'rounded-full border-dashed',
        };
      case 'home':
      default:
        return {
          dotBg: 'bg-cyan-400',
          ringBorder: 'border-cyan-400/70',
          ringBg: 'bg-cyan-500/10',
          shadow: '0 0 12px #38bdf8',
          shape: 'rounded-full',
        };
    }
  };

  const theme = getCursorTheme();

  return (
    <>
      {/* Dynamic Center Cursor Dot */}
      <div
        className={`fixed top-0 left-0 w-3.5 h-3.5 rounded-full ${theme.dotBg} pointer-events-none z-[9999] transition-transform duration-75 no-print`}
        style={{
          transform: `translate3d(${position.x - 7}px, ${position.y - 7}px, 0) scale(${isHovered ? 1.9 : 1})`,
          boxShadow: theme.shadow,
        }}
      />

      {/* Dynamic Section Magnetic Outer Ring */}
      <div
        className={`fixed top-0 left-0 border ${theme.ringBorder} ${theme.ringBg} ${theme.shape} pointer-events-none z-[9998] transition-all duration-300 ease-out no-print ${
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
