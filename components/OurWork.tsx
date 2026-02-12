'use client';

import React from 'react';
import Link from 'next/link';
import { portfolioProjects } from '@/data/portfolio';

// Display first 9 projects as per spec
const PROJECTS = portfolioProjects.slice(0, 9);

function Slot({ project, idx }: { project: any; idx: number }) {
  const imageUrl = project.images?.[0] || '/images/portfolio-1.jpg';

  return (
    <Link href={`/portfolio/${project.slug}`} className="block h-full">
      <div className="relative w-full h-full overflow-hidden rounded-lg border border-[#d4af37]/20 bg-zinc-900 cursor-pointer hover:border-[#d4af37] transition-colors group">
        <img 
          src={imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 flex items-end">
          <div className="w-full p-4">
            <div className="text-sm font-semibold text-[#FFD700]">{project.category}</div>
            <div className="text-xs text-gray-400 mt-1">{project.title}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function OurWork() {
  return (
    <section className="bg-[#0d0d0d] py-8 sm:py-12 px-4 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide mb-2">
          <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(90deg, #FFD700 0%, #B8860B 60%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            OUR WORK
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
          Showcasing our premium event executions and exhibition excellence.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-3 sm:gap-4 h-auto md:h-[calc(100vh-12rem)]">
          {PROJECTS.map((p, i) => (
            <div key={p.slug} className="h-64 sm:h-72 md:h-full">
              <Slot project={p} idx={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
