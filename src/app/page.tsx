import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <HeroSection />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Waitlist />
      <Footer />
    </main>
  );
}
