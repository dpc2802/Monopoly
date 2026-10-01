"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Shield } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-[400px] bg-[#0C1117]/95 backdrop-blur-xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.3)] rounded-3xl p-7 z-[100] flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <Shield size={20} className="text-brand-teal" />
            <h3 className="font-bold text-white text-xs uppercase tracking-[0.2em]">Privacy & Cookies</h3>
          </div>
          
          <p className="text-sm text-gray-400 leading-relaxed">
            We use cookies to improve your experience and analyze our traffic. Read our{" "}
            <Link href="/privacy-policy" className="text-brand-teal hover:text-white transition-colors underline decoration-brand-teal/30 underline-offset-4">
              Privacy Policy
            </Link>{" "}
            to see how we protect your data.
          </p>
          
          <div className="flex gap-3 mt-2">
            <button 
              onClick={handleAccept}
              className="flex-1 bg-brand-teal text-navy text-[10px] font-black uppercase tracking-widest py-3 rounded-xl hover:bg-white transition-colors"
            >
              Accept All
            </button>
            <button 
              onClick={handleDecline}
              className="flex-1 bg-white/5 text-gray-300 hover:text-white text-[10px] font-bold uppercase tracking-widest py-3 rounded-xl hover:bg-white/10 transition-colors border border-white/10"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
