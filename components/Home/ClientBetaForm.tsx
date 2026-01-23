"use client";

import { useState } from 'react';
import styles from './Home.module.css';

export default function ClientBetaForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
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
