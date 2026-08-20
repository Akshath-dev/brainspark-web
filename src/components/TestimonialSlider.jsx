import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function TestimonialSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const testimonials = [
    {
      quote: "My 10-year-old son attends the junior classes, and it's been an incredible experience. He's developed not just his chess and speedcubing skills but also his focus and critical thinking stamina. The instructors are fantastic with children!",
      author: "Martin D.",
      role: "Parent"
    },
    {
      quote: "BrainSpark transformed how my 7-year-old daughter approaches difficult problems. Instead of crying or giving up when a puzzle gets tricky, she takes a breath, analyzes the pieces, and tries again. Her school teachers noticed the change immediately.",
      author: "Priya S.",
      role: "Parent of 7-year-old"
    },
    {
      quote: "The combination of juggling coordination with chess strategy sounded unconventional at first, but the results speak for themselves. His handwriting, attention span, and calm decision making have improved dramatically.",
      author: "Gaurav M.",
      role: "Parent & Tech Director"
    }
  ];

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIdx];

  return (
    <section className="relative py-28 sm:py-36 bg-[#0E0D0B] text-white overflow-hidden">
      
      {/* Photographic Background with moody dark chess lighting */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=2000&q=80')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E0D0B] via-[#0E0D0B]/80 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Circular Arrow Navigation (Matching Screenshot 8) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                TESTIMONIALS
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.15]">
                Stories behind the moves.
              </h2>
            </div>

            {/* Circular Arrow Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full border border-neutral-600 hover:border-white text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full border border-neutral-600 hover:border-white text-neutral-300 hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Off-White Editorial Testimonial Card (Matching Screenshot 8) */}
          <div className="lg:col-span-6">
            <div className="bg-[#F4EFE6] text-neutral-900 rounded-3xl sm:rounded-4xl p-8 sm:p-12 shadow-2xl space-y-6 animate-fadeIn">
              
              <div className="text-sand-500 text-5xl font-serif leading-none select-none">
                “
              </div>

              <blockquote className="text-base sm:text-lg text-neutral-800 font-normal leading-relaxed">
                {current.quote}
              </blockquote>

              <div className="pt-6 border-t border-neutral-300/80 space-y-0.5">
                <div className="text-lg font-medium text-neutral-900">
                  {current.author}
                </div>
                <div className="text-xs sm:text-sm text-neutral-500 font-light">
                  {current.role}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
