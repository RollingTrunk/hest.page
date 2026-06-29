"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import styles from "./landing.module.css";
import { LockIcon, NoAdsIcon, SyncIcon, DevicesIcon, HeartIcon } from "./icons";

const ITEMS = [
  { icon: LockIcon, label: "Private by design" },
  { icon: NoAdsIcon, label: "Ad-free, always" },
  { icon: SyncIcon, label: "Real-time sync" },
  { icon: DevicesIcon, label: "iOS & Android" },
  { icon: HeartIcon, label: "Free to download" },
];

export default function TrustStrip() {
  return (
    <div className={styles.trust}>
      <motion.div
        className={`${styles.wrap} ${styles.trustRow}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        {ITEMS.map(({ icon: Icon, label }, i) => (
          <Fragment key={label}>
            {i > 0 && <span className={styles.trustDivider} aria-hidden />}
            <span className={styles.trustItem}>
              <Icon />
              {label}
            </span>
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
}
