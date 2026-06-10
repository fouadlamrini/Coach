import React from 'react';

export default function ProtocolWorkflow() {
  return (
    <section className="bg-[#030712] text-white py-24 border-t border-slate-900/60 relative overflow-hidden">
      {/* Background Ambient Glows - Clean Soft Gold Theme */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-[#967531]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-12 right-1/4 w-[400px] h-[400px] bg-[#CDB26D]/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- PART 1: THE HERO WORKFLOW GRID --- */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-28">
          
          {/* Left Text & Graphic Block */}
          <div className="lg:col-span-6 space-y-6 relative">
            {/* Cyber Bio-Graphic Simulated Placeholder - Fixed to Gold Frame */}
            <div className="relative w-full aspect-square max-w-[360px] mx-auto lg:mx-0 mb-8 rounded-2xl border border-[#CDB26D]/20 bg-gradient-to-b from-[#967531]/10 to-transparent p-4 shadow-[0_0_50px_rgba(205,178,109,0.03)] flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#CDB26D]/5 via-transparent to-transparent opacity-50"></div>
              
              {/* Wireframe simulator using Gold Gradient updates */}
              <div className="w-44 h-44 rounded-full border-2 border-[#CDB26D]/20 border-dashed animate-[spin_20s_linear_infinite] flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-[#F3DA90]/30 border-double flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#CDB26D] to-[#967531] opacity-30 blur-md"></div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 font-mono text-[9px] text-[#CDB26D] tracking-widest">// HOLOGRAPHIC_BIOMETRICS_LOADED</div>
            </div>

            <span className="text-xs font-mono tracking-widest text-[#CDB26D] font-bold uppercase block">// OPERATIONAL PIPELINE</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              We’re an Innovative <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3DA90] via-[#CDB26D] to-[#967531]">Human Performance</span> Platform
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              The Rayan Protocol operates beyond standard training variables. We sync raw diagnostic biomarker feeds directly into highly tailored neurological and cellular countermeasures engineered to delay somatic aging.
            </p>
            <div className="pt-2">
              <button className="bg-white hover:bg-[#F3DA90] hover:text-[#030712] text-black font-bold tracking-wide text-xs uppercase px-6 py-3 rounded-lg transition-all duration-300 shadow-lg">
                Join Protocol &rarr;
              </button>
            </div>
          </div>

          {/* Right Column: The Connective Steps */}
          <div className="lg:col-span-6 relative flex flex-col gap-6 pl-4 md:pl-12">
            
            {/* Vertical Connecting Line */}
            <div className="absolute left-[36px] md:left-[44px] top-12 bottom-12 w-[1px] border-l border-dashed border-slate-800 pointer-events-none hidden sm:block"></div>

            {/* Step 1 */}
            <div className="relative bg-slate-900/30 backdrop-blur-md border border-slate-800/80 rounded-xl p-6 hover:border-[#CDB26D]/30 transition-all duration-300 shadow-xl group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-[#CDB26D]/50 transition">
                  <span className="text-xs font-mono font-bold text-[#F3DA90]">01</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-mono font-black tracking-widest text-slate-400 uppercase">STEP 1: CONNECT YOUR DEVICES</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Easily link your smart health hardware (Oura, Whoop, CGM trackers) to initialize continuous biomarker logging pipelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-slate-900/30 backdrop-blur-md border border-slate-800/80 rounded-xl p-6 hover:border-[#CDB26D]/30 transition-all duration-300 shadow-xl group sm:translate-x-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-[#CDB26D]/50 transition">
                  <span className="text-xs font-mono font-bold text-[#F3DA90]">02</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-mono font-black tracking-widest text-slate-400 uppercase">STEP 2: RECEIVE SPECIFIC PROTOCOLS</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Receive your customized targeted supplement, androgen balancing, and recovery timelines geared purely for structural longevity.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-slate-900/30 backdrop-blur-md border border-slate-800/80 rounded-xl p-6 hover:border-[#CDB26D]/30 transition-all duration-300 shadow-xl group sm:translate-x-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-[#CDB26D]/50 transition">
                  <span className="text-xs font-mono font-bold text-[#F3DA90]">03</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-mono font-black tracking-widest text-slate-400 uppercase">STEP 3: EXTEND SYSTEMIC CELLULAR AGING</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Your anonymized metric adjustments contribute to global tier-1 performance research data, upgrading individual yield trajectories.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* --- PART 2: EXPLORE BENEFITS GRID --- */}
        <div className="pt-16 border-t border-slate-900/60">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Explore the Protocol Benefits
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Benefit Card 1 */}
            <div className="bg-[#050811]/60 backdrop-blur-sm border border-slate-900 rounded-xl p-8 hover:border-[#CDB26D]/30 transition duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-slate-900/50 flex items-center justify-center mb-6 border border-slate-800 group-hover:border-[#CDB26D]/30 transition">
                <svg className="w-5 h-5 text-[#CDB26D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-white mb-2 group-hover:text-[#F3DA90] transition">Earn Rewards</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Get rewarded with programmatic cellular recovery timelines and structural biomarker discounts for hitting systemic index milestones.
              </p>
            </div>

            {/* Benefit Card 2 */}
            <div className="bg-[#050811]/60 backdrop-blur-sm border border-slate-900 rounded-xl p-8 hover:border-[#CDB26D]/30 transition duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-slate-900/50 flex items-center justify-center mb-6 border border-slate-800 group-hover:border-[#CDB26D]/30 transition">
                <svg className="w-5 h-5 text-[#CDB26D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-white mb-2 group-hover:text-[#F3DA90] transition">Enhance Privacy</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Your biological data panels are thoroughly isolated, encrypted end-to-end, and locked strictly under zero-knowledge privacy loops.
              </p>
            </div>

            {/* Benefit Card 3 */}
            <div className="bg-[#050811]/60 backdrop-blur-sm border border-slate-900 rounded-xl p-8 hover:border-[#CDB26D]/30 transition duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-slate-900/50 flex items-center justify-center mb-6 border border-slate-800 group-hover:border-[#CDB26D]/30 transition">
                <svg className="w-5 h-5 text-[#CDB26D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-base font-bold text-white mb-2 group-hover:text-[#F3DA90] transition">Drive Innovation</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Accelerate cutting-edge hyper-customized performance research protocols, updating real-world medical life-extension metrics.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}