import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-[#030712]/70 backdrop-blur-xl border-b border-slate-800/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Brand Logo matching the uploaded gold image */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-amber-500/30 bg-gradient-to-b from-amber-400/20 to-transparent rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.15)]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 font-black text-xl tracking-tighter">R</span>
            </div>
            <div>
              <span className="font-black text-sm tracking-widest text-white block">THE RAYAN PROTOCOL</span>
              <span className="block text-[10px] font-bold tracking-widest text-amber-400/80 uppercase -mt-0.5">Bespoke Performance</span>
            </div>
          </div>
          
          {/* Futuristic Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-xs tracking-widest uppercase text-slate-400">
            <a href="#" className="text-cyan-400 border-b border-cyan-400 pb-1 transition duration-300">Home</a>
            <a href="#" className="hover:text-white transition duration-300">About</a>
            <a href="#" className="hover:text-white transition duration-300">Coaching Programs</a>
            <a href="#" className="hover:text-white transition duration-300">Community</a>
            <a href="#" className="hover:text-white transition duration-300">Blog</a>
          </div>

          {/* Premium Glowing CTA Button */}
          <div>
            <a href="#" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-bold tracking-wider uppercase text-white rounded-lg group bg-gradient-to-br from-cyan-500 to-emerald-500 group-hover:from-cyan-500 group-hover:to-emerald-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#030712] rounded-md group-hover:bg-opacity-0">
                Apply for Coaching
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}