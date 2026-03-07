"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, MapPin, Users, ArrowRight, Tag, ChevronRight } from "lucide-react";
import { EVENTS_DATA } from "@/constants/data";
import { useState } from "react";

const TYPE_COLORS: Record<string, string> = {
    "Tech Event": "border-brand-orange/30 text-brand-orange bg-brand-orange/5",
    "Workshop": "border-brand-yellow/30 text-brand-yellow bg-brand-yellow/5",
    "Meetup": "border-green-500/30 text-green-400 bg-green-500/5",
    "Talk": "border-brand-purple/30 text-brand-purple bg-brand-purple/5",
};

export default function EventsSection() {
    const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");

    const upcomingEvents = EVENTS_DATA.filter(e => e.status === "upcoming");
    const pastEvents = EVENTS_DATA.filter(e => e.status === "past");

    return (
        <div className="flex flex-col min-h-screen">

            {/* ── HERO ── */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-orange/20 blur-[120px] pointer-events-none" />
                <div className="absolute top-20 left-0 w-1/3 h-1/2 bg-brand-indigo/40 blur-[120px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass mb-6">
                            <span className="w-3 h-3 rounded-full bg-brand-orange animate-pulse" />
                            <span className="text-sm font-semibold tracking-wider uppercase text-gray-300">
                                Events & Workshops
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Where Learning <br />
                            <span className="text-brand-orange">Meets Action.</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                            Hackathons, workshops, talks, and meetups — all designed to push your skills forward and grow the community at{" "}
                            <strong className="text-white">VIT Bhopal</strong>.
                        </p>
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-6 mt-14"
                    >
                        {[
                            { value: `${upcomingEvents.length}`, label: "Upcoming Events" },
                            { value: "500+", label: "Total Attendees" },
                            { value: `${EVENTS_DATA.length}+`, label: "Events Hosted" },
                        ].map((s) => (
                            <div key={s.label} className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10">
                                <span className="text-2xl font-black text-brand-orange">{s.value}</span>
                                <span className="text-gray-400 text-sm">{s.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── FILTER TABS ── */}
            <section className="pb-10">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex items-center gap-3 flex-wrap">
                        {(["all", "upcoming", "past"] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide capitalize transition-all duration-300 ${filter === tab
                                    ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20"
                                    : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/20 hover:text-white"
                                    }`}
                            >
                                {tab === "all" ? "All Events" : tab === "upcoming" ? `Upcoming (${upcomingEvents.length})` : `Past (${pastEvents.length})`}
                            </button>
                        ))}
                    </div>
                    <div className="mt-6 h-px w-full bg-white/5" />
                </div>
            </section>

            {/* ── FEATURED CARD ── */}
            {filter !== "past" && upcomingEvents.length > 0 && (
                <section className="pb-12">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-5">Featured Event</p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-brand-orange/40 transition-all duration-500 bg-[#141414]"                        >
                            {/* Clean top accent line only */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-orange via-brand-yellow to-transparent" />

                            <div className="relative z-10 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                                {/* Left — date block */}
                                <div className="flex flex-col items-start">
                                    <div className="w-20 h-20 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex flex-col items-center justify-center mb-4">
                                        <span className="text-brand-orange text-2xl font-black leading-none">
                                            {upcomingEvents[0].date.split(" ")[1].replace(",", "")}
                                        </span>
                                        <span className="text-brand-orange/70 text-xs font-bold uppercase">
                                            {upcomingEvents[0].date.split(" ")[0]}
                                        </span>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full border text-xs font-bold tracking-widest uppercase ${TYPE_COLORS[upcomingEvents[0].type]}`}>
                                        {upcomingEvents[0].type}
                                    </span>
                                </div>

                                {/* Right — details */}
                                <div className="md:col-span-2">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Registrations Open</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-black text-white mb-3 group-hover:text-brand-orange transition-colors">
                                        {upcomingEvents[0].title}
                                    </h2>
                                    <p className="text-gray-400 font-light mb-6 leading-relaxed">
                                        {upcomingEvents[0].description}
                                    </p>

                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                                        <span className="flex items-center gap-1.5"><Clock size={13} /> {upcomingEvents[0].time}</span>
                                        <span className="flex items-center gap-1.5"><MapPin size={13} /> {upcomingEvents[0].location}</span>
                                        <span className="flex items-center gap-1.5"><Users size={13} /> {upcomingEvents[0].registered}/{upcomingEvents[0].seats} registered</span>
                                    </div>

                                    {/* Seat progress bar */}
                                    <div className="mb-6">
                                        <div className="flex justify-between text-xs text-gray-600 mb-1.5">
                                            <span>Seats filled</span>
                                            <span>{Math.round((upcomingEvents[0].registered / upcomingEvents[0].seats) * 100)}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(upcomingEvents[0].registered / upcomingEvents[0].seats) * 100}%` }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                                className="h-full bg-gradient-to-r from-brand-orange to-brand-yellow rounded-full"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3 items-center">
                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-bold rounded-xl shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 transition-all group/btn"
                                        >
                                            Register Now
                                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </motion.button>
                                        <div className="flex flex-wrap gap-2">
                                            {upcomingEvents[0].tags.map(tag => (
                                                <span key={tag} className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                                                    <Tag size={10} /> {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* ── EVENTS GRID ── */}
            <section className="pb-24">
                <div className="container mx-auto px-6 max-w-6xl">
                    {filter !== "past" && upcomingEvents.length > 1 && (
                        <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-5">More Upcoming</p>
                    )}
                    {filter === "past" && (
                        <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-5">Past Events</p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {(filter === "upcoming" ? upcomingEvents.slice(1) :
                            filter === "past" ? pastEvents :
                                EVENTS_DATA.slice(1)
                        ).map((event, idx) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                whileHover={{ y: -5 }}
                                className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-brand-orange/40 transition-all duration-500 bg-[#141414]"                            >
                                <div className={`h-[2px] w-full bg-gradient-to-r ${event.gradient}`} />
                                {event.status === "past" && (
                                    <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
                                )}

                                <div className="relative z-20 p-6">
                                    <div className="flex items-start justify-between gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center flex-shrink-0">
                                            <span className="text-white text-base font-black leading-none">
                                                {event.date.split(" ")[1].replace(",", "")}
                                            </span>
                                            <span className="text-gray-500 text-[9px] font-bold uppercase">
                                                {event.date.split(" ")[0]}
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold tracking-widest uppercase ${TYPE_COLORS[event.type]}`}>
                                                {event.type}
                                            </span>
                                            {event.status === "past" && (
                                                <span className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">Completed</span>
                                            )}
                                            {event.status === "upcoming" && event.registered >= event.seats && (
                                                <span className="text-red-400 text-[10px] uppercase tracking-widest font-bold">Full</span>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-black text-white mb-2 group-hover:text-brand-orange transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light leading-relaxed mb-4 line-clamp-2">
                                        {event.description}
                                    </p>

                                    <div className="space-y-1.5 text-xs text-gray-600 mb-4">
                                        <div className="flex items-center gap-1.5"><Clock size={11} /> {event.time}</div>
                                        <div className="flex items-center gap-1.5"><MapPin size={11} /> {event.location}</div>
                                    </div>

                                    {event.status === "upcoming" && (
                                        <div className="mb-4">
                                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${(event.registered / event.seats) * 100}%` }}
                                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                                    className="h-full bg-gradient-to-r from-brand-orange to-brand-yellow rounded-full"
                                                />
                                            </div>
                                            <p className="text-gray-700 text-[10px] mt-1">{event.registered}/{event.seats} seats</p>
                                        </div>
                                    )}

                                    <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                                        <div className="flex gap-1.5 flex-wrap">
                                            {event.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-500">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        {event.status === "upcoming" && event.registered < event.seats && (
                                            <button className="flex items-center gap-1 text-brand-orange text-xs font-bold hover:gap-2 transition-all">
                                                Register <ChevronRight size={12} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/5 to-transparent pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                        <div>
                            <p className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-3">Stay Updated</p>
                            <h2 className="text-4xl font-black text-white tracking-tight leading-tight mb-3">
                                Never miss<br />an event.
                            </h2>
                            <p className="text-gray-500 text-sm font-light max-w-sm">
                                Follow us on social media or join the club to get notified about upcoming events and workshops.
                            </p>
                        </div>
                        <Link href="/join" className="flex-shrink-0">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-white font-black rounded-xl shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 transition-all duration-300 group whitespace-nowrap"
                            >
                                Join the Club
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
