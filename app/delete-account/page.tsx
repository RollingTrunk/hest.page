import type { Metadata } from 'next';
import styles from './delete-account.module.css';

export const metadata: Metadata = {
  title: 'Delete Account & Data',
  description:
    'Learn how to delete your Hest account and associated data, or request deletion if you cannot access the app.',
};

export default function DeleteAccountPage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Account & Data Deletion</h1>
        <p className={styles.subtitle}>
          How to delete your Hest account and all associated data
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Delete Your Account In the App</h2>
        <p className={styles.text}>
          The fastest way to delete your account is directly within the Hest app.
          Follow these steps:
        </p>
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <span className={styles.stepNumber}>1</span>
            <span className={styles.stepText}>
              Open the Hest app and navigate to <strong>Settings</strong>.
            </span>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>2</span>
            <span className={styles.stepText}>
              Scroll to the bottom and tap <strong>Delete Account</strong>.
            </span>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>3</span>
            <span className={styles.stepText}>
              Confirm your decision. Your account and all associated data will be
              permanently deleted.
            </span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Request Deletion Without App Access
        </h2>
        <p className={styles.text}>
          If you are unable to access the app (e.g., you&apos;ve uninstalled it,
          forgotten your password, or are locked out), you can request account
          deletion by contacting us directly.
        </p>
        <p className={styles.text}>
          Email us at{' '}
          <a
            href="mailto:support@rollingtrunk.com?subject=Account%20Deletion%20Request"
            className={styles.emailLink}
          >
            support@rollingtrunk.com
          </a>{' '}
          with the subject line <strong>&quot;Account Deletion Request&quot;</strong>{' '}
          and include the email address associated with your Hest account. We will
          process your request within 30 days.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What Data Is Deleted</h2>
        <p className={styles.text}>
          When your account is deleted, the following data is permanently removed:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Your user profile and account information</li>
          <li className={styles.listItem}>Events, tasks, and schedules you created</li>
          <li className={styles.listItem}>Meal plans and recipes</li>
          <li className={styles.listItem}>Household records and documents</li>
          <li className={styles.listItem}>Subscription and billing information</li>
          <li className={styles.listItem}>App preferences and settings</li>
        </ul>
        <p className={styles.text}>
          If you are a member of a shared household, your personal data will be
          removed. Content you contributed to the shared household (e.g., shared
          events or tasks) may be retained for other household members, but will no
          longer be associated with your identity.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Data Retention</h2>
        <p className={styles.text}>
          After account deletion, we may retain certain data for a limited period
          as required by law (e.g., financial transaction records for tax or
          accounting purposes). Any retained data is securely stored and isolated
          from further processing. For more details, see our{' '}
          <a href="/privacy" className={styles.link}>
            Privacy Policy
          </a>
          .
        </p>
      </section>

      <div className={styles.contactCard}>
        <p>
          <strong>Have questions?</strong>
        </p>
        <p>
          If you have any questions about account deletion or your data, contact us
          at{' '}
          <a
            href="mailto:support@rollingtrunk.com"
            className={styles.emailLink}
          >
            support@rollingtrunk.com
          </a>{' '}
          or visit our{' '}
          <a href="/support" className={styles.link}>
            Support page
          </a>
          .
        </p>
      </div>
    </main>
  );
}
