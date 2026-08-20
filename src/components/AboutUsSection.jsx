import React from 'react';

export default function AboutUsSection({ onOpenTrialModal }) {
  const features = [
    {
      title: "Expert Coaching",
      description: "Learn from experienced chess masters, national speedcubers, and FIDE-rated mentors in an ultra-focused setting."
    },
    {
      title: "Bilateral Agility & Flow",
      description: "Kinetic juggling and rhythm exercises that synchronize both brain hemispheres, improving focus stamina and motor coordination."
    },
    {
      title: "Spatial IQ & Problem Solving",
      description: "Hands-on 3D speedcubing, Sudoku, and deductive puzzles that teach children to break complex constraints into clear solutions."
    }
  ];

  const handleScrollToDisciplines = () => {
    const el = document.getElementById('disciplines');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F4EFE6] text-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Text & Feature List */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                ABOUT US
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.15]">
                Unleash the potential of what we offer!
              </h2>
            </div>

            <button
              onClick={handleScrollToDisciplines}
              className="px-8 py-3.5 bg-sand-400 hover:bg-sand-500 text-noir-950 font-medium text-sm rounded-full transition-all duration-300 shadow-sm"
            >
              Learn more
            </button>

            {/* 3 Feature Rows with thin horizontal divider lines */}
            <div className="space-y-6 pt-4 border-t border-neutral-300/70">
              {features.map((item, idx) => (
                <div key={idx} className="space-y-1.5 pb-6 border-b border-neutral-300/70 last:border-b-0">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Editorial Large Photographic Frame (Matching Chestry Reference) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden shadow-xl bg-neutral-900 aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=1200&q=80"
                alt="Child focused on strategic thinking and puzzle solving"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
