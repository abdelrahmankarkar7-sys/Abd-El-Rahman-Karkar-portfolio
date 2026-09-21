import React from 'react';
import { Sparkles, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Hands-on AI Engineer passionate about translating complex datasets into robust, deployable Machine Learning and Deep Learning architectures.
          </p>
        </div>

        {/* Narrative & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          
          {/* Main Story / Bio */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 h-full flex flex-col justify-between border border-blue-500/15">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                  <span className="w-2 h-6 bg-cyan-400 rounded-full" />
                  Applied AI Engineering & Research
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {personalInfo.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-3 text-xs sm:text-sm text-cyan-300/90 font-mono">
                <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Delta University for Science and Technology • AI & Data Science (2023 – 2027)</span>
              </div>
            </div>
          </div>

          {/* Verified Stats Column */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 h-full flex flex-col justify-between border border-cyan-500/20">
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 font-mono">
                    Key Metrics & Track Record
                  </h4>
                  <span className="text-xs text-cyan-400 font-mono">Verified Data</span>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  {personalInfo.stats.map((stat, i) => (
                    <div 
                      key={i} 
                      className="p-4 rounded-xl bg-[#111827]/80 border border-blue-500/15 hover:border-cyan-500/40 transition-colors"
                    >
                      <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                        <span className="text-gradient-cyan">{stat.value}</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Focus Philosophy */}
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-2">
                <div className="text-xs font-semibold text-cyan-300 uppercase tracking-wider font-mono">
                  Engineering Philosophy
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  "Prioritizing high validation rigor, addressing real-world edge cases like severe class imbalance, and wrapping models in lightweight APIs for effortless production integration."
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
