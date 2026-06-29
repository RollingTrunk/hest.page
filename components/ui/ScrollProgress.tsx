"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin reading-progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden
      className="scroll-progress"
      style={{ scaleX }}
    />
  );
}
