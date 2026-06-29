"use client";

import styles from "./landing.module.css";
import { FlameMark } from "./icons";

const PHRASES = [
  "a calm home for everything",
  "your household, in sync",
  "shared, not scattered",
  "the fire that keeps a home running",
];

export default function Marquee() {
  // Duplicated track so the CSS translateX(-50%) loop is seamless.
  const items = [...PHRASES, ...PHRASES];
  return (
    <div className={styles.marquee} aria-hidden>
      <div className={styles.marqueeTrack}>
        {items.map((p, i) => (
          <span key={i} className={styles.marqueeItem}>
            <FlameMark className={styles.marqueeFlame} />
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
