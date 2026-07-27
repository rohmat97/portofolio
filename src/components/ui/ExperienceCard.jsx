import React from "react";
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const ExperienceCard = ({ exp }) => {
  return (
    <div className="relative group">
      {/* Timeline Indicator Badge */}
      <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all flex items-center justify-center">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:bg-cyan-400"></span>
      </div>

      {/* Experience Card */}
      <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-800/90 text-left">
        {/* Header info */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 text-xs font-mono mb-2">
              {exp.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
              {exp.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-400 text-sm mt-1">
              <span className="font-semibold text-cyan-400 flex items-center gap-1.5">
                <FaBuilding className="text-xs" /> {exp.company}
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                <FaMapMarkerAlt className="text-slate-500 text-xs" /> {exp.location}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
            <FaCalendarAlt className="text-xs text-indigo-400" />
            <span>{exp.period}</span>
          </div>
        </div>

        {/* Achievement Bullets */}
        <ul className="mt-4 space-y-2.5 text-sm sm:text-base text-slate-300">
          {exp.bullets.map((b, bIdx) => (
            <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
              <FaCheckCircle className="text-cyan-400 text-xs mt-1.5 flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Tech Pills */}
        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-400 border border-slate-800"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
