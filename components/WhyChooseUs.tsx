"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  X,
  ShieldCheck,
  Ruler,
  Clock,
  Zap,
  ClipboardList,
  PenTool,
  HardHat,
  CheckCircle2,
} from "lucide-react";

export default function WhyChooseUs() {
  const [openVideo, setOpenVideo] = useState(false);

  const advantageSteps = [
    { title: "Blueprint", desc: "CAD Layouts & 3D Visualization", icon: <Ruler size={20} strokeWidth={1.5} /> },
    { title: "Fabrication", desc: "In-House Manufacturing", icon: <Zap size={20} strokeWidth={1.5} /> },
    { title: "Deployment", desc: "Rapid 48-Hour Installation", icon: <Clock size={20} strokeWidth={1.5} /> },
    { title: "Quality", desc: "Safety & Stability Checks", icon: <ShieldCheck size={20} strokeWidth={1.5} /> },
  ];

  const workflowSteps = [
    { title: "Consultation", desc: "Analysis & Requirements", icon: <ClipboardList size={28} strokeWidth={1.5} /> },
    { title: "3D Design", desc: "Visualizing the Structure", icon: <PenTool size={28} strokeWidth={1.5} /> },
    { title: "Fabrication", desc: "In-House Manufacturing", icon: <HardHat size={28} strokeWidth={1.5} /> },
    { title: "Execution", desc: "Rapid Safety Install", icon: <CheckCircle2 size={28} strokeWidth={1.5} /> },
  ];

  return (
    <section className="relative bg-[#FFFBF0] py-24 md:py-36 px-6 lg:px-12 overflow-hidden font-sans">

      {/* Ambient gold glows */}
      <div className="absolute top-0 left-[10%] w-[600px] h-[600px] bg-[#D4AF37]/8 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-[5%] w-[400px] h-[400px] bg-[#BF953F]/6 rounded-full blur-[120px] pointer-events-none z-0" />
      {/* Dot grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.28]" style={{ backgroundImage: 'radial-gradient(circle, #C9A227 0.7px, transparent 0.7px)', backgroundSize: '38px 38px' }} />

      {/* ── PART 1: THE ZOYA ADVANTAGE ── */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10 mb-36">

        {/* LEFT: CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] uppercase tracking-[0.22em] text-[11px] font-semibold">
                The Zoya Advantage
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0a0a0a] leading-[1.12]">
              Where Engineering{" "}
              <span className="italic text-[#D4AF37]">Meets Elegance.</span>
            </h2>

            <p className="text-[#6b5f3f] leading-relaxed text-base md:text-lg max-w-lg font-light">
              We operate at the intersection of{" "}
              <strong className="text-[#2a1f00] font-semibold">heavy infrastructure</strong>{" "}
              and{" "}
              <strong className="text-[#2a1f00] font-semibold">high-end hospitality</strong>.
              With our own fleet, fabrication unit, and design team, we eliminate
              the middleman to deliver absolute perfection.
            </p>
          </div>

          {/* Advantage grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 pt-6 border-t border-[#D4AF37]/15">
            {advantageSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 group items-start"
              >
                <div className="mt-1 w-12 h-12 min-w-[48px] rounded-full bg-white border border-[#D4AF37]/35 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37] shadow-[0_2px_12px_rgba(212,175,55,0.1)] transition-all duration-300">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-[#0a0a0a] font-serif text-xl mb-1">{step.title}</h4>
                  <p className="text-[#9a8860] text-[11px] uppercase tracking-widest font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-10 py-4 border border-[#D4AF37] text-[#0a0a0a] hover:bg-[#D4AF37] hover:text-black font-semibold text-[11px] uppercase tracking-[0.22em] transition-all duration-300 rounded-sm"
            >
              See Our Execution
            </Link>
          </div>
        </motion.div>

        {/* RIGHT: VIDEO CARD */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full"
        >
          <div
            onClick={() => setOpenVideo(true)}
            className="relative rounded-sm overflow-hidden cursor-pointer border border-[#D4AF37]/20 bg-black aspect-[4/3] lg:aspect-video group shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
          >
            <video
              src="https://res.cloudinary.com/dv36bszdw/video/upload/f_auto,q_auto/zoya_web_hanger_rs7jqh.mp4"
              muted
              loop
              autoPlay
              playsInline
              poster="/images/salesoffice.webp"
              className="w-full h-full object-cover opacity-75 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-colors duration-500" />

            {/* Gold frame corners */}
            <div className="absolute inset-4 border border-[#D4AF37]/30 pointer-events-none">
              <div className="absolute -top-px -left-px h-5 w-5 border-t-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute -top-px -right-px h-5 w-5 border-t-2 border-r-2 border-[#D4AF37]" />
              <div className="absolute -bottom-px -left-px h-5 w-5 border-b-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-[#D4AF37]" />
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-20 h-20 bg-black/50 backdrop-blur-md border border-[#D4AF37] rounded-full flex items-center justify-center pl-1.5 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black group-hover:scale-110 transition-all duration-300">
                <Play className="w-8 h-8 fill-current" />
              </div>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 z-10">
              <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/70 font-medium">
                Watch Full Video
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-[#D4AF37]/60 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── PART 2: OUR PROCESS ── */}
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-20">
          <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-[11px] font-semibold block mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#0a0a0a]">
            How We Build{" "}
            <span className="italic text-[#D4AF37]">Excellence</span>
          </h2>
          <div className="mt-6 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:grid grid-cols-4 gap-8 relative">
          <div className="absolute top-[3.5rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent z-0" />
          {workflowSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="relative z-10 text-center group"
            >
              <div className="w-28 h-28 mx-auto bg-white border border-[#D4AF37]/30 rounded-full flex items-center justify-center mb-6 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-400">
                <div className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>
              <span className="block text-[10px] text-[#D4AF37]/60 uppercase tracking-widest mb-1">
                Step {idx + 1}
              </span>
              <h3 className="text-2xl font-serif text-[#0a0a0a] mb-2">{step.title}</h3>
              <p className="text-[#9a8860] text-[11px] font-medium uppercase tracking-widest">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* MOBILE */}
        <div className="lg:hidden flex flex-col gap-6 relative px-4">
          <div className="absolute top-0 bottom-0 left-[2.75rem] w-px bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/40 to-[#D4AF37]/10" />
          {workflowSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 relative z-10 group"
            >
              <div className="w-16 h-16 shrink-0 bg-white border border-[#D4AF37]/35 rounded-full flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.07)] group-hover:border-[#D4AF37] group-hover:shadow-[0_4px_20px_rgba(212,175,55,0.2)] transition-all duration-300">
                <div className="text-[#D4AF37]">{step.icon}</div>
              </div>
              <div className="flex-1 p-5 border border-[#D4AF37]/12 bg-white/70 rounded-sm group-hover:border-[#D4AF37]/35 shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-colors duration-300">
                <h3 className="text-xl font-serif text-[#0a0a0a] mb-1">{step.title}</h3>
                <p className="text-[#9a8860] text-[11px] font-medium uppercase tracking-wider">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── VIDEO MODAL ── */}
      <AnimatePresence>
        {openVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/96 backdrop-blur-md flex items-center justify-center z-[100] p-4 md:p-8"
          >
            <button
              onClick={() => setOpenVideo(false)}
              aria-label="Close video"
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white/60 hover:text-white transition-colors z-50 p-2"
            >
              <X size={40} strokeWidth={1} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-sm overflow-hidden shadow-2xl border border-[#D4AF37]/20"
            >
              <video
                src="https://res.cloudinary.com/dv36bszdw/video/upload/f_auto,q_auto/zoya_web_hanger_rs7jqh.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}