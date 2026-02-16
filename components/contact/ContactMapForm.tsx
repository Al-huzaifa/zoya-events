"use client";

import React, { useState } from 'react';
import { Send, Loader2, Star, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // --- UPDATED: Connect to SheetMonkey ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 1. Validate
    if (!validateForm()) return;
    
    setIsLoading(true);

    try {
      // 2. Send Data to SheetMonkey
      const response = await fetch("https://api.sheetmonkey.io/form/cGSLF4Dg8LinMSp6wha7Rx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          "Created At": new Date().toLocaleString(), // Adds a timestamp
          "Source": "Contact Page" // Tells you which form they used
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setErrors({ submit: 'Submission failed. Please try again.' });
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors({ submit: 'Network error. Please check your connection.' });
    } finally {
      setIsLoading(false);
    }
  };

  // "Why Inquiry?" features
  const privileges = [
    { icon: Zap, title: 'Priority Access', content: 'Inquiries via this secure form skip the general queue.' },
    { icon: Star, title: 'Director Oversight', content: 'Projects are reviewed directly by senior management.' },
    { icon: ShieldCheck, title: 'NDA Compliant', content: 'Your project details remain strictly confidential.' },
  ];

  return (
    <section className="relative w-full py-24 bg-slate-50 border-t border-slate-200 overflow-hidden font-sans">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#D4AF37]/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.3em] uppercase">
                Secure Communication
              </span>
              <div className="h-px w-8 bg-[#D4AF37]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 mb-6">
            Start a <span className="italic text-[#D4AF37]">Conversation.</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Tell us about your vision. Our team is ready to engineer the extraordinary.
          </p>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-stretch rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
          
          {/* --- LEFT COL: THE "PROMISE" & VISUAL --- */}
          <div className="relative p-10 md:p-14 text-white flex flex-col justify-between overflow-hidden min-h-[600px] bg-slate-900">
            
            {/* 1. BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                <img 
                 src="/images/placeholder-office.jpg" // Ensure this image path is correct in your project
                 alt="Zoya Events Excellence" 
                 className="w-full h-full object-cover opacity-60"
               />
               {/* Gradient Overlay for Text Readability */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/40"></div>
            </div>
            
             {/* Decorative Gold Line */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-transparent z-20"></div>

            <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">The Zoya Standard.</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-12 max-w-md">
                   When you partner with us, you aren't just hiring an agency; you are deploying a task force dedicated to perfection.
                </p>

                {/* PRIVILEGE LIST */}
                <div className="space-y-8">
                    {privileges.map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 shrink-0">
                                <item.icon size={18} strokeWidth={2} />
                            </div>
                            <div>
                                <h4 className="text-xs text-[#D4AF37] uppercase tracking-widest font-bold mb-1">{item.title}</h4>
                                <p className="text-white/80 font-light text-sm leading-relaxed">{item.content}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Callout */}
            <div className="relative z-10 mt-12 lg:mt-0 pt-8 border-t border-white/10">
               <div className="flex items-center gap-4">
                  <div className="text-3xl font-serif text-white">13+</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-400">
                     Years of <br /> Excellence
                  </div>
                  <div className="h-8 w-px bg-white/20 mx-2"></div>
                  <div className="text-3xl font-serif text-white">100+</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-400">
                     Corporate <br /> Clients
                  </div>
               </div>
            </div>
          </div>

          {/* --- RIGHT COL: FORM --- */}
          <div className="bg-white p-10 md:p-14 relative">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-serif text-slate-900">Project Brief</h3>
                <ArrowRight className="text-[#D4AF37]" size={24} />
             </div>

             <AnimatePresence mode='wait'>
             {submitted ? (
                <motion.div 
                   key="success"
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   className="bg-green-50 border border-green-100 p-8 rounded-2xl text-center flex flex-col items-center justify-center h-[400px]"
                >
                   <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 shadow-sm">
                      <Send size={32} strokeWidth={1.5} />
                   </div>
                   <h4 className="text-green-900 font-serif text-2xl font-bold mb-2">Message Transmitted.</h4>
                   <p className="text-green-700 text-sm">Our team is reviewing your brief.</p>
                </motion.div>
             ) : (
                <motion.form 
                   key="form"
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                   onSubmit={handleSubmit} className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest ml-1">Name *</label>
                        <input
                           type="text"
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           className={`w-full bg-slate-50 border ${errors.name ? 'border-red-300 bg-red-50/50' : 'border-slate-200 focus:border-[#D4AF37] focus:bg-white'} rounded-xl px-4 py-3.5 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400`}
                           placeholder="Full Name"
                        />
                        {errors.name && <p className="text-red-500 text-[10px]">{errors.name}</p>}
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest ml-1">Phone *</label>
                        <input
                           type="tel"
                           name="phone"
                           value={formData.phone}
                           onChange={handleChange}
                           className={`w-full bg-slate-50 border ${errors.phone ? 'border-red-300 bg-red-50/50' : 'border-slate-200 focus:border-[#D4AF37] focus:bg-white'} rounded-xl px-4 py-3.5 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400`}
                           placeholder="+91..."
                        />
                        {errors.phone && <p className="text-red-500 text-[10px]">{errors.phone}</p>}
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest ml-1">Email *</label>
                     <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-slate-50 border ${errors.email ? 'border-red-300 bg-red-50/50' : 'border-slate-200 focus:border-[#D4AF37] focus:bg-white'} rounded-xl px-4 py-3.5 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400`}
                        placeholder="john@company.com"
                     />
                     {errors.email && <p className="text-red-500 text-[10px]">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest ml-1">Subject *</label>
                     <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full bg-slate-50 border ${errors.subject ? 'border-red-300 bg-red-50/50' : 'border-slate-200 focus:border-[#D4AF37] focus:bg-white'} rounded-xl px-4 py-3.5 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400`}
                        placeholder="Project Inquiry / Partnership"
                     />
                     {errors.subject && <p className="text-red-500 text-[10px]">{errors.subject}</p>}
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest ml-1">Message *</label>
                     <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full bg-slate-50 border ${errors.message ? 'border-red-300 bg-red-50/50' : 'border-slate-200 focus:border-[#D4AF37] focus:bg-white'} rounded-xl px-4 py-3.5 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400 resize-none`}
                        placeholder="Tell us about your project requirements..."
                     />
                     {errors.message && <p className="text-red-500 text-[10px]">{errors.message}</p>}
                  </div>

                  <button
                     type="submit"
                     disabled={isLoading}
                     className="w-full bg-slate-900 text-white font-bold uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-[#D4AF37] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#D4AF37]/20 disabled:opacity-70 disabled:cursor-not-allowed mt-6"
                  >
                     {isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : <><Send className="w-4 h-4" /> Send Securely</>}
                  </button>
                  {errors.submit && (
                     <p className="text-red-500 text-xs text-center mt-2">{errors.submit}</p>
                  )}
                </motion.form>
             )}
             </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;