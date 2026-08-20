import React from 'react';
import { pricingPlansData } from '../data/programsData';
import { CheckCircle2, Sparkles, Shield, ArrowRight, Star } from 'lucide-react';

export default function Pricing({ onOpenTrialModal }) {
  return (
    <section id="pricing" className="py-24 relative bg-[#070A12]">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-spark-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-spark-500/10 border border-spark-500/30 text-spark-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cohort Plans & Memberships</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Invest in Your Child's <br />
            <span className="bg-gradient-to-r from-spark-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Lifelong Cognitive Edge
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Simple, transparent monthly plans. No lock-ins. Every enrollment includes our complimentary 45-minute baseline diagnostic.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingPlansData.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-slate-900 border-2 border-spark-500 shadow-2xl shadow-spark-500/20 lg:-translate-y-2 ring-1 ring-spark-500'
                  : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-spark-500 to-amber-500 text-white font-extrabold text-xs shadow-md tracking-wider uppercase">
                  ⭐ Most Popular Choice
                </div>
              )}

              <div className="space-y-6">
                
                {/* Plan Header */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-white">{plan.name}</h3>
                    <span className="text-[11px] font-bold text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 min-h-[32px]">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 border-b border-slate-800 pb-6">
                  <span className="text-4xl sm:text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-sm font-semibold text-slate-400">{plan.period}</span>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    What's Included:
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-spark-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-slate-800">
                <button
                  onClick={() => onOpenTrialModal(plan.name)}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-spark-500 to-amber-500 text-white shadow-lg shadow-spark-500/30 hover:scale-[1.02]'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 max-w-2xl mx-auto bg-slate-900/60 rounded-2xl border border-slate-800 p-4 flex items-center justify-center gap-3 text-center text-xs text-slate-300">
          <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <span>
            <strong>100% Risk-Free Trial Guarantee:</strong> If you or your child don't love the first session, you owe nothing.
          </span>
        </div>

      </div>

    </section>
  );
}
