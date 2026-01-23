"use client";

import { useState } from 'react';
import styles from './support.module.css';

const faqs = [
  {
    question: "How do I get started with Hest?",
    answer: "Getting started is easy! Simply sign up for our beta on the home page. Once invited, you'll be able to create your personal dashboard and start organizing your life with our intelligent task management tools."
  },
  {
    question: "Is there a mobile app available?",
    answer: "We are currently developing mobile apps for both iOS and Android. Beta testers will be the first to gain access to our mobile experience later this year."
  },
  {
    question: "How do I join the beta?",
    answer: "You can join the waitlist by entering your email in the 'Join Beta' section on our homepage. We are rolling out invites in batches to ensure the best experience for everyone."
  },
  {
    question: "Is my data secure?",
    answer: "Security is our top priority. We use industry-standard encryption to protect your data both in transit and at rest. Your personal information is never shared with third parties without your explicit consent."
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
        </div>
      </section>
    </main>
  );
}
