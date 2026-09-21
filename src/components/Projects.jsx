import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, FolderGit2, Sparkles, Filter, CheckCircle2, Linkedin } from 'lucide-react';
import { projectsData } from '../data/portfolio';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Computer Vision', 'Machine Learning', 'Deep Learning', 'IoT & Embedded'];

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Applied AI & Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Real-world machine learning pipelines, deep learning architectures, embedded IoT integrations, and production applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : 'glass-card text-gray-400 hover:text-white hover:bg-white/5 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-blue-500/15 group"
            >
              <div>
                {/* Project Image & Category Pill */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#070B14] flex items-center justify-center border-b border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-2 group-hover:scale-102 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1626]/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#0B0F19]/90 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Accuracy / Status Badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-cyan-950/90 text-cyan-400 border border-cyan-400/40 shadow-lg">
                      {project.keyMetrics[0].value.includes('%') 
                        ? `${project.keyMetrics[0].value} Acc` 
                        : project.keyMetrics[0].value}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300/80 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Key Highlights from CV */}
                  <div className="space-y-2 pt-1 border-t border-white/5">
                    {project.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-300 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#111827] text-gray-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#111827] text-gray-500">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-white/5 mt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors py-2"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.linkedinUrl && (
                    <a
                      href={project.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A66C2]/20 hover:bg-[#0A66C2]/35 border border-[#0A66C2]/45 text-cyan-200 hover:text-white text-xs font-medium transition-all hover:scale-105"
                      title="View Post on LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>Post</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#111827] hover:bg-[#1B2337] border border-blue-500/20 text-gray-400 hover:text-white transition-all hover:scale-105"
                      title="View Source on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
