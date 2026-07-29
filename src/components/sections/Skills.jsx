import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaGamepad, FaBolt } from "react-icons/fa";
import { SKILLS_DATA } from "../../data/skillsData";
import { playHoverSound, playClickSound, playMjolnirAssembleSound } from "../../utils/audioEffects";
import WaterRipple from "../ui/WaterRipple";

const MjolnirCrackSvg = () => (
  <div className="mjolnir-crack-overlay">
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path
        d="M 10 0 L 30 35 L 18 60 L 50 80 L 40 100"
        fill="none"
        stroke="#c084fc"
        strokeWidth="1.8"
        className="mjolnir-crack-path"
      />
      <path
        d="M 30 35 L 65 45 L 85 28"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="1.4"
        className="mjolnir-crack-path"
        style={{ animationDelay: "120ms" }}
      />
      <path
        d="M 90 10 L 68 50 L 82 75 L 60 100"
        fill="none"
        stroke="#e879f9"
        strokeWidth="1.4"
        className="mjolnir-crack-path"
        style={{ animationDelay: "90ms" }}
      />
    </svg>
    <div className="mjolnir-snap-pulse" />
  </div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isAssembled, setIsAssembled] = useState(false);
  const gridRef = useRef(null);

  const tabs = ["All", ...SKILLS_DATA.map((c) => c.category)];

  // Trigger Mjolnir reassembly when skills grid scrolls into view
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAssembled(true);
        } else if (entry.boundingClientRect.top > 0) {
          // Reset so it re-triggers when scrolling back down
          setIsAssembled(false);
        }
      },
      {
        rootMargin: "0px 0px -30% 0px", // Waits until grid is 30% up the viewport before starting
        threshold: 0.15,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const triggerReforge = useCallback(() => {
    playMjolnirAssembleSound();
    setIsAssembled(false);
    setTimeout(() => {
      setIsAssembled(true);
    }, 60);
  }, []);

  const handleTabChange = (tab) => {
    playClickSound();
    setActiveTab(tab);
    triggerReforge();
  };

  // Outer card Mjolnir scatter
  const getMjolnirScatterStyle = (index, assembled) => {
    const angles = [-35, 42, -28, 50, -45, 30, -55, 38, -20, 40, -48, 52];
    const xOffsets = [-220, 200, -260, 240, -180, 280, -210, 230, -270, 250, -190, 210];
    const yOffsets = [-150, -190, 160, 200, -220, 170, -140, 210, 130, -180, 160, -200];

    const rot = angles[index % angles.length];
    const dx = xOffsets[index % xOffsets.length];
    const dy = yOffsets[index % yOffsets.length];
    const delay = (index % 12) * 110; // Staggered fly-in per card

    if (!assembled) {
      return {
        transform: `translate3d(${dx}px, ${dy}px, 0) rotate(${rot}deg) scale(0.55)`,
        opacity: 0,
        filter: "brightness(2.5) drop-shadow(0 0 20px rgba(168, 85, 247, 0.9))",
        transition: "none",
      };
    }

    return {
      transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)",
      opacity: 1,
      filter: "brightness(1) drop-shadow(0 0 0px rgba(0,0,0,0))",
      transition: `transform 1.15s cubic-bezier(0.175, 0.885, 0.32, 1.25) ${delay}ms, opacity 0.75s ease-out ${delay}ms, filter 0.85s ease-out ${delay}ms`,
    };
  };

  // Inner item Mjolnir micro-scatter (for individual skills inside each card)
  const getMjolnirItemScatterStyle = (cardIndex, itemIndex, assembled) => {
    const itemAngles = [-25, 30, -35, 20, -15, 28, -40, 18];
    const itemX = [-70, 65, -80, 75, -50, 85, -60, 55];
    const itemY = [-35, 45, -50, 40, -30, 48, -38, 30];

    const idx = (cardIndex * 4 + itemIndex) % itemAngles.length;
    const rot = itemAngles[idx];
    const dx = itemX[idx];
    const dy = itemY[idx];

    // Card delay base + sub-item stagger delay
    const cardDelay = (cardIndex % 12) * 110;
    const itemDelay = cardDelay + (itemIndex + 1) * 75;

    if (!assembled) {
      return {
        transform: `translate3d(${dx}px, ${dy}px, 0) rotate(${rot}deg) scale(0.65)`,
        opacity: 0,
        filter: "brightness(2.2) drop-shadow(0 0 12px rgba(56, 189, 248, 0.9))",
        transition: "none",
      };
    }

    return {
      transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)",
      opacity: 1,
      filter: "brightness(1) drop-shadow(0 0 0px rgba(0,0,0,0))",
      transition: `transform 0.95s cubic-bezier(0.175, 0.885, 0.32, 1.25) ${itemDelay}ms, opacity 0.65s ease-out ${itemDelay}ms, filter 0.75s ease-out ${itemDelay}ms`,
    };
  };

  return (
    <section
      name="skills"
      aria-label="Skills and tools section"
      className="relative w-full bg-transparent text-slate-300 py-20 sm:py-24 border-t border-slate-900 scroll-mt-20 theme-violet overflow-hidden"
    >
      {/* ReactOmega WaterRipple Component (Skills & Technology Only) */}
      <WaterRipple />

      {/* Ambient Violet Glow */}
      <div className="ambient-glow animate-pulse-glow top-1/3 left-10 w-[450px] h-[450px] bg-purple-600/15 no-print" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="pb-8 text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/80 border border-purple-500/40 text-purple-400 text-xs font-mono uppercase tracking-widest mb-3 shadow-md">
              <FaGamepad className="text-purple-400 text-xs" /> SKILL TREE MATRIX
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              Skills & <span className="gradient-text-violet">Technologies</span>
            </h2>
            <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
              A comprehensive overview of languages, frameworks, cloud services, and testing frameworks I use in production.
            </p>
          </div>

          {/* Interactive Mjolnir Reforge Button */}
          <button
            onClick={triggerReforge}
            onMouseEnter={playHoverSound}
            title="Shatter & reforge skill cards like Thor's Mjolnir"
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950/90 hover:bg-purple-900 border border-purple-500/50 hover:border-purple-400 text-purple-300 font-mono text-xs font-bold transition-all shadow-lg hover:shadow-purple-500/30 cursor-pointer group no-print"
          >
            <FaBolt className="text-amber-400 animate-bounce group-hover:scale-125 transition-transform" />
            <span>REFORGE MJOLNIR</span>
          </button>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 mb-10 no-print">
          {tabs.map((tab) => (
            <button
              key={tab}
              onMouseEnter={playHoverSound}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold font-mono rounded-xl transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30 border border-purple-400"
                  : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Categorized Layout vs Selected Skill Tab */}
        <div ref={gridRef}>
          {activeTab === "All" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
              {SKILLS_DATA.map((cat, idx) => (
                <div
                  key={cat.category}
                  style={getMjolnirScatterStyle(idx, isAssembled)}
                  onMouseEnter={playHoverSound}
                  className="relative glass-card p-6 rounded-3xl border border-slate-800 hover:border-purple-500/40 transition-colors flex flex-col justify-between overflow-hidden group"
                >
                  {/* Mjolnir Crack & Snap Flash overlay when assembling */}
                  {isAssembled && <MjolnirCrackSvg />}

                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-slate-100 mb-4 pb-2 border-b border-slate-800 flex items-center justify-between font-mono">
                      <span>{cat.category}</span>
                      <span className="text-xs font-mono text-purple-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {cat.skills.length}
                      </span>
                    </h3>

                    {/* Sub-item Mjolnir reassembly per skill row inside the card */}
                    <div className="space-y-3">
                      {cat.skills.map((s, itemIdx) => (
                        <div
                          key={s.name}
                          style={getMjolnirItemScatterStyle(idx, itemIdx, isAssembled)}
                          className="flex items-center justify-between group/skill relative"
                        >
                          <div className="flex items-center gap-2.5">
                            <img
                              src={s.url}
                              alt={`${s.name} logo`}
                              className={`w-5 h-5 object-contain ${s.invert ? "invert" : ""}`}
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                            <span className="text-sm text-slate-200 group-hover/skill:text-purple-400 transition-colors font-medium">
                              {s.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-500 bg-slate-900/80 px-2 py-0.5 rounded">
                            {s.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 perspective-1000">
              {SKILLS_DATA
                .find((c) => c.category === activeTab)
                ?.skills.map((s, idx) => {
                  const IconComp = s.Icon;
                  return (
                    <div
                      key={s.name}
                      style={getMjolnirScatterStyle(idx, isAssembled)}
                      onMouseEnter={playHoverSound}
                      className="relative glass-card glass-card-hover p-5 rounded-2xl border border-slate-800 text-center flex flex-col items-center justify-center gap-3 group hover:border-purple-500/40 cursor-pointer overflow-hidden"
                    >
                      {/* Mjolnir Crack & Snap Flash overlay when assembling */}
                      {isAssembled && <MjolnirCrackSvg />}

                      <div
                        style={getMjolnirItemScatterStyle(idx, 0, isAssembled)}
                        className="relative z-10 flex flex-col items-center gap-3"
                      >
                        {IconComp ? (
                          <IconComp size={42} style={{ color: s.color || "#c084fc" }} />
                        ) : (
                          <img
                            src={s.url}
                            alt={`${s.name} icon`}
                            className={`w-12 h-12 object-contain group-hover:scale-110 transition-transform ${s.invert ? "invert" : ""}`}
                          />
                        )}
                        <div>
                          <p className="text-sm font-semibold text-slate-200 group-hover:text-purple-400 transition-colors">{s.name}</p>
                          <p className="text-[11px] font-mono text-slate-400 mt-0.5">{s.level}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Skills;
