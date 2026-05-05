"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="w-full bg-black text-white font-sans overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
      
      {/* Wrapper to ensure absolutely zero gaps between the sections */}
      <div className="flex flex-col w-full">
        
        {/* =========================================================
            SECTION 1: SALES LOUNGE (Image Left, Text Right)
        ========================================================= */}
        <section className="flex flex-col md:flex-row w-full">
          
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2 bg-black flex items-center justify-center min-h-[350px] md:min-h-[70vh]">
            <img 
              src="/images/salesoffice.webp" 
              alt="Luxury Sales Office" 
              className="w-full h-full object-contain" 
            />
          </div>
          
          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 bg-[#0a0a0a] flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 xl:px-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-[40px] lg:text-[45px] font-light text-[#D4AF37] mb-6 leading-tight">
                The Ultimate Sales Lounge
              </h2>
              
              {/* UPDATED: Removed font-light, changed to text-zinc-200 for better visibility */}
              <p className="text-zinc-200 text-[15px] md:text-[17px] leading-8 mb-6">
                Constructing German Hangar Sales Offices that feel like permanent luxury hotels. Fully air-conditioned, glass-encased, and built in record time for Real Estate giants.
              </p>
              
              <p className="text-zinc-200 text-[15px] md:text-[17px] leading-8 mb-10">
                With a maximum span of 40 meters and an installation time of just 3-5 days, we pride ourselves on unparalleled speed and quality, delivering a complete suite of services from conceptualisation to the final product.
              </p>

              <Link 
                href="/sales-office" 
                className="group inline-flex items-center gap-3 px-6 py-3 border border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-xs tracking-widest uppercase w-max"
              >
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center">
                  <ChevronRight size={12} className="ml-[2px]" />
                </span>
                View Specifications
              </Link>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            SECTION 2: ABOUT US (Text Left, Image Right)
        ========================================================= */}
        <section className="flex flex-col md:flex-row w-full">
          
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 bg-[#0f0f0f] flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 xl:px-32 order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 text-left"
            >
              <h2 className="text-3xl md:text-[40px] lg:text-[45px] font-light text-[#D4AF37] mb-6 leading-tight">
                From Scratch to High-End Reality
              </h2>
              
              {/* UPDATED: Removed font-light, changed to text-zinc-200 for better visibility */}
              <p className="text-zinc-200 text-[15px] md:text-[17px] leading-8 mb-6">
                ZOYA EVENT is a powerhouse in the event infrastructure industry. Whether it&apos;s a massive government convention or an exclusive corporate launch, we own the inventory and the expertise to deliver.
              </p>
              
              <p className="text-zinc-200 text-[15px] md:text-[17px] leading-8 mb-10">
                Established in 2013, we leverage over a decade of experience to provide an unparalleled level of personal service. We go the extra mile to help every client achieve brand and event success, no matter how big or small the project.
              </p>

              <Link 
                href="/about" 
                className="group inline-flex items-center gap-3 px-6 py-3 border border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-xs tracking-widest uppercase w-max"
              >
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center">
                  <ChevronRight size={12} className="ml-[2px]" />
                </span>
                About Us
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 bg-black flex items-center justify-center min-h-[350px] md:min-h-[70vh] order-1 md:order-2">
            <img 
              src="/images/13year.webp" 
              alt="Zoya Events Team" 
              className="w-full h-full object-contain" 
            />
          </div>
        </section>

      </div>
    </div>
  );
}