import React, { useState } from "react";
import { FaSearch, FaLayerGroup, FaGamepad, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { PROJECTS_DATA, PROJECT_CATEGORIES } from "../../data/projectsData";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";
import { playHoverSound, playClickSound } from "../../utils/audioEffects";

const Work = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Progressive Disclosure: Show top 6 featured projects by default unless searching or toggled
  const displayedProjects = (showAllProjects || searchQuery.length > 0)
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section
      name="projects"
      aria-label="Projects section"
      className="w-full bg-transparent text-slate-300 py-20 sm:py-24 border-t border-slate-900 scroll-mt-20"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3 shadow-md">
            <FaGamepad className="text-cyan-400 text-xs" /> QUEST LOG: SELECTED WORKS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Projects <span className="gradient-text">Showcase</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            A portfolio of production apps, payment portals, and mobile solutions I've developed.
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 no-print">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onMouseEnter={playHoverSound}
                onClick={() => {
                  playClickSound();
                  setSelectedCategory(cat);
                }}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold font-mono rounded-xl transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/30 border border-cyan-400"
                    : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Live Search Bar */}
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-3.5 top-3.5 text-slate-500 text-sm" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-slate-800 rounded-xl text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors font-mono"
            />
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((p) => (
            <div key={p.title} onMouseEnter={playHoverSound}>
              <ProjectCard
                project={p}
                onSelectProject={(project) => {
                  playClickSound();
                  setActiveModalProject(project);
                }}
              />
            </div>
          ))}
        </div>

        {/* Progressive Disclosure Toggle Button */}
        {filteredProjects.length > 6 && searchQuery.length === 0 && (
          <div className="mt-12 text-center no-print">
            <button
              onMouseEnter={playHoverSound}
              onClick={() => {
                playClickSound();
                setShowAllProjects(!showAllProjects);
              }}
              className="px-6 py-3.5 text-sm font-semibold text-cyan-300 bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/10 font-mono"
            >
              <span>
                {showAllProjects
                  ? "Show Featured Projects Only"
                  : `Explore All ${filteredProjects.length} Projects Showcase`}
              </span>
              {showAllProjects ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
            </button>
          </div>
        )}

        {/* Empty Search Fallback */}
        {filteredProjects.length === 0 && (
          <div className="glass-card p-12 rounded-3xl text-center border border-slate-800">
            <FaLayerGroup className="mx-auto text-4xl text-slate-600 mb-3" />
            <p className="text-lg text-slate-300 font-semibold font-mono">No quest logs found</p>
            <p className="text-sm text-slate-500 mt-1">
              Try clearing your search query or switching categories.
            </p>
          </div>
        )}

        {/* Project Detail Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => {
            playClickSound();
            setActiveModalProject(null);
          }}
        />

      </div>
    </section>
  );
};

export default Work;
