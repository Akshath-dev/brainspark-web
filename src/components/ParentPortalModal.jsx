import React, { useState } from 'react';
import { parentProfiles } from '../data/programsData';
import { X, Calendar, TrendingUp, Award, MessageSquare } from 'lucide-react';

export default function ParentPortalModal({ isOpen, onClose, onOpenTrialModal }) {
  const [selectedProfileId, setSelectedProfileId] = useState('aarav');

  if (!isOpen) return null;

  const profile = parentProfiles.find((p) => p.id === selectedProfileId) || parentProfiles[0];

  // Helper for dynamic SVG Radar Chart matching editorial palette
  const renderRadarChart = (scores) => {
    const size = 240;
    const center = size / 2;
    const radius = 85;

    const categories = [
      { key: 'strategy', label: 'Strategy' },
      { key: 'focus', label: 'Focus' },
      { key: 'spatial', label: 'Spatial IQ' },
      { key: 'memory', label: 'Memory' },
      { key: 'speed', label: 'Speed' },
      { key: 'coordination', label: 'Agility' },
    ];

    const angleStep = (Math.PI * 2) / categories.length;
    const rings = [0.33, 0.66, 1.0];

    const points = categories.map((cat, i) => {
      const val = scores[cat.key] / 100;
      const angle = i * angleStep - Math.PI / 2;
      const x = center + radius * val * Math.cos(angle);
      const y = center + radius * val * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg width={size} height={size} className="mx-auto overflow-visible">
        {rings.map((r, idx) => (
          <circle
            key={idx}
            cx={center}
            cy={center}
            r={radius * r}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
        ))}

        {categories.map((cat, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x2 = center + radius * Math.cos(angle);
          const y2 = center + radius * Math.sin(angle);
          const labelX = center + (radius + 18) * Math.cos(angle);
          const labelY = center + (radius + 18) * Math.sin(angle);
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
                className="text-[9px] font-medium fill-neutral-400"
              >
                {cat.label}
              </text>
            </g>
          );
        })}

        <polygon
          points={points}
          fill="rgba(228, 199, 155, 0.25)"
          stroke="#E4C79B"
          strokeWidth="2"
        />

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
              r="3.5"
              fill="#E4C79B"
              stroke="#0E0D0B"
              strokeWidth="1.5"
            />
          );
        })}
      </svg>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-[#11100D] border border-neutral-800 rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl space-y-6 text-white max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sand-400">
              PARENT PORTAL DEMO
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-white mt-1">
              Measurable Cognitive Analytics
            </h3>
          </div>

          {/* Student Selector */}
          <div className="flex items-center gap-2">
            {parentProfiles.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedProfileId(p.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  p.id === selectedProfileId
                    ? 'bg-sand-400 text-noir-950 font-semibold shadow-sm'
                    : 'bg-[#0E0D0B] text-neutral-400 border border-neutral-800 hover:text-white'
                }`}
              >
                {p.name} ({p.track.replace('BrainSpark ', '')})
              </button>
            ))}
          </div>
        </div>

        {/* Profile Card Top Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#0E0D0B] p-5 rounded-2xl border border-neutral-800">
          <div>
            <div className="text-[11px] text-neutral-500 font-light">Student Profile</div>
            <div className="text-base font-medium text-white">{profile.name} (Age {profile.age})</div>
            <div className="text-xs text-sand-400 font-light">{profile.track}</div>
          </div>
          <div>
            <div className="text-[11px] text-neutral-500 font-light">Attendance Streak</div>
            <div className="text-base font-medium text-white flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-sand-400" />
              <span>{profile.attendanceStreak}</span>
            </div>
          </div>
          <div>
            <div className="text-[11px] text-neutral-500 font-light">Cognitive Index Growth</div>
            <div className="text-base font-medium text-white flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-sand-400" />
              <span>{profile.cognitiveScore}/100 ({profile.cognitiveGrowth})</span>
            </div>
          </div>
        </div>

        {/* 2-Column: Radar Chart + Disciplines & Coach Note */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Radar Chart */}
          <div className="lg:col-span-5 bg-[#0E0D0B] p-6 rounded-2xl border border-neutral-800 text-center space-y-4">
            <div className="text-xs font-medium text-neutral-300">6-Axis Cognitive Radar</div>
            <div className="py-2">
              {renderRadarChart(profile.radarScores)}
            </div>
          </div>

          {/* Right: Disciplines & Coach Note */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Discipline progress list */}
            <div className="space-y-2.5">
              <div className="text-xs font-medium text-neutral-400">Active Discipline Mastery</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {profile.activities.map((act, i) => (
                  <div key={i} className="bg-[#0E0D0B] p-3 rounded-xl border border-neutral-800 space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-white">{act.name}</span>
                      <span className="text-sand-400 font-light">{act.metric}</span>
                    </div>
                    <div className="text-[10px] text-neutral-500">{act.level}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coach Note */}
            <div className="bg-[#0E0D0B] p-4 rounded-2xl border border-neutral-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-white flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-sand-400" />
                  <span>{profile.latestCoachFeedback.coach}</span>
                </span>
                <span className="text-[10px] text-neutral-500">{profile.latestCoachFeedback.date}</span>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed italic">
                "{profile.latestCoachFeedback.comment}"
              </p>
            </div>

          </div>

        </div>

        {/* Modal CTA */}
        <div className="pt-4 border-t border-neutral-800 flex justify-end">
          <button
            onClick={() => {
              onClose();
              onOpenTrialModal();
            }}
            className="px-8 py-3.5 bg-sand-400 hover:bg-sand-500 text-noir-950 font-medium text-sm rounded-full transition-all"
          >
            Book Free Trial for Your Child
          </button>
        </div>

      </div>
    </div>
  );
}
