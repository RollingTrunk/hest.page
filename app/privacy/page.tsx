import styles from './privacy.module.css';

export default function PrivacyPage() {
  return (
    <main className={styles.privacyContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated at: January 23, 2026</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Introduction</h2>
        <p className={styles.text}>
          Rolling Trunk LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Hest.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
        <p className={styles.text}>
          We collect information that you provide directly to us when you register for an account, subscribe to our newsletter, or communicate with us. This may include:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Name and contact information (such as email address)</li>
          <li className={styles.listItem}>Account credentials</li>
          <li className={styles.listItem}>Profile information</li>
          <li className={styles.listItem}>Communications with us</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
        <p className={styles.text}>
          We use the information we collect to:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Provide, maintain, and improve our services</li>
          <li className={styles.listItem}>Process transactions and send related information</li>
          <li className={styles.listItem}>Send you technical notices, updates, and security alerts</li>
          <li className={styles.listItem}>Respond to your comments and questions</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Sharing of Information</h2>
        <p className={styles.text}>
          We do not share your personal information with third parties except as described in this Privacy Policy:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>With vendor, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
          <li className={styles.listItem}>In response to a request for information if we believe disclosure is in accordance with any applicable law or regulation</li>
          <li className={styles.listItem}>If we believe your actions are inconsistent with our user agreements or policies</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Data Security</h2>
        <p className={styles.text}>
          We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Your Choices</h2>
        <p className={styles.text}>
          You may update or correct your account information at any time by logging into your account or emailing us. You can also opt out of receiving promotional communications from us by following the instructions in those communications.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Contact Us</h2>
        <p className={styles.text}>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className={styles.text}>
          <strong>Rolling Trunk LLC</strong><br />
          Email: <a href="mailto:legal@rollingtrunk.com" className={styles.link}>legal@rollingtrunk.com</a>
        </p>
      </section>
    </main>
  );
}
