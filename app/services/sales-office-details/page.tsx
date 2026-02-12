"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Zap, 
  Shield, 
  TrendingUp, 
  Maximize2, 
  Thermometer, 
  Clock, 
  ArrowUpRight,
  Building2,
  Users
} from "lucide-react";

export default function SalesOfficeDetailsPage() {
  // --- HERO IMAGES ---
  const heroImages = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop", // Modern Office
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop", // Glass Structure
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"  // Luxury Interior
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // --- DATA ---
  const features = [
    {
      title: "German Precision",
      description: "Engineered for durability and safety. Tested for rapid deployment.",
      icon: Shield,
    },
    {
      title: "Turnkey Infrastructure",
      description: "Includes HVAC, electrical, flooring, and luxury lighting.",
      icon: Zap,
    },
    {
      title: "2-3 Month Duration",
      description: "Optimized for temporary campaigns without capital lock-in.",
      icon: Clock,
    },
    {
      title: "Luxury Finishes",
      description: "Italian marble look-alikes, premium carpet, and glass facades.",
      icon: CheckCircle2,
    },
  ];

  const applications = [
    { title: "Real Estate Sales", desc: "On-site premium sales lounges.", icon: Building2 },
    { title: "Exhibition Annex", desc: "VIP meeting suites next to halls.", icon: Users },
    { title: "Project Offices", desc: "High-end site management hubs.", icon: Maximize2 },
  ];

  const specs = [
    { label: "Build Time", value: "3-5 Days" },
    { label: "Durability", value: "Weatherproof" },
    { label: "Cooling", value: "Central HVAC" },
    { label: "Lighting", value: "Warm LED" },
  ];

  return (
    <main className="bg-black text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans overflow-x-hidden">
      
      {/* --- 1. NAV --- */}
      <nav className="fixed top-0 z-60 w-full bg-linear-to-b from-black/80 to-transparent backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group text-[#D4AF37]">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-[0.3em] font-bold text-xs">Home</span>
          </Link>
          <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 hidden md:block">
            Infrastructure Division
          </span>
        </div>
      </nav>

      {/* --- 2. HERO SLIDER --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={heroImages[currentImage]} 
              alt="Luxury Sales Office" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/60" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 border border-[#D4AF37]/50 rounded-full text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              The Gold Standard
            </span>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8 text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-500">
              German Hangar <br /> Sales Offices.
            </h1>
            <p className="text-zinc-300 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
              Deploy a <span className="text-white font-semibold">luxury corporate environment</span> anywhere in 72 hours. 
              The ultimate solution for premium temporary infrastructure.
            </p>
            <Link 
              href="/contact"
              className="group inline-flex items-center gap-4 bg-[#D4AF37] text-black px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              Get Technical Quote <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-widest text-zinc-500">Explore</span>
          <div className="w-px h-12 bg-linear-to-b from-[#D4AF37] to-transparent" />
        </motion.div>
      </section>

      {/* --- 3. INTRO GRID --- */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                Engineered for <br /> <span className="text-[#D4AF37]">Excellence.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Forget the flimsy tents of the past. Our German Hangar structures offer the 
                solidity, acoustics, and climate control of a permanent building, with the 
                flexibility of a temporary asset.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {specs.map((s, i) => (
                  <div key={i} className="border-l-2 border-[#D4AF37] pl-4">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">{s.label}</p>
                    <p className="text-xl font-bold text-white">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square md:aspect-4/3 rounded-2xl overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c54be3855091?q=80&w=2600" 
                alt="Construction" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-1">Structure Type</p>
                <p className="text-2xl font-black text-white">Aluminium A-Frame</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. FEATURES (BENTO) --- */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Why Choose Hangar?</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-zinc-900/50 backdrop-blur-md border border-white/5 p-8 rounded-xl hover:border-[#D4AF37]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                  <f.icon size={24} />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-3 text-white">{f.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. APPLICATIONS (Visual) --- */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-center">Applications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl aspect-3/4 border border-white/10 cursor-pointer">
                {/* Images for Applications */}
                <img 
                  src={[
                    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664", // Real Estate
                    "https://images.unsplash.com/photo-1517502884422-41e157d44301?q=80&w=2664", // Exhibition
                    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301"  // Project Office
                  ][i]}
                  alt={app.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <app.icon className="text-[#D4AF37] mb-4 opacity-0 group-hover:opacity-100 transition-opacity" size={28} />
                  <h3 className="text-2xl font-black uppercase leading-none mb-2">{app.title}</h3>
                  <p className="text-zinc-400 text-sm">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. CTA --- */}
      <section className="py-32 bg-black border-t border-white/10 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <TrendingUp className="mx-auto text-[#D4AF37] mb-8" size={48} />
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
            Ready to <br /> <span className="text-white">Build?</span>
          </h2>
          <p className="text-zinc-500 text-lg mb-10 max-w-xl mx-auto">
            From concept to handover in days. Let's discuss your site requirements.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="bg-[#D4AF37] text-black px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-white transition-colors"
            >
              Request Site Visit
            </Link>
            <Link 
              href="tel:+919876543210"
              className="border border-white/20 text-white px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Call Sales Team
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}