"use client";

import React, { useState } from "react";
import Link from "next/link"; // IMPORT ADDED HERE
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, CheckCircle2, Star, Clock } from "lucide-react";

export default function WhyChooseUs() {
  const [openVideo, setOpenVideo] = useState(false);

  // Luxury Gold Gradients
  const goldGradient = "bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-[#AA8220]";
  const goldBorder = "border border-[#D4AF37]/30";
  const glassEffect = "backdrop-blur-xl bg-white/5";

  // Features List
  const features = [
    "Precision Planning & Execution",
    "Bespoke Luxury Designs",
    "Global Vendor Network",
    "Award-Winning Production"
  ];

  return (
    <section className="relative bg-[#050505] py-24 px-6 md:px-16 overflow-hidden">
      
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#AA8220]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* =======================
            LEFT: CONTENT SECTION
           ======================= */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-semibold">Our Expertise</span>
          </div>

          <h2 className={`text-4xl md:text-6xl font-serif font-bold ${goldGradient} leading-tight`}>
            Why Visionaries <br /> Choose Zoya.
          </h2>

          <p className="text-zinc-400 leading-relaxed text-lg max-w-lg">
            We don't just organize events; we engineer unforgettable moments. 
            From intimate gatherings to grand galas, our signature touch of 
            elegance ensures your story is told with perfection.
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-zinc-300 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* --- LINKED BUTTON STARTS HERE --- */}
          <Link 
            href="/portfolio" 
            className="group relative inline-block px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest overflow-hidden rounded-sm transition-all hover:scale-105"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start Your Project</span>
            <div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></div>
          </Link>
          {/* --- LINKED BUTTON ENDS HERE --- */}

        </motion.div>

        {/* =======================
            RIGHT: VIDEO PLAYER
           ======================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Glow Behind Video */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#AA8220] rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition duration-500"></div>

          {/* Video Container (The "YouTube" Card) */}
          <div 
            onClick={() => setOpenVideo(true)}
            className={`relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl ${goldBorder} bg-black aspect-video group-hover:scale-[1.01] transition-transform duration-500`}
          >
            {/* The Preview Video (Muted Loop) */}
            <video
              src="https://res.cloudinary.com/dv36bszdw/video/upload/f_auto,q_auto/zoya_web_hanger_rs7jqh.mp4"
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
            />

            {/* Overlay Gradient (Like YouTube) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

            {/* Top Info Bar */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
                <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-xs font-medium tracking-wide">Showreel 2026</span>
                </div>
            </div>

            {/* Centered Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center w-20 h-20">
                 {/* Ripple Effect */}
                 <div className="absolute w-full h-full bg-[#D4AF37] rounded-full opacity-30 animate-ping"></div>
                 {/* Button */}
                 <div className="relative w-20 h-20 bg-[#D4AF37]/90 backdrop-blur-md rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:bg-[#FFF] group-hover:scale-110 transition-all duration-300">
                    <Play className="w-8 h-8 text-black fill-current" />
                 </div>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                    <h3 className="text-white font-serif text-xl mb-1">Creating The Extraordinary</h3>
                    <p className="text-zinc-400 text-xs uppercase tracking-wider">Inside Zoya Events</p>
                </div>
                <div className="px-2 py-1 bg-black/70 rounded text-xs text-white font-mono">
                    02:45
                </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* =======================
          FULLSCREEN MODAL
         ======================= */}
      <AnimatePresence>
        {openVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-[100] p-4 md:p-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpenVideo(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-[#D4AF37] transition-colors p-2 z-50"
            >
              <X className="w-10 h-10" />
            </button>

            {/* Modal Video Wrapper */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)] bg-black relative border border-white/10"
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