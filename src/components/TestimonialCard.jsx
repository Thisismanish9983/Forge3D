import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="rounded-2xl bg-gradient-to-b from-graphite-900 to-graphite-950 border border-graphite-800 p-6 flex flex-col justify-between relative shadow-xl hover:border-copper-500/40 transition-all duration-300">
      <div>
        {/* Rating Stars & Project Type Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-copper-400">
            {[...Array(testimonial.rating || 5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-copper-400 text-copper-400" />
            ))}
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-copper-500/10 text-copper-300 border border-copper-500/20">
            {testimonial.projectType}
          </span>
        </div>

        {/* Headline */}
        <h4 className="font-display font-semibold text-base text-white mb-3 leading-snug">
          "{testimonial.headline}"
        </h4>

        {/* Testimonial text */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {testimonial.content}
        </p>

        {/* Tag chips */}
        {testimonial.tags && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {testimonial.tags.map((tag, i) => (
              <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-graphite-800 text-slate-400 border border-graphite-700">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Author details */}
      <div className="pt-4 border-t border-graphite-800 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-copper-600 to-amber-500 flex items-center justify-center font-mono font-bold text-sm text-white shadow-glow-copper shrink-0">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-display font-semibold text-sm text-white">{testimonial.name}</div>
          <div className="text-xs text-slate-400 font-mono">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
