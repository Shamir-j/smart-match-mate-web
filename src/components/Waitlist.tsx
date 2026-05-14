"use client";

import React, { useState } from "react";
import styles from './styles.module.css';

export default function Waitlist() {
  const [email, setEmail] = useState("");

  const onFinish = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist signup:", email);

    // Track the waitlist signup
    if (globalThis.window !== undefined && (globalThis.window as any).gtag) {
      (globalThis.window as any).gtag('event', 'waitlist_signup', {
        event_category: 'conversion',
        event_label: 'iOS Waitlist',
        value: 1
      });
    }

    // TODO: Hook up API call here
    // Example API call:
    // fetch('/api/waitlist', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email })
    // });
  };

  return (
    <section className={styles.sectionGradientReverse} id="waitlist">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Join our iOS waitlist
        </h2>
        <p className={styles.sectionSubtitle}>
          Be the first to know when our iOS app launches.
        </p>

        <form className={styles.waitlistForm} onSubmit={onFinish}>
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.waitlistInput}
          />

          <button
            type="submit"
            className={styles.primaryBtn}
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
