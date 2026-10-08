import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Download,
  Share2,
  Printer,
  CheckCircle2,
  Box,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  Info,
  Clock,
  Scale,
  Maximize2
} from 'lucide-react';
import Button from '../components/Button';
import Interactive3DViewer from '../components/Interactive3DViewer';
import ModelCard from '../components/ModelCard';
import { MODELS_DATA } from '../data/models';

export default function ModelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copiedLink, setCopiedLink] = useState(false);

  const model = MODELS_DATA.find((m) => m.id === id) || MODELS_DATA[0];

  // Related models from same category
  const relatedModels = MODELS_DATA.filter((m) => m.id !== model.id).slice(0, 3);

  const handleShare = () => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(window.location.href);
      }
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (err) {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 py-4 mb-6">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/models" className="hover:text-white transition-colors">3D Models</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-copper-400 truncate max-w-xs">{model.name}</span>
        </nav>

        {/* Top Header & Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-graphite-800">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="px-3 py-0.5 rounded-full text-xs font-mono bg-copper-500/10 text-copper-300 border border-copper-500/20">
                {model.category}
              </span>
              {model.badge && (
                <span className="px-3 py-0.5 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  {model.badge}
                </span>
              )}
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              {model.name}
            </h1>
            <p className="text-slate-400 text-sm sm:text-base mt-2 font-mono">
              {model.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="p-3 rounded-xl bg-graphite-900 border border-graphite-700 text-slate-300 hover:text-white hover:bg-graphite-800 transition-colors flex items-center gap-2 text-xs font-mono"
              title="Share Model Link"
            >
              <Share2 className="w-4 h-4" />
              <span>{copiedLink ? 'Copied Link!' : 'Share'}</span>
            </button>
            <Button
              to={`/custom-order?model=${encodeURIComponent(model.name)}`}
              variant="copper"
              size="md"
              icon={Printer}
              iconPosition="left"
            >
              Order Physical Print
            </Button>
          </div>
        </div>

        {/* Main 2-Column Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column (7 cols): Interactive 3D Viewport & Description */}
          <div className="lg:col-span-7 space-y-8">
            {/* Interactive 3D Canvas */}
            <div className="relative">
              <Interactive3DViewer
                modelType={model.id.includes('planter') ? 'planter' : model.id.includes('gyro') ? 'gyro' : model.id.includes('hex') ? 'hex-caddy' : 'turbine-rotor'}
                height="480px"
                showControls={true}
              />
            </div>

            {/* In-depth Overview */}
            <div className="rounded-2xl bg-graphite-900/60 border border-graphite-800 p-8 space-y-4">
              <h2 className="font-display font-bold text-2xl text-white">Engineering Overview</h2>
              <p className="text-slate-300 text-base leading-relaxed">
                {model.fullDescription}
              </p>

              {/* Key Features */}
              {model.features && (
                <div className="pt-4 space-y-2.5">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-copper-400 font-semibold mb-3">
                    Design Features & Tolerances:
                  </h3>
                  {model.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Slicer & Print Tips */}
              {model.printTips && (
                <div className="mt-6 p-4 rounded-xl bg-graphite-950 border border-copper-500/30 flex items-start gap-3">
                  <Info className="w-5 h-5 text-copper-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300 leading-relaxed font-mono">
                    <strong className="text-copper-400 block mb-1">RECOMMENDED SLICER SETTINGS:</strong>
                    {model.printTips}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column (5 cols): Technical Slicing Matrix & CTAs */}
          <div className="lg:col-span-5 space-y-6">
            {/* Slicing Specs Card */}
            <div className="rounded-2xl bg-graphite-900 border border-graphite-800 p-7 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-graphite-800">
                <span className="text-xs font-mono uppercase tracking-wider text-copper-400 font-semibold">
                  Technical Print Profile
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Manifold
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded-xl bg-graphite-950 border border-graphite-800">
                  <span className="text-slate-400 block mb-1">DIMENSIONS</span>
                  <span className="text-white font-bold">{model.dimensions}</span>
                </div>
                <div className="p-3 rounded-xl bg-graphite-950 border border-graphite-800">
                  <span className="text-slate-400 block mb-1">PRINT TIME</span>
                  <span className="text-copper-400 font-bold">{model.printTime}</span>
                </div>
                <div className="p-3 rounded-xl bg-graphite-950 border border-graphite-800">
                  <span className="text-slate-400 block mb-1">PART WEIGHT</span>
                  <span className="text-white font-bold">{model.weight}</span>
                </div>
                <div className="p-3 rounded-xl bg-graphite-950 border border-graphite-800">
                  <span className="text-slate-400 block mb-1">LAYER HEIGHT</span>
                  <span className="text-white font-bold">{model.layerHeight}</span>
                </div>
                <div className="p-3 rounded-xl bg-graphite-950 border border-graphite-800">
                  <span className="text-slate-400 block mb-1">RECOMMENDED INFILL</span>
                  <span className="text-white font-bold">{model.infill}</span>
                </div>
                <div className="p-3 rounded-xl bg-graphite-950 border border-graphite-800">
                  <span className="text-slate-400 block mb-1">SUPPORTS</span>
                  <span className="text-emerald-400 font-bold">
                    {model.supportRequired ? 'Tree Auto' : '0 (Self-Supporting)'}
                  </span>
                </div>
              </div>

              {/* Recommended Filament */}
              <div className="p-4 rounded-xl bg-graphite-950 border border-graphite-800 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-400">
                  <span>FILAMENT TYPE:</span>
                  <span className="text-copper-400 font-bold">{model.filament}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>SHOWCASE FINISH:</span>
                  <span className="text-slate-200">{model.filamentColor}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>ESTIMATED PRICE:</span>
                  <span className="text-white font-bold text-sm">{model.physicalPrice}</span>
                </div>
              </div>

              {/* Dual CTAs */}
              <div className="space-y-3 pt-2">
                <Button
                  to={`/custom-order?model=${encodeURIComponent(model.name)}`}
                  variant="copper"
                  size="lg"
                  icon={Printer}
                  iconPosition="right"
                  className="w-full"
                >
                  Order Physical 3D Print ({model.physicalPrice})
                </Button>

                <Button
                  href={model.makerWorldLink}
                  variant="secondary"
                  size="lg"
                  icon={Download}
                  iconPosition="left"
                  className="w-full"
                >
                  Download Free STL on MakerWorld
                </Button>
              </div>

              <div className="text-center text-[11px] font-mono text-slate-400">
                Commercial manufacturing license available upon inquiry.
              </div>
            </div>

            {/* Need modifications card */}
            <div className="p-6 rounded-2xl bg-graphite-950 border border-graphite-800 space-y-3">
              <h4 className="font-display font-bold text-base text-white">Need This Resized or Modified?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Want this model adjusted for custom screw sizes, branded with your company logo, or adapted for a specific desk edge?
              </p>
              <Link
                to={`/custom-order?service=Custom%20Modifications&reference=${encodeURIComponent(model.name)}`}
                className="text-xs font-mono font-semibold text-copper-400 hover:text-copper-300 inline-flex items-center gap-1.5"
              >
                <span>Request Custom Modification</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Models Section */}
        <section className="mt-24 pt-16 border-t border-graphite-800">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-bold text-2xl text-white">More Studio 3D Models</h2>
            <Link to="/models" className="text-xs font-mono text-copper-400 hover:text-copper-300">
              View All ({MODELS_DATA.length}) →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedModels.map((m) => (
              <ModelCard key={m.id} model={m} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
