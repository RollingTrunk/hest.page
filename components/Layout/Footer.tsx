"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Layout.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Link href="/" className={styles.logoContainer}>
          <Image src="/hest.svg" alt="Hest Logo" width={40} height={40} />
        </Link>
        
        <div className={styles.footerLinks}>
          <Link href="/support" className={styles.navLink}>Support</Link>
          <Link href="/terms" className={styles.navLink}>Terms</Link>
          <Link href="/privacy" className={styles.navLink}>Privacy</Link>
        </div>
        
        <p className={styles.footerText}>
          &copy; {currentYear} Hest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
