import React from 'react';
import { Eye, ShieldAlert, Cpu, Layers, Database, Sparkles, GraduationCap } from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolio';

export default function About() {
  const pillars = [
    {
      icon: <Eye className="w-6 h-6 text-cyan-400" />,
      title: "Computer Vision & Medical AI",
      desc: "Architecting convolutional deep learning models for complex image classification, data augmentation, and diagnostic scan evaluations.",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-blue-400" />,
      title: "Fraud Detection & Risk Modeling",
      desc: "Developing gradient-boosted models addressing extreme class imbalance across 50,000+ transaction records using precision/recall optimization.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: "Multimodal AI Content Detection",
      desc: "Engineering unified pipelines fusing acoustic, linguistic, and visual artifacts to detect synthetic and deepfake digital media.",
    },
    {
      icon: <Layers className="w-6 h-6 text-sky-400" />,
      title: "End-to-End ML Pipelines",
      desc: "Managing full-cycle AI development from exploratory data analysis and feature engineering to model serialization and Flask API deployment.",
    },
  ];

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Main Story / Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-2 h-6 bg-cyan-400 rounded-full" />
                Applied AI Engineering & Research
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.summary}
              </p>
              <div className="pt-2 border-t border-white/5 flex items-center gap-3 text-sm text-cyan-300/90 font-mono">
                <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Delta University for Science and Technology • AI & Data Science (2023 – 2027)</span>
              </div>
            </div>

            {/* Core Competency Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => (
                <div 
                  key={idx} 
                  className="glass-card glass-card-hover rounded-xl p-5 space-y-2.5"
                >
                  <div className="p-2.5 rounded-lg bg-[#111827] border border-blue-500/20 w-fit">
                    {pillar.icon}
                  </div>
                  <h4 className="text-base font-semibold text-white">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Stats Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card rounded-2xl p-6 space-y-6 border border-cyan-500/20">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 font-mono">
                  Key Metrics & Track Record
                </h4>
                <span className="text-xs text-cyan-400 font-mono">Verified Data</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
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
