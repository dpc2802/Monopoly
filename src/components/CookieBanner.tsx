"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on the client side after mount to avoid hydration mismatch
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Small delay so it doesn't aggressively pop up the millisecond the page loads
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
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-[380px] bg-white border border-gray-200 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] rounded-[1.5rem] p-6 z-[100] flex flex-col gap-4"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">🍪</span>
            <h3 className="font-bold text-navy text-sm uppercase tracking-wider">Cookie Preferences</h3>
          </div>
          
          <p className="text-sm text-gray-500 leading-relaxed">
            We use cookies to improve your experience and analyze traffic. Read our{" "}
            <Link href="/privacy-policy" className="text-brand-teal hover:underline font-semibold">
              Privacy Policy
            </Link>{" "}
            to see how we protect your data.
          </p>
          
          <div className="flex gap-3 mt-1">
            <button 
              onClick={handleAccept}
              className="flex-1 bg-navy text-white text-[11px] font-bold uppercase tracking-wider py-3 rounded-xl hover:bg-brand-teal transition-colors shadow-sm"
            >
              Accept All
            </button>
            <button 
              onClick={handleDecline}
              className="flex-1 bg-gray-100 text-gray-600 hover:text-navy text-[11px] font-bold uppercase tracking-wider py-3 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
