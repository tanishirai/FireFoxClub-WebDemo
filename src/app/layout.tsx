import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundSwitcher from "@/components/layout/BackgroundSwitcher";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mozilla-vitbhopal.club"),
  title: "Mozilla Firefox Club | VIT Bhopal",
  description: "A University-based Developer's community powered by Firefox at VIT Bhopal. Join us for hackathons, tech events, and open-source contributions! We build, we innovate.",
  keywords: ["Mozilla", "Firefox", "Club", "VIT Bhopal", "Developers", "Hackathons", "Open Source", "Tech Events", "Developer Community", "University Club"],
  authors: [{ name: "Mozilla Firefox Club VIT Bhopal", url: "https://mozilla-vitbhopal.club" }],
  creator: "Mozilla Firefox Club",
  publisher: "VIT Bhopal",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title: "Mozilla Firefox Club | VIT Bhopal",
    description: "A University-based Developer's community powered by Firefox at VIT Bhopal. Join us for hackathons, tech events, and open-source contributions!",
    type: "website",
    url: "https://mozilla-vitbhopal.club",
    siteName: "Mozilla Firefox Club VIT Bhopal",
    locale: "en_US",
    images: [
      {
        url: "/firefox-logo.svg",
        width: 800,
        height: 600,
        alt: "Mozilla Firefox Club VIT Bhopal Logo",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mozilla Firefox Club | VIT Bhopal",
    description: "We are a dynamic, university-wide developer community based at VIT Bhopal University.",
    creator: "@firefoxclub_vit",
    images: ["/firefox-logo.svg"],
  },
  alternates: {
    canonical: "https://mozilla-vitbhopal.club",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Schema for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mozilla Firefox Club VIT Bhopal",
    alternateName: "Firefox Club",
    url: "https://mozilla-vitbhopal.club",
    logo: "https://mozilla-vitbhopal.club/firefox-logo.svg",
    description: "A university-based developer community powered by Mozilla Firefox at VIT Bhopal. Dedicated to open-source innovation, privacy advocacy, and tech education.",
    sameAs: [
      "https://github.com/mozilla-vitbhopal",
      "https://twitter.com/firefoxclub_vit",
      "https://linkedin.com/company/mozilla-firefox-club-vitbhopal",
      "https://instagram.com/firefoxclub_vit",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Community Manager",
      email: "hello@mozilla-vitbhopal.club",
      availableLanguage: ["en"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Madhya Pradesh",
      addressLocality: "Bhopal",
      streetAddress: "VIT Bhopal University",
    },
    member: {
      "@type": "EducationalOrganization",
      name: "VIT Bhopal University",
    },
    foundingDate: "2018",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "500+",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} antialiased min-h-screen flex flex-col font-sans relative`}
      >
        {/* Dynamic background – swaps between Background.jpg and Background2.jpg on cursor move */}
        <BackgroundSwitcher />
        {/* Dark overlay so all page content stays readable regardless of active background */}
        <div className="fixed inset-0 bg-black/70 -z-10 pointer-events-none" />
        
        <Navbar />
        <main className="grow pt-20 relative z-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
