"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Dancing_Script, Black_Ops_One, Geo } from "next/font/google";
import { MouseEvent, useEffect } from "react";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["700"] });
const blackOpsOne = Black_Ops_One({ subsets: ["latin"], weight: ["400"] });
const geo = Geo({ subsets: ["latin"], weight: ["400"] });

export default function HeroSection() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Scroll parallax effect
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 800], [0, 200]);
    const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

    useEffect(() => {
        // Set initial spotlight position to the center of the screen
        mouseX.set(window.innerWidth / 2);
        mouseY.set(window.innerHeight / 3);
    }, [mouseX, mouseY]);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // Dynamic mask using Framer Motion
    const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black 30%, transparent 100%)`;

    // Centralised text content renderer to ensure pixel-perfect duplication
    const renderContent = (isRevealed: boolean) => (
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto w-full">
            {/* Badge */}
            <div
                className={`flex items-center gap-2 px-4 py-2 rounded-full mb-8 border transition-all ${
                    isRevealed
                        ? "bg-brand-purple/20 border-brand-purple/50"
                        : "bg-white/5 border-white/5"
                }`}
            >
                <span className={`text-xs font-bold tracking-widest uppercase ${isRevealed ? "text-brand-purple" : "text-gray-400"}`}>
                    New
                </span>
                <span className={`text-sm ${isRevealed ? "text-gray-200" : "text-gray-500"}`}>
                    Build bigger, faster with Mozilla Firefox Club
                </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-center mb-6 leading-tight flex flex-col gap-2 md:gap-4 w-full">
                <span
                    className={`text-4xl sm:text-5xl md:text-6xl font-normal uppercase tracking-wide ${blackOpsOne.className} transition-colors ${
                        isRevealed ? "text-white" : "text-gray-600"
                    }`}
                >
                    Build, collaborate, and
                </span>
                <span
                    className={`text-5xl sm:text-6xl md:text-7xl ${dancingScript.className} transition-colors ${
                        isRevealed ? "text-brand-purple" : "text-gray-600"
                    }`}
                >
                    Innovate together
                </span>
            </h1>

            {/* Description */}
            <p
                className={`text-xl md:text-2xl text-center max-w-3xl leading-relaxed ${geo.className} transition-colors ${
                    isRevealed ? "text-gray-200" : "text-gray-600"
                }`}
            >
                Join our vibrant community of developers, designers, and tech enthusiasts. Learn, build, and create amazing open-source projects with Mozilla Firefox Club at VIT Bhopal.
            </p>
        </div>
    );

    return (
        <section
            className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden bg-transparent group pt-16"
            onMouseMove={handleMouseMove}
        >
            {/* 1. Interactive Text Block (Scrolls and tracks mouse) */}
            <motion.div 
                className="relative z-10 w-full grid px-6"
                style={{ y: yText, opacity: opacityText }}
            >
                {/* Layer A - Blurred Background - Reduced blur from 10px to 4px */}
                <div className="col-start-1 row-start-1 w-full select-none pointer-events-none blur-[4px] opacity-40">
                    {renderContent(false)}
                </div>

                {/* Layer B - Clear Foreground (Masked by Spotlight) */}
                <motion.div
                    className="col-start-1 row-start-1 w-full pointer-events-none z-20"
                    style={{ maskImage, WebkitMaskImage: maskImage } as any}
                >
                    {renderContent(true)}
                </motion.div>
            </motion.div>

            {/* 2. Interactive CTA Button Block - Stays perfectly crisp below */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-30 mt-16 px-6"
            >
                <Link href="/join">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-2xl shadow-xl hover:shadow-purple-500/20 hover:bg-brand-purple hover:text-white transition-all duration-300 group"
                    >
                        Get Started
                        <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                </Link>
            </motion.div>
        </section>
    );
}
