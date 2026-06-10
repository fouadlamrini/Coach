import React from 'react';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-5 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-black text-[#0f2942] leading-tight">
            Unlock Peak Performance & Defy Aging.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            The data-driven protocol for building sustainable muscle, optimizing cellular health, and mastering longevity.
          </p>
          <div className="pt-2">
            <a href="#" className="inline-block bg-[#0052cc] hover:bg-[#0041a3] text-white px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-blue-500/20">
              Start Your Transformation
            </a>
          </div>
        </div>
        {/* Right Video (Wistia Style) */}
        <div className="lg:col-span-7">
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl aspect-video border-4 border-white group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200" 
              alt="Optimizing Your Human Protocol" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-md font-medium">
              Optimizing Your Human Protocol: Master Performance
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-[#ff0055] hover:bg-[#e6004c] text-white rounded-full flex items-center justify-center shadow-xl transition transform group-hover:scale-110">
                <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}