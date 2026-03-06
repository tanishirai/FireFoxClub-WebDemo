import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mozilla-vitbhopal.club"),
  title: "Mozilla Firefox Club | VIT Bhopal",
  description: "A University-based Developer's community powered by Firefox at VIT Bhopal. Join us for hackathons, tech events, and open-source contributions! We build, we innovate.",
  keywords: ["Mozilla", "Firefox", "Club", "VIT Bhopal", "Developers", "Hackathons", "Open Source", "Tech Events"],
  openGraph: {
    title: "Mozilla Firefox Club | VIT Bhopal",
    description: "A University-based Developer's community powered by Firefox at VIT Bhopal. Join us for hackathons, tech events, and open-source contributions!",
    type: "website",
    url: "https://mozilla-vitbhopal.club",
    siteName: "Mozilla Firefox Club VIT Bhopal",
    images: [
      {
        url: "/firefox-logo.svg",
        width: 800,
        height: 600,
        alt: "Mozilla Firefox Club VIT Bhopal Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mozilla Firefox Club | VIT Bhopal",
    description: "We are a dynamic, university-wide developer community based at VIT Bhopal University.",
    images: ["/firefox-logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased min-h-screen flex flex-col bg-background font-sans relative`}
      >
        {/* Background overlay */}
        <div className="fixed inset-0 bg-black/80 -z-10 pointer-events-none"></div>
        
        <Navbar />
        <main className="grow pt-20 relative z-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
