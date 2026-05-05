'use client';

import React from 'react';
import Contact3dhero from '@/components/contact/Contact3dhero';
import InquiryGrid from '@/components/contact/InquiryGrid';
import ContactMapForm from '@/components/contact/ContactMapForm';
import FloatingWhatsApp from '@/components/contact/FloatingWhatsApp';

export default function ContactPage() {
  return (
    <main className="bg-black overflow-hidden">
      <Contact3dhero />
      <InquiryGrid />
      <ContactMapForm />
      <FloatingWhatsApp />
    </main>
  );
}
