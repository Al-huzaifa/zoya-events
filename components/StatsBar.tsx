"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { value: 13,  suffix: "+", label: "Years of Excellence",  description: "Est. 2013 · Mumbai" },
  { value: 500, suffix: "+", label: "Events Delivered",     description: "Flawlessly executed" },
  { value: 200, suffix: "+", label: "Elite Clients",        description: "Across Maharashtra" },
  { value: 100, suffix: "%", label: "In-House Execution",   description: "Zero middlemen" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { clearInterval(timer); setDisplay(value); }
      else setDisplay(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref} className="tabular-nums">{display}{suffix}</span>;
}

export default function StatsBar() {
  return (
    <section className="relative bg-[#FFFBF0] py-14 md:py-20 px-6 overflow-hidden">

      {/* ── Gold border rules ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      {/* ── Ambient warm glow ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(212,175,55,0.07)_0%,transparent_100%)] pointer-events-none" />

      {/* ── Subtle dot texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #C9A227 0.6px, transparent 0.6px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 md:gap-6 lg:gap-0">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: idx * 0.13, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center group px-4"
            >
              {/* ── Vertical gold divider (desktop) ── */}
              {idx > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
              )}

              {/* ── Big gold number ── */}
              <div className="relative mb-3">
                {/* Subtle glow behind number */}
                <div className="absolute inset-0 blur-xl rounded-full bg-[#D4AF37]/10 scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <p
                  className="relative font-serif font-black leading-none tracking-tight"
                  style={{
                    fontSize: "clamp(3rem, 7vw, 5.5rem)",
                    background: "linear-gradient(160deg, #FCF6BA 0%, #D4AF37 35%, #BF953F 65%, #996515 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 2px 12px rgba(212,175,55,0.30))",
                    textShadow: "none",
                  }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
              </div>

              {/* ── Thin gold line ── */}
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-3
                scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              {/* Always-visible thin rule */}
              <div className="w-5 h-px bg-[#D4AF37]/40 mb-3" />

              {/* ── Label ── */}
              <p className="text-[#0a0a0a] text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] leading-snug mb-1.5">
                {stat.label}
              </p>

              {/* ── Description ── */}
              <p className="text-[#9a8860] text-[10px] uppercase tracking-widest font-light">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
