import React, { useState } from 'react';
import { parentProfiles } from '../data/programsData';
import { ShieldCheck, TrendingUp, Award, Calendar, MessageSquare, Star, Download, Sparkles, CheckCircle2, ChevronRight, X } from 'lucide-react';

export default function ParentDashboardDemo({ onOpenTrialModal }) {
  const [selectedProfileId, setSelectedProfileId] = useState('aarav');
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);

  const profile = parentProfiles.find((p) => p.id === selectedProfileId) || parentProfiles[0];

  // Helper to generate dynamic SVG Radar Chart
  const renderRadarChart = (scores) => {
    // 6 dimensions: Strategy, Focus, Spatial, Memory, Speed, Coordination
    const size = 260;
    const center = size / 2;
    const radius = 95;

    const categories = [
      { key: 'strategy', label: 'Strategy' },
      { key: 'focus', label: 'Focus' },
      { key: 'spatial', label: 'Spatial IQ' },
      { key: 'memory', label: 'Memory' },
      { key: 'speed', label: 'Speed' },
      { key: 'coordination', label: 'Agility' },
    ];

    const angleStep = (Math.PI * 2) / categories.length;

    // Outer grid rings
    const rings = [0.25, 0.5, 0.75, 1.0];

    // Calculate score points
    const points = categories.map((cat, i) => {
      const val = scores[cat.key] / 100;
      const angle = i * angleStep - Math.PI / 2;
      const x = center + radius * val * Math.cos(angle);
      const y = center + radius * val * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg width={size} height={size} className="mx-auto overflow-visible">
        {/* Background Grid Rings */}
        {rings.map((r, idx) => (
          <circle
            key={idx}
            cx={center}
            cy={center}
            r={radius * r}
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1"
          />
        ))}

        {/* Axis Spoke Lines */}
        {categories.map((cat, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x2 = center + radius * Math.cos(angle);
          const y2 = center + radius * Math.sin(angle);
          const labelX = center + (radius + 20) * Math.cos(angle);
          const labelY = center + (radius + 20) * Math.sin(angle);
          return (
            <g key={i}>
              <line
                x1={center}
                y1={center}
                x2={x2}
                y2={y2}
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="1"
              />
              <text
                x={labelX}
                y={labelY}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-[10px] font-bold fill-slate-400"
              >
                {cat.label}
              </text>
            </g>
          );
        })}

        {/* Data Polygon Shape */}
        <polygon
          points={points}
          fill="rgba(255, 107, 0, 0.35)"
          stroke="#FF6B00"
          strokeWidth="2.5"
          className="transition-all duration-700 drop-shadow-md"
        />

        {/* Data Vertices */}
        {categories.map((cat, i) => {
          const val = scores[cat.key] / 100;
          const angle = i * angleStep - Math.PI / 2;
          const x = center + radius * val * Math.cos(angle);
          const y = center + radius * val * Math.sin(angle);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill="#FF6B00"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              className="transition-all duration-700"
            />
          );
        })}
      </svg>
    );
  };

  return (
    <section id="parent-dashboard" className="py-24 relative bg-[#080D1A]">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-spark-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Interactive Parent Portal Preview</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Measurable Progress You Can <br />
            <span className="bg-gradient-to-r from-emerald-400 via-spark-400 to-amber-300 bg-clip-text text-transparent">
              See & Celebrate
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            BrainSpark is not a black box. Our proprietary Parent Portal tracks every milestone, cognitive radar metric, chess rating, and coach review in real time.
          </p>

          {/* Child Profile Switcher */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span className="text-xs font-bold text-slate-400">Select Demo Profile:</span>
            {parentProfiles.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedProfileId(p.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  p.id === selectedProfileId
                    ? 'bg-spark-500 text-white shadow-lg shadow-spark-500/30 ring-2 ring-spark-400'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <span>{p.avatar}</span>
                <span>{p.name} ({p.track.replace('BrainSpark ', '')})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Shell Container */}
        <div className="bg-[#0B1324] rounded-3xl border border-slate-700/80 shadow-2xl p-6 sm:p-8 lg:p-10 max-w-6xl mx-auto space-y-8">
          
          {/* Top Bar of Dashboard */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-spark-500/20 to-amber-500/20 border border-spark-500/40 flex items-center justify-center text-3xl shadow-inner">
                {profile.avatar}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-extrabold text-white">{profile.name}</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                    Active Learner
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Track: <strong className="text-spark-400">{profile.track}</strong> • Enrolled for {profile.joinedMonths} months
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <div className="bg-slate-900/90 px-4 py-2.5 rounded-xl border border-slate-800 flex-1 sm:flex-initial">
                <div className="text-[10px] uppercase font-bold text-slate-400">Attendance Streak</div>
                <div className="text-sm font-extrabold text-white flex items-center gap-1.5 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-spark-400" />
                  <span>{profile.attendanceStreak}</span>
                </div>
              </div>

              <div className="bg-slate-900/90 px-4 py-2.5 rounded-xl border border-slate-800 flex-1 sm:flex-initial">
                <div className="text-[10px] uppercase font-bold text-slate-400">Cognitive Index</div>
                <div className="text-sm font-extrabold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{profile.cognitiveScore}/100 ({profile.cognitiveGrowth})</span>
                </div>
              </div>

              <button
                onClick={() => setCertificateModalOpen(true)}
                className="px-4 py-2.5 bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-white font-bold text-xs rounded-xl border border-amber-500/40 transition-all flex items-center gap-1.5"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Certificate</span>
              </button>
            </div>
          </div>

          {/* Main 2-Column Dashboard Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Cognitive Radar Chart */}
            <div className="lg:col-span-5 bg-slate-950/70 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-spark-400" />
                    <span>Cognitive Radar Dimensions</span>
                  </h4>
                  <span className="text-[11px] font-semibold text-slate-400">6 Neural Axes</span>
                </div>
                <p className="text-xs text-slate-400 mb-6">
                  Based on recent in-class tactical drills, speedcubing timings, and problem-solving evaluations.
                </p>
                <div className="py-2">
                  {renderRadarChart(profile.radarScores)}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-slate-800 text-center">
                <div className="bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                  <div className="text-xs font-extrabold text-spark-400">{profile.radarScores.strategy}%</div>
                  <div className="text-[10px] text-slate-400">Strategy</div>
                </div>
                <div className="bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                  <div className="text-xs font-extrabold text-cyan-400">{profile.radarScores.spatial}%</div>
                  <div className="text-[10px] text-slate-400">Spatial IQ</div>
                </div>
                <div className="bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                  <div className="text-xs font-extrabold text-emerald-400">{profile.radarScores.focus}%</div>
                  <div className="text-[10px] text-slate-400">Focus</div>
                </div>
              </div>
            </div>

            {/* Right Column: Activity Progress & Coach Review */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Activity Track Cards */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center justify-between">
                  <span>Current Disciplines & Mastery</span>
                  <span className="text-xs text-spark-400 font-semibold">{profile.activities.length} Active Tracks</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {profile.activities.map((act, idx) => (
                    <div key={idx} className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{act.name}</span>
                        <span className="text-[11px] font-semibold text-spark-400">{act.metric}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium">{act.level}</div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-spark-500 to-amber-400 h-full rounded-full"
                          style={{ width: `${act.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Badges Earned */}
              <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>Recent Milestones & Badges Earned</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {profile.recentBadges.map((b, i) => (
                    <div key={i} className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex items-center gap-2.5">
                      <div className="text-2xl">{b.icon}</div>
                      <div>
                        <div className="text-xs font-bold text-white">{b.name}</div>
                        <div className="text-[10px] text-slate-400">{b.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coach Feedback Note */}
              <div className="bg-gradient-to-r from-spark-500/10 via-amber-500/5 to-transparent p-5 rounded-2xl border border-spark-500/20 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-spark-400" />
                    <span className="text-xs font-bold text-white">{profile.latestCoachFeedback.coach}</span>
                  </div>
                  <div className="flex items-center text-amber-400 text-xs">
                    {'★'.repeat(profile.latestCoachFeedback.rating)}
                  </div>
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{profile.latestCoachFeedback.comment}"
                </p>
                <div className="text-[10px] text-slate-400 text-right">
                  Reviewed on {profile.latestCoachFeedback.date}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Trial Callout */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Want this level of structured progress and weekly reporting for your child?
            </span>
            <button
              onClick={onOpenTrialModal}
              className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-spark-500 to-amber-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-spark-500/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Book Your Child's Free Trial</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Official Certificate Preview Modal */}
      {certificateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative bg-[#0F172A] border-2 border-amber-500/40 rounded-3xl max-w-xl w-full p-8 shadow-2xl space-y-6 text-center animate-scaleUp">
            
            <button
              onClick={() => setCertificateModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Border & Header */}
            <div className="border-4 border-double border-amber-500/30 p-6 rounded-2xl bg-gradient-to-b from-[#1E293B]/80 to-[#0F172A] space-y-4">
              
              <div className="w-16 h-16 mx-auto">
                <img src="/assets/logo.png" alt="BrainSpark" className="w-full h-full object-contain drop-shadow-lg" />
              </div>

              <div>
                <div className="text-[10px] tracking-[0.3em] font-extrabold uppercase text-spark-400">
                  BrainSpark Academy of Cognitive Sciences
                </div>
                <h3 className="text-2xl font-extrabold text-amber-300 uppercase tracking-wider mt-1">
                  Certificate of Cognitive Mastery
                </h3>
              </div>

              <p className="text-xs text-slate-300">This is proudly awarded to</p>

              <div className="text-2xl font-black text-white font-serif tracking-wide border-b border-amber-500/40 pb-2 max-w-xs mx-auto">
                {profile.name}
              </div>

              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                For demonstrating outstanding growth in <strong>Strategic Calculation, 3D Spatial Intelligence</strong>, and maintaining an exemplary focus rating in the <strong>{profile.track}</strong>.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-left text-[11px]">
                <div>
                  <div className="font-bold text-white">Dr. Sarah Al-Mansoor</div>
                  <div className="text-slate-400 text-[10px]">Head of Cognitive Science</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-white">Coach Vikramaditya Rao</div>
                  <div className="text-slate-400 text-[10px]">Senior FIDE Master</div>
                </div>
              </div>

            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  alert("Certificate downloaded in high resolution (PDF ready)!");
                  setCertificateModalOpen(false);
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-spark-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Sample Certificate (PDF)</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
