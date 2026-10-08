import React, { useState, useMemo } from 'react';
import { Search, HelpCircle, Sparkles, ArrowRight, MessageSquare, X } from 'lucide-react';
import FAQItem from '../components/FAQItem';
import Button from '../components/Button';
import { FAQ_DATA } from '../data/faq';

export default function FAQ() {
  const [openId, setOpenId] = useState('faq-1'); // Default first item open
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Custom Modeling', 'Design & References', '3D Printing', 'Materials', 'Turnaround & Timing', 'File Modifications', 'Replacement Parts', 'Shipping & Delivery', 'Dimensions & Scale', 'Getting Started'];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCat && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="pt-28 pb-20 min-h-screen">
      {/* Header */}
      <section className="relative py-16 lg:py-20 border-b border-graphite-800 bg-graphite-950 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold bg-copper-500/10 px-3 py-1 rounded-full border border-copper-500/20">
              Frequently Asked Questions
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
              Everything You Need To Know About 3D Modeling & Printing.
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-light">
              Clear answers regarding CAD design, tolerance standards, engineering polymers, replacement parts, and physical delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Accordion Section */}
      <section className="py-16 bg-graphite-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Live Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search answers (e.g. sketch, tolerances, STL, materials, delivery)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-graphite-900 border border-graphite-700/80 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 shadow-xl"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-copper-500 text-white font-semibold shadow-glow-copper border border-copper-400/40'
                    : 'bg-graphite-900 text-slate-300 hover:text-white hover:bg-graphite-800 border border-graphite-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => toggleAccordion(faq.id)}
                />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center rounded-2xl bg-graphite-900/40 border border-graphite-800 p-8 space-y-3">
              <HelpCircle className="w-8 h-8 text-copper-400 mx-auto" />
              <h3 className="font-display font-bold text-lg text-white">No questions matched "{searchQuery}"</h3>
              <p className="text-slate-400 text-xs">
                Have a specific question not covered here? Reach out to our engineering workshop directly.
              </p>
              <div className="pt-2">
                <Button to="/contact" variant="outline" size="sm">
                  Contact The Studio
                </Button>
              </div>
            </div>
          )}

          {/* Bottom Card */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-graphite-900 to-graphite-850 border border-graphite-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-1">
                Still have an unanswered question?
              </h3>
              <p className="text-slate-300 text-sm">
                Our technicians are ready to evaluate your CAD sketches or discuss print settings.
              </p>
            </div>
            <Button to="/contact" variant="copper" size="md" icon={MessageSquare} iconPosition="left">
              Ask The Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
