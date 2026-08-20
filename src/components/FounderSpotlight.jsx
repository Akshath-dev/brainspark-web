import React from 'react';

export default function FounderSpotlight() {
  return (
    <section className="py-24 sm:py-32 bg-[#11100D] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Photo in Rounded 3XL Frame (Matching Reference) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl bg-neutral-900 aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
                alt="Head of Coaching thinking over a chessboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Editorial Quote & Signature (Matching Reference Screenshot 5) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Elegant Serif Quotation Mark */}
            <div className="text-sand-400 text-5xl sm:text-6xl font-serif leading-none select-none">
              “
            </div>

            {/* Quote Body */}
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-normal text-neutral-100 tracking-tight leading-[1.3]">
              At BrainSpark, we believe every game is a chance to grow—on the board and beyond. Whether your child is here to learn, compete, or connect, this academy is their space to make bold moves and lasting memories.
            </blockquote>

            {/* Divider Line & Author Details */}
            <div className="pt-6 border-t border-neutral-800 space-y-1">
              <div className="text-lg sm:text-xl font-medium text-white">
                Vikramaditya Rao
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 font-light">
                Head of Strategic Coaching & FIDE Master
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
