import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Footer() {
  const companyLinks = ["About Anomed", "Roadmap", "How it works", "Tokenomics"];
  const resourceLinks = ["Whitepaper", "Documentations", "FAQ", "Extension"];

  return (
    <footer className="w-full bg-[#060a09] text-zinc-400 font-sans antialiased pt-16 pb-8 px-6 md:px-16 lg:px-24 border-t border-zinc-900/40 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-8 pb-12">
          
          {/* Column 1: Company */}
          <div className="space-y-4">
            <h4 className="text-zinc-200 text-sm font-normal tracking-wide">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm font-light">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-zinc-100 transition-colors duration-200 block py-0.5">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-4">
            <h4 className="text-zinc-200 text-sm font-normal tracking-wide">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm font-light">
              {resourceLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-zinc-100 transition-colors duration-200 flex items-center gap-1 py-0.5 group">
                    {link}
                    <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter & Blogs */}
          <div className="space-y-5 md:max-w-xs md:ml-auto w-full">
            <div className="space-y-2">
              <h4 className="text-zinc-200 text-sm font-normal tracking-wide">
                Newsletter & Blogs
              </h4>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-light">
                Subscribe our newsletter and get up to date about our updates
              </p>
            </div>

            {/* Email Input Field */}
            <form onSubmit={(e) => e.preventDefault()} className="relative w-full max-w-sm">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-zinc-950/40 border border-zinc-800/80 rounded-full pl-5 pr-12 py-2.5 text-xs md:text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/40 transition-colors"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-transparent rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-200 transition-colors"
              >
                <ArrowRight size={14} />
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {/* Telegram */}
              <a href="#" className="w-9 h-9 rounded-full border border-zinc-800/60 bg-zinc-950/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-9 h-9 rounded-full border border-zinc-800/60 bg-zinc-950/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" h="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* OpenSea / Ship */}
              <a href="#" className="w-9 h-9 rounded-full border border-zinc-800/60 bg-zinc-950/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L2 22h20L12 2zm0 4.85L18.42 19H5.58L12 6.85z"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="#" className="w-9 h-9 rounded-full border border-zinc-800/60 bg-zinc-950/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900/60 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-light tracking-wide">
          <div>
            © 2024 Anomed. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}