import styles from './styles.module.css';

const testimonials = [
  {
    name: "Alex R.",
    date: "2023-09-15",
    text: "This app is a game-changer! I’ve met so many interesting people for casual fun. Highly recommend!!",
  },
  {
    name: "Jordan S.",
    date: "2023-08-22",
    text: "Great app for meeting new people. The interface is clean and easy to use.",
  },
  {
    name: "Taylor M.",
    date: "2023-07-10",
    text: "I love the verified users feature. It makes me feel safer knowing I’m connecting with real people.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.sectionGradientReverse} id="testimonials">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          What People Are Saying
        </h2>

        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                &#34;{t.text}&#34;
              </p>

              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className={styles.testimonialName}>
                    {t.name}
                  </div>
                  <div className={styles.testimonialDate}>
                    {t.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
