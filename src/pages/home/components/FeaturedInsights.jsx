import React from 'react';

const insights = [
  {
    title: "The TRT Discussion: Diagnostics & Bio-availability",
    desc: "A meticulous deep-dive into androgen baseline mechanics and system parameters.",
    tag: "ANDROGENS",
    stat: "94% Optimization Index",
    // Sora jdidda m-testya dyal lab research stable completely
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600"
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
        <span className="text-xs font-mono tracking-widest text-[#CDB26D] font-bold uppercase">// TELEMETRY PROTOCOLS</span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-2">Featured Insights</h2>
        <p className="text-slate-500 mt-3 text-sm">Actionable biometric intelligence streams updated in real-time.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {insights.map((item, index) => (
          <div key={index} className="group bg-slate-900/30 backdrop-blur-md rounded-xl overflow-hidden border border-slate-800/80 hover:border-[#CDB26D]/40 transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div>
              {/* Image box with overlay */}
              <div className="h-44 relative overflow-hidden border-b border-slate-800/60">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent z-10"></div>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition duration-500" />
                {/* Fixed Tag Badge from Cyan to Gold */}
                <span className="absolute top-4 left-4 z-20 bg-[#967531]/30 backdrop-blur-md border border-[#CDB26D]/30 text-[9px] font-mono font-bold tracking-widest text-[#F3DA90] px-2.5 py-1 rounded">
                  {item.tag}
                </span>
              </div>
              
              {/* Content text */}
              <div className="p-6 space-y-3">
                {/* Fixed Stat Indicator from Emerald to Gold */}
                <div className="text-[10px] font-mono text-[#CDB26D] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CDB26D]"></span>
                  {item.stat}
                </div>
                <h3 className="font-bold text-lg text-white leading-snug group-hover:text-[#F3DA90] transition duration-300">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>

            {/* Micro-interactive bottom layer */}
            <div className="p-6 pt-0">
              {/* Fixed Button Hover States to Gold */}
              <button className="w-full bg-slate-950/60 border border-slate-800 group-hover:border-[#CDB26D]/30 text-white py-2.5 rounded-lg text-xs font-mono tracking-widest uppercase transition duration-300 flex items-center justify-center gap-2 group-hover:bg-[#CDB26D]/5">
                ACCESS SYSTEM DATA <span className="text-[#CDB26D] group-hover:text-[#F3DA90] group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}