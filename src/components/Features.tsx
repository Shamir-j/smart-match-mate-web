import styles from './styles.module.css';

const features = [
  {
    icon: "📍",
    title: "Local Discovery",
    desc: "Find and connect with real people in your city or nearby.",
  },
  {
    icon: "🛡️",
    title: "Safe Environment",
    desc: "Built with privacy and safety tools to let you date with confidence.",
  },
  {
    icon: "💎",
    title: "Smart Matching",
    desc: "Customizable discovery settings to find exactly what you're looking for.",
  },
];

export default function Features() {
  return (
    <section className={styles.sectionGradientDark} id="features">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Features
        </h2>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>
                {feature.title}
              </h3>
              <p className={styles.cardText}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
