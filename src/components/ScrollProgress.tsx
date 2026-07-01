"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-secondary via-accent to-secondary"
      />
      <motion.div
        aria-hidden
        style={{ scaleX, opacity: 0.35 }}
        className="fixed inset-x-0 top-0 z-[59] h-[8px] origin-left blur-[4px] bg-gradient-to-r from-secondary via-accent to-secondary"
      />
    </>
  );
}
