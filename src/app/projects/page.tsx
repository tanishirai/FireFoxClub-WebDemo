import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Mozilla Firefox Club VIT Bhopal",
  description: "Explore innovative open-source projects created and maintained by the Mozilla Firefox Club. From web apps to developer tools, discover what we're building.",
  keywords: ["Projects", "Open Source", "Developer Tools", "Web Development", "GitHub", "Mozilla", "Innovation"],
  openGraph: {
    title: "Projects | Mozilla Firefox Club VIT Bhopal",
    description: "Discover the amazing open-source projects built by our community.",
    type: "website",
    url: "https://mozilla-vitbhopal.club/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Mozilla Firefox Club VIT Bhopal",
    description: "Check out the innovative projects from our developer community.",
  },
};

export default function ProjectsPage() { return (<div className="container mx-auto px-6 py-24 min-h-screen"><h1 className="text-4xl font-bold text-brand-purple mb-8 capitalize">Projects</h1><p className="text-gray-300">This page is currently under construction. Check back soon!</p></div>); }
