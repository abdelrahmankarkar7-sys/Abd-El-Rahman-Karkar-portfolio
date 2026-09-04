import React from 'react';
import { Brain, Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#070A11] py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Left: Branding & Role */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
            <Brain className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <div className="font-bold text-white tracking-tight">
              {personalInfo.name}
            </div>
            <div className="text-xs text-gray-400 font-mono">
              AI Engineer | Machine Learning & Deep Learning
            </div>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#111827] hover:bg-[#1A2338] text-gray-400 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#111827] hover:bg-[#1A2338] text-gray-400 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socialLinks.email}
            className="p-2 rounded-lg bg-[#111827] hover:bg-[#1A2338] text-gray-400 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright & Quick Top */}
        <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
          <span>© 2026 Abd El Rahman Karkar. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#111827] hover:bg-[#1A2338] text-gray-400 hover:text-white border border-white/5 transition-colors"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
