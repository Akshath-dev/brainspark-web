import React, { useState } from 'react';
import { faqsData } from '../data/programsData';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function FAQ({ onOpenTrialModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#090E1A]">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Got Questions? <span className="bg-gradient-to-r from-spark-400 to-amber-400 bg-clip-text text-transparent">We've Got Answers.</span>
          </h2>

          <p className="text-base text-slate-300">
            Everything you need to know about our coaching methodology, trial sessions, and parent reporting.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {faqsData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 rounded-2xl border border-slate-800 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-spark-400 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-spark-400 font-mono">0{idx + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-spark-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center bg-slate-900/60 p-6 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Have a specific question about your child?</h4>
            <p className="text-xs text-slate-400">Speak directly with our Chief Cognitive Counselor.</p>
          </div>
          <button
            onClick={() => onOpenTrialModal()}
            className="px-5 py-2.5 bg-spark-500 hover:bg-spark-600 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Book Free Assessment Call</span>
            <span>→</span>
          </button>
        </div>

      </div>

    </section>
  );
}
