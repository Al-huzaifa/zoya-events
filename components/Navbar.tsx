"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

type NavItem = {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
};

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Refs for direct DOM style updates — avoids React re-renders on scroll
  const navRef = useRef<HTMLElement>(null);

  // ─── HIGH-PERFORMANCE SCROLL HANDLER ─────────────────────────────────────
  // We update styles directly on the DOM node instead of calling setState.
  // This means zero React re-renders during scroll — completely jitter-free.
  const applyScrollStyles = useCallback(
    (scrollY: number) => {
      const nav = navRef.current;
      if (!nav) return;

      if (!isHomePage) {
        // Non-home pages: always fully opaque dark glass
        nav.style.backgroundColor = "rgba(6,4,1,0.97)";
        nav.style.backdropFilter = "blur(20px) saturate(180%)";
        nav.style.webkitBackdropFilter = "blur(20px) saturate(180%)";
        nav.style.borderBottomColor = "rgba(212,175,55,0.35)";
        nav.style.boxShadow = "0 4px 32px rgba(0,0,0,0.5)";
        return;
      }

      // Home page: interpolate from transparent (0px) to dark glass (100px)
      const THRESHOLD = 100;
      const t = Math.min(scrollY / THRESHOLD, 1); // 0 → 1

      const bgA        = (t * 0.97).toFixed(3);
      const blurPx     = (t * 20).toFixed(1);
      const saturate   = (100 + t * 80).toFixed(0);
      const borderA    = (Math.max(0, (t - 0.3) / 0.7) * 0.45).toFixed(3);
      const shadowA    = (t * 0.5).toFixed(2);

      nav.style.backgroundColor = `rgba(6,4,1,${bgA})`;
      nav.style.backdropFilter  = `blur(${blurPx}px) saturate(${saturate}%)`;
      nav.style.webkitBackdropFilter = `blur(${blurPx}px) saturate(${saturate}%)`;
      nav.style.borderBottomColor = `rgba(212,175,55,${borderA})`;
      nav.style.boxShadow = t > 0.05
        ? `0 4px 32px rgba(0,0,0,${shadowA})`
        : "none";
    },
    [isHomePage]
  );

  useEffect(() => {
    // Apply immediately on mount
    applyScrollStyles(window.scrollY);

    const onScroll = () => applyScrollStyles(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [applyScrollStyles]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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
      {/* ════════════════════════════════════════════════════════════
          NAVBAR
          Home @ top  → fully transparent (hero video shows through)
          Home scroll → smooth transition to dark glass (no re-render)
          Other pages → always deep dark glass
          ════════════════════════════════════════════════════════════ */}
      <nav
        ref={navRef}
        className="fixed top-0 w-full z-50 h-[64px] sm:h-[76px] md:h-[84px] flex items-center"
        style={{
          // Initial values — applyScrollStyles will overwrite these immediately
          backgroundColor: isHomePage ? "rgba(6,4,1,0)" : "rgba(6,4,1,0.97)",
          backdropFilter: isHomePage ? "blur(0px)" : "blur(20px) saturate(180%)",
          WebkitBackdropFilter: isHomePage ? "blur(0px)" : "blur(20px) saturate(180%)",
          borderBottom: "1px solid transparent",
          boxShadow: "none",
          // CSS transition makes the initial page-load animation smooth
          transition:
            "background-color 0.3s ease, " +
            "backdrop-filter 0.3s ease, " +
            "-webkit-backdrop-filter 0.3s ease, " +
            "border-color 0.3s ease, " +
            "box-shadow 0.3s ease",
        }}
      >
        <div className="max-w-[1920px] mx-auto w-full px-5 sm:px-8 lg:px-12 flex justify-between items-center h-full relative">

          {/* ── DESKTOP LEFT LINKS ── */}
          <div className="hidden lg:flex flex-1 gap-10 xl:gap-12 items-center justify-start text-[12px] xl:text-[13px] font-serif font-medium uppercase tracking-[0.18em] xl:tracking-[0.22em] text-[#D8CCB0]">
            {leftLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group hover:text-[#D4AF37] transition-colors duration-300"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] group-hover:w-full transition-all duration-500 ease-out" />
              </Link>
            ))}
          </div>

          {/* ── CENTER LOGO — clean, premium, professional ── */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full py-2 md:py-2.5">
            <Link
              href="/"
              className="h-full flex items-center justify-center group"
              style={{ minWidth: 130 }}
            >
              <Image
                src="/images/transparentlogo.png"
                alt="Zoya Event Logo"
                width={175}
                height={88}
                className="h-full w-auto object-contain transition-all duration-400 group-hover:brightness-125"
                style={{
                  // Clean, professional brightness boost — no glow, no animated effects
                  filter: "brightness(1.1) contrast(1.02)",
                  // Optional: subtle drop shadow for depth on dark bg
                  // drop-shadow keeps the logo legible without looking garish
                  WebkitFilter: "brightness(1.1) contrast(1.02)",
                }}
                priority
              />
            </Link>
          </div>

          {/* ── DESKTOP RIGHT LINKS ── */}
          <div className="hidden lg:flex flex-1 gap-10 xl:gap-12 items-center justify-end text-[12px] xl:text-[13px] font-serif font-medium uppercase tracking-[0.18em] xl:tracking-[0.22em] text-[#D8CCB0]">
            {rightLinks.map((item) => (
              <div
                key={item.name}
                className="relative h-full flex items-center group cursor-pointer"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="relative flex items-center gap-2 py-8 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {item.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] group-hover:w-full transition-all duration-500 ease-out" />
                </Link>

                <AnimatePresence>
                  {item.subItems && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.16, ease: "easeOut" }}
                      className="absolute top-full right-0 w-64 bg-[#060401]/98 backdrop-blur-2xl border border-[#D4AF37]/30 shadow-[0_20px_60px_rgba(0,0,0,0.7)] pt-2 pb-2 rounded-sm"
                    >
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] text-[#A89870] hover:text-[#D4AF37] hover:pl-8 transition-all duration-200"
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
              className="ml-5 px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              style={{
                border: "1px solid rgba(212,175,55,0.6)",
                color: "#D4AF37",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#D4AF37";
                (e.currentTarget as HTMLElement).style.color = "#000";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#D4AF37";
              }}
            >
              Get in Touch
            </Link>
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <div className="lg:hidden absolute right-4 sm:right-5 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="flex flex-col gap-[5px] items-end justify-center w-10 h-10"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7.5, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                style={{
                  height: 1.5,
                  display: "block",
                  borderRadius: 2,
                  backgroundColor: "#D4AF37",
                  originX: 0.5,
                  originY: 0.5,
                  width: "100%",
                }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: 6 } : { opacity: 0.6, x: 0 }}
                style={{
                  height: 1.5,
                  width: "62%",
                  display: "block",
                  borderRadius: 2,
                  backgroundColor: "#BF953F",
                  alignSelf: "flex-end",
                }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7.5, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                style={{
                  height: 1.5,
                  display: "block",
                  borderRadius: 2,
                  backgroundColor: "#D4AF37",
                  originX: 0.5,
                  originY: 0.5,
                  width: "100%",
                }}
              />
            </button>
          </div>

        </div>
      </nav>

      {/* ════════════════════════════════════════════════════════════
          MOBILE DRAWER
          ════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[90]"
              style={{ background: "rgba(0,0,0,0.85)" }}
            />

            {/* Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 38 }}
              className="fixed top-0 right-0 h-full w-[78%] max-w-[300px] z-[100] flex flex-col"
              style={{
                background: "linear-gradient(160deg, #080602 0%, #0b0804 60%, #060401 100%)",
                borderLeft: "1px solid rgba(212,175,55,0.2)",
                boxShadow: "-20px 0 80px rgba(0,0,0,0.85)",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-6 py-5 shrink-0"
                style={{ borderBottom: "1px solid rgba(212,175,55,0.08)" }}
              >
                <Image
                  src="/images/transparentlogo.png"
                  alt="Zoya Events"
                  width={110}
                  height={55}
                  className="h-9 w-auto object-contain"
                  style={{ filter: "brightness(1.15) contrast(1.02)" }}
                />
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="w-7 h-7 flex items-center justify-center text-[#6B5E40] hover:text-[#D4AF37] transition-colors duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col flex-1 overflow-y-auto px-6 pt-6 pb-4">
                {[...leftLinks, ...rightLinks].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-4 text-[13px] font-serif uppercase tracking-[0.22em] text-[#9A8E6E] hover:text-[#D4AF37] transition-colors duration-200 group"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    <span>{link.name}</span>
                    <svg
                      className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div
                className="px-6 py-5 shrink-0 space-y-3"
                style={{ borderTop: "1px solid rgba(212,175,55,0.08)" }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] rounded-sm text-black transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #BF953F 0%, #FCF6BA 45%, #D4AF37 58%, #B38728 100%)",
                  }}
                >
                  Get in Touch
                </Link>
                <p className="text-center text-[#2e2818] text-[9px] uppercase tracking-[0.3em]">
                  Est. 2015 · Mumbai
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}