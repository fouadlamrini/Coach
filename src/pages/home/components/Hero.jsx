import React, { useState } from 'react';
import { ArrowRight, ArrowDown, Menu, X } from 'lucide-react';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030706] text-zinc-100 font-sans antialiased overflow-hidden flex flex-col justify-between">
      
      {/* Background Abstract Image with Overlays (Bach y3ti nfs dik l-wave l-mdwya) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-screen opacity-60 pointer-events-none scale-105 select-none z-0"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop')` 
        }}
      />
      {/* Extra Radial Glows to mimic the image colors */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* ================= NAVBAR ================= */}
      <nav className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center p-1">
            <div className="w-full h-full bg-[#030706] rounded-full flex items-center justify-center">
              <span className="text-[10px] font-bold text-zinc-100">A</span>
            </div>
          </div>
          <span className="text-lg font-medium tracking-wide text-zinc-100">AnoMed</span>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center gap-8 text-xs lg:text-sm font-light text-zinc-400">
          <a href="#" className="hover:text-zinc-100 transition-colors">Anomed Token</a>
          <a href="#" className="hover:text-zinc-100 transition-colors">How it works</a>
          <a href="#" className="hover:text-zinc-100 transition-colors">Roadmap</a>
          <a href="#" className="hover:text-zinc-100 transition-colors">Tokenomics</a>
        </div>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-xs font-light text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Join Anomed now
          </button>
          <button className="px-5 py-2 bg-[#8ae9c1] hover:bg-[#7ad8b0] text-zinc-950 rounded-full font-medium text-xs tracking-wide transition-all duration-200">
            Buy $ANO
          </button>
          
          {/* Menu Icon */}
          <button className="text-zinc-400 hover:text-white transition-colors">
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-zinc-400 hover:text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="absolute inset-0 bg-[#030706]/95 backdrop-blur-md z-40 flex flex-col justify-center items-center gap-8 text-lg font-light md:hidden">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors">Anomed Token</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors">How it works</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors">Roadmap</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors">Tokenomics</a>
          <button className="px-6 py-2.5 bg-[#8ae9c1] text-zinc-950 rounded-full font-medium text-sm w-48 mt-4">
            Buy $ANO
          </button>
        </div>
      )}

      {/* ================= MAIN HERO BODY ================= */}
      <main className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex-1 flex flex-col justify-center pt-12 pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
          
          {/* Left Text Column */}
          <div className="md:col-span-8 lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.25em] text-zinc-500 font-mono uppercase block">
                Welcome to Anomed
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-zinc-100 leading-[1.1]">
                Revolutionize <br />
                Your Health with <br />
                AnoMed Token
              </h1>
            </div>

            <div>
              <button className="px-6 py-3.5 bg-zinc-100 hover:bg-white text-zinc-950 rounded-full font-medium text-xs md:text-sm flex items-center gap-2 transition-all duration-200 group">
                Join the Revolution
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Text Column (Floating Info) */}
          <div className="md:col-span-4 lg:col-span-5 md:pt-32 flex justify-start md:justify-end">
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light tracking-wide max-w-xs md:text-left border-l border-zinc-800/60 pl-4 md:border-0 md:pl-0">
              Empowering You to Earn Rewards While Enhancing Global Health Insights
            </p>
          </div>

        </div>
      </main>

      {/* ================= FOOTER / LOWER HERO BAR ================= */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10">
        
        {/* Scroll Down Indicator */}
        <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] text-zinc-500 font-mono select-none uppercase group cursor-pointer">
          <div className="flex flex-col items-center gap-1">
            <ArrowDown size={14} className="animate-bounce text-zinc-400" />
          </div>
          <span className="[writing-mode:vertical-lr] md:[writing-mode:horizontal-tb] rotate-0">
            Scroll Down
          </span>
        </div>

        {/* Bottom Small Description */}
        <div className="max-w-md">
          <p className="text-zinc-500 text-xs md:text-[13px] leading-relaxed font-light tracking-wide">
            Our platform uses a secure Web3 login, keeping your information safe while collecting anonymized data about your interactions.
          </p>
        </div>

      </div>

      {/* ================= RIGHT SIDE FLOATING SOCIALS ================= */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-30 bg-zinc-950/20 backdrop-blur-sm p-3 rounded-full border border-zinc-900/40">
        <a href="#" className="text-zinc-500 hover:text-emerald-400 transition-colors p-1" title="Telegram">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/></svg>
        </a>
        <a href="#" className="text-zinc-500 hover:text-emerald-400 transition-colors p-1" title="Instagram">
          <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="#" className="text-zinc-500 hover:text-emerald-400 transition-colors p-1" title="OpenSea">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.85L18.42 19H5.58L12 6.85z"/></svg>
        </a>
        <a href="#" className="text-zinc-500 hover:text-emerald-400 transition-colors p-1" title="X">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
      </div>

    </div>
  );
}