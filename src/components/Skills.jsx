import React from 'react';
import { Cpu, Brain, Eye, BarChart3, Rocket, Database, Terminal, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolio';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Machine Learning":
        return <Brain className="w-5 h-5 text-cyan-400" />;
      case "Deep Learning":
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case "AI Domains & Frameworks":
        return <Eye className="w-5 h-5 text-sky-400" />;
      case "Data Analysis & Processing":
        return <BarChart3 className="w-5 h-5 text-indigo-400" />;
      case "Pipelines & Deployment":
        return <Rocket className="w-5 h-5 text-teal-400" />;
      default:
        return <Database className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0B0F19]/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/25 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Hands-on technical stack directly demonstrated across applied computer vision, machine learning models, and deployment architectures.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, idx) => (
            <div 
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Category Header */}
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-[#111827] border border-blue-500/20">
                    {getCategoryIcon(group.category)}
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/20">
                    {group.skills.length} skills
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111827]/90 hover:bg-[#1A2338] border border-blue-500/20 hover:border-cyan-400/50 text-xs font-medium text-gray-200 transition-all cursor-default"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom decorative line */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>Verified in CV</span>
                <span className="text-cyan-400/60">● Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
