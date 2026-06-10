import React from 'react';

const programs = [
  {
    title: "1-on-1 Elite Coaching",
    features: [
      "Personalized Training & Macros",
      "Complete Bloodwork Analysis",
      "Custom Supplement Protocols",
      "Direct 24/7 Messaging Access"
    ]
  },
  {
    title: "Performance Accelerator Program",
    features: [
      "Tiered Training Modules",
      "Biomarker Testing Guidance",
      "Monthly Strategy Upgrades",
      "Group Accountability Sessions"
    ]
  }
];

export default function Pricing() {
  return (
    <section className="bg-slate-100 py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-[#0f2942]">Upgrade Your Protocol</h2>
          <p className="text-slate-500 mt-2">Choose the level of execution your health demands.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {programs.map((prog, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#0f2942] text-center">{prog.title}</h3>
                <hr className="border-slate-100" />
                <ul className="space-y-3 text-sm text-slate-600">
                  {prog.features.map((feat, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">✔ {feat}</li>
                  ))}
                </ul>
              </div>
              <button className="w-full bg-[#0052cc] hover:bg-[#0041a3] text-white py-3 rounded-xl font-bold transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}