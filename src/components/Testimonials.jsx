import React from 'react';
import { testimonialsData } from '../data/programsData';
import { Star, Quote, CheckCircle, Sparkles } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-[#090E1A]">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-spark-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-spark-500/10 border border-spark-500/30 text-spark-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Parent Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Loved by Parents. <span className="bg-gradient-to-r from-spark-400 to-amber-400 bg-clip-text text-transparent">Empowering Kids.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Hear how BrainSpark has replaced mindless screen time with sharp concentration, math confidence, and strategic resilience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-spark-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                
                {/* Rating & Highlight Pill */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-sm">
                    {'★'.repeat(item.rating)}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    Verified Parent
                  </span>
                </div>

                {/* Highlight banner */}
                <div className="bg-spark-500/10 p-2.5 rounded-xl border border-spark-500/20 text-xs font-bold text-spark-300">
                  ⚡ {item.highlight}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>

              </div>

              {/* Parent & Child info */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-bold text-sm">
                  {item.parentName.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-extrabold text-white">{item.parentName}</div>
                  <div className="text-[11px] text-slate-400">{item.childInfo}</div>
                  <div className="text-[10px] text-spark-400 font-semibold">{item.program}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
