"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ShieldCheck, Ruler, Clock, Zap, ClipboardList, PenTool, HardHat, CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const [openVideo, setOpenVideo] = useState(false);

  // Data for "The Zoya Advantage"
  const advantageSteps = [
    { title: "Blueprint", desc: "CAD Layouts & 3D Visualization", icon: <Ruler size={20} strokeWidth={1.5} /> },
    { title: "Fabrication", desc: "In-House Manufacturing", icon: <Zap size={20} strokeWidth={1.5} /> },
    { title: "Deployment", desc: "Rapid 48-Hour Installation", icon: <Clock size={20} strokeWidth={1.5} /> },
    { title: "Quality", desc: "Safety & Stability Checks", icon: <ShieldCheck size={20} strokeWidth={1.5} /> },
  ];

  // Data for "Our Process"
  const workflowSteps = [
    { title: "Consultation", desc: "Analysis & Requirements.", icon: <ClipboardList size={28} strokeWidth={1.5} /> },
    { title: "3D Design", desc: "Visualizing the Structure.", icon: <PenTool size={28} strokeWidth={1.5} /> },
    { title: "Fabrication", desc: "In-House Manufacturing.", icon: <HardHat size={28} strokeWidth={1.5} /> },
    { title: "Execution", desc: "Rapid Safety Install.", icon: <CheckCircle2 size={28} strokeWidth={1.5} /> },
  ];

  return (
    <section className="relative bg-[#050505] py-20 md:py-32 px-6 lg:px-12 overflow-hidden border-t border-[#D4AF37]/10 font-sans">
      
      {/* Subtle Background Glow (Not overpowering) */}
      <div className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* =========================================================
          PART 1: THE ZOYA ADVANTAGE (Left Text, Right Video)
      ========================================================= */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10 mb-32">
        
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
               <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
               <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-semibold">The Zoya Advantage</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.15]">
              Where Engineering <br /> 
              <span className="text-[#D4AF37]">Meets Elegance.</span>
            </h2>

            <p className="text-zinc-300 leading-relaxed text-base md:text-lg max-w-lg font-light">
              We operate at the intersection of <strong className="text-white font-medium">heavy infrastructure</strong> and <strong className="text-white font-medium">high-end hospitality</strong>. With our own fleet, fabrication unit, and design team, we eliminate the middleman to deliver absolute perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 pt-6 border-t border-white/10">
              {advantageSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 group items-start">
                  <div className="mt-1 w-12 h-12 min-w-[48px] rounded-full bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                      {step.icon}
                  </div>
                  <div>
                      <h4 className="text-white font-serif text-xl mb-1">{step.title}</h4>
                      <p className="text-zinc-400 text-xs uppercase tracking-widest font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className="pt-6">
            <Link href="/portfolio" className="inline-flex items-center justify-center px-10 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300">
              See Our Execution
            </Link>
          </div>
        </motion.div>

        {/* RIGHT: CLEAN VIDEO CARD */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full"
        >
          <div 
            onClick={() => setOpenVideo(true)}
            className="relative rounded-sm overflow-hidden cursor-pointer shadow-2xl border border-[#D4AF37]/20 bg-black aspect-[4/3] lg:aspect-video group"
          >
            {/* Thumbnail Video */}
            <video
              src="https://res.cloudinary.com/dv36bszdw/video/upload/f_auto,q_auto/zoya_web_hanger_rs7jqh.mp4"
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

            {/* Elegant Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
               <div className="w-20 h-20 bg-black/50 backdrop-blur-md border border-[#D4AF37] rounded-full flex items-center justify-center pl-1.5 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                  <Play className="w-8 h-8 fill-current" />
               </div>
            </div>
          </div>
        </motion.div>
      </div>


      {/* =========================================================
          PART 2: OUR PROCESS
      ========================================================= */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20">
           <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-semibold">Our Process</span>
           <h2 className="text-3xl md:text-5xl font-serif text-white mt-4">
             How We Build <span className="text-[#D4AF37]">Excellence</span>
           </h2>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden lg:grid grid-cols-4 gap-8 relative">
           <div className="absolute top-[3.5rem] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent z-0"></div>

           {workflowSteps.map((step, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: idx * 0.15 }}
               viewport={{ once: true }}
               className="relative z-10 text-center group"
             >
                <div className="w-28 h-28 mx-auto bg-[#0a0a0a] border border-[#D4AF37]/30 rounded-full flex items-center justify-center mb-6 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300">
                   <div className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                   </div>
                </div>

                <h3 className="text-2xl font-serif text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-xs font-medium uppercase tracking-widest">{step.desc}</p>
             </motion.div>
           ))}
        </div>

        {/* MOBILE/TABLET VIEW */}
        <div className="lg:hidden flex flex-col gap-8 relative px-4">
           <div className="absolute top-0 bottom-0 left-[2.75rem] w-[1px] bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/50 to-[#D4AF37]/10"></div>

           {workflowSteps.map((step, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               viewport={{ once: true }}
               className="flex items-center gap-6 relative z-10 group"
             >
                <div className="w-16 h-16 shrink-0 bg-[#0a0a0a] border border-[#D4AF37]/40 rounded-full flex items-center justify-center shadow-lg group-hover:border-[#D4AF37] transition-colors duration-300">
                   <div className="text-[#D4AF37]">
                      {step.icon}
                   </div>
                </div>

                <div className="flex-1 p-5 border border-white/5 bg-[#111] rounded-sm group-hover:border-[#D4AF37]/30 transition-colors duration-300">
                   <h3 className="text-xl font-serif text-white mb-1">{step.title}</h3>
                   <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider">{step.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>

      </div>

      {/* =========================================================
          CLEAN FULLSCREEN VIDEO MODAL
      ========================================================= */}
      <AnimatePresence>
        {openVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-[100] p-4 md:p-8"
          >
            {/* Simple Close Button */}
            <button
              onClick={() => setOpenVideo(false)}
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors z-50 p-2"
            >
              <X size={40} strokeWidth={1} />
            </button>
            
            {/* Native Video Player */}
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10"
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