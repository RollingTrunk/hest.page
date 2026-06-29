import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account & Data",
  description:
    "Learn how to delete your Hest account and associated data, or request deletion if you cannot access the app.",
};

const stepText = "text-[1.05rem] text-[var(--color-text-secondary)] pt-[4px]";
const sectionTitle =
  "mb-[var(--spacing-md)] text-[1.5rem] font-semibold text-[var(--color-text)] max-md:text-[1.25rem]";
const text = "mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]";
const link = "text-[var(--color-primary)] no-underline hover:underline";
const email = "font-semibold text-[var(--color-primary)] no-underline hover:underline";

function StepNumber({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-[32px] min-w-[32px] shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-[0.9rem] font-semibold text-white">
      {children}
    </span>
  );
}

export default function DeleteAccountPage() {
  return (
    <main className="mx-auto max-w-[800px] px-[var(--spacing-lg)] pb-[var(--spacing-xxl)] pt-[120px] leading-relaxed max-md:pt-[100px]">
      <header className="mb-[var(--spacing-xl)] border-b-2 border-[#8B311E]/10 pb-[var(--spacing-lg)]">
        <h1 className="mb-[var(--spacing-xs)] text-[2.5rem] font-bold tracking-[-0.02em] text-[var(--color-text)] max-md:text-[2rem]">
          Account &amp; Data Deletion
        </h1>
        <p className="mt-[var(--spacing-sm)] text-[1.1rem] text-[var(--color-text-secondary)]">
          How to delete your Hest account and all associated data
        </p>
      </header>

      <section className="mb-[var(--spacing-xl)]">
        <h2 className={sectionTitle}>Delete Your Account In the App</h2>
        <p className={text}>
          The fastest way to delete your account is directly within the Hest app.
          Follow these steps:
        </p>
        <div className="mb-[var(--spacing-lg)]">
          <div className="mb-[var(--spacing-md)] flex items-start gap-[var(--spacing-md)]">
            <StepNumber>1</StepNumber>
            <span className={stepText}>
              Open the Hest app and navigate to <strong>Settings</strong>.
            </span>
          </div>
          <div className="mb-[var(--spacing-md)] flex items-start gap-[var(--spacing-md)]">
            <StepNumber>2</StepNumber>
            <span className={stepText}>
              Scroll to the bottom and tap <strong>Delete Account</strong>.
            </span>
          </div>
          <div className="mb-[var(--spacing-md)] flex items-start gap-[var(--spacing-md)]">
            <StepNumber>3</StepNumber>
            <span className={stepText}>
              Confirm your decision. Your account and all associated data will be
              permanently deleted.
            </span>
          </div>
        </div>
      </section>

      <section className="mb-[var(--spacing-xl)]">
        <h2 className={sectionTitle}>Request Deletion Without App Access</h2>
        <p className={text}>
          If you are unable to access the app (e.g., you&apos;ve uninstalled it,
          forgotten your password, or are locked out), you can request account
          deletion by contacting us directly.
        </p>
        <p className={text}>
          Email us at{" "}
          <a
            href="mailto:support@rollingtrunk.com?subject=Account%20Deletion%20Request"
            className={email}
          >
            support@rollingtrunk.com
          </a>{" "}
          with the subject line{" "}
          <strong>&quot;Account Deletion Request&quot;</strong> and include the
          email address associated with your Hest account. We will process your
          request within 30 days.
        </p>
      </section>

      <section className="mb-[var(--spacing-xl)]">
        <h2 className={sectionTitle}>What Data Is Deleted</h2>
        <p className={text}>
          When your account is deleted, the following data is permanently removed:
        </p>
        <ul className="mb-[var(--spacing-md)] list-disc pl-[var(--spacing-lg)] text-[var(--color-text-secondary)]">
          <li className="mb-[var(--spacing-sm)] text-[1.05rem]">Your user profile and account information</li>
          <li className="mb-[var(--spacing-sm)] text-[1.05rem]">Events, tasks, and schedules you created</li>
          <li className="mb-[var(--spacing-sm)] text-[1.05rem]">Meal plans and recipes</li>
          <li className="mb-[var(--spacing-sm)] text-[1.05rem]">Household records and documents</li>
          <li className="mb-[var(--spacing-sm)] text-[1.05rem]">Subscription and billing information</li>
          <li className="mb-[var(--spacing-sm)] text-[1.05rem]">App preferences and settings</li>
        </ul>
        <p className={text}>
          If you are a member of a shared household, your personal data will be
          removed. Content you contributed to the shared household (e.g., shared
          events or tasks) may be retained for other household members, but will no
          longer be associated with your identity.
        </p>
      </section>

      <section className="mb-[var(--spacing-xl)]">
        <h2 className={sectionTitle}>Data Retention</h2>
        <p className={text}>
          After account deletion, we may retain certain data for a limited period
          as required by law (e.g., financial transaction records for tax or
          accounting purposes). Any retained data is securely stored and isolated
          from further processing. For more details, see our{" "}
          <a href="/privacy" className={link}>
            Privacy Policy
          </a>
          .
        </p>
      </section>

      <div className="mt-[var(--spacing-lg)] rounded-[var(--radius-md)] border border-[var(--color-border)] p-[var(--spacing-lg)] [background:var(--gradient-card)]">
        <p className="mb-[var(--spacing-sm)] text-[1.05rem] text-[var(--color-text-secondary)]">
          <strong>Have questions?</strong>
        </p>
        <p className="text-[1.05rem] text-[var(--color-text-secondary)]">
          If you have any questions about account deletion or your data, contact us
          at{" "}
          <a href="mailto:support@rollingtrunk.com" className={email}>
            support@rollingtrunk.com
          </a>{" "}
          or visit our{" "}
          <a href="/support" className={link}>
            Support page
          </a>
          .
        </p>
      </div>
    </main>
  );
}
