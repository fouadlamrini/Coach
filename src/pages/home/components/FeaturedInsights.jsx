import React from 'react';

const insights = [
  {
    title: "The TRT Discussion: Benefits & Considerations",
    desc: "Rayan's approach blends cutting-edge science with practical optimal health markers.",
    img: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=600"
  },
  {
    title: "Mastering Insulin Resistance for Fat Loss",
    desc: "Mastering insulin resistance for permanent fat loss and optimized clean energy production.",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600"
  },
  {
    title: "NAD+ & GHK-Cu: Supplements for Longevity",
    desc: "NAD+ & GHK-Cu: Advanced molecular supplements geared purely for cellular longevity.",
    img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600"
  }
];

export default function FeaturedInsights() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-black text-[#0f2942]">Featured Insights</h2>
        <p className="text-slate-500 mt-2">Latest protocols and actionable health intelligence.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {insights.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="h-48 bg-slate-200 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-bold text-xl text-[#0f2942] leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button className="text-sm font-bold text-[#0052cc] hover:text-[#0041a3] flex items-center gap-1">
                Learn More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}