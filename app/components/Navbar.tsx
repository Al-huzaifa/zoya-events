"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// --- Types for Typescript ---
type SubItem = { name: string; href: string };
type NavItem = { name: string; href: string; subItems?: SubItem[] };

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State for desktop hover dropdowns
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // --- NAVIGATION DATA ---
  const leftItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { 
      name: "Services", 
      href: "/services",
      subItems: [
        { name: "Corporate Event", href: "/services/corporate" },
        { name: "Exhibition", href: "/services/exhibition" },
        { name: "Brand Activation", href: "/services/brand-activation" },
      ]
    },
  ];

  const rightItems: NavItem[] = [
    { 
      name: "Portfolios", 
      href: "/portfolio",
      subItems: [
        { name: "Corporate Event", href: "/portfolio/corporate" },
        { name: "Exhibition", href: "/portfolio/exhibition" },
        { name: "Brand Activation", href: "/portfolio/brand-activation" },
      ]
    },
    { name: "Sales Office", href: "/sales-office" },
    // "Enquiry" is handled separately as a button
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-2xl"
      onMouseLeave={() => setActiveDropdown(null)} // Close dropdowns when leaving nav
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-between">
          
          {/* =======================
              DESKTOP LEFT MENU 
             ======================= */}
          <div className="hidden md:flex items-center space-x-8">
            {leftItems.map((item) => (
              <div 
                key={item.name} 
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(item.name)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium uppercase tracking-widest text-zinc-300 hover:text-[#D4AF37] transition-colors py-8"
                >
                  {item.name}
                  {/* Render Arrow if subItems exist */}
                  {item.subItems && (
                    <span className="text-[10px] transform transition-transform duration-200" style={{ transform: activeDropdown === item.name ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-56 bg-[#0a0a0a] border border-[#D4AF37]/30 shadow-xl"
                      >
                        <div className="py-2 flex flex-col">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors text-left uppercase tracking-wider"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* =======================
              CENTER LOGO (ABSOLUTE)
             ======================= */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex flex-col items-center group">
               {/* Replace src with your actual logo file in /public */}
               <img 
                src="" 
                alt="Logo" 
                className="h-10 w-10 object-contain opacity-90 invert mb-1 group-hover:opacity-100 transition-opacity" 
              />
              <span className="text-xl font-bold tracking-[0.2em] text-[#D4AF37] whitespace-nowrap">
                ZOYA<span className="text-white">EVENT</span>
              </span>
            </Link>
          </div>

          {/* =======================
              DESKTOP RIGHT MENU 
             ======================= */}
          <div className="hidden md:flex items-center space-x-8">
            {rightItems.map((item) => (
              <div 
                key={item.name} 
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(item.name)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium uppercase tracking-widest text-zinc-300 hover:text-[#D4AF37] transition-colors py-8"
                >
                  {item.name}
                  {item.subItems && (
                    <span className="text-[10px] transform transition-transform duration-200" style={{ transform: activeDropdown === item.name ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 w-56 bg-[#0a0a0a] border border-[#D4AF37]/30 shadow-xl"
                      >
                        <div className="py-2 flex flex-col">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors text-left uppercase tracking-wider"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* ENQUIRY BUTTON (CTA) */}
            <Link
              href="/enquiry"
              className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] text-sm font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              Enquiry
            </Link>
          </div>

          {/* =======================
              MOBILE HAMBURGER 
             ======================= */}
          <div className="flex md:hidden absolute right-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-[#D4AF37]"
            >
              <span className="text-2xl font-bold">{isMobileMenuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* =======================
          MOBILE MENU 
         ======================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              {/* Combine left and right items for mobile list */}
              {[...leftItems, ...rightItems].map((item) => (
                <div key={item.name} className="flex flex-col">
                  <Link
                    href={item.href}
                    onClick={() => !item.subItems && setIsMobileMenuOpen(false)}
                    className="text-lg font-medium uppercase tracking-widest text-zinc-200 hover:text-[#D4AF37]"
                  >
                    {item.name}
                  </Link>
                  {/* Mobile Submenu items indented */}
                  {item.subItems && (
                    <div className="flex flex-col mt-2 ml-4 space-y-2 border-l border-white/10 pl-4">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm text-zinc-500 uppercase tracking-wider hover:text-[#D4AF37]"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Enquiry Button */}
              <Link
                href="/enquiry"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 text-center px-6 py-3 bg-[#D4AF37] text-black font-bold uppercase tracking-widest"
              >
                Enquiry
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}