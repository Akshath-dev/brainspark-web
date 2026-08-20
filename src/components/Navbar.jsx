import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Brain, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenTrialModal, onScrollToSection, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Age Tracks', href: '#age-tracks' },
    { name: 'Why BrainSpark', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Brain Arena 🎮', href: '#brain-arena', highlight: true },
    { name: 'Parent Portal 📊', href: '#parent-dashboard' },
    { name: 'Coaches', href: '#coaches' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#070A12]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.02]"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-spark-500/20 blur-lg rounded-full group-hover:bg-spark-500/40 transition-all"></div>
            <img 
              src="/assets/logo.png" 
              alt="BrainSpark Logo" 
              className="h-10 sm:h-12 w-auto object-contain relative z-10 drop-shadow-md"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center text-xl sm:text-2xl font-extrabold tracking-tight">
              <span className="text-white">Brain</span>
              <span className="text-spark-500">Spark</span>
              <span className="inline-block w-2 h-2 rounded-full bg-spark-500 ml-1 animate-pulse"></span>
            </div>
            <span className="text-[10px] tracking-[0.2em] font-bold text-slate-400 uppercase -mt-1">
              Ignite Young Minds
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                link.highlight 
                  ? 'bg-spark-500/10 text-spark-400 hover:bg-spark-500/20 border border-spark-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => {
              const target = document.querySelector('#parent-dashboard');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-xl transition-all flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-spark-400" />
            <span>Parent Demo</span>
          </button>

          <button
            onClick={onOpenTrialModal}
            className="relative group overflow-hidden rounded-xl px-5 py-2.5 bg-gradient-to-r from-spark-500 to-amber-500 text-white font-bold text-xs tracking-wide uppercase shadow-lg shadow-spark-500/25 hover:shadow-spark-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-100 group-hover:rotate-12 transition-transform" />
            <span>Book Free Trial</span>
            <ChevronRight className="w-3.5 h-3.5 -mr-1 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={onOpenTrialModal}
            className="sm:hidden px-3 py-1.5 bg-gradient-to-r from-spark-500 to-amber-500 text-white font-bold text-xs rounded-lg shadow-md"
          >
            Free Trial
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/80 border border-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B1120]/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const target = document.querySelector('#parent-dashboard');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 text-center text-sm font-semibold text-slate-200 bg-slate-800/80 rounded-xl border border-slate-700"
              >
                📊 View Parent Portal Demo
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-spark-500 to-amber-500 rounded-xl shadow-lg shadow-spark-500/30"
              >
                🚀 Book a Free Trial Session (45 min)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
