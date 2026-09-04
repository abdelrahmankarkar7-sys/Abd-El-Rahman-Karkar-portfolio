import React from 'react';
import { Download, FileText, ExternalLink, CheckCircle, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function ResumeCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-[#0F1626] via-[#151B2B] to-[#0F1626] border border-cyan-500/30 shadow-2xl shadow-cyan-950/20">
          
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/25 text-cyan-300 text-xs font-mono uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                My <span className="text-gradient">Resume</span>
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Interested in learning more about my experience and technical background? Download the complete verified CV or inspect it in your browser.
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs text-gray-400 font-mono">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  Updated for 2026
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  PDF Format
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full md:w-auto shrink-0">
              <a
                href={personalInfo.cvPath}
                download="Abd-El-Rahman-Karkar-CV.pdf"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <a
                href={personalInfo.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#111827] hover:bg-[#1A2338] border border-blue-500/30 text-gray-200 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>View CV</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
