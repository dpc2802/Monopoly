"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCta() {
  return (
    <section id="contact" className="relative py-32 lg:py-48 bg-navy overflow-hidden">
      
      {/* High-end Architectural Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/img/contact-bg.png"
          alt="Modern corporate architecture"
          fill
          className="object-cover opacity-30"
          unoptimized
        />
        {/* Gradients for readability and seamless fading */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/80" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 lg:gap-12">
          
          {/* Left Side: Massive Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-brand-teal rounded-full" />
              <span className="text-brand-teal font-bold uppercase tracking-widest text-sm">Take The Next Step</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-sans font-light text-white mb-8 tracking-tight leading-[1]">
              Let&apos;s Get <br className="hidden md:block"/> To Work.
            </h2>
            
            <h3 className="text-xl md:text-3xl font-bold text-white leading-relaxed max-w-2xl">
              Are you ready to find your next top-tier hire or are you looking to take the next step in your career?
            </h3>
          </motion.div>

          {/* Right Side: Supporting Text & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md lg:text-right flex flex-col items-start lg:items-end"
          >
            <p className="text-brand-gray-light text-lg md:text-xl leading-relaxed mb-10 font-medium">
              We&apos;ve helped hundreds of our partners and businesses in Colombia and the UK - let&apos;s see what we can achieve together.
            </p>
            
            <Link 
              href="#contact-form"
              className="inline-flex items-center gap-4 px-12 py-6 bg-brand-teal text-navy hover:bg-white font-bold text-sm md:text-base tracking-widest uppercase rounded-full transition-all duration-300 group shadow-[0_0_30px_rgba(125,191,160,0.3)] hover:scale-105"
            >
              Contact Us
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
