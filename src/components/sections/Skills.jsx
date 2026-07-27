import React, { useState } from "react";
import { SKILLS_DATA } from "../../data/skillsData";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", ...SKILLS_DATA.map((c) => c.category)];

  return (
    <section
      name="skills"
      aria-label="Skills and tools section"
      className="relative w-full bg-transparent text-slate-300 py-20 sm:py-28 border-t border-slate-900 scroll-mt-20 theme-violet overflow-hidden"
    >
      {/* Ambient Violet Glow */}
      <div className="ambient-glow animate-pulse-glow top-1/3 left-10 w-[450px] h-[450px] bg-purple-600/15 no-print" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="pb-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest mb-3">
            Technical Skills Matrix
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Skills & <span className="gradient-text-violet">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            A comprehensive overview of languages, frameworks, cloud services, and testing frameworks I use in production.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 mb-10 no-print">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Categorized Layout vs Selected Skill Tab */}
        {activeTab === "All" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_DATA.map((cat) => (
              <div key={cat.category} className="glass-card p-6 rounded-3xl border border-slate-800 hover:border-purple-500/30 transition-colors flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-100 mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                    <span>{cat.category}</span>
                    <span className="text-xs font-mono text-purple-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {cat.skills.length}
                    </span>
                  </h3>
                  <div className="space-y-3">
                    {cat.skills.map((s) => (
                      <div key={s.name} className="flex items-center justify-between group">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={s.url}
                            alt={`${s.name} logo`}
                            className={`w-5 h-5 object-contain ${s.invert ? 'invert' : ''}`}
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <span className="text-sm text-slate-200 group-hover:text-purple-400 transition-colors font-medium">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {SKILLS_DATA
              .find((c) => c.category === activeTab)
              ?.skills.map((s) => {
                const IconComp = s.Icon;
                return (
                  <div
                    key={s.name}
                    className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800 text-center flex flex-col items-center justify-center gap-3 group hover:border-purple-500/40"
                  >
                    {IconComp ? (
                      <IconComp size={42} style={{ color: s.color || '#c084fc' }} />
                    ) : (
                      <img
                        src={s.url}
                        alt={`${s.name} icon`}
                        className={`w-12 h-12 object-contain group-hover:scale-110 transition-transform ${s.invert ? 'invert' : ''}`}
                      />
                    )}
                    <div>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-purple-400 transition-colors">{s.name}</p>
                      <p className="text-[11px] font-mono text-slate-400 mt-0.5">{s.level}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;
