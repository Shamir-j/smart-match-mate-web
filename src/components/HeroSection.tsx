import styles from './styles.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} role="banner">
      <h1 className={styles.heroTitle}>
        Meet new people. Make real connections.
      </h1>

      <p className={styles.heroSubtitle}>
        Connect with real people in your area for honest conversations and meaningful dating experiences. 
        Safe, authentic, and easy to use.
      </p>

      <div className={styles.heroCta}>
        <a
          href="https://play.google.com/store/apps/details?id=com.quantum.times.technologies.onenightstand"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className={styles.defaultBtn}
            aria-label="Download app from Play Store"
          >
            Download on Play Store
          </button>
        </a>
      </div>
    </section>
  );
}
