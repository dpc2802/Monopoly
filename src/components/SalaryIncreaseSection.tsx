"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SalaryIncreaseSection() {
  return (
    <section id="salary-increase" className="pt-28 pb-20 lg:pt-36 lg:pb-32 bg-brand-teal overflow-hidden relative z-10 -mt-10">
      <div className="max-w-[1000px] mx-auto px-6 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Main Typographic Lockup */}
          <h2 className="text-white font-sans font-bold uppercase tracking-wide text-xl md:text-3xl mb-2">
            Earn More For The Same Work
          </h2>
          
          <div className="text-white font-sans font-black uppercase text-5xl md:text-7xl lg:text-[6rem] leading-none mb-2 drop-shadow-sm">
            15% – 30% <span className="block text-4xl md:text-6xl lg:text-[4.5rem] mt-2">Average</span>
          </div>
          
          <h3 className="text-white font-sans font-bold uppercase text-3xl md:text-5xl lg:text-6xl mb-4">
            Salary Increase
          </h3>
          
          <h4 className="text-white/90 font-sans font-bold uppercase tracking-wide text-xl md:text-3xl mb-12">
            For Remote UK Roles
          </h4>

          {/* Supporting Paragraph */}
          <p className="text-white text-[16px] md:text-xl leading-relaxed mb-12 font-medium max-w-3xl mx-auto drop-shadow-sm">
            The main reason candidates choose us is straightforward: we value your skills. We match you with UK-based roles that offer a direct 15% to 30% salary increase compared to local market rates—for doing the exact same work, but with significantly better compensation.
          </p>
          
          {/* CTA */}
          <Link 
            href="#contact-form"
            className="inline-flex items-center gap-3 px-10 py-5 bg-navy text-white hover:bg-white hover:text-navy font-bold text-sm tracking-widest uppercase rounded-full transition-all duration-300 group shadow-lg"
          >
            Apply Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}
