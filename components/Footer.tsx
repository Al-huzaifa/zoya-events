"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const address =
    "Pinnacle Corporate Park, 10th Floor, Office No.11, Next to Trader Centre BKC, Bandra (East), Mumbai 400051";

  const mapHref =
    "https://www.google.com/maps/search/?api=1&query=Pinnacle%20Corporate%20Park%2C%2010th%20Floor%2C%20Office%20No.11%2C%20Next%20to%20Trader%20Centre%20BKC%2C%20Bandra%20East%2C%20Mumbai%20400051";

  const navLinks = [
    { name: "Home",        href: "/" },
    { name: "About Us",    href: "/about" },
    { name: "Sales Office",href: "/sales-office" },
    { name: "Services",    href: "/services" },
    { name: "Portfolio",   href: "/portfolio" },
    { name: "Contact Us",  href: "/contact" },
  ];

  const socialIcons = [
    { icon: Facebook,       label: "Facebook",  href: "https://www.facebook.com/share/1DeTQUHSt8/" },
    { icon: Instagram,      label: "Instagram", href: "https://www.instagram.com/zoya.event?igsh=MThwZTh0cDVuamRjMA==" },
    { icon: MessageCircle,  label: "WhatsApp",  href: "https://wa.me/919503802865" },
  ];

  return (
    <footer className="bg-[#FFFBF0] font-sans relative z-20">

      {/* Top gold rule */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">

        {/* ══════════════════════════════════════════════════
            MAIN GRID  —  3 columns
        ══════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-14">

          {/* ─── COL 1 : Brand + Contact ─────────────────── */}
          <div>
            {/* Logo — mix-blend-mode:multiply removes white bg, shows only gold text */}
            <div className="mb-6">
              <Image
                src="/images/transparentlogo.png"
                alt="Zoya Events — Event Solution & Exhibition"
                width={240}
                height={120}
                className="w-[220px] h-auto object-contain"
                style={{ mixBlendMode: "multiply" }}
                priority
              />
            </div>

            <p className="text-[#4a4a4a] text-[14px] leading-[1.85] mb-8 font-light max-w-xs">
              Mumbai&apos;s premier turnkey event production company — delivering world-class
              German Hangar structures, premium staging &amp; full-scale event ecosystems since 2013.
            </p>

            {/* ── Contact ── */}
            <div className="space-y-5">

              {/* Address */}
              <a href={mapHref} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#D4AF37] transition-all duration-300">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-black transition-colors" />
                </div>
                <p className="text-[#4a4a4a] text-[13px] leading-[1.7] font-light group-hover:text-[#D4AF37] transition-colors">
                  {address}
                </p>
              </a>

              {/* Email */}
              <a
                href="mailto:zoyaevent01@gmail.com?subject=Event%20Inquiry%20for%20Zoya%20Event&body=Hello%20Zoya%20Events%20Team%2C%0A%0AI%20am%20interested%20in%20your%20event%20services."
                className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37] transition-all duration-300">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-black transition-colors" />
                </div>
                <p className="text-[#4a4a4a] text-[14px] font-light group-hover:text-[#D4AF37] transition-colors">
                  zoyaevent01@gmail.com
                </p>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-3 pt-1 border-t border-[#D4AF37]/15">
                <div className="w-9 h-9 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[#B38728] text-[10px] uppercase tracking-[0.2em] font-semibold mb-0.5">
                    Call Us Now
                  </p>
                  <a href="tel:+919503802865"
                    className="text-[#0a0a0a] font-serif text-[19px] hover:text-[#D4AF37] transition-colors tracking-wide">
                    +91 9503802865
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ─── COL 2 : Navigation ──────────────────────── */}
          <div>
            {/* Gold heading */}
            <h3 className="text-[#D4AF37] font-serif text-[22px] font-light mb-2 tracking-wide">
              Company
            </h3>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#B38728] text-[10px] uppercase tracking-[0.25em] font-semibold">
                Navigate
              </span>
            </div>

            <nav className="flex flex-col space-y-[14px] mb-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-3 text-[#0a0a0a] hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <span className="w-0 h-px bg-[#D4AF37] group-hover:w-5 transition-all duration-300 inline-block flex-shrink-0" />
                  <span className="text-[15px] font-light group-hover:translate-x-1 transition-transform duration-300">
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Trust badge */}
            <div className="border border-[#D4AF37]/35 bg-white rounded-sm p-5 shadow-[0_4px_24px_rgba(212,175,55,0.1)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-7 bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.25em] font-semibold">Est. 2013</span>
              </div>
              <p className="text-[#0a0a0a] font-serif text-[20px] font-light leading-snug mb-2">
                13+ Years of{" "}
                <span className="italic text-[#D4AF37]">Excellence</span>
              </p>
              <p className="text-[#6B6350] text-[13px] leading-relaxed font-light">
                500+ events delivered across India. Trusted by India&apos;s top real estate &amp; corporate brands.
              </p>
            </div>
          </div>

          {/* ─── COL 3 : Location Map + Follow Us ───────── */}
          <div>
            {/* Gold heading */}
            <h3 className="text-[#D4AF37] font-serif text-[22px] font-light mb-2 tracking-wide">
              Our Location
            </h3>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#B38728] text-[10px] uppercase tracking-[0.25em] font-semibold">
                Mumbai, India
              </span>
            </div>

            {/* ── Beautiful Map Card ── */}
            <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-sm border border-[#D4AF37]/40 bg-white p-3 mb-8 shadow-[0_4px_40px_rgba(212,175,55,0.12)] hover:border-[#D4AF37] hover:shadow-[0_8px_50px_rgba(212,175,55,0.22)] transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden rounded-sm border border-[#D4AF37]/20 bg-[#F5F0E8]">

                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 208" preserveAspectRatio="none">
                  <rect width="420" height="208" fill="#F5F0E8" />
                  {/* Grid roads */}
                  <line x1="0"   y1="52"  x2="420" y2="52"  stroke="#D4AF37" strokeOpacity="0.13" strokeWidth="5"/>
                  <line x1="0"   y1="104" x2="420" y2="104" stroke="#D4AF37" strokeOpacity="0.10" strokeWidth="4"/>
                  <line x1="0"   y1="156" x2="420" y2="156" stroke="#D4AF37" strokeOpacity="0.08" strokeWidth="4"/>
                  <line x1="80"  y1="0"   x2="80"  y2="208" stroke="#D4AF37" strokeOpacity="0.10" strokeWidth="4"/>
                  <line x1="200" y1="0"   x2="200" y2="208" stroke="#D4AF37" strokeOpacity="0.13" strokeWidth="5"/>
                  <line x1="320" y1="0"   x2="320" y2="208" stroke="#D4AF37" strokeOpacity="0.10" strokeWidth="4"/>
                  {/* City blocks */}
                  <rect x="20"  y="65"  width="48" height="28" rx="2" fill="#D4AF37" fillOpacity="0.07"/>
                  <rect x="92"  y="18"  width="58" height="26" rx="2" fill="#D4AF37" fillOpacity="0.07"/>
                  <rect x="132" y="68"  width="50" height="24" rx="2" fill="#D4AF37" fillOpacity="0.07"/>
                  <rect x="238" y="28"  width="54" height="34" rx="2" fill="#D4AF37" fillOpacity="0.07"/>
                  <rect x="336" y="72"  width="58" height="30" rx="2" fill="#D4AF37" fillOpacity="0.07"/>
                  <rect x="30"  y="136" width="44" height="24" rx="2" fill="#D4AF37" fillOpacity="0.07"/>
                  <rect x="248" y="132" width="58" height="28" rx="2" fill="#D4AF37" fillOpacity="0.07"/>
                  {/* Curved routes */}
                  <path d="M0 40 C80 80 120 30 210 62 C285 88 336 50 420 76"    stroke="#BF953F" strokeOpacity="0.32" strokeWidth="2"   fill="none"/>
                  <path d="M0 118 C68 96 128 138 210 116 C284 94 336 128 420 104" stroke="#BF953F" strokeOpacity="0.22" strokeWidth="1.5" fill="none"/>
                  <path d="M20 208 C70 168 98 148 145 128 C190 108 240 105 284 76 C320 50 360 42 420 48" stroke="#BF953F" strokeOpacity="0.25" strokeWidth="1.5" fill="none"/>
                  {/* Main route highlight */}
                  <path d="M46 186 C76 164 82 144 112 126 C148 106 180 114 212 94 C246 72 248 50 282 38 C314 28 342 36 365 20"
                    stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  {/* Start dot */}
                  <circle cx="46"  cy="186" r="5"  fill="#BF953F" fillOpacity="0.5"/>
                  <circle cx="46"  cy="186" r="10" fill="#D4AF37" fillOpacity="0.15"/>
                  {/* Destination */}
                  <circle cx="365" cy="20"  r="8"  fill="#D4AF37"/>
                  <circle cx="365" cy="20"  r="15" fill="#D4AF37" fillOpacity="0.2"/>
                  <circle cx="365" cy="20"  r="22" fill="#D4AF37" fillOpacity="0.08"/>
                </svg>

                {/* Glow near pin */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_10%,rgba(212,175,55,0.18),transparent_35%)]" />

                {/* Animated pin */}
                <MapPin className="absolute right-[11%] top-[8%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-[#D4AF37] drop-shadow-[0_0_12px_rgba(212,175,55,0.9)] group-hover:-translate-y-[calc(50%+8px)] transition-transform duration-300" />

                {/* Address overlay */}
                <div className="absolute left-3 bottom-3 w-[60%] rounded-sm border border-[#D4AF37]/40 bg-white/95 p-3 shadow-md backdrop-blur-sm">
                  <p className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider mb-1">Mumbai, India</p>
                  <p className="text-[11px] leading-relaxed text-[#4a4a4a] font-light">{address}</p>
                </div>

                {/* Chip */}
                <div className="absolute top-3 left-3 bg-[#D4AF37] text-black text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm shadow group-hover:bg-[#B38728] transition-colors">
                  View on Map ↗
                </div>
              </div>
            </a>

            {/* ── Follow Us — below map ── */}
            <h3 className="text-[#D4AF37] font-serif text-[20px] font-light mb-2 tracking-wide">
              Follow Us
            </h3>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#B38728] text-[10px] uppercase tracking-[0.25em] font-semibold">
                Stay Connected
              </span>
            </div>
            <div className="flex gap-3">
              {socialIcons.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 border border-[#D4AF37]/45 rounded-full flex items-center justify-center text-[#D4AF37] bg-white hover:bg-[#D4AF37] hover:text-black shadow-sm hover:shadow-[0_4px_20px_rgba(212,175,55,0.3)] transition-all duration-300"
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mb-8" />

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6B6350] text-[13px] font-light">
            © 2026{" "}
            <span className="text-[#0a0a0a] font-medium">Zoya Events</span>.
            {" "}All rights reserved. · Est. 2013 · Mumbai, India
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#6B6350] text-[13px] hover:text-[#D4AF37] transition-colors font-light">Privacy Policy</a>
            <a href="#" className="text-[#6B6350] text-[13px] hover:text-[#D4AF37] transition-colors font-light">Terms of Service</a>
            <a href="#" className="text-[#6B6350] text-[13px] hover:text-[#D4AF37] transition-colors font-light">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
