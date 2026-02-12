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
          <div key={section.title} className="bg-zinc-900 rounded-lg shadow-lg overflow-hidden relative group">
            <Image
              src={section.image}
              alt={section.title}
              width={500}
              height={350}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 flex flex-col items-center">
              <h2 className="text-2xl font-serif font-semibold mb-4 text-[#D4AF37]">{section.title}</h2>
              <button
                onClick={() => setActive(idx)}
                className="mt-2 px-6 py-2 bg-[#D4AF37] text-black rounded uppercase font-bold tracking-widest hover:bg-white transition-all"
              >
                View Details
              </button>
            </div>
            {/* Popup */}
            <AnimatePresence>
              {active === idx && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                >
                  <div className="bg-zinc-900 rounded-lg p-8 max-w-md w-full relative text-center border border-[#D4AF37]">
                    <button
                      onClick={() => setActive(null)}
                      className="absolute top-4 right-4 text-[#D4AF37] text-xl font-bold hover:text-white"
                    >
                      ×
                    </button>
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={400}
                      height={250}
                      className="object-cover w-full h-48 rounded mb-6"
                    />
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
