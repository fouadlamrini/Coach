import React from 'react';

const HowItWorks = () => {
  const steps = [
    { title: "CONNECT YOUR DEVICE", desc: "Easily link your smart health devices to our platform and start generating valuable health data." },
    { title: "EARN ANOMED TOKENS", desc: "Receive AnoMed tokens as rewards for your data contributions, enhancing your health and wellbeing." },
    { title: "CONTRIBUTE TO MEDICAL ADVANCEMENTS", desc: "Your anonymized data aids in global health research, driving innovations and improving lives." }
  ];

  return (
    <section className="bg-[#050505] text-white py-24 px-8 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* الجانب الأيسر: الصورة والنص */}
        <div className="flex-1 space-y-8">
          <div className="relative w-full max-w-[400px]">
            {/* الصورة - حطها في public folder */}
            <img src="/3d_human.png" alt="3D Model" className="w-full drop-shadow-[0_0_30px_rgba(20,184,166,0.4)]" />
          </div>
          <div>
            <h4 className="text-[#14b8a6] text-xs uppercase tracking-[0.2em] font-semibold mb-4">How it works</h4>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-6">We're Innovative<br />health data platform</h2>
            <p className="text-gray-400 max-w-md leading-relaxed mb-8">
              AnoMed is more than a health data platform; it's a catalyst for change. 
              Our vision is to create a world where individual health management 
              aids global medical progress.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-teal-400 transition-colors">
              Join Anomed →
            </button>
          </div>
        </div>

        {/* الجانب الأيمن: الخطوات والخط المتقطع */}
        <div className="flex-1 relative">
          {/* الخط المتقطع */}
          <div className="absolute left-[20px] top-[40px] bottom-[40px] w-0.5 border-l-2 border-dashed border-teal-500/30 hidden lg:block"></div>
          
          <div className="flex flex-col gap-10">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-12 group">
                {/* الدائرة الخضراء */}
                <div className="absolute left-[13px] top-2 w-3 h-3 rounded-full bg-teal-500 shadow-[0_0_15px_#14b8a6]"></div>
                
                <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-3xl hover:border-teal-500/50 transition-all duration-300">
                  <h4 className="text-teal-400 text-[10px] font-bold tracking-widest mb-3">STEP {index + 1}:</h4>
                  <h3 className="text-lg font-semibold mb-3 tracking-wide">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;