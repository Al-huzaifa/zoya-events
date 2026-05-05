'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Tent, Warehouse, Layers, Zap, Hexagon, Sparkles } from 'lucide-react';

// --- Zoya Event Services Data (Golden Theme) ---
const services = [
  {
    id: 1,
    title: 'German Hangar Structures',
    description: 'A 50,000 sq.ft. German Hangar setup with premium acoustics and VIP lounges.',
    icon: Warehouse,
    theme: 'from-[#D4AF37] via-[#F9D423] to-[#B8860B]',
    border: 'border-gold/40',
    shadow: 'shadow-[0_8px_30px_rgba(212,175,55,0.15)]',
    tags: ['Waterproof', '50k sq.ft'],
    sideTag: 'German Hangar',
  },
  {
    id: 2,
    title: 'Pagoda & Canopy Tents',
    description: 'Elegant modular setups for VIP lounges, entry gates, and outdoor hospitality.',
    icon: Tent,
    theme: 'from-[#D4AF37] via-[#F9D423] to-[#B8860B]',
    border: 'border-gold/40',
    shadow: 'shadow-[0_8px_30px_rgba(212,175,55,0.15)]',
    tags: ['Modular', 'VIP', 'Pagoda'],
    sideTag: 'Pagoda',
  },
  {
    id: 3,
    title: 'Premium Flooring & Staging',
    description: 'Heavy-duty platforms, custom staging and custom carpeting.',
    icon: Layers,
    theme: 'from-[#D4AF37] via-[#F9D423] to-[#B8860B]',
    border: 'border-gold/40',
    shadow: 'shadow-[0_8px_30px_rgba(212,175,55,0.15)]',
    tags: ['Flooring', 'Heavy-duty', 'Custom Staging'],
    sideTag: 'Flooring',
  },
  {
    id: 4,
    title: 'Complete Event Ecosystems',
    description: 'Turnkey event solutions: lighting, audio, and furniture.',
    icon: Zap,
    theme: 'from-[#D4AF37] via-[#F9D423] to-[#B8860B]',
    border: 'border-gold/40',
    shadow: 'shadow-[0_8px_30px_rgba(212,175,55,0.15)]',
    tags: ['Ecosystem', 'Production', 'Turnkey'],
    sideTag: 'Turnkey',
  }
];

// --- 3D Interactive Golden Card ---
const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for interactive tilt
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Rotate based on mouse position
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;
    
    x.set(localX / width - 0.5);
    y.set(localY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ perspective: 1200 }} 
      className="w-full h-full relative"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        // Base card styling with inner gold bevels and dark background for readable text
        className={`relative w-full min-h-[260px] md:min-h-[240px] rounded-2xl cursor-pointer group flex items-center p-2 md:p-5 bg-linear-to-br from-[#050505] to-black border ${service.border} ${service.shadow} transition-all duration-300 hover:border-gold/60`}
      >
        {/* Subtle background glow (lightened as requested) */}
        <div className={`absolute -inset-0.5 bg-linear-to-r ${service.theme} rounded-2xl blur-md opacity-[0.08] group-hover:opacity-[0.15] transition duration-500`} style={{ transform: "translateZ(-5px)" }}></div>

        {/* Floating Top Tags */}
        <div 
          style={{ transform: "translateZ(40px)" }}
          className="absolute z-10 -top-3 left-1/2 -translate-x-1/2 flex gap-2"
        >
          {service.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-[#3f2d09] border border-gold/70 text-[#FFF8D6] text-[10px] font-semibold tracking-wide rounded-sm shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
              {tag}
            </span>
          ))}
        </div>

        {/* Floating Side Tag */}
        <div 
          style={{ transform: "translateZ(50px)" }}
          className={`absolute z-10 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#3f2d09] border border-gold/70 text-[#FFF8D6] text-[10px] rounded-sm shadow-[0_12px_30px_rgba(0,0,0,0.25)] ${service.id % 2 === 0 ? 'right-3 sm:-right-4' : 'left-3 sm:-left-4'}`}
        >
          {service.sideTag}
        </div>

        {/* Content Container */}
        <div 
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-full flex flex-col sm:flex-row items-center sm:items-center gap-4 md:gap-6 p-4 h-full"
        >
          {/* 3D Golden Icon Container */}
          <div 
            style={{ transform: "translateZ(50px)" }}
            className={`relative shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-xl flex items-center justify-center border border-gold/30 bg-linear-to-br from-[#D4AF37]/10 to-transparent shadow-[inset_0_0_15px_rgba(212,175,55,0.2)]`}
          >
            <Hexagon className="absolute w-20 h-20 text-[#D4AF37]/20" strokeWidth={1} />
            <Hexagon className="absolute w-16 h-16 text-[#D4AF37]/40" strokeWidth={1.5} />
            <service.icon className="relative w-10 h-10 text-[#FFDF73] drop-shadow-[0_0_8px_rgba(255,223,115,0.5)]" />
          </div>

          {/* Text Content - High Contrast for Visibility */}
          <div className="flex flex-col text-center sm:text-left">
            <div className="transform transition-transform duration-500">
              <h3 
                style={{ transform: "translateZ(40px)" }}
                className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#FFF8D6] to-gold mb-3 drop-shadow-md"
              >
                {service.title}
              </h3>
              
              <p 
                style={{ transform: "translateZ(30px)" }}
                className="text-[#e6d5a7] text-xs md:text-sm font-light leading-relaxed max-w-sm"
              >
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main Section Component ---
export default function ServicesUI() {
  return (
    // Very dark brown/black background to let the gold pop without being overwhelming
    <section className="py-20 md:py-32 px-4 md:px-8 bg-[#0a0802] min-h-screen overflow-hidden relative font-sans flex items-center justify-center">
      
      {/* Subtle ambient light effects (Reduced Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-[#996515]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        {/* Global 3D Perspective Wrapper - Gives the slight tilted front view */}
        <motion.div 
          style={{ perspective: 1500 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* This rotateX(5deg) gives the entire board that "leaning back" 3D look from the image */}
          <div style={{ transform: "rotateX(5deg)", transformStyle: "preserve-3d" }}>
            
            {/* Header Section */}
            <div 
              style={{ transform: "translateZ(60px)" }}
              className="flex flex-col items-center justify-center text-center mb-16 md:mb-20"
            >
              <div className="relative inline-block border-y border-[#D4AF37]/30 py-6 px-8 md:px-16 bg-[#1a1405]/50 backdrop-blur-md rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.05)] border-x border-x-[#D4AF37]/10">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 border border-[#D4AF37]/40 bg-[#0a0802] text-[#FFDF73] text-[10px] md:text-xs font-semibold uppercase tracking-widest rounded-full">
                  Services
                </span>
                
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#FFF8D6] uppercase tracking-wider mb-2">
                  WE CAN BUILD <br/>
                  <span className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-linear-to-b from-[#FFF8D6] via-gold to-[#996515] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] inline-block mt-2 relative">
                    [ANYTHING]
                    {/* Decorative stars */}
                    <Sparkles className="absolute -top-2 -right-8 text-[#FFDF73] w-6 h-6" />
                    <Sparkles className="absolute bottom-2 -left-8 text-[#D4AF37] w-4 h-4" />
                  </span>
                </h2>
                
                <p className="mt-6 text-[#d1c294] max-w-2xl mx-auto text-xs md:text-sm font-light">
                  Build an epic experience with structural integrity,<br className="hidden md:block"/> 
                  premium materials, and complete volumetric layouts.
                </p>
              </div>
            </div>

            {/* 3D Golden Grid */}
            <div 
              style={{ transformStyle: "preserve-3d" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 relative"
            >
              {services.map((service) => (
                <div key={service.id} style={{ transform: "translateZ(20px)" }}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>

            {/* Footer Text */}
            <div 
              style={{ transform: "translateZ(30px)" }}
              className="mt-16 text-center flex flex-col items-center gap-4"
            >
              <h3 className="text-[#FFDF73] text-sm md:text-xl font-bold tracking-[0.3em] uppercase drop-shadow-md">
                Event Solution & Exhibition
              </h3>
              <p className="text-[#a89c77] text-xs md:text-sm">
                Need something not listed? <a href="/contact#contact-form" className="text-[#FFDF73] hover:text-white transition-colors border-b border-[#D4AF37]/30 pb-0.5">[Tell me what you are building &rarr;]</a>
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}