"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EVENTS_DATA } from "@/constants/data";

export default function UpcomingEvents() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 blur-[150px] rounded-full -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-orange text-sm font-bold tracking-[0.2em] uppercase mb-4 block"
                        >
                            Experience
                        </motion.span>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
                            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">Events</span>
                        </h2>
                    </div>
                    <Link href="/events" className="group flex items-center gap-3 text-white/60 hover:text-brand-orange transition-colors font-medium">
                        View Season Calendar <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {EVENTS_DATA.slice(0, 3).map((event, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }} 
                            className="group relative rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 hover:border-brand-orange/30 transition-all duration-500 flex flex-col h-full shadow-2xl backdrop-blur-sm"
                        >
                            {/* Image Placeholder with Gradient Overlay */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-110 ${
                                    i === 0 ? "from-brand-orange/40 to-black" : 
                                    i === 1 ? "from-brand-yellow/30 to-black" : 
                                    "from-gray-700 to-black"
                                }`} />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-wider">
                                        {event.type}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 mb-4 text-brand-orange font-bold text-sm tracking-tighter">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                                    {event.date}
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-brand-orange transition-colors leading-tight">
                                    {event.title}
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed font-light mb-8 flex-grow">
                                    Dynamic {event.type.toLowerCase()} designed to push boundaries and foster developer growth in the open-source ecosystem.
                                </p>
                                
                                <div className="mt-auto">
                                    <button className="w-full py-4 rounded-2xl bg-white/5 group-hover:bg-brand-orange text-white font-bold transition-all duration-300 border border-white/5 group-hover:border-brand-orange group-hover:shadow-lg group-hover:shadow-orange-500/20">
                                        Secure Your Spot
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
