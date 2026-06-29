"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "How do I get started with Hest?",
    answer:
      "Getting started is easy! Simply download the app from the App Store or Google Play Store, create an account, and invite your household members to join your shared dashboard.",
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Yes! The Hest mobile app is available for free on both iOS and Android. You can download it from the App Store or Google Play Store to keep your household organized on the go.",
  },
  {
    question: "How much does Hest cost?",
    answer:
      "Hest is completely free to download and use for your core household needs. We also offer an optional premium subscription with advanced features for larger households.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority and we care about your privacy. We use industry-standard encryption to protect your data both in transit and at rest. Your personal information is never shared with third parties without your explicit consent.",
  },
  {
    question: "Can I import data from other apps?",
    answer:
      "Yes, Hest supports importing data from most popular productivity tools. Our import wizard will guide you through the process once you've set up your account.",
  },
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <main className="mx-auto max-w-[800px] px-[var(--spacing-lg)] pb-[var(--spacing-xxl)] pt-[120px] max-md:pt-[100px]">
      <header className="mb-[var(--spacing-xxl)] text-center">
        <h1 className="mb-[var(--spacing-md)] text-[3rem] font-extrabold tracking-[-0.03em] text-[var(--color-text)] max-md:text-[2.25rem]">
          Support
        </h1>
        <p className="mx-auto max-w-[600px] text-[1.25rem] text-[var(--color-text-secondary)] max-md:text-[1.1rem]">
          Everything you need to know about Hest. Can&apos;t find what you&apos;re
          looking for? Reach out to our team.
        </p>
      </header>

      <section className="mb-[var(--spacing-xxxl)]">
        <h2 className="mb-[var(--spacing-xl)] text-[1.75rem] font-bold text-[var(--color-text)]">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-[var(--spacing-md)]">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white transition-all hover:border-[#8B311E]/30 hover:shadow-[var(--shadow-sm)]"
              >
                <button
                  className="flex w-full cursor-pointer items-center justify-between p-[var(--spacing-lg)] text-left text-[1.1rem] font-semibold text-[var(--color-text)] transition-colors hover:bg-[var(--color-bg-secondary)]"
                  onClick={() => toggle(index)}
                  aria-expanded={open}
                >
                  {faq.question}
                  <span
                    className={`text-[var(--color-text-secondary)] transition-transform ${open ? "rotate-180" : ""}`}
                  >
                    ▼
                  </span>
                </button>
                {open && (
                  <div className="px-[var(--spacing-lg)] pb-[var(--spacing-lg)] text-[1rem] leading-relaxed text-[var(--color-text-secondary)] [animation:slideDown_0.25s_ease]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center gap-[var(--spacing-lg)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-[var(--spacing-xl)] text-center shadow-[var(--shadow-md)]">
          <h2 className="text-[1.5rem] font-bold text-[var(--color-text)]">
            Need to get in touch with someone?
          </h2>
          <p className="mb-[var(--spacing-sm)] text-[var(--color-text-secondary)]">
            Our team is here to help you with any questions or feedback you might
            have.
          </p>
          <a
            href="mailto:hello@rollingtrunk.com"
            className="inline-flex items-center gap-[var(--spacing-sm)] rounded-[var(--radius-pill)] bg-[var(--color-text)] px-[var(--spacing-xl)] py-[var(--spacing-md)] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
          >
            Contact us by mail
          </a>
          <Link
            href="/delete-account"
            className="text-[0.9rem] text-[var(--color-text-secondary)] underline underline-offset-[3px] transition-colors hover:text-[var(--color-text)]"
          >
            Looking to delete your account?
          </Link>
        </div>
      </section>
    </main>
  );
}
