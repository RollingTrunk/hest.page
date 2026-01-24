"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import styles from './Layout.module.css';

export default function Header() {
  const [hoveredRect, setHoveredRect] = useState({ left: 0, width: 0, opacity: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

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

          <button 
            className={styles.hamburgerBtn}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <HamburgerMenuIcon width={24} height={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu & Overlay */}
      <div 
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.overlayVisible : ''}`} 
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      <div className={styles.mobileMenu}>
        <div className={styles.mobileMenuHeader}>
          <button 
            className={styles.closeBtn}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <Cross1Icon width={24} height={24} />
          </button>
        </div>
        
        <nav className={styles.mobileNavLinks}>
          <Link href="/" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/support" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Support</Link>
          <Link href="/terms" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Terms</Link>
          <Link href="/privacy" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Privacy</Link>
        </nav>

        <Link href="/#signup" className={styles.mobileCta} onClick={() => setIsMobileMenuOpen(false)}>Join Beta</Link>
      </div>
    </header>
  );
}
