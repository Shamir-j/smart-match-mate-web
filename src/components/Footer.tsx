import Image from "next/image";
import Link from "next/link";
import styles from './styles.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Top section: Legal / Careers / Social / FAQ */}
      <div className={styles.footerGrid}>
        <div>
          <h4 className={styles.footerTitle}>Legal</h4>
          <div className={styles.footerLinks}>
            <Link href="/legal/privacy-notice" className={styles.footerLink}>Privacy Notice</Link>
            <Link href="/legal/consumer-health-privacy" className={styles.footerLink}>Consumer Health Data Privacy Policy</Link>
            <Link href="/legal/terms-of-service" className={styles.footerLink}>Terms of Service</Link>
            <Link href="/legal/cookie-policy" className={styles.footerLink}>Cookie Policy</Link>
            <Link href="/legal/intellectual-property" className={styles.footerLink}>Intellectual Property</Link>
            <Link href="/legal/user-generated-content" className={styles.footerLink}>User-Generated Content Policy</Link>
            <Link href="/legal/child-safety" className={styles.footerLink}>Child Safety Policy</Link>
            <Link href="/legal/data-deletion-request" className={styles.footerLink}>Data Deletion Request</Link>
            <Link href="/legal/accessibility" className={styles.footerLink}>Accessibility Statement</Link>
          </div>
        </div>

        <div>
          <h4 className={styles.footerTitle}>Careers</h4>
          <div className={styles.footerLinks}>
            <Link href="#" className={styles.footerDarkLink}>Careers Portal</Link>
            <Link href="#" className={styles.footerDarkLink}>Tech Blog</Link>
          </div>
        </div>

        <div>
          <h4 className={styles.footerTitle}>Social</h4>
          <div className={styles.footerSocial}>
            <Link href="#" className={styles.footerDarkLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </Link>
            <Link href="#" className={styles.footerDarkLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </Link>
            <Link href="#" className={styles.footerDarkLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </Link>
            <Link href="#" className={styles.footerDarkLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Link>
          </div>
        </div>

        <div>
          <h4 className={styles.footerTitle}>More</h4>
          <div className={styles.footerLinks}>
            {/* <Link href="#" className={styles.footerDarkLink}>FAQ</Link> */}
            <Link href="#" className={styles.footerDarkLink}>Destinations</Link>
            <Link href="#" className={styles.footerDarkLink}>Press Room</Link>
            <Link href="#" className={styles.footerDarkLink}>Contact</Link>
            <Link href="#" className={styles.footerDarkLink}>Promo Code</Link>
          </div>
        </div>
      </div>

      <hr className={styles.footerDivider} />

      {/* App Store Badges */}
      <div className={styles.footerBadges}>
        <Link href="#">
          <Image
            src="/appstore-badge.png"
            alt="Download on the App Store"
            width={120}
            height={40}
            style={{ height: 45, width: "auto" }}
          />
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=com.quantum.times.technologies.onenightstand" target="_blank">
          <Image
            src="/googleplay-badge.png"
            alt="Get it on Google Play"
            width={120}
            height={40}
            style={{ height: 45, width: "auto" }}
          />
        </Link>
      </div>

      {/* Marketing Text */}
      <p className={styles.footerText}>
        One Night Stand is a modern dating app for adults who want honest connections 
        and meaningful conversations. Whether you’re looking to meet someone new, 
        chat with local singles, or explore dating opportunities near you, 
        One Night Stand helps you connect with real people in your area.
      </p>
      <p className={styles.footerText}>
        Designed for adults 18+, our platform focuses on authentic profiles, 
        privacy, and safety, so you can date with confidence. 
        Meet real singles, start conversations, and explore dating at your own pace.
      </p>

      <hr className={styles.footerDivider} />

      {/* Bottom links */}
      <div className={styles.footerBottomLinks}>
        {/* <Link href="/faq" className={styles.footerLink}>FAQ</Link> */}
        {/* <Link href="/safety-tips" className={styles.footerLink}>Safety Tips</Link> */}
        <Link href="/legal/terms-of-service" className={styles.footerLink}>Terms of Service</Link>
        <Link href="/legal/cookie-policy" className={styles.footerLink}>Cookie Policy</Link>
        <Link href="/legal/privacy-notice" className={styles.footerLink}>Privacy Settings</Link>
      </div>

      {/* Copyright */}
      <div className={styles.footerCopyright}>
        © {year} One Night Stand, All Rights Reserved.
      </div>
    </footer>
  );
}
