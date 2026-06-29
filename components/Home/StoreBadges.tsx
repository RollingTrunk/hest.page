import Image from "next/image";
import styles from "./landing.module.css";

const APP_STORE_URL =
  "https://apps.apple.com/app/apple-store/id6759582460?pt=128418226&ct=Hest%20Website&mt=8";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.rollingtrunk.hest&referrer=utm_source%3Dhest_website%26utm_medium%3Dweb%26utm_campaign%3DHest%2520Website";

export default function StoreBadges() {
  return (
    <div className={styles.storeBadges}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.storeLink}
        aria-label="Download Hest on the App Store"
      >
        <Image
          src="/app-store-badge.svg"
          alt="Download on the App Store"
          width={161}
          height={48}
          unoptimized
          style={{ height: "52px", width: "auto" }}
        />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.storeLink}
        aria-label="Get Hest on Google Play"
      >
        <Image
          src="/google-play-badge.svg"
          alt="Get it on Google Play"
          width={161}
          height={48}
          unoptimized
          style={{ height: "52px", width: "auto" }}
        />
      </a>
    </div>
  );
}
