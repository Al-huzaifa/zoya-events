'use client';

import React, { useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from 'framer-motion';
import { Warehouse, Tent, Layers, Zap, ArrowUpRight, MoveRight } from 'lucide-react';
import Link from 'next/link';

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    id: '01',
    title: 'German Hangar Structures',
    short: 'Hangars',
    description:
      '50,000 sq.ft. clear-span structures with premium acoustics, VIP lounges, and full climate control — engineered for scale.',
    icon: Warehouse,
    tags: ['50k sq.ft', 'Waterproof', 'VIP Ready'],
    col: 'lg:col-span-1',
  },
  {
    id: '02',
    title: 'Pagoda & Canopy Tents',
    short: 'Pagodas',
    description:
      'Elegant modular pagoda setups for open-air VIP hospitality, entry gates, and luxury outdoor experiences.',
    icon: Tent,
    tags: ['Modular', 'VIP Lounge', 'Pagoda'],
    col: 'lg:col-span-1',
  },
  {
    id: '03',
    title: 'Premium Flooring & Staging',
    short: 'Staging',
    description:
      'Heavy-duty platforms, bespoke staging systems, and custom carpeting that transform any ground into a grand venue.',
    icon: Layers,
    tags: ['Heavy-Duty', 'Custom Staging', 'Carpeting'],
    col: 'lg:col-span-1',
  },
  {
    id: '04',
    title: 'Complete Event Ecosystems',
    short: 'Turnkey',
    description:
      'End-to-end solutions: lighting, audio, furniture, and décor — we orchestrate every detail so you experience only perfection.',
    icon: Zap,
    tags: ['Turnkey', 'Lighting', 'Audio & AV'],
    col: 'lg:col-span-1',
  },
];

// ─── 3D Tilt Card ─────────────────────────────────────────────────────────────
function ServiceCard({
  service,
  index,
  parentInView,
}: {
  service: (typeof services)[0];
  index: number;
  parentInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 130, damping: 20 });
  const sy = useSpring(my, { stiffness: 130, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(sx, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setHovered(false);
  };

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={parentInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.65,
        delay: 0.3 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 900 }}
      className="w-full h-full min-h-0"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setHovered(true)}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative w-full h-full cursor-pointer group"
      >
        {/* ── Card ── */}
        <div
          className="relative h-full w-full rounded-2xl overflow-hidden flex flex-col
            border border-[#D4AF37]/18
            bg-gradient-to-br from-white via-[#FFFDF7] to-[#FAF7EE]
            shadow-[0_4px_24px_rgba(0,0,0,0.055),0_1px_4px_rgba(212,175,55,0.07)]
            group-hover:shadow-[0_16px_56px_rgba(0,0,0,0.11),0_4px_16px_rgba(212,175,55,0.18)]
            group-hover:border-[#D4AF37]/45
            transition-all duration-500"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Top gold accent bar */}
          <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent
            scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-20 rounded-b-full" />

          {/* Glare overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400
            bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.07)_0%,transparent_60%)] pointer-events-none z-10" />

          {/* ── Card Body ── */}
          <div className="relative z-20 flex flex-col h-full p-5 md:p-6 lg:p-5 xl:p-6" style={{ transformStyle: 'preserve-3d' }}>

            {/* Top row: big outline number + icon */}
            <div className="flex items-start justify-between mb-auto" style={{ transform: 'translateZ(20px)' }}>
              <span
                className="text-5xl md:text-6xl font-black leading-none select-none pointer-events-none"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(212,175,55,0.22)',
                  fontFamily: 'var(--font-playfair)',
                  letterSpacing: '-0.02em',
                }}
              >
                {service.id}
              </span>

              <div
                className="w-11 h-11 rounded-xl border border-[#D4AF37]/30 bg-[#FFFBF0]
                  flex items-center justify-center
                  group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_4px_20px_rgba(212,175,55,0.35)]
                  transition-all duration-400"
              >
                <Icon
                  className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors duration-300"
                  strokeWidth={1.6}
                />
              </div>
            </div>

            {/* Middle: title + description */}
            <div className="mt-4 mb-4 space-y-2" style={{ transform: 'translateZ(16px)' }}>
              <h3 className="font-serif font-bold text-[#0a0a0a] leading-tight text-base md:text-lg xl:text-xl">
                {service.title}
              </h3>
              <p className="text-[#7a6840] text-xs md:text-sm leading-relaxed font-light line-clamp-3">
                {service.description}
              </p>
            </div>

            {/* Bottom: tags + arrow */}
            <div className="flex items-end justify-between gap-2 mt-auto pt-3 border-t border-[#D4AF37]/12" style={{ transform: 'translateZ(22px)' }}>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-[9px] md:text-[10px] font-semibold uppercase tracking-wider
                      bg-[#D4AF37]/10 text-[#8B6914] border border-[#D4AF37]/22
                      group-hover:bg-[#D4AF37]/18 group-hover:border-[#D4AF37]/45
                      transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/portfolio"
                className="shrink-0 w-8 h-8 rounded-full border border-[#D4AF37]/35 flex items-center justify-center
                  text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37]
                  group-hover:shadow-[0_2px_12px_rgba(212,175,55,0.3)] group-hover:scale-110
                  transition-all duration-300"
                aria-label={`See ${service.title}`}
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3D depth layer */}
        <div
          className="absolute inset-0 -z-10 rounded-2xl
            bg-gradient-to-br from-[#D4AF37]/12 to-transparent
            translate-y-2 scale-[0.97] blur-sm
            group-hover:translate-y-4 group-hover:blur-md
            transition-all duration-500"
        />
      </motion.div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function OurWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FFFBF0] overflow-hidden font-sans flex flex-col"
      style={{ minHeight: '100dvh' }}
    >
      {/* ── Ambient Background ── */}
      <div className="absolute top-[-15%] right-[-8%] w-[40vw] h-[40vw] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-8%] w-[45vw] h-[45vw] bg-[#BF953F]/4 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: 'radial-gradient(circle, #C9A227 0.7px, transparent 0.7px)',
          backgroundSize: '38px 38px',
        }}
      />

      {/* Top border rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      {/* ── Inner layout: fills 100dvh ── */}
      <div className="relative z-10 flex flex-col h-full flex-1 w-full max-w-[1600px] mx-auto px-5 md:px-10 lg:px-14 py-6 md:py-8 lg:py-10"
        style={{ minHeight: '100dvh' }}>

        {/* ── Header Row ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8 mb-5 md:mb-7 flex-shrink-0">

          {/* Left: label + title */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] font-semibold">
                Our Services
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-baseline gap-4 flex-wrap"
            >
              <h2
                className="font-serif font-black text-[#0a0a0a] leading-none"
                style={{ fontSize: 'clamp(2.6rem, 7vw, 6rem)' }}
              >
                OUR
              </h2>
              <span
                className="font-serif font-black leading-none gold-shimmer relative"
                style={{ fontSize: 'clamp(2.6rem, 7vw, 6rem)' }}
              >
                WORK
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-[#BF953F] origin-left rounded-full block"
                />
              </span>
            </motion.div>
          </div>

          {/* Right: description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center md:items-end lg:items-center gap-4 md:text-right lg:text-left"
          >
            <p className="text-[#7a6840] text-sm leading-relaxed font-light max-w-xs md:max-w-[280px]">
              From 50,000 sq.ft. hangars to bespoke turnkey events — precision meets luxury.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2.5 px-6 py-3 border border-[#D4AF37] text-[#0a0a0a] font-semibold text-[10px] uppercase tracking-[0.22em]
                hover:bg-[#D4AF37] hover:text-black transition-all duration-300 rounded-sm whitespace-nowrap group/btn flex-shrink-0"
            >
              View Portfolio
              <MoveRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>

        {/* ── Divider line ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="h-px bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/20 to-transparent mb-5 md:mb-7 origin-left flex-shrink-0"
        />

        {/* ── 2×2 Cards Grid — fills all remaining height ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 flex-1 min-h-0">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              parentInView={inView}
            />
          ))}
        </div>

        {/* ── Footer Strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-between gap-4 mt-5 md:mt-7 pt-4 border-t border-[#D4AF37]/15 flex-shrink-0"
        >
          <p className="text-[#9a8860] text-xs font-light">
            Need something custom?{' '}
            <Link
              href="/contact"
              className="text-[#0a0a0a] font-semibold border-b border-[#D4AF37]/50 hover:text-[#8B6914] transition-colors duration-200"
            >
              Tell us what you're building →
            </Link>
          </p>
          <div className="hidden sm:flex items-center gap-2.5">
            <div className="h-px w-6 bg-[#D4AF37]/40" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]/70 font-semibold whitespace-nowrap">
              Zoya Event Solutions
            </span>
            <div className="h-px w-6 bg-[#D4AF37]/40" />
          </div>
        </motion.div>

      </div>

      {/* Bottom fade bridge */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#F5F1E8] pointer-events-none" />
    </section>
  );
}