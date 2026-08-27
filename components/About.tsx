"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full bg-[#F5F1E8] text-[#0a0a0a] font-sans overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
      <div className="flex flex-col w-full">

        {/* ══════════════════════════════════════════════════
            SECTION 1: SALES LOUNGE — Image Left, Text Right
        ══════════════════════════════════════════════════ */}
        <section className="flex flex-col md:flex-row w-full">

          {/* Left: Image — cover on mobile, contain on desktop */}
          <div className="w-full md:w-1/2 relative bg-[#EDE8DE] flex items-center justify-center">
            {/* Mobile: fixed height cover so image fills perfectly */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-full h-[60vw] md:h-auto md:py-12 md:px-8"
            >
              <Image
                src="/images/salesoffice.webp"
                alt="Luxury Sales Office by Zoya Events"
                fill
                className="object-cover md:object-contain rounded-sm"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Desktop: show with padding as before */}
              <div className="hidden md:block" style={{ paddingTop: "75%" }} />
            </motion.div>

            {/* Gold corner accents */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute top-5 left-5 sm:top-6 sm:left-6 h-7 w-7 sm:h-8 sm:w-8 border-t-2 border-l-2 border-[#D4AF37]/70 pointer-events-none z-10"
              style={{ filter: "drop-shadow(0 2px 8px rgba(212,175,55,0.3))" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 h-7 w-7 sm:h-8 sm:w-8 border-b-2 border-r-2 border-[#D4AF37]/70 pointer-events-none z-10"
              style={{ filter: "drop-shadow(0 2px 8px rgba(212,175,55,0.3))" }}
            />
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 bg-[#FFFBF0] flex flex-col justify-center px-8 py-16 md:px-16 lg:px-20 xl:px-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-semibold">Sales Office</span>
              </div>

              <h2 className="text-3xl md:text-[40px] lg:text-[44px] font-serif font-light text-[#0a0a0a] mb-6 leading-tight">
                The Ultimate{" "}
                <span className="italic text-[#D4AF37]">Sales Lounge</span>
              </h2>

              <p className="text-[#4a4a4a] text-[15px] md:text-[16px] leading-[1.9] mb-5 font-light">
                Constructing German Hangar Sales Offices that feel like permanent luxury hotels. Fully air-conditioned, glass-encased, and built in record time for Real Estate giants.
              </p>

              <p className="text-[#4a4a4a] text-[15px] md:text-[16px] leading-[1.9] mb-10 font-light">
                With a maximum span of 40 meters and an installation time of just 3–5 days, we deliver a complete suite of services from conceptualisation to the final product.
              </p>

              <Link
                href="/sales-office"
                className="group inline-flex items-center gap-3 px-7 py-3.5 border border-[#D4AF37] text-[#0a0a0a] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-[10px] tracking-widest uppercase w-max rounded-sm"
              >
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <ChevronRight size={11} className="ml-[2px]" />
                </span>
                View Specifications
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SECTION 2: ABOUT US — Text Left, Image Right
        ══════════════════════════════════════════════════ */}
        <section className="flex flex-col md:flex-row w-full">

          {/* Left: Content */}
          <div className="w-full md:w-1/2 bg-[#FFFBF0] flex flex-col justify-center px-8 py-16 md:px-16 lg:px-20 xl:px-28 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="flex-1 text-left"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-semibold">Our Story</span>
              </div>

              <h2 className="text-3xl md:text-[40px] lg:text-[44px] font-serif font-light text-[#0a0a0a] mb-6 leading-tight">
                From Scratch to{" "}
                <span className="italic text-[#D4AF37]">High-End Reality</span>
              </h2>

              <p className="text-[#4a4a4a] text-[15px] md:text-[16px] leading-[1.9] mb-5 font-light">
                ZOYA EVENT is a powerhouse in the event infrastructure industry. Whether it&apos;s a massive government convention or an exclusive corporate launch, we own the inventory and the expertise to deliver.
              </p>

              <p className="text-[#4a4a4a] text-[15px] md:text-[16px] leading-[1.9] mb-10 font-light">
                Established in 2013, we leverage over a decade of experience to provide an unparalleled level of personal service. We go the extra mile to help every client achieve brand and event success.
              </p>

              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-7 py-3.5 border border-[#D4AF37] text-[#0a0a0a] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-[10px] tracking-widest uppercase w-max rounded-sm"
              >
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <ChevronRight size={11} className="ml-[2px]" />
                </span>
                About Us
              </Link>
            </motion.div>
          </div>

          {/* Right: Image — cover on mobile, contain on desktop */}
          <div className="w-full md:w-1/2 relative bg-[#EDE8DE] flex items-center justify-center order-1 md:order-2">
            {/* Mobile: fixed height cover so image fills perfectly */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-full h-[60vw] md:h-auto md:py-12 md:px-8"
            >
              <Image
                src="/images/13year.webp"
                alt="13 Years of Zoya Events Excellence"
                fill
                className="object-cover md:object-contain rounded-sm"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Desktop: show with padding as before */}
              <div className="hidden md:block" style={{ paddingTop: "57%" }} />
            </motion.div>

            {/* Gold corner accents */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 h-7 w-7 sm:h-8 sm:w-8 border-t-2 border-r-2 border-[#D4AF37]/70 pointer-events-none z-10"
              style={{ filter: "drop-shadow(0 2px 8px rgba(212,175,55,0.3))" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 h-7 w-7 sm:h-8 sm:w-8 border-b-2 border-l-2 border-[#D4AF37]/70 pointer-events-none z-10"
              style={{ filter: "drop-shadow(0 2px 8px rgba(212,175,55,0.3))" }}
            />
          </div>
        </section>

      </div>
    </div>
  );
}