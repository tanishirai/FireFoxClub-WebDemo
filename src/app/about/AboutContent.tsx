"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, History, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutContent() {
    const timelineEvents = [
        { year: "2018", title: "Club Inception", desc: "Mozilla Firefox Club was officially founded at VIT Bhopal with a core team of 10 open-source enthusiasts." },
        { year: "2019", title: "First Hackathon", desc: "Hosted our very first university-wide open-source hackathon with over 200 participants." },
        { year: "2021", title: "Virtual Expansion", desc: "Transitioned to online events during the pandemic, growing our digital footprint and community reach." },
        { year: "2023", title: "Mozilla Partnership", desc: "Recognized as a premier developer community powered by Mozilla's core initiatives." },
        { year: "Present", title: "Innovation Hub", desc: "Currently standing strong with over 500+ members, building impactful tech and fostering a culture of innovation." },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero / What is MFC Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-purple/20 blur-[120px] pointer-events-none"></div>
                <div className="absolute top-20 left-0 w-1/3 h-1/2 bg-brand-indigo/40 blur-[120px] pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass mb-6">
                            <span className="w-3 h-3 rounded-full bg-brand-purple animate-pulse"></span>
                            <span className="text-sm font-semibold tracking-wider uppercase text-gray-300">Powered by Mozilla</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            About <br /><span className="text-brand-purple">Mozilla Firefox Club</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-8">
                            We are a dynamic, university-wide community based at <strong className="text-white">VIT Bhopal University</strong>.
                            Our focus is on spreading awareness about open-source technologies, promoting an open web, and giving students a platform to build, learn, and innovate.
                        </p>

                        {/* Logos / Images Placeholder styling */}
                        <div className="flex justify-center items-center gap-8 mt-12 opacity-90 transition-all duration-500">
                            <div className="flex items-center justify-center w-24 h-24 rounded-full border border-white/10 glass hover:bg-white/5 transition-colors">
                                <span className="font-bold text-2xl text-white">VIT</span>
                            </div>
                            <div className="flex items-center justify-center w-36 h-36 relative filter drop-shadow-[0_0_15px_rgba(255,113,57,0.4)]">
                                <Image src="/firefox-logo.svg" alt="Firefox Logo" fill className="object-contain" />
                            </div>
                            <div className="flex items-center justify-center w-24 h-24 rounded-full border border-white/10 glass hover:bg-white/5 transition-colors">
                                <span className="font-bold text-xl text-white">Mozilla</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-black/40 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass p-10 rounded-3xl border border-brand-purple/20 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-2 h-full bg-brand-purple"></div>
                            <Target size={40} className="text-brand-purple mb-6 group-hover:scale-110 transition-transform" />
                            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                To empower students by providing them with the necessary resources, mentorship, and opportunities to dive deep into Web Development, Open Source, and emerging technologies. We aim to bridge the gap between academic learning and industry standards.
                            </p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass p-10 rounded-3xl border border-brand-cyan/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-2 h-full bg-brand-cyan"></div>
                            <Lightbulb size={40} className="text-brand-cyan mb-6 group-hover:scale-110 transition-transform" />
                            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                To build a sustainable ecosystem of developers at VIT Bhopal who actively contribute to open-source projects, innovate continuously, and advocate for an open, accessible, and secure internet for all.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features & Description */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Join <span className="text-brand-purple">Us?</span></h2>
                    </div>
                </div>
            </section>
        </div>
    );
}
