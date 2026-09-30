"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    text: "We specialise in connecting ambitious highly trained individuals with vital roles in UK businesses that allow you to earn competitive British wages while working remotely from your home country."
  },
  {
    num: "02",
    text: "By aligning your schedule with UK business hours you gain the financial benefits of a global economy without the need to relocate."
  },
  {
    num: "03",
    text: "We work for you. Our mission is to secure positions that require your skills with the compensation you deserve. We handle the search process, vetting top UK employers to ensure you land a role that offers stability and more money in your bank account everyday."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-[#F8F9FA] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Title & Highlight */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-sans font-light text-navy mb-8 tracking-tight leading-tight">
              How It <br className="hidden lg:block"/> Works
            </h2>
            
            <p className="text-xl md:text-2xl font-bold text-brand-teal leading-relaxed">
              At Monopoly Recruitment we are redefining the earning potential and career landscape for bilingual professionals.
            </p>
          </motion.div>

          {/* Right Column: The Steps */}
          <div className="lg:col-span-7 flex flex-col gap-12 lg:gap-16">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Vertical Line Connector (Except last item) */}
                {idx !== steps.length - 1 && (
                  <div className="absolute left-[15px] top-12 bottom-[-4rem] w-[2px] bg-brand-gray-light/20 hidden md:block" />
                )}
                
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
                  {/* Step Number */}
                  <div className="relative z-10 shrink-0">
                    <span className="text-5xl md:text-6xl lg:text-[5rem] font-black text-brand-gray-light/20 group-hover:text-brand-teal transition-colors duration-500 leading-none">
                      {step.num}
                    </span>
                  </div>
                  
                  {/* Step Text */}
                  <div className="pt-2">
                    <p className="text-brand-gray-dark text-[16px] sm:text-lg leading-relaxed font-medium">
                      {step.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
