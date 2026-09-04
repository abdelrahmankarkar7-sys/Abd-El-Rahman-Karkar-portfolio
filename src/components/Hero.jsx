import React, { useEffect, useRef } from 'react';
import { Download, ArrowRight, Mail, Linkedin, Github, Sparkles, Terminal, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const canvasRef = useRef(null);

  // Subtle Interactive AI Neural Nodes Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const nodes = [];
    const nodeCount = 38;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const alpha = (1 - dist / 115) * 0.18;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.fillStyle = i % 2 === 0 ? 'rgba(56, 189, 248, 0.65)' : 'rgba(59, 130, 246, 0.65)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Subtle AI Canvas */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro and Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/25 text-cyan-300 text-xs sm:text-sm font-mono tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Available for AI & ML Opportunities</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <p className="text-gray-400 text-base sm:text-lg font-mono">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient">
                  AI Engineer
                </span>
                <span className="text-gray-500 text-xl hidden sm:inline">•</span>
                <span className="text-gray-300 text-lg sm:text-xl font-medium">
                  Machine Learning & Deep Learning
                </span>
              </div>
            </div>

            {/* Concise Summary directly from CV */}
            <p className="text-gray-300/90 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.cvPath}
                download="Abd-El-Rahman-Karkar-CV.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#151B2B] hover:bg-[#1B2337] border border-blue-500/25 hover:border-cyan-400/50 text-gray-200 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 font-medium text-sm transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-3 text-gray-400">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-500">Connect:</span>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#151B2B] border border-blue-500/20 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 transition-all hover:scale-105"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#151B2B] border border-blue-500/20 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 transition-all hover:scale-105"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.email}
                className="p-2 rounded-lg bg-[#151B2B] border border-blue-500/20 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 transition-all hover:scale-105"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: AI Styled Profile Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Futuristic Ambient Glow Rings */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
              
              {/* Outer Decorative Tech Frame */}
              <div className="relative rounded-3xl p-3 sm:p-4 bg-[#0F1626]/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl">
                
                {/* Tech Corner Accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

                {/* Profile Image Container - Using EXACT user image without altering features */}
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#0B0F19]">
                  <img
                    src={personalInfo.avatar}
                    alt="Abd El Rahman Karkar - AI Engineer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-102"
                    loading="eager"
                  />
                  {/* Subtle inner border */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
                </div>

                {/* Floating AI Engineer Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-5/6 px-4 py-2.5 rounded-xl bg-[#151B2B]/95 border border-cyan-500/40 backdrop-blur-md shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-semibold text-white tracking-wide">
                      AI & ML Specialist
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-500/30">
                    PyTorch / TF
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
