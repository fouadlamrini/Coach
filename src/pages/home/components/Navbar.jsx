import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-[#0052cc] to-[#00c6ff] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div>
              <span className="font-black text-xl tracking-tight text-[#0f2942]">THE RAYAN</span>
              <span className="block text-xs font-bold tracking-widest text-[#0052cc] -mt-1">PROTOCOL</span>
            </div>
          </div>
          {/* Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <a href="#" className="text-[#0052cc] border-b-2 border-[#0052cc] pb-1">Home</a>
            <a href="#" className="hover:text-slate-900 transition">About</a>
            <a href="#" className="hover:text-slate-900 transition">Coaching Programs</a>
            <a href="#" className="hover:text-slate-900 transition">Community</a>
            <a href="#" className="hover:text-slate-900 transition">Blog</a>
          </div>
          {/* CTA */}
          <div>
            <a href="#" className="bg-[#0f2942] hover:bg-[#1a4166] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition shadow-sm">
              Apply for Coaching
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}