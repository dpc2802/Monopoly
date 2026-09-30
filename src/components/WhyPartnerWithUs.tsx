"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhyPartnerWithUs() {
  return (
    <section className="py-24 lg:py-32 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Top Centered Text */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-[4rem] font-sans font-light text-brand-teal mb-8 tracking-tight"
          >
            Why partner with us?
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-3xl font-bold text-navy leading-relaxed"
          >
            We succeed in recruitment because we don&apos;t just match skills to job descriptions, it is about understanding the human element behind every placement.
          </motion.h3>
        </div>

        {/* Panoramic Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl z-10"
        >
          <Image 
            src="/assets/img/why-partner.png" 
            alt="Corporate team working together"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-navy/10" />
        </motion.div>

        {/* Overlapping Bottom Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-20 max-w-5xl mx-auto -mt-16 md:-mt-24 px-4 sm:px-8"
        >
          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[2rem] shadow-[0_20px_50px_rgb(0,0,0,0.08)] flex flex-col md:flex-row items-center gap-10 lg:gap-16 border border-brand-gray-light/10">
            <p className="text-brand-gray-dark text-[15px] sm:text-lg leading-relaxed font-medium md:flex-1 text-center md:text-left">
              Over years we have built a reputation for excellence by consistently delivering high-impact results for both our clients and our candidates. We don&apos;t just fill vacancies - we add essential elements to build winning teams - this in turn drives growth as we all know.
            </p>
            
            <div className="md:shrink-0">
              <Link 
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-5 bg-navy text-white hover:bg-brand-teal font-bold text-sm tracking-widest uppercase rounded-full transition-all duration-300 group shadow-xl"
              >
                Find out more
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
