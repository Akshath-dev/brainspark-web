import React from 'react';

export default function CallToActionSection({ onOpenTrialModal }) {
  return (
    <section className="py-24 sm:py-36 bg-[#F4EFE6] text-neutral-900 border-t border-neutral-300/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Arched Dark Frame with Chess King (Matching Screenshot 10) */}
          <div className="hidden lg:flex items-center justify-center flex-shrink-0">
            <div className="w-52 h-96 rounded-full bg-[#11100D] overflow-hidden p-3 shadow-2xl flex items-center justify-center relative">
              <img
                src="https://images.unsplash.com/photo-1560174038-da43ac74f01b?auto=format&fit=crop&w=600&q=80"
                alt="White King Chess Piece"
                className="w-full h-full object-cover rounded-full filter brightness-95"
              />
            </div>
          </div>

          {/* Center Call to Action Content (Matching Screenshot 10) */}
          <div className="text-center max-w-2xl mx-auto space-y-6">
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.15]">
              Join the thinkers of tomorrow
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 font-light max-w-lg mx-auto leading-relaxed">
              Whether your child is a curious beginner or ready for advanced tournament strategy, BrainSpark is the place to grow, compete, and connect.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenTrialModal()}
                className="px-10 py-4 bg-sand-400 hover:bg-sand-500 text-noir-950 font-medium text-sm sm:text-base rounded-full transition-all duration-300 shadow-md"
              >
                Join the Club
              </button>
            </div>

          </div>

          {/* Right Arched Dark Frame with Chess Queen (Matching Screenshot 10) */}
          <div className="hidden lg:flex items-center justify-center flex-shrink-0">
            <div className="w-52 h-96 rounded-full bg-[#11100D] overflow-hidden p-3 shadow-2xl flex items-center justify-center relative">
              <img
                src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&w=600&q=80"
                alt="White Queen Chess Piece"
                className="w-full h-full object-cover rounded-full filter brightness-95"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
