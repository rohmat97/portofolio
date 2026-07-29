import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaPrint, FaDownload, FaExternalLinkAlt, FaGamepad } from "react-icons/fa";
import { Link } from "react-scroll";
import Profile from "../../assets/profile.png";
import { RESUME_URL, CERTIFICATIONS_DRIVE_URL, EMAIL, PHONE_ID, PHONE_MY } from "../../constants/links";
import { HERO_METRICS_DATA } from "../../data/metricsData";
import { playHoverSound, playClickSound } from "../../utils/audioEffects";
import ShinyText from "../ui/ShinyText";
import GradientText from "../ui/GradientText";
import ScrambleText from "../ui/ScrambleText";
import GravityWells from "../ui/GravityWells";

const Home = () => {
  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  return (
    <section
      name="home"
      aria-label="Home section"
      className="relative w-full min-h-screen pt-28 sm:pt-36 pb-20 flex items-center bg-transparent overflow-hidden"
    >
      {/* ReactOmega Gravity Wells Component (Home Only) */}
      <GravityWells />

      {/* Background Animated Ambient Glows */}
      <div className="ambient-glow animate-pulse-glow top-10 left-1/4 w-[450px] h-[450px] bg-cyan-500/20 no-print" />
      <div className="ambient-glow animate-pulse-glow top-1/2 right-1/4 w-[550px] h-[550px] bg-indigo-600/15 no-print" />

      {/* PRINT-ONLY Formal Resume Header */}
      <div className="hidden print:block w-full border-b-2 border-slate-900 pb-4 mb-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">ROHMAT DASUKI</h1>
            <p className="text-base font-bold text-slate-800 mt-1">Senior Software Engineer (React, Next.js, Nuxt 3 & Full-Stack)</p>
            <p className="text-xs text-slate-700 font-mono mt-2">
              Garut, Indonesia • Kuala Lumpur, Malaysia | {PHONE_ID} | {PHONE_MY} | {EMAIL}
            </p>
          </div>
          <img
            src={Profile}
            alt="Rohmat Dasuki - Senior Software Engineer"
            className="w-24 h-24 rounded-xl object-cover border-2 border-slate-900 flex-shrink-0"
          />
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Text Content & Introduction */}
          <div className="flex-1 w-full text-left">
            
            {/* Gaming HUD Status Pill with ReactOmega GradientText */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs sm:text-sm font-mono tracking-wider mb-6 no-print shadow-lg shadow-cyan-500/10">
              <FaGamepad className="text-cyan-400 text-xs animate-bounce" />
              <GradientText className="font-bold">LVL 99 • REACT / NEXT.JS / NUXT 3</GradientText>
            </div>

            {/* ReactOmega ScrambleText + ShinyText Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.1] no-print">
              Hi, I'm <ShinyText>Rohmat Dasuki</ShinyText>
            </h1>

            <h2 className="text-xl sm:text-3xl font-semibold text-slate-300 mt-3 sm:mt-4 flex flex-wrap items-center gap-2 no-print">
              Senior Software Engineer
              {/* ReactOmega ShinyText Badge */}
              <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                <ScrambleText text="React • Next.js • Nuxt 3" />
              </span>
            </h2>

            <div className="print:block">
              <p className="text-slate-300 py-6 print:py-1 text-base sm:text-lg print:text-sm leading-relaxed max-w-[650px] print:max-w-none">
                Senior Software Engineer with 5+ years of experience engineering high-scale frontend & full-stack applications specializing in <ShinyText className="font-bold">React, Next.js, and Nuxt 3</ShinyText>, along with React Native and Spring Boot architectures.
              </p>
            </div>

            {/* Action Buttons with Gaming Haptic Sounds */}
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center no-print">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                aria-label="View Projects Section"
              >
                <button
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                  className="group shimmer-btn px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-lg shadow-cyan-500/25 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Start Quest Log</span>
                  <HiArrowNarrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </Link>

              <button
                onMouseEnter={playHoverSound}
                onClick={handlePrint}
                className="px-5 py-3.5 text-sm font-semibold text-cyan-300 bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <FaPrint />
                <span>Print Web CV</span>
              </button>

              <a
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                href={CERTIFICATIONS_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Explore Certifications in Google Drive"
                className="px-5 py-3.5 text-sm font-semibold text-purple-300 bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/40 rounded-xl transition-all inline-flex items-center gap-2"
              >
                <FaExternalLinkAlt className="text-xs" />
                <span>Certifications</span>
              </a>

              <a
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open PDF resume in a new tab"
                className="px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all inline-flex items-center gap-2"
              >
                <FaDownload />
                <span>PDF Resume</span>
              </a>
            </div>

            {/* Quick Email Link */}
            <div className="mt-6 text-xs text-slate-400 font-mono no-print">
              Direct Contact: <a href={`mailto:${EMAIL}`} className="text-cyan-400 hover:underline">{EMAIL}</a>
            </div>

          </div>

          {/* Floating Profile RPG Card with 3D Flip Effect (Web-Only) */}
          <div className="flex-1 flex justify-center w-full lg:w-auto no-print">
            <div
              onMouseEnter={playHoverSound}
              className="relative flip-card-container group animate-float perspective-1000 w-[320px] sm:w-[350px] h-[390px] sm:h-[420px] cursor-pointer"
            >
              {/* Outer Ambient Glowing Aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-500 no-print" />

              {/* 3D Flip Inner Card */}
              <div className="relative flip-card-inner w-full h-full transform-style-3d">
                
                {/* FRONT FACE */}
                <div className="absolute inset-0 backface-hidden glass-card p-5 sm:p-6 rounded-3xl flex flex-col items-center justify-between text-center border border-cyan-500/40 shadow-2xl">
                  <div className="w-full flex flex-col items-center">
                    <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-2xl overflow-hidden mb-4 ring-2 ring-cyan-500/40 shadow-xl">
                      <img
                        src={Profile}
                        alt="Rohmat Dasuki - Senior Software Engineer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    </div>

                    <div className="w-full text-left space-y-2 border-t border-slate-800/80 pt-3">
                      <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                        <span>TOP SPECIALTY</span>
                        <span className="text-cyan-400 font-bold">EXPERT</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-100">Rohmat Dasuki</h3>
                      <p className="text-xs text-slate-400 font-mono">
                        Associate Degree • POLBAN
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 pt-1.5">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono border border-cyan-500/40">React</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono border border-indigo-500/40">Next.js</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono border border-emerald-500/40">Nuxt 3</span>
                      </div>
                    </div>
                  </div>

                  {/* Flip Hint */}
                  <div className="w-full text-center pt-2">
                    <span className="text-[10px] font-mono text-cyan-400/90 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-500/30 inline-flex items-center gap-1 animate-pulse">
                      ⚡ HOVER CARD TO FLIP SKILL STATS ↻
                    </span>
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 glass-card p-5 sm:p-6 rounded-3xl flex flex-col justify-between text-left border border-purple-500/50 shadow-2xl bg-slate-950/90 overflow-hidden">
                  
                  {/* Cyber Grid Pattern Background */}
                  <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />

                  <div className="relative z-10 space-y-3">
                    {/* Header Badge */}
                    <div className="flex items-center justify-between border-b border-cyan-500/30 pb-2">
                      <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                        <FaGamepad className="text-xs text-cyan-400 animate-spin" />
                        SKILL MATRIX STATS
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-500/40">
                        LVL 99
                      </span>
                    </div>

                    {/* Skill Progress Bars */}
                    <div className="space-y-2.5 pt-1">
                      
                      {/* React & Next.js */}
                      <div>
                        <div className="flex justify-between text-[11px] font-mono mb-1">
                          <span className="text-slate-200 font-semibold">React & Next.js</span>
                          <span className="text-cyan-400 font-bold">98% (MASTER)</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-cyan-500/30">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full w-[98%]" />
                        </div>
                      </div>

                      {/* Nuxt 3 & Vue */}
                      <div>
                        <div className="flex justify-between text-[11px] font-mono mb-1">
                          <span className="text-slate-200 font-semibold">Nuxt 3 & Vue.js</span>
                          <span className="text-emerald-400 font-bold">92% (EXPERT)</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-emerald-500/30">
                          <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[92%]" />
                        </div>
                      </div>

                      {/* React Native */}
                      <div>
                        <div className="flex justify-between text-[11px] font-mono mb-1">
                          <span className="text-slate-200 font-semibold">React Native</span>
                          <span className="text-indigo-400 font-bold">90% (EXPERT)</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-indigo-500/30">
                          <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-[90%]" />
                        </div>
                      </div>

                      {/* TypeScript & Zod */}
                      <div>
                        <div className="flex justify-between text-[11px] font-mono mb-1">
                          <span className="text-slate-200 font-semibold">TypeScript & Zod</span>
                          <span className="text-cyan-400 font-bold">94% (MASTER)</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-cyan-500/30">
                          <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full w-[94%]" />
                        </div>
                      </div>

                      {/* Spring Boot & Java */}
                      <div>
                        <div className="flex justify-between text-[11px] font-mono mb-1">
                          <span className="text-slate-200 font-semibold">Spring Boot & Java</span>
                          <span className="text-amber-400 font-bold">40% (BEGINNER)</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-amber-500/30">
                          <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full w-[40%]" />
                        </div>
                      </div>

                    </div>

                    {/* RPG Character Info Footer */}
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono pt-2 border-t border-slate-800/80">
                      <div className="bg-slate-900/80 p-1.5 rounded border border-slate-800">
                        <span className="text-slate-400">CLASS: </span>
                        <span className="text-cyan-300 font-bold">SR FULL-STACK</span>
                      </div>
                      <div className="bg-slate-900/80 p-1.5 rounded border border-slate-800">
                        <span className="text-slate-400">EXP: </span>
                        <span className="text-purple-300 font-bold">5+ YEARS</span>
                      </div>
                    </div>

                  </div>

                  {/* Flip Back Hint */}
                  <div className="relative z-10 text-center pt-1">
                    <span className="text-[10px] font-mono text-purple-300/90 bg-purple-950/80 px-2.5 py-0.5 rounded-full border border-purple-500/30 inline-flex items-center gap-1">
                      ↺ MOVE AWAY TO FLIP FRONT
                    </span>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Gaming Stat Cards */}
        <div className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 no-print">
          {HERO_METRICS_DATA.map((m, idx) => {
            return (
              <div
                key={idx}
                onMouseEnter={playHoverSound}
                className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800/90 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl sm:text-4xl font-extrabold gradient-text-animate tracking-tight font-mono">
                    {m.value}
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-1 uppercase font-mono">
                    {m.label}
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 mt-2 font-mono border-t border-slate-800/60 pt-2">
                  {m.highlight}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Home;
