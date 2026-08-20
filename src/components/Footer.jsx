import React from 'react';

export default function Footer({ onOpenTrialModal }) {
  return (
    <footer className="bg-[#0E0D0B] text-neutral-400 pt-20 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Main 5-Column Grid (Matching Screenshot 10 Footer) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo.png"
                alt="BrainSpark Logo"
                className="h-8 w-auto object-contain brightness-110"
              />
              <span className="text-2xl font-serif tracking-tight text-white italic">
                BrainSpark
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-sm leading-relaxed">
              BrainSpark is more than an academy—it's a community of future thinkers.
            </p>
          </div>

          {/* Col 1: Home */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Home
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#disciplines" className="hover:text-white transition-colors">Disciplines</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Events & Quests</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Cognitive Blog</a></li>
            </ul>
          </div>

          {/* Col 2: Club */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Academy
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light">
              <li><a href="#about" className="hover:text-white transition-colors">Our Philosophy</a></li>
              <li><a href="#disciplines" className="hover:text-white transition-colors">Junior Track (4–6)</a></li>
              <li><a href="#disciplines" className="hover:text-white transition-colors">Explorer (6–8)</a></li>
              <li><a href="#disciplines" className="hover:text-white transition-colors">Master (8–12+)</a></li>
            </ul>
          </div>

          {/* Col 3: Classes */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light">
              <li><a href="#disciplines" className="hover:text-white transition-colors">♟️ Chess Mastery</a></li>
              <li><a href="#disciplines" className="hover:text-white transition-colors">🤹 Juggling & Flow</a></li>
              <li><a href="#disciplines" className="hover:text-white transition-colors">🧊 Speedcubing</a></li>
              <li><a href="#disciplines" className="hover:text-white transition-colors">🧩 Logic Puzzles</a></li>
            </ul>
          </div>

          {/* Col 4: Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Info
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light">
              <li><a href="#insights" className="hover:text-white transition-colors">Journal</a></li>
              <li><a href="mailto:admissions@brainspark.academy" className="hover:text-white transition-colors">Contact</a></li>
              <li><span className="text-neutral-500">Privacy & Terms</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-light">
          <div>
            © {new Date().getFullYear()} BrainSpark Academy. All rights reserved.
          </div>
          <div>
            Train Young Minds. Build Future Thinkers.
          </div>
        </div>

      </div>
    </footer>
  );
}
