import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaGamepad, FaDownload, FaExternalLinkAlt, FaTerminal, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { RESUME_URL, CERTIFICATIONS_DRIVE_URL } from '../../constants/links';
import { playHoverSound, playClickSound, playDigitalWarpSound, startDigimonBGM, stopDigimonBGM, startCVProfileBGM, unlockAudio, isBgmAudioReady, onBgmReady } from '../../utils/audioEffects';
import ShinyText from './ShinyText';
import GradientText from './GradientText';
import ScrambleText from './ScrambleText';

const DigimonSplashGate = ({ onEnter }) => {
  const [isWarping, setIsWarping] = useState(false);
  const [isMounting, setIsMounting] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [typedLog, setTypedLog] = useState('');
  const [isAudioReady, setIsAudioReady] = useState(isBgmAudioReady());
  const canvasRef = useRef(null);
  const isWarpingRef = useRef(false);

  const fullLogText = 'INITIALIZING MATRIX GATE // DECRYPTING BIOMETRICS // CONNECTING TO ROHMAT DASUKI PORTFOLIO...';

  // Audio readiness listener
  useEffect(() => {
    onBgmReady(() => {
      setIsAudioReady(true);
    });
  }, []);

  // Mount entrance transition timer
  useEffect(() => {
    const timer = setTimeout(() => setIsMounting(false), 650);
    return () => clearTimeout(timer);
  }, []);

  // Digimon 3 Matrix Theme BGM Audio Loop
  useEffect(() => {
    if (!isMuted) {
      startDigimonBGM();
    } else {
      stopDigimonBGM();
    }
  }, [isMuted]);

  // Global user interaction listener to unlock audio on first click/gesture
  useEffect(() => {
    const handleUserInteraction = () => {
      unlockAudio();
      if (!isMuted) {
        startDigimonBGM();
      }
    };

    const unlockEvents = ['click', 'pointerdown', 'touchstart', 'keydown'];
    unlockEvents.forEach((evt) => window.addEventListener(evt, handleUserInteraction, { passive: true }));

    return () => {
      unlockEvents.forEach((evt) => window.removeEventListener(evt, handleUserInteraction));
    };
  }, [isMuted]);

  const toggleSound = () => {
    playClickSound();
    setIsMuted((prev) => {
      const next = !prev;
      if (next) {
        stopDigimonBGM();
      } else {
        startDigimonBGM();
      }
      return next;
    });
  };

  // Typewriter Log Effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullLogText.length) {
        setTypedLog((prev) => prev + fullLogText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 25);
    return () => clearInterval(timer);
  }, []);

  // Cyber Matrix Tunnel Canvas Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = ['#06b6d4', '#38bdf8', '#818cf8', '#a855f7', '#34d399'];
    const matrixNodes = Array.from({ length: 90 }).map(() => ({
      x: (Math.random() - 0.5) * w,
      y: (Math.random() - 0.5) * h,
      z: Math.random() * w,
      color: colors[Math.floor(Math.random() * colors.length)],
      char: Math.random() > 0.5 ? '1' : '0',
    }));

    const render = () => {
      ctx.fillStyle = 'rgba(4, 7, 13, 0.25)';
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const speed = isWarpingRef.current ? 12 : 4;

      matrixNodes.forEach((node) => {
        node.z -= speed;
        if (node.z <= 0) {
          node.z = w;
          node.x = (Math.random() - 0.5) * w;
          node.y = (Math.random() - 0.5) * h;
        }

        const k = 300 / node.z;
        const px = node.x * k + cx;
        const py = node.y * k + cy;

        if (px >= 0 && px <= w && py >= 0 && py <= h) {
          const alpha = Math.min(1, (1 - node.z / w) * 1.5);
          ctx.font = `${Math.max(10, Math.floor(k * 12))}px monospace`;
          ctx.fillStyle = node.color;
          ctx.globalAlpha = alpha;
          ctx.shadowBlur = 10;
          ctx.shadowColor = node.color;
          ctx.fillText(node.char, px, py);
          ctx.globalAlpha = 1;
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleStartGate = useCallback(() => {
    if (isWarpingRef.current) return;
    isWarpingRef.current = true;
    setIsWarping(true);
    stopDigimonBGM();
    playDigitalWarpSound();
    // Sync with Phase 1 dimensionGateImplode (1.2s) — trigger onEnter partway through
    setTimeout(() => {
      startCVProfileBGM();
      onEnter();
    }, 900);
  }, [onEnter]);

  // Keyboard Enter shortcut to gate in
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && !isWarpingRef.current) {
        handleStartGate();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleStartGate]);

  return (
    <div
      onPointerDown={unlockAudio}
      onTouchStart={unlockAudio}
      onClick={unlockAudio}
      className={`fixed inset-0 z-[99999] bg-[#04070d] text-slate-100 flex flex-col justify-between p-4 sm:p-8 select-none overflow-hidden ${
        isWarping
          ? 'animate-digital-warp-out pointer-events-none'
          : isMounting
          ? 'animate-digital-warp-in'
          : ''
      }`}
    >

      {/* Matrix Tunnel Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Perspective 3D Cyber Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40 pointer-events-none z-0" />

      {/* CRT Scanline Overlay */}
      <div className="absolute inset-0 scanlines-overlay z-10" />

      {/* HUD Corner Brackets (Digimon World 3 Theme) */}
      <div className="cyber-corner-tl z-20" />
      <div className="cyber-corner-tr z-20" />
      <div className="cyber-corner-bl z-20" />
      <div className="cyber-corner-br z-20" />

      {/* TOP HUD BAR */}
      <div className="relative z-20 flex items-center justify-between border-b border-cyan-500/30 pb-3 max-w-[1200px] mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono tracking-widest text-cyan-400 flex items-center gap-1.5">
            <FaGamepad className="text-cyan-400 text-sm" />
            <GradientText className="font-bold">REALM-03 • DIGIMON WORLD 3 GATE</GradientText>
          </span>
        </div>

        {/* Digimon BGM Sound Toggle Button */}
        <button
          onClick={toggleSound}
          onMouseEnter={playHoverSound}
          title="Toggle Digimon 3 Matrix Theme Audio"
          aria-label="Toggle Digimon 3 Matrix Theme Audio"
          className="text-xs font-mono px-3.5 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 hover:text-white transition-all cursor-pointer shadow-lg shadow-cyan-500/20 flex items-center gap-2"
        >
          {isMuted ? (
            <>
              <FaVolumeMute className="text-red-400 text-sm" />
              <span>BGM: OFF</span>
            </>
          ) : (
            <>
              <FaVolumeUp className="text-cyan-400 text-sm animate-pulse" />
              <span>BGM: ON (-KRkW2WBngg)</span>
            </>
          )}
        </button>
      </div>

      {/* CENTER HERO PANEL */}
      <div className="relative z-20 max-w-[750px] mx-auto w-full my-auto text-center space-y-5 sm:space-y-6 px-4">
        
        {/* Digimon World 3 Style Status Badge */}
        {!isAudioReady ? (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-cyan-950/90 border border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.35)] backdrop-blur-md">
            <div className="w-3 h-3 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold">
              BUFFERING DIGITAL MATRIX AUDIO...
            </span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900/90 border border-cyan-500/50 shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
              SYSTEM READY • CONNECTING TO OPERATOR
            </span>
          </div>
        )}

        {/* Hero Identity */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            <ShinyText>ROHMAT DASUKI</ShinyText>
          </h1>
          <p className="text-sm sm:text-lg font-mono text-cyan-400 tracking-wide">
            <ScrambleText text="SENIOR SOFTWARE ENGINEER • FULL-STACK" />
          </p>
        </div>



        {/* Interactive Typewriter Terminal HUD */}
        <div className="glass-card p-3.5 rounded-2xl border border-cyan-500/30 text-left font-mono text-xs text-slate-300 flex items-center gap-3 max-w-[620px] mx-auto shadow-2xl">
          <FaTerminal className="text-cyan-400 text-lg flex-shrink-0 animate-pulse" />
          <div className="truncate">
            <span className="text-cyan-400 font-bold">$ </span>
            <span>{typedLog}</span>
            <span className="inline-block w-2 h-3 bg-cyan-400 ml-1 animate-pulse" />
          </div>
        </div>

        {/* HOLOGRAPHIC START BUTTON (PRESS START) */}
        <div className="pt-2 flex flex-col items-center gap-4">
          <button
            onClick={handleStartGate}
            onMouseEnter={playHoverSound}
            className="group relative px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white font-mono font-bold text-base sm:text-xl tracking-wider shadow-[0_0_40px_rgba(6,182,212,0.45)] hover:shadow-[0_0_60px_rgba(6,182,212,0.75)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-3 border border-cyan-300/40 overflow-hidden"
          >
            {/* Shimmer sheen */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10">INITIALIZE DIGITAL MATRIX</span>
            <HiArrowNarrowRight className="relative z-10 text-xl group-hover:translate-x-2 transition-transform duration-300" />
          </button>

          <span className="text-[11px] font-mono text-cyan-400/90 tracking-widest animate-pulse">
            [ CLICK ANYWHERE OR PRESS ENTER TO ACTIVATE AUDIO & GATE IN ]
          </span>
        </div>

        {/* Direct Access Quick Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHoverSound}
            className="px-4 py-2 text-xs font-mono text-cyan-300 bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 rounded-xl transition-all flex items-center gap-2"
          >
            <FaDownload className="text-xs" />
            <span>PDF Resume</span>
          </a>
          <a
            href={CERTIFICATIONS_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHoverSound}
            className="px-4 py-2 text-xs font-mono text-purple-300 bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/40 rounded-xl transition-all flex items-center gap-2"
          >
            <FaExternalLinkAlt className="text-xs" />
            <span>Certifications</span>
          </a>
        </div>
      </div>

      {/* BOTTOM HUD STATUS BAR */}
      <div className="relative z-20 border-t border-cyan-500/30 pt-3 max-w-[1200px] mx-auto w-full flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
        <div className="flex items-center gap-4">
          <span className="text-emerald-400">● 100% ONLINE</span>
          <span>LATENCY: 1ms</span>
          <span>ENCRYPTION: CYBER-SHA256</span>
        </div>
        <div className="text-slate-500">
          DIGIMON WORLD 3 OST (-KRkW2WBngg) • DEVELOPED BY ROHMAT DASUKI
        </div>
      </div>
    </div>
  );
};

export default DigimonSplashGate;
