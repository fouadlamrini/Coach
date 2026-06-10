import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';

export default function AnomedCoreContent() {
  // Data dyal l-Roadmap
  const roadmapData = [
    {
      phase: "Phase 1",
      date: "JUN 2023",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      phase: "Phase 2",
      date: "FEB 2024",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
      phase: "Phase 3",
      date: "JUN 2024",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias."
    },
    {
      phase: "Phase 4",
      date: "DEC 2024",
      text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus i."
    }
  ];

  // Data dyal l-FAQ
  const faqData = [
    {
      question: "When will the official UF launch take place?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      question: "How can I participate in the roadmap phases?",
      answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  // State bach n-toggliw l-FAQ (l-oxra m7loula par défaut kima f l-ocha)
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#060a09] text-zinc-100 font-sans antialiased selection:bg-emerald-500/30 px-6 py-16 md:px-16 lg:px-24 relative overflow-hidden">
      
      {/* Background Glow Effect (Effet de lumière f l-background) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* ================= ROADMAP SECTION ================= */}
        <section>
          {/* Header dyal Roadmap */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[10px] tracking-[0.2em] text-emerald-400 font-mono uppercase block mb-3">
                Roadmap
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-zinc-100 max-w-md md:max-w-xl leading-tight">
                See where we're going towards success
              </h2>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-3 hidden sm:flex">
              <button className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950/40 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-200">
                <ChevronLeft size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950/40 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-200">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="relative flex flex-col md:flex-row justify-between items-start gap-10 md:gap-6 lg:gap-8 pt-6">
            
            {/* Dashed Line (L-khet li ghadi f l-wst) */}
            <div className="absolute top-[35px] left-0 right-0 h-[1px] border-t border-dashed border-zinc-800 hidden md:block z-0" />

            {roadmapData.map((item, index) => (
              <div key={index} className="relative z-10 flex-1 group">
                {/* Date Badge */}
                <div className="inline-block px-4 py-1 rounded-full border border-emerald-500/20 bg-[#0c1412] text-emerald-400 font-mono text-[11px] tracking-wider mb-6 transition-colors duration-300 group-hover:border-emerald-500/40">
                  {item.date}
                </div>
                
                {/* Phase Title */}
                <h3 className="text-lg font-medium text-zinc-200 mb-3">
                  {item.phase}
                </h3>
                
                {/* Description */}
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light tracking-wide">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="pt-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-zinc-100 mb-12">
            Frequently asked questions
          </h2>

          <div className="max-w-4xl border-t border-zinc-800/60">
            {faqData.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="border-b border-zinc-800/60 py-5 transition-all duration-300"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="w-full flex justify-between items-center text-left py-2 group focus:outline-none"
                  >
                    <span className="text-base md:text-lg font-light tracking-wide text-zinc-200 group-hover:text-white transition-colors duration-200">
                      {faq.question}
                    </span>
                    <span className="text-emerald-400 transition-transform duration-300">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {/* Answer Box (kat-tsed u t-t7lo smooth layout) */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light tracking-wide pb-4 max-w-3xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}