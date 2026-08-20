import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ onOpenTrialModal, onOpenParentPortal }) {
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
    { name: 'About Us', href: '#about' },
    { name: 'Disciplines', href: '#disciplines' },
    { name: 'Events', href: '#events' },
    { name: 'Insights', href: '#insights' },
    { name: 'Parent Portal', onClick: onOpenParentPortal },
  ];

  const handleNavClick = (e, link) => {
    if (link.onClick) {
      e.preventDefault();
      setMobileMenuOpen(false);
      link.onClick();
      return;
    }
    if (link.href) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const target = document.querySelector(link.href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0E0D0B]/95 backdrop-blur-md border-b border-neutral-800/60 py-3.5' 
        : 'bg-[#0E0D0B] py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Brand Logo (Chestry Editorial Style) */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 flex items-center justify-center">
            <img 
              src="/assets/logo.png" 
              alt="BrainSpark Logo" 
              className="h-7 w-auto object-contain brightness-110"
            />
          </div>
          <span className="text-xl sm:text-2xl font-serif tracking-tight text-white italic">
            BrainSpark
          </span>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href || '#'}
              onClick={(e) => handleNavClick(e, link)}
              className="text-xs sm:text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
            <span>🛒</span>
            <span>0</span>
          </div>

          <button
            onClick={() => onOpenTrialModal()}
            className="px-6 py-2 rounded-full border border-neutral-600 text-white hover:bg-white hover:text-noir-950 font-medium text-xs sm:text-sm transition-all duration-200"
          >
            Join us
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => onOpenTrialModal()}
            className="px-4 py-1.5 rounded-full bg-sand-400 text-noir-950 font-semibold text-xs"
          >
            Join us
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0E0D0B] border-b border-neutral-800 px-6 py-6 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href || '#'}
              onClick={(e) => handleNavClick(e, link)}
              className="block text-sm font-medium text-neutral-200 hover:text-sand-400 py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-3 bg-sand-400 text-noir-950 font-bold text-sm rounded-full text-center"
            >
              Book a Free Trial (45 Min)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
