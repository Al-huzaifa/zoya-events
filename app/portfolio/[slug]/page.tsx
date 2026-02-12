'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getPortfolioBySlug, getRelatedProjects } from '@/data/portfolio';
import { ChevronLeft, Check } from 'lucide-react';

interface PageParams {
  params: {
    slug: string;
  };
}

export default function PortfolioDetailPage({ params }: PageParams) {
  // Next.js 16+ dynamic params are promises, must unwrap with React.use()
  const unwrappedParams = React.use(params);
  const project = getPortfolioBySlug(unwrappedParams.slug);
  const relatedProjects = project ? getRelatedProjects(unwrappedParams.slug, 3) : [];

  if (!project) {
    return (
      <div className="bg-black text-white min-h-screen pt-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-zinc-400 mb-8">The project you're looking for doesn't exist.</p>
        <Link href="/portfolio">
          <button className="px-6 py-3 bg-[#FFD700] text-black font-semibold rounded hover:bg-white transition-all">
            Back to Portfolio
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="sticky top-0 z-40 bg-black/80 backdrop-blur border-b border-slate-800 p-4"
      >
        <div className="max-w-7xl mx-auto">
          <Link href="/portfolio">
            <button className="flex items-center gap-2 text-[#FFD700] hover:text-white transition-colors">
              <ChevronLeft size={20} />
              <span>Back to Portfolio</span>
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Hero Image Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden"
      >
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black"></div>
      </motion.section>

      {/* Project Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-black px-6 py-12 border-b border-slate-800"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#FFD700] text-sm font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-zinc-600 text-sm">•</span>
            <span className="text-zinc-400 text-sm">{project.year}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl">
            {project.longDescription}
          </p>
        </div>
      </motion.section>

      {/* Images Gallery */}
      {project.images.length > 1 && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-black px-6 py-20"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light mb-12">
              Project <span style={{ background: 'linear-gradient(90deg, #FFD700 0%, #B8860B 60%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Gallery</span>
            </h2>
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  className="relative h-80 rounded-lg overflow-hidden group"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Highlights Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-black px-6 py-20 border-t border-slate-800"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-12">
            Project <span style={{ background: 'linear-gradient(90deg, #FFD700 0%, #B8860B 60%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Highlights</span>
          </h2>
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {project.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                className="flex gap-4 items-start"
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-[#FFD700]/20 flex items-center justify-center mt-1">
                  <Check size={16} className="text-[#FFD700]" />
                </div>
                <p className="text-zinc-300 leading-relaxed">{highlight}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-black px-6 py-20 border-t border-slate-800"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-8">
            Services <span style={{ background: 'linear-gradient(90deg, #FFD700 0%, #B8860B 60%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Provided</span>
          </h2>
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {project.services.map((service) => (
              <motion.span
                key={service}
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                className="px-6 py-2 border border-[#FFD700] text-[#FFD700] rounded-full text-sm font-semibold hover:bg-[#FFD700]/10 transition-colors"
              >
                {service}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-black px-6 py-20 border-t border-slate-800"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light mb-12">
              Related <span style={{ background: 'linear-gradient(90deg, #FFD700 0%, #B8860B 60%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</span>
            </h2>
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {relatedProjects.map((relatedProject) => (
                <motion.div
                  key={relatedProject.slug}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <Link href={`/portfolio/${relatedProject.slug}`}>
                    <div className="group cursor-pointer">
                      <div className="relative w-full h-64 overflow-hidden rounded-lg mb-4">
                        <Image
                          src={relatedProject.images[0]}
                          alt={relatedProject.title}
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          style={{ objectFit: 'cover' }}
                          className="group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-[#FFD700] transition-colors mb-2">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-zinc-400">{relatedProject.category}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-linear-to-b from-black to-slate-900 px-6 py-20 border-t border-slate-800"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Inspired by Our Work?
          </h2>
          <p className="text-zinc-300 text-lg mb-10">
            Let's collaborate on your next project and create something extraordinary together.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <a
              href="mailto:zoyaevent01@gmail.com?subject=Next Project Discussion"
              className="inline-block px-12 py-4 bg-[#FFD700] text-black uppercase tracking-[0.2em] font-semibold rounded hover:bg-white transition-all duration-300 shadow-lg hover:shadow-[#FFD700]/30"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
