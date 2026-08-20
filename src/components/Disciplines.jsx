import React, { useState } from 'react';
import { disciplinesData } from '../data/programsData';
import { Sparkles, Brain, CheckCircle2, ChevronRight, X, BookOpen, Layers, Award } from 'lucide-react';

export default function Disciplines({ onOpenTrialModal }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProgram, setActiveModalProgram] = useState(null);

  const categories = [
    { id: 'all', label: 'All 6 Disciplines' },
    { id: 'strategic', label: '♟️ Strategy & Decision' },
    { id: 'agility', label: '🤹 Brain-Body Flow' },
    { id: 'spatial', label: '🧊 3D Spatial' },
    { id: 'logic', label: '🧩 Deduction & Logic' }
  ];

  const filterMatches = (prog) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'strategic' && (prog.id === 'chess' || prog.id === 'sudoku')) return true;
    if (selectedCategory === 'agility' && (prog.id === 'juggling' || prog.id === 'memory')) return true;
    if (selectedCategory === 'spatial' && (prog.id === 'speedcubing' || prog.id === 'puzzles')) return true;
    if (selectedCategory === 'logic' && (prog.id === 'puzzles' || prog.id === 'sudoku' || prog.id === 'chess')) return true;
    return true;
  };

  const filteredPrograms = disciplinesData.filter(filterMatches);

  return (
    <section id="programs" className="py-24 relative bg-[#090E1A]">
      {/* Background glow accents */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-spark-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-spark-500/10 border border-spark-500/30 text-spark-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our 6 Core Disciplines</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Play That <span className="bg-gradient-to-r from-spark-400 to-amber-400 bg-clip-text text-transparent">Rewires the Brain</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Each discipline targets a specific neural circuit: from executive decision-making and 3D mental rotation to bilateral motor coordination and deep focus.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-spark-500 text-white shadow-lg shadow-spark-500/30 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className={`group relative bg-slate-900/80 rounded-3xl p-6 sm:p-7 border border-slate-800/90 hover:border-spark-500/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-spark-500/10`}
            >
              <div className="space-y-4">
                
                {/* Card Top: Emoji & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-md">
                    <span>{prog.emoji}</span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${prog.badgeColor}`}>
                      {prog.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {prog.ageRange}
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-spark-400 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-400/90 mt-1">
                    {prog.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {prog.description}
                </p>

                {/* Neuroscience Impact Highlight Box */}
                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 text-[11px] text-slate-300 space-y-1">
                  <div className="flex items-center gap-1.5 text-spark-400 font-bold">
                    <Brain className="w-3.5 h-3.5" />
                    <span>Neuroscience Impact</span>
                  </div>
                  <p className="text-slate-400 italic">
                    {prog.neuroscience}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {prog.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2 py-0.5 bg-slate-800/80 text-slate-300 rounded-md border border-slate-700/60"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProgram(prog)}
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 group/btn"
                >
                  <BookOpen className="w-3.5 h-3.5 text-spark-400" />
                  <span>Curriculum</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenTrialModal(prog.title)}
                  className="px-3.5 py-1.5 bg-spark-500/20 hover:bg-spark-500 text-spark-300 hover:text-white font-bold text-xs rounded-xl border border-spark-500/40 transition-all"
                >
                  Try in Trial →
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Curriculum Modal */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative bg-[#0D1527] border border-slate-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 animate-scaleUp">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{activeModalProgram.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{activeModalProgram.title}</h3>
                  <p className="text-xs text-spark-400 font-semibold">{activeModalProgram.tagline}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveModalProgram(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <h4 className="font-bold text-slate-200 mb-2 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-spark-400" />
                  Step-by-Step Mastery Curriculum:
                </h4>
                <div className="space-y-2">
                  {activeModalProgram.curriculum.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <span className="w-5 h-5 rounded-full bg-spark-500/20 text-spark-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-slate-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neuroscience Deep Dive */}
              <div className="p-3.5 rounded-2xl bg-spark-500/10 border border-spark-500/30 text-slate-200 space-y-1">
                <div className="text-xs font-bold text-spark-400 flex items-center gap-1.5">
                  <Brain className="w-4 h-4" />
                  <span>Cognitive & Neural Mechanism</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeModalProgram.neuroscience}
                </p>
              </div>
            </div>

            {/* Modal CTA */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => {
                  const title = activeModalProgram.title;
                  setActiveModalProgram(null);
                  onOpenTrialModal(title);
                }}
                className="w-full py-3 bg-gradient-to-r from-spark-500 to-amber-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-spark-500/30 hover:scale-[1.01] transition-transform text-center"
              >
                Book Free Trial for {activeModalProgram.title} 🚀
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
