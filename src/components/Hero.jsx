import React, { useState } from 'react';
import { Sparkles, Brain, ArrowRight, Play, CheckCircle2, Shield, Flame, Award, Zap } from 'lucide-react';

export default function Hero({ onOpenTrialModal, onScrollToArena }) {
  const [activeInteractiveTab, setActiveInteractiveTab] = useState('chess');

  const miniPuzzles = {
    chess: {
      title: "Strategic Foresight",
      action: "Next move: Find the Knight Fork ♞",
      badge: "Decision Making",
      stat: "+42% Tactical Calculation",
      color: "border-amber-500/40 text-amber-400 bg-amber-500/10"
    },
    juggling: {
      title: "Bi-Lateral Hemispheric Sync",
      action: "3-Ball Cascade Rhythm: Left ⟷ Right Sync",
      badge: "Brain Agility",
      stat: "+3.2x Focus Stamina",
      color: "border-orange-500/40 text-orange-400 bg-orange-500/10"
    },
    cubing: {
      title: "3D Spatial Intelligence",
      action: "CFOP Algorithm: Sub-45s Layer Solving",
      badge: "Spatial Reasoning",
      stat: "+55% Pattern Recall",
      color: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10"
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-radial-hero">
      
      {/* Decorative ambient neural sparks */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-spark-500/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-spark-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      {/* Background Neural Grid Pattern */}
      <div className="absolute inset-0 neural-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-spark-500/40 shadow-inner backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spark-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-spark-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Cognitive Development & Strategy Academy • <span className="text-spark-400 font-bold">Ages 4 – 14+</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Train Young Minds. <br />
              <span className="bg-gradient-to-r from-spark-400 via-orange-400 to-amber-300 bg-clip-text text-transparent drop-shadow-sm">
                Build Future Thinkers.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We empower children with lifelong strategic thinking, laser-sharp focus, and confident decision-making through tactile, high-energy brain building disciplines: <strong className="text-white font-semibold">Chess, Juggling, Speedcubing, Sudoku, and Logic Puzzles</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenTrialModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-spark-500 via-orange-500 to-amber-500 text-white font-extrabold text-sm sm:text-base tracking-wide rounded-2xl shadow-xl shadow-spark-500/30 hover:shadow-spark-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
              >
                <Sparkles className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
                <span>Book a Free Trial (45 Min)</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToArena}
                className="w-full sm:w-auto px-6 py-4 bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 hover:text-white font-bold text-sm sm:text-base rounded-2xl border border-slate-700/80 backdrop-blur-md transition-all flex items-center justify-center gap-2 group"
              >
                <span className="text-lg">🎮</span>
                <span>Test Cognitive Agility</span>
              </button>
            </div>

            {/* Micro Trust Proofs */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-spark-400 flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">100% Hands-On Play</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-spark-400 flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">4:1 Child to Coach Ratio</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-spark-400 flex-shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Parent Live Analytics</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Interactive Preview Widget */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Background Box */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-spark-500/40 via-amber-500/30 to-blue-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

              {/* Main Card Container */}
              <div className="relative bg-[#0D1527]/95 border border-slate-700/80 rounded-3xl p-6 shadow-2xl backdrop-blur-xl space-y-6">
                
                {/* Header of widget */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-spark-500/20 border border-spark-500/40 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-spark-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                        BrainSpark Training Hub
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">Live</span>
                      </h3>
                      <p className="text-xs text-slate-400">Active Neuroplasticity Lab</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                    <Award className="w-3.5 h-3.5" />
                    <span>Top Rated</span>
                  </div>
                </div>

                {/* Interactive Discipline Switcher */}
                <div className="grid grid-cols-3 gap-2 p-1 bg-slate-950/80 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setActiveInteractiveTab('chess')}
                    className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                      activeInteractiveTab === 'chess'
                        ? 'bg-spark-500 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>♟️</span>
                    <span>Chess</span>
                  </button>

                  <button
                    onClick={() => setActiveInteractiveTab('juggling')}
                    className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                      activeInteractiveTab === 'juggling'
                        ? 'bg-spark-500 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>🤹</span>
                    <span>Juggling</span>
                  </button>

                  <button
                    onClick={() => setActiveInteractiveTab('cubing')}
                    className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                      activeInteractiveTab === 'cubing'
                        ? 'bg-spark-500 text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>🧊</span>
                    <span>Rubik's</span>
                  </button>
                </div>

                {/* Active Discipline Preview Box */}
                <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${miniPuzzles[activeInteractiveTab].color}`}>
                      {miniPuzzles[activeInteractiveTab].badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5" />
                      {miniPuzzles[activeInteractiveTab].stat}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white">
                    {miniPuzzles[activeInteractiveTab].title}
                  </h4>

                  <p className="text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 font-mono">
                    ⚡ {miniPuzzles[activeInteractiveTab].action}
                  </p>

                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-spark-500 to-amber-400 h-full rounded-full w-[85%] animate-pulse"></div>
                  </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                    <div className="text-xl font-extrabold text-white">500+</div>
                    <div className="text-[11px] text-slate-400">Young Thinkers Trained</div>
                  </div>
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                    <div className="text-xl font-extrabold text-amber-400">4.9 ★★★★★</div>
                    <div className="text-[11px] text-slate-400">Verified Parent Rating</div>
                  </div>
                </div>

                {/* Bottom interactive prompt */}
                <div className="bg-gradient-to-r from-spark-500/10 via-amber-500/10 to-transparent p-3 rounded-xl border border-spark-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-spark-400 animate-bounce" />
                    <span className="text-xs font-semibold text-slate-200">Weekend Free Trials Open</span>
                  </div>
                  <button
                    onClick={onOpenTrialModal}
                    className="text-xs font-bold text-spark-400 hover:text-spark-300 underline"
                  >
                    Claim Slot →
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
