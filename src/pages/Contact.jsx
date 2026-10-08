import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import Button from '../components/Button';
import { BRAND_NAME } from '../components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Your name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message or inquiry';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
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
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen">
      {/* Header */}
      <section className="relative py-16 lg:py-20 border-b border-graphite-800 bg-graphite-950 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold bg-copper-500/10 px-3 py-1 rounded-full border border-copper-500/20">
              Get In Touch
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
              Connect With Our Studio & Workshop.
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-light">
              Have questions regarding 3D print file prep, commercial licensing, or partnership opportunities? Reach out directly to our team.
            </p>
          </div>
        </div>
      </section>

      {/* Main 2-Column Section */}
      <section className="py-16 bg-graphite-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column (5 cols): Studio Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl text-white">Workshop Contact</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We operate an active additive fabrication facility. We review inquiries quickly and provide rapid turnaround on quotes.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {/* Email */}
                <div className="p-5 rounded-2xl bg-graphite-900 border border-graphite-800 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-copper-500/10 text-copper-400 border border-copper-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase block mb-0.5">Email Inquiry</span>
                    <a href="mailto:studio@forge3d.lab" className="text-sm font-semibold text-white hover:text-copper-400 transition-colors">
                      studio@forge3d.lab
                    </a>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">Guaranteed &lt; 4 hour response</div>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-5 rounded-2xl bg-graphite-900 border border-graphite-800 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-copper-500/10 text-copper-400 border border-copper-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase block mb-0.5">Studio Phone & WhatsApp</span>
                    <a href="tel:+15553343746" className="text-sm font-semibold text-white hover:text-copper-400 transition-colors">
                      +1 (555) 334-3746
                    </a>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">Direct line to engineering floor</div>
                  </div>
                </div>

                {/* Location */}
                <div className="p-5 rounded-2xl bg-graphite-900 border border-graphite-800 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-copper-500/10 text-copper-400 border border-copper-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase block mb-0.5">Physical Studio Location</span>
                    <div className="text-sm font-semibold text-white">Forge3D Fabrication Lab</div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      420 Maker Alley, Suite 3B, Industrial Design Quarter, CA 94107
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="p-5 rounded-2xl bg-graphite-900 border border-graphite-800 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-copper-500/10 text-copper-400 border border-copper-500/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase block mb-0.5">Working Hours</span>
                    <div className="text-sm font-semibold text-white">Monday – Friday: 8:00 AM – 7:00 PM EST</div>
                    <div className="text-xs text-slate-400 mt-0.5">Saturday: 10:00 AM – 4:00 PM EST (By Appointment)</div>
                    <div className="text-xs text-emerald-400 font-mono mt-1">24/7 Autonomous Print Farm Cycle</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-gradient-to-b from-graphite-900 to-graphite-950 border border-graphite-800 p-8 sm:p-10 shadow-2xl relative">
                {isSuccess ? (
                  <div className="py-12 text-center space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-glow-copper">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white">
                      Message Received!
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Forge3D. Our team has received your message and will reply via email shortly.
                    </p>
                    <div className="pt-2">
                      <Button onClick={handleReset} variant="copper" size="md" icon={RefreshCw} iconPosition="left">
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white mb-1">
                        Send a Direct Message
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        For custom 3D printing orders, you can also use our dedicated{' '}
                        <a href="/custom-order" className="text-copper-400 underline">Custom Order Form</a>.
                      </p>
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Elena Rostova"
                        className={`w-full px-4 py-3 rounded-xl bg-graphite-950 border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                            : 'border-graphite-700 focus:border-copper-500 focus:ring-copper-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="elena@restorations.com"
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

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us what you'd like to collaborate on..."
                        className={`w-full px-4 py-3 rounded-xl bg-graphite-950 border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 ${
                          errors.message
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                            : 'border-graphite-700 focus:border-copper-500 focus:ring-copper-500'
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-400 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="copper"
                        size="lg"
                        icon={Send}
                        iconPosition="right"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto min-w-[200px]"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
