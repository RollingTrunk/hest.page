"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import styles from './Layout.module.css';

export default function Header() {
  const [hoveredRect, setHoveredRect] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();
    const itemRect = e.currentTarget.getBoundingClientRect();
    
    setHoveredRect({
      left: itemRect.left - navRect.left,
      width: itemRect.width,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setHoveredRect(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoContainer}>
          <Image src="/hest.svg" alt="Hest Logo" width={40} height={40} />
          <span className={styles.logoText}>Hest</span>
        </Link>
        
        <div className={styles.navContainer}>
          <nav 
            className={styles.nav} 
            ref={navRef}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className={styles.highlighter}
              style={{
                left: hoveredRect.left,
                width: hoveredRect.width,
                opacity: hoveredRect.opacity,
              }}
            />
            <Link href="/" className={styles.navLink} onMouseEnter={handleMouseEnter}>Home</Link>
            <Link href="/support" className={styles.navLink} onMouseEnter={handleMouseEnter}>Support</Link>
            <Link href="/terms" className={styles.navLink} onMouseEnter={handleMouseEnter}>Terms</Link>
            <Link href="/privacy" className={styles.navLink} onMouseEnter={handleMouseEnter}>Privacy</Link>
          </nav>
          <Link href="/#signup" className={styles.headerCta}>Join Beta</Link>
        </div>
      </div>
    </header>
  );
}
