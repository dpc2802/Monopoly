"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 bottom-0 w-1 bg-black/5 z-50">
      <motion.div
        className="w-full bg-brand-green origin-top shadow-[0_0_10px_rgba(222,238,209,0.6)]"
        style={{ scaleY, height: "100%" }}
      />
    </div>
  );
}
