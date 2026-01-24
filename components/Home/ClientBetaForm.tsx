"use client";

import { useState } from 'react';
import styles from './Home.module.css';

export default function ClientBetaForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('userGroup', 'hest-beta');
    formData.append('mailingLists', 'cmkrofa5203yy0ixm54zlhszl');

    try {
      const response = await fetch('https://app.loops.so/api/newsletter-form/cmkr4w5nk00q10i09zoamrr03', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        console.error('Form submission failed:', response.statusText);
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.successMessage}>
        <p>🎉 You&apos;re on the list!</p>
        <button 
          onClick={() => setStatus('idle')} 
          className={styles.resetButton}
        >
          Add another email
        </button>
      </div>
    );
  }

  return (
    <div className={styles.formContainer} id="signup">
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
          disabled={status === 'loading'}
        />
        <button 
          type="submit" 
          className={styles.button}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Joining...' : 'Join Beta'}
        </button>
      </form>
    </div>
  );
}
