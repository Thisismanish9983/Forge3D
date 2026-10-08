import React from 'react';
import { Link } from 'react-router-dom';
import { Box, ArrowUpRight, ShieldCheck, Cpu } from 'lucide-react';
import { BRAND_NAME } from './Navbar';

export default function Footer() {
  return (
    <footer className="bg-graphite-950 border-t border-graphite-800 text-slate-300 relative overflow-hidden">
      {/* Background blueprint grid styling */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />
      
      {/* Top Banner: MakerWorld community & technical badge */}
      <div className="border-b border-graphite-800/80 bg-graphite-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <a
            href="https://makerworld.com/en/@atomicraft"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-mono text-slate-300 group-hover:text-copper-400 transition-colors">
              Active MakerWorld & Printables Creator Partner (@atomicraft)
            </span>
          </a>
          <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
            <span>45K+ Digital Downloads</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">100% Manifold 3D Models</span>
            <span>•</span>
            <span className="text-copper-400 font-semibold">Tolerances ±0.08mm</span>
          </div>
        </div>
      </div>

      {/* Main 4-column footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Column 1: Brand Info & Manufacturing Capabilities (Takes 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-copper-500 flex items-center justify-center shadow-glow-copper border border-copper-400/40">
                <Box className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-white">
                  {BRAND_NAME}
                  <span className="text-copper-400 font-mono text-xs ml-1.5 px-1.5 py-0.5 rounded bg-copper-500/10 border border-copper-500/20">STUDIO</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Additive Fabrication Lab</span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Your Idea. We Make It 3D. Custom 3D modeling and precision 3D printing for functional products, prototypes, creators, and everyday ideas. From digital solid CAD to calibrated physical polymers.
            </p>

            {/* In-house Fabrication Specs (Replaces generic social icons) */}
            <div className="p-4 rounded-xl bg-graphite-900/90 border border-graphite-800 space-y-2.5">
              <div className="text-xs font-mono uppercase tracking-wider text-copper-400 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-copper-500"></span>
                <span>Studio Fabrication Specs</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                <div>
                  <span className="text-slate-500 block text-[10px]">BUILD VOLUME:</span>
                  <span>Up to 350×350×400 mm</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">TOLERANCE:</span>
                  <span className="text-emerald-400 font-semibold">±0.08 mm Calibrated</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">CAD FORMATS:</span>
                  <span>STEP, STL, 3MF, OBJ</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">PRINT FARM:</span>
                  <span className="text-copper-300">24/7 Production Farm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Studio Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-copper-400 font-semibold">Studio</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services Overview</Link>
              </li>
              <li>
                <Link to="/models" className="hover:text-white transition-colors">3D Models Gallery</Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-white transition-colors">Our 5-Step Process</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Workshop</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Additive Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-copper-400 font-semibold">Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Custom 3D CAD Modeling</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">3D Product Design</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">High-Speed CoreXY Printing</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Functional Prototyping</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Multi-Material Engineering</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">MakerWorld Distribution</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Legal */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-copper-400 font-semibold">Resources & Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/custom-order" className="hover:text-white transition-colors flex items-center gap-1 text-copper-400 font-medium">
                  <span>Custom Order Form</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">FAQ & Slicing Guides</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy & CAD NDA</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Manufacturing Limits</Link>
              </li>
              <li>
                <a
                  href="https://makerworld.com/en/@atomicraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 group text-copper-400"
                >
                  <span className="group-hover:underline">MakerWorld Profile (@atomicraft)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-copper-400" />
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Print Farm Status: Online (24/7)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal strip */}
        <div className="mt-14 pt-8 border-t border-graphite-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm sm:text-base text-slate-200 font-medium">
            <span className="text-copper-400 font-bold text-xl inline-block leading-none">©</span>
            <span>2026 {BRAND_NAME} Studio. All Rights Reserved.</span>
            <span className="text-slate-600 hidden lg:inline">•</span>
            <span className="text-slate-400 font-normal text-xs sm:text-sm hidden lg:inline">
              Custom 3D Modeling & Precision Additive Manufacturing
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs sm:text-sm font-mono text-slate-300">
            <Link to="/privacy-policy" className="hover:text-copper-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link to="/terms-and-conditions" className="hover:text-copper-400 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
