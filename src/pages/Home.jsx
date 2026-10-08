import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Box,
  Layers,
  Printer,
  Sparkles,
  Flame,
  Cpu,
  CheckCircle2,
  Clock,
  ShieldCheck
} from 'lucide-react';
import Button from '../components/Button';
import Interactive3DViewer from '../components/Interactive3DViewer';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* =========================================================================
          HERO SECTION — "Your Idea. We Make It 3D."
          ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-graphite-800">
        {/* Subtle CAD Blueprint Grid */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-copper-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-7">
              {/* Studio Announcement Badge */}
              <a
                href="https://makerworld.com/en/@atomicraft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-graphite-900 border border-copper-500/30 text-xs font-mono text-copper-300 shadow-sm hover:border-copper-500/60 hover:text-copper-200 transition-colors cursor-pointer"
                title="View Atomicraft on MakerWorld"
              >
                <span className="w-2 h-2 rounded-full bg-copper-500 animate-ping" />
                <span>CUSTOM 3D MODELING & PHYSICAL PRINT LAB</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300 hidden sm:inline underline-offset-2 hover:underline">MakerWorld @atomicraft</span>
              </a>

              {/* Main Heading */}
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08]">
                Your Idea.{' '}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 via-amber-400 to-copper-500">
                  We Make It 3D.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl font-light">
                From digital concepts to physical objects — we design custom 3D models and turn them into real, printable products.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  to="/custom-order"
                  variant="copper"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Start a Custom Project
                </Button>
                <Button
                  to="/models"
                  variant="secondary"
                  size="lg"
                  icon={Box}
                  iconPosition="left"
                >
                  Explore 3D Models
                </Button>
              </div>

              {/* Clean Telemetry Quick Indicators */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-graphite-800/80 font-mono text-xs">
                <div>
                  <span className="text-slate-500 block">PRECISION:</span>
                  <span className="text-emerald-400 font-semibold">±0.08 mm Calibrated</span>
                </div>
                <div>
                  <span className="text-slate-500 block">MATERIALS:</span>
                  <span className="text-slate-200">PLA, PETG, ABS, TPU, CF</span>
                </div>
                <div>
                  <span className="text-slate-500 block">PLATFORMS:</span>
                  <a
                    href="https://makerworld.com/en/@atomicraft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-copper-400 hover:text-copper-300 hover:underline transition-colors inline-block font-semibold"
                    title="Visit @atomicraft on MakerWorld"
                  >
                    MakerWorld Partner
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 block">DISPATCH:</span>
                  <span className="text-slate-200">24 – 48h Print Farm</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column (5 cols) — High-Tech Mechanical Impeller 3D Viewport */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-copper-500/30 via-graphite-800 to-copper-500/10 blur-sm -z-10" />
                
                {/* 3D Interactive Viewport with 12-Blade Mechanical Impeller Rotor */}
                <Interactive3DViewer
                  modelType="turbine-rotor"
                  height="460px"
                  showControls={true}
                />
              </div>

              {/* Clean Telemetry Strip Below the Viewport (Completely outside and not overlapping the model) */}
              <div className="mt-4 p-3 rounded-xl bg-graphite-900/90 border border-graphite-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-mono text-slate-300">
                <div className="border-r border-graphite-800 pr-2">
                  <span className="text-[10px] text-slate-500 uppercase block">Hotend Temp</span>
                  <span className="text-copper-400 font-bold">215°C Extruder</span>
                </div>
                <div className="border-r border-graphite-800 pr-2">
                  <span className="text-[10px] text-slate-500 uppercase block">Layer Height</span>
                  <span className="text-emerald-400 font-bold">0.16 mm Adaptive</span>
                </div>
                <div className="border-r border-graphite-800 pr-2">
                  <span className="text-[10px] text-slate-500 uppercase block">Kinematics</span>
                  <span className="text-slate-200 font-bold">CoreXY Farm</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block">Tolerance</span>
                  <span className="text-emerald-400 font-bold">±0.08 mm</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          TRANSFORMATION WORKFLOW — Sketch → 3D Model → Printed Object
          ========================================================================= */}
      <section className="py-20 bg-graphite-950 relative border-b border-graphite-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl bg-gradient-to-br from-graphite-900 via-graphite-850 to-graphite-950 border border-graphite-800 p-8 sm:p-14 shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text Info */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold bg-copper-500/10 px-3 py-1 rounded-full border border-copper-500/20">
                  Custom Transformation
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white leading-tight">
                  Have an idea that doesn’t exist yet?
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Send us your concept, sketch or reference. We’ll turn it into a printable 3D model and ship the finished physical object to your door.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Button
                    to="/custom-order"
                    variant="copper"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right"
                  >
                    Tell Us Your Idea
                  </Button>
                </div>
              </div>

              {/* Transformation Visual: Sketch -> 3D Model -> Printed Object */}
              <div className="lg:col-span-6 bg-graphite-950/80 rounded-2xl border border-graphite-750 p-6 sm:p-8">
                <div className="text-xs font-mono text-copper-400 uppercase tracking-wider mb-6 flex items-center justify-between">
                  <span>How It Transforms</span>
                  <span className="text-slate-500">In-House Studio Workflow</span>
                </div>

                <div className="space-y-4">
                  {/* Step 1: Concept / Sketch */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-graphite-900 border border-graphite-800">
                    <div className="w-12 h-12 rounded-xl bg-copper-500/20 border border-copper-500/30 flex items-center justify-center text-copper-400 font-mono font-bold text-sm">
                      01
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">Your Concept or Sketch</div>
                      <div className="text-xs text-slate-400">Hand drawing, broken plastic part, or dimension photo</div>
                    </div>
                    <span className="text-xs font-mono text-slate-500">INPUT</span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center text-copper-500">
                    <div className="w-0.5 h-5 bg-copper-500/40" />
                  </div>

                  {/* Step 2: 3D CAD Solid */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-graphite-900 border border-copper-500/40 shadow-glow-copper">
                    <div className="w-12 h-12 rounded-xl bg-copper-500 text-white flex items-center justify-center font-mono font-bold text-sm shadow-md">
                      02
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">3D Parametric CAD Model</div>
                      <div className="text-xs text-slate-300">Watertight solid math, calibrated tolerances & snap-fits</div>
                    </div>
                    <span className="text-xs font-mono text-copper-400 font-semibold">CAD CORE</span>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center text-copper-500">
                    <div className="w-0.5 h-5 bg-copper-500/40" />
                  </div>

                  {/* Step 3: Physical Printed Object */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-graphite-900 border border-graphite-800">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
                      03
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">Finished Physical 3D Print</div>
                      <div className="text-xs text-slate-400">Layer-bonded engineering polymer in your hands</div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">DELIVERED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHAT WE DO — 3 Core Pillars with direct links to dedicated pages
          ========================================================================= */}
      <section className="py-20 bg-graphite-950 relative border-b border-graphite-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold bg-copper-500/10 px-3 py-1 rounded-full border border-copper-500/20">
              Core Capabilities
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white mt-4 mb-4">
              From Digital Model to Real Object.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Explore our core offerings — or use the top menu to view detailed specs, our model gallery, and engineering workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 01 */}
            <div className="group rounded-2xl bg-gradient-to-b from-graphite-900 to-graphite-950 border border-graphite-800 hover:border-copper-500/50 p-8 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-copper-500/10 border border-copper-500/30 flex items-center justify-center text-copper-400 group-hover:bg-copper-500 group-hover:text-white transition-all shadow-glow-copper">
                    <Box className="w-7 h-7" />
                  </div>
                  <span className="font-mono text-3xl font-extrabold text-graphite-700 group-hover:text-copper-500/40 transition-colors">
                    01
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-copper-400 transition-colors">
                  3D MODELING
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Turn your idea, sketch or reference into a precise 3D model with clean parametric topology engineered specifically for additive printing.
                </p>
              </div>
              <div className="pt-4 border-t border-graphite-800">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-copper-400 group-hover:text-copper-300"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Card 02 */}
            <div className="group rounded-2xl bg-gradient-to-b from-graphite-900 to-graphite-950 border border-graphite-800 hover:border-copper-500/50 p-8 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-copper-500/10 border border-copper-500/30 flex items-center justify-center text-copper-400 group-hover:bg-copper-500 group-hover:text-white transition-all shadow-glow-copper">
                    <Printer className="w-7 h-7" />
                  </div>
                  <span className="font-mono text-3xl font-extrabold text-graphite-700 group-hover:text-copper-500/40 transition-colors">
                    02
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-copper-400 transition-colors">
                  3D PRINTING
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Bring digital designs into the physical world with high-quality 3D printing using calibrated enclosed CoreXY printers and engineering polymers.
                </p>
              </div>
              <div className="pt-4 border-t border-graphite-800">
                <Link
                  to="/models"
                  className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-copper-400 group-hover:text-copper-300"
                >
                  <span>Browse 3D Models</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Card 03 */}
            <div className="group rounded-2xl bg-gradient-to-b from-graphite-900 to-graphite-950 border border-graphite-800 hover:border-copper-500/50 p-8 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-copper-500/10 border border-copper-500/30 flex items-center justify-center text-copper-400 group-hover:bg-copper-500 group-hover:text-white transition-all shadow-glow-copper">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <span className="font-mono text-3xl font-extrabold text-graphite-700 group-hover:text-copper-500/40 transition-colors">
                    03
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-copper-400 transition-colors">
                  CUSTOM DESIGN
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Need something unique? We design it specifically for your requirements — from broken appliance parts to bespoke ergonomic desk gear.
                </p>
              </div>
              <div className="pt-4 border-t border-graphite-800">
                <Link
                  to="/custom-order"
                  className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-copper-400 group-hover:text-copper-300"
                >
                  <span>Start Custom Order</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL ACTION CTA
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-graphite-950 via-graphite-900 to-graphite-950 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-copper-500/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold bg-copper-500/10 px-3.5 py-1.5 rounded-full border border-copper-500/20 inline-block">
            Ready To Fabricate?
          </span>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
            Got an idea? Let’s build it.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-light">
            Whether it’s a product, prototype, accessory or something completely new — tell us what you have in mind. We will turn it into calibrated 3D reality.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button
              to="/custom-order"
              variant="copper"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="text-base px-8 py-3.5"
            >
              Start Your Custom Project
            </Button>
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="text-base px-8 py-3.5"
            >
              Contact Workshop
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
