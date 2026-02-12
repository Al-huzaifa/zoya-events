"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const leftLinks = [
    { name: "Home", href: "/" },
    { name: "Sales Office", href: "/sales-office" },
    { name: "About Us", href: "/about" },
  ];

  const rightLinks = [
    {
      name: "Services",
      href: "/services",
      subItems: [
        { name: "Corporate Event", href: "/services/corporate-events" },
        { name: "Exhibition", href: "/services/exhibitions" },
        { name: "Sales Offices (German Hangar)", href: "/services/sales-office-details" },
      ],
    },
    {
      name: "Portfolios",
      href: "/portfolio",
      subItems: [
        { name: "Corporate Event", href: "/portfolio/corporate-events" },
        { name: "Exhibition", href: "/portfolio/exhibitions" },
        { name: "Sales Offices (German Hangar)", href: "/portfolio/sales-offices" },
      ],
    },
  ];

  return (
    <>
      {/* --- MAIN NAVBAR --- */}
      {/* Changed h-14 to h-20 for a more "Luxury" professional feel */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md text-white z-100 border-b border-zinc-800 h-16 sm:h-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 flex justify-between items-center relative h-full">
          
          {/* DESKTOP LEFT */}
          <div className="hidden md:flex gap-8 text-[10px] md:text-[12px] lg:text-[13px] font-serif font-medium uppercase tracking-[0.25em] text-zinc-400 w-[40%]">
            {leftLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#D4AF37] transition-colors font-serif">
                {link.name}
              </Link>
            ))}
          </div>

          {/* CENTER LOGO - Integration of Zoya Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex items-center">
              <img
                src="/images/transparentlogo.png" // Make sure to save the transparent PNG as this name
                alt="Zoya Event Logo"
                className="h-10 sm:h-13 md:h-15 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* DESKTOP RIGHT */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center justify-end text-[10px] md:text-[12px] lg:text-[13px] font-serif font-medium uppercase tracking-[0.25em] text-zinc-400 w-[40%]">
            {rightLinks.map((item) => (
              <div 
                key={item.name} 
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={item.href} className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 md:gap-2 py-8 font-serif">
                  {item.name} <span className="text-[6px] md:text-[7px] opacity-50">▼</span>
                </Link>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute top-20 right-0 w-60 bg-zinc-950 border border-zinc-800 shadow-2xl py-3"
                    >
                      {item.subItems.map((sub) => (
                        <Link key={sub.name} href={sub.href} className="block px-6 py-3 text-[9px] md:text-[10px] tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link href="/contact" className="px-4 md:px-6 py-2 md:py-2.5 border border-[#D4AF37] text-[#D4AF37] text-[8px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-500 ml-2 md:ml-4">
              Get in Touch
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <div className="md:hidden absolute right-4 sm:right-6">
            <button 
              onClick={() => setIsOpen(true)}
              className="flex flex-col gap-1.5 justify-center items-end w-8 h-8"
            >
              <span className="w-8 h-px bg-[#D4AF37]"></span>
              <span className="w-5 h-px bg-white"></span>
              <span className="w-8 h-px bg-[#D4AF37]"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE FULL SCREEN MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-200 flex flex-col p-6 sm:p-10"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="self-end text-[#D4AF37] text-xs font-bold uppercase tracking-widest border-b border-[#D4AF37] pb-1"
            >
              Close ✕
            </button>

            <div className="flex flex-col gap-4 sm:gap-8 mt-8 sm:mt-16">
              {[...leftLinks, ...rightLinks].map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-[0.3em] text-white hover:text-[#D4AF37]"
                >
                  {link.name}
                </Link>
              ))}
              
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="mt-6 sm:mt-10 text-center py-3 sm:py-5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-xs sm:text-sm"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}