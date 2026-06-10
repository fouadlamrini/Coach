import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#02040a] text-slate-500 py-12 text-xs border-t border-slate-900 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="tracking-wider">&copy; 2026 THE RAYAN PROTOCOL // DIGITAL ARCHITECTURE INT.</div>
        <div className="flex gap-6 tracking-widest uppercase">
          {/* Fixed Link Hovers from Cyan to Gold */}
          <a href="#" className="hover:text-[#F3DA90] transition duration-300">SECURE_CONTACT</a>
          <a href="#" className="hover:text-[#F3DA90] transition duration-300">PRIVACY_NODE</a>
          <a href="#" className="hover:text-[#F3DA90] transition duration-300">SYSTEM_TERMS</a>
        </div>
      </div>
    </footer>
  );
}