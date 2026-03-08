import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Mozilla Firefox Club VIT Bhopal",
  description: "Explore photos and memories from the Mozilla Firefox Club's events, hackathons, workshops, and community gatherings at VIT Bhopal.",
  keywords: ["Gallery", "Photos", "Events", "Hackathon", "Community", "Memories", "Workshops"],
  openGraph: {
    title: "Gallery | Mozilla Firefox Club VIT Bhopal",
    description: "View moments from our community events and celebrations.",
    type: "website",
    url: "https://mozilla-vitbhopal.club/gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Mozilla Firefox Club VIT Bhopal",
    description: "Explore photos from our community events and hackathons.",
  },
};

export default function GalleryPage() { return (<div className="container mx-auto px-6 py-24 min-h-screen"><h1 className="text-4xl font-bold text-brand-purple mb-8 capitalize">Gallery</h1><p className="text-gray-300">This page is currently under construction. Check back soon!</p></div>); }
