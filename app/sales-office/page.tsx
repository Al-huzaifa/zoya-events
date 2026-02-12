"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Zap, 
  ArrowUpRight, 
  MapPin, 
  Maximize2,
  Timer,
  History,
  X,
  Hammer,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

export default function SalesOfficePage() {
  // --- DATA ---
  const autoProjects = [
    { 
      id: 1, 
      title: "Pinnacle BKC Hub", 
      desc: "Flagship corporate sales environment in Mumbai's financial heart. Designed for high-volume investor engagement with premium acoustic privacy.",
      category: "Permanent Hub", 
      src: "/images/salesoffice1.webp",
      specs: { area: "12,000 sqft", timeline: "4 Months", location: "Mumbai, BKC" }
    },
    { 
      id: 2, 
      title: "48HR Rapid Hangar", 
      desc: "Specialized 2-3 month temporary sales office deployment. Features rapid-deploy HVAC and modular glass partitions.",
      category: "German Hangar", 
      src: "/images/salesoffice2.webp",
      specs: { area: "5,000 sqft", timeline: "48 Hours", location: "Pune" }
    },
    { 
      id: 3, 
      title: "Luxury Interior", 
      desc: "Exhibition-grade finishes with Italian marble and gold accents. Bespoke lighting arrays designed to enhance architectural models.",
      category: "Fit-out", 
      src: "/images/salesoffice3.webp",
      specs: { area: "3,500 sqft", timeline: "45 Days", location: "Thane" }
    },
    { 
      id: 4, 
      title: "Executive Lounge", 
      desc: "Premium client reception area with state-of-the-art presentation facilities and hidden automation systems.",
      category: "Premium Space", 
      src: "/images/salesoffice4.webp",
      specs: { area: "2,200 sqft", timeline: "30 Days", location: "Mumbai" }
    },
    { 
        id: 5, 
        title: "Retail Showcase", 
        desc: "Dynamic display environment engineered for maximum product visibility.",
        category: "Retail Hub", 
        src: "/images/salesoffice5.webp",
        specs: { area: "4,000 sqft", timeline: "60 Days", location: "Navi Mumbai" }
    },
    { 
        id: 6, 
        title: "Conference Command", 
        desc: "Multi-functional meeting spaces with cutting-edge AV integration.",
        category: "Meeting Hub", 
        src: "/images/salesoffice6.webp",
        specs: { area: "1,500 sqft", timeline: "20 Days", location: "Nagpur" }
    },
    { 
        id: 7, 
        title: "Glass Cathedral", 
        desc: "Floor-to-ceiling transparency with architectural precision.",
        category: "Modern Design", 
        src: "/images/salesoffice7.webp",
        specs: { area: "8,000 sqft", timeline: "90 Days", location: "Nashik" }
    },
    { 
        id: 8, 
        title: "Night Transformation", 
        desc: "Ambient lighting design for evening corporate engagement.",
        category: "Events Ready", 
        src: "/images/salesoffice8.webp",
        specs: { area: "Various", timeline: "Instant", location: "Maharashtra" }
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  type ProjectType = typeof autoProjects[number];
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % autoProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoProjects.length]);

  return (
    <main className="bg-black text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans overflow-x-hidden">
      
      {/* --- SECTION 1: AUTO-CHANGING CINEMATIC HERO --- */}
      <section className="relative h-screen w-full bg-black overflow-hidden border-b border-[#D4AF37]/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/60 to-black z-10" />
            <img 
              src={autoProjects[activeIndex].src} 
              alt={autoProjects[activeIndex].title}
              className="w-full h-full object-cover grayscale opacity-60"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <motion.div
            key={`content-${activeIndex}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#D4AF37] tracking-[0.5em] text-[10px] md:text-xs uppercase font-black">
                {autoProjects[activeIndex].category}
              </span>
              <div className="h-px w-12 bg-[#D4AF37]/40" />
            </div>
            <h1 className="text-5xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
              {autoProjects[activeIndex].title.split(' ')[0]} <br />
              <span className="text-[#D4AF37] italic font-light">{autoProjects[activeIndex].title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-2xl font-light mb-12 leading-relaxed max-w-xl">
              {autoProjects[activeIndex].desc}
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-6 px-12 py-6 bg-[#D4AF37] text-black font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all duration-700"
            >
              Start Technical Quote <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
          {autoProjects.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 transition-all duration-700 ${i === activeIndex ? 'w-24 bg-[#D4AF37]' : 'w-8 bg-zinc-800'}`} 
            />
          ))}
        </div>
      </section>

      {/* --- SECTION 2: THE MAHARASHTRA MANIFESTO --- */}
      <section className="py-24 md:py-40 px-6 bg-white text-black relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#D4AF37] text-[10px] md:text-xs uppercase tracking-[0.8em] mb-8 md:mb-16 font-black text-center md:text-left underline decoration-[#D4AF37]/20 underline-offset-8">Regional Command</h2>
          <p className="text-4xl md:text-8xl font-light leading-tight tracking-tighter mb-16 md:mb-24 uppercase text-center md:text-left">
            13+ Years of <span className="font-black italic">Expertise</span> <br /> in the Heart of <br /> <span className="text-[#D4AF37] font-black">Maharashtra.</span>
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-6 md:space-y-8">
              <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter flex items-center gap-4 text-black">
                <MapPin className="text-[#D4AF37]" /> BKC Command Center.
              </h4>
              <p className="text-lg md:text-xl text-zinc-600 font-light leading-relaxed">
                Operating from <strong>Pinnacle Corporate Park, BKC</strong>, ZOYA EVENT leverages 13+ years of industry leadership to bridge the gap between architectural concept and commercial success.
              </p>
            </div>
            <div className="space-y-6 md:space-y-8">
              <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter flex items-center gap-4 text-black">
                <Timer className="text-[#D4AF37]" /> Turnkey Specialization.
              </h4>
              <p className="text-lg md:text-xl text-zinc-600 font-light leading-relaxed">
                Nationally recognized for our specialized leadership in event organizing, we deploy turnkey temporary sales offices using German Hangar structures with a surgical 48-hour response time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION 3: PERMANENT SALES OFFICE --- */}
      <section className="py-24 md:py-32 px-6 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group overflow-hidden border border-zinc-800 bg-black">
            <img 
              src="/images/salesoffice_permanent.webp" 
              alt="Permanent Sales Office Luxury Interior" 
              className="w-full h-[600px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute bottom-8 left-8">
               <span className="px-4 py-2 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-widest">
                 Long-Term Asset
               </span>
            </div>
          </div>
          
          <div className="space-y-10">
            <div>
              <h2 className="text-[#D4AF37] text-[10px] md:text-xs uppercase tracking-[0.6em] mb-6 font-bold flex items-center gap-3">
                <ShieldCheck size={16} /> Architectural Permanence
              </h2>
              <h3 className="text-4xl md:text-6xl font-black uppercase leading-none mb-6">
                Permanent <br /> <span className="text-zinc-500">Sales Hubs.</span>
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                For developers requiring a sustained market presence (12+ months), we engineer <strong>Permanent Sales Offices</strong> that rival 5-star hotel lobbies. We combine heavy structural integrity with high-end interior finishes—Italian marble flooring, acoustic glass partitions, and automated climate control—creating an environment of absolute trust and luxury for your investors.
              </p>
            </div>

            <ul className="space-y-6 border-l border-zinc-800 pl-8">
              <li className="space-y-2">
                <h4 className="text-white font-bold uppercase tracking-wider text-sm">Heavy Civil Integration</h4>
                <p className="text-zinc-500 text-sm">Seamless connection to main construction sites with reinforced foundations.</p>
              </li>
              <li className="space-y-2">
                <h4 className="text-white font-bold uppercase tracking-wider text-sm">Acoustic Privacy</h4>
                <p className="text-zinc-500 text-sm">Sound-proof closing cabins designed for high-value negotiations.</p>
              </li>
              <li className="space-y-2">
                <h4 className="text-white font-bold uppercase tracking-wider text-sm">Brand Immersion</h4>
                <p className="text-zinc-500 text-sm">Integrated digital walls and architectural model lighting systems.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION 4: TEMPORARY GERMAN HANGAR --- */}
      <section className="py-24 md:py-32 px-6 bg-black border-y border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="lg:order-2 relative group overflow-hidden border border-zinc-800 bg-zinc-900">
            <img 
              src="/images/salesoffice_temporary.webp" 
              alt="German Hangar Temporary Office" 
              className="w-full h-[600px] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute bottom-8 right-8 text-right">
               <span className="px-4 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest">
                 Rapid Deployment
               </span>
            </div>
          </div>

          <div className="lg:order-1 space-y-10">
            <div>
              <h2 className="text-white text-[10px] md:text-xs uppercase tracking-[0.6em] mb-6 font-bold flex items-center gap-3">
                <Hammer size={16} className="text-[#D4AF37]" /> Tactical Speed
              </h2>
              <h3 className="text-4xl md:text-6xl font-black uppercase leading-none mb-6">
                Temporary <br /> <span className="text-[#D4AF37]">German Hangars.</span>
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                When speed is the strategy. Our <strong>Temporary Sales Offices</strong> utilize advanced German Hangar technology to go from bare ground to a fully air-conditioned, operational sales gallery in just <strong>48 to 72 hours</strong>. Ideal for pre-launches (2-3 month cycles), these structures offer the look and feel of a permanent building without the time cost.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 border border-zinc-800 bg-zinc-900/50 hover:border-[#D4AF37]/50 transition-colors">
                <h4 className="text-2xl font-black text-[#D4AF37] mb-2">48H</h4>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">Setup Time</p>
              </div>
              <div className="p-6 border border-zinc-800 bg-zinc-900/50 hover:border-[#D4AF37]/50 transition-colors">
                <h4 className="text-2xl font-black text-white mb-2">100%</h4>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">Weather Proof</p>
              </div>
              <div className="p-6 border border-zinc-800 bg-zinc-900/50 hover:border-[#D4AF37]/50 transition-colors">
                <h4 className="text-2xl font-black text-white mb-2">MODULAR</h4>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">Scalable Design</p>
              </div>
              <div className="p-6 border border-zinc-800 bg-zinc-900/50 hover:border-[#D4AF37]/50 transition-colors">
                <h4 className="text-2xl font-black text-[#D4AF37] mb-2">HVAC</h4>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">Climate Ready</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 5: MASONRY ARCHIVE (EXISTING) --- */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8">
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-center md:text-left">
              The <span className="text-[#D4AF37] not-italic">Archive.</span>
            </h3>
            <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-[0.5em] text-center md:text-right border-r-2 border-[#D4AF37] pr-6">
              Maharashtra Execution Force
            </p>
          </div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {autoProjects.map((proj) => (
              <motion.div 
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(proj)}
                className="relative group overflow-hidden border border-zinc-900 bg-zinc-950 break-inside-avoid cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/20 transition-all duration-700" />
                <img 
                  src={proj.src} 
                  className="w-full h-auto grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition duration-1000" 
                  alt={proj.title} 
                />
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-linear-to-t from-black via-black/90 to-transparent translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-2 block">{proj.category}</span>
                  <h4 className="text-2xl font-black uppercase flex items-center justify-between">
                    {proj.title} <ArrowUpRight className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- POPUP / MODAL COMPONENT (EXISTING) --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-950 border border-[#D4AF37]/30 w-full max-w-6xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 p-2 bg-white text-black hover:bg-[#D4AF37] transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={selectedProject.src} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.4em] mb-4">
                  Project Brief / {selectedProject.category}
                </span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                  {selectedProject.title}
                </h2>
                <p className="text-zinc-400 text-lg font-light leading-relaxed mb-12">
                  {selectedProject.desc}
                </p>

                <div className="grid grid-cols-2 gap-8 border-t border-zinc-800 pt-8">
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">Scale</p>
                    <p className="text-xl font-bold uppercase">{selectedProject.specs.area}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">Delivery</p>
                    <p className="text-xl font-bold uppercase">{selectedProject.specs.timeline}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">Location</p>
                    <p className="text-xl font-bold uppercase">{selectedProject.specs.location}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">Status</p>
                    <p className="text-[#D4AF37] text-xl font-bold uppercase italic">Completed</p>
                  </div>
                </div>

                <Link 
                    href="/contact"
                    className="mt-12 inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#D4AF37] text-black font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all duration-500"
                >
                    Request Similar Build <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SECTION 6: THE TECHNICAL DATA --- */}
      <section className="py-24 md:py-32 px-6 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <History className="mx-auto text-[#D4AF37] mb-12" size={48} />
          <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
            Engineered <br /> for <span className="text-[#D4AF37] italic font-light">Success.</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <p className="text-4xl md:text-6xl font-black text-white">13+</p>
              <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest font-bold mt-2 italic">Yrs Expertise</p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl font-black text-white">48H</p>
              <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest font-bold mt-2 italic">Rapid Setup</p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl font-black text-white">200+</p>
              <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest font-bold mt-2 italic">national Brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: EXTRAORDINARY CTA --- */}
      <section className="py-32 md:py-48 px-6 text-center bg-black relative">
        <h2 className="text-6xl md:text-[18rem] font-black uppercase leading-none mb-12 opacity-5 pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">EXTRAORDINARY.</h2>
        <div className="relative z-10">
          <h3 className="text-4xl md:text-8xl font-black mb-16 uppercase tracking-tighter leading-none">
            Ready to Build <br /> <span className="text-[#D4AF37] italic font-light underline decoration-[#D4AF37]/30 decoration-1 underline-offset-8">The Hub?</span>
          </h3>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-8 px-12 py-8 bg-[#D4AF37] text-black font-black uppercase tracking-[0.5em] text-[10px] md:text-xs hover:bg-white transition-all duration-700 shadow-[0_0_50px_rgba(212,175,55,0.3)]"
          >
            Start Technical Quote <ArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
}