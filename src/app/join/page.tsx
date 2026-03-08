import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us | Mozilla Firefox Club VIT Bhopal",
  description: "Become part of the Mozilla Firefox Club! Join a community of 500+ developers passionate about open-source, innovation, and tech education at VIT Bhopal.",
  keywords: ["Join", "Membership", "Register", "Community", "Developers", "Open Source", "Mozilla"],
  openGraph: {
    title: "Join Mozilla Firefox Club | VIT Bhopal",
    description: "Become a member and connect with our vibrant developer community.",
    type: "website",
    url: "https://mozilla-vitbhopal.club/join",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Mozilla Firefox Club | VIT Bhopal",
    description: "Start your journey with our community of open-source developers.",
  },
};

export default function JoinPage() { return (<div className="container mx-auto px-6 py-24 min-h-screen"><h1 className="text-4xl font-bold text-brand-purple mb-8 capitalize">Join</h1><p className="text-gray-300">This page is currently under construction. Check back soon!</p></div>); }
