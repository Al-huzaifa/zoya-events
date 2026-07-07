"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Glass effect on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const goldHoverClass = "hover:text-[#D4AF37] transition-colors duration-300";

  const leftLinks: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Sales Office", href: "/sales-office" },
    { name: "About Us", href: "/about" },
  ];

  const rightLinks: NavItem[] = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <>
      {/* ── MAIN NAVBAR ── */}
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(10,9,5,0.85)" : "#F5F1E8",
          borderBottomColor: scrolled ? "rgba(212,175,55,0.4)" : "rgba(212,175,55,0.2)",
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          boxShadow: scrolled
            ? "0 4px 40px rgba(0,0,0,0.4)"
            : "0 2px 20px rgba(0,0,0,0.06)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 border-b h-[68px] sm:h-[80px] md:h-[88px] flex items-center"
      >
        <div className="max-w-[1920px] mx-auto w-full px-6 lg:px-12 flex justify-between items-center relative h-full">

          {/* ── DESKTOP LEFT LINKS ── */}
          <div
            className={`hidden lg:flex flex-1 gap-10 xl:gap-12 items-center justify-start text-[12px] xl:text-[13px] font-serif font-medium uppercase tracking-[0.18em] xl:tracking-[0.22em] ${
              scrolled ? "text-[#C9C2AC]" : "text-[#2a2a2a]"
            }`}
          >
            {leftLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${goldHoverClass} transition-all hover:tracking-[0.24em] relative group`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>

          {/* ── CENTER LOGO ── */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full py-1.5 md:py-2">
            <Link href="/" className="h-full flex items-center justify-center">
              <Image
                src="/images/transparentlogo.png"
                alt="Zoya Event Logo"
                width={180}
                height={90}
                className="h-full w-auto object-contain drop-shadow-[0_0_18px_rgba(191,149,63,0.4)] hover:drop-shadow-[0_0_32px_rgba(191,149,63,0.65)] transition-all duration-500"
                priority
              />
            </Link>
          </div>

          {/* ── DESKTOP RIGHT LINKS ── */}
          <div
            className={`hidden lg:flex flex-1 gap-10 xl:gap-12 items-center justify-end text-[12px] xl:text-[13px] font-serif font-medium uppercase tracking-[0.18em] xl:tracking-[0.22em] ${
              scrolled ? "text-[#C9C2AC]" : "text-[#2a2a2a]"
            }`}
          >
            {rightLinks.map((item) => (
              <div
                key={item.name}
                className="relative h-full flex items-center group cursor-pointer"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-2 py-8 ${goldHoverClass} relative`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
                </Link>

                <AnimatePresence>
                  {item.subItems && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-20 right-0 w-64 bg-[#0a0805]/95 backdrop-blur-xl border border-[#D4AF37]/40 shadow-[0_16px_50px_rgba(0,0,0,0.4)] pt-2 pb-2 rounded-sm"
                    >
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#BF953F] to-transparent" />
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-6 py-3.5 text-[12px] uppercase tracking-[0.15em] text-[#C9C2AC] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:pl-8 transition-all duration-200"
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
              className="ml-4 px-6 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-bold uppercase tracking-[0.18em] text-[11px] rounded-sm shadow-[0_2px_12px_rgba(212,175,55,0.15)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.35)]"
            >
              Get in Touch
            </Link>
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <div className="lg:hidden absolute right-4 sm:right-6 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="relative flex flex-col gap-[5px] items-end p-2 w-11 h-11 justify-center rounded-lg hover:bg-[#D4AF37]/8 transition-colors duration-200"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7, width: 26 } : { rotate: 0, y: 0, width: 26 }}
                className="block h-[2px] bg-[#D4AF37] origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                className="block h-[2px] w-[18px] bg-[#8B7D5B]"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7, width: 26 } : { rotate: 0, y: 0, width: 26 }}
                className="block h-[2px] bg-[#D4AF37] origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── MOBILE SIDEBAR ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[90]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-[#050503] border-l border-[#D4AF37]/25 z-[100] flex flex-col overflow-y-auto"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-7 py-5 border-b border-[#D4AF37]/15">
                <Image
                  src="/images/transparentlogo.png"
                  alt="Zoya Events"
                  width={130}
                  height={65}
                  className="h-12 w-auto object-contain"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-col flex-1 px-7 py-8 gap-1">
                {[...leftLinks, ...rightLinks].map((link, idx) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-3.5 border-b border-white/5 text-[15px] font-serif uppercase tracking-[0.18em] text-[#C9C2AC] hover:text-[#D4AF37] transition-colors duration-200 group"
                    >
                      <span>{link.name}</span>
                      <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                    {link.subItems && (
                      <div className="flex flex-col ml-4 py-1 gap-1 border-l border-[#D4AF37]/20 pl-4">
                        {link.subItems.map((sub) => (
                          <Link key={sub.name} href={sub.href} onClick={() => setIsOpen(false)}
                            className="text-[11px] uppercase tracking-widest text-[#6B6350] hover:text-[#D4AF37] transition-colors py-1.5"
                          >{sub.name}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Drawer footer */}
              <div className="px-7 py-6 border-t border-[#D4AF37]/15 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-[0.2em] text-[11px] rounded-sm hover:bg-[#BF953F] transition-colors duration-200"
                >
                  Get in Touch
                </Link>
                <p className="text-center text-[#3a3a3a] text-[10px] uppercase tracking-[0.22em]">
                  Est. 2013 · Mumbai, India
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}