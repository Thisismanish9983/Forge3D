import React from 'react';
import { Link } from 'react-router-dom';
import { Box, ArrowUpRight, Layers, Sparkles, ShieldCheck } from 'lucide-react';
import { BRAND_NAME } from './Navbar';

// Clean SVG Social Icons
function InstagramIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function YoutubeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
    </svg>
  );
}

function LinkedinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function FacebookIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-graphite-950 border-t border-graphite-800 text-slate-300 relative overflow-hidden">
      {/* Background blueprint grid styling */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />
      
      {/* Top Banner: MakerWorld community badge */}
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
          {/* Column 1: Brand Info (Takes 2 cols on lg) */}
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

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your Idea. We Make It 3D. Custom 3D modeling and precision 3D printing for products, prototypes, creators, and everyday ideas. From digital solid CAD to calibrated physical polymers.
            </p>

            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Connect With Our Workshop</div>
              <div className="flex items-center gap-2">
                {[
                  { name: 'MakerWorld', icon: Layers, href: 'https://makerworld.com/en/@atomicraft' },
                  { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com/forge3d_studio' },
                  { name: 'YouTube', icon: YoutubeIcon, href: 'https://youtube.com/@forge3d_studio' },
                  { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com/forge3d' },
                  { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com/company/forge3d-studio' },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-9 h-9 rounded-lg bg-graphite-900 border border-graphite-750 flex items-center justify-center text-slate-400 hover:text-white hover:border-copper-500/50 hover:bg-copper-500/10 transition-all"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2: Company */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-copper-400 font-semibold">Company</h3>
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

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-copper-400 font-semibold">Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">3D CAD Modeling</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">3D Product Design</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">CoreXY 3D Printing</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Rapid Prototyping</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Custom Modifications</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">MakerWorld Distribution</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-copper-400 font-semibold">Resources</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">FAQ & Slicing Guides</Link>
              </li>
              <li>
                <Link to="/custom-order" className="hover:text-white transition-colors flex items-center gap-1 text-copper-400 font-medium">
                  <span>Custom Order Form</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <a
                  href="https://makerworld.com/en/@atomicraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 group text-copper-400"
                >
                  <span className="group-hover:underline">MakerWorld Studio Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-copper-400" />
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Studio Location & Hours</Link>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Print Farm Status: Online
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="mt-14 pt-8 border-t border-graphite-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 {BRAND_NAME}. All rights reserved. Precision Additive Manufacturing Studio.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">3D Print Tolerances</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
