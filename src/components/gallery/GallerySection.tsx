"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { GALLERY_DATA } from "@/constants/data";

type GalleryImage = { src: string; caption: string; span: string; category?: string };

export default function GallerySection() {
    const [mounted, setMounted] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");
    const [lightbox, setLightbox] = useState<{ images: GalleryImage[]; index: number } | null>(null);
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const heroRef = useRef<HTMLDivElement>(null);

    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 400], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (!lightbox) return;
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
            if (e.key === "Escape") closeLightbox();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [lightbox]);

    const allImages = GALLERY_DATA.flatMap(g =>
        g.images.map(img => ({ ...img, category: g.category }))
    );
    const categories = ["All", ...GALLERY_DATA.map(g => g.category)];
    const filtered = activeCategory === "All"
        ? allImages
        : allImages.filter(img => img.category === activeCategory);

    const openLightbox = (index: number) => setLightbox({ images: filtered, index });
    const closeLightbox = () => setLightbox(null);
    const prev = () => lightbox && setLightbox({ ...lightbox, index: (lightbox.index - 1 + filtered.length) % filtered.length });
    const next = () => lightbox && setLightbox({ ...lightbox, index: (lightbox.index + 1) % filtered.length });
    const [direction, setDirection] = useState(0);

    const goPrev = () => { setDirection(-1); prev(); };
    const goNext = () => { setDirection(1); next(); };

    if (!mounted) return null;

    // Lightbox rendered via portal — completely outside navbar's DOM tree
const lightboxPortal = mounted && createPortal(
    <AnimatePresence>
        {lightbox && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{
                    position: "fixed", inset: 0, zIndex: 9999,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "60px 48px 32px",
                    background: "rgba(0,0,0,0.92)",
                    backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)",
                    overflowY: "auto"
                }}
                onClick={closeLightbox}
            >
                {/* Glow */}
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                    <div style={{ width: "500px", height: "500px", background: "rgba(138,55,245,0.12)", borderRadius: "50%", filter: "blur(120px)" }} />
                </div>

                {/* Close */}
                <button
                    onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                    style={{
                        position: "fixed", top: "20px", right: "20px", zIndex: 10000,
                        width: "42px", height: "42px", borderRadius: "50%",
                        background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "white", cursor: "pointer", transition: "all 0.2s"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(239,68,68,0.55)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                >
                    <X size={18} />
                </button>

                {/* Content */}
                <motion.div
                    initial={{ scale: 0.88, opacity: 0, y: 24 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.88, opacity: 0, y: 24 }}
                    transition={{ type: "spring", damping: 22, stiffness: 220 }}
                    style={{ position: "relative", width: "100%", maxWidth: "960px", flexShrink: 0 }}
                    onClick={e => e.stopPropagation()}
                >
                    {/* Image box */}
                    <div style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16/9",
                        borderRadius: "18px",
                        overflow: "hidden",
                        background: "#0e0e0e",
                        border: "1px solid rgba(255,255,255,0.08)",
                        boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(138,55,245,0.15)"
                    }}>
                        {/* Animated image — slides in from direction */}
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={lightbox.images[lightbox.index].src}
                                custom={direction}
                                variants={{
                                    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
                                    center: { x: "0%", opacity: 1 },
                                    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: "spring", damping: 28, stiffness: 260, mass: 0.8 }}
                                style={{ position: "absolute", inset: 0 }}
                            >
                                <Image
                                    src={lightbox.images[lightbox.index].src}
                                    alt={lightbox.images[lightbox.index].caption}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    unoptimized
                                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Bottom gradient */}
                        <div style={{
                            position: "absolute", bottom: 0, left: 0, right: 0, height: "35%",
                            background: "linear-gradient(to top, rgba(0,0,0,0.65), transparent)",
                            pointerEvents: "none", zIndex: 2
                        }} />

                        {/* Prev */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                            style={{
                                position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)",
                                width: "44px", height: "44px", borderRadius: "50%", zIndex: 3,
                                background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.12)",
                                backdropFilter: "blur(8px)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                color: "white", cursor: "pointer", transition: "all 0.2s"
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = "rgba(138,55,245,0.6)"}
                            onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0.55)"}
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Next */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                            style={{
                                position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)",
                                width: "44px", height: "44px", borderRadius: "50%", zIndex: 3,
                                background: "rgba(0,0,0,0.55)", border: "1px solid rgba(255,255,255,0.12)",
                                backdropFilter: "blur(8px)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                color: "white", cursor: "pointer", transition: "all 0.2s"
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = "rgba(138,55,245,0.6)"}
                            onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0.55)"}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Caption */}
                    <div style={{ marginTop: "14px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px" }}>
                        <div>
                            <p style={{ color: "white", fontWeight: 700, fontSize: "16px", margin: "0 0 2px 0" }}>
                                {lightbox.images[lightbox.index].caption}
                            </p>
                            <p style={{ color: "#a855f7", fontSize: "13px", margin: 0 }}>
                                {lightbox.images[lightbox.index].category}
                            </p>
                        </div>
                        <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px", fontFamily: "monospace" }}>
                            {lightbox.index + 1} / {filtered.length}
                        </span>
                    </div>

                    {/* Thumbnails — extra bottom padding so nothing clips */}
                    <div style={{
                        display: "flex", gap: "8px",
                        marginTop: "12px",
                        paddingBottom: "20px",
                        overflowX: "auto",
                        scrollbarWidth: "none" as const
                    }}>
                        {lightbox.images.map((img, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.1, y: -2 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setDirection(i > lightbox.index ? 1 : -1);
                                    setLightbox({ ...lightbox, index: i });
                                }}
                                style={{
                                    position: "relative", flexShrink: 0,
                                    width: "62px", height: "44px",
                                    borderRadius: "8px", overflow: "hidden", cursor: "pointer",
                                    opacity: i === lightbox.index ? 1 : 0.4,
                                    outline: i === lightbox.index ? "2px solid #a855f7" : "2px solid transparent",
                                    outlineOffset: "2px",
                                    transition: "opacity 0.2s"
                                }}
                            >
                                <Image src={img.src} alt="" fill style={{ objectFit: "cover" }} unoptimized
                                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>,
    document.body
);



    return (
        <>
            <div className="flex flex-col min-h-screen overflow-x-hidden">

                {/* ── PARALLAX HERO ── */}
                <section ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-purple/15 blur-[140px]" />
                        <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-brand-cyan/10 blur-[120px]" />
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-2xl border border-white/5 bg-white/[0.02]"
                                style={{
                                    width: `${80 + i * 30}px`,
                                    height: `${60 + i * 25}px`,
                                    top: `${10 + (i * 15) % 70}%`,
                                    left: `${5 + (i * 17) % 85}%`,
                                }}
                                animate={{ y: [0, -15, 0], rotate: [0, i % 2 === 0 ? 3 : -3, 0] }}
                                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                            />
                        ))}
                    </motion.div>

                    <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 text-center px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass mb-6">
                                <Images size={13} className="text-brand-purple" />
                                <span className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400">
                                    Moments & Memories
                                </span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4">
                                Our <span className="text-brand-purple">Gallery</span>
                            </h1>
                            <p className="text-gray-400 text-lg max-w-xl mx-auto">
                                Real moments from our hackathons, workshops, and community meetups at{" "}
                                <strong className="text-white">VIT Bhopal</strong>.
                            </p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="mt-12 flex flex-col items-center gap-2 text-gray-700"
                        >
                            <div className="w-px h-10 bg-gradient-to-b from-transparent to-brand-purple/40" />
                            <span className="text-xs tracking-widest uppercase">Scroll</span>
                        </motion.div>
                    </motion.div>
                </section>

                {/* ── HORIZONTAL SCROLL EVENT STRIPS ── */}
                <section className="py-16 relative">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="text-2xl font-black text-white">Browse by Event</h2>
                            <div className="h-px flex-1 mx-6 bg-white/5" />
                            <span className="text-gray-600 text-xs tracking-widest uppercase">{allImages.length} photos</span>
                        </div>

                        {GALLERY_DATA.map((group, gIdx) => (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: gIdx * 0.1 }}
                                className="mb-14"
                            >
                                <div className="flex items-center gap-4 mb-5">
                                    <div className={`h-[2px] w-8 bg-gradient-to-r ${group.color} rounded-full`} />
                                    <h3 className="text-white font-bold text-lg">{group.category}</h3>
                                    <span className="px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                                        {group.tag}
                                    </span>
                                    <span className="text-gray-700 text-xs">{group.images.length} photos</span>
                                </div>

                                <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory"
                                    style={{ scrollbarWidth: "none" }}>
                                    {group.images.map((img, imgIdx) => {
                                        const globalIdx = allImages.findIndex(a => a.src === img.src);
                                        return (
                                            <motion.div
                                                key={img.src}
                                                whileHover={{ scale: 1.03, y: -4 }}
                                                className="relative flex-shrink-0 snap-start rounded-2xl overflow-hidden cursor-pointer border border-white/[0.07] hover:border-brand-purple/40 transition-all duration-300 group"
                                                style={{ width: imgIdx === 0 ? "360px" : "260px", height: "220px" }}
                                                onClick={() => { setActiveCategory("All"); openLightbox(globalIdx); }}
                                                onMouseEnter={() => setHoveredIdx(globalIdx)}
                                                onMouseLeave={() => setHoveredIdx(null)}
                                            >
                                                <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-50`} />
                                                <Image src={img.src} alt={img.caption} fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                    unoptimized
                                                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={hoveredIdx === globalIdx ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                                    className="absolute inset-0 flex items-center justify-center"
                                                >
                                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                                        <ZoomIn size={20} className="text-white" />
                                                    </div>
                                                </motion.div>
                                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                                    <p className="text-white text-sm font-semibold leading-tight">{img.caption}</p>
                                                </div>
                                                {imgIdx === 0 && (
                                                    <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-brand-purple/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
                                                        Featured
                                                    </div>
                                                )}
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── ALL PHOTOS MASONRY ── */}
                <section className="py-16 bg-white/[0.01] border-t border-white/5">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex items-center gap-4 mb-10 flex-wrap">
                            <h2 className="text-2xl font-black text-white">All Photos</h2>
                            <div className="flex gap-2 flex-wrap">
                                {categories.map(cat => (
                                    <button key={cat} onClick={() => setActiveCategory(cat)}
                                        className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${activeCategory === cat
                                            ? "bg-brand-purple text-white shadow-lg shadow-brand-purple/30"
                                            : "bg-white/5 text-gray-400 border border-white/10 hover:border-brand-purple/30 hover:text-white"
                                            }`}>
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4">
                            <AnimatePresence>
                                {filtered.map((img, idx) => (
                                    <motion.div
                                        key={img.src} layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ delay: idx * 0.04 }}
                                        className="relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer border border-white/[0.07] hover:border-brand-purple/40 group mb-4 bg-[#141414]"
                                        style={{ aspectRatio: idx % 3 === 0 ? "4/5" : idx % 3 === 1 ? "16/9" : "1/1" }}
                                        onClick={() => openLightbox(idx)}
                                        whileHover={{ y: -4 }}
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${GALLERY_DATA.find(g => g.images.some(i => i.src === img.src))?.color
                                            ?? "from-brand-purple/30 to-brand-cyan/20"
                                            } opacity-60`} />
                                        <Image src={img.src} alt={img.caption} fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            unoptimized
                                            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                <p className="text-white text-sm font-semibold">{img.caption}</p>
                                                <p className="text-brand-purple text-xs">{img.category}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* Lightbox rendered directly on document.body via portal — above ALL components */}
            {lightboxPortal}
        </>
    );
}
