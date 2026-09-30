"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp, ShieldCheck } from "lucide-react";

const keyPoints = [
  {
    title: "Your Success is Our Success",
    text: "We focus on long-term career placement, not just temporary employment.",
    icon: TrendingUp,
  },
  {
    title: "Zero Barrier to entry",
    text: "It is completely free to join our network.",
    icon: ShieldCheck,
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Text Content & Points */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-brand-teal rounded-full" />
              <span className="text-brand-teal font-bold uppercase tracking-widest text-sm">Our Advantage</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-sans font-light text-white mb-6 tracking-tight leading-[1.1]">
              Why Choose Us?
            </h2>
            
            <h3 className="text-xl md:text-2xl font-bold text-[#dbece4] mb-6 leading-relaxed">
              We bridge the gap between world class talent and industry needs.
            </h3>
            
            <p className="text-brand-gray-light text-[15px] sm:text-[17px] leading-relaxed mb-4 font-medium">
              We are proud to be the fastest growing recruitment agency in this sector, our rapid expansion is a testament to the fantastic opportunities we provide to our candidates every single day.
            </p>
            <p className="text-brand-gray-light text-[15px] sm:text-[17px] leading-relaxed mb-10 font-medium">
              If you would like to elevate your career and earning potential join us, your future starts here.
            </p>

            {/* Key Points Clean List */}
            <div className="flex flex-col gap-6 w-full mt-4">
              {keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-brand-teal flex items-center justify-center shrink-0">
                    <point.icon size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{point.title}</h4>
                    <p className="text-brand-gray-light font-medium text-[15px] leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Clean Portrait Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5"
          >
            <Image 
              src="/assets/img/why-choose-us.png"
              alt="Professional candidate"
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
