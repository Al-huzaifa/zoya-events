"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, MessageCircle, Copy } from "lucide-react";
import { qaDatabase } from "@/data/chatbotKnowledge";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  isTyping?: boolean;
  suggestions?: string[];
}

// Advanced similarity scoring with keyword weighting
const calculateAdvancedSimilarity = (input: string, keywords: string[]): number => {
  const inputLower = input.toLowerCase();
  const inputWords = inputLower.split(/\s+/);
  let score = 0;

  keywords.forEach((keyword) => {
    const keywordLower = keyword.toLowerCase();
    
    // Exact phrase match (highest weight)
    if (inputLower.includes(keywordLower)) {
      score += keywordLower.length * 3;
    }
    
    // Individual word matching (medium weight)
    if (inputWords.some(word => keywordLower.includes(word))) {
      score += keywordLower.length * 1.5;
    }
  });

  return score;
};

// Generate context-aware follow-up questions based on user input
const generateFollowUpQuestions = (userInput: string): string[] => {
  const input = userInput.toLowerCase();
  const followUps: { [key: string]: string[] } = {
    services: [
      "How much does setup cost?",
      "How quickly can you deploy?",
      "Do you handle decoration?",
      "Tell me about customization options",
    ],
    hangar: [
      "What sizes are available?",
      "Can you handle 1000+ guests?",
      "What's the setup timeline?",
      "Do you provide decoration?",
    ],
    price: [
      "What's included in pricing?",
      "Do you have payment plans?",
      "Can you provide a quote?",
      "How do I book?",
    ],
    setup: [
      "Can you rush deployment?",
      "What areas do you service?",
      "Do you include teardown?",
      "What about weather protection?",
    ],
    contact: [
      "How quickly can you respond?",
      "Do you offer 24/7 support?",
      "What's your office location?",
      "Can I get emergency support?",
    ],
    real_estate: [
      "What sizes do you offer?",
      "Can you customize branding?",
      "What's the setup timeline?",
      "Do you handle complete execution?",
    ],
    wedding: [
      "Can you handle 500+ guests?",
      "What decoration services included?",
      "Do you provide lighting and sound?",
      "How far in advance to book?",
    ],
    default: [
      "What services do you offer?",
      "How do I get a quote?",
      "Can I see your portfolio?",
      "What areas do you service?",
    ],
  };

  let category = "default";
  if (input.includes("service") || input.includes("offer")) category = "services";
  else if (input.includes("hangar")) category = "hangar";
  else if (input.includes("price") || input.includes("cost")) category = "price";
  else if (input.includes("setup") || input.includes("deploy")) category = "setup";
  else if (input.includes("contact") || input.includes("phone")) category = "contact";
  else if (input.includes("estate") || input.includes("developer")) category = "real_estate";
  else if (input.includes("wedding") || input.includes("gala")) category = "wedding";

  return followUps[category].sort(() => Math.random() - 0.5).slice(0, 3);
};

const generateClientMessageId = (() => {
  let internalId = 1;
  return () => `zoya-msg-${internalId++}`;
})();

// Find best matching response with fallback responses
const findBotResponse = (userInput: string): string => {
  let bestMatch = null;
  let highestScore = 0;

  qaDatabase.forEach((qa) => {
    const score = calculateAdvancedSimilarity(userInput, qa.keywords);
    if (score > highestScore) {
      highestScore = score;
      bestMatch = qa.answer;
    }
  });

  if (bestMatch) {
    return bestMatch;
  }

  // Intelligent fallback responses
  const fallbackResponses = [
    "That's a great question! For specific details, please contact our team at 9503802865 or email zoyaevent01@gmail.com. We'd love to discuss your requirements! 🎉",
    "I appreciate your interest! Our expert team can provide more detailed guidance. Reach out at 9503802865 for a personalized consultation! 📞",
    "Excellent inquiry! For comprehensive information tailored to your event, contact us directly at 9503802865. Available 24/7! ⏰",
    "Let me connect you with our team for more details - call 9503802865 or visit www.zoyaevent.com! 🌟",
  ];

  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
};

const ZoyaAIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! 👋 Welcome to Zoya Event - Infrastructure For The Elite. I'm your AI Assistant, here to answer all your questions about our premium event infrastructure solutions. What would you like to know? 🎉",
      sender: "bot",
      timestamp: new Date(),
      suggestions: [
        "What services do you offer?",
        "Tell me about German Hangars",
        "How quickly can you setup?",
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent | React.MouseEvent, predefinedText?: string) => {
    e.preventDefault();

    const messageText = predefinedText || inputValue;
    if (!messageText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: generateClientMessageId(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Add typing indicator
    const typingMessage: Message = {
      id: generateClientMessageId(),
      text: "",
      sender: "bot",
      timestamp: new Date(),
      isTyping: true,
    };
    setMessages((prev) => [...prev, typingMessage]);

    // Simulate thinking delay for more natural feel
    setTimeout(() => {
      const botResponse = findBotResponse(messageText);
      const followUpQuestions = generateFollowUpQuestions(messageText);
      
      setMessages((prev) => {
        // Remove typing message and add bot response with suggestions
        const filtered = prev.filter(m => !m.isTyping);
        return [
          ...filtered,
          {
            id: generateClientMessageId(),
            text: botResponse,
            sender: "bot",
            timestamp: new Date(),
            suggestions: followUpQuestions,
          }
        ];
      });
      setIsLoading(false);
    }, 800);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, damping: 20, stiffness: 300 },
    },
    exit: { opacity: 0, y: 20, scale: 0.95 },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      {/* Enhanced Chat Button - Increased z-index to 9999 to avoid navbar collisions */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-9999 p-3 md:p-4 bg-linear-to-br from-yellow-400 to-yellow-500 text-black rounded-full shadow-lg hover:shadow-2xl transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="font-bold" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle size={24} className="font-bold" />
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full"
              ></motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Enhanced Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // FIXED SIZING: Replaced raw 'h-screen' with calculated heights to avoid navbar overlap
            // and adjusted the positioning so it acts gracefully on mobile, tablet, and desktop.
            className="fixed bottom-0 right-0 sm:bottom-24 sm:right-6 md:right-8 w-full sm:w-95 h-[calc(100dvh-80px)] sm:h-150 sm:max-h-[calc(100vh-120px)] bg-linear-to-b from-[#FFFBF0] to-[#F9F5ED] border-t sm:border border-[#D4AF37] border-opacity-60 rounded-t-3xl sm:rounded-2xl shadow-2xl z-9999 flex flex-col overflow-hidden"
          >
            {/* Enhanced Header with stylized ZE Logo */}
            <div className="bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-black p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center border border-yellow-500 shadow-md">
                  <span 
                    className="text-yellow-400 font-extrabold text-lg tracking-tighter" 
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    ZE
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">Zoya Events</h3>
                  <p className="text-xs font-medium opacity-80">AI Assistant</p>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="p-1.5 hover:bg-black hover:bg-opacity-10 rounded-full transition"
              >
                <X size={20} className="font-bold" />
              </motion.button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-linear-to-b from-[#FFFBF0] via-[#F5F1E8] to-[#F9F5ED]">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  {msg.isTyping ? (
                    <div className="flex justify-start">
                      <div className="bg-[#F5F1E8] border border-[#D4AF37] border-opacity-50 rounded-lg rounded-bl-none px-4 py-2 max-w-xs">
                        <div className="flex space-x-2">
                          <motion.div
                            className="w-2 h-2 bg-yellow-400 rounded-full"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 0.6 }}
                          ></motion.div>
                          <motion.div
                            className="w-2 h-2 bg-yellow-400 rounded-full"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                          ></motion.div>
                          <motion.div
                            className="w-2 h-2 bg-yellow-400 rounded-full"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`flex ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-xs px-4 py-3 rounded-lg group relative ${
                          msg.sender === "user"
                            ? "bg-linear-to-r from-[#D4AF37] to-[#F3E779] text-black rounded-br-none"
                            : "bg-white text-[#0a0a0a] border border-[#D4AF37] border-opacity-40 rounded-bl-none"
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">
                          {msg.text}
                        </p>
                        <div className="flex items-center justify-between mt-2 gap-2">
                          <p
                            className={`text-xs ${
                              msg.sender === "user"
                                ? "text-black text-opacity-60"
                                : "text-[#D4AF37] text-opacity-70"
                            }`}
                          >
                            {msg.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                          {msg.sender === "bot" && (
                            <motion.button
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              whileHover={{ scale: 1.1 }}
                              onClick={() => copyToClipboard(msg.text)}
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Copy message"
                            >
                              <Copy size={14} className="text-[#D4AF37]" />
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Dynamic Suggestions Below Bot Messages */}
                  {msg.sender === "bot" && msg.suggestions && msg.suggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex justify-start ml-0 mt-2"
                    >
                      <div className="flex flex-wrap gap-2 max-w-sm">
                        {msg.suggestions.map((suggestion, idx) => (
                          <motion.button
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            onClick={(e) => handleSendMessage(e, suggestion)}
                            className="text-xs px-3 py-1.5 rounded-full bg-[#FFFBF0] hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] transition-all border border-[#D4AF37] border-opacity-50 hover:border-opacity-100 line-clamp-1"
                          >
                            {suggestion}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSendMessage}
              className="border-t border-[#D4AF37] border-opacity-40 p-4 bg-linear-to-t from-[#FFFBF0] to-[#F5F1E8] flex gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything about Zoya Event..."
                className="flex-1 bg-white text-[#0a0a0a] border border-[#D4AF37] border-opacity-40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#D4AF37] focus:border-opacity-100 focus:ring-2 focus:ring-[#D4AF37] focus:ring-opacity-20 transition placeholder-[#0a0a0a] placeholder-opacity-40"
              />
              <motion.button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-linear-to-r from-yellow-400 to-yellow-500 text-black p-2 rounded-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed font-bold"
              >
                <Send size={18} />
              </motion.button>
            </form>

            {/* Footer */}
            <div className="bg-slate-950 border-t border-yellow-400 border-opacity-30 px-4 py-2 text-center">
              <p className="text-xs text-yellow-400 text-opacity-60">
                💡 <span className="text-white text-opacity-70">Powered by AI • </span>
                <a 
                  href="tel:+919503802865" 
                  className="text-yellow-400 hover:text-yellow-300 transition font-semibold"
                >
                  ZOYAEVENTS
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ZoyaAIChatbot;