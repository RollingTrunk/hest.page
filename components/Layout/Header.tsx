import Link from 'next/link';
import Image from 'next/image';
import styles from './Layout.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoContainer}>
          <Image src="/hest.svg" alt="Hest Logo" width={40} height={40} />
          <span className={styles.logoText}>Hest</span>
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/support" className={styles.navLink}>Support</Link>
          <Link href="/terms" className={styles.navLink}>Terms</Link>
          <Link href="/privacy" className={styles.navLink}>Privacy</Link>
          <Link href="/#signup" className={styles.headerCta}>Join Beta</Link>
        </nav>
      </div>
    </header>
  );
}
