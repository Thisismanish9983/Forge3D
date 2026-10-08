import React from 'react';
import { MessageSquareShare, Box, Eye, Printer, PackageCheck, CheckCircle } from 'lucide-react';

const iconMap = {
  MessageSquareShare,
  Boxes: Box,
  Eye,
  Printer,
  PackageCheck
};

export default function ProcessTimeline({ steps, activeStep = null, onSelectStep = null }) {
  return (
    <div className="w-full">
      {/* Desktop Horizontal Timeline */}
      <div className="hidden lg:grid grid-cols-5 gap-4 relative">
        {/* Continuous connector line across desktop steps */}
        <div className="absolute top-9 left-12 right-12 h-0.5 bg-gradient-to-r from-copper-500/20 via-copper-500 to-copper-500/20 -z-0" />

        {steps.map((item, index) => {
          const IconComp = iconMap[item.icon] || Box;
          const isSelected = activeStep === index;

          return (
            <div
              key={item.step}
              onClick={() => onSelectStep && onSelectStep(index)}
              className={`relative z-10 flex flex-col p-5 rounded-2xl transition-all duration-300 border ${
                isSelected
                  ? 'bg-graphite-850 border-copper-500 shadow-glow-copper scale-105'
                  : 'bg-graphite-900/90 border-graphite-800 hover:border-copper-500/40 hover:-translate-y-1'
              } ${onSelectStep ? 'cursor-pointer' : ''}`}
            >
              {/* Step indicator node */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-graphite-950 border border-copper-500/40 flex items-center justify-center text-copper-400 shadow-sm">
                  <IconComp className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm font-bold text-copper-400 bg-copper-500/10 px-2 py-0.5 rounded">
                  {item.step}
                </span>
              </div>

              <h4 className="font-display font-bold text-base text-white mb-1.5">
                {item.title}
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                {item.summary}
              </p>

              {item.technicalMetric && (
                <div className="mt-4 pt-3 border-t border-graphite-800 text-[11px] font-mono text-copper-400">
                  {item.technicalMetric}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile / Tablet Vertical Timeline */}
      <div className="lg:hidden relative pl-6 space-y-6 before:absolute before:left-3 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-copper-500 before:via-copper-500/40 before:to-graphite-800">
        {steps.map((item, index) => {
          const IconComp = iconMap[item.icon] || Box;

          return (
            <div
              key={item.step}
              className="relative rounded-2xl bg-gradient-to-b from-graphite-900 to-graphite-950 border border-graphite-800 p-5 shadow-lg"
            >
              {/* Vertical connector bullet */}
              <div className="absolute -left-9 top-5 w-6 h-6 rounded-full bg-graphite-950 border-2 border-copper-500 flex items-center justify-center text-[10px] font-mono text-copper-400 font-bold shadow-glow-copper">
                {index + 1}
              </div>

              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-copper-500/10 text-copper-400 border border-copper-500/20">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-copper-400 font-semibold uppercase">{item.step}</span>
                  <h4 className="font-display font-bold text-base text-white">{item.title}</h4>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                {item.summary}
              </p>

              {item.technicalMetric && (
                <div className="text-[11px] font-mono text-copper-400 bg-graphite-950/80 px-2.5 py-1 rounded border border-graphite-800 inline-block">
                  {item.technicalMetric}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
