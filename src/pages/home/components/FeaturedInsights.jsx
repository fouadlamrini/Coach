import React from 'react';

const insights = [
  {
    title: "The TRT Discussion: Diagnostics & Bio-availability",
    desc: "A meticulous deep-dive into androgen baseline mechanics and system parameters.",
    tag: "ANDROGENS",
    stat: "94% Optimization Index",
    img: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=600"
  },
  {
    title: "Reversing Insulin Resistance For Peak Cellular Yield",
    desc: "Deploying structural dietary protocols to permanently optimize glucose storage efficiency.",
    tag: "METABOLIC",
    stat: "100% Data Verified",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600"
  },
  {
    title: "Mitochondrial Integrity: NAD+ & Peptide Chains",
    desc: "An analytical synthesis of GHK-Cu actions and advanced life-extension vectors.",
    tag: "LONGEVITY",
    stat: "Advanced Protocol",
    img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600"
  }
];

export default function FeaturedInsights() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-xs font-mono tracking-widest text-cyan-400 font-bold uppercase">// TELEMETRY PROTOCOLS</span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-2">Featured Insights</h2>
        <p className="text-slate-500 mt-3 text-sm">Actionable biometric intelligence streams updated in real-time.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {insights.map((item, index) => (
          <div key={index} className="group bg-slate-900/30 backdrop-blur-md rounded-xl overflow-hidden border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div>
              {/* Image box with overlay */}
              <div className="h-44 relative overflow-hidden border-b border-slate-800/60">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent z-10"></div>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition duration-500" />
                <span className="absolute top-4 left-4 z-20 bg-cyan-950/80 backdrop-blur-md border border-cyan-500/30 text-[9px] font-mono font-bold tracking-widest text-cyan-400 px-2.5 py-1 rounded">
                  {item.tag}
                </span>
              </div>
              
              {/* Content text */}
              <div className="p-6 space-y-3">
                <div className="text-[10px] font-mono text-emerald-400/80 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {item.stat}
                </div>
                <h3 className="font-bold text-lg text-white leading-snug group-hover:text-cyan-400 transition duration-300">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>

            {/* Micro-interactive bottom layer */}
            <div className="p-6 pt-0">
              <button className="w-full bg-slate-950/60 border border-slate-800 group-hover:border-cyan-500/30 text-white py-2.5 rounded-lg text-xs font-mono tracking-widest uppercase transition duration-300 flex items-center justify-center gap-2">
                ACCESS SYSTEM DATA <span className="text-cyan-400 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}