import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
        isOpen
          ? 'bg-graphite-900 border-copper-500/50 shadow-lg'
          : 'bg-graphite-900/80 border-graphite-800 hover:border-graphite-700'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-copper-500/50 rounded-xl"
        style={{ color: '#FFFFFF', backgroundColor: 'transparent' }}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-colors ${
              isOpen
                ? 'bg-copper-500 text-white shadow-glow-copper'
                : 'bg-graphite-800 text-copper-400 border border-graphite-700'
            }`}
          >
            Q
          </span>
          <span
            className="font-display font-bold text-base sm:text-lg text-left"
            style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}
          >
            {faq.question}
          </span>
        </div>

        <div
          className={`p-2 rounded-lg shrink-0 transition-transform duration-300 ${
            isOpen
              ? 'rotate-180 bg-copper-500 text-white'
              : 'bg-graphite-800 text-copper-400 hover:text-white'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {isOpen && (
        <div
          className="px-6 pb-6 pt-2 text-sm leading-relaxed border-t border-graphite-800/80 font-sans"
          style={{ color: '#E2E8F0' }}
        >
          <p className="pl-10">{faq.answer}</p>
          {faq.category && (
            <div className="mt-4 pt-3 border-t border-graphite-800/60 flex items-center gap-2 pl-10">
              <span className="text-[11px] font-mono text-slate-400">Category:</span>
              <span className="text-[11px] font-mono text-copper-300 px-2.5 py-0.5 rounded bg-copper-500/10 border border-copper-500/20">
                {faq.category}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
