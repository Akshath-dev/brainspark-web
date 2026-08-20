import React, { useState } from 'react';

export default function DisciplinesSection({ onOpenTrialModal }) {
  const [showAll, setShowAll] = useState(false);

  const mainDisciplines = [
    {
      id: "chess",
      tag: "All Levels",
      title: "Chess Mastery & Strategic Decision",
      description: "This course walks your child through tactical calculations, positional foresight, and calm emotional regulation.",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "juggling",
      tag: "Flow Agility",
      title: "Juggling & Bi-Lateral Coordination",
      description: "Kinetic cascade training that bridges left and right brain hemispheres, strengthening focus stamina and motor reflexes.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cubing",
      tag: "Spatial IQ",
      title: "Rubik’s Cube & Speedcubing",
      description: "Mastering 3D spatial rotation, algorithmic muscle memory, and problem decomposition from layer-by-layer to CFOP.",
      image: "https://images.unsplash.com/photo-1591994843349-f415893b3a6b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const additionalDisciplines = [
    {
      id: "puzzles",
      tag: "Deduction",
      title: "Logic Puzzles & Constraint Breakdown",
      description: "Non-verbal matrices, Einstein deduction grids, and spatial tangrams that teach structured problem breakdown.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sudoku",
      tag: "Systematic Logic",
      title: "Sudoku & Grid Elimination Systems",
      description: "Numerical intuition without arithmetic. Systematic proofs and process of elimination to build razor-sharp focus.",
      image: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "memory",
      tag: "Recall",
      title: "Memory Palace & Focus Conditioning",
      description: "Visual chunking, Method of Loci, and distraction shields to expand working memory capacity for academics.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const displayedDisciplines = showAll ? [...mainDisciplines, ...additionalDisciplines] : mainDisciplines;

  return (
    <section id="disciplines" className="py-24 sm:py-32 bg-[#F4EFE6] text-neutral-900 border-t border-neutral-300/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header (Matching Chestry Screenshot 4) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            OUR CLASSES
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.15]">
            Learn. Improve. Master the Game.
          </h2>
        </div>

        {/* 3 Large Image Cards Grid (Matching Chestry Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedDisciplines.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenTrialModal(item.title)}
              className="group cursor-pointer relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-neutral-900 aspect-[4/5] flex flex-col justify-between p-6 sm:p-8"
            >
              {/* Card Photographic Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>

              {/* Dark Gradient Overlay for perfect typography contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 pointer-events-none"></div>

              {/* Top Tag (Chestry Pill Tag) */}
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm text-white text-xs font-medium tracking-wide">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 space-y-2 text-white">
                <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-white group-hover:text-sand-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Centered Button to toggle all disciplines */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3.5 bg-sand-400 hover:bg-sand-500 text-noir-950 font-medium text-sm rounded-full transition-all duration-300 shadow-sm"
          >
            {showAll ? 'Show fewer classes' : 'All classes'}
          </button>
        </div>

      </div>
    </section>
  );
}
