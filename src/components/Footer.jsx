import React from 'react';
import { Sparkles, Phone, Mail, MapPin, Heart, ArrowRight } from 'lucide-react';

export default function Footer({ onOpenTrialModal }) {
  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-spark-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Section: CTA Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-[#10192D] to-slate-900 rounded-3xl border border-slate-700/80 p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-spark-400">
              Limited Cohort Slots Available
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Ready to Spark Your Child's Strategic Thinking?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Book a complimentary 45-minute baseline diagnostic and see how quickly your child discovers the joy of deep problem solving.
            </p>
          </div>

          <button
            onClick={() => onOpenTrialModal()}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-spark-500 via-orange-500 to-amber-500 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-spark-500/30 hover:scale-105 transition-all flex items-center justify-center gap-2 flex-shrink-0"
          >
            <Sparkles className="w-5 h-5 text-amber-200" />
            <span>Book Free Trial (45 Min)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Middle Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-6">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo.png"
                alt="BrainSpark Logo"
                className="h-12 w-auto object-contain drop-shadow-md"
              />
              <div>
                <div className="text-2xl font-extrabold text-white">
                  Brain<span className="text-spark-500">Spark</span>
                </div>
                <div className="text-[10px] tracking-[0.2em] font-bold text-slate-400 uppercase">
                  Ignite Young Minds
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              BrainSpark is an elite cognitive development academy empowering children ages 4–14+ with strategic decision making, spatial intelligence, and laser focus through Chess, Juggling, Speedcubing, and Logic Puzzles.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-2">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-spark-400 font-bold">
                100% Screen-Free
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400 font-bold">
                4:1 Ratio
              </span>
            </div>
          </div>

          {/* Col 2: Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Core Disciplines</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#programs" className="hover:text-spark-400 transition-colors">♟️ Chess Mastery</a></li>
              <li><a href="#programs" className="hover:text-spark-400 transition-colors">🤹 Juggling & Flow</a></li>
              <li><a href="#programs" className="hover:text-spark-400 transition-colors">🧊 Rubik’s & Speedcubing</a></li>
              <li><a href="#programs" className="hover:text-spark-400 transition-colors">🧩 Logic & Puzzles</a></li>
              <li><a href="#programs" className="hover:text-spark-400 transition-colors">🔢 Sudoku & Grids</a></li>
              <li><a href="#programs" className="hover:text-spark-400 transition-colors">🎯 Memory Lab</a></li>
            </ul>
          </div>

          {/* Col 3: Age Pathways */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Age Tracks</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#age-tracks" className="hover:text-spark-400 transition-colors">Junior (Ages 4–6)</a></li>
              <li><a href="#age-tracks" className="hover:text-spark-400 transition-colors">Explorer (Ages 6–8)</a></li>
              <li><a href="#age-tracks" className="hover:text-spark-400 transition-colors">Master (Ages 8–12)</a></li>
              <li><a href="#age-tracks" className="hover:text-spark-400 transition-colors">Advanced (Ages 12+)</a></li>
              <li><a href="#brain-arena" className="hover:text-spark-400 transition-colors">🎮 Brain Arena Mini-Game</a></li>
              <li><a href="#parent-dashboard" className="hover:text-spark-400 transition-colors">📊 Parent Portal Demo</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Studio Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Get in Touch</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-spark-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-spark-400 flex-shrink-0" />
                <span>admissions@brainspark.academy</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-spark-400 flex-shrink-0 mt-0.5" />
                <span>BrainSpark Innovation Studio, Learning Quarter</span>
              </div>
              <div className="pt-2">
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Open Mon–Sat: 9AM – 7PM
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} BrainSpark Academy. All rights reserved. Ignite Young Minds.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with passion for curious young minds</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>

      </div>

    </footer>
  );
}
