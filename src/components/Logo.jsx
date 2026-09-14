import React from 'react';

export default function Logo({ className = "w-10 h-10", showBorder = true }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform transition-transform duration-300 hover:scale-105"
      >
        <defs>
          {/* Gradient for AK monogram */}
          <linearGradient id="akGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>

          {/* Accent glow gradient */}
          <linearGradient id="akAccentGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>

          {/* Ambient Glow Filter */}
          <filter id="akGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Tech Squircle Frame */}
        {showBorder && (
          <>
            <rect
              x="3"
              y="3"
              width="94"
              height="94"
              rx="24"
              fill="#0F1626"
              fillOpacity="0.85"
              stroke="url(#akGradient)"
              strokeWidth="1.8"
              strokeOpacity="0.4"
            />
            {/* Tech Corner Markers */}
            <circle cx="14" cy="14" r="1.5" fill="#22D3EE" fillOpacity="0.6" />
            <circle cx="86" cy="14" r="1.5" fill="#3B82F6" fillOpacity="0.6" />
            <circle cx="14" cy="86" r="1.5" fill="#3B82F6" fillOpacity="0.6" />
            <circle cx="86" cy="86" r="1.5" fill="#22D3EE" fillOpacity="0.6" />
          </>
        )}

        {/* --- Monogram 'A' & 'K' Fusion --- */}

        {/* Left Leg of 'A' */}
        <path
          d="M 23 72 L 43 27"
          stroke="url(#akGradient)"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#akGlow)"
        />

        {/* Crossbar of 'A' with Neural Connection */}
        <path
          d="M 31 53 L 45 53"
          stroke="url(#akGradient)"
          strokeWidth="5.5"
          strokeLinecap="round"
        />

        {/* Shared Spine: Right of 'A' & Backbone of 'K' */}
        <path
          d="M 43 27 L 43 72"
          stroke="url(#akGradient)"
          strokeWidth="6.5"
          strokeLinecap="round"
          filter="url(#akGlow)"
        />

        {/* Upper Arm of 'K' */}
        <path
          d="M 45 47 L 73 27"
          stroke="url(#akAccentGrad)"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#akGlow)"
        />

        {/* Lower Arm of 'K' */}
        <path
          d="M 54 41 L 76 72"
          stroke="url(#akAccentGrad)"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#akGlow)"
        />

        {/* AI Neural Circuit Terminal Nodes */}
        <circle cx="43" cy="27" r="3.5" fill="#FFFFFF" />
        <circle cx="43" cy="27" r="5" stroke="#22D3EE" strokeWidth="1.5" />

        <circle cx="73" cy="27" r="3" fill="#38BDF8" />
        <circle cx="76" cy="72" r="3" fill="#818CF8" />
        <circle cx="23" cy="72" r="3" fill="#06B6D4" />
        <circle cx="43" cy="72" r="3" fill="#3B82F6" />
      </svg>
    </div>
  );
}
