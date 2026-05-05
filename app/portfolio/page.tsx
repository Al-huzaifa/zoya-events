"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers, ArrowLeft, MapPin, Calendar } from "lucide-react";

interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  overview: string;
  services: string[];
  images: string[];
  videos: string[];
}

const portfolioParticles = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  x: `${Math.random() * 100}vw`,
  duration: Math.random() * 15 + 15,
  delay: Math.random() * 5,
}));

const GoldenParticles = () => {
  const particles = portfolioParticles;
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ y: "110vh", x: particle.x, opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
          className="absolute w-1 h-1 bg-[#D4AF37] rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

// ============================================================================
//  LOAD PORTFOLIO FROM CONFIG FILE (EASY FOR CLIENTS TO UPDATE!)
// ============================================================================
import portfolioConfig from "@/data/portfolioConfig.json";

const portfolioProjects: PortfolioProject[] = portfolioConfig.projects.map((project) => ({
  id: project.id,
  title: project.title,
  category: project.category,
  location: project.location,
  year: project.year,
  overview: project.overview,
  services: project.services,
  images: project.images.map((img) => `/images/portfolio/${img}`),
  videos: project.videos.map((vid) => `/images/portfolio/${vid}`),
}));

// ============================================================================
//  MAIN COMPONENT
// ============================================================================

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Combine images and videos into a single gallery
  const getMediaItems = () => {
    if (!selectedProject) return [];
    const combined: Array<{ type: 'image' | 'video'; src: string; index: number }> = [];
    selectedProject.images.forEach((img) => {
      combined.push({ type: 'image', src: img, index: combined.length });
    });
    selectedProject.videos?.forEach((vid) => {
      combined.push({ type: 'video', src: vid, index: combined.length });
    });
    return combined;
  };
  
  const mediaItems = getMediaItems();

  // --- Scroll Logic for Desktop Parallax ---
  const galleryRef = useRef(null);
  const detailScrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]); 
  const y2 = useTransform(scrollYProgress, [0, 1], [-400, 0]); 
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]); 

  // --- Pseudo-Page Lock Logic ---
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedProject]);

  const openModal = (project: PortfolioProject) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    if (detailScrollRef.current) {
        detailScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const closeModal = () => setSelectedProject(null);

  const remainingProjects = selectedProject 
    ? portfolioProjects.filter(p => p.id !== selectedProject.id) 
    : [];

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* ================= GLOBAL AMBIENCE ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-radial-gold" />
          <GoldenParticles />
      </div>

      <div className="relative z-10">

        {/* ================= 1. HERO SECTION ================= */}
        <section className="relative w-full h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/portfolio/portfolio-25.webp"
                    alt="Production Background" 
                    fill 
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/70 z-10" />
                <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent z-10" />
            </div>

            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-[#D4AF37]/40 bg-black/50 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></div>
                        <span className="text-[#D4AF37] text-[10px] md:text-xs font-black uppercase tracking-[0.25em]">
                            Direct Production Powerhouse
                        </span>
                    </div>
                    
                    <h1 className="text-5xl md:text-9xl font-serif text-white mb-8 drop-shadow-2xl leading-[0.9]">
                        We Don&apos;t Just Plan.<br />
                        We <span className="italic text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] via-[#F3E779] to-[#B38728]">Build.</span>
                    </h1>
                    
                    <p className="text-zinc-300 text-sm md:text-xl font-light max-w-3xl mx-auto leading-relaxed mb-12">
                        The silent backbone behind India&apos;s grandest events. From massive <strong>German Hangars</strong> to intricate <strong>Custom Fabrication</strong>, we own the inventory, control the quality, and deliver the infrastructure that powers the industry.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-white/10">
                        <div>
                            <span className="block text-2xl md:text-5xl font-serif text-white">100%</span>
                            <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">In-House Inventory</span>
                        </div>
                        <div>
                            <span className="block text-2xl md:text-5xl font-serif text-white">32</span>
                            <span className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Featured Works</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* ================= 2. MAIN MASONRY GRID ================= */}
        <section ref={galleryRef} className="relative py-20 px-4 md:px-8 max-w-450 mx-auto">
            
            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-3 gap-8 min-h-[150vh]">
                <motion.div style={{ y: y1 }} className="flex flex-col gap-8">
                    {portfolioProjects.slice(0, 11).map((p) => (
                       <ProjectCardDesktop key={p.id} project={p} onClick={() => openModal(p)} />
                    ))}
                </motion.div>
                <motion.div style={{ y: y2 }} className="flex flex-col gap-8 pt-32">
                     {portfolioProjects.slice(11, 22).map((p) => (
                       <ProjectCardDesktop key={p.id} project={p} onClick={() => openModal(p)} />
                    ))}
                </motion.div>
                <motion.div style={{ y: y3 }} className="flex flex-col gap-8">
                     {portfolioProjects.slice(22, 32).map((p) => (
                       <ProjectCardDesktop key={p.id} project={p} onClick={() => openModal(p)} />
                    ))}
                </motion.div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col gap-4">
                {portfolioProjects.map((p) => (
                  <motion.div 
                    key={p.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-20px" }}
                    onClick={() => openModal(p)}
                    className="relative w-full h-48 sm:h-56 md:h-96 rounded-lg overflow-hidden shadow-lg border border-white/10"
                  >
                      <Image src={p.images[0]} alt={p.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw" quality={90} className="object-cover object-center" priority={p.id <= 3} />
                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
                          <div>
                              <div className="flex items-center gap-2 mb-1">
                                  <span className="text-zinc-400 text-[9px] font-bold uppercase tracking-widest">{p.category}</span>
                              </div>
                              <h3 className="text-lg font-serif text-white leading-none">{p.title}</h3>
                          </div>
                          <div className="text-[#D4AF37]"><ArrowUpRight size={16} /></div>
                      </div>
                  </motion.div>
                ))}
            </div>
        </section>

        {/* ================= 3. FULL-SCREEN DETAIL VIEW (WITH HERO GALLERY) ================= */}
        <AnimatePresence>
            {selectedProject && (
                <motion.div
                    ref={detailScrollRef}
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed inset-0 z-9999 bg-[#050505] overflow-y-auto overflow-x-hidden w-full h-full"
                >
                    {/* Sticky Header / Back Button */}
                    <div className="fixed top-0 left-0 w-full z-10000 p-4 md:p-8 bg-linear-to-b from-black/80 to-transparent pointer-events-none">
                        <button 
                           onClick={closeModal} 
                           className="pointer-events-auto flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-[#D4AF37] hover:text-black text-white rounded-full backdrop-blur-md border border-white/20 transition-all font-bold uppercase tracking-widest text-[10px] md:text-xs shadow-lg"
                        >
                            <ArrowLeft size={16} /> Back to Grid
                        </button>
                    </div>

                    {/* DYNAMIC HERO IMAGE/VIDEO GALLERY */}
                    <div className="relative w-full h-screen sm:h-[600px] md:min-h-[90vh] bg-black flex flex-col justify-end">
                        
                        {/* Main Image/Video Display */}
                        <motion.div 
                            key={currentImageIndex}
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                        >
                            {mediaItems[currentImageIndex]?.type === 'video' ? (
                              <video 
                                src={mediaItems[currentImageIndex]?.src} 
                                className="w-full h-full object-contain sm:object-cover object-center"
                                autoPlay
                                controls
                                muted
                              />
                            ) : (
                              <Image 
                                src={mediaItems[currentImageIndex]?.src || selectedProject.images[0]} 
                                alt={selectedProject.title} 
                                fill 
                                priority
                                sizes="(max-width: 640px) 100vw, 100vw"
                                quality={95}
                                className="object-contain sm:object-cover object-center"
                              />
                            )}
                        </motion.div>
                        
                        {/* Cinematic Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                        
                        {/* Interactive Content inside Hero */}
                        <div className="relative z-10 w-full px-6 md:px-12 pb-12 pt-32 max-w-450 mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                            
                            {/* Title & Location (Left Side) */}
                            <div className="max-w-3xl">
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                                    className="flex flex-wrap items-center gap-3 text-[#D4AF37] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4"
                                >
                                    <span>{selectedProject.category}</span>
                                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                                    <span className="flex items-center gap-1 text-white"><MapPin size={14} /> {selectedProject.location}</span>
                                </motion.div>
                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                                    className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight drop-shadow-xl"
                                >
                                    {selectedProject.title}
                                </motion.h1>
                            </div>

                            {/* E-Commerce Thumbnails Overlapping Hero (Right Side) */}
                            {mediaItems.length > 1 && (
                                <motion.div 
                                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                                    className="bg-black/40 backdrop-blur-xl border border-white/10 p-2 sm:p-3 rounded-2xl shadow-2xl max-w-full overflow-x-auto scrollbar-none"
                                >
                                    <div className="flex gap-2 sm:gap-3 w-max">
                                        {mediaItems.map((media, idx) => (
                                            <div 
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 shrink-0 cursor-pointer rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                                                    currentImageIndex === idx 
                                                    ? 'border-[#D4AF37] scale-100 opacity-100 shadow-[0_0_15px_rgba(212,175,55,0.5)]' 
                                                    : 'border-transparent scale-95 opacity-50 hover:opacity-100 hover:scale-100 hover:border-white/30'
                                                }`}
                                            >
                                                {media.type === 'video' ? (
                                                  <div className="w-full h-full bg-black flex items-center justify-center relative">
                                                    <video 
                                                      src={media.src} 
                                                      className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                                      <div className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-white rounded-full flex items-center justify-center">
                                                        <div className="w-0 h-0 border-l-3 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-0.5 sm:ml-1" />
                                                      </div>
                                                    </div>
                                                  </div>
                                                ) : (
                                                  <Image 
                                                    src={media.src} 
                                                    fill 
                                                    sizes="(max-width: 640px) 56px, 96px"
                                                    quality={80}
                                                    className="object-cover" 
                                                    alt={`Thumbnail ${idx + 1}`} 
                                                  />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* PROJECT DETAILS SECTION (Below Hero) */}
                    <div className="max-w-300 mx-auto px-6 md:px-12 py-16 md:py-24">
                        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
                            
                            {/* Left Col: Overview */}
                            <div className="md:col-span-2 space-y-6">
                                <h3 className="text-2xl font-serif text-white flex items-center gap-3">
                                    <span className="w-8 h-px bg-[#D4AF37]"></span> Project Overview
                                </h3>
                                <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light">
                                    {selectedProject.overview}
                                </p>
                            </div>

                            {/* Right Col: Specifics */}
                            <div className="space-y-8 bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
                                <div>
                                    <span className="flex items-center gap-2 text-zinc-500 uppercase text-[10px] tracking-widest font-bold mb-2">
                                        <Calendar size={12} /> Execution Year
                                    </span>
                                    <span className="text-white text-xl font-serif">{selectedProject.year}</span>
                                </div>
                                
                                <div>
                                    <span className="flex items-center gap-2 text-zinc-500 uppercase text-[10px] tracking-widest font-bold mb-3">
                                        <Layers size={12} /> Key Deliverables
                                    </span>
                                    <div className="flex flex-col gap-2">
                                        {selectedProject.services.map((service, i) => (
                                            <span key={i} className="text-zinc-300 text-sm border-l-2 border-[#D4AF37] pl-3 py-1 bg-white/5 rounded-r-md">
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Link href="/contact" className="block w-full text-center px-6 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-colors rounded-sm mt-4">
                                    Inquire About Similar Setup
                                </Link>
                            </div>

                        </div>
                    </div>

                    {/* ================= ALL OTHER IMAGES GRID ================= */}
                    <div className="w-full bg-[#0a0a0a] py-20 border-t border-white/5">
                        <div className="max-w-450 mx-auto px-4 md:px-8">
                            <div className="flex items-center justify-between mb-16 md:px-4">
                                <h3 className="text-3xl md:text-5xl font-serif text-white">More Works</h3>
                                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">{remainingProjects.length} Projects</span>
                            </div>
                            
                            {/* Desktop View */}
                            <div className="hidden md:grid grid-cols-3 gap-8">
                                <div className="flex flex-col gap-8">
                                    {remainingProjects.slice(0, 11).map((p) => (
                                       <ProjectCardDesktop key={p.id} project={p} onClick={() => openModal(p)} />
                                    ))}
                                </div>
                                <div className="flex flex-col gap-8 md:pt-32">
                                     {remainingProjects.slice(11, 21).map((p) => (
                                       <ProjectCardDesktop key={p.id} project={p} onClick={() => openModal(p)} />
                                    ))}
                                </div>
                                <div className="flex flex-col gap-8">
                                     {remainingProjects.slice(21, 31).map((p) => (
                                       <ProjectCardDesktop key={p.id} project={p} onClick={() => openModal(p)} />
                                    ))}
                                </div>
                            </div>

                            {/* Mobile View */}
                            <div className="md:hidden flex flex-col gap-4">
                                {remainingProjects.map((p) => (
                                  <motion.div 
                                    key={p.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true, margin: "-20px" }}
                                    onClick={() => openModal(p)}
                                    className="relative w-full h-[30vh] rounded-lg overflow-hidden shadow-lg border border-white/10"
                                  >
                                      <Image src={p.images[0]} alt={p.title} fill sizes="100vw" className="object-cover object-center" />
                                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent" />
                                      <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end">
                                          <div>
                                              <span className="text-zinc-400 text-[9px] font-bold uppercase tracking-widest block mb-1">{p.category}</span>
                                              <h3 className="text-lg font-serif text-white leading-none">{p.title}</h3>
                                          </div>
                                          <div className="text-[#D4AF37]"><ArrowUpRight size={16} /></div>
                                      </div>
                                  </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        {/* ================= 4. FOOTER CTA ================= */}
        <section className="py-24 px-6 text-center relative overflow-hidden border-t border-[#D4AF37]/10">
            <div className="relative z-10">
                <h2 className="text-3xl md:text-6xl font-serif text-white mb-8">Have a vision?</h2>
                <Link href="/contact" className="inline-block px-12 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all rounded-sm shadow-xl">
                    Let&apos;s Build It
                </Link>
            </div>
        </section>

      </div>
    </div>
  );
}

// ============================================================================
//  HELPER: PROJECT CARD DESKTOP
// ============================================================================
function ProjectCardDesktop({ project, onClick }: { project: PortfolioProject; onClick: () => void }) {
  return (
    <div 
      className="relative w-full h-125 rounded-lg overflow-hidden border border-zinc-800 hover:border-[#D4AF37] transition-all duration-500 cursor-pointer group" 
      onClick={onClick}
    >
      <Image 
        src={project.images[0]} 
        alt={project.title} 
        fill 
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" 
        priority={project.id <= 3}
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
         <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {project.location}
         </span>
         <h3 className="text-3xl font-serif text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {project.title}
         </h3>
         <div className="mt-4 w-12 h-px bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150"></div>
      </div>
    </div>
  );
}