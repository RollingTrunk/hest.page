"use client";

import { motion } from "motion/react";
import styles from "./landing.module.css";
import StoreBadges from "./StoreBadges";
import FlameCanvas from "../ui/FlameCanvas";
import ClientBetaForm from "./ClientBetaForm";
import { FlameMark } from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FinalCta() {
  return (
    <section className={styles.cta} id="download">
      {/* Flame is the living background of the whole section */}
      <FlameCanvas />
      <div className={styles.wrap}>
        <div className={styles.ctaGrid}>
          <motion.div
            className={styles.ctaInner}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className={styles.ctaFlame}>
              <FlameMark style={{ color: "var(--color-cream)" }} />
            </span>
            <h2 className={styles.ctaTitle}>
              Keep your household&apos;s fire burning.
            </h2>
            <p className={styles.ctaSub}>
              Bring your family onto one calm, private home for everything. Free
              to download on iOS and Android.
            </p>
            <div className={styles.ctaBadges}>
              <StoreBadges />
            </div>
          </motion.div>

          <motion.div
            className={styles.ctaNewsletter}
            id="beta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          >
            <h3 className={styles.ctaNewsletterTitle}>Stay in the loop</h3>
            <p className={styles.ctaNewsletterText}>
              Prefer email? Get updates on new features and tips to make the most
              of Hest for your household.
            </p>
            <ClientBetaForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
