"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './support.module.css';

const faqs = [
  {
    question: "How do I get started with Hest?",
    answer: "Getting started is easy! Simply download the app from the App Store or Google Play Store, create an account, and invite your household members to join your shared dashboard."
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes! The Hest mobile app is available for free on both iOS and Android. You can download it from the App Store or Google Play Store to keep your household organized on the go."
  },
  {
    question: "How much does Hest cost?",
    answer: "Hest is completely free to download and use for your core household needs. We also offer an optional premium subscription with advanced features for larger households."
  },
  {
    question: "Is my data secure?",
    answer: "Security is our top priority and we care about your privacy. We use industry-standard encryption to protect your data both in transit and at rest. Your personal information is never shared with third parties without your explicit consent."
  },
  {
    question: "Can I import data from other apps?",
    answer: "Yes, Hest supports importing data from most popular productivity tools. Our import wizard will guide you through the process once you've set up your account."
  }
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className={styles.supportContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Support</h1>
        <p className={styles.subtitle}>
          Everything you need to know about Hest. Can&apos;t find what you&apos;re looking for? Reach out to our team.
        </p>
      </header>

      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.accordionItem}>
              <button 
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className={`${styles.icon} ${openIndex === index ? styles.iconActive : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className={styles.accordionContent}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contactContainer}>
        <div className={styles.contactBox}>
          <h2 className={styles.contactTitle}>Need to get in touch with someone?</h2>
          <p className={styles.contactText}>
            Our team is here to help you with any questions or feedback you might have.
          </p>
          <a href="mailto:hello@rollingtrunk.com" className={styles.mailButton}>
            Contact us by mail
          </a>
          <Link href="/delete-account" className={styles.deleteAccountLink}>
            Looking to delete your account?
          </Link>
        </div>
      </section>
    </main>
  );
}
