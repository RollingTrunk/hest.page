"use client";

import { motion } from "motion/react";
import styles from "./landing.module.css";
import Reveal from "./Reveal";
import StarIcon from "../icons-animated/StarIcon";

const EASE = [0.22, 1, 0.36, 1] as const;

// Real quotes featured in Hest's App Store listing.
const REVIEWS = [
  {
    quote:
      "Very polished. If the goal was a sleek interface — mission accomplished!",
    name: "App Store review",
    role: "Verified download",
    initial: "★",
  },
  {
    quote:
      "First impressions: I love how seamless the setup and integration was.",
    name: "App Store review",
    role: "Verified download",
    initial: "★",
  },
];

export default function Reviews() {
  return (
    <section className={styles.section} id="reviews">
      <div className={styles.wrap}>
        <div className={styles.sectionHead}>
          <Reveal as="span" className={styles.eyebrow}>
            Loved by early households
          </Reveal>
          <Reveal as="div">
            <h2 className={styles.sectionTitle}>
              First impressions that{" "}
              <span className={styles.sticker}>stuck</span>
            </h2>
          </Reveal>
        </div>

        <div className={styles.reviewGrid}>
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={i}
              className={styles.reviewCard}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.1 }}
            >
              <span className={styles.stars} aria-hidden>
                {[0, 1, 2, 3, 4].map((s) => (
                  <StarIcon key={s} className={styles.starIcon} />
                ))}
              </span>
              <blockquote className={styles.reviewQuote}>
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className={styles.reviewMeta}>
                <span className={styles.reviewAvatar}>{r.initial}</span>
                <span>
                  <span className={styles.reviewName}>{r.name}</span>
                  <br />
                  <span className={styles.reviewRole}>{r.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}

          <motion.div
            className={styles.reviewInvite}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.2 }}
          >
            <h3 className={styles.reviewInviteTitle}>
              Your household could be next.
            </h3>
            <p className={styles.reviewInviteText}>
              Download Hest free and bring everyone onto the same page today.
            </p>
            <a href="#download" className={styles.reviewInviteLink}>
              Get the app →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
