"use client";

import React from 'react';
import { Mail, Handshake, Building2, ArrowRight } from 'lucide-react';

interface InquiryCard {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  email: string;
  phone: string;
}

const InquiryGrid: React.FC = () => {
  const inquiryCards: InquiryCard[] = [
    {
      id: 'general',
      icon: Mail,
      title: 'General Inquiries',
      description: 'Have a question about our services or need event planning assistance? Get in touch with our main team.',
      email: 'info@zoyaevent.com',
      phone: '+91 9503802865',
    },
    {
      id: 'partnerships',
      icon: Handshake,
      title: 'Partnerships',
      description: 'Interested in collaborating or becoming a partner? We love working with like-minded brands.',
      email: 'partnerships@zoyaevent.com',
      phone: '+91 9372146434',
    },
    {
      id: 'sales',
      icon: Building2,
      title: 'Sales Office',
      description: 'Visit our corporate office for consultations, bookings, and premium service packages.',
      email: 'sales@zoyaevent.com',
      phone: '+91 9137487189',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden font-sans selection:bg-[#D4AF37] selection:text-white">
      
      {/* Background decoration - Simplified & Elegant */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-slate-200/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="h-px w-8 bg-[#D4AF37]"></div>
             <p className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase">
                Get Connected
             </p>
             <div className="h-px w-8 bg-[#D4AF37]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-medium font-serif text-slate-900 mb-6">
            How Can We Help You?
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Choose the department that best fits your needs and we'll connect you with the right team.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {inquiryCards.map((card) => {
            const IconComponent = card.icon;
            
            // COLOR LOGIC: Professional Slate & Gold Variants
            const styles = {
                general: {
                    border: 'border-slate-200 hover:border-slate-400',
                    bg: 'bg-white',
                    iconBg: 'bg-slate-50 text-slate-600 group-hover:bg-slate-900 group-hover:text-white',
                    hoverShadow: 'hover:shadow-xl hover:shadow-slate-200/50'
                },
                partnerships: {
                    border: 'border-slate-200 hover:border-[#D4AF37]',
                    bg: 'bg-white',
                    iconBg: 'bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white',
                    hoverShadow: 'hover:shadow-xl hover:shadow-[#D4AF37]/20'
                },
                sales: {
                    border: 'border-slate-200 hover:border-slate-900',
                    bg: 'bg-white',
                    iconBg: 'bg-slate-100 text-slate-800 group-hover:bg-slate-900 group-hover:text-[#D4AF37]',
                    hoverShadow: 'hover:shadow-xl hover:shadow-slate-300/50'
                }
            };
            
            const currentStyle = styles[card.id as keyof typeof styles];

            return (
              <div
                key={card.id}
                className={`${currentStyle.bg} rounded-xl border ${currentStyle.border} ${currentStyle.hoverShadow} transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden`}
              >
                <div className="p-8 h-full flex flex-col">
                  
                  {/* Icon */}
                  <div className={`mb-8 inline-flex items-center justify-center w-14 h-14 rounded-full ${currentStyle.iconBg} transition-all duration-500`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 grow font-light">
                    {card.description}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-4 pt-8 border-t border-slate-100">
                    <div className="group/link">
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Email</p>
                      <a
                        href={`mailto:${card.email}`}
                        className="text-sm font-medium text-slate-800 hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                      >
                        {card.email}
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </a>
                    </div>
                    
                    <div className="group/link">
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Direct Line</p>
                      <a
                        href={`tel:${card.phone}`}
                        className="text-sm font-medium text-slate-800 hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                      >
                        {card.phone}
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InquiryGrid;