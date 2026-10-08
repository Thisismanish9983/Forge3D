import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Box, Layers, Printer, Wrench, Sparkles, Download, ShieldCheck, Zap } from 'lucide-react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_DATA } from '../data/services';

export default function Services() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      {/* Header */}
      <section className="relative py-16 lg:py-20 border-b border-graphite-800 bg-graphite-950 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold bg-copper-500/10 px-3 py-1 rounded-full border border-copper-500/20">
              Studio Capabilities
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
              End-to-End 3D Engineering & Fabrication Services.
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-light">
              From pure digital CAD design to low-volume physical batch production, we support creators, hardware innovators, and everyday problem-solvers.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-20 bg-graphite-950 border-b border-graphite-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} detailed={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Workflow Comparison Matrix */}
      <section className="py-20 bg-graphite-900/60 border-b border-graphite-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold bg-copper-500/10 px-3 py-1 rounded-full border border-copper-500/20">
              Service Matrix
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4 mb-4">
              Which Service Matches Your Goal?
            </h2>
            <p className="text-slate-400 text-base">
              Whether you need only the CAD file, physical prints from an existing model, or full reverse engineering.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-graphite-800 bg-graphite-950">
            <table className="w-full text-left border-collapse font-sans text-sm">
              <thead>
                <tr className="border-b border-graphite-800 bg-graphite-900/80 font-mono text-xs uppercase text-slate-400">
                  <th className="p-4 sm:p-5">Service Tier</th>
                  <th className="p-4 sm:p-5">Input Needed</th>
                  <th className="p-4 sm:p-5">What You Receive</th>
                  <th className="p-4 sm:p-5">Typical Lead Time</th>
                  <th className="p-4 sm:p-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-graphite-800/70 text-slate-300">
                <tr className="hover:bg-graphite-900/50">
                  <td className="p-4 sm:p-5 font-semibold text-white">Custom 3D Modeling</td>
                  <td className="p-4 sm:p-5 text-slate-400">Sketch, photos, or caliper dimensions</td>
                  <td className="p-4 sm:p-5 text-copper-400">Watertight .STEP & .STL 3D files</td>
                  <td className="p-4 sm:p-5 font-mono text-xs">2 – 4 Days</td>
                  <td className="p-4 sm:p-5 text-right">
                    <Button to="/custom-order?service=Custom%203D%20Modeling" variant="outline" size="sm">
                      Request
                    </Button>
                  </td>
                </tr>
                <tr className="hover:bg-graphite-900/50">
                  <td className="p-4 sm:p-5 font-semibold text-white">Physical 3D Printing</td>
                  <td className="p-4 sm:p-5 text-slate-400">Existing STL / 3MF file</td>
                  <td className="p-4 sm:p-5 text-emerald-400">Calibrated printed parts in hand</td>
                  <td className="p-4 sm:p-5 font-mono text-xs">24 – 48 Hours</td>
                  <td className="p-4 sm:p-5 text-right">
                    <Button to="/custom-order?service=3D%20Printing" variant="outline" size="sm">
                      Request
                    </Button>
                  </td>
                </tr>
                <tr className="hover:bg-graphite-900/50">
                  <td className="p-4 sm:p-5 font-semibold text-white">Reverse Engineering</td>
                  <td className="p-4 sm:p-5 text-slate-400">Broken part sample or reference photos</td>
                  <td className="p-4 sm:p-5 text-copper-400">Reinforced CAD + physical replacement</td>
                  <td className="p-4 sm:p-5 font-mono text-xs">3 – 5 Days</td>
                  <td className="p-4 sm:p-5 text-right">
                    <Button to="/custom-order?service=Custom%20Modifications" variant="outline" size="sm">
                      Request
                    </Button>
                  </td>
                </tr>
                <tr className="hover:bg-graphite-900/50">
                  <td className="p-4 sm:p-5 font-semibold text-white">Rapid Prototyping Cycle</td>
                  <td className="p-4 sm:p-5 text-slate-400">Product concept & functional requirements</td>
                  <td className="p-4 sm:p-5 text-copper-400">Iterative prints + dimensional audit log</td>
                  <td className="p-4 sm:p-5 font-mono text-xs">1 – 2 Days / cycle</td>
                  <td className="p-4 sm:p-5 text-right">
                    <Button to="/custom-order?service=Rapid%20Prototyping" variant="outline" size="sm">
                      Request
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Ready to bring your concept into physical form?
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Submit your project parameters through our custom order portal. You will receive an engineering feasibility review within 4 hours.
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
