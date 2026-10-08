import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Layers, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import ModelPreviewGraphic from './ModelPreviewGraphic';

export default function ModelCard({ model }) {
  return (
    <div className="group rounded-2xl bg-gradient-to-b from-graphite-900 to-graphite-950 border border-graphite-800 hover:border-copper-500/40 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-copper-500/10">
      {/* Visual Render Container */}
      <Link to={`/models/${model.id}`} className="relative block h-56 overflow-hidden bg-graphite-950">
        <ModelPreviewGraphic modelId={model.id} className="w-full h-full transition-transform duration-500 group-hover:scale-105" />
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-graphite-950/85 backdrop-blur-md text-copper-400 border border-copper-500/30">
            {model.category}
          </span>
        </div>

        {/* Badge if available */}
        {model.badge && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              {model.badge}
            </span>
          </div>
        )}

        {/* Technical quick spec overlay on hover */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-graphite-950 via-graphite-950/80 to-transparent flex items-center justify-between text-[11px] font-mono text-slate-300">
          <span>{model.dimensions}</span>
          <span className="text-copper-400 font-semibold">{model.printTime}</span>
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <Link to={`/models/${model.id}`}>
              <h3 className="font-display font-bold text-lg text-white group-hover:text-copper-400 transition-colors">
                {model.name}
              </h3>
            </Link>
          </div>
          <p className="text-xs font-mono text-slate-400 mb-3">{model.subtitle}</p>
          <p className="text-slate-300 text-sm line-clamp-2 leading-relaxed mb-4">
            {model.shortDescription}
          </p>

          {/* Filament & Layer specs */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-graphite-800 text-slate-300 border border-graphite-700">
              {model.filament}
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-graphite-800 text-slate-300 border border-graphite-700">
              {model.layerHeight}
            </span>
            {model.supportRequired === false && (
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-copper-500/10 text-copper-300 border border-copper-500/20">
                0 Supports
              </span>
            )}
          </div>
        </div>

        {/* Actions Bar */}
        <div className="pt-4 border-t border-graphite-800/80 flex items-center justify-between gap-2">
          <Link
            to={`/models/${model.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-copper-400 hover:text-copper-300 transition-colors"
          >
            <span>View 3D Specs</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to={`/custom-order?model=${encodeURIComponent(model.name)}`}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-graphite-800 hover:bg-copper-500 hover:text-white text-slate-200 border border-graphite-700 hover:border-copper-500 transition-all"
          >
            Order Print
          </Link>
        </div>
      </div>
    </div>
  );
}
