"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Zoya Events turned our open plot into a 5-star sales lounge in under 5 days. The German Hangar structure was impeccable — our clients were genuinely stunned by the quality.",
    author: "Rajesh Mehta",
    title: "Director, Mehta Realty Group",
    project: "Real Estate Sales Office · Navi Mumbai",
  },
  {
    quote: "We've worked with event companies across India and Zoya is in a league of their own. Their in-house fabrication meant zero delays. The pagoda setup for our product launch was magazine-worthy.",
    author: "Priya Sharma",
    title: "Brand Head, Prestige Hospitality",
    project: "Corporate Product Launch · BKC Mumbai",
  },
  {
    quote: "For our national exhibition at Bombay Exhibition Centre, we needed someone who could deliver at scale without compromise. Zoya Events delivered on every single promise — on time and on budget.",
    author: "Arjun Kapoor",
    title: "Operations Head, IndiaExpo Corp",
    project: "Exhibition Infrastructure · BEC Mumbai",
  },
  {
    quote: "The attention to detail at our annual gala was extraordinary. From the Octonorm stalls to the lighting rigging — everything felt premium. We've locked them in for the next three years.",
    author: "Sneha Patel",
    title: "CEO, SunRise Events",
    project: "Annual Corporate Gala · Taj Hotel Mumbai",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="relative bg-[#FFFBF0] py-24 md:py-32 px-6 overflow-hidden border-y border-[#D4AF37]/15">

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#F5F1E8] to-transparent" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D4AF37]/4 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-semibold">
              Client Testimonials
            </span>
            <div className="h-px w-12 bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#0a0a0a] font-light leading-tight">
            What Our Clients{" "}
            <span className="italic text-[#D4AF37]">Say</span>
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="bg-white border border-[#D4AF37]/20 rounded-sm p-10 md:p-14 shadow-[0_4px_40px_rgba(0,0,0,0.06)] relative"
            >
              {/* Large quote icon */}
              <Quote
                className="absolute top-8 right-8 w-14 h-14 text-[#D4AF37]/12 fill-current"
                strokeWidth={0}
              />

              <blockquote className="text-[#2a2a2a] text-lg md:text-xl font-serif font-light leading-[1.75] mb-10 max-w-3xl italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-5">
                {/* Author initials avatar */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B38728] flex items-center justify-center flex-shrink-0 shadow-[0_4px_20px_rgba(212,175,55,0.3)]">
                  <span className="text-black font-bold text-lg font-serif">
                    {t.author.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="text-[#0a0a0a] font-semibold text-sm">{t.author}</p>
                  <p className="text-[#6B6350] text-[11px] uppercase tracking-wider">{t.title}</p>
                  <p className="text-[#D4AF37] text-[10px] mt-1 tracking-widest font-medium">{t.project}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-[2px] transition-all duration-400 ${
                  idx === current
                    ? "w-8 bg-[#D4AF37]"
                    : "w-4 bg-[#D4AF37]/25 hover:bg-[#D4AF37]/50"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 border border-[#D4AF37]/40 rounded-full flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 border border-[#D4AF37]/40 rounded-full flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
