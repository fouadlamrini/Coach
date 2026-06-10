import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f2942] text-slate-400 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>&copy; 2026 The Rayan Protocol. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">Contact Us</a>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}