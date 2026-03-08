import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Mozilla Firefox Club VIT Bhopal",
  description: "Access learning materials, documentation, and curated resources for open-source development, web technologies, and community guidelines.",
  keywords: ["Resources", "Learning", "Documentation", "Guides", "Open Source", "Web Development", "Tools"],
  openGraph: {
    title: "Resources | Mozilla Firefox Club VIT Bhopal",
    description: "Explore our curated learning resources and documentation.",
    type: "website",
    url: "https://mozilla-vitbhopal.club/resources",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | Mozilla Firefox Club VIT Bhopal",
    description: "Access learning materials and guides for developers.",
  },
};

export default function ResourcesPage() { return (<div className="container mx-auto px-6 py-24 min-h-screen"><h1 className="text-4xl font-bold text-brand-purple mb-8 capitalize">Resources</h1><p className="text-gray-300">This page is currently under construction. Check back soon!</p></div>); }
