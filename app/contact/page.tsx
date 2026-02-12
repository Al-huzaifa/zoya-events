'use client';

import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import InquiryGrid from '@/components/contact/InquiryGrid';
import ContactMapForm from '@/components/contact/ContactMapForm';
import FloatingWhatsApp from '@/components/contact/FloatingWhatsApp';

export default function ContactPage() {
  return (
    <main className="bg-black overflow-hidden">
      <ContactHero />
      <InquiryGrid />
      <ContactMapForm />
      <FloatingWhatsApp />
    </main>
  );
}
