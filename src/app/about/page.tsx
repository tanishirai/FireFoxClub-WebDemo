import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Mozilla Firefox Club VIT Bhopal",
  description: "Learn about the Mozilla Firefox Club's mission, history, and impact. A community of 500+ developers committed to open-source innovation, privacy advocacy, and tech education at VIT Bhopal.",
  keywords: ["About", "Mozilla", "Firefox Club", "Open Source", "Community", "VIT Bhopal", "Developers"],
  openGraph: {
    title: "About Mozilla Firefox Club | VIT Bhopal",
    description: "Discover our journey, mission, and the values that drive the Mozilla Firefox Club community.",
    type: "website",
    url: "https://mozilla-vitbhopal.club/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mozilla Firefox Club | VIT Bhopal",
    description: "Learn about our community's mission and impact in the open-source ecosystem.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
