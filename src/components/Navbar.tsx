"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Determine if scrolled for styling
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Auto-hide logic
    if (latest > 150 && latest > previous && !isMobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { label: "Home", href: "#home" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Our Services", href: "#services" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled 
          ? "bg-navy/95 backdrop-blur-md shadow-lg border-b border-white/10" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 lg:py-5 transition-all duration-400 ease-in-out grid grid-cols-3 lg:flex lg:items-center lg:justify-between">
        
        {/* Mobile Spacer (Balances the grid for perfect centering) */}
        <div className="lg:hidden flex items-center justify-start" />

        {/* Logo - Perfectly Centered on Mobile, Left on Desktop */}
        <div className="flex items-center justify-center lg:justify-start">
          <Link href="#home" className="relative flex items-center h-[40px] sm:h-[50px] lg:h-[75px] z-10">
            {/* Top subtle glow detail for mobile */}
            <div className="absolute inset-0 bg-white/10 blur-[20px] rounded-full lg:hidden" />
            <Image 
              src="/assets/img/logo-cropped.png" 
              alt="Monopoly Recruitment" 
              width={300} 
              height={150} 
              className="w-auto h-full object-contain brightness-0 invert drop-shadow-md transition-transform duration-300 hover:scale-105"
              priority
            />
          </Link>
        </div>

        {/* Mobile Toggle - Cleanly on the right */}
        <div className="flex items-center justify-end lg:hidden z-10">
          <button 
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Desktop Links - Pure white text for the dark theme */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="text-[15px] font-medium text-white/90 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="#apply"
            className="ml-2 px-6 py-2.5 text-xs tracking-wider uppercase font-bold rounded-full border border-white/30 text-white hover:bg-white hover:text-navy transition-all"
          >
            Apply Now
          </Link>
        </nav>

      </div>

      {/* Premium Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[100%] left-4 right-4 mt-2 bg-navy/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 lg:hidden flex flex-col p-6 gap-2 overflow-hidden z-50"
          >
            {links.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="text-lg font-medium text-white/90 hover:text-white border-b border-white/5 pb-4 pt-2 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="#apply"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-6 py-4 bg-white text-navy text-[15px] font-bold rounded-xl hover:bg-brand-teal transition-colors mt-4"
            >
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
