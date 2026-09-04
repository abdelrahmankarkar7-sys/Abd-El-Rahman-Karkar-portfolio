import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Terminal } from 'lucide-react';
import { experienceData } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0B0F19]/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/25 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Delivering production-level AI solutions, client workflows, and specialized initiative training.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-blue-600 before:to-transparent">
          {experienceData.map((item, idx) => (
            <div 
              key={idx}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
            >
              {/* Timeline Center Dot */}
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-cyan-400 bg-[#0B0F19] text-cyan-400 shadow-md shadow-cyan-500/30 absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Timeline Card Content */}
              <div className="ml-14 sm:ml-0 sm:w-[calc(50%-2rem)] glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-blue-500/15">
                
                {/* Header info */}
                <div className="space-y-1.5 mb-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                      {item.period}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1 font-mono">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight pt-1">
                    {item.title}
                  </h3>

                  <div className="text-sm font-semibold text-gradient-cyan">
                    {item.organization}
                  </div>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bullets directly from CV */}
                <div className="space-y-2.5 pt-3 border-t border-white/5">
                  {item.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300/90 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
