import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Compass,
  Cpu,
  Flame,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Layers,
  Wrench,
  Sparkles,
  Zap,
  ExternalLink
} from 'lucide-react';
import Button from '../components/Button';
import { STUDIO_STATS } from '../data/testimonials';
import { BRAND_NAME } from '../components/Navbar';

export default function About() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-20 border-b border-graphite-800 bg-graphite-950 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold bg-copper-500/10 px-3 py-1 rounded-full border border-copper-500/20">
              Inside The Studio
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
              Crafting The Physical World From Digital Code.
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-light">
              Forge3D is a dedicated 3D modeling and additive manufacturing workshop. We combine industrial design rigor with calibrated multi-material 3D printing to turn ambitious ideas into durable physical hardware.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {STUDIO_STATS.map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-gradient-to-b from-graphite-900 to-graphite-950 border border-graphite-800 text-left shadow-lg"
              >
                <div className="font-display font-black text-2xl sm:text-3xl text-copper-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-white mb-1">{stat.label}</div>
                <div className="text-[11px] font-mono text-slate-400 leading-tight">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Who We Are & What We Create */}
      <section className="py-20 bg-graphite-900/50 border-b border-graphite-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold">
                Our Genesis
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                Who We Are
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Forge3D was founded by product designers and additive manufacturing specialists tired of generic render agencies that produce 3D models which look pretty on screen but fail the second they hit a 3D printer build plate.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                Our studio lives at the exact intersection of digital CAD engineering and hands-on fabrication. Every day, our workshop is alive with the rhythmic motion of CoreXY gantries, the smell of warm polymers, and the click of precision digital calipers auditing sub-millimeter tolerances.
              </p>

              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0" />
                  <span>In-house CAD engineers with parametric solid modeling background</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0" />
                  <span>Dedicated print farm running tuned Bambu & Prusa machines</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0" />
                  <span>
                    MakerWorld verified creators (
                    <a
                      href="https://makerworld.com/en/@atomicraft"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-copper-400 hover:text-copper-300 hover:underline font-mono inline-flex items-center gap-1 font-semibold"
                    >
                      @atomicraft <ExternalLink className="w-3 h-3 inline" />
                    </a>
                    ) with thousands of active global prints
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0" />
                  <span>Zero outsourcing — every part designed and printed under one roof</span>
                </div>
              </div>
            </div>

            {/* Studio Equipment Architecture Card */}
            <div className="rounded-3xl bg-graphite-950 border border-graphite-800 p-8 shadow-2xl relative">
              <div className="text-xs font-mono uppercase tracking-widest text-copper-400 mb-6 flex items-center justify-between">
                <span>Studio Hardware Stack</span>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Farm Online
                </span>
              </div>

              <div className="space-y-4">
                {[
                  {
                    tech: 'Enclosed CoreXY FDM Print Farm',
                    specs: 'Bambu Lab X1-Carbon / P1S units with AMS multi-material feeding',
                    capability: 'Up to 256 × 256 × 256 mm build volume'
                  },
                  {
                    tech: 'High-Temperature Chamber Enclosures',
                    specs: 'Controlled 60°C heated environment for ABS, ASA, and Polycarbonate',
                    capability: 'Zero warping on structural industrial brackets'
                  },
                  {
                    tech: '8K High-Resolution SLA Resin Station',
                    specs: '22-micron pixel precision with ultrasonic alcohol wash & post-curing',
                    capability: 'Micro-sculptures, figurines & master molds'
                  },
                  {
                    tech: 'Tolerance Verification Tools',
                    specs: 'Mitutoyo 0.01mm digital calipers, feeler gauges, thread testers',
                    capability: 'Every piece audited before packaging'
                  }
                ].map((eq, i) => (
                  <div key={i} className="p-4 rounded-xl bg-graphite-900 border border-graphite-800">
                    <div className="text-sm font-semibold text-white mb-1">{eq.tech}</div>
                    <div className="text-xs text-slate-400 mb-2">{eq.specs}</div>
                    <div className="text-[11px] font-mono text-copper-400 bg-graphite-950 px-2 py-0.5 rounded inline-block">
                      {eq.capability}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Create */}
      <section className="py-20 bg-graphite-950 border-b border-graphite-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold bg-copper-500/10 px-3 py-1 rounded-full border border-copper-500/20">
              Product Spectrum
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4 mb-4">
              What We Create
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              We specialize in functional hardware and thoughtful aesthetics that take full advantage of additive manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-graphite-900 border border-graphite-800 hover:border-copper-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-copper-500/10 text-copper-400 flex items-center justify-center mb-6">
                <Box className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Functional Organizers & EDC</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Modular snap-fit desktop caddies, under-desk cable management conduits, caliper holsters, and customized gear racks engineered for daily durability.
              </p>
              <span className="text-xs font-mono text-copper-400">Zero-support geometry • Snap-fit tolerances</span>
            </div>

            <div className="p-8 rounded-2xl bg-graphite-900 border border-graphite-800 hover:border-copper-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Replacement & Obsolete Parts</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Discontinued gears, broken car dashboard clips, specialty appliance brackets, and custom adapters that prevent functional machines from ending up in landfills.
              </p>
              <span className="text-xs font-mono text-cyan-400">High-temp ASA • Tough PETG • Reinforced gears</span>
            </div>

            <div className="p-8 rounded-2xl bg-graphite-900 border border-graphite-800 hover:border-copper-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">Parametric Art & Planters</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Algorithmic Voronoi cellular vessels, watertight self-watering botanical planters, kinetic triple-axis gyroscopes, and high-detail display miniatures.
              </p>
              <span className="text-xs font-mono text-amber-400">Watertight walls • Algorithmic geometry</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Philosophy & Why 3D Printing */}
      <section className="py-20 bg-graphite-900/60 border-b border-graphite-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 sm:p-10 rounded-3xl bg-graphite-950 border border-graphite-800 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold">
                Studio Philosophy
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Design for Additive Manufacturing (DfAM)
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Most traditional designers design for injection molding or CNC milling. When those files are sent to a 3D printer, they require massive amounts of support material, waste plastic, and produce weak layer shear planes.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                At Forge3D, we practice DfAM from the very first CAD sketch. We align critical structural loads along layer-parallel planes, design self-supporting 45-degree chamfers, and dial in print-in-place tolerances so parts emerge from the printer ready to use.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-graphite-950 border border-graphite-800 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold">
                The Additive Advantage
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Why On-Demand 3D Printing?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                3D printing allows for complexity that no traditional mold could ever create — internal gyroid infills for featherweight stiffness, internal capillary water channels, and print-in-place moving ball joints with zero manual assembly.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Best of all, there are no expensive \$10,000 injection mold tooling fees or 10-week waiting times. You can iterate through four revisions in one week and have a production part in your hands in 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Have a project in mind for our workshop?
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Tell us what you want to build. We’ll review your dimensions, give you honest engineering advice, and get the printers spinning.
          </p>
          <div className="pt-2">
            <Button to="/custom-order" variant="copper" size="lg" icon={ArrowRight} iconPosition="right">
              Start a Custom Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
