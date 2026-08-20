import React, { useState } from 'react';
import { howItWorksSteps } from '../data/programsData';
import { Sparkles, Compass, BookOpen, Layers, Swords, TrendingUp, ArrowRight } from 'lucide-react';

export default function HowItWorks({ onOpenTrialModal }) {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5 text-blue-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-amber-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-orange-400" />;
      case 'Swords': return <Swords className="w-5 h-5 text-purple-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-spark-400" />;
    }
  };

  return (
    <section id="how-it-works" className="py-24 relative bg-[#070A12]">
      
      {/* Glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The 5-Stage Learning Arc</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How Young Minds <span className="bg-gradient-to-r from-spark-400 to-amber-400 bg-clip-text text-transparent">Level Up</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            A structured, joyful pathway from initial cognitive diagnostic to competitive confidence and measurable mastery.
          </p>
        </div>

        {/* Step Progression Visual Track */}
        <div className="relative mb-12">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-slate-800 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {howItWorksSteps.map((step, idx) => {
              const isSelected = idx === activeStepIdx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-spark-500 shadow-xl shadow-spark-500/20 scale-[1.03] ring-1 ring-spark-500'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-extrabold px-2.5 py-1 rounded-lg ${
                        isSelected ? 'bg-spark-500 text-white' : 'bg-slate-800 text-slate-400'
                      }`}>
                        Step {step.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800">
                        {getStepIcon(step.icon)}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-spark-400 mb-2">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                    <span>Explore Step</span>
                    <span>→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Showcase Box */}
        <div className="bg-gradient-to-r from-slate-900 via-[#0B132B] to-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-10 max-w-4xl mx-auto shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spark-500/20 border border-spark-500/30 text-spark-400 text-xs font-bold uppercase">
              Current Stage: Step {howItWorksSteps[activeStepIdx].step} — {howItWorksSteps[activeStepIdx].title}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {howItWorksSteps[activeStepIdx].subtitle}
            </h3>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              {howItWorksSteps[activeStepIdx].description}
            </p>
          </div>

          <button
            onClick={() => onOpenTrialModal()}
            className="w-full md:w-auto px-6 py-3.5 bg-gradient-to-r from-spark-500 to-amber-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-spark-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 flex-shrink-0"
          >
            <span>Start with Free Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
}
