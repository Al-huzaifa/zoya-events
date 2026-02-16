"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Clock } from "lucide-react";

// --- Service Data ---
const services = [
  {
    id: "01",
    title: "Corporate Events",
    subtitle: "Gala Dinners • Conferences • Product Launches",
    description:
      "We architect corporate gatherings that transcend the ordinary. From high-stakes board meetings to expansive global summits, we curate environments that reflect the stature of your brand. Our approach combines logistical precision with high-end hospitality.",
    highlights: [
      "Bespoke Venue Scouting & Design",
      "immersive Audio-Visual Production",
      "Executive Hospitality & Catering",
      "Seamless End-to-End Logistics",
    ],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop",
    href: "/contact",
  },
  {
    id: "02",
    title: "Exhibitions & Stalls",
    subtitle: "Custom Fabrication • Brand Activation • Trade Shows",
    description:
      "Dominate the trade floor with architectural stall designs that demand attention. We move beyond standard booths to create immersive brand temples. Our fabrication team ensures that every texture, light fixture, and structural element aligns perfectly with your identity.",
    highlights: [
      "3D Architectural Stall Design",
      "Modular & Custom Fabrication",
      "Interactive Digital Displays",
      "High-Impact Branding Systems",
    ],
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2000&auto=format&fit=crop",
    href: "/contact",
  },
  {
    id: "03",
    title: "German Hangar Structures",
    subtitle: "Sales Offices • Temporary Infrastructure • VIP Lounges",
    description:
      "Rapidly deployable luxury. Our German Hangar solutions provide permanent-feel structures for temporary needs. Engineered for stability and finished with premium interiors, these are the gold standard for real estate sales offices and outdoor luxury events.",
    highlights: [
      "Weather-Resistant Engineering",
      "Luxury Interior Fit-outs (AC/Flooring)",
      "Rapid 2-3 Month Deployment",
      "Glass Facades & Premium Lighting",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    href: "/contact",
  },
];

// --- INVENTORY DATA (Split for 2 Rows) ---
const inventoryRow1 = [
  { name: "German Hangar", image: "/images/servicehanger.webp" },
  { name: "Pagoda Tents", image: "/images/portfolio-3.jpg" },
  { name: "Tower Cooling (AC)", image: "/images/service1ac.webp" },
  { name: "Event Towers", image: "/images/service3hanger.webp" },
  { name: "Raised Platforms", image: "/images/service2platform.webp" },
  { name: "Staging Solutions", image: "/images/services4tagetruss .webp" },
];

const inventoryRow2 = [
  { name: "Premium Chairs", image: "" },
  { name: "corporate", image: "/images/service8event.webp" },
  { name: "Designer Canopies", image: "/images/service5canopy.webp" },
  { name: "Sea Side", image: "/images/service10seaside.webp" },
  { name: "Octonorm Stalls", image: "/images/services7octonorm.webp" },
  { name: "VIP Green Room", image: "/images/service12vipgreenroom.webp" },
  { name: "VIP Green Room", image: "/images/service6pagoda.webp" },
];


export default function ServicesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="bg-black text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* --- GLOBAL TEXTURE OVERLAY --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }}></div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Event Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-1 border border-[#D4AF37]/30 rounded-full bg-black/40 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold">
                World Class Infrastructure
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-6 text-white drop-shadow-2xl">
              Curating <span className="italic text-[#D4AF37]">Excellence</span> <br /> In Every Detail
            </h1>
            
            <p className="text-zinc-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              We provide the architectural backbone for India's most prestigious events. 
              From concept to execution, we build the extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES LIST ================= */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-sm border border-white/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className={`absolute -bottom-4 -right-4 w-full h-full border border-[#D4AF37]/30 -z-10 hidden md:block transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 ${index % 2 === 1 ? "-left-4" : ""}`}></div>
              </div>

              <div className="w-full lg:w-1/2">
                <span className="text-8xl font-serif text-white/5 font-bold absolute -translate-y-12 -translate-x-6 select-none">
                  {service.id}
                </span>
                <div className="relative">
                  <h3 className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-3 font-bold">
                    {service.subtitle}
                  </h3>
                  <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                    {service.title}
                  </h2>
                  <p className="text-zinc-400 text-lg leading-relaxed font-light mb-8 border-l border-zinc-800 pl-6">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-[#D4AF37] shrink-0" />
                        <span className="text-zinc-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={service.href}>
                    <button className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 hover:border-[#D4AF37] hover:bg-[#D4AF37] transition-all duration-300">
                      <span className="text-sm uppercase tracking-[0.2em] text-white group-hover:text-black font-bold">
                        Start Planning
                      </span>
                      <ArrowRight size={18} className="text-[#D4AF37] group-hover:text-black transition-colors" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= DUAL ROW INVENTORY SCROLL (UPDATED SIZE) ================= */}
      <section className="py-24 bg-zinc-950 border-y border-[#D4AF37]/20 overflow-hidden relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10 px-6">
          <h3 className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-bold mb-3">
            Complete Event Solutions
          </h3>
          <h2 className="text-3xl md:text-5xl font-serif text-white">
            Specialized Infrastructure & Inventory
          </h2>
        </div>

        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none"></div>

        {/* --- ROW 1: Moves Left --- */}
        <div className="relative w-full overflow-hidden mb-8">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 50, // Slower for larger images
            }}
          >
            {[...inventoryRow1, ...inventoryRow1, ...inventoryRow1].map((item, index) => (
              // 👇 UPDATED: Increased Width (450px) and Height (300px)
              <div key={index} className="relative w-[450px] h-[300px] shrink-0 rounded-md overflow-hidden group border border-white/5 hover:border-[#D4AF37] transition-all duration-500 shadow-2xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-white font-serif text-2xl leading-tight group-hover:text-[#D4AF37] transition-colors drop-shadow-md">
                    {item.name}
                  </h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- ROW 2: Moves Right --- */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 55, 
            }}
          >
            {[...inventoryRow2, ...inventoryRow2, ...inventoryRow2].map((item, index) => (
              // 👇 UPDATED: Increased Width (450px) and Height (300px)
              <div key={index} className="relative w-[450px] h-[300px] shrink-0 rounded-md overflow-hidden group border border-white/5 hover:border-[#D4AF37] transition-all duration-500 shadow-2xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-white font-serif text-2xl leading-tight group-hover:text-[#D4AF37] transition-colors drop-shadow-md">
                    {item.name}
                  </h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </section>

      {/* ================= THE ZOYA STANDARD ================= */}
      <section className="bg-zinc-900/50 py-24 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">The Zoya Standard</h2>
            <div className="h-[1px] w-24 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Uncompromising Quality",
                desc: "We don't cut corners. From the fabric of a marquee to the finish of a sales desk, we use premium materials."
              },
              {
                icon: Clock,
                title: "Precision Timelines",
                desc: "In the event world, time is currency. Our German Hangar systems deploy 2x faster than industry standards."
              },
              {
                icon: ShieldCheck,
                title: "Turnkey Accountability",
                desc: "Design, Fabrication, Logistics, and Staffing. We handle the entire chain so you focus on your guests."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-black/40 p-10 border border-white/5 hover:border-[#D4AF37]/50 transition-colors duration-500 text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} className="text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-serif text-white mb-4">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-32 px-6 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            alt="Team meeting"
            fill
            className="object-cover grayscale opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
            Ready to Build Something <br /><span className="text-[#D4AF37]">Extraordinary?</span>
          </h2>
          <p className="text-zinc-300 text-lg mb-12 max-w-2xl mx-auto font-light">
            Whether it's a 3-day exhibition or a 3-month sales office, let's discuss how we can elevate your infrastructure.
          </p>
          <Link href="/contact">
            <button className="px-12 py-5 bg-[#D4AF37] text-black text-sm uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              Get a Proposal
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}