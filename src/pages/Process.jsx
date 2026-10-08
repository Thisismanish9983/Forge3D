import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquareShare,
  Box,
  Eye,
  Printer,
  PackageCheck,
  CheckCircle2,
  ArrowRight,
  Compass,
  Cpu,
  Flame,
  ShieldCheck,
  Zap,
  Wrench,
  ChevronDown
} from 'lucide-react';
import Button from '../components/Button';
import ProcessTimeline from '../components/ProcessStep';
import { PROCESS_STEPS, WORKFLOW_DEEP_DIVE } from '../data/process';

export default function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const selectedStep = PROCESS_STEPS[activeStepIndex];

  return (
    <div className="pt-28 pb-20 min-h-screen">
      {/* Header */}
      <section className="relative py-16 lg:py-20 border-b border-graphite-800 bg-graphite-950 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold bg-copper-500/10 px-3 py-1 rounded-full border border-copper-500/20">
              The Studio Journey
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
              From Raw Concept To Calibrated Hardware.
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-light">
              Explore our systematic 5-step additive production workflow. Every stage is engineered to eliminate trial-and-error and guarantee physical accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Workflow Steps: IDEA -> DESIGN -> 3D MODEL -> REVIEW -> PRINT -> DELIVERY */}
      <section className="py-20 bg-graphite-950 border-b border-graphite-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold bg-copper-500/10 px-3 py-1 rounded-full border border-copper-500/20">
              Interactive Stage Inspector
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 mb-3">
              Click Any Step To Inspect Details
            </h2>
            <p className="text-slate-400 text-base">
              Select a stage from the timeline below to see our technical standards, tolerance checks, and customer touchpoints.
            </p>
          </div>

          {/* Interactive Timeline */}
          <ProcessTimeline
            steps={PROCESS_STEPS}
            activeStep={activeStepIndex}
            onSelectStep={(idx) => setActiveStepIndex(idx)}
          />

          {/* Deep-Dive Active Step Display */}
          <div className="mt-12 rounded-3xl bg-gradient-to-br from-graphite-900 via-graphite-850 to-graphite-950 border border-copper-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-copper-400 bg-copper-500/10 px-3 py-1 rounded-full border border-copper-500/20">
                    STAGE {selectedStep.step} OF 05
                  </span>
                  <span className="text-xs font-mono text-slate-400">{selectedStep.subtitle}</span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-4xl text-white">
                  {selectedStep.title}
                </h3>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  {selectedStep.description}
                </p>

                {/* Specific Action Points */}
                <div className="pt-2 space-y-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-copper-400 font-semibold block mb-2">
                    Studio Engineering Execution:
                  </span>
                  {selectedStep.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right telemetry stats badge */}
              <div className="lg:col-span-4 bg-graphite-950 border border-graphite-800 rounded-2xl p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-copper-500/20 text-copper-400 border border-copper-500/30 flex items-center justify-center mx-auto shadow-glow-copper">
                  <Cpu className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Benchmark Metric</div>
                  <div className="text-base font-bold text-copper-400 font-mono mt-1">
                    {selectedStep.technicalMetric}
                  </div>
                </div>
                <div className="pt-3 border-t border-graphite-800">
                  <Button to="/custom-order" variant="copper" size="sm" className="w-full">
                    Start At Step 01
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DfAM Principles Checklist */}
      <section className="py-20 bg-graphite-900/60 border-b border-graphite-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold bg-copper-500/10 px-3 py-1 rounded-full border border-copper-500/20">
              Additive Engineering
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 mb-4">
              Our 6 Pillars of Additive Design
            </h2>
            <p className="text-slate-400 text-base">
              How we guarantee parts print clean, hold up under tension, and look exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WORKFLOW_DEEP_DIVE.map((pillar, idx) => (
              <div key={idx} className="p-7 rounded-2xl bg-graphite-950 border border-graphite-800 space-y-4 shadow-lg">
                <div className="text-xs font-mono text-copper-400 font-bold uppercase">
                  Pillar 0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-xl text-white">{pillar.phase}</h3>
                <p className="text-xs text-slate-300 italic">{pillar.tagline}</p>
                <ul className="space-y-2 pt-2 border-t border-graphite-850">
                  {pillar.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-copper-400" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Ready to initiate Step 01?
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Send us your sketch, reference image, or idea description. No complex CAD files required to start.
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
