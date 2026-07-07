"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  MapPin, 
  Timer,
  X,
  Hammer,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

// ✅ Pre-computed — eliminates hydration crash from Math.random
const salesParticles = [
  { id: 0,  initialX: "4vw",   endX: "8vw",   scale: 0.8,  duration: 28, delay: 0   },
  { id: 1,  initialX: "10vw",  endX: "14vw",  scale: 0.6,  duration: 22, delay: 1.5 },
  { id: 2,  initialX: "18vw",  endX: "22vw",  scale: 0.9,  duration: 35, delay: 3   },
  { id: 3,  initialX: "26vw",  endX: "30vw",  scale: 0.7,  duration: 25, delay: 0.5 },
  { id: 4,  initialX: "34vw",  endX: "38vw",  scale: 1.0,  duration: 30, delay: 2   },
  { id: 5,  initialX: "42vw",  endX: "46vw",  scale: 0.5,  duration: 20, delay: 4   },
  { id: 6,  initialX: "50vw",  endX: "54vw",  scale: 0.8,  duration: 32, delay: 1   },
  { id: 7,  initialX: "58vw",  endX: "62vw",  scale: 0.6,  duration: 24, delay: 3.5 },
  { id: 8,  initialX: "66vw",  endX: "70vw",  scale: 0.9,  duration: 27, delay: 2.5 },
  { id: 9,  initialX: "74vw",  endX: "78vw",  scale: 0.7,  duration: 21, delay: 0.8 },
  { id: 10, initialX: "82vw",  endX: "86vw",  scale: 1.0,  duration: 33, delay: 4.5 },
  { id: 11, initialX: "90vw",  endX: "94vw",  scale: 0.5,  duration: 26, delay: 1.8 },
  { id: 12, initialX: "6vw",   endX: "2vw",   scale: 0.8,  duration: 29, delay: 3.2 },
  { id: 13, initialX: "14vw",  endX: "10vw",  scale: 0.6,  duration: 23, delay: 2.2 },
  { id: 14, initialX: "22vw",  endX: "18vw",  scale: 0.9,  duration: 31, delay: 4.8 },
  { id: 15, initialX: "38vw",  endX: "34vw",  scale: 0.7,  duration: 19, delay: 0.3 },
  { id: 16, initialX: "54vw",  endX: "50vw",  scale: 1.0,  duration: 28, delay: 3.8 },
  { id: 17, initialX: "62vw",  endX: "58vw",  scale: 0.6,  duration: 22, delay: 2.8 },
  { id: 18, initialX: "70vw",  endX: "66vw",  scale: 0.8,  duration: 26, delay: 1.2 },
  { id: 19, initialX: "86vw",  endX: "82vw",  scale: 0.5,  duration: 30, delay: 4.2 },
  { id: 20, initialX: "12vw",  endX: "16vw",  scale: 0.7,  duration: 24, delay: 5   },
  { id: 21, initialX: "28vw",  endX: "32vw",  scale: 0.9,  duration: 20, delay: 6   },
  { id: 22, initialX: "46vw",  endX: "42vw",  scale: 0.6,  duration: 35, delay: 7   },
  { id: 23, initialX: "64vw",  endX: "68vw",  scale: 0.8,  duration: 28, delay: 8   },
  { id: 24, initialX: "80vw",  endX: "76vw",  scale: 1.0,  duration: 22, delay: 9   },
  { id: 25, initialX: "92vw",  endX: "88vw",  scale: 0.5,  duration: 30, delay: 2   },
  { id: 26, initialX: "2vw",   endX: "6vw",   scale: 0.7,  duration: 25, delay: 3   },
  { id: 27, initialX: "20vw",  endX: "24vw",  scale: 0.9,  duration: 18, delay: 4   },
  { id: 28, initialX: "48vw",  endX: "52vw",  scale: 0.6,  duration: 31, delay: 5.5 },
  { id: 29, initialX: "76vw",  endX: "72vw",  scale: 0.8,  duration: 27, delay: 6.5 },
];

const GoldenBackground = () => {
  const particles = salesParticles;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ 
            y: "110vh", 
            x: particle.initialX,
            opacity: 0,
            scale: particle.scale
          }}
          animate={{ 
            y: "-10vh", 
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.2, 0.5],
            x: [particle.initialX, particle.endX]
          }}
          transition={{ 
            duration: particle.duration, 
            repeat: Infinity, 
            delay: particle.delay,
            ease: "easeInOut"
          }}
          className="absolute w-[2px] h-[2px] bg-gradient-to-t from-[#D4AF37] to-[#F9D423] rounded-full blur-[1px]"
          style={{ boxShadow: "0 0 8px 2px rgba(212, 175, 55, 0.4)" }}
        />
      ))}
    </div>
  );
};

export default function SalesOfficePage() {
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[number]>(null);
  const [galleryIdx, setGalleryIdx] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedProject]);

  // --- UPDATED PROJECT DATA USING YOUR NEW FOLDER STRUCTURE ---
  const projects = [
    { 
      id: 1, 
      title: "VIYAARA SALES OFFICE", 
      desc: "Our flagship corporate environment in Mumbai's financial heart. Features automated lighting, heavy civil foundations, and ultra-luxury finishes.",
      category: "Permanent Hub", 
      mainSrc: "/images/salesoffice/salesoffice-1.webp",
      gallery: [
        "/images/salesoffice/salesoffice-1.1.webp", 
        "/images/salesoffice/salesoffice-1.2.webp", 
        "/images/salesoffice/salesoffice-1.3.webp"
      ],
      specs: { area: "12,000 sqft", timeline: "1 Months", location: " Mumbai" }
    },
    { 
      id: 2, 
      title: "KANAKIA BEVERLY HEIGHTS", 
      desc: "A rapid-deployment German Hangar setup. Operational in under 48 hours for immediate sales engagement and high-impact launches.",
      category: "German Hangar", 
      mainSrc: "/images/salesoffice/salesoffice-2.webp",
      gallery: [
        "/images/salesoffice/salesoffice-2.1.webp", 
        "/images/salesoffice/salesoffice-2.2.webp", 
        "/images/salesoffice/salesoffice-2.3.webp"
      ],
      specs: { area: "10,000 sqft", timeline: "2 Weeks", location: "Mumbai" }
    },
    { 
      id: 3, 
      title: "AURUM SALES LOUNGE", 
      desc: "A sprawling hybrid sales office that blends temporary installation speed with permanent architectural luxury and premium automation.",
      category: "Hybrid Gallery", 
      mainSrc: "/images/salesoffice/salesoffice-3.webp",
      gallery: [
        "/images/salesoffice/salesoffice-3.1.webp", 
        "/images/salesoffice/salesoffice-3.2.webp", 
        "/images/salesoffice/salesoffice-3.3.webp"
      ],
      specs: { area: "15,000 sqft", timeline: "2 Weeks", location: "Thane, MH" }
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#F5F1E8] text-[#0a0a0a] font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <GoldenBackground />
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center text-center px-4 md:px-6 pt-16 md:pt-0 border-b border-[#D4AF37]/20">
        <div className="absolute inset-0 z-0">
          <img src="/images/salesoffice/salesoffice-1.webp" alt="Luxury Background" className="w-full h-full object-cover" />
          {/* Dark overlay — make the image vivid */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />
        </div>
        
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="relative z-20 max-w-5xl w-full">
          <span className="text-[#D4AF37] tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-xs font-bold uppercase mb-4 md:mb-6 block">
            Zoya Event • Premium Infrastructure
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-black uppercase leading-[0.9] mb-6 md:mb-8 tracking-tighter text-white">
            THE ART OF <br/> 
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F9D423] to-[#B8860B] bg-clip-text text-transparent italic font-serif pr-2">DOMINATION.</span>
          </h1>
          <p className="text-white/70 text-sm md:text-xl font-light max-w-2xl mx-auto mb-8 md:mb-12 px-2">
            Building high-end sales galleries and exhibitions that reflect your brand&apos;s true power.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 md:px-12 md:py-5 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition-all rounded-sm backdrop-blur-sm">
            Get A Quote
          </Link>
        </motion.div>
      </section>

      {/* ================= SECTION 2: REGIONAL COMMAND ================= */}
      <section className="py-24 md:py-32 bg-[#FFFBF0] relative border-b border-[#D4AF37]/20">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col xl:flex-row gap-16 xl:gap-24 items-center">
          
          <motion.div 
            className="w-full xl:w-1/2 flex flex-col"
            whileInView={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: 30 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light uppercase leading-[1.1] tracking-tight mb-8 md:mb-12 max-w-3xl text-[#0a0a0a]">
              13+ Years of <span className="text-[#D4AF37] font-bold">Power</span> in Maharashtra.
            </h2>
            
            <div className="flex flex-wrap gap-12 md:gap-20 border-t border-[#D4AF37]/20 pt-10">
              <div>
                <h4 className="text-5xl md:text-6xl font-light text-[#0a0a0a] mb-2">20+</h4>
                <p className="text-[#D4AF37] text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Projects Executed</p>
              </div>
              <div>
                <h4 className="text-5xl md:text-6xl font-light text-[#0a0a0a] mb-2">6-10 DAYS</h4>
                <p className="text-[#D4AF37] text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Rapid Deployment</p>
              </div>
            </div>
          </motion.div>
          
          <div className="w-full xl:w-1/2 flex flex-col sm:flex-row gap-6 relative">
            <div className="flex-1 p-8 md:p-10 bg-white/70 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all rounded-sm flex flex-col justify-center group z-10 shadow-xl">
              <MapPin className="text-[#D4AF37] mb-6 w-10 h-10 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl md:text-2xl font-light mb-4 uppercase tracking-wide text-[#0a0a0a]">BKC HQ</h3>
              <p className="text-[#3a3a3a] text-sm md:text-base leading-relaxed font-light">
                Strategically based in Pinnacle Corporate Park, managing operations seamlessly across Mumbai & Pune.
              </p>
            </div>
            
            <div className="flex-1 p-8 md:p-10 bg-white/70 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all rounded-sm flex flex-col justify-center sm:mt-12 group z-10 shadow-xl">
              <Timer className="text-[#D4AF37] mb-6 w-10 h-10 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl md:text-2xl font-light mb-4 uppercase tracking-wide text-[#0a0a0a]">Rapid Response</h3>
              <p className="text-[#3a3a3a] text-sm md:text-base leading-relaxed font-light">
                From bare ground to a fully operational sales office in 48 hours using modular German Hangar technology.
              </p>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#D4AF37]/5 blur-[100px] z-0 pointer-events-none rounded-full" />
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: SOLUTIONS (EDGE-TO-EDGE ZIGZAG) ================= */}
      <section className="flex flex-col w-full bg-[#F5F1E8]">
        
        {/* BLOCK 1: Permanent Hub (Text Left, Image Right) */}
        <div className="flex flex-col md:flex-row w-full min-h-[60vh] md:min-h-[70vh]">
          <div className="w-full md:w-1/2 bg-[#FFFBF0] flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 xl:px-32 order-2 md:order-1">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <ShieldCheck className="text-[#D4AF37] mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12" />
              <h3 className="text-3xl md:text-[40px] lg:text-[45px] font-light text-[#0a0a0a] mb-6 leading-tight">
                Architectural <br />
                <span className="text-[#D4AF37]">Permanence.</span>
              </h3>
              <p className="text-zinc-600 font-light text-[15px] md:text-[17px] leading-8 mb-8">
                For 12+ month durations. We build heavy-duty sales galleries with Italian marble and high-end automation that rival 5-star hotels.
              </p>
              <div className="space-y-4 text-[11px] md:text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                <p className="flex items-center gap-4"><span className="h-[1px] w-6 bg-[#D4AF37]" /> Heavy Civil Foundation</p>
                <p className="flex items-center gap-4"><span className="h-[1px] w-6 bg-[#D4AF37]" /> Soundproof Closing Cabins</p>
                <p className="flex items-center gap-4"><span className="h-[1px] w-6 bg-[#D4AF37]" /> Brand Immersion Walls</p>
              </div>
            </motion.div>
          </div>
          {/* Uncut Image using object-contain on a black background */}
          <div className="w-full md:w-1/2 bg-[#F5F1E8] flex items-center justify-center min-h-[350px] md:min-h-[70vh] order-1 md:order-2">
            <img src="/images/salesoffice/salesofficepermanent.webp" alt="Permanent Hub" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* BLOCK 2: Tactical Speed (Image Left, Text Right) */}
        <div className="flex flex-col md:flex-row w-full min-h-[60vh] md:min-h-[70vh]">
          {/* Uncut Image using object-contain on a black background */}
          <div className="w-full md:w-1/2 bg-[#F5F1E8] flex items-center justify-center min-h-[350px] md:min-h-[70vh]">
            <img src="/images/salesoffice/salesofficetemporary.webp" alt="Temporary Hangar" className="w-full h-full object-contain" />
          </div>
          <div className="w-full md:w-1/2 bg-[#FFFBF0] flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 xl:px-32">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <Hammer className="text-[#D4AF37] mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12" />
              <h3 className="text-3xl md:text-[40px] lg:text-[45px] font-light text-[#0a0a0a] mb-6 leading-tight">
                Tactical <br />
                <span className="text-[#D4AF37]">Speed.</span>
              </h3>
              <p className="text-zinc-600 font-light text-[15px] md:text-[17px] leading-8 mb-8">
                German Hangar Technology for 2-6 month launches. Goes from zero to operational in 48-72 hours. Weather-proof and fully branded.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-6 py-3 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest rounded-sm">48H Setup</span>
                <span className="px-6 py-3 border border-[#D4AF37] text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest rounded-sm">Modular</span>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* ================= SECTION 4: THE ARCHIVE ================= */}
      <section className="py-24 lg:py-32 bg-[#FFFBF0] border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 md:px-8 max-w-[1800px]">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-semibold mb-4">Our Archive</h2>
            <h3 className="text-4xl md:text-6xl lg:text-[80px] font-serif font-light text-[#0a0a0a]">
              PROJECT <span className="text-[#D4AF37] font-bold">VAULT.</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {projects.map((proj) => (
              <motion.div 
                key={proj.id} 
                whileHover={{ y: -10 }} 
                onClick={() => {
                  setSelectedProject(proj);
                  setGalleryIdx(0);
                }} 
                className="relative aspect-[4/5] cursor-pointer group bg-[#F5F1E8] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-sm overflow-hidden shadow-2xl"
              >
                <img 
                  src={proj.mainSrc} 
                  alt={proj.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                  <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-3 block">
                    {proj.category}
                  </span>
                  <h4 className="text-3xl font-serif font-light text-white mb-6 leading-tight">
                    {proj.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs font-bold uppercase text-white tracking-widest opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Gallery <ArrowUpRight size={16} className="text-[#D4AF37]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL (ULTRA-PRO RESPONSIVE) ================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[10000] bg-[#F5F1E8]/95 flex flex-col lg:flex-row backdrop-blur-2xl overflow-y-auto lg:overflow-hidden"
          >
            
            <button 
              onClick={() => setSelectedProject(null)} 
              className="fixed top-4 right-4 md:top-8 md:right-8 z-[10001] p-3 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition-all shadow-2xl bg-black/50 backdrop-blur-md"
              aria-label="Close Modal"
            >
              <X size={24} className="md:w-6 md:h-6" />
            </button>

            <div className="w-full lg:w-2/3 h-[50vh] lg:h-screen relative bg-[#F5F1E8] shrink-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={galleryIdx} 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0 }} 
                  transition={{ duration: 0.4 }} 
                  className="relative w-full h-full"
                >
                  {/* Using object-contain in the modal so no part of the image is cut off while viewing */}
                  <img src={selectedProject.gallery[galleryIdx]} alt="Gallery" className="w-full h-full object-contain p-4 lg:p-12" />
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:bottom-10 lg:left-10 lg:translate-x-0 flex gap-4 md:gap-6 z-10">
                <button 
                  onClick={(e) => { e.stopPropagation(); setGalleryIdx(prev => prev === 0 ? selectedProject.gallery.length - 1 : prev - 1); }} 
                  className="p-3 md:p-4 border border-white/20 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all bg-black/80 backdrop-blur rounded-full text-white"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setGalleryIdx(prev => (prev + 1) % selectedProject.gallery.length); }} 
                  className="p-3 md:p-4 border border-white/20 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all bg-black/80 backdrop-blur rounded-full text-white"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/3 min-h-[50vh] lg:h-screen p-8 md:p-16 lg:p-24 bg-[#FFFBF0] border-t lg:border-t-0 lg:border-l border-[#D4AF37]/20 lg:overflow-y-auto flex flex-col justify-center lg:justify-start">
              <span className="text-[#D4AF37] font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 block">
                {selectedProject.category}
              </span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#0a0a0a] mb-6 md:mb-8 leading-tight">
                {selectedProject.title}
              </h3>
              <p className="text-[#3a3a3a] text-sm md:text-lg font-light leading-relaxed mb-10 md:mb-16">
                {selectedProject.desc}
              </p>
              
              <div className="space-y-6 md:space-y-8 border-t border-[#D4AF37]/20 pt-10 md:pt-12">
                {Object.entries(selectedProject.specs).map(([k, v]) => (
                  <div key={k} className="flex flex-col">
                    <span className="text-[#D4AF37] text-[10px] md:text-xs uppercase font-bold tracking-widest block mb-1">{k}</span>
                    <span className="text-lg md:text-xl font-light text-white">{String(v)}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/contact" className="mt-16 md:mt-20 block w-full py-5 md:py-6 border border-[#D4AF37] text-[#D4AF37] font-bold text-center uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-[#D4AF37] hover:text-black transition-all rounded-sm">
                Start Project Inquiry
              </Link>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}