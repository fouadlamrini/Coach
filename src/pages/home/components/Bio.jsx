import React from 'react';

export default function Bio() {
  return (
    <section className="bg-white py-16 border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400" 
              alt="Rayan" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#0f2942]">Meet Rayan</h2>
            <p className="text-slate-600 leading-relaxed">
              Your Performance Architect. Rayan's approach blends cutting-edge bio-science with highly practical, results-driven strategies for optimal systemic health, energy, and muscular longevity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}