"use client";

import { motion } from "motion/react";
import styles from "./landing.module.css";
import Reveal from "./Reveal";
import HeartIcon from "../icons-animated/HeartIcon";
import LayersIcon from "../icons-animated/LayersIcon";
import LockIcon from "../icons-animated/LockIcon";
import RefreshIcon from "../icons-animated/RefreshIcon";

const EASE = [0.22, 1, 0.36, 1] as const;

const REASONS = [
  {
    icon: HeartIcon,
    title: "Built for real families",
    text: "Not another productivity tool retrofitted for home. Hest is designed around how households actually live and share.",
  },
  {
    icon: LayersIcon,
    title: "One source of truth",
    text: "Calendar, tasks, meals, and records live together — so nothing slips through the cracks between apps and group chats.",
  },
  {
    icon: LockIcon,
    title: "Private and ad-free",
    text: "Your family's life isn't a product. No ads, no selling your data — just a calm, private space that's yours.",
  },
  {
    icon: RefreshIcon,
    title: "Always in sync",
    text: "Update something once and everyone sees it instantly, on every device. The whole household stays on the same page.",
  },
];

export default function WhyHest() {
  return (
    <section className={`${styles.section} ${styles.sectionDark}`} id="why">
      <div className={styles.wrap}>
        <div className={styles.sectionHead}>
          <Reveal as="span" className={styles.eyebrow}>
            Why Hest
          </Reveal>
          <Reveal as="div">
            <h2 className={styles.sectionTitle}>
              The hearth at the center of{" "}
              <span className={styles.sticker}>your home</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={0.05}>
            <p className={styles.sectionSub}>
              Named for Hestia, goddess of the hearth, Hest is the warm,
              reliable fire that keeps a household running.
            </p>
          </Reveal>
        </div>

        <div className={styles.whyGrid}>
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                className={styles.whyCard}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
              >
                <span className={styles.whyIcon}>
                  <Icon size={26} />
                </span>
                <h3 className={styles.whyTitle}>{r.title}</h3>
                <p className={styles.whyText}>{r.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
