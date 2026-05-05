"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const portfolioSections = [
  {
    title: "Corporate Event",
    image: "/images/portfolio-corporate.jpg",
    details: "High-end corporate events with custom infrastructure and branding solutions.",
  },
  {
    title: "Exhibition",
    image: "/images/portfolio-exhibition.jpg",
    details: "Immersive exhibition booths and trade show experiences for global brands.",
  },
  {
    title: "Sales Offices",
    image: "/images/portfolio-sales.jpg",
    details: "Temporary and permanent sales office structures with modern amenities.",
  },
];

export default function PortfolioSectionPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-[#D4AF37]">Our Portfolio Sectors</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {portfolioSections.map((section, idx) => (
          <div key={section.title} className="bg-zinc-900 rounded-lg shadow-lg overflow-hidden relative group cursor-pointer" onClick={() => setActive(idx)}>
            
            {/* FIXED RESPONSIVE IMAGE CONTAINER */}
            <div className="relative w-full aspect-[4/3] md:h-64 overflow-hidden">
              <Image
                src={section.image}
                alt={section.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={100}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 flex flex-col items-center">
              <h2 className="text-2xl font-serif font-semibold mb-4 text-[#D4AF37]">{section.title}</h2>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevents double-firing if clicking the button
                  setActive(idx);
                }}
                className="mt-2 px-6 py-2 bg-[#D4AF37] text-black rounded uppercase font-bold tracking-widest hover:bg-white transition-all"
              >
                View Details
              </button>
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
              {active === idx && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                  onClick={(e) => e.stopPropagation()} // Keeps clicks inside modal from closing it immediately
                >
                  <div className="bg-zinc-900 rounded-lg p-6 md:p-8 max-w-md w-full relative text-center border border-[#D4AF37]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActive(null);
                      }}
                      className="absolute top-2 right-4 text-[#D4AF37] text-3xl font-bold hover:text-white"
                    >
                      ×
                    </button>
                    
                    {/* FIXED MODAL IMAGE CONTAINER */}
                    <div className="relative w-full aspect-[16/9] rounded mb-6 overflow-hidden">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        sizes="(max-width: 768px) 90vw, 400px"
                        quality={100}
                        className="object-cover object-center"
                      />
                    </div>

                    <h3 className="text-2xl font-serif font-semibold mb-4 text-[#D4AF37]">{section.title}</h3>
                    <p className="text-zinc-300 mb-6">{section.details}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}