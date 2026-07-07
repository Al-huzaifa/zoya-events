"use client";

import dynamic from "next/dynamic";

// Lazy-load the chatbot — heavy component, not needed on first paint
const ZoyaAIChatbot = dynamic(() => import("@/components/ZoyaAIChatbot"), {
  ssr: false,
});

export default function ChatbotWrapper() {
  return <ZoyaAIChatbot />;
}
