"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ArrowLeft, MapPin, CheckCircle2, 
  ArrowRight, Users, Clock, Box, ShieldCheck, 
  Maximize2
} from "lucide-react";
import { getProjectById, getRelatedProjects, getNextProject } from "@/lib/portfolioUtils";
import Lightbox from "@/components/portfolio/Lightbox";

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const projectId = parseInt(resolvedParams.id, 10);
  const project = getProjectById(projectId);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project, 3);
  const nextProject = getNextProject(project.id);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#FFFBF0] min-h-screen text-[#0a0a0a] font-sans selection:bg-[#D4AF37] selection:text-black pb-0">
      
      {/* ── TOP HERO SECTION ── */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-end justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            sizes="100vw"
            quality={95}
            priority
            className="object-cover object-center"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFBF0] via-black/40 to-black/20" />
        </div>

        {/* Back Button */}
        <Link 
          href="/portfolio"
          className="absolute top-24 left-6 md:left-12 z-20 flex items-center gap-2 px-5 py-2.5 bg-black/30 hover:bg-[#D4AF37] text-white hover:text-black backdrop-blur-md rounded-full border border-white/20 transition-all duration-300 text-xs uppercase tracking-widest font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>

        {/* Title Block */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
                {project.category}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-widest">
                {project.year}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] leading-[0.95] font-serif text-[#0a0a0a] mb-6 drop-shadow-[0_2px_15px_rgba(255,255,255,0.7)]">
              {project.title}
            </h1>
            
            <div className="flex items-center gap-2 text-[#0a0a0a] font-medium tracking-wide drop-shadow-md">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-lg md:text-xl">{project.location}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        
        {/* ── PROJECT DETAILS GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 mb-24">
          
          {/* Left: Description */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif text-[#0a0a0a] mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-[#D4AF37]" /> Project Overview
            </h2>
            <p className="text-lg md:text-xl text-[#4a4a4a] font-light leading-relaxed mb-12">
              {project.overview}
            </p>
            
            {/* Highlights (Mock Data mapped) */}
            {project.highlights && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">
                  Project Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#D4AF37]/15 shadow-sm">
                      <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#3a3a3a]">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Info Sidebar */}
          <div className="bg-white p-8 rounded-2xl border border-[#D4AF37]/20 shadow-[0_8px_30px_rgba(212,175,55,0.08)] self-start space-y-8">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FFFBF0] flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                <Users className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#9a8860] mb-1 font-bold">Client</p>
                <p className="text-sm font-medium text-[#0a0a0a]">{project.client}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FFFBF0] flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                <Box className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#9a8860] mb-1 font-bold">Area Covered</p>
                <p className="text-sm font-medium text-[#0a0a0a]">{project.areaCovered}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FFFBF0] flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#9a8860] mb-1 font-bold">Duration</p>
                <p className="text-sm font-medium text-[#0a0a0a]">{project.duration}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#D4AF37]/20">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] mb-4 font-bold">Scope of Work</p>
              <ul className="space-y-3">
                {project.services.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-[#3a3a3a]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── IMAGE GALLERY ── */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif text-[#0a0a0a]">Project Gallery</h2>
            <p className="text-[#9a8860] text-sm uppercase tracking-widest">{project.images.length} Images</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => openLightbox(idx)}
                className={`relative group cursor-pointer overflow-hidden rounded-xl bg-[#111] border border-[#D4AF37]/10 ${
                  idx === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img}
                  alt={`${project.title} - ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 text-white">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RELATED PROJECTS ── */}
        {relatedProjects.length > 0 && (
          <div className="pt-24 border-t border-[#D4AF37]/20">
            <h2 className="text-3xl font-serif text-[#0a0a0a] mb-10 text-center">
              More <span className="italic text-[#D4AF37]">Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <Link key={p.id} href={`/portfolio/${p.id}`} className="group block">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#0a0a0a] border border-[#D4AF37]/10 shadow-sm group-hover:shadow-xl transition-all duration-500">
                    <Image
                      src={p.images[0]}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 w-full p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-[#D4AF37] text-[9px] uppercase tracking-widest font-bold mb-1">{p.category}</p>
                      <h4 className="text-white font-serif text-lg">{p.title}</h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── NEXT PROJECT FULL-WIDTH CTA ── */}
      {nextProject && (
        <Link href={`/portfolio/${nextProject.id}`} className="block relative w-full h-[50vh] md:h-[60vh] overflow-hidden group">
          <Image
            src={nextProject.images[0]}
            alt={nextProject.title}
            fill
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] mb-4">Next Project</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 max-w-4xl drop-shadow-lg group-hover:text-[#FFFBF0] transition-colors">
              {nextProject.title}
            </h2>
            <div className="w-14 h-14 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>
        </Link>
      )}

      <Lightbox 
        images={project.images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % project.images.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length)}
      />
    </div>
  );
}
