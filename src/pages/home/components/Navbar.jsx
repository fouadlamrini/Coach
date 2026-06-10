import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-[#030712]/70 backdrop-blur-xl border-b border-slate-800/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Brand Logo matching the uploaded gold image */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#CDB26D]/30 bg-gradient-to-b from-[#CDB26D]/20 to-transparent rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(205,178,109,0.15)] overflow-hidden">
              <img
                src="/logo.jpeg"
                alt="The Rayan Protocol Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-black text-sm tracking-widest text-white block">THE RAYAN PROTOCOL</span>
              <span className="block text-[10px] font-bold tracking-widest text-[#CDB26D]/80 uppercase -mt-0.5">Bespoke Performance</span>
            </div>
          </div>

          {/* Premium Glowing CTA Button (Gold Gradient) */}
          <div>
            <a 
              href="#" 
              className="relative inline-flex items-center justify-center p-[1px] overflow-hidden text-xs font-bold tracking-wider uppercase text-white rounded-lg group bg-gradient-to-br from-[#F3DA90] via-[#CDB26D] to-[#967531] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#CDB26D]/50 transition-all duration-300"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#030712] rounded-md group-hover:bg-transparent group-hover:text-[#030712] transition-colors duration-300">
                Apply for Coaching
              </span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}