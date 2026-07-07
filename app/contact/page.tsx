'use client';

import React from 'react';
import Contact3dhero from '@/components/contact/Contact3dhero';
import InquiryGrid from '@/components/contact/InquiryGrid';
import ContactMapForm from '@/components/contact/ContactMapForm';

export default function ContactPage() {
  return (
    <main className="bg-[#F5F1E8] overflow-hidden">
      <Contact3dhero />
      <InquiryGrid />
      <ContactMapForm />
    </main>
  );
}

