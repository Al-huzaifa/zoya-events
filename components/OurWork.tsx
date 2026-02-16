'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioProjects } from '@/data/portfolio';

// 1. FILTER: Only use projects that actually have an uploaded image
const VALID_PROJECTS = portfolioProjects.filter(p => p.images && p.images.length > 0);

// 2. DIVIDE: Split the images into two separate sets
const HALF_INDEX = Math.ceil(VALID_PROJECTS.length / 2);
const ROW_1_DATA = VALID_PROJECTS.slice(0, HALF_INDEX); // First Half
const ROW_2_DATA = VALID_PROJECTS.slice(HALF_INDEX);    // Second Half

export default function OurWork() {
  return (
    <section className="relative w-full py-24 bg-[#030303] overflow-hidden flex flex-col justify-center min-h-screen">
      
      {/* =========================================
          BACKGROUND: LUXURY ATMOSPHERE
      ========================================= */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1500] via-[#050505] to-[#000000] z-0" />
      
      {/* Golden Glows */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-[#B8860B]/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="relative z-10 w-full flex flex-col gap-12">
        
        {/* HEADER */}
        <div className="text-center mb-8 px-4">
          <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold block mb-3">
             Our Masterpieces
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E779] to-[#D4AF37]">
              Portfolio Gallery
            </span>
          </h2>
        </div>

        {/* =========================================
            ROW 1: FIRST HALF OF IMAGES (MOVING RIGHT)
        ========================================= */}
        <div className="relative w-full py-4 bg-white/[0.01]">
          {/* Side Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none"></div>

          {/* Slower Speed: duration 80 */}
          <MarqueeRow projects={ROW_1_DATA} direction="right" speed={80} />
        </div>

        {/* =========================================
            ROW 2: SECOND HALF OF IMAGES (MOVING LEFT)
        ========================================= */}
        <div className="relative w-full py-4 bg-white/[0.01]">
           {/* Side Fade Masks */}
           <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none"></div>
           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none"></div>

           {/* Slower Speed: duration 90 (different speed for organic feel) */}
           <MarqueeRow projects={ROW_2_DATA} direction="left" speed={90} />
        </div>

      </div>
    </section>
  );
}

// =========================================================
//  HELPER: MARQUEE ROW COMPONENT
// =========================================================
function MarqueeRow({ projects, direction, speed }: { projects: any[], direction: 'left' | 'right', speed: number }) {
  
  // Handle empty data case
  if (!projects || projects.length === 0) return null;

  // Duplicate items 4 times to ensure seamless infinite loop even on wide screens
  const repeatedProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-8 px-4 min-w-max"
        initial={{ x: direction === 'left' ? 0 : "-50%" }}
        animate={{ x: direction === 'left' ? "-50%" : 0 }}
        transition={{ 
          duration: speed, 
          ease: "linear", 
          repeat: Infinity 
        }}
      >
        {repeatedProjects.map((project, i) => (
          <ImageCard key={i} project={project} />
        ))}
      </motion.div>
    </div>
  );
}

// =========================================================
//  HELPER: INDIVIDUAL IMAGE CARD
// =========================================================
function ImageCard({ project }: { project: any }) {
  const imageUrl = project.images[0];

  return (
    // WIDER CARD: w-[450px] (Restored from first code)
    <div className="relative w-[450px] h-[280px] shrink-0 rounded-lg overflow-hidden border border-[#D4AF37]/20 bg-zinc-900 group shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-default">
      
      {/* 1. The Image */}
      <img 
        src={imageUrl} 
        alt={project.title}
        className="w-full h-full object-cover opacity-80 grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
      />

      {/* 2. Glass Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* 3. Overlay (Text appears on hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
        
        {/* Category Badge */}
        <span className="inline-block px-2 py-1 mb-2 text-[10px] font-bold tracking-widest text-black bg-[#D4AF37] rounded-sm w-max">
           {project.category || "EVENT"}
        </span>
        
        {/* Title */}
        <h3 className="text-xl font-serif text-white">
          {project.title}
        </h3>
        
        {/* Golden Underline */}
        <div className="h-[2px] w-0 group-hover:w-16 bg-[#D4AF37] mt-3 transition-all duration-500"></div>
      </div>
      
      {/* 4. Gold Border on Hover */}
      <div className="absolute inset-0 border-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
    </div>
  );
}