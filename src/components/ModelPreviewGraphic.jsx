import React from 'react';

export default function ModelPreviewGraphic({ modelId, className = 'w-full h-full' }) {
  switch (modelId) {
    case 'modular-hex-desk-organizer':
      return (
        <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-graphite-900 to-graphite-950 ${className}`}>
          {/* Subtle CAD grid */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-30"></div>
          {/* Isometric Hexagon Visual */}
          <svg viewBox="0 0 400 320" className="w-full h-full p-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hexGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FB923C" />
                <stop offset="100%" stopColor="#EA580C" />
              </linearGradient>
              <linearGradient id="hexGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#262D42" />
                <stop offset="100%" stopColor="#11141D" />
              </linearGradient>
              <linearGradient id="hexGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F97316" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Hex Shadow */}
            <ellipse cx="200" cy="270" rx="140" ry="25" fill="#000" opacity="0.6" />
            
            {/* Left Hex Cell */}
            <path d="M120 150 L160 125 L160 85 L120 60 L80 85 L80 125 Z" fill="#1D2232" stroke="#3A4460" strokeWidth="2" />
            <path d="M120 150 L120 190 L80 165 L80 125 Z" fill="#161A26" stroke="#262D42" strokeWidth="2" />
            <path d="M160 125 L160 165 L120 190 L120 150 Z" fill="#11141D" stroke="#262D42" strokeWidth="2" />
            
            {/* Center Orange Hex Core */}
            <path d="M200 195 L255 160 L255 105 L200 70 L145 105 L145 160 Z" fill="url(#hexGradDark)" stroke="#FB923C" strokeWidth="2.5" />
            <path d="M200 195 L200 250 L145 215 L145 160 Z" fill="#EA580C" stroke="#C2410C" strokeWidth="2" />
            <path d="M255 160 L255 215 L200 250 L200 195 Z" fill="#9A3412" stroke="#7C2D12" strokeWidth="2" />
            
            {/* Inner Hex pocket */}
            <path d="M200 180 L238 155 L238 115 L200 90 L162 115 L162 155 Z" fill="#0C0E14" stroke="#F97316" strokeWidth="1.5" strokeDasharray="3 3" />
            
            {/* Right Cell */}
            <path d="M280 150 L320 125 L320 85 L280 60 L240 85 L240 125 Z" fill="#1D2232" stroke="#3A4460" strokeWidth="2" />
            <path d="M280 150 L280 190 L240 165 L240 125 Z" fill="#161A26" stroke="#262D42" strokeWidth="2" />
            <path d="M320 125 L320 165 L280 190 L280 150 Z" fill="#11141D" stroke="#262D42" strokeWidth="2" />

            {/* Technical Caliper Dimension Lines */}
            <line x1="60" y1="50" x2="60" y2="220" stroke="#F97316" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />
            <line x1="55" y1="50" x2="65" y2="50" stroke="#F97316" strokeWidth="1.5" />
            <line x1="55" y1="220" x2="65" y2="220" stroke="#F97316" strokeWidth="1.5" />
            <text x="35" y="140" fill="#FB923C" fontSize="10" fontFamily="monospace" transform="rotate(-90 35, 140)">H: 75mm</text>

            <line x1="80" y1="285" x2="320" y2="285" stroke="#F97316" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />
            <line x1="80" y1="280" x2="80" y2="290" stroke="#F97316" strokeWidth="1.5" />
            <line x1="320" y1="280" x2="320" y2="290" stroke="#F97316" strokeWidth="1.5" />
            <text x="175" y="302" fill="#FB923C" fontSize="10" fontFamily="monospace">W: 185mm</text>
          </svg>
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-graphite-900/90 text-copper-400 border border-copper-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-copper-500 animate-pulse"></span>
            SNAP-FIT CAD
          </div>
        </div>
      );

    case 'algorithmic-voronoi-planter':
      return (
        <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-graphite-900 to-graphite-950 ${className}`}>
          <div className="absolute inset-0 bg-blueprint-grid opacity-30"></div>
          <svg viewBox="0 0 400 320" className="w-full h-full p-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="potGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EA580C" />
                <stop offset="100%" stopColor="#7C2D12" />
              </linearGradient>
            </defs>
            <ellipse cx="200" cy="275" rx="100" ry="20" fill="#000" opacity="0.6" />
            {/* Voronoi algorithmic vase shape */}
            <path d="M140 80 Q120 170 150 250 L250 250 Q280 170 260 80 Z" fill="#161A26" stroke="#262D42" strokeWidth="2" />
            {/* Internal inner cup */}
            <path d="M155 90 Q145 170 165 240 L235 240 Q255 170 245 90 Z" fill="url(#potGrad)" opacity="0.85" />
            {/* Voronoi polygonal lattice web */}
            <polygon points="170,110 190,105 200,125 180,135" stroke="#FB923C" strokeWidth="2" fill="none" />
            <polygon points="205,115 230,120 225,145 205,135" stroke="#FB923C" strokeWidth="2" fill="none" />
            <polygon points="160,145 185,140 195,170 165,175" stroke="#F97316" strokeWidth="2" fill="none" />
            <polygon points="200,150 225,155 235,185 205,180" stroke="#F97316" strokeWidth="2" fill="none" />
            <polygon points="175,185 200,190 195,220 170,215" stroke="#EA580C" strokeWidth="2" fill="none" />
            <polygon points="205,195 230,190 225,225 200,220" stroke="#EA580C" strokeWidth="2" fill="none" />
            
            {/* Rim top ellipse */}
            <ellipse cx="200" cy="80" rx="60" ry="16" fill="#1D2232" stroke="#FB923C" strokeWidth="2" />
            <ellipse cx="200" cy="80" rx="46" ry="11" fill="#0C0E14" stroke="#F97316" strokeWidth="1.5" />
            {/* Water drop icon */}
            <circle cx="200" cy="80" r="5" fill="#06B6D4" />
          </svg>
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-graphite-900/90 text-cyan-400 border border-cyan-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            WATERTIGHT DUAL-SHELL
          </div>
        </div>
      );

    case 'mag-clip-cable-management-dock':
      return (
        <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-graphite-900 to-graphite-950 ${className}`}>
          <div className="absolute inset-0 bg-blueprint-grid opacity-30"></div>
          <svg viewBox="0 0 400 320" className="w-full h-full p-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Under-desk bracket */}
            <rect x="100" y="70" width="200" height="30" rx="4" fill="#262D42" stroke="#3A4460" strokeWidth="2" />
            <rect x="130" y="60" width="140" height="10" rx="2" fill="#F97316" opacity="0.8" />
            <text x="165" y="68" fill="#FFF" fontSize="8" fontFamily="monospace">3M VHB MOUNT</text>
            
            {/* Main curved channel body */}
            <path d="M120 100 L120 190 Q120 220 150 220 L250 220 Q280 220 280 190 L280 100 Z" fill="#161A26" stroke="#FB923C" strokeWidth="2" />
            
            {/* Cable slots */}
            <circle cx="155" cy="165" r="14" fill="#0C0E14" stroke="#10B981" strokeWidth="2" />
            <circle cx="200" cy="165" r="14" fill="#0C0E14" stroke="#F97316" strokeWidth="2" />
            <circle cx="245" cy="165" r="14" fill="#0C0E14" stroke="#06B6D4" strokeWidth="2" />

            {/* Cable conduits passing through */}
            <line x1="155" y1="130" x2="155" y2="270" stroke="#10B981" strokeWidth="8" strokeLinecap="round" opacity="0.9" />
            <line x1="200" y1="130" x2="200" y2="270" stroke="#FB923C" strokeWidth="8" strokeLinecap="round" opacity="0.9" />
            <line x1="245" y1="130" x2="245" y2="270" stroke="#06B6D4" strokeWidth="8" strokeLinecap="round" opacity="0.9" />

            {/* Magnetic Swivel Gate */}
            <rect x="130" y="120" width="140" height="12" rx="4" fill="#FB923C" stroke="#EA580C" strokeWidth="1.5" />
            <circle cx="140" cy="126" r="3" fill="#FFF" />
            <circle cx="260" cy="126" r="3" fill="#FFF" />
          </svg>
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-graphite-900/90 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            TPU + PETG COMPOSITE
          </div>
        </div>
      );

    case 'articulated-mechanical-desk-cyborg':
      return (
        <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-graphite-900 to-graphite-950 ${className}`}>
          <div className="absolute inset-0 bg-blueprint-grid opacity-30"></div>
          <svg viewBox="0 0 400 320" className="w-full h-full p-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Robot silhouette with ball joints and gear details */}
            <ellipse cx="200" cy="280" rx="90" ry="18" fill="#000" opacity="0.6" />
            
            {/* Head */}
            <polygon points="180,60 220,60 215,95 185,95" fill="#1D2232" stroke="#FB923C" strokeWidth="2" />
            <line x1="188" y1="75" x2="212" y2="75" stroke="#06B6D4" strokeWidth="3" />
            
            {/* Neck Ball Joint */}
            <circle cx="200" cy="105" r="7" fill="#FB923C" stroke="#EA580C" strokeWidth="1.5" />

            {/* Torso */}
            <polygon points="165,115 235,115 220,180 180,180" fill="#161A26" stroke="#3A4460" strokeWidth="2" />
            
            {/* Center Gear Mechanical Ratchet */}
            <circle cx="200" cy="145" r="16" fill="#0C0E14" stroke="#F97316" strokeWidth="2" strokeDasharray="5 3" />
            <circle cx="200" cy="145" r="6" fill="#FB923C" />

            {/* Shoulder Ball Joints */}
            <circle cx="155" cy="125" r="9" fill="#FB923C" stroke="#EA580C" strokeWidth="2" />
            <circle cx="245" cy="125" r="9" fill="#FB923C" stroke="#EA580C" strokeWidth="2" />

            {/* Arms with elbow joints */}
            <path d="M150 130 L125 170 L115 210" stroke="#FB923C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="125" cy="170" r="6" fill="#0C0E14" stroke="#FB923C" strokeWidth="2" />
            
            <path d="M250 130 L275 160 L290 195" stroke="#FB923C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="275" cy="160" r="6" fill="#0C0E14" stroke="#FB923C" strokeWidth="2" />

            {/* Pelvis & Hip Joints */}
            <circle cx="185" cy="195" r="8" fill="#FB923C" />
            <circle cx="215" cy="195" r="8" fill="#FB923C" />

            {/* Legs with knee joints */}
            <path d="M185 200 L175 240 L170 275" stroke="#3A4460" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M215 200 L225 240 L230 275" stroke="#3A4460" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-graphite-900/90 text-amber-400 border border-amber-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            PRINT-IN-PLACE (0.3mm TOL)
          </div>
        </div>
      );

    case 'cantilever-foldable-phone-stand':
      return (
        <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-graphite-900 to-graphite-950 ${className}`}>
          <div className="absolute inset-0 bg-blueprint-grid opacity-30"></div>
          <svg viewBox="0 0 400 320" className="w-full h-full p-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="270" rx="110" ry="20" fill="#000" opacity="0.6" />
            {/* Flat Base plate */}
            <polygon points="100,240 280,240 310,260 130,260" fill="#1D2232" stroke="#3A4460" strokeWidth="2" />
            
            {/* Cantilever arm angled at 50 deg */}
            <polygon points="140,240 220,110 250,110 170,240" fill="#161A26" stroke="#FB923C" strokeWidth="2" />
            
            {/* Backing plate with MagSafe recess */}
            <polygon points="180,80 270,80 290,190 200,190" fill="#11141D" stroke="#EA580C" strokeWidth="2.5" />
            {/* MagSafe magnetic circle recess */}
            <ellipse cx="235" cy="135" rx="30" ry="24" fill="#0C0E14" stroke="#FB923C" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="235" cy="135" r="8" fill="#FB923C" opacity="0.6" />
            
            {/* Non-slip feet */}
            <rect x="110" y="258" width="20" height="4" rx="2" fill="#10B981" />
            <rect x="290" y="258" width="20" height="4" rx="2" fill="#10B981" />

            {/* Angle Indicator */}
            <path d="M190 240 A40 40 0 0 0 170 205" stroke="#FB923C" strokeWidth="1.5" strokeDasharray="2 2" />
            <text x="180" y="225" fill="#FB923C" fontSize="10" fontFamily="monospace">50°</text>
          </svg>
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-graphite-900/90 text-slate-300 border border-slate-600/50 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
            CARBON FIBER PETG
          </div>
        </div>
      );

    case 'cyber-gargoyle-miniature-statue':
      return (
        <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-graphite-900 to-graphite-950 ${className}`}>
          <div className="absolute inset-0 bg-blueprint-grid opacity-30"></div>
          <svg viewBox="0 0 400 320" className="w-full h-full p-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="275" rx="95" ry="18" fill="#000" opacity="0.6" />
            {/* Pedestal plinth */}
            <polygon points="130,240 270,240 290,270 110,270" fill="#161A26" stroke="#3A4460" strokeWidth="2" />
            <rect x="145" y="215" width="110" height="25" fill="#1D2232" stroke="#262D42" strokeWidth="1.5" />
            
            {/* Gargoyle Wing silhouette Left */}
            <path d="M160 170 Q100 130 90 70 Q130 110 160 140 Z" fill="#1F2437" stroke="#FB923C" strokeWidth="1.5" />
            {/* Wing silhouette Right */}
            <path d="M240 170 Q300 130 310 70 Q270 110 240 140 Z" fill="#1F2437" stroke="#FB923C" strokeWidth="1.5" />

            {/* Crouched Body */}
            <path d="M165 215 L180 130 L220 130 L235 215 Z" fill="#11141D" stroke="#546185" strokeWidth="2" />
            {/* Horned Cybernetic Head */}
            <polygon points="185,130 215,130 208,95 192,95" fill="#262D42" stroke="#FB923C" strokeWidth="2" />
            <polygon points="192,95 180,65 196,85" fill="#FB923C" />
            <polygon points="208,95 220,65 204,85" fill="#FB923C" />

            {/* Glowing optic lens */}
            <circle cx="196" cy="110" r="3" fill="#EA580C" />
            <circle cx="204" cy="110" r="3" fill="#EA580C" />
          </svg>
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-graphite-900/90 text-purple-400 border border-purple-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            8K RESIN / 0.08mm FDM
          </div>
        </div>
      );

    case 'precision-dial-caliper-holster':
      return (
        <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-graphite-900 to-graphite-950 ${className}`}>
          <div className="absolute inset-0 bg-blueprint-grid opacity-30"></div>
          <svg viewBox="0 0 400 320" className="w-full h-full p-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Pegboard matrix background */}
            <g opacity="0.25">
              {[80, 140, 200, 260, 320].map((x) =>
                [60, 110, 160, 210, 260].map((y) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#64748B" />
                ))
              )}
            </g>
            {/* Caliper Holster Body */}
            <rect x="160" y="80" width="80" height="170" rx="8" fill="#161A26" stroke="#FB923C" strokeWidth="2" />
            {/* Caliper profile sitting inside */}
            <rect x="188" y="45" width="24" height="210" rx="2" fill="#3A4460" stroke="#94A3B8" strokeWidth="1" />
            {/* Caliper digital screen bezel */}
            <rect x="175" y="110" width="50" height="35" rx="4" fill="#0C0E14" stroke="#F97316" strokeWidth="1.5" />
            <rect x="180" y="115" width="40" height="18" fill="#161A26" />
            <text x="183" y="128" fill="#10B981" fontSize="9" fontFamily="monospace">0.00</text>
            
            {/* Dual battery slot */}
            <circle cx="180" cy="205" r="7" fill="#0C0E14" stroke="#3A4460" strokeWidth="1" />
            <circle cx="220" cy="205" r="7" fill="#0C0E14" stroke="#3A4460" strokeWidth="1" />
            <text x="174" y="222" fill="#64748B" fontSize="7" fontFamily="monospace">LR44</text>
            <text x="214" y="222" fill="#64748B" fontSize="7" fontFamily="monospace">LR44</text>

            {/* Skadis mounting hook */}
            <path d="M160 100 L140 100 L140 120" stroke="#FB923C" strokeWidth="3" strokeLinecap="round" />
            <path d="M240 100 L260 100 L260 120" stroke="#FB923C" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-graphite-900/90 text-amber-400 border border-amber-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            SKADIS & MULTIBOARD
          </div>
        </div>
      );

    case 'parametric-kinetic-gyroscope':
      return (
        <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-graphite-900 to-graphite-950 ${className}`}>
          <div className="absolute inset-0 bg-blueprint-grid opacity-30"></div>
          <svg viewBox="0 0 400 320" className="w-full h-full p-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="270" rx="90" ry="18" fill="#000" opacity="0.6" />
            {/* Stand Base */}
            <polygon points="150,250 250,250 260,265 140,265" fill="#1D2232" stroke="#3A4460" strokeWidth="2" />
            <line x1="200" y1="250" x2="200" y2="200" stroke="#3A4460" strokeWidth="6" />

            {/* Outer Gimbal Ring */}
            <circle cx="200" cy="140" r="75" stroke="#FB923C" strokeWidth="6" fill="none" />
            {/* Middle Gimbal Ring angled ellipse */}
            <ellipse cx="200" cy="140" rx="55" ry="35" stroke="#EA580C" strokeWidth="5" fill="none" transform="rotate(35 200 140)" />
            {/* Inner Ring */}
            <ellipse cx="200" cy="140" rx="35" ry="20" stroke="#F59E0B" strokeWidth="4" fill="none" transform="rotate(-40 200 140)" />
            {/* Center Core Ball Bearing */}
            <circle cx="200" cy="140" r="14" fill="#0C0E14" stroke="#FFF" strokeWidth="2" />
            <circle cx="200" cy="140" r="6" fill="#F97316" />
            
            {/* Motion swirls */}
            <path d="M150 85 A70 70 0 0 1 245 85" stroke="#FB923C" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
            <path d="M155 195 A70 70 0 0 0 250 195" stroke="#FB923C" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
          </svg>
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono bg-graphite-900/90 text-amber-400 border border-amber-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            608 BEARING INTERFERENCE
          </div>
        </div>
      );

    default:
      return (
        <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-graphite-900 to-graphite-950 ${className}`}>
          <div className="absolute inset-0 bg-blueprint-grid opacity-30"></div>
          <svg viewBox="0 0 400 320" className="w-full h-full p-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="200,60 290,110 290,210 200,260 110,210 110,110" fill="#161A26" stroke="#FB923C" strokeWidth="2.5" />
            <line x1="200" y1="60" x2="200" y2="160" stroke="#EA580C" strokeWidth="2" />
            <line x1="200" y1="160" x2="290" y2="210" stroke="#EA580C" strokeWidth="2" />
            <line x1="200" y1="160" x2="110" y2="210" stroke="#EA580C" strokeWidth="2" />
          </svg>
        </div>
      );
  }
}
