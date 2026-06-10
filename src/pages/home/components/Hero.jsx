import React from 'react';

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 overflow-hidden">
      {/* Background Ambient Glows like the AnoMed screens */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="grid lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left Typography Column */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-[10px] tracking-widest font-bold uppercase text-cyan-400">Next-Gen Longevity System</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Unlock Peak <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">Performance</span> & Defy Aging.
          </h1>
          
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
            The data-driven protocol architected for building elite cellular adaptation, sustainable muscle tissue, and absolute baseline optimization.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a href="#" className="shadow-[0_0_30px_rgba(6,182,212,0.3)] bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-[#030712] px-8 py-4 rounded-xl font-bold tracking-wide uppercase text-xs text-center transition-all duration-300 transform hover:-translate-y-0.5">
              Start Your Transformation
            </a>
            <a href="#" className="border border-slate-800 hover:border-slate-700 bg-slate-900/40 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold tracking-wide uppercase text-xs text-center transition duration-300">
              Explore The Science
            </a>
          </div>
        </div>

        {/* Right Premium Video Deck (Instead of standard player, it's embedded in cyber liquid layout) */}
        <div className="lg:col-span-6">
          <div className="relative p-1 rounded-2xl bg-gradient-to-b from-slate-800 via-slate-900 to-cyan-950/40 shadow-2xl">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#070a0f] rounded-xl overflow-hidden aspect-video border border-slate-800/80 group cursor-pointer">
              
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200" 
                alt="The Rayan Protocol Deck" 
                className="w-full h-full object-cover opacity-40 mix-blend-luminosity hover:mix-blend-normal transition duration-700 scale-105"
              />
              
              {/* Technical Overlay HUD */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                <div className="bg-black/60 backdrop-blur-md border border-slate-800 text-[10px] text-cyan-400 px-3 py-1.5 rounded-md font-mono tracking-wider uppercase">
                  SYSTEM://OPTIMIZATION_DECK.mp4
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
              </div>

              {/* Futuristic Cyber Play Trigger */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border border-cyan-400/40 bg-[#030712]/80 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)] transition duration-300 transform group-hover:scale-110 group-hover:border-cyan-400">
                  <svg className="w-5 h-5 text-cyan-400 fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}