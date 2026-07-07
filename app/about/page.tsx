"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

// --- CUSTOM ANIMATED COUNTER COMPONENT (TypeScript Fixed) ---
interface AnimatedCounterProps {
  from?: number;
  to: number | string;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ from = 0, to, duration = 2, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    // Only run the math animation if 'to' is actually a number
    if (inView && typeof to === "number") {
      let start: number | null = null;
      
      const step = (timestamp: number) => { 
        if (start === null) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [inView, to, from, duration]);

  // If 'to' is text (like "State"), just render the text directly
  if (typeof to === "string") return <span ref={ref}>{to}</span>;

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

// --- MAIN PAGE ---
export default function AboutPage() {
  return (
    <main className="relative min-h-screen text-[#0a0a0a] overflow-hidden bg-[#F5F1E8] font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* =========================================================
          GLOBAL BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F1E8] via-[#FFFBF0] to-[#F9F5ED]" />
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] blur-3xl opacity-40" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(184,134,11,0.08)_0%,transparent_70%)] blur-3xl opacity-30" />
      </div>

      <div className="relative z-10">

        {/* =========================================================
            1. HERO SECTION (BIGGER LOGO)
        ========================================================= */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#D4AF37]/20">
          <div className="absolute inset-0 z-0">
             <img 
               src="/images/aboutpage.webp" 
               alt="Zoya Events Background" 
               className="w-full h-full object-cover"
             />
             {/* Dark overlay — image must be vivid and visible */}
             <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />
          </div>

          <div className="relative z-20 text-center px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-center mb-8"
            >
              <img
                src="/images/transparentlogo.png"
                alt="Zoya Events Logo"
                className="h-48 md:h-64 lg:h-72 w-auto object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]"
              />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-4 uppercase text-white"
            >
              Beyond <span className="text-[#D4AF37] font-medium">Events.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-white/70 text-sm md:text-lg max-w-3xl mx-auto font-light tracking-[0.3em] uppercase border-t border-[#D4AF37]/30 pt-6 mt-6"
            >
              A Legacy of Excellence in Mumbai&apos;s Corporate Landscape
            </motion.p>
          </div>
        </section>

        {/* =========================================================
            2. CORPORATE STATS (ANIMATED COUNTERS)
        ========================================================= */}
        <section className="py-16 border-b border-[#D4AF37]/20 bg-[#FFFBF0]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="group">
              <p className="text-[#D4AF37] text-4xl md:text-6xl font-light mb-2">
                <AnimatedCounter to={13} suffix="+" />
              </p>
              <p className="text-[#3a3a3a] uppercase text-[10px] md:text-xs tracking-[0.2em] font-medium">Years of Expertise</p>
            </div>
            <div className="group">
              <p className="text-[#D4AF37] text-4xl md:text-6xl font-light mb-2">
                <AnimatedCounter to={200} suffix="+" />
              </p>
              <p className="text-[#3a3a3a] uppercase text-[10px] md:text-xs tracking-[0.2em] font-medium">Elite Clients</p>
            </div>
            <div className="group">
              <p className="text-[#D4AF37] text-4xl md:text-6xl font-light mb-2">State</p>
              <p className="text-[#3a3a3a] uppercase text-[10px] md:text-xs tracking-[0.2em] font-medium">Wide Presence</p>
            </div>
            <div className="group">
              <p className="text-[#D4AF37] text-4xl md:text-6xl font-light mb-2">
                <AnimatedCounter to={100} suffix="%" />
              </p>
              <p className="text-[#3a3a3a] uppercase text-[10px] md:text-xs tracking-[0.2em] font-medium">In-House Execution</p>
            </div>
          </div>
        </section>

        {/* =========================================================
            ZIG-ZAG LAYOUT WRAPPER (Zero Gaps, Edge-to-Edge)
        ========================================================= */}
        <div className="flex flex-col w-full">

          {/* --- BLOCK 1: THE STORY (Text Left, Image Right) --- */}
          <section className="flex flex-col md:flex-row w-full min-h-[60vh] md:min-h-[70vh]">
            <div className="w-full md:w-1/2 bg-[#FFFBF0] flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 xl:px-32 order-2 md:order-1">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h3 className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] mb-4 font-semibold">Our DNA</h3>
                <h2 className="text-3xl md:text-[40px] lg:text-[45px] font-light text-[#0a0a0a] mb-6 leading-tight">
                  Precision in Planning, <br />
                  <span className="text-[#D4AF37]">Artistry in Execution.</span>
                </h2>
                <p className="text-[#3a3a3a] font-light text-[15px] md:text-[17px] leading-8 mb-6">
                  Headquartered in the Pinnacle Corporate Park, BKC—Mumbai&apos;s premier business hub—ZOYA EVENT is more than an agency. We are a full-scale production house with over 13 years of experience.
                </p>
                <p className="text-[#3a3a3a] font-light text-[15px] md:text-[17px] leading-8 mb-10">
                  Our mission is to provide a seamless &quot;One-Stop Solution&quot; for corporate events, BTL activations, and large-scale exhibitions, owning our inventory to guarantee absolute perfection.
                </p>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 bg-[#F5F1E8] flex items-center justify-center min-h-[350px] md:min-h-[70vh] order-1 md:order-2">
              <img src="/images/aboutplanningphase.webp" alt="Planning Phase" className="w-full h-full object-contain" />
            </div>
          </section>

          {/* --- BLOCK 2: SALES OFFICE (Image Left, Text Right) --- */}
          <section className="flex flex-col md:flex-row w-full min-h-[60vh] md:min-h-[70vh]">
            <div className="w-full md:w-1/2 bg-[#F5F1E8] flex items-center justify-center min-h-[350px] md:min-h-[70vh]">
              <img src="/images/aboutsalesoffice.webp" alt="Sales Office" className="w-full h-full object-contain" />
            </div>
            <div className="w-full md:w-1/2 bg-[#FFFBF0] flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 xl:px-32">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h3 className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] mb-4 font-semibold">Strategic Infrastructure</h3>
                <h2 className="text-3xl md:text-[40px] lg:text-[45px] font-light text-[#D4AF37] mb-6 leading-tight">
                  Bespoke Sales Offices
                </h2>
                <p className="text-[#3a3a3a] font-light text-[15px] md:text-[17px] leading-8 mb-6">
                  We specialize in the rapid deployment of Temporary Sales Offices using state-of-the-art German Hangar structures. These are not just tents; they are fully-engineered environments.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-4 text-[#3a3a3a] font-light text-[15px]"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> Rapid setup for 3-4 month activations.</li>
                  <li className="flex items-center gap-4 text-[#3a3a3a] font-light text-[15px]"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> Luxury internal fit-outs including HVAC.</li>
                  <li className="flex items-center gap-4 text-[#3a3a3a] font-light text-[15px]"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> Full safety and international compliance.</li>
                </ul>
                <Link href="/sales-office" className="group inline-flex items-center gap-3 px-6 py-3 border border-[#D4AF37] text-[#0a0a0a] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-xs tracking-widest uppercase w-max">
                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center"><ChevronRight size={12} className="ml-[2px]" /></span> View Specs
                </Link>
              </motion.div>
            </div>
          </section>

          {/* --- BLOCK 3: ALUMINIUM HANGARS (Text Left, Image Right) --- */}
          <section className="flex flex-col md:flex-row w-full min-h-[60vh] md:min-h-[70vh]">
            <div className="w-full md:w-1/2 bg-[#FFFBF0] flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 xl:px-32 order-2 md:order-1">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-[40px] lg:text-[45px] font-light text-[#0a0a0a] mb-6 leading-tight">
                  Wide-Span <span className="text-[#D4AF37]">Aluminium Hangars</span>
                </h2>
                <p className="text-[#3a3a3a] font-light text-[15px] md:text-[17px] leading-8 mb-8">
                  Engineered for versatility and endurance, our massive aluminium hangars provide the ultimate blank canvas for large-scale storage, exhibitions, and grand corporate events.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-[#D4AF37] font-medium mb-1 text-sm uppercase tracking-wider">Lightweight & Durable</h5>
                    <p className="text-[#3a3a3a] font-light text-sm">High-strength aluminium alloy.</p>
                  </div>
                  <div>
                    <h5 className="text-[#D4AF37] font-medium mb-1 text-sm uppercase tracking-wider">Quick Installation</h5>
                    <p className="text-[#3a3a3a] font-light text-sm">Rapid deployment anywhere.</p>
                  </div>
                  <div>
                    <h5 className="text-[#D4AF37] font-medium mb-1 text-sm uppercase tracking-wider">Weather Resistant</h5>
                    <p className="text-[#3a3a3a] font-light text-sm">Withstands harsh environments.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 bg-[#F5F1E8] flex items-center justify-center min-h-[350px] md:min-h-[70vh] order-1 md:order-2">
              <img src="/images/about german hanger.png" alt="Aluminium Hangar Advantages" className="w-full h-full object-contain" />
            </div>
          </section>

          {/* --- BLOCK 4: TRANSFORMATION (Image Left, Text Right) --- */}
          <section className="flex flex-col md:flex-row w-full min-h-[60vh] md:min-h-[70vh]">
            <div className="w-full md:w-1/2 bg-[#F5F1E8] flex items-center justify-center min-h-[350px] md:min-h-[70vh]">
              <img src="/images/German Hangar Transformation.webp" alt="Hangar Transformation" className="w-full h-full object-contain" />
            </div>
            <div className="w-full md:w-1/2 bg-[#FFFBF0] flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 xl:px-32">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-[40px] lg:text-[45px] font-light text-[#0a0a0a] mb-6 leading-tight">
                  From Empty Land to <br />
                  <span className="text-[#D4AF37]">Functional Space</span>
                </h2>
                <p className="text-[#3a3a3a] font-light text-[15px] md:text-[17px] leading-8 mb-8">
                  Transform any terrain into a premium, operational venue in a matter of hours. Our technology allows for the creation of sophisticated, weather-proof structures without the long lead times of traditional construction.
                </p>
                <div className="border-l-2 border-[#D4AF37] pl-6 py-2">
                  <p className="text-xl text-[#0a0a0a] font-light italic">&quot;Building the extraordinary in hours, not months.&quot;</p>
                </div>
              </motion.div>
            </div>
          </section>

        </div>

        {/* =========================================================
            5. CORE EXPERTISE GRID
        ========================================================= */}
        <section className="py-24 px-6 border-t border-[#D4AF37]/20 bg-[#F5F1E8]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-[#D4AF37] uppercase tracking-[0.4em] text-xs mb-16 font-semibold">Core Vertical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Corporate Management", desc: "Product launches, award nights, and annual meets executed with absolute precision." },
                { title: "BTL Activation", desc: "Targeted brand engagement campaigns that perfectly bridge the gap between product and consumer." },
                { title: "Exhibition Stalls", desc: "Award-winning designs and stall fabrication for elite national and international trade fairs." }
              ].map((service, idx) => (
                <div key={idx} className="group bg-[#FFFBF0] border border-[#D4AF37]/20 p-10 hover:border-[#D4AF37] transition-all duration-500">
                  <div className="h-[2px] w-12 bg-[#D4AF37] mb-6 group-hover:w-24 transition-all duration-500"></div>
                  <h4 className="text-[#0a0a0a] text-2xl mb-4 font-light group-hover:text-[#D4AF37] transition-colors">{service.title}</h4>
                  <p className="text-[#3a3a3a] font-light text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* =========================================================
            6. CALL TO ACTION (Transparent Over Logo)
        ========================================================= */}
        <section className="relative py-24 px-4 md:px-6 bg-[#F5F1E8] border-t border-[#D4AF37]/20 overflow-hidden flex flex-col items-center justify-center min-h-[50vh] md:min-h-[60vh]">
            
            {/* --- Background Logo (Highly Visible) --- */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none px-4">
                <img 
                    src="/images/transparentlogo.png" 
                    alt="Zoya Event Background Logo" 
                    className="w-[95%] md:w-[80%] lg:w-[60%] max-w-[800px] object-contain opacity-60 md:opacity-80"
                />
            </div>
            
            {/* --- Content Group --- */}
            <div className="relative z-10 w-full text-center flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#0a0a0a] leading-[1.1] drop-shadow-[0_4px_12px_rgba(255,255,255,0.5)] mb-8 md:mb-12">
                    Ready to start your <br className="hidden md:block" />
                    <span className="text-[#D4AF37] drop-shadow-[0_4px_12px_rgba(255,255,255,0.5)]">
                        Project?
                    </span>
                </h2>

                {/* --- Highly Visible Button --- */}
                <Link 
                    href="/contact" 
                    className="group inline-flex items-center gap-4 px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] hover:border-[#0a0a0a] hover:text-[#0a0a0a] transition-all duration-500 text-xs md:text-sm font-black tracking-[0.2em] uppercase rounded-sm bg-white/70 backdrop-blur-md shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
                >
                    <span className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#D4AF37] text-[#D4AF37] group-hover:border-[#0a0a0a] group-hover:text-[#0a0a0a] transition-colors duration-500 bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-[2px]"><path d="m9 18 6-6-6-6"/></svg>
                    </span>
                    Let&apos;s Build It
                </Link>
            </div>
        </section>

      </div>
    </main>
  );
}