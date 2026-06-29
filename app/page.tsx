import styles from "./page.module.css";
import Hero from "@/components/Home/Hero";
import Marquee from "@/components/Home/Marquee";
import Stats from "@/components/Home/Stats";
import Features from "@/components/Home/Features";
import WhyHest from "@/components/Home/WhyHest";
import Reviews from "@/components/Home/Reviews";
import Faq from "@/components/Home/Faq";
import FinalCta from "@/components/Home/FinalCta";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Marquee />
        <Stats />
        <Features />
        <WhyHest />
        <Reviews />
        <Faq />
        {/* Final CTA now also hosts the newsletter signup (merged) */}
        <FinalCta />
      </main>
    </div>
  );
}
