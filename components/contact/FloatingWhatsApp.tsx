'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const openWhatsApp = () => {
    const phoneNumber = '919876543210'; // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hi! I\'m interested in learning more about your event services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-linear-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group border border-green-300/50"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-50"></span>
    </button>
  );
};

export default FloatingWhatsApp;
