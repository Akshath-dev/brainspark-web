import React from 'react';

export default function EventsSection({ onOpenTrialModal }) {
  const events = [
    {
      date: "May 20",
      title: "Spring Open Tournament 2026",
      description: "Our biggest youth event of the season! Compete in a Swiss-style friendly tournament with cash prizes, trophies, and rating updates. Great for testing skills and meeting fellow thinkers."
    },
    {
      date: "Jun 1",
      title: "Brain & Flow: Casual Practice Night",
      description: "A relaxed, fun evening of friendly speedcubing, juggling cascades, snacks, and game theory conversation. No clocks, no pressure—just pure cognitive joy. Bring a friend or make new ones!"
    },
    {
      date: "Jul 24",
      title: "Junior Grand Prix Championship",
      description: "Part of our 3-stage youth tournament series. Kids compete in a friendly but competitive setting with personal 1-on-1 guidance from master instructors between rounds."
    }
  ];

  return (
    <section id="events" className="py-24 sm:py-32 bg-[#F4EFE6] text-neutral-900 border-t border-neutral-300/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Section Header (Matching Screenshot 6) */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            UPCOMING EVENTS
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.15]">
            From friendly matches to fierce tournaments.
          </h2>
        </div>

        {/* Event List with Thin Dividers (Matching Screenshot 6 & 7) */}
        <div className="space-y-8 border-t border-neutral-300/70 pt-8">
          {events.map((evt, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-8 border-b border-neutral-300/70 last:border-b-0"
            >
              {/* Date */}
              <div className="md:col-span-2 text-base sm:text-lg font-medium text-neutral-900">
                {evt.date}
              </div>

              {/* Title & Details */}
              <div className="md:col-span-8 space-y-1.5 pr-0 md:pr-6">
                <h3 className="text-xl sm:text-2xl font-normal text-neutral-900">
                  {evt.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  {evt.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="md:col-span-2 flex justify-start md:justify-end">
                <button
                  onClick={() => onOpenTrialModal(evt.title)}
                  className="px-6 py-3 bg-sand-400 hover:bg-sand-500 text-noir-950 font-medium text-xs sm:text-sm rounded-full transition-all duration-300 whitespace-nowrap shadow-sm"
                >
                  Register now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
