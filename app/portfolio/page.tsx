"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { allProjects, getAllCategories, Project } from "@/lib/portfolioUtils";

// ── Static particles for Hero ──
const PX = [{id:0,l:"5%",d:26,dl:0},{id:1,l:"18%",d:22,dl:1.4},{id:2,l:"32%",d:30,dl:2.8},
  {id:3,l:"48%",d:20,dl:0.6},{id:4,l:"62%",d:28,dl:3.5},{id:5,l:"76%",d:24,dl:1.9},{id:6,l:"90%",d:32,dl:4.2}];

export default function PortfolioGalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = getAllCategories();

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-[#FFFBF0] min-h-screen text-[#0a0a0a] font-sans selection:bg-[#D4AF37] selection:text-black pb-24">
      
      {/* Particles (subtle gold dust) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {PX.map(p => (
          <motion.div key={p.id} style={{left:p.l}} className="absolute bottom-0 w-[2px] h-[2px] rounded-full bg-[#D4AF37]"
            initial={{y:0,opacity:0}} animate={{y:"-100vh",opacity:[0,0.5,0]}}
            transition={{duration:p.d,repeat:Infinity,delay:p.dl,ease:"linear"}}
          />
        ))}
      </div>

      <div className="relative z-10">

        {/* ── CINEMATIC HERO ── */}
        <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/portfolio/portfolio-25.webp"
              alt="Zoya Events Portfolio"
              fill
              sizes="100vw"
              quality={90}
              priority
              className="object-cover object-center"
            />
            {/* Gradients to blend with Cream background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#FFFBF0]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center pt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-xl">
                Our <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E779] to-[#B38728]">Portfolio</span>
              </h1>
              <p className="text-white/80 text-sm md:text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
                Crafting Extraordinary Spaces For Extraordinary Experiences. Explore our legacy of premium event infrastructure.
              </p>
              
              {/* Scroll Indicator */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex justify-center"
              >
                <div className="w-[1px] h-16 bg-gradient-to-b from-[#D4AF37] to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── FILTERS & SEARCH BAR ── */}
        <section className="sticky top-[68px] sm:top-[80px] md:top-[88px] z-40 bg-[#FFFBF0]/90 backdrop-blur-xl border-b border-[#D4AF37]/20 py-4 px-4 md:px-8 mb-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Scrollable Categories */}
            <div className="w-full md:w-auto flex overflow-x-auto scrollbar-none gap-2 pb-2 md:pb-0 hide-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-medium uppercase tracking-widest transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                      : "bg-transparent text-[#6b5f3f] border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:text-[#0a0a0a]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-[#9a8860]" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#D4AF37]/20 rounded-full text-sm text-[#0a0a0a] placeholder-[#9a8860] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* ── PROJECT GRID ── */}
        <section className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-32 text-center flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-2xl font-serif text-[#0a0a0a] mb-2">No projects found</h3>
                <p className="text-[#6b5f3f] font-light">
                  We couldn't find any projects matching your search criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="mt-6 px-6 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-full text-xs uppercase tracking-widest transition-all"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}

// ── PROJECT CARD COMPONENT ──
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <Link href={`/portfolio/${project.id}`} className="group block h-full">
        <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-[#0a0a0a] border border-[#D4AF37]/20 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(212,175,55,0.15)] group-hover:border-[#D4AF37] transition-all duration-500">
          
          {/* Main Image */}
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
          />
          
          {/* Dark Overlay on Hover */}
          <div className="absolute inset-0 bg-[#0a0a0a]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Persistent Gradient for Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

          {/* Category Pill (Top Left) */}
          <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-[#D4AF37]/30 z-10">
            <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em]">
              {project.category}
            </span>
          </div>

          {/* Bottom Content Area */}
          <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-300 line-clamp-1">
                {project.title}
              </h3>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-white/70 text-xs">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="truncate max-w-[180px]">{project.location}</span>
                  <span className="mx-1 text-[#D4AF37]">•</span>
                  <span>{project.year}</span>
                </div>
                
                {/* View Project Button (Slides in on hover) */}
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">
                  View <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}