import type { Metadata } from "next";
import { Geist, Geist_Mono, Audiowide } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hest.page"),
  title: {
    default: "Hest - Organize your life",
    template: "%s | Hest",
  },
  description: "Hest is the ultimate productivity platform for families. Manage shared calendars, tasks, meal plans, and important records in one beautiful, private space.",
  applicationName: "Hest",
  authors: [{ name: "Hest Team" }],
  keywords: ["family organizer", "shared calendar", "task management", "meal planner", "home records", "productivity app", "family app"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hest.page",
    title: "Hest - Organize your life",
    description: "Hest is the ultimate productivity platform for families. Manage shared calendars, tasks, meal plans, and important records in one beautiful, private space.",
    siteName: "Hest",
    images: [
      {
        url: "/og-image.png",
        width: 200,
        height: 200,
        alt: "Hest Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Hest - Organize your life",
    description: "Hest is the ultimate productivity platform for families.",
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
  "description": "The ultimate productivity platform for families. Manage shared calendars, tasks, meal plans, and important records.",
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
      <body className={`${geistSans.className} ${geistSans.variable} ${geistMono.variable} ${audiowide.variable}`}>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
