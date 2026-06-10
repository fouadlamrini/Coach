import React from 'react';

export default function Bio() {
  return (
    <section className="bg-[#050811] py-24 border-y border-slate-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Cyber Portrait Box */}
          <div className="relative group flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-amber-500 rounded-2xl opacity-20 blur group-hover:opacity-40 transition duration-500"></div>
            <div className="w-52 h-52 rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800 bg-[#070a0f] relative">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400" 
                alt="Rayan" 
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 hover:grayscale-0 transition duration-500"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 text-center md:text-left">
            <div className="text-xs font-mono tracking-widest text-amber-400 uppercase font-bold">
              // THE ARCHITECT
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Meet Rayan
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base max-w-2xl">
              Your Performance Architect. Rayan's system seamlessly integrates cutting-edge cellular biology with actionable structural paradigms to enhance pure, clean metabolic output, cognitive drive, and muscle durability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}