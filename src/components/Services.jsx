import React from 'react';
import { BarChart3, Brain, Eye, Rocket, CheckCircle2, Sparkles, Wrench } from 'lucide-react';
import { servicesData } from '../data/portfolio';

export default function Services() {
  const getServiceIcon = (id) => {
    switch (id) {
      case 'data-analysis':
        return <BarChart3 className="w-6 h-6 text-cyan-400" />;
      case 'machine-learning':
        return <Brain className="w-6 h-6 text-blue-400" />;
      case 'deep-learning-cv':
        return <Eye className="w-6 h-6 text-sky-400" />;
      case 'deployment-web-apps':
        return <Rocket className="w-6 h-6 text-teal-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0B0F19]/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/25 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>What I Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            End-to-end data analytics, tailored machine learning architectures, computer vision pipelines, and production AI applications.
          </p>
        </div>

        {/* 2x2 Balanced Side-by-Side Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="glass-card glass-card-hover rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-blue-500/15 group relative overflow-hidden"
            >
              {/* Top Accent Gradient Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-6">
                
                {/* Header: Icon & Number Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-xl bg-[#111827] border border-blue-500/20 group-hover:border-cyan-400/50 transition-colors shadow-lg">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="font-mono text-xl sm:text-2xl font-black text-cyan-400/30 group-hover:text-cyan-400/80 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300/85 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Key Deliverables / Features List */}
                <div className="space-y-2.5 pt-3 border-t border-white/5">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Tools & Technologies Footer */}
              <div className="pt-6 mt-6 border-t border-white/5 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                  <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="uppercase tracking-wider">Tools & Technologies:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium font-mono bg-[#111827] text-cyan-300 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors"
                    >
                      {tool}
                    </span>
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
