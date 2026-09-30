"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Expert Matching",
    text: "We leverage deep industry knowledge to connect top-tier professionals with roles where they will truly thrive.",
    image: "/assets/img/value-expert.png",
  },
  {
    title: "Career Growth",
    text: "Our focus is on long-term trajectory. We prioritize placements that offer substantial salary increases and advancement.",
    image: "/assets/img/value-growth.png",
  },
  {
    title: "Trust & Excellence",
    text: "Transparency and rigorous vetting ensure that every placement is a seamless, strategic fit for both sides.",
    image: "/assets/img/value-trust.png",
  }
];

export default function ValueProp() {
  return (
    <section className="py-24 lg:py-32 bg-[#F8F9FA]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-navy tracking-tight"
          >
            TALENT. <span className="text-brand-teal">OPPORTUNITY.</span> SUCCESS.
          </motion.h2>
        </div>

        {/* Premium Feature Cards Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-brand-gray-light/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[3/2] overflow-hidden bg-brand-gray-light/10">
                <Image 
                  src={feature.image} 
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                {/* Subtle gradient overlay to make it look premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Text Content Padded Area */}
              <div className="p-8 lg:p-10 flex flex-col flex-grow relative">
                <h3 className="text-xl lg:text-[22px] font-extrabold text-brand-teal mb-4 pr-8">
                  {feature.title}
                </h3>
                <p className="text-brand-gray-dark leading-relaxed font-medium text-[15px]">
                  {feature.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
