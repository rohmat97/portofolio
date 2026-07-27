import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaPrint, FaDownload, FaMapMarkerAlt, FaBriefcase, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-scroll";
import Profile from "../assets/profile.png";
import { RESUME_URL, CERTIFICATIONS_DRIVE_URL, EMAIL, PHONE_ID, PHONE_MY } from "../constants/links";

const Home = () => {
  const handlePrint = () => {
    window.print();
  };

  const metrics = [
    { label: "Years Experience", value: "5+", icon: FaBriefcase, highlight: "Mobile & Full-Stack" },
    { label: "Production Products", value: "13+", icon: FaCodeBranch, highlight: "PayNet, Telkom, Prudential" },
    { label: "Key Impact", value: "20%+", highlight: "Efficiency & Retention Boost" },
    { label: "Current Location", value: "Kuala Lumpur", icon: FaMapMarkerAlt, highlight: "Malaysia & Indonesia" },
  ];

  return (
    <section
      name="home"
      aria-label="Home section"
      className="relative w-full min-h-screen pt-28 sm:pt-36 pb-20 flex items-center bg-[#080c14] overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="ambient-glow top-10 left-1/4 w-[400px] h-[400px] bg-cyan-500/20 no-print" />
      <div className="ambient-glow bottom-10 right-1/4 w-[500px] h-[500px] bg-indigo-600/15 no-print" />

      {/* PRINT-ONLY Formal Resume Header */}
      <div className="hidden print:block w-full border-b-2 border-slate-900 pb-4 mb-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">ROHMAT DASUKI</h1>
            <p className="text-base font-bold text-slate-800 mt-1">Senior Software Engineer</p>
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

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Text Content & Introduction */}
          <div className="flex-1 w-full text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium mb-6 no-print shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              Available for Senior Engineering Roles & Consultations
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.1] no-print">
              Hi, I'm <span className="gradient-text">Rohmat Dasuki</span>
            </h1>

            <h2 className="text-xl sm:text-3xl font-semibold text-slate-300 mt-3 sm:mt-4 flex flex-wrap items-center gap-2 no-print">
              Senior Software Engineer
              <span className="text-sm font-normal px-2.5 py-0.5 rounded-md bg-slate-800 text-cyan-300 border border-slate-700">
                React Native & Full-Stack
              </span>
            </h2>

            <div className="print:block">
              <h3 className="hidden print:block text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Professional Summary
              </h3>
              <p className="text-slate-400 py-6 print:py-1 text-base sm:text-lg print:text-sm leading-relaxed max-w-[680px] print:max-w-none">
                Senior Software Engineer with 5+ years of experience engineering high-scale mobile (React Native) and full-stack (React, Next.js, Nuxt 3, Spring Boot) architectures. Proven expertise in building secure, compliant financial systems (PayNet, PasarDana), driving 20%+ performance optimizations, and deploying scalable cloud-native applications (AWS, GCP, Azure).
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center no-print">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                aria-label="View Projects Section"
              >
                <button className="group px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-500/25 transition-all inline-flex items-center gap-2 cursor-pointer">
                  <span>Explore Showcase</span>
                  <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <button
                onClick={handlePrint}
                className="px-5 py-3.5 text-sm sm:text-base font-semibold text-cyan-300 bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <FaPrint />
                <span>Print Web CV</span>
              </button>

              <a
                href={CERTIFICATIONS_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Explore Certifications in Google Drive"
                className="px-5 py-3.5 text-sm sm:text-base font-semibold text-purple-300 bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/40 rounded-xl transition-all inline-flex items-center gap-2"
              >
                <FaExternalLinkAlt className="text-xs" />
                <span>View Certifications</span>
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open PDF resume in a new tab"
                className="px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all inline-flex items-center gap-2"
              >
                <FaDownload />
                <span>Download PDF</span>
              </a>
            </div>

            {/* Quick Email Copy Link */}
            <div className="mt-6 text-sm text-slate-400 font-mono no-print">
              Direct Contact: <a href={`mailto:${EMAIL}`} className="text-cyan-400 hover:underline">{EMAIL}</a>
            </div>

          </div>

          {/* Profile Card & Avatar (Web-Only) */}
          <div className="flex-1 flex justify-center w-full lg:w-auto no-print">
            <div className="relative group">
              
              {/* Outer Glowing Decorative Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-md opacity-50 group-hover:opacity-80 transition duration-500 no-print" />
              
              {/* Profile Card Box */}
              <div className="relative glass-card p-4 sm:p-6 rounded-3xl flex flex-col items-center text-center max-w-[320px] sm:max-w-[360px] border border-slate-800">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden mb-5 ring-2 ring-cyan-500/40 shadow-xl">
                  <img
                    src={Profile}
                    alt="Rohmat Dasuki - Senior Software Engineer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent no-print" />
                </div>

                <div className="w-full text-left space-y-2 border-t border-slate-800/80 pt-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>ROLE</span>
                    <span className="text-cyan-400 font-medium">Senior Level</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">Rohmat Dasuki</h3>
                  <p className="text-xs text-slate-400">
                    Associate Degree, Informatics Eng. (POLBAN)
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">React Native</span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">Nuxt 3</span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">Spring Boot</span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Executive Metrics Highlight Grid */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 no-print">
          {metrics.map((m, idx) => {
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-4 sm:p-6 rounded-2xl border border-slate-800/80 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl sm:text-4xl font-extrabold gradient-text tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mt-1">
                    {m.label}
                  </div>
                </div>
                <div className="text-xs text-slate-400 mt-3 font-mono border-t border-slate-800/60 pt-2">
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
