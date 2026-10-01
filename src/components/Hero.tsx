"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WorldMapBackground from "./WorldMapBackground";

export default function Hero() {
  return (
    <section id="home" className="relative z-30 flex flex-col items-center justify-start lg:justify-center bg-white overflow-hidden rounded-b-[3.5rem] lg:rounded-b-[4rem] shadow-[0_30px_60px_rgba(11,37,69,0.15)] pt-[90px] md:pt-[100px] pb-24 lg:pb-24 h-auto lg:min-h-[100dvh]">
      
      <WorldMapBackground />
      
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 flex flex-col items-center lg:h-full lg:flex-1">
        
        {/* ========================================= */}
        {/* MOBILE VIEW (Keeps the original 3D design) */}
        {/* ========================================= */}
        <div className="w-full flex flex-col items-center lg:hidden">
          {/* Main Logo (Mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center mt-6 mb-12 text-center z-20"
          >
            <div className="relative flex items-center justify-center w-full max-w-[280px] sm:max-w-[360px]">
              <img 
                src="/assets/img/logo.png" 
                alt="Monopoly Recruitment"
                className="w-full h-auto object-contain scale-[1.5] sm:scale-[1.25] drop-shadow-md"
              />
            </div>
          </motion.div>

          {/* Premium Text Block (The "Grey Card" - Mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative z-20 w-full max-w-[640px] bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] rounded-[2.5rem] p-8 sm:p-10 text-center shadow-[0_24px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-200/80 overflow-hidden"
          >
            {/* Subtle top edge highlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent" />
            
            {/* Subtle colored glow inside the grey card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/40 blur-[80px] rounded-full pointer-events-none" />

            {/* Visual Support: Flags Bridging */}
            <div className="relative z-10 flex flex-nowrap items-center justify-center gap-4 sm:gap-6 mb-8 w-full">
              <motion.div 
                animate={{ y: [-4, 4, -4], rotate: [-1, 1, -1] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative w-24 sm:w-32 shrink-0 mix-blend-multiply flex items-center justify-center"
              >
                <Image src="/assets/img/flag-colombia.png" alt="Colombia Flag" width={200} height={120} className="w-full h-auto object-contain drop-shadow-sm" unoptimized />
              </motion.div>
              
              <div className="relative flex-1 max-w-[80px] sm:max-w-[120px] flex items-center justify-center h-4">
                 <div className="absolute w-full h-[2px] bg-gray-200 rounded-full"></div>
                 <div className="absolute w-full h-full overflow-hidden rounded-full pointer-events-none">
                   <motion.div 
                     className="absolute top-1/2 -translate-y-1/2 w-6 sm:w-10 h-[3px] bg-brand-teal rounded-full shadow-[0_0_12px_#8ECAAD]"
                     animate={{ left: ["-20%", "120%"] }}
                     transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                   />
                 </div>
                 <div className="absolute left-0 w-1.5 h-1.5 rounded-full bg-brand-teal/40"></div>
                 <div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-brand-teal/40"></div>
              </div>
              
              <motion.div 
                animate={{ y: [4, -4, 4], rotate: [1, -1, 1] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative w-24 sm:w-32 shrink-0 mix-blend-multiply flex items-center justify-center"
              >
                <Image src="/assets/img/flag-united-kingdom.png" alt="UK Flag" width={200} height={120} className="w-full h-auto object-contain drop-shadow-sm" unoptimized />
              </motion.div>
            </div>

            {/* Typography */}
            <h2 className="relative z-10 text-xl sm:text-2xl font-bold text-navy leading-snug mb-4">
              Connecting Colombia's bilingual talent <br className="hidden sm:block" />
              with top <span className="text-brand-teal">UK enterprises.</span>
            </h2>
            
            <p className="relative z-10 text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-[500px] mx-auto">
              Access 100% remote job opportunities, work with international teams from home, and elevate your career by joining the UK business market.
            </p>

            <div className="relative z-10 flex justify-center w-full">
              <Link 
                href="#contact-form"
                className="px-8 py-3.5 bg-navy text-white text-[13px] font-bold tracking-[0.15em] uppercase rounded-full shadow-xl hover:bg-brand-teal hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group"
              >
                Apply Now 
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ========================================= */}
        {/* PC VIEW (Fluid clamp-based 100dvh design) */}
        {/* ========================================= */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full hidden lg:flex flex-col items-center justify-center flex-1 h-full"
        >
          {/* Main Logo (Restored to original PNG) */}
          <div 
            className="relative flex items-center justify-center w-full max-w-none"
            style={{ marginTop: 'clamp(30px, 6vh, 60px)', marginBottom: 'clamp(30px, 5vh, 60px)' }}
          >
            <img 
              src="/assets/img/logo.png" 
              alt="Monopoly Recruitment"
              className="w-auto object-contain drop-shadow-md origin-center"
              style={{ height: 'clamp(160px, 22vh, 260px)', transform: 'scale(2.4) translateY(15px)' }}
            />
          </div>

          {/* Minimalist Flags & Original Data Stream Connection */}
          <div 
            className="relative z-20 w-full max-w-[760px] mx-auto bg-gradient-to-b from-gray-100 to-gray-200/80 rounded-[2.5rem] flex flex-col items-center shadow-[0_24px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-300 overflow-hidden"
            style={{ padding: 'clamp(20px, 3vh, 32px) clamp(20px, 4vw, 40px)' }}
          >
            {/* Subtle top edge highlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[3px] bg-gradient-to-r from-transparent via-brand-teal/40 to-transparent" />
            
            <div 
              className="relative z-10 flex items-center justify-center w-full"
              style={{ gap: 'clamp(16px, 2vw, 32px)', marginBottom: 'clamp(16px, 3vh, 28px)' }}
            >
              <img src="/assets/img/flag-colombia.png" alt="Colombia" className="w-[clamp(50px,6vw,75px)] h-auto object-contain mix-blend-multiply drop-shadow-sm" />
              
              <div className="flex flex-col items-center justify-center" style={{ gap: 'clamp(4px, 1vh, 10px)', width: 'clamp(100px, 14vw, 150px)' }}>
                {/* Premium Connectivity Animation (Data Stream) */}
                <div className="relative w-full flex items-center justify-center h-[2px]">
                   <div className="absolute w-full h-[2px] bg-gray-200 rounded-full"></div>
                   <div className="absolute w-full h-full overflow-hidden rounded-full pointer-events-none">
                     <motion.div 
                       className="absolute top-1/2 -translate-y-1/2 w-[clamp(24px,4vw,40px)] h-[3px] bg-brand-teal rounded-full shadow-[0_0_12px_#8ECAAD]"
                       animate={{ left: ["-20%", "120%"] }}
                       transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                     />
                   </div>
                   <div className="absolute left-0 w-1.5 h-1.5 rounded-full bg-brand-teal/40"></div>
                   <div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-brand-teal/40"></div>
                </div>

                <span className="font-bold tracking-[0.2em] text-gray-400 uppercase" style={{ fontSize: 'clamp(8px, 1vh, 9px)' }}>
                  Global Connection
                </span>
              </div>
              
              <img src="/assets/img/flag-united-kingdom.png" alt="UK" className="w-[clamp(50px,6vw,75px)] h-auto object-contain mix-blend-multiply drop-shadow-sm" />
            </div>

            {/* Clean Typography */}
            <h2 className="relative z-10 text-center font-extrabold text-navy leading-[1.15]"
                style={{ fontSize: 'clamp(22px, 3vh + 1vw, 38px)', marginBottom: 'clamp(10px, 1.5vh, 16px)' }}>
              Connecting Colombia's bilingual talent <br />
              <span className="text-brand-teal font-medium">with top UK enterprises.</span>
            </h2>
            
            <p className="relative z-10 text-center text-gray-600 max-w-[660px] mx-auto leading-relaxed"
               style={{ fontSize: 'clamp(12px, 1.6vh, 15px)', marginBottom: 'clamp(16px, 3vh, 32px)' }}>
              Access 100% remote job opportunities, work with international teams from home, 
              and elevate your career by joining the UK workforce.
            </p>

            <Link 
              href="#contact-form"
              className="relative z-10 bg-navy text-white font-bold tracking-[0.2em] uppercase rounded-full shadow-2xl hover:bg-brand-teal hover:shadow-brand-teal/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group"
              style={{ 
                padding: 'clamp(10px, 1.5vh, 14px) clamp(20px, 3vw, 32px)',
                fontSize: 'clamp(10px, 1.2vh, 12px)'
              }}
            >
              Apply Now 
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
