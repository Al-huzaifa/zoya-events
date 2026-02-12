"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Building2, Grid3x3, Home } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section className="relative w-full bg-black py-10 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* 
          Main container using Flexbox
          - Row direction on desktop (lg screens and above)
          - Column direction on mobile (stacks vertically)
          - items-center aligns content vertically on desktop
        */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-12 items-center justify-between">
          
          {/* 
            LEFT SIDE: TEXT CONTENT
            - On mobile: full width
            - On desktop: takes ~50% of container
            - flex-1 ensures equal space distribution
          */}
          <div className="text-white text-left flex-1 w-full lg:w-auto">
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4 font-semibold">
              About Company
            </p>
            
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 leading-tight">
              About Zoya Event
            </h1>

            <p className="text-[#D4AF37] text-lg font-semibold mb-6">
              13+ Years of Experience
            </p>
            
            {/* 
              Paragraph section with proper spacing
              - text-base on mobile, text-lg on larger screens
              - leading-relaxed for readability
            */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-10">
              <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed">
                We are a nationally recognized event planning & organizing company based in Mumbai. 
                Zoya Events specializes in corporate events management, BTL activation, 
                conference organizing, and exhibition stall designing. With 13+ years of proven expertise,
                we deliver exceptional results for every event we undertake.
              </p>
            </div>

            {/* 
              About Us Button/Box
              - Uses Link component for navigation to /about
              - Styled as a bordered box with hover effects
              - Responsive padding and text sizing
            */}
            <Link
              href="/about"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition duration-300 rounded text-xs sm:text-sm md:text-base"
            >
              About Us →
            </Link>
          </div>

          {/* 
            RIGHT SIDE: IMAGE
            - Desktop: Fixed size 600px × 400px (stays on RIGHT)
            - Mobile: 100% width with auto height (responsive, appears below text)
            - Image scaling handled by object-cover to maintain aspect ratio
          */}
          <div className="w-full lg:w-auto lg:shrink-0">
            <div className="relative">
              <img
                src="/images/13year.webp" 
                alt="Zoya Events Experience - 13 Years"
                className="w-full lg:w-150 h-auto lg:h-100 rounded-lg shadow-2xl object-cover border border-zinc-800"
              />
              
              {/* 
                Experience Badge
                - Positioned absolutely on bottom-right
                - Only visible on desktop (optional on mobile)
              */}
              <div className="absolute -bottom-4 -right-4 bg-[#D4AF37] text-black px-4 py-2 font-bold text-xs tracking-widest uppercase rounded">
                13+ Years
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* SALES OFFICE SHOWCASE SECTION */}
    <section className="relative w-full bg-black py-10 sm:py-20 px-4 sm:px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10 sm:mb-20"
        >
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs sm:text-sm mb-2 sm:mb-4 font-semibold">
            Premium Solutions
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-white mb-3 sm:mb-4 leading-tight">
            Sales Office Showcase
          </h2>
        </motion.div>

        {/* Left Image, Right Content Layout */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-12 items-center justify-between">
          {/* LEFT SIDE: IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-auto lg:shrink-0"
          >
            <div className="relative group overflow-hidden rounded-lg h-60 sm:h-112.5 w-full lg:w-137.5">
              <img
                src="/images/salesoffice.webp"
                alt="German Hangar Sales Office"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
              
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black via-black/50 to-transparent pt-8 sm:pt-12 pb-3 sm:pb-6 px-4 sm:px-6">
                <p className="text-[#D4AF37] uppercase tracking-[0.15em] text-xs sm:text-sm font-semibold">
                  German Hangar Excellence
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white text-left flex-1 w-full lg:w-auto"
          >
            <p className="text-[#D4AF37] text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Temporary Sales Infrastructure
            </p>

            <h3 className="text-xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 leading-tight">
              Rapid Deployment for Maximum Impact
            </h3>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-10">
              <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed">
                Our German Hangar solutions are engineered for excellence. Deployable in 3-5 days with complete infrastructure including luxury interiors, climate control, advanced lighting, and professional design.
              </p>

              <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed">
                Perfect for 2-3 month sales campaigns, these premium environments combine reliability with sophistication. Every requirement is met: from structural integrity to refined finishes.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0"></div>
                <span className="text-zinc-300 text-xs sm:text-sm">Complete turnkey solution with full infrastructure</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0"></div>
                <span className="text-zinc-300 text-xs sm:text-sm">Rapid 3-5 day deployment with immediate operational readiness</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0"></div>
                <span className="text-zinc-300 text-xs sm:text-sm">Luxury interiors with professional climate control systems</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0"></div>
                <span className="text-zinc-300 text-xs sm:text-sm">Proven reliability across 13+ years of successful deployments</span>
              </div>
            </div>

            {/* View More Button */}
            <Link href="/sales-office">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 sm:px-12 py-2.5 sm:py-4 border border-slate-800 text-white uppercase tracking-[0.2em] font-semibold text-xs sm:text-sm overflow-hidden rounded-sm transition-all duration-500 hover:border-[#D4AF37] hover:text-black"
              >
                {/* Background fill on hover */}
                <motion.div
                  className="absolute inset-0 bg-[#D4AF37] -z-10"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
                
                {/* Button content with animated arrow */}
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <span>View More</span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={16} className="sm:w-4.5 sm:h-4.5" />
                  </motion.div>
                </div>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* OUR SERVICES SECTION */}
    <section className="relative w-full bg-black py-10 sm:py-20 px-4 sm:px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs sm:text-sm mb-2 sm:mb-4 font-semibold">
            Our Services
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-white mb-3 sm:mb-4 leading-tight">
            Comprehensive Event Solutions
          </h2>
          <p className="text-zinc-400 text-xs sm:text-base md:text-lg max-w-2xl mx-auto">
            From corporate events to specialized sales infrastructure, we deliver end-to-end solutions.
          </p>
        </motion.div>

        {/* Services Grid - Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Corporate Events */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative"
          >
            <div className="relative h-full bg-linear-to-br from-slate-900/50 to-slate-900/20 border border-slate-800 rounded-lg p-8 transition-all duration-500 hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/20">
              {/* Icon */}
              <motion.div className="mb-6">
                <div className="inline-block p-4 bg-[#D4AF37]/10 rounded-lg group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <Building2 size={32} className="text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                Corporate Events
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-base leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors duration-300">
                Transform your corporate vision into reality with bespoke event management services tailored for luxury and impact.
              </p>

              {/* Key Points */}
              <div className="space-y-3 mb-8">
                {["Custom venue design", "Audio-visual integration", "Luxury catering setup"].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] group-hover:shadow-lg group-hover:shadow-[#D4AF37]/50 transition-all duration-300"></div>
                    <span className="text-sm text-zinc-400">{point}</span>
                  </div>
                ))}
              </div>

              {/* View More Button */}
              <Link href="/services/corporate-events">
                <motion.button
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 border border-slate-800 text-white uppercase tracking-[0.15em] font-semibold text-sm overflow-hidden rounded transition-all duration-300 hover:border-[#D4AF37] hover:text-black flex items-center justify-center gap-2 group/btn relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-[#D4AF37] -z-10 rounded"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ originX: 0 }}
                  />
                  <span>View More</span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Exhibitions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative"
          >
            <div className="relative h-full bg-linear-to-br from-slate-900/50 to-slate-900/20 border border-slate-800 rounded-lg p-8 transition-all duration-500 hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/20">
              {/* Icon */}
              <motion.div className="mb-6">
                <div className="inline-block p-4 bg-[#D4AF37]/10 rounded-lg group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <Grid3x3 size={32} className="text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                Exhibitions & Stalls
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-base leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors duration-300">
                Stand out at major exhibitions with custom-designed stalls that captivate audiences and drive business results.
              </p>

              {/* Key Points */}
              <div className="space-y-3 mb-8">
                {["Custom stall architecture", "Brand-aligned design", "Display systems & lighting"].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] group-hover:shadow-lg group-hover:shadow-[#D4AF37]/50 transition-all duration-300"></div>
                    <span className="text-sm text-zinc-400">{point}</span>
                  </div>
                ))}
              </div>

              {/* View More Button */}
              <Link href="/services/exhibitions">
                <motion.button
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 border border-slate-800 text-white uppercase tracking-[0.15em] font-semibold text-sm overflow-hidden rounded transition-all duration-300 hover:border-[#D4AF37] hover:text-black flex items-center justify-center gap-2 group/btn relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-[#D4AF37] -z-10 rounded"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ originX: 0 }}
                  />
                  <span>View More</span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Sales Office */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative"
          >
            <div className="relative h-full bg-linear-to-br from-slate-900/50 to-slate-900/20 border border-slate-800 rounded-lg p-8 transition-all duration-500 hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/20">
              {/* Icon */}
              <motion.div className="mb-6">
                <div className="inline-block p-4 bg-[#D4AF37]/10 rounded-lg group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                  <Home size={32} className="text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                Sales Offices (German Hangar)
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-base leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors duration-300">
                Rapidly deployable luxury sales environments with complete infrastructure for 2-3 month campaigns.
              </p>

              {/* Key Points */}
              <div className="space-y-3 mb-8">
                {["2-3 month deployability", "Luxury interiors", "Climate control systems"].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] group-hover:shadow-lg group-hover:shadow-[#D4AF37]/50 transition-all duration-300"></div>
                    <span className="text-sm text-zinc-400">{point}</span>
                  </div>
                ))}
              </div>

              {/* View More Button */}
              <Link href="/services/sales-office-details">
                <motion.button
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 border border-slate-800 text-white uppercase tracking-[0.15em] font-semibold text-sm overflow-hidden rounded transition-all duration-300 hover:border-[#D4AF37] hover:text-black flex items-center justify-center gap-2 group/btn relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-[#D4AF37] -z-10 rounded"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ originX: 0 }}
                  />
                  <span>View More</span>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}