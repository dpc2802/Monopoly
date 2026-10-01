"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section id="welcome" className="py-20 lg:py-32 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Image with Premium Touches */}
          <div className="relative">
            {/* Decorative Offset Background */}
            <div className="absolute inset-0 bg-brand-teal/15 rounded-[2rem] transform translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 -z-10 transition-transform duration-500" />
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] lg:aspect-[16/12] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white"
            >
              <Image 
                src="/assets/img/brand-card.jpg" 
                alt="Monopoly Recruitment Brand Identity"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                unoptimized
              />
            </motion.div>
          </div>

          {/* Right Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start text-left lg:pr-8 mt-8 lg:mt-0"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-sans font-light text-brand-teal mb-6 tracking-tight">
              Welcome
            </h2>
            
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-navy mb-6 leading-relaxed">
              Monopoly Recruitment - Where talent meets opportunity - Finding the right role for each person is our aim and increasing your salary is our goal.
            </h3>
            
            <p className="text-gray-500 text-[15px] sm:text-[17px] leading-relaxed mb-10 font-medium">
              At Monopoly Recruitment we believe in a professional approach that cuts through the noise. Whether you are a business who are growing or a professional ready to level up and take advantage of the edge we will provide, we are here to ensure the connection is seamless, strategic and successful.
            </p>
            
            <Link 
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#dbece4] text-[#4a7761] hover:bg-brand-teal hover:text-white font-bold text-sm tracking-wide uppercase rounded-full transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              How it works
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}
