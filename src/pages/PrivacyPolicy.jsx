import React from 'react';
import { Shield, Lock, FileCheck, Database, EyeOff, Mail, CheckCircle2 } from 'lucide-react';
import { BRAND_NAME } from '../components/Navbar';

export default function PrivacyPolicy() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      {/* Header */}
      <section className="relative py-16 lg:py-20 border-b border-graphite-800 bg-graphite-950 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold bg-copper-500/10 px-3 py-1 rounded-full border border-copper-500/20">
              Legal & Data Confidentiality
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
              Privacy Policy & CAD Protection
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              Effective Date: January 1, 2026. How {BRAND_NAME} Studio safeguards client 3D models, proprietary design sketches, and personal contact information.
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
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white">
                1. Client CAD Files & Strict Intellectual Property NDA
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At {BRAND_NAME} Studio, we recognize that your concept sketches, CAD models, STEP files, STL meshes, and physical prototypes represent critical intellectual property. We treat all files shared with us under strict confidentiality:
            </p>
            <ul className="space-y-3 pt-2 text-sm text-slate-300 font-light">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>No Unauthorized Distribution:</strong> We will never resell, open-source, or upload your proprietary custom models to MakerWorld, Printables, Thingiverse, or any digital repository without your express written consent.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Full Ownership:</strong> You retain 100% intellectual property ownership of your submitted drawings and custom modeled parts.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Mutual NDA Support:</strong> We are glad to countersign mutual Non-Disclosure Agreements (NDAs) prior to receiving proprietary engineering files for commercial inventions or industrial hardware.</span>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="p-8 rounded-2xl bg-graphite-950 border border-graphite-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center text-copper-400">
                <Database className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white">
                2. Information We Collect
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We collect only the technical and operational details necessary to quote, model, and manufacture your physical 3D prints:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-graphite-900 border border-graphite-800">
                <h3 className="text-white font-semibold text-sm mb-1">Project & Engineering Data</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  3D geometry specifications, mechanical load requirements, chosen filament materials (PLA, PETG, ABS, TPU), infill density, target dimensions, and inspection criteria.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-graphite-900 border border-graphite-800">
                <h3 className="text-white font-semibold text-sm mb-1">Contact & Fulfillment Data</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Name, email address, phone / WhatsApp number, and physical shipping address strictly used to deliver manufactured 3D printed components via tracked couriers.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="p-8 rounded-2xl bg-graphite-950 border border-graphite-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center text-copper-400">
                <FileCheck className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white">
                3. File Retention & Secure Local Storage
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Files uploaded to {BRAND_NAME} are stored on secure local workstation drives with encrypted backups. We maintain client CAD files for 90 days after delivery to facilitate quick re-prints or replacement requests without re-uploading.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              <strong>Immediate Purge Option:</strong> If your project is sensitive, you may request that all STL, STEP, and G-code files be permanently deleted from our local drives immediately following delivery confirmation.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-8 rounded-2xl bg-graphite-950 border border-graphite-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center text-copper-400">
                <EyeOff className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white">
                4. Zero Third-Party Data Selling
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We do not sell, rent, monetize, or trade client personal data or technical drawings with advertisers, data brokers, or third parties. Information is shared strictly with essential logistical partners (e.g. shipping carriers like DHL, FedEx, or postal services) to deliver physical parcels.
            </p>
          </div>

          {/* Section 5 */}
          <div className="p-8 rounded-2xl bg-graphite-950 border border-graphite-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-copper-500/10 border border-copper-500/20 flex items-center justify-center text-copper-400">
                <Mail className="w-5 h-5" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white">
                5. Contact Workshop Privacy Team
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              For NDA inquiries, data deletion requests, or questions regarding our CAD privacy protocols, contact our studio directly:
            </p>
            <div className="p-4 rounded-xl bg-graphite-900 border border-graphite-800 font-mono text-sm space-y-1">
              <div className="text-copper-400 font-semibold">{BRAND_NAME} Studio — Engineering & Privacy Desk</div>
              <div className="text-slate-300">Email: privacy@{BRAND_NAME.toLowerCase()}.studio</div>
              <div className="text-slate-400 text-xs">Response time: Within 24 business hours</div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
