"use client";

import { motion, type Variants } from "motion/react";
import styles from "./landing.module.css";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const word: Variants = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const stick: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

type Props = {
  text: string;
  sticker?: string;
  className?: string;
};

/**
 * Headline as masked words that slide up in sequence. An optional `sticker`
 * word is appended inside an outlined pill (Loop-style), with no clip mask.
 */
export default function SplitWords({ text, sticker, className }: Props) {
  const words = text.split(" ");
  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
      aria-label={sticker ? `${text} ${sticker}` : text}
    >
      {words.map((w, i) => (
        <span key={i} className={styles.wordMask} aria-hidden>
          <motion.span variants={word} style={{ display: "inline-block" }}>
            {w}
            {" "}
          </motion.span>
        </span>
      ))}
      {sticker && (
        <motion.span
          variants={stick}
          style={{ display: "inline-block" }}
          aria-hidden
        >
          <span className={styles.sticker}>{sticker}</span>
        </motion.span>
      )}
    </motion.h1>
  );
}
