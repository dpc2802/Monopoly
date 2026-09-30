"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function UkSpecialists() {
  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Title & CTA (Sticky) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-sans font-light text-white mb-10 tracking-tight leading-[1.05]">
              UK <br className="hidden lg:block"/> Recruitment <br className="hidden lg:block"/> Specialists
            </h2>
            
            <div className="hidden lg:block mt-12">
              <Link 
                href="#vacancies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-teal text-navy hover:bg-white font-bold text-sm tracking-widest uppercase rounded-full transition-all duration-300 group"
              >
                Our Vacancies
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Highlight & Body Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="pl-6 md:pl-8 border-l-[3px] border-brand-teal mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                The UK job market is dynamic and has a large demand for bilingual professionals - this is exactly where we thrive.
              </h3>
            </div>
            
            <div className="space-y-8 text-brand-gray-light text-[17px] sm:text-[19px] leading-relaxed font-medium">
              <p>
                Our expertise lies in navigating the complexities of the British employment landscape. From the bustling tech hubs of London to the ever expanding online business sector, we possess the local market intelligence and extensive networks so you can upgrade your wage, working English hours and increasing the money you make for the hard work you do.
              </p>
              <p>
                That is the whole principal we were founded on. At the same time we can provide the team members that UK business needs.
              </p>
            </div>
            
            {/* Mobile CTA Button (Hidden on Desktop) */}
            <div className="mt-12 lg:hidden block">
              <Link 
                href="#vacancies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-teal text-navy hover:bg-white font-bold text-sm tracking-widest uppercase rounded-full transition-all duration-300 group"
              >
                Our Vacancies
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
