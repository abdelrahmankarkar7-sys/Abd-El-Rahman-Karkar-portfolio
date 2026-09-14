import React from 'react';
import logoImg from '../assets/logo.png';

export default function Logo({ className = "w-10 h-10" }) {
  return (
    <div 
      className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-[#0F1626] border border-cyan-500/30 hover:border-cyan-400/70 shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all duration-300 group cursor-pointer ${className}`}
    >
      <img
        src={logoImg}
        alt="AK Logo - Abd El Rahman Karkar"
        className="w-full h-full object-cover object-center transform scale-[1.55] group-hover:scale-[1.65] transition-transform duration-300"
        loading="eager"
      />
      
      {/* Subtle border overlay to blend edges */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-cyan-400/20 pointer-events-none" />
    </div>
  );
}
