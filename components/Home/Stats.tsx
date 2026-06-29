"use client";

import { motion } from "motion/react";
import styles from "./landing.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { big: "4-in-1", label: "Calendar, tasks, meals & records in one app" },
  { big: "$0", label: "Free to download and get started" },
  { big: "Zero", label: "Ads — and we never sell your data" },
  { big: "Real-time", label: "Sync across every phone in the house" },
];

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={`${styles.wrap} ${styles.statsRow}`}>
        {STATS.map((s, i) => (
          <motion.div
            key={s.big}
            className={styles.statItem}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
          >
            <span className={styles.statBig}>{s.big}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
