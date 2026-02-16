"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Custom Gold Gradient for Text Hover
  const goldTextClass = "bg-clip-text text-transparent bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]";
  const goldHoverClass = "hover:text-[#F3E779] transition-colors duration-300";

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
        { name: "Sales Offices", href: "/services/sales-office-details" },
      ],
    },
    {
      name: "Portfolios",
      href: "/portfolio",
      // 👇 REMOVED SUB-ITEMS HERE
    },
  ];

  return (
    <>
      {/* --- MAIN NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-black shadow-2xl z-50 border-b border-[#BF953F]/40 h-20 sm:h-24 flex items-center transition-all duration-300">
        <div className="max-w-[1920px] mx-auto w-full px-6 lg:px-12 flex justify-between items-center relative h-full">
          
          {/* --- DESKTOP LEFT LINKS --- */}
          <div className="hidden lg:flex flex-1 gap-12 items-center justify-start text-xs xl:text-sm font-serif font-medium uppercase tracking-[0.2em] text-zinc-400">
            {leftLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`${goldHoverClass} hover:tracking-[0.25em] transition-all`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* --- CENTER LOGO --- */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full py-2">
            <Link href="/" className="h-full flex items-center justify-center">
              <img
                src="/images/transparentlogo.png"
                alt="Zoya Event Logo"
                className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(191,149,63,0.3)] hover:drop-shadow-[0_0_25px_rgba(191,149,63,0.5)] transition-all duration-500"
              />
            </Link>
          </div>

          {/* --- DESKTOP RIGHT LINKS --- */}
          <div className="hidden lg:flex flex-1 gap-10 items-center justify-end text-xs xl:text-sm font-serif font-medium uppercase tracking-[0.2em] text-zinc-400">
            {rightLinks.map((item) => (
              <div 
                key={item.name} 
                className="relative h-full flex items-center group cursor-pointer"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.name)} // Only show dropdown if subItems exist
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={item.href} className={`flex items-center gap-2 py-8 ${goldHoverClass}`}>
                  {item.name} 
                  {/* Only show arrow if subItems exist */}
                  {item.subItems && (
                    <span className="text-[8px] opacity-70 group-hover:text-[#D4AF37] transition-transform group-hover:rotate-180">▼</span>
                  )}
                </Link>

                {/* Dropdown Menu (Only renders if subItems exist) */}
                <AnimatePresence>
                  {item.subItems && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-20 right-0 w-64 bg-black border border-[#BF953F]/30 shadow-[0_10px_40px_rgba(0,0,0,0.9)] pt-2 pb-2 rounded-sm backdrop-blur-xl"
                    >
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#BF953F] to-transparent"></div>
                      {item.subItems.map((sub) => (
                        <Link 
                          key={sub.name} 
                          href={sub.href} 
                          className="block px-6 py-4 text-[11px] uppercase tracking-[0.15em] text-zinc-400 hover:text-white hover:bg-[#BF953F]/10 hover:border-l-2 border-[#BF953F] transition-all"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link 
              href="/contact" 
              className="ml-6 px-6 py-2 border border-[#BF953F] text-[#BF953F] hover:bg-[#BF953F] hover:text-black transition-all duration-500 font-bold uppercase tracking-widest text-[10px]"
            >
              Get in Touch
            </Link>
          </div>

          {/* --- MOBILE HAMBURGER --- */}
          <div className="lg:hidden absolute right-6 top-1/2 -translate-y-1/2">
            <button 
              onClick={() => setIsOpen(true)}
              className="flex flex-col gap-1.5 items-end group p-2"
            >
              <span className="w-8 h-[2px] bg-[#BF953F] group-hover:w-10 transition-all duration-300"></span>
              <span className="w-6 h-[2px] bg-zinc-300 group-hover:w-10 transition-all duration-300"></span>
              <span className="w-8 h-[2px] bg-[#BF953F] group-hover:w-10 transition-all duration-300"></span>
            </button>
          </div>

        </div>
      </nav>

      {/* --- MOBILE SIDEBAR MENU (RIGHT SIDE) --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 1. Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90]"
            />

            {/* 2. Sidebar */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-black border-l border-[#BF953F]/30 z-[100] flex flex-col p-8 overflow-y-auto shadow-2xl"
            >
              {/* Header inside Sidebar */}
              <div className="flex justify-between items-center mb-10 border-b border-zinc-800 pb-4">
                <span className={`text-lg font-serif font-bold ${goldTextClass}`}>MENU</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-[#BF953F] text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
                >
                  ✕ Close
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6">
                {[...leftLinks, ...rightLinks].map((link) => (
                  <div key={link.name} className="flex flex-col">
                    <Link 
                      href={link.href} 
                      onClick={() => !link.subItems && setIsOpen(false)}
                      className="text-xl font-serif font-light uppercase tracking-widest text-zinc-300 hover:text-[#BF953F] transition-colors"
                    >
                      {link.name}
                    </Link>
                    
                    {/* Subitems indent (Only renders if subItems exist) */}
                    {link.subItems && (
                      <div className="flex flex-col mt-3 ml-4 gap-3 border-l border-[#BF953F]/20 pl-4">
                        {link.subItems.map(sub => (
                          <Link 
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="mt-8 py-3 bg-[#BF953F] text-black text-center font-bold uppercase tracking-[0.2em] hover:bg-white transition-all text-xs"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}