"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter, ArrowRight, Crown, Cpu, Settings2 } from "lucide-react";
import { TEAM_DATA } from "@/constants/data";

const CATEGORY_META: Record<string, { icon: React.ReactNode; borderColor: string; badgeClass: string }> = {
    Leadership: {
        icon: <Crown size={13} />,
        borderColor: "hover:border-brand-purple/50",
        badgeClass: "border-brand-purple/30 text-brand-purple bg-brand-purple/5",
    },
    Technical: {
        icon: <Cpu size={13} />,
        borderColor: "hover:border-brand-cyan/50",
        badgeClass: "border-brand-cyan/30 text-brand-cyan bg-brand-cyan/5",
    },
    Operations: {
        icon: <Settings2 size={13} />,
        borderColor: "hover:border-brand-purple/50",
        badgeClass: "border-brand-purple/30 text-brand-purple bg-brand-purple/5",
    },
};

export default function TeamSection() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* ── HERO ── */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-purple/20 blur-[120px] pointer-events-none" />
                <div className="absolute top-20 left-0 w-1/3 h-1/2 bg-brand-indigo/40 blur-[120px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass mb-6">
                            <span className="w-3 h-3 rounded-full bg-brand-purple animate-pulse" />
                            <span className="text-sm font-semibold tracking-wider uppercase text-gray-300">
                                Our Core Team
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Meet the <span className="text-brand-purple">Team</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                            The passionate student leaders and open-source advocates driving
                            innovation and community growth at{" "}
                            <strong className="text-white">VIT Bhopal</strong>.
                        </p>
                    </motion.div>
                    <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
            </section>

            {/* ── TEAM SECTIONS ── */}
            {TEAM_DATA.map((group, groupIdx) => {
                const meta = CATEGORY_META[group.category];
                return (
                    <section key={group.category} className="pb-20">
                        <div className="container mx-auto px-6 max-w-6xl">

                            {/* Category Label */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: groupIdx * 0.05 }}
                                className="flex items-center gap-4 mb-10"
                            >
                                <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase ${meta?.badgeClass}`}>
                                    {meta?.icon}
                                    {group.category}
                                </span>
                                <div className="flex-1 h-px bg-white/5" />
                                <span className="text-gray-700 text-xs tracking-widest uppercase">{group.members.length} members</span>
                            </motion.div>

                            {/* Cards Grid */}
                            <div className={`grid gap-4 ${
                                group.members.length === 2
                                    ? "grid-cols-1 sm:grid-cols-2 max-w-2xl"
                                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                            }`}>
                                {group.members.map((member, idx) => (
                                    <motion.div
                                        key={member.name}
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                                        whileHover={{ y: -5 }}
                                        className={`group relative rounded-2xl border border-white/[0.06] bg-[#0c0c0c] transition-all duration-400 overflow-hidden ${meta?.borderColor}`}
                                    >
                                        {/* Top accent line */}
                                        <div className={`h-[2px] w-full bg-gradient-to-r ${member.gradient} opacity-60`} />

                                        <div className="p-6">
                                            {/* Avatar Row */}
                                            <div className="flex items-center gap-4 mb-5">
                                                {/* Circular Avatar */}
                                                <div className={`relative w-16 h-16 rounded-full flex-shrink-0 ring-2 ring-white/10 group-hover:ring-brand-purple/40 transition-all duration-300 overflow-hidden bg-[#1a1a1a]`}>
                                                    <Image
                                                        src={member.image}
                                                        alt={member.name}
                                                        fill
                                                        className="object-cover object-center"
                                                        unoptimized
                                                    />
                                                </div>

                                                {/* Name + Role */}
                                                <div className="min-w-0">
                                                    <h3 className="text-base font-black text-white tracking-tight group-hover:text-brand-purple transition-colors duration-300 truncate">
                                                        {member.name}
                                                    </h3>
                                                    <span className={`inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-md border text-[10px] font-bold tracking-widest uppercase ${meta?.badgeClass}`}>
                                                        {meta?.icon}
                                                        {member.role}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Bio */}
                                            <p className="text-gray-500 text-sm leading-relaxed font-light mb-5 min-h-[3rem]">
                                                {member.bio}
                                            </p>

                                            {/* Divider + Socials */}
                                            <div className="pt-4 border-t border-white/[0.05] flex items-center gap-2">
                                                <a
                                                    href={member.socials.github}
                                                    aria-label="GitHub"
                                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-white/8 transition-all"
                                                >
                                                    <Github size={14} />
                                                </a>
                                                <a
                                                    href={member.socials.linkedin}
                                                    aria-label="LinkedIn"
                                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all"
                                                >
                                                    <Linkedin size={14} />
                                                </a>
                                                <a
                                                    href={member.socials.twitter}
                                                    aria-label="Twitter"
                                                    className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-all"
                                                >
                                                    <Twitter size={14} />
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* ── CTA ── */}
            <section className="py-28 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/5 to-transparent pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                        <div>
                            <p className="text-brand-purple text-xs font-bold tracking-widest uppercase mb-3">Open Positions</p>
                            <h2 className="text-4xl font-black text-white tracking-tight leading-tight mb-3">
                                Want to join<br />this team?
                            </h2>
                            <p className="text-gray-500 text-sm font-light max-w-sm">
                                Applications open every semester. We welcome students from all backgrounds — tech or non-tech.
                            </p>
                        </div>
                        <Link href="/join" className="flex-shrink-0">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-purple text-white font-black rounded-xl shadow-lg shadow-brand-purple/20 hover:shadow-brand-purple/40 transition-all duration-300 group whitespace-nowrap"
                            >
                                Apply Now
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
