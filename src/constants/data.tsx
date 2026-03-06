import { Code, Users, Calendar, Rocket } from "lucide-react";

export const FEATURES_DATA = [
    { icon: <Code size={32} />, title: "Open Source", desc: "Contributing to real-world projects." },
    { icon: <Users size={32} />, title: "Community", desc: "A network of like-minded peers." },
    { icon: <Calendar size={32} />, title: "Events", desc: "Hackathons, workshops & more." },
    { icon: <Rocket size={32} />, title: "Innovation", desc: "Pushing boundaries with tech." },
];

export const PROJECTS_DATA = [
    {
        id: 1,
        title: "Project Title 1",
        desc: "An open-source platform that helps students find resources and connect with mentors across the university network.",
        tags: ["Next.js", "Tailwind", "TypeScript"],
    },
    {
        id: 2,
        title: "Project Title 2",
        desc: "An open-source platform that helps students find resources and connect with mentors across the university network.",
        tags: ["Next.js", "Tailwind", "TypeScript"],
    },
];

export const EVENTS_DATA = [
    { title: "Open Source Hackathon", date: "Oct 15, 2026", type: "Tech Event", image: "bg-gradient-to-br from-brand-purple to-brand-orange" },
    { title: "Web Dev Bootcamp", date: "Oct 22, 2026", type: "Workshop", image: "bg-gradient-to-br from-brand-indigo to-brand-yellow" },
    { title: "Code & Coffee", date: "Nov 05, 2026", type: "Meetup", image: "bg-gradient-to-br from-brand-orange to-brand-yellow" },
];

export const TEAM_MEMBERS_PREVIEW = [1, 2, 3, 4, 5];

export const PARTNERS_DATA = [
    "Mozilla",
    "GitHub",
    "Dev.to",
    "Vercel",
    "Figma",
    "Google",
    "Meta",
    "OpenAI",
    "AWS",
    "Digital Ocean",
];
