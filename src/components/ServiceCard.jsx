import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Layers, Printer, Wrench, Sparkles, Download, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Boxes: Box,
  Layers: Layers,
  Printer: Printer,
  Wrench: Wrench,
  Sparkles: Sparkles,
  Download: Download,
};

export default function ServiceCard({ service, detailed = false }) {
  const IconComponent = iconMap[service.icon] || Box;

  return (
    <div className="group rounded-2xl bg-gradient-to-b from-graphite-900 to-graphite-950 border border-graphite-800 hover:border-copper-500/50 p-7 transition-all duration-300 relative flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-copper-500/10">
      {/* Background CAD grid subtle */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none rounded-2xl" />

      {/* Top Number & Icon */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-copper-500/10 border border-copper-500/30 flex items-center justify-center text-copper-400 group-hover:bg-copper-500 group-hover:text-white transition-all duration-300 shadow-glow-copper">
            <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
          </div>
          <span className="font-mono text-2xl font-bold text-graphite-700 group-hover:text-copper-500/40 transition-colors">
            {service.number}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="font-display font-bold text-xl text-white mb-2.5 group-hover:text-copper-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {detailed && (
          <>
            <p className="text-slate-400 text-xs leading-relaxed mb-6 border-l-2 border-copper-500/40 pl-3">
              {service.fullDescription}
            </p>

            {/* Deliverables List */}
            {service.deliverables && (
              <div className="mb-6 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-copper-400 font-semibold mb-2">
                  What We Deliver:
                </div>
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-copper-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Turnaround Badge */}
            {service.turnaround && (
              <div className="mb-6 px-3 py-1.5 rounded-lg bg-graphite-800/80 border border-graphite-700/80 text-[11px] font-mono text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-copper-400"></span>
                <span>{service.turnaround}</span>
              </div>
            )}
          </>
        )}
      </div>

      {/* Action CTA */}
      <div className="pt-4 border-t border-graphite-800/80 flex items-center justify-between">
        <Link
          to={`/custom-order?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-copper-400 group-hover:text-copper-300 transition-colors"
        >
          <span>Start With This Service</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
