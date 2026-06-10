import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export default function TeamAndPartners() {
  // Data dyal l-experts (Team)
  const teamMembers = [
    {
      name: "Rasmus Kuosmanen",
      role: "WordPress and Shopify development",
      email: "info@anomed.io",
      phone: "+61 123 456789",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80", // Ymkn lik tbedel b tsawr dyalk
      highlighted: true // Hada lowel drnah m-highlighti kima f l-ocha b dak l-glow green
    },
    {
      name: "Angelika Honkanen",
      role: "Specialist in search engine optimisation",
      email: "info@anomed.io",
      phone: "+61 123 456789",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      highlighted: false
    },
    {
      name: "Henri Hartikka",
      role: "Meta and Google advertising specialist",
      email: "info@anomed.io",
      phone: "+61 123 456789",
      image: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=500&q=80",
      highlighted: false
    },
    {
      name: "Paavo Tamminen",
      role: "Marketing Director, Shareholder",
      email: "info@anomed.io",
      phone: "+61 123 456789",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      highlighted: false
    }
  ];

  // Data dyal l-logos (Partners)
  const row1Logos = ["Abstract", "CADRE", "galileo", "Bankrate", "zapier", "greylock"];
  const row2Logos = ["safely", "asana", "TESLA", "slack", "Abstract"];

  return (
    <div className="min-h-screen bg-[#060a09] text-zinc-100 font-sans antialiased px-6 py-20 md:px-16 lg:px-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* ================= 1. TEAM SECTION ================= */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-zinc-100 max-w-3xl mx-auto leading-tight mb-16">
            Find out more about our technology and healthcare experts.
          </h2>

          {/* Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col group cursor-pointer">
                
                {/* Image Wrapper */}
                <div className={`relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 border transition-all duration-300 ${
                  member.highlighted 
                    ? 'border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)]' 
                    : 'border-zinc-800/40 grayscale group-hover:grayscale-0 group-hover:border-zinc-700'
                }`}>
                  {/* Green Glow effect backing for the highlighted card */}
                  {member.highlighted && (
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-transparent z-10" />
                  )}
                  
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle color overlay for highlighted card */}
                  {member.highlighted && (
                    <div className="absolute inset-0 bg-emerald-500/10 mix-blend-screen pointer-events-none" />
                  )}
                </div>

                {/* Info Text */}
                <div className="space-y-1 px-1">
                  <h3 className="text-base font-medium text-zinc-100 tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-zinc-500 text-xs font-light tracking-wide min-h-[32px]">
                    {member.role}
                  </p>
                </div>

                {/* Contact Footer */}
                <div className="mt-4 pt-4 border-t border-zinc-900 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-zinc-400 font-light">
                  <a href={`mailto:${member.email}`} className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                    <Mail size={12} className="text-zinc-500" />
                    {member.email}
                  </a>
                  <a href={`tel:${member.phone}`} className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                    <Phone size={12} className="text-zinc-500" />
                    {member.phone}
                  </a>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* ================= 2. PARTNERS SECTION ================= */}
        <section className="text-center space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-zinc-100">
              Trusted & partnered by
            </h2>
            <p className="text-3xl md:text-4xl font-light tracking-tight text-zinc-400 mt-1">
              more than 100 companies
            </p>
          </div>

          {/* Logo Rows */}
          <div className="flex flex-col gap-3 max-w-5xl mx-auto overflow-hidden opacity-80">
            {/* Row 1 */}
            <div className="flex flex-wrap justify-center gap-3">
              {row1Logos.map((logo, idx) => (
                <div 
                  key={idx} 
                  className="px-6 py-3 bg-[#0d1110] border border-zinc-800/40 rounded-xl text-xs md:text-sm font-medium tracking-wider text-zinc-400 font-mono hover:border-zinc-700 hover:text-zinc-200 transition-colors cursor-default"
                >
                  {logo}
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap justify-center gap-3">
              {row2Logos.map((logo, idx) => (
                <div 
                  key={idx} 
                  className="px-6 py-3 bg-[#0d1110] border border-zinc-800/40 rounded-xl text-xs md:text-sm font-medium tracking-wider text-zinc-400 font-mono hover:border-zinc-700 hover:text-zinc-200 transition-colors cursor-default"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 3. CTA BANNER SECTION ================= */}
        <section className="pt-6">
          <div className="w-full bg-[#0a0f0d] border border-zinc-800/40 rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden group">
            
            {/* Subtle glow behind CTA */}
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-emerald-950/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-emerald-950/20 transition-all duration-500" />

            <div className="max-w-2xl space-y-4 relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-zinc-100 leading-tight">
                Become Part of <br className="hidden sm:inline" /> the Health Revolution.
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light tracking-wide max-w-xl">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <button className="px-6 py-3.5 bg-zinc-100 hover:bg-white text-zinc-950 rounded-full font-medium text-sm flex items-center gap-2 shadow-lg shadow-black/20 hover:scale-[1.02] transition-all duration-200 group/btn">
                Join the Revolution
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}