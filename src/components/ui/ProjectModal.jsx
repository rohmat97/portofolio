import React from "react";
import { FaTimes } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md no-print">
      <div className="glass-card max-w-lg w-full rounded-3xl border border-slate-800 overflow-hidden p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
          aria-label="Close modal"
        >
          <FaTimes size={18} />
        </button>

        <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-500/30">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-slate-100 mt-3">{project.title}</h3>

        <p className="text-sm text-slate-300 mt-4 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono bg-slate-900 text-cyan-300 px-3 py-1 rounded-lg border border-slate-800"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-300 bg-slate-900 rounded-xl border border-slate-700 hover:bg-slate-800 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
