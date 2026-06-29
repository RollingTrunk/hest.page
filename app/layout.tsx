import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";
import HomeSplashCursor from "@/components/HomeSplashCursor";
import ClickSpark from "@/components/reactbits/ClickSpark";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hest.page"),
  title: {
    default: "Hest - Organize your life",
    template: "%s | Hest",
  },
  description: "Hest is the ultimate productivity platform for households. Manage shared calendars, tasks, meal plans, and important records in one beautiful, private space.",
  applicationName: "Hest",
  authors: [{ name: "Hest Team" }],
  keywords: ["household organizer", "shared calendar", "task management", "meal planner", "home records", "productivity app", "household app"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hest.page",
    title: "Hest - Organize your life",
    description: "Hest is the ultimate productivity platform for households. Manage shared calendars, tasks, meal plans, and important records in one beautiful, private space.",
    siteName: "Hest",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hest — your whole household, in one warm place.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hest - Organize your life",
    description: "Hest is the ultimate productivity platform for households.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Hest",
  "applicationCategory": "ProductivityApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "The ultimate productivity platform for households. Manage shared calendars, tasks, meal plans, and important records.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "120"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${geistSans.variable} ${geistMono.variable} ${display.variable}`}>
        <ScrollProgress />
        <HomeSplashCursor />
        <ClickSpark sparkColor="#8B311E" sparkRadius={18} sparkCount={8}>
          <Header />
          <SmoothScroll>{children}</SmoothScroll>
          <Footer />
        </ClickSpark>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
