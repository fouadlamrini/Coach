import React from 'react';

const programs = [
  {
    title: "1-on-1 Elite Coaching",
    tier: "BESPOKE MASTER",
    isFeatured: false,
    features: [
      "Custom Macro & Hypertrophy Modules",
      "Full Bio-Marker & Bloodwork Diagnostics",
      "Tailored Molecular Supplement Scripts",
      "Direct Cryptographic 24/7 Channel Link"
    ]
  },
  {
    title: "Performance Accelerator",
    tier: "SYSTEM INFUSION",
    isFeatured: true, // Glowing highlighted item matching the premium selection
    features: [
      "Tiered Structural Adaptation Tracks",
      "Biomarker Validation Mentorship",
      "Monthly Strategy Metric Iterations",
      "Encrypted Collective Access Sessions"
    ]
  }
];

export default function Pricing() {
  return (
    <section className="bg-[#050811] py-24 border-t border-slate-900 relative">
      {/* Background Ambient Glow - Fixed from Cyan to Soft Gold */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#967531]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          {/* Fixed Section Tag from Amber to Gold */}
          <span className="text-xs font-mono tracking-widest text-[#CDB26D] font-bold uppercase">// ALLOCATION LEVELS</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-2">Upgrade Your Protocol</h2>
          <p className="text-slate-500 mt-3 text-sm">Deploy the operational framework your genetics demand.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {programs.map((prog, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl flex flex-col justify-between transition duration-300 ${
                prog.isFeatured 
                  ? 'bg-slate-900/60 border-2 border-[#CDB26D]/60 shadow-[0_0_40px_rgba(205,178,109,0.12)]' 
                  : 'bg-slate-950/40 border border-slate-800'
              }`}
            >
              {prog.isFeatured && (
                /* Fixed Badge from Cyan/Emerald to Gold Gradient */
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F3DA90] via-[#CDB26D] to-[#967531] text-[#030712] font-mono text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
                  RECOMMENDED CONFIGURATION
                </span>
              )}

              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-[10px] font-mono tracking-widest text-slate-500 mb-1">{prog.tier}</div>
                  <h3 className="text-2xl font-black text-white">{prog.title}</h3>
                </div>
                <hr className="border-slate-800/80" />
                <ul className="space-y-4 text-xs tracking-wide text-slate-300">
                  {prog.features.map((feat, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      {/* Fixed Checkmark color from Cyan to Gold */}
                      <span className="text-[#CDB26D] font-bold mt-0.5">✓</span> 
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons - Clean Premium Gradients & Borders */}
              <button 
                className={`w-full py-4 rounded-xl font-bold tracking-widest text-xs uppercase transition duration-300 mt-8 ${
                  prog.isFeatured 
                    ? 'bg-gradient-to-r from-[#F3DA90] via-[#CDB26D] to-[#967531] text-[#030712] shadow-lg shadow-[#CDB26D]/20 hover:shadow-[#F3DA90]/40 transform hover:-translate-y-0.5' 
                    : 'bg-slate-900 border border-slate-800 text-white hover:bg-[#CDB26D]/5 hover:border-[#CDB26D]/40'
                }`}
              >
                Initialize Protocol
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}