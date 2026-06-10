import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ContentSection() {
  return (
    <div className="w-full bg-black text-zinc-100 font-sans antialiased px-6 py-16 md:px-16 lg:px-24 relative z-10">
      <div className="max-w-7xl mx-auto space-y-28">
        
        {/* ================= 1. INTRODUCTION TO WHITEPAPER BANNER ================= */}
        <section>
          <div className="w-full bg-[#0a0f0d] border border-zinc-800/50 rounded-[1.8rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden">
            
            {/* Inner text layout */}
            <div className="max-w-2xl space-y-3">
              <span className="text-[10px] tracking-[0.25em] text-zinc-500 font-mono uppercase block">
                Introduction to Whitepaper
              </span>
              <p className="text-zinc-200 text-sm md:text-base lg:text-lg font-light leading-relaxed tracking-wide">
                Dive deeper into AnoMed's mission, technology, and future plans. 
                Our Whitepaper provides a comprehensive overview of how we're 
                using blockchain technology to revolutionize health data 
                management and rewards.
              </p>
            </div>

            {/* Action Button */}
            <div className="shrink-0 w-full md:w-auto">
              <button className="w-full md:w-auto px-6 py-3 bg-[#e2f1eb] hover:bg-white text-zinc-950 rounded-full font-medium text-xs md:text-sm tracking-wide transition-all duration-200 shadow-md">
                Download whitepaper
              </button>
            </div>

          </div>
        </section>

        {/* ================= 2. ABOUT ANOMED SECTION ================= */}
        <section className="text-center max-w-4xl mx-auto space-y-12 py-6">
          {/* Section Tag */}
          <span className="text-[10px] tracking-[0.25em] text-zinc-500 font-mono uppercase block">
            About Anomed
          </span>

          {/* Main Statement Blocks */}
          <div className="space-y-10 px-4 md:px-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-zinc-200 leading-relaxed">
              AnoMed is pioneering a new era in health data management, 
              offering users the unique opportunity to contribute to global health 
              advancements while earning rewards.
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base md:text-xl font-light tracking-wide leading-relaxed">
              Our secure, blockchain-based platform seamlessly connects your 
              smart health devices, allowing you to share anonymized health data 
              in exchange for AnoMed tokens.
            </p>
          </div>

          {/* Centered CTA Button */}
          <div className="pt-4 flex justify-center">
            <button className="px-6 py-3 bg-zinc-100 hover:bg-white text-zinc-950 rounded-full font-medium text-xs md:text-sm flex items-center gap-2 transition-all duration-200 group">
              Join Anomed
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}