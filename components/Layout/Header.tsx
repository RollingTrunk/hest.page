"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import styles from "./Layout.module.css";

export default function Header() {
  const [hoveredRect, setHoveredRect] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
    // Cleanup on unmount
    return () => {
      document.body.classList.remove("mobile-menu-open");
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
    setHoveredRect((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoContainer} aria-label="Hest home">
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
            <Link
              href="/#features"
              className={styles.navLink}
              onMouseEnter={handleMouseEnter}
            >
              Features
            </Link>
            <Link
              href="/#why"
              className={styles.navLink}
              onMouseEnter={handleMouseEnter}
            >
              Why Hest
            </Link>
            <Link
              href="/#reviews"
              className={styles.navLink}
              onMouseEnter={handleMouseEnter}
            >
              Reviews
            </Link>
            <Link
              href="/#faq"
              className={styles.navLink}
              onMouseEnter={handleMouseEnter}
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className={styles.navLink}
              onMouseEnter={handleMouseEnter}
            >
              Blog
            </Link>
          </nav>
          <Link href="/#download" className={styles.headerCta}>
            Get the app
          </Link>

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
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.overlayVisible : ""}`}
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
          <Link
            href="/#features"
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/#why"
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Why Hest
          </Link>
          <Link
            href="/#reviews"
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reviews
          </Link>
          <Link
            href="/#faq"
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/support"
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Support
          </Link>
        </nav>

        <Link
          href="/#download"
          className={styles.mobileCta}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Get the app
        </Link>
      </div>
    </header>
  );
}
