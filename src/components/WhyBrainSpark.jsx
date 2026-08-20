import React, { useState } from 'react';
import { benefitsData } from '../data/programsData';
import { Sparkles, Brain, Target, Lightbulb, Zap, Trophy, ShieldCheck, XCircle, CheckCircle2 } from 'lucide-react';

export default function WhyBrainSpark() {
  const [activeBenefitIdx, setActiveBenefitIdx] = useState(0);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-6 h-6 text-spark-400" />;
      case 'Target': return <Target className="w-6 h-6 text-amber-400" />;
      case 'Lightbulb': return <Lightbulb className="w-6 h-6 text-yellow-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-cyan-400" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-emerald-400" />;
      default: return <Sparkles className="w-6 h-6 text-spark-400" />;
    }
  };

  const comparison = [
    {
      feature: "Cognitive Engagement",
      traditional: "Passive memorization & repetitive screen tapping",
      brainspark: "Active 3D tactical play, spatial rotation & live strategy"
    },
    {
      feature: "Handling Failure",
      traditional: "Frustration or avoidance when answers are wrong",
      brainspark: "Mistakes treated as diagnostic data in chess & cubing"
    },
    {
      feature: "Attention Span",
      traditional: "Short dopamine loops from video shorts / games",
      brainspark: "Deep flow state built through physical rhythm & calculation"
    },
    {
      feature: "Hemispheric Sync",
      traditional: "Isolated left-brain or purely sedentary drills",
      brainspark: "Simultaneous bilateral motor & executive cortex activation"
    },
    {
      feature: "Parent Visibility",
      traditional: "Vague report cards at end of term",
      brainspark: "Real-time Live Parent Portal with cognitive radar analytics"
    }
  ];

  return (
    <section id="why-us" className="py-24 relative bg-[#090E1A]">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-spark-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-spark-500/10 border border-spark-500/30 text-spark-400 text-xs font-bold uppercase tracking-wider">
            <Brain className="w-3.5 h-3.5" />
            <span>Why BrainSpark?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Think Differently. Solve Creatively. <br />
            <span className="bg-gradient-to-r from-spark-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Focus Deeply.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            We don't teach tricks for test-taking. We build the core neural architecture of executive function, spatial reasoning, and mental grit.
          </p>
        </div>

        {/* 5 Core Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {benefitsData.map((benefit, idx) => {
            const isSelected = idx === activeBenefitIdx;
            return (
              <div
                key={idx}
                onClick={() => setActiveBenefitIdx(idx)}
                className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-spark-500 shadow-xl shadow-spark-500/20 -translate-y-1 ring-1 ring-spark-500'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4">
                    {getIcon(benefit.icon)}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {benefit.short}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-spark-400 uppercase">Benefit 0{idx + 1}</span>
                  <span className="text-xs text-slate-500">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive on Active Benefit */}
        <div className="bg-gradient-to-r from-slate-900/90 via-[#0E1729] to-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-8 max-w-4xl mx-auto mb-16 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-spark-500/20 border border-spark-500/40 flex items-center justify-center flex-shrink-0">
              {getIcon(benefitsData[activeBenefitIdx].icon)}
            </div>
            <div>
              <div className="text-xs font-bold text-spark-400 uppercase tracking-wider mb-1">
                Cognitive Pillar 0{activeBenefitIdx + 1}
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {benefitsData[activeBenefitIdx].title}
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {benefitsData[activeBenefitIdx].desc}
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table: Traditional vs BrainSpark */}
        <div className="max-w-4xl mx-auto bg-slate-900/80 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl">
          <h3 className="text-xl font-bold text-white text-center mb-6">
            Traditional Coaching vs. <span className="text-spark-400">The BrainSpark Advantage</span>
          </h3>

          <div className="space-y-3">
            {comparison.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80 items-center text-xs sm:text-sm"
              >
                <div className="md:col-span-3 font-bold text-slate-200">
                  {item.feature}
                </div>
                <div className="md:col-span-4 text-slate-400 flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>{item.traditional}</span>
                </div>
                <div className="md:col-span-5 text-spark-300 font-medium flex items-start gap-2 bg-spark-500/10 p-2 rounded-xl border border-spark-500/20">
                  <CheckCircle2 className="w-4 h-4 text-spark-400 flex-shrink-0 mt-0.5" />
                  <span>{item.brainspark}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
