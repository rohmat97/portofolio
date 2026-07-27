import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { EXPERIENCES_DATA, EXPERIENCE_CATEGORIES } from "../../data/experiencesData";
import ExperienceCard from "../ui/ExperienceCard";

const Journey = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredExperiences =
    activeCategory === "All"
      ? EXPERIENCES_DATA
      : EXPERIENCES_DATA.filter((e) => e.category === activeCategory);

  return (
    <section
      name="experience"
      aria-label="Professional experience section"
      className="w-full bg-transparent text-slate-300 py-20 sm:py-28 border-t border-slate-900 scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-3">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            A comprehensive record of my engineering roles, quantified achievements, and impact.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 no-print">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mr-2 py-2">
            <FaFilter className="text-indigo-400" /> Filter Domain:
          </div>
          {EXPERIENCE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Experience Timeline Stream */}
        <div className="relative border-l-2 border-slate-800 pl-6 sm:pl-10 space-y-12 ml-2 sm:ml-4">
          {filteredExperiences.map((exp, idx) => (
            <ExperienceCard
              key={`${exp.company}-${exp.title}-${idx}`}
              exp={exp}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Journey;
