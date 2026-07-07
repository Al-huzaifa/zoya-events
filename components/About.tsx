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

          {/* Left: Image with artistic framing */}
          <div className="w-full md:w-1/2 relative min-h-[380px] md:min-h-[70vh] overflow-hidden bg-[#EDE8DE]">
            <motion.div
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute inset-0"
            >
              <Image
                src="/images/salesoffice.webp"
                alt="Luxury Sales Office by Zoya Events"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay for seamless blend */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#F5F1E8]/15" />
            </motion.div>
            {/* Gold corner accents */}
            <div className="absolute top-6 left-6 h-8 w-8 border-t-2 border-l-2 border-[#D4AF37]/70 pointer-events-none z-10" />
            <div className="absolute bottom-6 right-6 h-8 w-8 border-b-2 border-r-2 border-[#D4AF37]/70 pointer-events-none z-10" />
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

          {/* Right: Image */}
          <div className="w-full md:w-1/2 relative min-h-[380px] md:min-h-[70vh] overflow-hidden bg-[#EDE8DE] order-1 md:order-2">
            <motion.div
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute inset-0"
            >
              <Image
                src="/images/13year.webp"
                alt="13 Years of Zoya Events Excellence"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F5F1E8]/15" />
            </motion.div>
            {/* Gold corner accents */}
            <div className="absolute top-6 right-6 h-8 w-8 border-t-2 border-r-2 border-[#D4AF37]/70 pointer-events-none z-10" />
            <div className="absolute bottom-6 left-6 h-8 w-8 border-b-2 border-l-2 border-[#D4AF37]/70 pointer-events-none z-10" />
          </div>
        </section>

      </div>
    </div>
  );
}