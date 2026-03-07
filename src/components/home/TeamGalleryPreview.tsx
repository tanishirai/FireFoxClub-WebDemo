"use client";


import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TEAM_MEMBERS_PREVIEW } from "@/constants/data";


export default function TeamGalleryPreview() {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">


                    {/* Team Preview */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col group/team"
                    >
                        <div className="mb-10">
                            <span className="text-brand-orange text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Our People</span>
                            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
                                Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">Leadership</span>
                            </h2>
                        </div>
                        <p className="text-gray-400 mb-10 text-xl leading-relaxed font-light">
                            Student leaders and open-source advocates driving innovation and community growth across the campus.
                        </p>

                        <div className="flex flex-col gap-6 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 group-hover/team:bg-white/[0.07] transition-all duration-500">
                            <div className="flex -space-x-4 items-center">
                                {TEAM_MEMBERS_PREVIEW.map((member) => (
                                    <motion.div 
                                        key={member.name}
                                        whileHover={{ y: -8, scale: 1.1 }}
                                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-sm font-black text-white border-4 border-black shadow-xl`}
                                        title={`${member.name} — ${member.role}`}
                                    >
                                        {member.initials}
                                    </motion.div>
                                ))}
                                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-sm font-bold text-gray-400 border-4 border-black">
                                    +24
                                </div>
                                <div className="ml-8 hidden sm:block">
                                    <div className="text-white font-bold">Leading Team</div>
                                    <div className="text-gray-500 text-sm">Open Web Pioneers</div>
                                </div>
                            </div>
                            
                            <div className="h-px bg-white/5 w-full my-2" />
                            
                            <Link href="/team" className="group flex items-center gap-3 text-white hover:text-brand-orange transition-all font-bold group-hover/team:translate-x-2">
                                Discover the Full Team <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Gallery Preview */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col group/gallery"
                    >
                        <div className="mb-10">
                            <span className="text-brand-yellow text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Captures</span>
                            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
                                Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-orange">Moments</span>
                            </h2>
                        </div>
                        
                        {/* Interactive Gallery Preview with Grid */}
                        <div className="grid grid-cols-2 gap-4 h-full min-h-[350px]">
                            <motion.div 
                                whileHover={{ scale: 0.98 }}
                                className="relative rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 group/img"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/40 to-black group-hover/img:opacity-50 transition-all" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all font-black text-white tracking-widest text-xs uppercase">
                                    Launch Pad 2024
                                </div>
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 0.98 }}
                                className="relative rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 group/img"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/30 to-black group-hover/img:opacity-50 transition-all" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all font-black text-white tracking-widest text-xs uppercase">
                                    Hack-a-thon
                                </div>
                            </motion.div>
                        </div>

                        <Link href="/gallery" className="mt-8 group flex items-center gap-3 text-white hover:text-brand-yellow transition-all font-bold group-hover/gallery:-translate-x-2 justify-end">
                            Enter the Gallery <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
