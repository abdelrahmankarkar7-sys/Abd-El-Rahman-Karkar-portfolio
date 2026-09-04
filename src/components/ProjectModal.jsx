import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle, Database, Layers, BarChart2, ShieldCheck } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  // Lock body scroll and handle ESC key
  useEffect(() => {
    if (!project) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content Box */}
      <div className="relative w-full max-w-3xl bg-[#0F1626] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#151B2B]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>
            <span className="text-gray-400 text-xs hidden sm:inline">• Project Case Study</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Title & Short Description */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#151B2B]/90 border border-blue-500/20">
            {project.keyMetrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-lg sm:text-xl font-extrabold text-cyan-400 font-mono">
                  {metric.value}
                </div>
                <div className="text-[11px] sm:text-xs text-gray-400 mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#111827] border border-red-500/20 space-y-2">
              <h4 className="text-sm font-semibold text-red-300 flex items-center gap-2 font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                The Problem
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.details.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-cyan-500/25 space-y-2">
              <h4 className="text-sm font-semibold text-cyan-300 flex items-center gap-2 font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                The Solution
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.details.solution}
              </p>
            </div>
          </div>

          {/* Dataset & Methodology */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#111827] border border-blue-500/15 space-y-2">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2 font-mono">
                <Database className="w-4 h-4 text-cyan-400" />
                <span>Dataset & Data Engineering</span>
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.details.dataset}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-blue-500/15 space-y-2">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2 font-mono">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Methodology & Architecture</span>
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.details.methodology}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#111827] border border-green-500/20 space-y-2">
              <h4 className="text-sm font-semibold text-green-300 flex items-center gap-2 font-mono">
                <BarChart2 className="w-4 h-4 text-green-400" />
                <span>Verified Results</span>
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.details.results}
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.details.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#151B2B] text-cyan-300 border border-cyan-500/30 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#151B2B] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Documented in CV</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111827] hover:bg-[#1C253B] text-white border border-blue-500/30 text-xs font-medium transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-gray-200 text-xs font-medium transition-all"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
