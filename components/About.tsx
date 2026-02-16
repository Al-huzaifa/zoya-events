"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative w-full overflow-hidden bg-[#030303]">
      
      {/* =========================================================
          GLOBAL BACKGROUND: DARK GOLDEN GLASSMORPHISM
      ========================================================= */}
      
      {/* 1. Deep Matte Base Gradient (The Canvas) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1500] via-[#050505] to-[#000000] z-0 pointer-events-none" />

      {/* 2. Intense Golden Glows (Strategic Lighting) */}
      {/* Top Left - Sales Section Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[900px] h-[900px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      {/* Center Right - Transition Glow */}
      <div className="absolute top-[30%] right-[-15%] w-[800px] h-[800px] bg-[#FFD700]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      {/* Bottom Left - About Section Glow */}
      <div className="absolute bottom-[-10%] left-[10%] w-[1000px] h-[600px] bg-[#B8860B]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* 3. Floating Glass Shards (Visible Texture) */}
      <div className="absolute top-[10%] right-[5%] w-[400px] h-[600px] bg-gradient-to-b from-[#D4AF37]/5 to-transparent rounded-[40px] border border-[#D4AF37]/10 backdrop-blur-[2px] opacity-60 rotate-12 pointer-events-none z-0" />
      <div className="absolute top-[60%] left-[-5%] w-[300px] h-[700px] bg-gradient-to-t from-[#D4AF37]/5 to-transparent rounded-full border-r border-[#D4AF37]/10 backdrop-blur-[1px] opacity-50 -rotate-6 pointer-events-none z-0" />
      
      {/* 4. Gold Dust Noise (Subtle Sparkle) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0 mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* =========================================
          SECTION 1: SALES OFFICE (Hero Product)
          ========================================= */}
      <section className="relative w-full py-20 lg:py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             
             {/* LEFT: VISUAL (Golden Frame) */}
             <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
             >
                <div className="relative rounded-sm overflow-hidden h-[500px] shadow-[0_0_40px_rgba(212,175,55,0.1)] border border-[#D4AF37]/20 group bg-black/40">
                   <img
                     src="/images/salesoffice.webp"
                     alt="Luxury Sales Office"
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                   
                   <div className="absolute bottom-8 left-8 border-l-4 border-[#FFD700] pl-6 bg-black/50 backdrop-blur-md p-4 pr-8 rounded-r-lg">
                      <p className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-1 shadow-black drop-shadow-md">Our Signature</p>
                      <h3 className="text-white text-2xl font-serif">German Hangar Systems</h3>
                   </div>
                </div>
                {/* Golden Accent Corner */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#D4AF37]/40 hidden lg:block"></div>
             </motion.div>

             {/* RIGHT: CONTENT */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="order-1 lg:order-2"
             >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[2px] w-16 bg-gradient-to-r from-[#D4AF37] to-transparent shadow-[0_0_15px_#D4AF37]"></div>
                  <span className="text-[#FFD700] uppercase tracking-[0.25em] text-sm font-bold drop-shadow-lg glow-text">
                    Rapid Infrastructure
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                  Temporary Structures, <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3E779] to-[#B8860B]">Permanent Impact.</span>
                </h2>
                
                <p className="text-zinc-300 text-lg leading-relaxed mb-8 font-light border-l border-[#D4AF37]/20 pl-6">
                  Need a premium sales office in 5 days? We specialize in deploying high-end German Hangar solutions that offer the luxury of a permanent building with the speed of a temporary structure.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                   {["Deploy in 3-5 Days", "Luxury Interiors Included", "Climate Controlled", "Pan-India Execution"].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 border-b border-[#D4AF37]/10 pb-2">
                          <CheckCircle2 size={18} className="text-[#FFD700] drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]" />
                          <span className="text-zinc-200 text-sm font-medium tracking-wide">{feature}</span>
                      </div>
                   ))}
                </div>

                <Link 
                  href="/sales-office"
                  className="group inline-flex items-center gap-3 bg-[#D4AF37]/10 backdrop-blur-md border border-[#D4AF37]/30 text-[#FFD700] px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300"
                >
                  View Specifications <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
             </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: ABOUT ZOYA
          ========================================= */}
      <section className="relative w-full py-24 px-6 z-10 border-t border-[#D4AF37]/10 bg-gradient-to-b from-[#0a0a0a]/80 to-[#050505]/90 backdrop-blur-[3px]">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* LEFT: TEXT CONTENT */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 text-left"
            >
              <span className="text-[#FFD700] uppercase tracking-[0.2em] text-xs font-bold mb-4 block drop-shadow-md">
                  About The Company
              </span>

              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                13+ Years of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E779] to-[#D4AF37]">
                  Corporate Excellence
                </span>
              </h2>

              <p className="text-zinc-300 text-base leading-relaxed mb-8 max-w-xl">
                Based in Mumbai, Zoya Events is a premier agency specializing in corporate grandeur. We don't just organize events; we engineer experiences that align with your brand's legacy.
              </p>

              <div className="flex gap-10 mb-8 border-t border-[#D4AF37]/20 pt-8">
                 <div className="relative">
                    <span className="block text-4xl font-serif text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">500+</span>
                    <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold">Projects</span>
                    <div className="absolute -right-5 top-2 w-[1px] h-10 bg-[#D4AF37]/30"></div>
                 </div>
                 <div>
                    <span className="block text-4xl font-serif text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">100%</span>
                    <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold">Satisfaction</span>
                 </div>
              </div>

              <Link href="/about" className="inline-block text-white border-b border-[#D4AF37] pb-1 hover:text-[#FFD700] hover:border-[#FFD700] transition-colors text-xs font-bold uppercase tracking-widest hover:shadow-[0_4px_10px_rgba(212,175,55,0.1)]">
                Read Our Story
              </Link>
            </motion.div>

            {/* RIGHT: IMAGE (With Double Gold Frame) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full lg:w-1/2"
            >
              <div className="relative z-10 rounded-sm overflow-hidden border border-[#D4AF37]/20 shadow-2xl bg-[#D4AF37]/5 backdrop-blur-sm p-2 group hover:border-[#D4AF37]/40 transition-colors duration-500">
                <img
                  src="/images/13year.webp" 
                  alt="Zoya Events Team"
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 rounded-sm"
                />
              </div>
              {/* Back Gold Panel */}
              <div className="absolute -top-6 -right-6 w-full h-full border border-[#D4AF37]/10 z-0 hidden lg:block rounded-sm bg-gradient-to-br from-[#D4AF37]/5 to-transparent backdrop-blur-3xl"></div>
              {/* Front Gold Accent */}
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-l border-b border-[#FFD700]/40 z-20"></div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}