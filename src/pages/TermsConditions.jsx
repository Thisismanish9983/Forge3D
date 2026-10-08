import React from 'react';
import { FileText, Cpu, CheckCircle2, AlertTriangle, Layers, RotateCcw, ShieldCheck } from 'lucide-react';
import { BRAND_NAME } from '../components/Navbar';

export default function TermsConditions() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      {/* Header */}
      <section className="relative py-16 lg:py-20 border-b border-graphite-800 bg-graphite-950 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold bg-copper-500/10 px-3 py-1 rounded-full border border-copper-500/20">
              Service Agreement
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              Effective Date: January 1, 2026. Official operational terms governing custom 3D modeling, mesh slicing, and additive manufacturing services at {BRAND_NAME} Studio.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-graphite-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section 1 */}
          <div className="p-8 rounded-2xl bg-graphite-950 border border-graphite-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center text-copper-400">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white">
                1. Custom 3D Modeling & Design Revisions
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              When commission custom 3D modeling work with {BRAND_NAME}:
            </p>
            <ul className="space-y-3 pt-2 text-sm text-slate-300 font-light">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Design Specifications:</strong> The client is responsible for supplying initial reference drawings, sketches, or critical dimensions (inner/outer diameters, thread pitches, clearances).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Revision Policy:</strong> Every custom 3D modeling quote includes two (2) complimentary iteration rounds for dimension fine-tuning and geometry adjustment prior to physical slicing approval. Substantial changes to fundamental design concepts post-modeling may incur an adjustment fee.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Client Approval:</strong> Physical 3D printing starts strictly after the client has reviewed and approved the 3D preview render or digital mesh.</span>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="p-8 rounded-2xl bg-graphite-950 border border-graphite-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center text-copper-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white">
                2. Manufacturing Tolerances & Physical Limitations
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Additive manufacturing builds objects layer by layer using thermoplastics. Clients acknowledge the inherent physical characteristics of FDM/FFF 3D printing:
            </p>
            <div className="space-y-3 pt-2 text-sm text-slate-300">
              <div className="p-4 rounded-xl bg-graphite-900 border border-graphite-800 space-y-1">
                <div className="text-copper-400 font-semibold font-mono text-xs uppercase tracking-wider">Dimensional Tolerances</div>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Our CoreXY print farm achieves calibrated tolerances of ±0.08 mm to ±0.20 mm depending on part geometry, print orientation, and polymer shrinkage. Interlocking assemblies and snap-fits are designed with 0.25 – 0.35 mm clearance offsets.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-graphite-900 border border-graphite-800 space-y-1">
                <div className="text-copper-400 font-semibold font-mono text-xs uppercase tracking-wider">Layer Lines & Surface Texture</div>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Layer lines (0.12 mm to 0.20 mm layer height) are a natural aesthetic and structural trait of fused filament fabrication. They do not constitute a defect.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-graphite-900 border border-graphite-800 space-y-1">
                <div className="text-copper-400 font-semibold font-mono text-xs uppercase tracking-wider">Thermal Limits & Material Selection</div>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Standard PLA softens above 55°C (131°F) and is not intended for high-temperature car interiors or boiling fluids. PETG is rated up to 75°C, and ABS/ASA is rated up to 95°C+ for mechanical and outdoor UV duty.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="p-8 rounded-2xl bg-graphite-950 border border-graphite-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center text-copper-400">
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white">
                3. Client-Supplied 3D Files (STL, 3MF, STEP)
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              If you upload pre-existing 3D models for printing, {BRAND_NAME} inspects meshes for manifold watertightness and slice orientation. However, the client is responsible for structural wall thickness and functional viability unless custom Design for Additive Manufacturing (DfAM) optimization was requested.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-8 rounded-2xl bg-graphite-950 border border-graphite-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center text-copper-400">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white">
                4. Quality Guarantee & 7-Day Reprint Policy
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every part leaving our studio undergoes caliper measurement and visual layer inspection.
            </p>
            <ul className="space-y-3 pt-2 text-sm text-slate-300 font-light">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Free Immediate Reprint:</strong> If your part arrives with structural layer delamination, warped critical mating surfaces, or manufacturing discrepancies outside our stated ±0.08 mm - ±0.20 mm standard (not caused by an un-optimized client STL), notify us within 7 days of delivery with photos, and we will reprint and dispatch the part at no extra cost.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Custom Nature:</strong> Because custom 3D printed parts are fabricated to unique client specifications, cash refunds are not accepted once printing has commenced; our resolution policy is full reprint until tolerances are met.</span>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="p-8 rounded-2xl bg-graphite-950 border border-graphite-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center text-copper-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white">
                5. Safety Compliance & Prohibited Items
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {BRAND_NAME} Studio operates under strict safety and ethical standards. We unequivocally refuse requests to model, slice, or manufacture:
            </p>
            <ul className="space-y-2 pt-2 text-sm text-slate-300 font-light">
              <li className="flex items-center gap-2 text-red-400">
                <span>• Functional firearm receivers, frames, triggers, or ammunition components</span>
              </li>
              <li className="flex items-center gap-2 text-red-400">
                <span>• Lethal weapons, tactical blades, or weaponized hardware</span>
              </li>
              <li className="flex items-center gap-2 text-red-400">
                <span>• Counterfeits violating active intellectual property or trademark laws</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="p-8 rounded-2xl bg-graphite-950 border border-graphite-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center text-copper-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white">
                6. Studio Inquiries & Orders
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              For custom project clarifications or to submit detailed DFM (Design for Manufacturing) inquiries, reach our workshop team:
            </p>
            <div className="p-4 rounded-xl bg-graphite-900 border border-graphite-800 font-mono text-sm space-y-1">
              <div className="text-copper-400 font-semibold">{BRAND_NAME} Studio — Fabrication & Contracts</div>
              <div className="text-slate-300">Email: orders@{BRAND_NAME.toLowerCase()}.studio</div>
              <div className="text-slate-400 text-xs">Direct Studio Support: Mon – Sat, 09:00 – 19:00</div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
