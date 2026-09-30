"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-end md:items-center bg-navy overflow-hidden rounded-b-[2.5rem] lg:rounded-b-[5rem] z-20 shadow-2xl">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 bg-navy">
        
        {/* Mobile Background: Constrained to top 60% of screen to prevent aggressive horizontal cropping */}
        <div className="absolute inset-x-0 top-0 h-[60vh] md:hidden">
          <Image 
            src="/assets/img/hero-laptop.jpg" 
            alt="Modern remote work laptop setup"
            fill
            priority
            quality={100}
            className="object-cover object-[75%_center]"
          />
          {/* Smooth fade to solid navy at the bottom so text is perfectly readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy/10 via-navy/50 to-navy" />
        </div>

        {/* Desktop Background: Full bleed */}
        <div className="hidden md:block absolute inset-0">
          <Image 
            src="/assets/img/hero-laptop.jpg" 
            alt="Modern remote work laptop setup"
            fill
            priority
            quality={100}
            className="object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 bg-navy/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy from-20% via-navy/60 via-65% to-transparent w-full" />
        </div>
      </div>

      {/* MOBILE ONLY: Floating Company Name over the image */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="md:hidden absolute top-28 sm:top-36 left-0 w-full px-6 text-center z-20 pointer-events-none"
      >
        <h2 className="text-white font-sans font-black uppercase tracking-[0.25em] text-[22px] leading-snug drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
          Monopoly<br/>Recruitment
        </h2>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 pt-20 pb-20 md:pb-28 lg:pb-36">
        
        {/* Left Column: Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-[65%] lg:w-[55%] flex flex-col items-center text-center md:items-start md:text-left mt-12 md:mt-16 lg:mt-24 relative z-20"
        >
          {/* DESKTOP ONLY: Company Name (Eyebrow) */}
          <span className="hidden md:block text-brand-teal font-extrabold uppercase tracking-[0.2em] text-sm md:text-base mb-4 drop-shadow-md">
            Monopoly Recruitment
          </span>

          {/* Massive Typography - Sans-serif matching the reference */}
          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-sans font-bold text-white leading-[1.05] tracking-tight mb-6">
            Our <span className="text-brand-teal">Promise</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-lg mb-10 font-sans mx-auto md:mx-0">
            We pride ourselves on being approachable, transparent and incredibly thorough. We will take time to listen, learn and deliver for you an expert service that improves your life.
          </p>

          {/* Solid Buttons matching the reference layout */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full sm:w-auto">
            <Link 
              href="#services" 
              className="w-full sm:w-auto flex items-center justify-center px-10 py-4 bg-brand-teal text-navy font-bold text-[15px] uppercase tracking-wider rounded-full hover:bg-white transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
