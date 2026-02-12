"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Layout, 
  X, 
  MapPin, 
  Maximize2, 
  Calendar, 
  ArrowUpRight,
  Monitor,
  Box,
  Truck
} from "lucide-react";

export default function ExhibitionsPage() {
  type ProjectType = typeof projects[number];
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  // --- 1. DATA: SERVICES ---
  const services = [
    { title: "Custom Architecture", icon: Layout, desc: "Bespoke double-decker & raw space designs." },
    { title: "Smart Technology", icon: Monitor, desc: "Interactive touchwalls & LED mapping." },
    { title: "Modular Systems", icon: Box, desc: "Scalable German hangar & Octanorm solutions." },
    { title: "Pan-India Logistics", icon: Truck, desc: "Seamless transport to Jio World, NESCO, & Pragati Maidan." },
  ];

  // --- 2. DATA: PROJECTS (Enhanced for "Bento" Layout) ---
  const projects = [
    {
      id: 1,
      title: "Tech Expo 2024",
      category: "Interactive Hub",
      location: "Jio World Centre",
      size: "500 sq.ft",
      timeline: "3 Days",
      description: "A futuristic booth with 360° projection mapping.",
      longDesc: "Dominated the floor with a 20ft high suspended LED ring. The open-plan layout featured three interactive touch-tables and a silent conference zone, resulting in record engagement.",
      image: "/images/exhibition-tech.jpg",
      highlights: "800+ Leads",
      colSpan: "md:col-span-2", // Wide Card
    },
    {
      id: 2,
      title: "Auto Premiere",
      category: "Automotive",
      location: "NESCO Mumbai",
      size: "1,200 sq.ft",
      timeline: "5 Days",
      description: "Multi-level vehicle display with reinforced steel staging.",
      longDesc: "A masterclass in load-bearing design. We created a mezzanine VIP lounge overlooking the main vehicle reveal area, using industrial chic aesthetics with polished chrome finishes.",
      image: "/images/exhibition-auto.jpg",
      highlights: "Best Stall Award",
      colSpan: "md:col-span-1", // Standard Card
    },
    {
      id: 3,
      title: "Luxe Fashion",
      category: "Boutique",
      location: "St. Regis",
      size: "300 sq.ft",
      timeline: "24 Hours",
      description: "Minimalist luxury with gold-finished fixtures.",
      longDesc: "Designed to feel like a permanent high-street store. We utilized warm 3000K track lighting and velvet drape walls to create an exclusive, intimate buying environment.",
      image: "/images/exhibition-fashion.jpg",
      highlights: "VIP Traffic +40%",
      colSpan: "md:col-span-1", // Standard Card
    },
    {
      id: 4,
      title: "Pharma Conclave",
      category: "Corporate",
      location: "Bombay Exhibition Ctr",
      size: "800 sq.ft",
      timeline: "48 Hours",
      description: "Clean, clinical design with private meeting pods.",
      longDesc: "Focused on B2B networking, this stall featured 4 soundproof meeting pods and a central coffee bar. The branding was executed with backlit fabric lightboxes for a seamless look.",
      image: "/images/exhibition-pharma.jpg",
      highlights: "150 Meetings",
      colSpan: "md:col-span-2", // Wide Card
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans overflow-x-hidden">
      
      {/* --- STICKY NAV --- */}
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
        className="sticky top-0 z-60 bg-black/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group text-[#D4AF37]">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-[0.3em] font-bold text-xs">Home</span>
          </Link>
          <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 hidden md:block">
            Zoya Event • Exhibition Division
          </span>
        </div>
      </motion.nav>

      {/* --- CINEMATIC HERO (COMPACT) --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-20" />
        {/* Animated Background */}
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070" 
          alt="Exhibition Hall" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="relative z-30 text-center max-w-4xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 leading-none">
              The <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] to-[#F7E7CE] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">Showstopper.</span>
            </h1>
            <p className="text-zinc-400 text-lg uppercase tracking-[0.3em] font-light">
              Mumbai • Delhi • Bangalore • Dubai
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- COMPACT SERVICES STRIP --- */}
      <section className="border-y border-white/10 bg-zinc-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center p-2 group hover:bg-white/5 rounded transition-colors">
                <s.icon className="text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform" size={24} />
                <h3 className="text-xs font-bold uppercase tracking-widest mb-1">{s.title}</h3>
                <p className="text-[10px] text-zinc-500 leading-tight hidden md:block">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SELECTED WORKS (GALLERY STYLE) --- */}
      <section className="py-20 px-4 md:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12 px-2">
            <div>
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] mb-2 block">Portfolio</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
                Selected Works
              </h2>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-zinc-500 text-xs uppercase tracking-widest">
                Curated Exhibition Spaces
              </p>
            </div>
          </div>

          {/* BENTO GRID LAYOUT - Solves "Too Big" Issue */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`group relative overflow-hidden rounded-xl bg-zinc-900 cursor-pointer ${project.colSpan} aspect-video md:aspect-auto md:h-100`}
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                    onError={(e) => { (e.target as HTMLImageElement).src = `https://via.placeholder.com/800x600/111/333?text=${project.title}` }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-90" />
                </div>

                {/* Content Overlay (Always visible but enhanced on hover) */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end h-full">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="bg-[#D4AF37] text-black text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-2 leading-none">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-xs md:text-sm line-clamp-2 mb-4 max-w-md group-hover:text-white transition-colors">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      View Blueprint <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL (POPUP) --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-950 border border-white/10 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
            >
              {/* Image Side */}
              <div className="w-full md:w-5/12 h-64 md:h-auto relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = `https://via.placeholder.com/800x600/111/333?text=${selectedProject.title}` }}
                />
                <div className="absolute inset-0 bg-black/20" />
                {/* Close Button Mobile */}
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 bg-black/50 p-2 rounded-full md:hidden text-white backdrop-blur-md">
                  <X size={20} />
                </button>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-7/12 p-8 md:p-12 overflow-y-auto relative bg-zinc-950">
                <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 text-zinc-500 hover:text-white hidden md:block transition-colors">
                  <X size={24} />
                </button>

                <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
                  Project Detail
                </span>
                
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
                  {selectedProject.title}
                </h2>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 border-l-2 border-[#D4AF37] pl-4">
                  {selectedProject.longDesc}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">Scale</p>
                    <p className="text-white font-bold">{selectedProject.size}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">Venue</p>
                    <p className="text-white font-bold">{selectedProject.location}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                  <div>
                    <span className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Result</span>
                    <span className="text-[#D4AF37] font-bold italic text-lg">{selectedProject.highlights}</span>
                  </div>
                  <Link href="/contact" className="bg-white text-black px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-[#D4AF37] transition-colors rounded-sm">
                    Inquire Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CTA FOOTER --- */}
      <section className="py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-zinc-800">
          Make Your <br /> <span className="text-white">Mark.</span>
        </h2>
        <Link href="/contact" className="inline-flex items-center gap-2 text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold border-b border-[#D4AF37] pb-1 hover:text-white hover:border-white transition-all">
          Start Project <ArrowUpRight size={14} />
        </Link>
      </section>

    </main>
  );
}