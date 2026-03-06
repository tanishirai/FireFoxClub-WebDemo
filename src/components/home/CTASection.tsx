"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-32 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.6 }} 
                    viewport={{ once: true }} 
                    className="max-w-3xl mx-auto bg-black/60 backdrop-blur-md p-12 md:p-16 rounded-[2.5rem] border border-white/10 shadow-2xl"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
                        Ready to join our <span className="text-brand-orange">community?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Be part of Mozilla Firefox Club and collaborate with talented developers, designers, and innovators pushing the boundaries of open-source technology.
                    </p>
                    <Link href="/join">
                        <motion.button 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }} 
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-xl group"
                        >
                            Get Started Now <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
