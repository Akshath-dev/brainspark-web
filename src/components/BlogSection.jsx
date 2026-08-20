import React from 'react';

export default function BlogSection() {
  const posts = [
    {
      tag: "Parenting",
      title: "What to Expect at Your Child's First Strategy Assessment",
      date: "May 9, 2026",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80"
    },
    {
      tag: "Neuroscience",
      title: "The Journey of a Young Club Champion: Building Flow State",
      date: "May 9, 2026",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
    },
    {
      tag: "Strategy",
      title: "How to Analyze Mistakes Without Losing Confidence",
      date: "May 9, 2026",
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="insights" className="py-24 sm:py-32 bg-[#F4EFE6] text-neutral-900 border-t border-neutral-300/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Section Header (Matching Screenshot 9) */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            CHESS & COGNITIVE JOURNAL
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.15]">
            Insights between the moves
          </h2>
        </div>

        {/* 3 Blog Cards (Matching Screenshot 9) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <article key={idx} className="space-y-4 group cursor-pointer">
              
              {/* Photo Frame with Pill Tag */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900 shadow-md">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/30 text-white text-xs font-medium">
                    {post.tag}
                  </span>
                </div>
              </div>

              {/* Title & Date */}
              <div className="space-y-1.5 pt-1">
                <h3 className="text-lg sm:text-xl font-normal tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-neutral-500 font-light">
                  {post.date}
                </p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
