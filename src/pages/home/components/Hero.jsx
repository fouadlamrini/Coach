import React, { useState } from 'react';
import { Play, Menu, X, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-black text-white font-sans antialiased flex flex-col justify-between relative overflow-hidden">
      
      {/* ================= NAVBAR ================= */}
      <nav className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center p-1">
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
              <span className="text-[10px] font-bold text-white">A</span>
            </div>
          </div>
          <span className="text-lg font-medium tracking-wide text-white">AnoMed</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-light text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Anomed Token</a>
          <a href="#" className="hover:text-white transition-colors">How it works</a>
          <a href="#" className="hover:text-white transition-colors">Roadmap</a>
          <a href="#" className="hover:text-white transition-colors">Tokenomics</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 bg-[#dcb239] hover:bg-[#c9a12e] text-black font-semibold rounded-full text-xs tracking-wide transition-all">
            Buy $ANO
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-400 hover:text-white relative z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute inset-0 bg-black/98 backdrop-blur-md z-40 flex flex-col justify-center items-center gap-6 text-lg font-light md:hidden">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#dcb239]">Anomed Token</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#dcb239]">How it works</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#dcb239]">Roadmap</a>
          <button className="px-6 py-2.5 bg-[#dcb239] text-black font-semibold rounded-full text-sm w-48 mt-4">Buy $ANO</button>
        </div>
      )}

      {/* ================= MAIN HERO CONTENT (Centered Style) ================= */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12 max-w-5xl mx-auto w-full space-y-10 relative z-10">
        
        {/* Headings Stack (Exact Copycat text presentation from image_82d57b) */}
        <div className="space-y-3 uppercase tracking-wide">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#dcb239] leading-tight">
            You've been doing everything right.
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Your Body Should Show It.
          </h2>
        </div>

        {/* Central Video Section */}
        <div className="w-full max-w-3xl aspect-video rounded-xl bg-zinc-900/40 border border-zinc-800/80 relative group overflow-hidden shadow-2xl shadow-zinc-950 flex items-center justify-center cursor-pointer">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

          {/* Centered Play Trigger */}
          <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#dcb239] group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-xl">
            <Play size={24} className="fill-current ml-1" />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 px-3 py-1 rounded text-[10px] font-mono text-zinc-400 tracking-wider uppercase border border-zinc-900">
            AnoMed Platform Preview
          </div>
        </div>

        {/* Bottom Sub-text Paragraph */}
        <p className="text-zinc-400 text-sm sm:text-base md:text-lg font-normal max-w-3xl leading-relaxed tracking-wide px-4">
          AnoMed gives you the bloodwork insights, personalized health data protocols, and Web3 reward support to finally get the real value your health efforts deserve.
        </p>

        {/* Big Yellow Action Trigger */}
        <div className="w-full max-w-xl pt-2 px-4">
          <button className="w-full py-4 bg-[#dcb239] hover:bg-[#f0c33e] text-black font-extrabold uppercase tracking-wider text-sm md:text-base rounded-md transition-all duration-200 transform active:scale-[0.99] shadow-lg shadow-[#dcb239]/10 flex items-center justify-center gap-2 group">
            Join AnoMed Revolution
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </main>

      {/* Spacer layer at the bottom */}
      <div className="h-8 w-full" />

      {/* ================= FLOATING RIGHT SOCIAL SIDEBAR (image_82d1ba Asset) ================= */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 z-40 bg-zinc-950/40 backdrop-blur-md p-3.5 rounded-full border border-zinc-900/80 shadow-2xl">
        {/* Telegram */}
        <a href="#" className="text-[#8ae9c1] hover:text-white transition-colors p-1" title="Telegram">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
          </svg>
        </a>
        {/* Instagram */}
        <a href="#" className="text-[#8ae9c1] hover:text-white transition-colors p-1" title="Instagram">
          <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        {/* OpenSea */}
        <a href="#" className="text-[#8ae9c1] hover:text-white transition-colors p-1" title="OpenSea">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2zm0 4.85L18.42 19H5.58L12 6.85z"/>
          </svg>
        </a>
        {/* X (Twitter) */}
        <a href="#" className="text-[#8ae9c1] hover:text-white transition-colors p-1" title="X">
          <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}