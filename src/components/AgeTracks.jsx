import React, { useState } from 'react';
import { ageTracksData } from '../data/programsData';
import { Sparkles, Users, CheckCircle, ArrowRight, Target, Trophy, Clock } from 'lucide-react';

export default function AgeTracks({ onOpenTrialModal }) {
  const [activeTrackId, setActiveTrackId] = useState('explorer');

  const currentTrack = ageTracksData.find((t) => t.id === activeTrackId) || ageTracksData[0];

  return (
    <section id="age-tracks" className="py-24 relative bg-[#070B14]">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Age-Tailored Progression</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Designed for Every <span className="bg-gradient-to-r from-spark-400 to-amber-400 bg-clip-text text-transparent">Stage of Growth</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            A 4-year-old learns differently than a 10-year-old. Our neuro-developmental pathways adapt to each child's cognitive readiness and motor skills.
          </p>
        </div>

        {/* Age Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {ageTracksData.map((track) => {
            const isActive = track.id === activeTrackId;
            return (
              <button
                key={track.id}
                onClick={() => setActiveTrackId(track.id)}
                className={`p-4 rounded-2xl border transition-all text-left flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-900 border-spark-500 shadow-xl shadow-spark-500/20 scale-[1.03] ring-1 ring-spark-500'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-spark-500/20 text-spark-400' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {track.age}
                  </span>
                  <h3 className={`text-base font-bold mt-2 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {track.name.replace('BrainSpark ', '')}
                  </h3>
                </div>
                <div className="text-[11px] font-semibold text-slate-500 mt-1">
                  {track.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Age Track Deep-Dive Card */}
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl max-w-5xl mx-auto">
          
          {/* Top Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {currentTrack.name}
                </h3>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-spark-500 to-amber-500 text-white font-extrabold text-xs">
                  {currentTrack.age}
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-300 font-medium">
                {currentTrack.summary}
              </p>
            </div>

            <div className="flex items-center gap-2 bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800 flex-shrink-0">
              <Users className="w-4 h-4 text-spark-400" />
              <span className="text-xs font-semibold text-slate-300">{currentTrack.classSize}</span>
            </div>
          </div>

          {/* 2-Column Content: Activities vs Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Left: Core Activities & Tools */}
            <div className="space-y-4 bg-slate-950/60 p-5 sm:p-6 rounded-2xl border border-slate-800">
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>What Kids Learn & Practice</span>
              </h4>
              <ul className="space-y-3">
                {currentTrack.activities.map((act, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-spark-400 mt-2 flex-shrink-0"></span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Measurable Outcomes */}
            <div className="space-y-4 bg-slate-950/60 p-5 sm:p-6 rounded-2xl border border-slate-800">
              <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span>Measurable Growth & Milestones</span>
              </h4>
              <ul className="space-y-3">
                {currentTrack.outcomes.map((out, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-spark-400" />
              <span>Classes available Weekday Evenings & Weekend Mornings</span>
            </div>

            <button
              onClick={() => onOpenTrialModal(currentTrack.name)}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-spark-500 to-amber-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-spark-500/25 hover:shadow-spark-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Book Trial for {currentTrack.age}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
