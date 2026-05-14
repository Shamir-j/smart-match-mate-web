import { Heart, MessageCircle, Search, UserPlus } from "lucide-react";
import styles from './styles.module.css';

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus size={32} color="#FF3A8A" />,
      title: "Create Profile",
      description: "Add photos and your interests to let others know the real you.",
    },
    {
      icon: <Search size={32} color="#FF3A8A" />,
      title: "Discover Matches",
      description: "Browse profiles of real singles nearby and find your match.",
    },
    {
      icon: <MessageCircle size={32} color="#FF3A8A" />,
      title: "Chat Safely",
      description: "Start a conversation and get to know each other inside the app.",
    },
    {
      icon: <Heart size={32} color="#FF3A8A" />,
      title: "Meet Responsibly",
      description: "Take things offline when you're ready and meet safely.",
    },
  ];

  return (
    <section className={styles.sectionDark} id="how-it-works">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          How It Works
        </h2>
        <p className={styles.sectionSubtitle}>
          Three simple steps to your next encounter.
        </p>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>{step.icon}</div>
              <h3 className={styles.cardTitle}>
                {step.title}
              </h3>
              <p className={styles.cardText}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
