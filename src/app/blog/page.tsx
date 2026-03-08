import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Mozilla Firefox Club VIT Bhopal",
  description: "Read articles, tutorials, and insights about open-source development, web technologies, privacy, and community stories from the Mozilla Firefox Club.",
  keywords: ["Blog", "Articles", "Tutorials", "Open Source", "Tech News", "Web Development", "Firefox"],
  openGraph: {
    title: "Blog | Mozilla Firefox Club VIT Bhopal",
    description: "Explore our blog for insights on open-source development and tech education.",
    type: "website",
    url: "https://mozilla-vitbhopal.club/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Mozilla Firefox Club VIT Bhopal",
    description: "Read the latest articles and tutorials from our developer community.",
  },
};

export default function BlogPage() { return (<div className="container mx-auto px-6 py-24 min-h-screen"><h1 className="text-4xl font-bold text-brand-purple mb-8 capitalize">Blog</h1><p className="text-gray-300">This page is currently under construction. Check back soon!</p></div>); }
