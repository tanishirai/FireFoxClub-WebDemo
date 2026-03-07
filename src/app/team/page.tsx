// export default function TeamPage() { return (<div className="container mx-auto px-6 py-24 min-h-screen"><h1 className="text-4xl font-bold text-brand-purple mb-8 capitalize">Team</h1><p className="text-gray-300">This page is currently under construction. Check back soon!</p></div>); }

import TeamSection from "@/components/team/TeamSection";

export const metadata = {
  title: "Team | Mozilla Firefox Club VIT Bhopal",
  description: "Meet the passionate student leaders and open-source advocates of the Mozilla Firefox Club at VIT Bhopal.",
};

export default function TeamPage() {
  return <TeamSection />;
}
