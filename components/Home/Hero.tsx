"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "./landing.module.css";
import StoreBadges from "./StoreBadges";
import SplitWords from "./SplitWords";
import BlurText from "../reactbits/BlurText";
import StarIcon from "../icons-animated/StarIcon";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Device sits low so its lower edge tucks under the marquee, then drifts up
  // gently as the hero scrolls away (kept positive so it stays tucked).
  const phoneY = useTransform(scrollYProgress, [0, 1], [62, 24]);

  return (
    <section className={styles.hero} id="top" ref={ref}>
      <div className={`${styles.wrap} ${styles.heroGrid}`}>
        <div className={styles.heroContent}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            Now on iOS &amp; Android
          </motion.span>

          <SplitWords
            className={styles.heroTitle}
            text="Bring your household"
            sticker="together."
          />

          <BlurText
            className={styles.heroSub}
            text="Hest keeps your family's calendar, tasks, meals, and records in sync and beautifully organized, completely private, and free of ads."
            delay={40}
          />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
          >
            <StoreBadges />
          </motion.div>

          <motion.div
            className={styles.heroProof}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
          >
            <span className={styles.stars} aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} className={styles.starIcon} />
              ))}
            </span>
            <span className={styles.heroProofText}>
              <b>&ldquo;Mission accomplished!&rdquo;</b> — a sleek, polished
              home for everything.
            </span>
          </motion.div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroBlobClip} aria-hidden>
            <div className={styles.heroBlob2} aria-hidden>
              <svg
                viewBox="-200 -200 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="heroLines"
                    width="13"
                    height="13"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(45)"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="13"
                      stroke="#3A6B8A"
                      strokeWidth="1.6"
                      opacity="0.35"
                    />
                  </pattern>
                </defs>
                <path
                  d="M138,-150.4C175.6,-128.4,200.6,-83.2,205.4,-37.1C210.2,9,194.8,56,168.6,94.2C142.4,132.4,105.4,161.8,62.9,178.6C20.4,195.4,-27.6,199.6,-71.9,185.4C-116.2,171.2,-156.8,138.6,-178.6,97.1C-200.4,55.6,-203.4,5.2,-191.6,-40.1C-179.8,-85.4,-153.2,-125.6,-117.1,-148.4C-81,-171.2,-35.4,-176.6,9.6,-189.2C54.6,-201.8,100.4,-172.4,138,-150.4Z"
                  fill="#3A6B8A"
                  opacity="0.16"
                />
                <path
                  d="M138,-150.4C175.6,-128.4,200.6,-83.2,205.4,-37.1C210.2,9,194.8,56,168.6,94.2C142.4,132.4,105.4,161.8,62.9,178.6C20.4,195.4,-27.6,199.6,-71.9,185.4C-116.2,171.2,-156.8,138.6,-178.6,97.1C-200.4,55.6,-203.4,5.2,-191.6,-40.1C-179.8,-85.4,-153.2,-125.6,-117.1,-148.4C-81,-171.2,-35.4,-176.6,9.6,-189.2C54.6,-201.8,100.4,-172.4,138,-150.4Z"
                  fill="url(#heroLines)"
                />
              </svg>
            </div>
            <div className={styles.heroBlob} aria-hidden>
              <svg
                viewBox="-200 -200 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="heroDots"
                    width="14"
                    height="14"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="2.2"
                      cy="2.2"
                      r="1.5"
                      fill="#8B311E"
                      opacity="0.22"
                    />
                  </pattern>
                </defs>
                <path
                  d="M120,-154.6C152.4,-134.8,173.2,-95.6,180.4,-55.1C187.6,-14.6,181.2,27.2,163.4,62.4C145.6,97.6,116.4,126.2,82.1,144.6C47.8,163,8.4,171.2,-29.6,166.4C-67.6,161.6,-104.2,143.8,-131.6,116.4C-159,89,-177.2,52,-182.6,12.7C-188,-26.6,-180.6,-68.2,-159.6,-99.6C-138.6,-131,-104,-152.2,-69.1,-169.4C-34.2,-186.6,1,-199.8,33.6,-191.4C66.2,-183,87.6,-174.4,120,-154.6Z"
                  fill="#FFD9C9"
                />
                <path
                  d="M120,-154.6C152.4,-134.8,173.2,-95.6,180.4,-55.1C187.6,-14.6,181.2,27.2,163.4,62.4C145.6,97.6,116.4,126.2,82.1,144.6C47.8,163,8.4,171.2,-29.6,166.4C-67.6,161.6,-104.2,143.8,-131.6,116.4C-159,89,-177.2,52,-182.6,12.7C-188,-26.6,-180.6,-68.2,-159.6,-99.6C-138.6,-131,-104,-152.2,-69.1,-169.4C-34.2,-186.6,1,-199.8,33.6,-191.4C66.2,-183,87.6,-174.4,120,-154.6Z"
                  fill="url(#heroDots)"
                />
              </svg>
            </div>
          </div>
          <motion.div
            className={styles.heroPhone}
            style={{ y: phoneY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          >
            <Image
              src="/hero-phone.png"
              alt="The Hest app open on an iPhone, showing a household record"
              width={1069}
              height={1919}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
