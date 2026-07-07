"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// --- DYNAMIC GOLDEN PARTICLES (Fixed for Hydration Mismatch) ---
interface Particle {
  id: number;
  x: string;
  duration: number;
  delay: number;
}

// ✅ Pre-computed values — same on server AND client (no hydration crash)
const serviceParticles = [
  { id: 0,  x: "3.5vw",  duration: 28, delay: 0 },
  { id: 1,  x: "12vw",  duration: 22, delay: 3 },
  { id: 2,  x: "21vw",  duration: 35, delay: 7 },
  { id: 3,  x: "30vw",  duration: 25, delay: 1 },
  { id: 4,  x: "38vw",  duration: 30, delay: 5 },
  { id: 5,  x: "47vw",  duration: 20, delay: 9 },
  { id: 6,  x: "55vw",  duration: 32, delay: 2 },
  { id: 7,  x: "63vw",  duration: 24, delay: 6 },
  { id: 8,  x: "70vw",  duration: 27, delay: 4 },
  { id: 9,  x: "79vw",  duration: 21, delay: 8 },
  { id: 10, x: "86vw",  duration: 33, delay: 0.5 },
  { id: 11, x: "93vw",  duration: 26, delay: 3.5 },
  { id: 12, x: "8vw",   duration: 29, delay: 6.5 },
  { id: 13, x: "17vw",  duration: 23, delay: 2.5 },
  { id: 14, x: "26vw",  duration: 31, delay: 7.5 },
  { id: 15, x: "43vw",  duration: 34, delay: 1.5 },
  { id: 16, x: "59vw",  duration: 22, delay: 4.5 },
  { id: 17, x: "66vw",  duration: 28, delay: 8.5 },
  { id: 18, x: "74vw",  duration: 26, delay: 3.2 },
  { id: 19, x: "90vw",  duration: 30, delay: 6.2 },
];

const GoldenBackground = () => {
  const particles = serviceParticles;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "110vh", x: p.x, opacity: 0 }}
          animate={{ 
            y: "-10vh", 
            opacity: [0, 0.3, 0],
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            delay: p.delay,
            ease: "linear"
          }}
          className="absolute w-px h-px md:w-0.5 md:h-0.5 bg-[#D4AF37] rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

// --- Animated Counter Component ---
interface AnimatedNumberProps {
  value: number;
  suffix?: string;
}

const AnimatedNumber = ({ value, suffix = "" }: AnimatedNumberProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1500; 
      const increment = value / (duration / 16); 
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          clearInterval(timer);
          setDisplayValue(value);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

// --- Services Zig-Zag Data ---
const parallaxServices = [
  {
    id: "01",
    title: "Premium Outdoor Infrastructure",
    subtitle: "German Hangars • Corporate Galas • Large Scale Gatherings",
    description: "Expansive, weather-proof German hangars designed for flawless outdoor events. Built on vast landscapes, these structures provide the ultimate blank canvas for grand corporate events.",
    image: "/images/portfolio-4.jpg", 
    reverse: false,
  },
  {
    id: "02",
    title: "Rapid Deployment Pagodas",
    subtitle: "Aviation Events • VIP Enclosures • Security Zones",
    description: "High-grade VIP and support pagoda clusters suitable for high-security zones and summits. Quick to deploy and engineered to withstand extreme wind loads.",
    image: "/images/portfolio-3.jpg", 
    reverse: true,
  },
  {
    id: "03",
    title: "Luxury Glass Hangars",
    subtitle: "Auto Expos • Product Launches • Premium Showrooms",
    description: "Transform any open space into a high-end transparent showroom. Perfect for luxury brand launches and night-time exhibitions.",
    image: "/images/salesoffice_temporary.webp",
    reverse: false,
  },
  {
    id: "04",
    title: "Bespoke Sales Offices",
    subtitle: "Real Estate • Climate Controlled Interiors • Brand Lounges",
    description: "Fully customized, climate-controlled temporary structures built specifically for luxury real estate developers with premium interior finishes.",
    image: "/images/salesoffice3.webp",
    reverse: true,
  }
];

// --- TRUE PARALLAX ROW COMPONENT ---
interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reverse: boolean;
}

interface TrueParallaxRowProps {
  service: ServiceData;
}

const TrueParallaxRow = ({ service }: TrueParallaxRowProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={containerRef} className={`flex flex-col ${service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} w-full border-b border-[#D4AF37]/20 overflow-hidden bg-[#F5F1E8]`}>
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 py-16 md:p-16 lg:p-24 z-10 bg-linear-to-b from-[#FFFBF0] to-[#F5F1E8]">
        <motion.div style={{ y: yText }} className="max-w-xl">
          <span className="text-[#D4AF37] font-serif italic text-2xl md:text-3xl mb-4 block">{service.id}</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-4 text-[#0a0a0a]">
            {service.title}
          </h2>
          <h4 className="text-[#D4AF37] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-6 border-l-2 border-[#D4AF37] pl-3">
            {service.subtitle}
          </h4>
          <p className="text-[#3a3a3a] text-base md:text-lg leading-relaxed font-light">
            {service.description}
          </p>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-[70vh] overflow-hidden">
        <motion.div style={{ y: yImage }} className="absolute inset-x-0 -top-[15%] h-[130%] w-full">
          <Image 
            src={service.image} 
            alt={service.title} 
            fill 
            className="object-cover opacity-90"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        </motion.div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <div className="bg-[#F5F1E8] text-[#0a0a0a] min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <GoldenBackground />

      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden border-b border-[#D4AF37]/10 pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/portfolio-4.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark cinematic overlay — makes image visible and text legible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 text-center max-w-6xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-[#D4AF37] tracking-[0.3em] text-[9px] md:text-xs font-bold uppercase mb-4 block">
              Vendor Excellence • Zoya Event
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] mb-8 text-white">
              INFRASTRUCTURE <br/> 
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F9D423] to-[#B8860B] bg-clip-text text-transparent italic font-serif">
                FOR THE ELITE.
              </span>
            </h1>
            <Link href="/contact" className="inline-block px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all rounded-sm">
              Explore Our Capabilities
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 bg-[#F5F1E8]">
        {parallaxServices.map((service, idx) => (
          <TrueParallaxRow key={idx} service={service} />
        ))}
      </section>

    </div>
  );
}