"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    Globe, Code2, Users, Zap, Shield, Heart,
    ArrowRight, Github, Twitter, Linkedin,
    Flame, Star, BookOpen, Trophy
} from "lucide-react";
import Image from "next/image";

const STATS = [
    { value: "500+", label: "Active Members", icon: Users },
    { value: "50+", label: "Events Hosted", icon: Star },
    { value: "3+", label: "Years Running", icon: Trophy },
    { value: "20+", label: "Open Source Contributions", icon: Code2 },
];

const VALUES = [
    {
        icon: Globe,
        title: "Open Web",
        description: "We believe the internet should be open, accessible, and free for everyone — not controlled by a few.",
        color: "#8a37f5",
    },
    {
        icon: Shield,
        title: "Privacy First",
        description: "Your data, your rules. We advocate for digital privacy and educate students on staying secure online.",
        color: "#06b6d4",
    },
    {
        icon: Code2,
        title: "Build in Public",
        description: "We ship real projects, contribute to open source, and learn by doing — not just by watching.",
        color: "#f59e0b",
    },
    {
        icon: Heart,
        title: "Community Driven",
        description: "Every event, workshop, and hackathon is built by students, for students. No hierarchy, just passion.",
        color: "#ec4899",
    },
    {
        icon: BookOpen,
        title: "Always Learning",
        description: "From web fundamentals to AI — we host workshops, talks, and bootcamps to keep skills sharp.",
        color: "#10b981",
    },
    {
        icon: Zap,
        title: "Move Fast",
        description: "We ship, iterate, and improve. Imperfect action beats perfect inaction every time.",
        color: "#f97316",
    },
];

const TIMELINE = [
    { year: "2021", title: "Club Founded", desc: "A small group of Firefox enthusiasts at VIT Bhopal started the Mozilla Firefox Club." },
    { year: "2022", title: "First Hackathon", desc: "Hosted our first 24-hour hackathon with 100+ participants and 20+ projects built." },
    { year: "2023", title: "Mozilla Recognition", desc: "Officially recognized by Mozilla Foundation as a Campus Club. Community grew to 300+ members." },
    { year: "2024", title: "Open Source Sprint", desc: "Organized a month-long open source sprint — 20+ PRs merged into real Mozilla projects." },
    { year: "2025", title: "500 Members", desc: "Hit 500 active members. Launched our mentorship program pairing juniors with industry devs." },
];

function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const Icon = stat.icon;
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className="relative group"
        >
            <div className="relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Icon size={22} className="text-brand-purple mx-auto mb-3" />
                <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </div>
        </motion.div>
    );
}

function ValueCard({ value, index }: { value: typeof VALUES[0]; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const Icon = value.icon;
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-white/20 transition-all duration-300 cursor-default overflow-hidden"
        >
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 30% 30%, ${value.color}15, transparent 70%)` }}
            />
            <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${value.color}18`, border: `1px solid ${value.color}30` }}
            >
                <Icon size={20} style={{ color: value.color }} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{value.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
        </motion.div>
    );
}

export default function AboutPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], ["0%", "20%"]);
    const heroOpacity = useTransform(scrollY, [0, 350], [1, 0]);
    const [activeYear, setActiveYear] = useState("2025");

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">

            {/* ── HERO ── */}
            <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background blobs */}
                <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px]" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-purple/10 rounded-full blur-[80px]" />

                    {/* Grid lines */}
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

                    {/* Floating orbs */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                width: `${8 + i * 4}px`, height: `${8 + i * 4}px`,
                                top: `${15 + i * 16}%`, left: `${10 + i * 18}%`,
                                background: i % 2 === 0 ? "rgba(138,55,245,0.4)" : "rgba(6,182,212,0.3)",
                            }}
                            animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                        />
                    ))}
                </motion.div>

                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="relative z-10 text-center px-6 max-w-5xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 mb-8"
                    >
                        <Flame size={13} className="text-brand-purple" />
                        <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-purple">
                            Mozilla Firefox Club · VIT Bhopal
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-none"
                    >
                        We are the
                        <br />
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-purple-400 to-brand-cyan">
                                Open Web
                            </span>
                            {/* Underline glow */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full"
                            />
                        </span>
                        <br />
                        Community.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-gray-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        A university-wide community at <strong className="text-white">VIT Bhopal</strong> building
                        the future of the open web — one line of code, one contribution, one student at a time.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-center gap-4 flex-wrap"
                    >
                        <button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-brand-purple text-white font-bold text-sm hover:bg-brand-purple/80 transition-all shadow-lg shadow-brand-purple/30">
                            Join the Club
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all">
                            <Github size={16} />
                            Our GitHub
                        </button>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-700"
                >
                    <div className="w-px h-10 bg-gradient-to-b from-transparent to-brand-purple/50" />
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                </motion.div>
            </section>

            {/* ── STATS ── */}
            <section className="py-20 border-t border-white/5">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {STATS.map((stat, i) => <StatCard key={stat.label} stat={stat} index={i} />)}
                    </div>
                </div>
            </section>

            {/* ── WHO WE ARE (split layout) ── */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left — text */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Who We Are</span>
                            </div>
                            <h2 className="text-5xl font-black text-white mb-6 leading-tight">
                                Students building
                                <span className="text-brand-purple"> the web</span>
                                <br />they believe in.
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                The Mozilla Firefox Club at VIT Bhopal is a student-led community dedicated to the open web philosophy. We run workshops, hackathons, and open source sprints — not for resumes, but because we genuinely care about the internet staying open.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Whether you're a first-year curious about web dev or a final-year contributing to Mozilla projects — there's a place for you here.
                            </p>
                            <div className="flex items-center gap-3">
                                {[Github, Twitter, Linkedin].map((Icon, i) => (
                                    <button key={i} className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-purple/50 hover:bg-brand-purple/10 transition-all">
                                        <Icon size={16} />
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right — glowing card stack */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            {/* Background card */}
                            <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border border-brand-purple/20 bg-brand-purple/5" />
                            <div className="absolute -top-2 -right-2 w-full h-full rounded-3xl border border-white/5 bg-white/[0.02]" />

                            {/* Main card */}
                            <div className="relative rounded-3xl border border-white/10 bg-[#0e0e0e] p-8 overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-purple/20 rounded-full blur-[60px]" />

                                {/* Firefox logo area */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple/30 to-brand-cyan/20 border border-white/10 flex items-center justify-center">
                                        <Flame size={28} className="text-brand-purple" />
                                    </div>
                                    <div>
                                        <div className="text-white font-black text-lg">Mozilla Firefox Club</div>
                                        <div className="text-gray-500 text-sm">VIT Bhopal University</div>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {["Open Source", "Web Dev", "Privacy", "Hackathons", "Mozilla", "Community"].map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Mini stats */}
                                <div className="grid grid-cols-3 gap-3">
                                    {[["500+", "Members"], ["50+", "Events"], ["3+", "Years"]].map(([val, lbl]) => (
                                        <div key={lbl} className="text-center p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                                            <div className="text-white font-black text-xl">{val}</div>
                                            <div className="text-gray-600 text-xs">{lbl}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── VALUES ── */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">What We Stand For</span>
                        </div>
                        <h2 className="text-5xl font-black text-white">Our Values</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {VALUES.map((v, i) => <ValueCard key={v.title} value={v} index={i} />)}
                    </div>
                </div>
            </section>

            {/* ── TIMELINE ── */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-4">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Our Journey</span>
                        </div>
                        <h2 className="text-5xl font-black text-white">How We Got Here</h2>
                    </motion.div>

                    {/* Year tabs */}
                    <div className="flex gap-2 justify-center flex-wrap mb-12">
                        {TIMELINE.map(t => (
                            <button
                                key={t.year}
                                onClick={() => setActiveYear(t.year)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeYear === t.year
                                    ? "bg-brand-purple text-white shadow-lg shadow-brand-purple/30"
                                    : "bg-white/5 text-gray-500 border border-white/10 hover:text-white"
                                    }`}
                            >
                                {t.year}
                            </button>
                        ))}
                    </div>

                    {/* Timeline content */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-purple/50 via-brand-purple/20 to-transparent" />

                        <div className="space-y-4">
                            {TIMELINE.map((item, i) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setActiveYear(item.year)}
                                    className={`relative flex gap-6 pl-20 py-5 pr-6 rounded-2xl cursor-pointer transition-all duration-300 ${activeYear === item.year
                                        ? "bg-brand-purple/10 border border-brand-purple/20"
                                        : "hover:bg-white/[0.03] border border-transparent"
                                        }`}
                                >
                                    {/* Dot */}
                                    <div className={`absolute left-[26px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${activeYear === item.year
                                        ? "border-brand-purple bg-brand-purple shadow-lg shadow-brand-purple/50"
                                        : "border-white/20 bg-[#0e0e0e]"
                                        }`}>
                                        {activeYear === item.year && (
                                            <div className="w-2 h-2 rounded-full bg-white" />
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className={`text-sm font-black font-mono ${activeYear === item.year ? "text-brand-purple" : "text-gray-600"}`}>
                                                {item.year}
                                            </span>
                                            <span className="text-white font-bold">{item.title}</span>
                                        </div>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-12 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/15 via-transparent to-brand-cyan/10" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center mx-auto mb-6">
                                <Flame size={32} className="text-brand-purple" />
                            </div>
                            <h2 className="text-4xl font-black text-white mb-4">Ready to build with us?</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Join 500+ students who are learning, building, and contributing to the open web. No experience required — just curiosity.
                            </p>
                            <div className="flex items-center justify-center gap-4 flex-wrap">
                                <button className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-purple text-white font-bold hover:bg-brand-purple/80 transition-all shadow-lg shadow-brand-purple/30">
                                    Join the Club
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-all">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
