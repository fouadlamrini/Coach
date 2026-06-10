import React from 'react';

const CoreSection = () => {
  return (
    <section className="bg-[#050505] text-white py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* الصورة على اليسار (3D Character) */}
        <div className="flex justify-center lg:justify-start">
          <img 
            src="/3D_abstract.webp" 
            alt="Anomed Character" 
            className="w-full max-w-[450px] drop-shadow-[0_0_40px_rgba(20,184,166,0.2)]" 
          />
        </div>

        {/* الـ Tokenomics على اليمين */}
        <div className="space-y-12">
          <div>
            <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-2">Tokenomics</h4>
            <h2 className="text-4xl font-bold mb-6">Distribution of Anomed Token</h2>
            <p className="text-gray-400 max-w-md">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur.
            </p>
          </div>

          {/* الـ Progress Bars */}
          <div className="space-y-6">
            {[
              { label: "MANAGEMENT", width: "10%" },
              { label: "LEGAL", width: "12%" },
              { label: "OPERATIONS", width: "10%" },
              { label: "PRODUCT DEVELOPMENT", width: "18%" },
              { label: "INTER DEPARTMENTAL & PARTNERSHIP", width: "50%" }
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-[10px] font-bold tracking-widest mb-2">
                  <span>{item.label}</span>
                  <span>{item.width}</span>
                </div>
                <div className="h-2 w-full bg-[#0a0a0a] rounded-full overflow-hidden border border-gray-800">
                  <div className="h-full bg-teal-500 rounded-full" style={{ width: item.width }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreSection;