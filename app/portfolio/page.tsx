"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDown, X, Calendar, MapPin, Layers, ChevronLeft, ChevronRight } from "lucide-react";

// ============================================================================
//  USER DATA SECTION - 9 PROJECTS
// ============================================================================

const portfolioProjects = [
  // --- PROJECT 1 ---
  {
    id: 1,
    title: "Fortune 500 Annual Summit",
    category: "Corporate Events",
    year: "2025",
    description: "A large-scale corporate gathering for global leaders.",
    longDescription: "We managed the entire stage setup, AV production, and VIP seating for over 5000 delegates. The design focused on a futuristic theme with LED mapping.",
    services: ["Stage Design", "AV Production", "Logistics"],
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2612&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1475721027767-f7566de8691f?q=80&w=2670&auto=format&fit=crop",
    ],
  },
  // --- PROJECT 2 ---
  {
    id: 2,
    title: "TechExpo 2025 Stall",
    category: "Exhibitions & Stalls",
    year: "2025",
    description: "Award-winning stall design for a leading tech firm.",
    longDescription: "A 3-side open stall designed to maximize footfall. Features included a hanging structure, interactive touch kiosks, and a private meeting lounge.",
    services: ["Stall Fabrication", "3D Design", "Branding"],
    images: [
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2670&auto=format&fit=crop",
    ],
  },
  // --- PROJECT 3 ---
  {
    id: 3,
    title: "Skyline Sales Office",
    category: "Sales Offices",
    year: "2024",
    description: "Luxury temporary sales office for real estate launch.",
    longDescription: "Built using German Hangar technology, this sales office was operational in just 45 days. It includes a model apartment area and reception.",
    services: ["German Hangar", "Interiors", "Civil Work"],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2670&auto=format&fit=crop",
    ],
  },
  // --- PROJECT 4 ---
  {
    id: 4,
    title: "Auto Launch 2024",
    category: "Corporate Events",
    year: "2024",
    description: "High-energy product launch for an automotive giant.",
    longDescription: "Vehicle reveal mechanism with hydraulic lift and pyrotechnics.",
    services: ["Production", "Light & Sound"],
    images: [
       "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2670&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2574&auto=format&fit=crop",
    ]
  },
  // --- PROJECT 5 ---
  {
    id: 5,
    title: "Pharma Convention",
    category: "Exhibitions & Stalls",
    year: "2024",
    description: "Modular stall setup for pharmaceutical convention.",
    longDescription: "Clean, clinical design with ample storage and product display shelves.",
    services: ["Fabrication", "Printing"],
    images: [
       "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2670&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2573&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2670&auto=format&fit=crop",
    ]
  },
  // --- PROJECT 6 ---
  {
    id: 6,
    title: "Lakeside Sales Lounge",
    category: "Sales Offices",
    year: "2023",
    description: "Premium sales lounge overlooking the project site.",
    longDescription: "Glass facade structure with central air conditioning and premium furniture.",
    services: ["Structure", "HVAC", "Decor"],
    images: [
       "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2600&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2600&auto=format&fit=crop",
    ]
  },
  // --- PROJECT 7 ---
   {
    id: 7,
    title: "Leadership Gala",
    category: "Corporate Events",
    year: "2023",
    description: "An evening of awards and networking.",
    longDescription: "Elegant ballroom setup with centerpieces and ambient lighting.",
    services: ["Decor", "Catering", "Management"],
    images: [
       "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2670&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2670&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop",
    ]
  },
  // --- PROJECT 8 ---
  {
    id: 8,
    title: "Construct India Stall",
    category: "Exhibitions & Stalls",
    year: "2023",
    description: "Heavy machinery display stall outdoors.",
    longDescription: "Reinforced flooring to support heavy equipment. Branding towers visible from distance.",
    services: ["Outdoor Structure", "Branding"],
    images: [
       "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2670&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2670&auto=format&fit=crop",
    ]
  },
  // --- PROJECT 9 ---
  {
    id: 9,
    title: "Greenfield Office",
    category: "Sales Offices",
    year: "2022",
    description: "Eco-friendly temporary site office.",
    longDescription: "Incorporating green walls and sustainable materials for a nature-focused client.",
    services: ["Green Building", "Design"],
    images: [
       "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1497215842964-222b4bef9728?q=80&w=2670&auto=format&fit=crop",
       "https://images.unsplash.com/photo-1504384308090-c54be3855092?q=80&w=2670&auto=format&fit=crop",
    ]
  },
];

// ============================================================================
//  MAIN COMPONENT
// ============================================================================

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof portfolioProjects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- Filter Logic ---
  const categories = ["Corporate Events", "Exhibitions & Stalls", "Sales Offices"];
  
  const filteredProjects = selectedCategory
    ? portfolioProjects.filter((p) => p.category === selectedCategory)
    : portfolioProjects;

  // --- Scroll Logic for the Infinite Wall ---
  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]); 
  const y2 = useTransform(scrollYProgress, [0, 1], [-150, 0]); 
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]); 

  // --- Modal Logic ---
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  // --- 15 GALLERY IMAGES (Top Marquee) ---
  const GALLERY_IMAGES = [
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1475721027767-f7566de8691f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=800&auto=format&fit=crop",
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* ================= 1. HERO SECTION (MAGAZINE STYLE) ================= */}
      <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row bg-zinc-950">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-20 py-20 lg:py-0 relative z-10">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
                <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6">
                    A Legacy of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E779]">
                        Grandeur.
                    </span>
                </h1>
                <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-md mb-10">
                    We don't just build structures; we craft environments. From the precision of German engineering to the artistry of luxury exhibitions, explore a portfolio defined by scale and sophistication.
                </p>

                <div className="flex gap-12 border-t border-zinc-800 pt-8">
                    <div>
                        <span className="block text-3xl font-serif text-white">15+</span>
                        <span className="text-xs text-zinc-500 uppercase tracking-widest">Years Exp.</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-serif text-white">500+</span>
                        <span className="text-xs text-zinc-500 uppercase tracking-widest">Projects</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-serif text-white">100%</span>
                        <span className="text-xs text-zinc-500 uppercase tracking-widest">Delivery</span>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative overflow-hidden group">
            <motion.div 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0"
            >
                <Image 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop" 
                    alt="Hero Portfolio" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/80 lg:to-transparent lg:bg-gradient-to-r lg:from-zinc-950 lg:via-zinc-950/20 lg:to-transparent"></div>
            </motion.div>
            
            <div className="absolute bottom-10 right-10 flex items-center gap-3 text-white/80 animate-bounce">
                <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
                <ArrowDown size={16} className="text-[#D4AF37]" />
            </div>
        </div>
      </section>

      {/* ================= 2. INFINITE WALL (FIXED: 2 COLS MOBILE / 3 DESKTOP) ================= */}
      <section ref={galleryRef} className="relative h-[80vh] overflow-hidden bg-black border-t border-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none" />
        
        {/* CHANGED HERE: grid-cols-2 for mobile, md:grid-cols-3 for desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto px-4 h-[120%] -mt-10 opacity-60 hover:opacity-100 transition-opacity duration-700">
          
          <motion.div style={{ y: y1 }} className="flex flex-col gap-6">
            {GALLERY_IMAGES.slice(0, 5).map((src, i) => (
              <div key={i} className="relative w-full h-[300px] md:h-[400px] rounded-sm overflow-hidden">
                <Image src={src} alt="Portfolio" fill className="object-cover" />
              </div>
            ))}
          </motion.div>
          
          <motion.div style={{ y: y2 }} className="flex flex-col gap-6 -mt-20">
            {GALLERY_IMAGES.slice(5, 10).map((src, i) => (
              <div key={i} className="relative w-full h-[300px] md:h-[400px] rounded-sm overflow-hidden">
                <Image src={src} alt="Portfolio" fill className="object-cover" />
              </div>
            ))}
          </motion.div>
          
          {/* Third Column is HIDDEN on Mobile, Visible on Desktop */}
          <motion.div style={{ y: y3 }} className="hidden md:flex flex-col gap-6">
            {GALLERY_IMAGES.slice(10, 15).map((src, i) => (
              <div key={i} className="relative w-full h-[300px] md:h-[400px] rounded-sm overflow-hidden">
                <Image src={src} alt="Portfolio" fill className="object-cover" />
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= 3. FILTERABLE PROJECT GRID ================= */}
      <section className="py-24 px-6 bg-black relative z-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-zinc-800 pb-6">
            <div>
                <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold mb-2 block">Case Studies</span>
                <h2 className="text-4xl font-serif">Selected Works</h2>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-5 py-2 text-xs uppercase tracking-widest border rounded transition-all ${
                    selectedCategory === null ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold' : 'border-zinc-800 text-zinc-500 hover:text-white'
                  }`}
                >
                  All Projects
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest border rounded transition-all ${
                      selectedCategory === cat ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold' : 'border-zinc-800 text-zinc-500 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
            </div>
          </div>

          {/* GRID: 3 Cols Desktop, 2 Cols Tablet, 1 Col Mobile (Cleanest for cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                onClick={() => openModal(project)} 
                className="group relative w-full aspect-[4/5] overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-[#D4AF37]/50 transition-colors cursor-pointer"
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {project.category}
                    </span>
                    <h3 className="text-2xl font-serif text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {project.title}
                    </h3>
                    <div className="mt-6 flex items-center gap-2 text-white text-xs uppercase tracking-widest border-b border-[#D4AF37] w-fit pb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                        View Details <ArrowUpRight size={14} className="text-[#D4AF37]" />
                    </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4. SLIDER POPUP (MODAL) ================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={closeModal} 
          >
            {/* Modal Content Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl bg-zinc-900 border border-[#D4AF37]/20 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[85vh] md:h-[80vh]"
              onClick={(e) => e.stopPropagation()} 
            >
              
              {/* --- LEFT: SLIDER SECTION (65%) --- */}
              <div className="w-full md:w-[65%] bg-black relative flex flex-col justify-center border-r border-zinc-800">
                
                {/* Main Image */}
                <div className="relative h-full w-full flex items-center justify-center bg-black">
                   <div className="relative w-full h-full max-h-[60vh] md:max-h-[70vh]">
                    <Image
                        src={selectedProject.images[currentImageIndex]}
                        alt={selectedProject.title}
                        fill
                        className="object-contain" 
                    />
                   </div>
                  
                  {/* Arrows */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 p-2 rounded-full bg-zinc-800/50 hover:bg-[#D4AF37] text-white hover:text-black transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 p-2 rounded-full bg-zinc-800/50 hover:bg-[#D4AF37] text-white hover:text-black transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 p-4 overflow-x-auto bg-zinc-950 border-t border-zinc-800 h-[100px] flex-shrink-0">
                   {selectedProject.images.map((img, idx) => (
                     <button
                       key={idx}
                       onClick={() => setCurrentImageIndex(idx)}
                       className={`relative flex-shrink-0 w-24 h-full rounded-md overflow-hidden border-2 transition-all ${
                         currentImageIndex === idx 
                           ? "border-[#D4AF37] opacity-100" 
                           : "border-transparent opacity-40 hover:opacity-100"
                       }`}
                     >
                       <Image src={img} alt="thumb" fill className="object-cover" />
                     </button>
                   ))}
                </div>
              </div>

              {/* --- RIGHT: DETAILS SECTION (35%) --- */}
              <div className="w-full md:w-[35%] p-8 overflow-y-auto bg-zinc-900 relative">
                 {/* Close Button */}
                 <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-20 p-2 text-zinc-500 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="mb-6 mt-4">
                  <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl font-serif text-white mb-4 leading-tight">
                    {selectedProject.title}
                  </h2>
                  <div className="h-1 w-20 bg-[#D4AF37] rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8 border-b border-zinc-800 pb-8">
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-[#D4AF37]" />
                    <div>
                      <span className="block text-xs text-zinc-500 uppercase tracking-wider">Year</span>
                      <span className="text-sm text-white">{selectedProject.year}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-[#D4AF37]" />
                    <div>
                      <span className="block text-xs text-zinc-500 uppercase tracking-wider">Location</span>
                      <span className="text-sm text-white">Mumbai, India</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <p className="text-zinc-300 leading-relaxed font-light text-sm">
                    {selectedProject.description}
                  </p>
                  <p className="text-zinc-400 leading-relaxed font-light text-sm">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Layers size={16} className="text-[#D4AF37]" /> Key Services
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((service, i) => (
                      <span key={i} className="px-3 py-1 bg-black border border-zinc-800 text-xs text-zinc-400 rounded-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-zinc-800">
                  <Link href="/contact" className="block w-full text-center py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors rounded-sm">
                    Inquire About Similar
                  </Link>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= 5. FOOTER CTA ================= */}
      <section className="py-32 px-6 text-center bg-[#D4AF37]">
        <h2 className="text-4xl md:text-6xl font-serif text-black mb-6">Have a vision in mind?</h2>
        <Link href="/contact" className="inline-block px-12 py-4 bg-black text-white text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-xl">
            Let's Collaborate
        </Link>
      </section>

    </div>
  );
}