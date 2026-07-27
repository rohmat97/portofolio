import React, { useState } from 'react';
import { FaPalette, FaTimes } from 'react-icons/fa';

const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('cyan');

  const themes = [
    { id: 'cyan', name: 'Cyber Cyan', color: '#06b6d4', ring: 'ring-cyan-500' },
    { id: 'violet', name: 'Electric Violet', color: '#8b5cf6', ring: 'ring-purple-500' },
    { id: 'emerald', name: 'Matrix Emerald', color: '#10b981', ring: 'ring-emerald-500' },
  ];

  const handleThemeChange = (themeId) => {
    setActiveTheme(themeId);
    if (themeId === 'violet') {
      document.documentElement.style.setProperty('--accent-glow', 'rgba(139, 92, 246, 0.2)');
    } else if (themeId === 'emerald') {
      document.documentElement.style.setProperty('--accent-glow', 'rgba(16, 185, 129, 0.2)');
    } else {
      document.documentElement.style.setProperty('--accent-glow', 'rgba(6, 182, 212, 0.2)');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 no-print">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Customize Theme Accent"
        title="Customize Theme Accent"
        className="w-12 h-12 rounded-full bg-slate-900/90 text-cyan-400 border border-cyan-500/40 shadow-xl backdrop-blur flex items-center justify-center hover:scale-110 hover:border-cyan-400 transition-all cursor-pointer"
      >
        {isOpen ? <FaTimes size={18} /> : <FaPalette size={18} />}
      </button>

      {/* Theme Drawer Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-64 glass-card p-5 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-xl text-left space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200">Interactive Theme</h4>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">Live</span>
          </div>

          <div className="space-y-2">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => handleThemeChange(t.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all border cursor-pointer ${
                  activeTheme === t.id
                    ? 'bg-slate-800 text-white border-cyan-500/60 shadow-sm'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-3.5 h-3.5 rounded-full"
                    style={{ backgroundColor: t.color }}
                  ></span>
                  <span>{t.name}</span>
                </div>
                {activeTheme === t.id && (
                  <span className="text-[10px] font-mono text-cyan-400">Active</span>
                )}
              </button>
            ))}
          </div>

          <p className="text-[11px] text-slate-500 leading-tight border-t border-slate-800/80 pt-3">
            Customized accent effects adapt ambient glows dynamically across components.
          </p>
        </div>
      )}
    </div>
  );
};

export default ThemeCustomizer;
