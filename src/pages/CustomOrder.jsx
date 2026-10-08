import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Box,
  Layers,
  Sparkles,
  RefreshCw,
  FileText,
  Clock,
  ShieldCheck,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import Button from '../components/Button';
import FileUpload from '../components/FileUpload';

export default function CustomOrder() {
  const [searchParams] = useSearchParams();
  const prefillModel = searchParams.get('model');
  const prefillService = searchParams.get('service');
  const prefillRef = searchParams.get('reference');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Custom Product',
    approximateSize: '',
    materialPreference: 'Not Sure',
    quantity: '1',
    description: '',
    file: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [orderReferenceId, setOrderReferenceId] = useState('');

  // Prefill description or project type if navigated from a model or service
  useEffect(() => {
    let initialDesc = '';
    let initialType = 'Custom Product';

    if (prefillModel) {
      initialDesc = `I would like to order a physical 3D print of the "${prefillModel}" model.`;
      initialType = 'Functional Object';
    } else if (prefillService) {
      initialDesc = `Inquiry regarding ${prefillService} service.`;
      if (prefillService.includes('Modifications')) initialType = 'Replacement Part';
      if (prefillService.includes('Prototype')) initialType = 'Prototype';
    } else if (prefillRef) {
      initialDesc = `I need a custom modification based on "${prefillRef}".`;
      initialType = 'Replacement Part';
    }

    if (initialDesc) {
      setFormData((prev) => ({
        ...prev,
        projectType: initialType,
        description: initialDesc
      }));
    }
  }, [prefillModel, prefillService, prefillRef]);

  const maxDescriptionChars = 1000;

  const validate = () => {
    const newErrors = {};

    // Full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name';
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@domain.com)';
    }

    // Phone
    const phoneClean = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for dimension verification';
    } else if (phoneClean.length < 7 || !/^\d+$/.test(phoneClean)) {
      newErrors.phone = 'Please provide a valid contact number (at least 7 digits)';
    }

    // Description
    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your idea, dimensions, or application requirements';
    } else if (formData.description.trim().length < 15) {
      newErrors.description = 'Please provide a bit more detail (minimum 15 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      // Scroll to top of form
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    // Simulate realistic frontend processing delay
    setTimeout(() => {
      const generatedId = `F3D-${Math.floor(10000 + Math.random() * 90000)}`;
      setOrderReferenceId(generatedId);
      setSubmittedData({ ...formData, refId: generatedId, timestamp: new Date().toLocaleDateString() });
      setIsSubmitting(false);
      setSubmissionSuccess(true);

      // Trigger celebratory micro-interaction
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f97316', '#fb923c', '#ea580c', '#38bdf8', '#ffffff']
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectType: 'Custom Product',
      approximateSize: '',
      materialPreference: 'Not Sure',
      quantity: '1',
      description: '',
      file: null
    });
    setErrors({});
    setSubmissionSuccess(false);
    setSubmittedData(null);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen">
      {/* Header */}
      <section className="relative py-16 lg:py-20 border-b border-graphite-800 bg-graphite-950 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold bg-copper-500/10 px-3 py-1 rounded-full border border-copper-500/20">
              Start Your Build
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
              Tell Us What You Want To Create.
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-light">
              Submit your project requirements, upload reference images or existing 3D files. We review dimensions, verify print feasibility, and respond within 4 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Form Area */}
      <section className="py-16 bg-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Columns: Interactive Form or Success Receipt */}
            <div className="lg:col-span-8">
              {submissionSuccess ? (
                /* Simulated Submission Success Modal / State */
                <div className="rounded-3xl bg-gradient-to-b from-graphite-900 to-graphite-950 border border-copper-500/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-copper-500/10 blur-3xl pointer-events-none" />

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-glow-copper">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-copper-400 font-semibold">
                        Frontend Simulation Complete
                      </span>
                      <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                        Your project request has been received. We’ll get back to you soon.
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed mb-8">
                    Thank you, <strong className="text-white">{submittedData?.fullName}</strong>. Our engineering team has logged your submission into our review queue under Reference ID{' '}
                    <span className="font-mono text-copper-400 font-bold px-2 py-0.5 rounded bg-copper-500/10 border border-copper-500/20">
                      {orderReferenceId}
                    </span>
                    . We are inspecting your requested material ({submittedData?.materialPreference}) and dimensions.
                  </p>

                  {/* Order Summary Receipt Box */}
                  <div className="rounded-2xl bg-graphite-950 border border-graphite-800 p-6 mb-8 font-mono text-xs space-y-3">
                    <div className="text-xs uppercase text-slate-400 font-bold pb-2 border-b border-graphite-800">
                      Simulated Order Receipt Summary
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-slate-300">
                      <div><span className="text-slate-400">Order Ref:</span> #{orderReferenceId}</div>
                      <div><span className="text-slate-400">Date:</span> {submittedData?.timestamp}</div>
                      <div><span className="text-slate-400">Email:</span> {submittedData?.email}</div>
                      <div><span className="text-slate-400">Phone:</span> {submittedData?.phone}</div>
                      <div><span className="text-slate-400">Project Type:</span> {submittedData?.projectType}</div>
                      <div><span className="text-slate-400">Quantity:</span> {submittedData?.quantity} unit(s)</div>
                      <div><span className="text-slate-400">Material:</span> {submittedData?.materialPreference}</div>
                      <div><span className="text-slate-400">Dimensions:</span> {submittedData?.approximateSize || 'To be specified'}</div>
                    </div>
                    {submittedData?.file && (
                      <div className="pt-2 border-t border-graphite-800 text-slate-300">
                        <span className="text-slate-400">Attached Reference:</span> {submittedData.file.name} ({submittedData.file.size})
                      </div>
                    )}
                    <div className="pt-2 border-t border-graphite-800 text-slate-300">
                      <span className="text-slate-400 block mb-1">Brief Description:</span>
                      <p className="text-slate-200 font-sans">{submittedData?.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Button onClick={handleReset} variant="copper" size="md" icon={RefreshCw} iconPosition="left">
                      Submit Another Project Request
                    </Button>
                    <Button to="/models" variant="secondary" size="md">
                      Explore Ready 3D Models
                    </Button>
                  </div>
                </div>
              ) : (
                /* The Custom Order Form */
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl bg-gradient-to-b from-graphite-900 to-graphite-950 border border-graphite-800 p-8 sm:p-12 shadow-2xl space-y-8"
                  noValidate
                >
                  <div className="border-b border-graphite-800 pb-4">
                    <h2 className="font-display font-bold text-2xl text-white">Project Information</h2>
                    <p className="text-xs text-slate-400 font-mono mt-1">
                      All fields with an asterisk (*) are required.
                    </p>
                  </div>

                  {/* Row 1: Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Marcus Vance"
                        className={`w-full px-4 py-3 rounded-xl bg-graphite-950 border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 ${
                          errors.fullName
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                            : 'border-graphite-700 focus:border-copper-500 focus:ring-copper-500'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="marcus@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-graphite-950 border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                            : 'border-graphite-700 focus:border-copper-500 focus:ring-copper-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 019-2834"
                        className={`w-full px-4 py-3 rounded-xl bg-graphite-950 border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 ${
                          errors.phone
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                            : 'border-graphite-700 focus:border-copper-500 focus:ring-copper-500'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Project Type */}
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-graphite-950 border border-graphite-700 text-sm text-white focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500"
                      >
                        <option value="Custom Product">Custom Product</option>
                        <option value="Replacement Part">Replacement Part</option>
                        <option value="Prototype">Prototype</option>
                        <option value="Decorative Object">Decorative Object</option>
                        <option value="Functional Object">Functional Object</option>
                        <option value="Other">Other Unique Requirement</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Approximate Size & Material Preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Approximate Size */}
                    <div>
                      <label htmlFor="approximateSize" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Approximate Size (L × W × H)
                      </label>
                      <input
                        id="approximateSize"
                        type="text"
                        name="approximateSize"
                        value={formData.approximateSize}
                        onChange={handleInputChange}
                        placeholder="e.g. 150 × 80 × 40 mm or 6 x 3 x 2 inches"
                        className="w-full px-4 py-3 rounded-xl bg-graphite-950 border border-graphite-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500"
                      />
                      <span className="text-[11px] font-mono text-slate-400 mt-1 block">
                        Leave blank if you’d like us to recommend sizing.
                      </span>
                    </div>

                    {/* Material Preference */}
                    <div>
                      <label htmlFor="materialPreference" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Material Preference *
                      </label>
                      <select
                        id="materialPreference"
                        name="materialPreference"
                        value={formData.materialPreference}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-graphite-950 border border-graphite-700 text-sm text-white focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500"
                      >
                        <option value="PLA">PLA / PLA+ (General Purpose & Detailed Decor)</option>
                        <option value="PETG">PETG (Impact Resistant & Tough Functional Tools)</option>
                        <option value="ABS">ABS / ASA (High Heat & Automotive 100°C)</option>
                        <option value="TPU">TPU 95A (Flexible Rubber-like & Shockproof)</option>
                        <option value="Not Sure">Not Sure (Recommend based on application)</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Quantity Selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2.5">
                      Quantity Needed *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {['1', '2–5', '6–20', '20+'].map((qty) => (
                        <button
                          key={qty}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, quantity: qty }))}
                          className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-mono font-medium border transition-all ${
                            formData.quantity === qty
                              ? 'bg-copper-500/20 text-copper-300 border-copper-500 shadow-sm'
                              : 'bg-graphite-950 text-slate-400 border-graphite-800 hover:border-slate-700 hover:text-white'
                          }`}
                        >
                          {qty} Unit{qty !== '1' ? 's' : ''}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 5: Project Description */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="description" className="block text-xs font-mono uppercase tracking-wider text-slate-300">
                        Project Description *
                      </label>
                      <span className="text-[11px] font-mono text-slate-400">
                        {formData.description.length} / {maxDescriptionChars} chars
                      </span>
                    </div>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      maxLength={maxDescriptionChars}
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Explain what the object does, how it will be mounted, any mating hardware (screws, bearings), or what problem it solves..."
                      className={`w-full px-4 py-3 rounded-xl bg-graphite-950 border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 ${
                        errors.description
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-graphite-700 focus:border-copper-500 focus:ring-copper-500'
                      }`}
                    />
                    {errors.description && (
                      <p className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.description}
                      </p>
                    )}
                  </div>

                  {/* Row 6: Frontend File Upload UI */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Reference Image / 3D CAD File (Optional)
                    </label>
                    <FileUpload
                      file={formData.file}
                      onFileChange={(fileData) => setFormData((prev) => ({ ...prev, file: fileData }))}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-graphite-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Button
                      type="submit"
                      variant="copper"
                      size="lg"
                      icon={Send}
                      iconPosition="right"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto min-w-[220px]"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <RefreshCw className="w-4 h-4 animate-spin" /> Verifying Dimensions...
                        </span>
                      ) : (
                        'Submit Project Request'
                      )}
                    </Button>

                    <div className="text-xs font-mono text-slate-400 flex items-center gap-2 text-center sm:text-right">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Simulated frontend submission • Non-disclosure honored</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Right 4 Columns: Studio Guarantee & Assistance Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Studio Guarantees Card */}
              <div className="rounded-2xl bg-graphite-900 border border-graphite-800 p-6 space-y-5 shadow-xl">
                <span className="text-xs font-mono uppercase tracking-wider text-copper-400 font-semibold">
                  The Forge3D Promise
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  Why Submit With Us?
                </h3>

                <div className="space-y-4 text-xs leading-relaxed text-slate-300">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Rapid 4-Hour Feasibility Review</strong>
                      We audit wall thickness, overhang angles, and slicer toolpaths before quoting.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Layers className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">3D Interactive Proof Prior To Printing</strong>
                      You receive an interactive web 3D review link to inspect and approve the model.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Guaranteed Physical Fit</strong>
                      If the printed part deviates beyond our stated ±0.08mm tolerance, we reprint free.
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Assistance Card */}
              <div className="rounded-2xl bg-graphite-950 border border-graphite-800 p-6 space-y-3">
                <h4 className="font-display font-bold text-base text-white">Need Immediate Help?</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Have questions about file formats, or want to discuss a bulk manufacturing batch?
                </p>
                <div className="font-mono text-xs text-copper-400 space-y-1 pt-1">
                  <div>Email: studio@forge3d.lab</div>
                  <div>Phone: +1 (555) 334-3746</div>
                  <div>Hours: Mon – Fri: 8am – 7pm EST</div>
                </div>
                <div className="pt-2">
                  <Link to="/contact" className="text-xs font-mono text-slate-300 hover:text-white inline-flex items-center gap-1">
                    <span>Visit Contact Page</span>
                    <ChevronRight className="w-3.5 h-3.5 text-copper-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
