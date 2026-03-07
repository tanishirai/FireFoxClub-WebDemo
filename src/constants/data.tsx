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

/* export const EVENTS_DATA = [
    { title: "Open Source Hackathon", date: "Oct 15, 2026", type: "Tech Event", image: "bg-gradient-to-br from-brand-purple to-brand-orange" },
    { title: "Web Dev Bootcamp", date: "Oct 22, 2026", type: "Workshop", image: "bg-gradient-to-br from-brand-indigo to-brand-yellow" },
    { title: "Code & Coffee", date: "Nov 05, 2026", type: "Meetup", image: "bg-gradient-to-br from-brand-orange to-brand-yellow" },
]; */

export const EVENTS_DATA = [
    {
        id: 1,
        title: "Open Source Hackathon",
        date: "Oct 15, 2026",
        time: "9:00 AM – 9:00 PM",
        location: "VIT Bhopal, Block A",
        type: "Tech Event",
        status: "upcoming",
        seats: 120,
        registered: 87,
        description: "A 12-hour open-source hackathon where teams build real tools, contribute to Mozilla projects, and compete for prizes.",
        tags: ["Hackathon", "Open Source", "Teams"],
        gradient: "from-brand-purple to-brand-orange",
        accentColor: "brand-orange",
    },
    {
        id: 2,
        title: "Web Dev Bootcamp",
        date: "Oct 22, 2026",
        time: "10:00 AM – 4:00 PM",
        location: "Tech Lab 3, VIT Bhopal",
        type: "Workshop",
        status: "upcoming",
        seats: 60,
        registered: 60,
        description: "A hands-on full-day workshop covering modern web development — from HTML/CSS fundamentals to deploying a Next.js app.",
        tags: ["Web Dev", "Next.js", "Beginner Friendly"],
        gradient: "from-brand-indigo to-brand-yellow",
        accentColor: "brand-yellow",
    },
    {
        id: 3,
        title: "Code & Coffee",
        date: "Nov 05, 2026",
        time: "5:00 PM – 7:00 PM",
        location: "Café Zone, VIT Bhopal",
        type: "Meetup",
        status: "upcoming",
        seats: 40,
        registered: 18,
        description: "A casual evening meetup for developers to network, share ideas, and collaborate over coffee. Open to all skill levels.",
        tags: ["Networking", "Casual", "All Levels"],
        gradient: "from-brand-orange to-brand-yellow",
        accentColor: "brand-yellow",
    },
    {
        id: 4,
        title: "Git & GitHub Workshop",
        date: "Sep 10, 2026",
        time: "2:00 PM – 5:00 PM",
        location: "Lab 101, VIT Bhopal",
        type: "Workshop",
        status: "past",
        seats: 50,
        registered: 50,
        description: "Covered Git fundamentals, branching strategies, pull requests, and contributing to open-source repositories on GitHub.",
        tags: ["Git", "GitHub", "Open Source"],
        gradient: "from-brand-indigo to-brand-purple",
        accentColor: "brand-purple",
    },
    {
        id: 5,
        title: "Firefox Privacy Talk",
        date: "Aug 20, 2026",
        time: "3:00 PM – 4:30 PM",
        location: "Seminar Hall B",
        type: "Talk",
        status: "past",
        seats: 200,
        registered: 178,
        description: "A speaker session on digital privacy, open web principles, and how Firefox champions user security and data freedom.",
        tags: ["Privacy", "Firefox", "Talk"],
        gradient: "from-brand-orange to-brand-red",
        accentColor: "brand-orange",
    },
];

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
export const TEAM_DATA = [
    {
        category: "Leadership",
        members: [
            {
                name: "Ethan Caldwell",
                role: "President",
                initials: "EC",
                image: "https://api.dicebear.com/9.x/notionists/svg?seed=EthanCaldwell&backgroundColor=1a1a1a",
                bio: "Leading the club's vision and strategy, driving open-source culture at VIT Bhopal.",
                socials: { github: "#", linkedin: "#", twitter: "#" },
                gradient: "from-brand-orange to-brand-yellow",
            },
            {
                name: "Sofia Marchetti",
                role: "Vice President",
                initials: "SM",
                image: "https://api.dicebear.com/9.x/notionists/svg?seed=SofiaMarchetti&backgroundColor=1a1a1a",
                bio: "Coordinating events, teams and community initiatives across campus.",
                socials: { github: "#", linkedin: "#", twitter: "#" },
                gradient: "from-brand-purple to-brand-orange",
            },
        ],
    },
    {
        category: "Technical",
        members: [
            {
                name: "Lucas Bennett",
                role: "Tech Lead",
                initials: "LB",
                image: "https://api.dicebear.com/9.x/notionists/svg?seed=LucasBennett&backgroundColor=1a1a1a",
                bio: "Architecting projects and mentoring developers in open-source best practices.",
                socials: { github: "#", linkedin: "#", twitter: "#" },
                gradient: "from-brand-yellow to-brand-orange",
            },
            {
                name: "Noah Fitzgerald",
                role: "Full Stack Developer",
                initials: "NF",
                image: "https://api.dicebear.com/9.x/notionists/svg?seed=NoahFitzgerald&backgroundColor=1a1a1a",
                bio: "Building web applications and contributing to the club's technical projects.",
                socials: { github: "#", linkedin: "#", twitter: "#" },
                gradient: "from-brand-orange to-brand-red",
            },
            {
                name: "Aria Volkov",
                role: "UI/UX Designer",
                initials: "AV",
                image: "https://api.dicebear.com/9.x/notionists/svg?seed=AriaVolkov&backgroundColor=1a1a1a",
                bio: "Crafting beautiful, accessible designs that bring the club's identity to life.",
                socials: { github: "#", linkedin: "#", twitter: "#" },
                gradient: "from-brand-indigo to-brand-purple",
            },
        ],
    },
    {
        category: "Operations",
        members: [
            {
                name: "James Holloway",
                role: "Events Head",
                initials: "JH",
                image: "https://api.dicebear.com/9.x/notionists/svg?seed=JamesHolloway&backgroundColor=1a1a1a",
                bio: "Organizing hackathons, workshops, and meetups that bring the community together.",
                socials: { github: "#", linkedin: "#", twitter: "#" },
                gradient: "from-brand-yellow to-brand-indigo",
            },
            {
                name: "Chloe Dupont",
                role: "Marketing Lead",
                initials: "CD",
                image: "https://api.dicebear.com/9.x/notionists/svg?seed=ChloDupont&backgroundColor=1a1a1a",
                bio: "Spreading the word about open-source and growing the club's reach across campus.",
                socials: { github: "#", linkedin: "#", twitter: "#" },
                gradient: "from-brand-orange to-brand-purple",
            },
        ],
    },
];


export const TEAM_MEMBERS_PREVIEW = [
    { name: "Ethan Caldwell",  role: "President",       initials: "EC", gradient: "from-brand-orange to-brand-yellow" },
    { name: "Sofia Marchetti", role: "Vice President",  initials: "SM", gradient: "from-brand-purple to-brand-orange" },
    { name: "Lucas Bennett",   role: "Tech Lead",       initials: "LB", gradient: "from-brand-yellow to-brand-orange" },
    { name: "Noah Fitzgerald", role: "Full Stack Dev",  initials: "NF", gradient: "from-brand-orange to-brand-red"    },
    { name: "Chloe Dupont",    role: "Marketing Lead",  initials: "CD", gradient: "from-brand-orange to-brand-purple" },
];
