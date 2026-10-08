import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Box, X, Download, ExternalLink, Sparkles, AlertCircle } from 'lucide-react';
import ModelCard from '../components/ModelCard';
import Button from '../components/Button';
import { MODELS_DATA, MODEL_CATEGORIES } from '../data/models';

export default function Models() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [materialFilter, setMaterialFilter] = useState('All');

  // React state filtering for search & category
  const filteredModels = useMemo(() => {
    return MODELS_DATA.filter((model) => {
      // Category check
      const matchesCategory =
        selectedCategory === 'All' ||
        model.category === selectedCategory ||
        model.altCategory === selectedCategory;

      // Material check
      const matchesMaterial =
        materialFilter === 'All' ||
        model.filament.toLowerCase().includes(materialFilter.toLowerCase());

      // Search query check (name, subtitle, description, tags)
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        model.name.toLowerCase().includes(query) ||
        model.category.toLowerCase().includes(query) ||
        model.shortDescription.toLowerCase().includes(query) ||
        model.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesMaterial && matchesQuery;
    });
  }, [searchQuery, selectedCategory, materialFilter]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setMaterialFilter('All');
  };

  return (
    <div className="pt-28 pb-20 min-h-screen">
      {/* Header */}
      <section className="relative py-16 lg:py-20 border-b border-graphite-800 bg-graphite-950 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold bg-copper-500/10 px-3 py-1 rounded-full border border-copper-500/20">
              MakerWorld Catalog
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
              3D Models & Digital Creations.
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-light">
              Explore our portfolio of tested, production-ready 3D models. Download verified profiles on MakerWorld or request custom physical prints crafted in our studio.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://makerworld.com/en/@atomicraft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-copper-500/10 hover:bg-copper-500/20 text-copper-400 border border-copper-500/30 text-xs font-mono tracking-wider uppercase font-semibold transition-all hover:border-copper-500 shadow-sm"
              >
                <span>MakerWorld Studio Profile (@atomicraft)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Toolbar */}
      <section className="py-8 bg-graphite-900/60 border-b border-graphite-800 sticky top-[73px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models, tags, or categories (e.g. Hex, MagSafe, Planter)..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-graphite-950 border border-graphite-700/80 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Material Filter Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 uppercase hidden sm:inline">Filament:</span>
              <select
                value={materialFilter}
                onChange={(e) => setMaterialFilter(e.target.value)}
                className="px-3 py-2.5 rounded-xl bg-graphite-950 border border-graphite-700/80 text-xs font-mono text-slate-200 focus:outline-none focus:border-copper-500"
              >
                <option value="All">All Materials</option>
                <option value="PLA">PLA / PLA+</option>
                <option value="PETG">PETG</option>
                <option value="TPU">TPU 95A</option>
                <option value="Carbon">Carbon Fiber</option>
                <option value="Resin">Resin / SLA</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 scrollbar-none">
            {MODEL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-copper-500 text-white font-semibold shadow-glow-copper border border-copper-400/40'
                    : 'bg-graphite-950 text-slate-300 hover:text-white hover:bg-graphite-800 border border-graphite-800'
                }`}
              >
                {cat}
              </button>
            ))}

            {(searchQuery || selectedCategory !== 'All' || materialFilter !== 'All') && (
              <button
                onClick={clearFilters}
                className="px-3 py-2 rounded-xl text-xs font-mono text-copper-400 hover:text-copper-300 underline underline-offset-4 ml-auto whitespace-nowrap"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-14 bg-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Active Result Count */}
          <div className="flex items-center justify-between mb-8 text-xs font-mono text-slate-400">
            <span>
              Showing <strong className="text-white">{filteredModels.length}</strong> of{' '}
              {MODELS_DATA.length} models
            </span>
            <span className="text-copper-400">All models verified on physical PEI plates</span>
          </div>

          {filteredModels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredModels.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center rounded-3xl bg-graphite-900/50 border border-graphite-800 max-w-lg mx-auto p-8 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-copper-500/10 text-copper-400 flex items-center justify-center mx-auto border border-copper-500/20">
                <AlertCircle className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">No models matched your criteria</h3>
              <p className="text-slate-400 text-sm">
                Try clearing your search query or switching categories. You can also request a completely custom design!
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <Button onClick={clearFilters} variant="secondary" size="sm">
                  Clear Filters
                </Button>
                <Button to="/custom-order" variant="copper" size="sm">
                  Request Custom Model
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
