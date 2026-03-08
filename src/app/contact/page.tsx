import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Mozilla Firefox Club VIT Bhopal",
  description: "Get in touch with the Mozilla Firefox Club. We'd love to hear from you about collaborations, events, or joining our community of developers at VIT Bhopal.",
  keywords: ["Contact", "Get in Touch", "Mozilla", "Firefox Club", "Email", "VIT Bhopal"],
  openGraph: {
    title: "Contact Us | Mozilla Firefox Club VIT Bhopal",
    description: "Reach out to our community leaders and explore partnership opportunities.",
    type: "website",
    url: "https://mozilla-vitbhopal.club/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Mozilla Firefox Club VIT Bhopal",
    description: "Connect with the Mozilla Firefox Club community team.",
  },
};

export default function ContactPage() { return (<div className="container mx-auto px-6 py-24 min-h-screen"><h1 className="text-4xl font-bold text-brand-purple mb-8 capitalize">Contact</h1><p className="text-gray-300">This page is currently under construction. Check back soon!</p></div>); }
