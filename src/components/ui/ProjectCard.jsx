import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FALLBACK_PROJECT_IMAGE } from "../../data/projectsData";

const ProjectCard = ({ project, onSelectProject }) => {
  return (
    <article className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-800/90 flex flex-col justify-between group">
      <div>
        {/* Image Container */}
        <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
            {project.title}
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
              className="text-[11px] font-mono bg-slate-900/90 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Card Action Buttons */}
        <div className="flex items-center gap-3 border-t border-slate-800/80 pt-4 no-print">
          <button
            onClick={() => onSelectProject(project)}
            className="flex-1 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-700 transition-colors cursor-pointer"
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
