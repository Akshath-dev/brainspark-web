import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero({ onOpenTrialModal }) {
  const handleScrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center bg-[#0E0D0B] text-white pt-24 pb-16 overflow-hidden">
      
      {/* Cinematic Background Image with moody vignette (Matching Chestry Reference) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=2000&q=85')`,
        }}
      ></div>

      {/* Subtle Gradient & Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0B] via-transparent to-[#0E0D0B]/80 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[#0E0D0B]/40 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-6">
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.1]">
          Your child's cognitive journey begins here
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
          Master your mind, challenge your limits, and cultivate strategic foresight through Chess, Juggling, Speedcubing, and Logic Puzzles.
        </p>

        {/* Action Button: Signature Chestry Sand Pill Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleScrollToAbout}
            className="px-8 py-3.5 bg-sand-400 hover:bg-sand-500 text-noir-950 font-medium text-sm rounded-full transition-all duration-300 shadow-md flex items-center gap-2"
          >
            <span>Learn more</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            onClick={() => onOpenTrialModal()}
            className="px-8 py-3.5 border border-neutral-600 hover:border-white text-white font-medium text-sm rounded-full transition-all duration-300"
          >
            Book a Free Trial
          </button>
        </div>

      </div>

    </section>
  );
}
