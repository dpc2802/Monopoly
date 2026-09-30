"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (latest > 150 && latest > previous && !isMobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { label: "Home", href: "#home", active: true },
    { label: "About Us", href: "#welcome" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Our Services", href: "#services" },
    { label: "Contact Us", href: "#contact-form" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-3 md:top-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-[1100px] z-50 transition-all duration-300 rounded-2xl md:rounded-full ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-3 border border-gray-100" 
          : "bg-white/95 backdrop-blur-lg shadow-md py-4 border border-gray-100"
      }`}
    >
      <div className="px-5 md:px-6 transition-all duration-400 ease-in-out flex items-center justify-between w-full">
        
        {/* Left Side: Real Logo — negative margin lets it breathe without expanding the bar */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link href="#home" className="flex items-center z-10 -my-3">
            <img
              src="/assets/img/logo.png"
              alt="Monopoly Recruitment"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Vertical Divider Line */}
          <div className="hidden lg:block w-[1px] h-7 bg-gray-200 ml-2" />
        </div>

        {/* Premium Mobile Toggle Button */}
        <div className="flex items-center justify-end lg:hidden z-10">
          <button 
            className="flex items-center justify-center p-2.5 bg-gray-50 border border-gray-200 shadow-sm text-navy hover:bg-gray-100 rounded-full transition-all active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
          </button>
        </div>

        {/* Desktop Links Container */}
        <div className="hidden lg:flex items-center justify-end flex-1 pl-4">
          <nav className="flex items-center gap-6 xl:gap-8">
            {links.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="relative text-[12px] xl:text-[13px] font-bold text-navy hover:text-brand-teal transition-colors py-2"
              >
                {link.label}
                {link.active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-teal rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link 
            href="#contact-form"
            className="ml-6 xl:ml-8 px-6 py-2.5 text-[11px] tracking-[0.1em] uppercase font-bold rounded-full bg-navy text-white hover:bg-brand-teal transition-all shadow-sm flex items-center gap-2 group"
          >
            Apply Now 
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      {/* Premium Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[100%] left-0 right-0 mt-3 bg-white/95 backdrop-blur-xl rounded-[1.5rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 lg:hidden flex flex-col p-6 gap-3 overflow-hidden z-50"
          >
            {links.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className={`text-base font-bold pb-4 pt-2 border-b border-gray-100 last:border-0 ${link.active ? "text-brand-teal" : "text-navy hover:text-brand-teal"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="#contact-form"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-navy text-white text-[14px] font-bold tracking-widest uppercase rounded-xl hover:bg-brand-teal transition-colors mt-4 shadow-md"
            >
              Apply Now
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
