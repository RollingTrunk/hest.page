"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import styles from "./landing.module.css";
import Reveal from "./Reveal";
import { PlusIcon } from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;

const FAQS = [
  {
    q: "Is Hest free?",
    a: "Yes, Hest is free to download on the App Store and Google Play, and you can set up your household and start organizing right away.",
  },
  {
    q: "Which devices does Hest work on?",
    a: "Hest runs on both iPhone and Android. Everything syncs in real time, so updates from one person show up instantly for everyone in the household.",
  },
  {
    q: "Can my whole household use it together?",
    a: "Absolutely. Hest is built for shared life — invite the people you live with and share calendars, tasks, meal plans, and records as a household.",
  },
  {
    q: "Is my family's data private?",
    a: "Privacy is core to Hest. There are no ads and we don't sell your data. Your household's information stays a private, calm space that belongs to you.",
  },
  {
    q: "What can I actually keep in Hest?",
    a: "Shared calendars and events, assignable tasks and chores, weekly meal plans with a recipe library, and important household records like warranties and receipts.",
  },
  {
    q: "What happened to the robot mascot?",
    a: "Hest has a new flame-H logo inspired by Hestia, the Greek goddess of the hearth. You can read the full story on our blog — the app you love is exactly the same underneath.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`${styles.section} ${styles.sectionAlt}`} id="faq">
      <div className={`${styles.wrap} ${styles.faqLayout}`}>
        <div className={styles.faqIntro}>
          <Reveal as="span" className={styles.eyebrow}>
            FAQ
          </Reveal>
          <Reveal as="div">
            <h2 className={styles.sectionTitle}>
              Questions, <span className={styles.sticker}>answered</span>
            </h2>
          </Reveal>
          <Reveal as="div" delay={0.05}>
            <p className={styles.sectionSub} style={{ textAlign: "inherit" }}>
              Everything you need to know before you bring your household onto
              Hest.
            </p>
          </Reveal>
        </div>

        <div className={styles.faqList}>
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="div" key={item.q} delay={i * 0.04}>
                <div
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <span
                      className={`${styles.faqToggle} ${isOpen ? styles.faqToggleOpen : ""}`}
                    >
                      <PlusIcon width={16} height={16} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className={styles.faqAnswer}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                      >
                        <p className={styles.faqAnswerInner}>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
