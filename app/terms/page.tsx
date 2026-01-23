import styles from './terms.module.css';

export default function TermsPage() {
  return (
    <main className={styles.termsContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last updated at: January 23, 2026</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Agreement to Terms</h2>
        <p className={styles.text}>
          By accessing or using Hest, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Intellectual Property Rights</h2>
        <p className={styles.text}>
          Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. User Representations</h2>
        <p className={styles.text}>
          By using the Site, you represent and warrant that:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>All registration information you submit will be true, accurate, current, and complete.</li>
          <li className={styles.listItem}>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
          <li className={styles.listItem}>You have the legal capacity and you agree to comply with these Terms of Service.</li>
          <li className={styles.listItem}>You are not a minor in the jurisdiction in which you reside.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Prohibited Activities</h2>
        <p className={styles.text}>
          You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Term and Termination</h2>
        <p className={styles.text}>
          These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE TO ANY PERSON FOR ANY REASON.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Modifications and Interruptions</h2>
        <p className={styles.text}>
          We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Contact Us</h2>
        <p className={styles.text}>
          In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
        </p>
        <p className={styles.text}>
          <strong>Hest App</strong><br />
          Email: support@hest.page
        </p>
      </section>
    </main>
  );
}
