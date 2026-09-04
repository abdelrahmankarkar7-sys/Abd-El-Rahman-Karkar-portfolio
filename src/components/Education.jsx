import React from 'react';
import { GraduationCap, Calendar, MapPin, Globe, BookOpen, CheckCircle } from 'lucide-react';
import { educationData, languagesData } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Languages</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            University foundation in artificial intelligence and cross-cultural communication fluency.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Education Card */}
          <div className="md:col-span-8 glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-blue-500/20 flex flex-col justify-between">
            <div className="space-y-4">
              
              <div className="flex items-center justify-between gap-4">
                <div className="p-3 rounded-xl bg-[#111827] border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
                  {educationData[0].period}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {educationData[0].institution}
                </h3>
                <p className="text-base sm:text-lg font-semibold text-gradient-cyan">
                  {educationData[0].degree}
                </p>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pt-2">
                {educationData[0].details}
              </p>

            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Egypt
              </span>
              <span className="text-cyan-400">In Progress</span>
            </div>
          </div>

          {/* Languages Card */}
          <div className="md:col-span-4 glass-card rounded-2xl p-6 sm:p-8 border border-blue-500/15 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span>Languages</span>
              </div>

              <div className="space-y-4">
                {languagesData.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#111827] border border-white/5 space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-white">{item.language}</span>
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                        {item.proficiency}
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full"
                        style={{ width: item.language === 'Arabic' ? '100%' : '75%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-gray-500 font-mono">
              Professional Collaboration Ready
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
