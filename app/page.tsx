import Image from "next/image";
import styles from "./page.module.css";
import ClientBetaForm from "@/components/Home/ClientBetaForm";
import { StarFilledIcon } from "@radix-ui/react-icons";
import IconOverlay from "@/components/IconOverlay/IconOverlay";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section - Boxed layout inspired by RocketMoney */}
        <section className={`${styles.section} ${styles.hero}`}>
          <div className={styles.heroContainer}>
            {/* Left Column - Content */}
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>
                <StarFilledIcon className={styles.heroBadgeIcon} />
                Beta Now Open
              </span>
              
              <h1 className={styles.heroTitle}>
                Organize your life with{" "}
                <span className={styles.heroTitleAccent}>Hest.</span>
              </h1>
              
              <p className={styles.heroSubtitle}>
                The ultimate productivity platform for families. Effortlessly manage 
                tasks, schedules, meal planning, and record tracking in one beautiful, private space.
              </p>
              
              <ClientBetaForm />
            </div>

            {/* Right Column - Robot Mascot */}
            <div className={styles.heroVisual}>
              <div className={styles.screenshotContainer}>
                <div className={styles.calendarLineArt}>
                  <Image
                    src="/hero-calendar.png"
                    alt="Calendar background"
                    width={400}
                    height={400}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                <Image 
                  src="/robot.png" 
                  alt="Hest Robot Mascot" 
                  width={400} 
                  height={400} 
                  priority
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Alternating layout like RocketMoney */}
        <section className={`${styles.section} ${styles.features}`}>
          {/* Feature 1: Calendar - Image Left */}
          <div className={styles.featureRow}>
            <div className={styles.featureImageWrapper}>
              <div className={styles.featureImage}>
                <Image 
                  src="/feature-calendar-v3.png" 
                  alt="Calendar planning" 
                  width={500} 
                  height={500}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <IconOverlay type="calendar" position="right" />
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>Manage all your calendars</h3>
              <p className={styles.featureText}>
                Import and sync multiple calendars in one place. Whether it&apos;s work, personal, 
                or family events, see everything at a glance and never miss an important date.
              </p>
            </div>
          </div>

          {/* Feature 2: Tasks - Image Right */}
          <div className={`${styles.featureRow} ${styles.featureRowReverse}`}>
            <div className={styles.featureImageWrapper}>
              <div className={styles.featureImage}>
                <Image 
                  src="/feature-tasks-v3.png" 
                  alt="Family task management" 
                  width={500} 
                  height={500}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <IconOverlay type="tasks" position="left" />
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>Organize family tasks</h3>
              <p className={styles.featureText}>
                Create tasks and assign them to family members. Keep everyone accountable 
                and working together to keep your household running smoothly.
              </p>
            </div>
          </div>

          {/* Feature 3: Meals - Image Left */}
          <div className={styles.featureRow}>
            <div className={styles.featureImageWrapper}>
              <div className={styles.featureImage}>
                <Image 
                  src="/feature-meals-v3.png" 
                  alt="Meal planning" 
                  width={500} 
                  height={500}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <IconOverlay type="meals" position="right" />
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>Plan your meals</h3>
              <p className={styles.featureText}>
                Plan your weekly meals with ease. Save time, reduce food waste, 
                and never wonder what&apos;s for dinner again.
              </p>
            </div>
          </div>

          {/* Feature 4: Records - Image Right */}
          <div className={`${styles.featureRow} ${styles.featureRowReverse}`}>
            <div className={styles.featureImageWrapper}>
              <div className={styles.featureImage}>
                <Image 
                  src="/feature-records-v3.png" 
                  alt="Record keeping" 
                  width={500} 
                  height={500}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <IconOverlay type="records" position="left" />
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>Keep track of records</h3>
              <p className={styles.featureText}>
                Store and organize important documents and records. From receipts to 
                warranties, everything stays accessible and organized.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
