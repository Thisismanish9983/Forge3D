import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Box, Menu, X, ArrowRight, Layers, Sparkles } from 'lucide-react';
import Button from './Button';

export const BRAND_NAME = 'Forge3D';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: '3D Models', path: '/models' },
    { name: 'Process', path: '/process' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-graphite-950/90 backdrop-blur-md border-b border-graphite-800/80 shadow-lg shadow-black/40 py-3.5'
            : 'bg-graphite-950/40 backdrop-blur-sm border-b border-white/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2.5 group focus:outline-none">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-copper-500 to-amber-600 flex items-center justify-center shadow-glow-copper transition-transform group-hover:scale-105 border border-copper-400/40">
                <Box className="w-5 h-5 text-white transition-transform group-hover:rotate-12" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-graphite-950 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-copper-400 transition-colors">
                  {BRAND_NAME}
                  <span className="text-copper-500 font-mono text-xs ml-1 px-1.5 py-0.5 rounded bg-copper-500/10 border border-copper-500/20">STUDIO</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 -mt-0.5">3D Modeling & Print Lab</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 bg-graphite-900/60 border border-graphite-800/60 p-1.5 rounded-full backdrop-blur-md" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-white bg-copper-500/20 text-copper-300 border border-copper-500/40 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-graphite-800/50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA Action */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                to="/custom-order"
                variant="copper"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
              >
                Start a Custom Project
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-graphite-900 border border-graphite-700 text-slate-300 hover:text-white hover:bg-graphite-800 focus:outline-none focus:ring-2 focus:ring-copper-500"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Modal */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-graphite-900 border-l border-graphite-800 p-6 flex flex-col justify-between shadow-2xl z-50">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-graphite-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-copper-500 flex items-center justify-center">
                    <Box className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-display font-bold text-lg text-white">{BRAND_NAME}</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-graphite-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1.5 mt-6" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-copper-500/20 text-copper-300 border border-copper-500/30'
                          : 'text-slate-300 hover:bg-graphite-800 hover:text-white'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-slate-500">→</span>
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-graphite-800 flex flex-col gap-3">
              <Button
                to="/custom-order"
                variant="copper"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full"
              >
                Start a Custom Project
              </Button>
              <p className="text-xs text-center text-slate-400 font-mono">
                Bambu • Prusa • Resin SLA • CAD Engineering
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
