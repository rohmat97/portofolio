import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaMicrochip, FaBolt } from "react-icons/fa";
import { FALLBACK_PROJECT_IMAGE } from "../../data/projectsData";
import BorderBeam from "./BorderBeam";

const DigiCodeRings = () => (
  <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center overflow-hidden rounded-3xl">
    {/* Expanding Concentric Digi-Code Ring 1 (Outer) */}
    <div className="absolute w-[150%] h-[150%] border-2 border-dashed border-cyan-400/50 rounded-full animate-digi-spin animate-digi-rings-expand" />

    {/* Concentric Digi-Code Ring 2 (Inner Matrix Glyphs) */}
    <div className="absolute w-[110%] h-[110%] border border-purple-400/40 rounded-full animate-digi-reverse-spin flex items-center justify-between p-3">
      <span className="text-[10px] font-mono text-cyan-400 font-bold tracking-widest bg-slate-950/90 px-1.5 py-0.5 rounded shadow-lg border border-cyan-500/30">010101</span>
      <span className="text-[10px] font-mono text-purple-300 font-bold tracking-widest bg-slate-950/90 px-1.5 py-0.5 rounded shadow-lg border border-purple-500/30">DIGI-CODE</span>
      <span className="text-[10px] font-mono text-cyan-400 font-bold tracking-widest bg-slate-950/90 px-1.5 py-0.5 rounded shadow-lg border border-cyan-500/30">101010</span>
    </div>

    {/* Vertical Hologram Laser Scan Beam */}
    <div className="absolute inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_25px_#38bdf8] animate-digi-scan-slow" />

    {/* Evolution Energy Burst Flash */}
    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-purple-500/40 to-white/60 animate-digi-burst-slow mix-blend-screen" />
  </div>
);

const ProjectCard = ({ project, onSelectProject, isEvolving = false, index = 0 }) => {
  const [stage, setStage] = useState(isEvolving ? "DATA INITIALIZE" : "MEGA");
  const [animating, setAnimating] = useState(isEvolving);

  useEffect(() => {
    if (isEvolving) {
      setAnimating(true);
      setStage("DATA INITIALIZE");

      const timer1 = setTimeout(() => {
        setStage("ROOKIE FORM");
      }, 600);

      const timer2 = setTimeout(() => {
        setStage("CHAMPION FORM");
      }, 1200);

      const timer3 = setTimeout(() => {
        setStage("ULTIMATE FORM");
      }, 1800);

      const timer4 = setTimeout(() => {
        setStage("MEGA FORM");
      }, 2400);

      const timer5 = setTimeout(() => {
        setAnimating(false);
      }, 2600);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
      };
    } else {
      setAnimating(false);
      setStage("MEGA FORM");
    }
  }, [isEvolving]);

  const staggerDelay = `${(index % 6) * 160}ms`;

  return (
    <article
      style={{ animationDelay: staggerDelay }}
      className={`relative glass-card glass-card-hover rounded-3xl overflow-hidden border transition-all duration-700 flex flex-col justify-between group ${
        animating
          ? "border-cyan-400/90 shadow-[0_0_50px_rgba(6,182,212,0.5)] animate-digi-evolution-scale"
          : "border-slate-800/90 hover:border-cyan-500/40 digi-aura-pulse"
      }`}
    >
      {/* Digivolution Animated Overlay */}
      {animating && <DigiCodeRings />}

      {/* Digivolution Stage Banner Header */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-950/90 border border-cyan-500/50 text-[10px] font-mono tracking-wider font-bold shadow-xl backdrop-blur">
        <FaBolt className={`text-xs ${animating ? "text-amber-400 animate-spin" : "text-cyan-400"}`} />
        <span className={animating ? "text-cyan-300 animate-pulse" : "text-slate-300"}>
          STAGE: {stage}
        </span>
      </div>

      {/* ReactOmega Border Beam Effect */}
      <BorderBeam size={160} duration={7} delay={0} colorFrom="#38bdf8" colorTo="#a855f7" />

      {/* Card Content Container */}
      <div>
        {/* Image Container */}
        <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
              animating ? "filter brightness-150 saturate-200 blur-[2px]" : ""
            }`}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = FALLBACK_PROJECT_IMAGE;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent" />
          <span className="absolute top-3 right-3 text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur text-cyan-300 border border-cyan-500/30">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors flex items-center justify-between gap-2">
            <span>{project.title}</span>
            <FaMicrochip className="text-cyan-500/40 group-hover:text-cyan-400 transition-colors text-sm flex-shrink-0" />
          </h3>
          <p className="text-sm text-slate-400 mt-2 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2">
        {/* Tech Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono bg-slate-900/90 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800 group-hover:border-cyan-500/30 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Card Action Buttons */}
        <div className="flex items-center gap-3 border-t border-slate-800/80 pt-4 no-print">
          <button
            onClick={() => onSelectProject(project)}
            className="flex-1 py-2 text-xs font-semibold font-mono text-slate-200 bg-slate-900 hover:bg-slate-800 hover:text-cyan-300 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer shadow-md"
          >
            View Details
          </button>
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-cyan-400 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 rounded-xl transition-colors"
              title="Live Demo"
            >
              <FaExternalLinkAlt size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
