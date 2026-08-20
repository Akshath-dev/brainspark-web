import React from 'react';
import { coachesData } from '../data/programsData';
import { Award, ShieldCheck, Sparkles, Star } from 'lucide-react';

export default function Coaches() {
  return (
    <section id="coaches" className="py-24 relative bg-[#070B14]">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>World-Class Mentorship</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Mentors Who <span className="bg-gradient-to-r from-spark-400 to-amber-400 bg-clip-text text-transparent">Inspire Genius</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Our certified grandmaster trainers, national speedcubing record holders, and child neuro-development specialists maintain an ultra-low 4:1 ratio.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coachesData.map((coach, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between hover:border-spark-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group"
            >
              <div className="space-y-4">
                
                {/* Photo & Badge */}
                <div className="relative">
                  <div className="w-full h-52 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-spark-500 text-white font-extrabold text-[10px] shadow-lg">
                    {coach.badge}
                  </span>
                </div>

                {/* Name & Role */}
                <div>
                  <h3 className="text-base font-extrabold text-white group-hover:text-spark-400 transition-colors">
                    {coach.name}
                  </h3>
                  <p className="text-xs font-bold text-amber-400/90 mt-0.5">
                    {coach.role}
                  </p>
                </div>

                {/* Credentials */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {coach.credentials}
                </p>

                {/* Specialization */}
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 text-[11px] text-slate-300">
                  <span className="font-bold text-spark-400">Focus: </span>
                  {coach.specialty}
                </div>

              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Background Verified
                </span>
                <span className="text-amber-400">★★★★★</span>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
