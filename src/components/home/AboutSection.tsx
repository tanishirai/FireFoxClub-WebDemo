"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURES_DATA } from "@/constants/data";

export default function AboutSection() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-cyan/5 blur-[100px] rounded-full -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-stretch">

                    {/* Left text area */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 flex flex-col justify-center"
                    >
                        <div className="mb-8">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-brand-purple text-sm font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-brand-purple/20 bg-brand-purple/5 inline-block mb-6 shadow-sm shadow-purple-500/10"
                            >
                                Our DNA
                            </motion.span>
                            <h2 className="text-5xl md:text-6xl font-black mt-2 mb-8 leading-[1.1] text-white tracking-tight">
                                Empowering the <br />
                                <span
                                    className="text-transparent bg-clip-text"
                                    style={{
                                        backgroundImage: "linear-gradient(180deg, #8a37f5 20%, rgba(138,55,245,0.05) 100%)"
                                    }}
                                >
                                    Open Web.
                                </span>
                            </h2>
                            <div className="space-y-6 max-w-xl">
                                <p className="text-gray-300 text-xl leading-relaxed font-light">
                                    The Mozilla Firefox Club is more than just a college club. We are a community of <span className="text-white font-medium">pioneers</span>, <span className="text-white font-medium">builders</span>, and <span className="text-white font-medium">advocates</span>.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed font-light">
                                    Guided by Mozilla&apos;s mission, we champion privacy, open-source innovation, and digital inclusion, creating a space where technology serves humanity.
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 flex flex-wrap gap-4">
                            <Link href="/about" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-brand-purple hover:text-white transition-all duration-300 group shadow-xl shadow-white/5">
                                Explore Our Vision <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                            </Link>
                            <div className="flex -space-x-3 items-center ml-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center overflow-hidden">
                                        <div className={`w-full h-full bg-gradient-to-br ${i % 2 === 0 ? "from-brand-purple to-purple-600" : "from-gray-700 to-gray-900"}`} />
                                    </div>
                                ))}
                                <span className="ml-4 text-sm text-gray-400 font-medium">+200 members</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Bento Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full flex flex-col justify-center"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 min-h-[500px]">
                            {/* Left Column */}
                            <div className="md:col-span-7 flex flex-col gap-5">
                                {/* Open Source (Large Card) */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="flex-1 min-h-[300px] relative p-8 rounded-[2rem] overflow-hidden group bg-gradient-to-br from-[#2a130b]/90 to-black/90 border border-brand-purple/30 hover:border-brand-purple/60 transition-all duration-500 shadow-2xl backdrop-blur-md flex flex-col justify-end"
                                >
                                    {/* Watermark Icon */}
                                    <div className="absolute top-8 right-8 text-brand-purple/10 group-hover:scale-110 transition-transform duration-700">
                                        <div className="w-20 h-20 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                                            {FEATURES_DATA[0].icon}
                                        </div>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6 border border-brand-purple/20 shadow-lg shadow-purple-500/10">
                                            {FEATURES_DATA[0].icon}
                                        </div>
                                        <h3 className="text-3xl font-black mb-2 text-white tracking-tight">{FEATURES_DATA[0].title}</h3>
                                        <p className="text-gray-300 text-lg font-light">{FEATURES_DATA[0].desc}</p>
                                    </div>
                                </motion.div>

                                {/* Innovation (Horizontal Card) */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="h-auto md:h-36 relative p-6 rounded-[2rem] overflow-hidden group bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-xl"
                                >
                                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/5 group-hover:bg-white/10 transition-colors">
                                        {FEATURES_DATA[3].icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1 text-white tracking-tight">{FEATURES_DATA[3].title}</h3>
                                        <p className="text-gray-400 font-light text-sm md:text-base">{FEATURES_DATA[3].desc}</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Column */}
                            <div className="md:col-span-5 flex flex-col gap-5">
                                {/* Community */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="flex-1 min-h-[220px] relative p-8 rounded-[2rem] overflow-hidden group bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col shadow-xl"
                                >
                                    <div className="text-brand-cyan mb-6">
                                        <div className="w-10 h-10 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                                            {FEATURES_DATA[1].icon}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-white tracking-tight">{FEATURES_DATA[1].title}</h3>
                                    <p className="text-gray-400 font-light leading-relaxed">{FEATURES_DATA[1].desc}</p>
                                </motion.div>

                                {/* Events */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="flex-1 min-h-[220px] relative p-8 rounded-[2rem] overflow-hidden group bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col shadow-xl"
                                >
                                    <div className="text-brand-purple mb-6">
                                        <div className="w-10 h-10 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                                            {FEATURES_DATA[2].icon}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-white tracking-tight">{FEATURES_DATA[2].title}</h3>
                                    <p className="text-gray-400 font-light leading-relaxed">{FEATURES_DATA[2].desc}</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
