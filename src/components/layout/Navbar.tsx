"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Team", path: "/team" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 w-full z-50 pointer-events-none">
      <div className="container mx-auto px-6 md:px-12 pointer-events-auto relative">
        <div 
          className={`relative flex justify-between items-center px-6 py-3 rounded-2xl transition-all duration-300 border overflow-hidden ${
            scrolled 
              ? "border-white/20 shadow-2xl shadow-brand-orange/10 scale-[0.98]" 
              : "border-white/10 shadow-lg"
          }`}
        >
          {/* Custom Wavy Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500" 
            style={{ 
              backgroundImage: "url('/NavBar.png')", 
              opacity: scrolled ? 0.9 : 0.6 
            }} 
          />
          {/* Dark Overlay to ensure text remains readable */}
          <div className={`absolute inset-0 backdrop-blur-sm transition-colors duration-500 z-0 ${scrolled ? 'bg-black/40' : 'bg-black/60'}`} />

          {/* Inner Content (Requires relative + z-10 to sit above the absolute backgrounds) */}
          <div className="relative z-10 flex w-full justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="relative w-8 h-8 flex items-center justify-center"
              >
                <Image
                  src="/firefox-logo.svg"
                  alt="Firefox Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-brand-orange transition-colors">
                Firefox <span className="text-brand-orange">Club</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              <div className="flex items-center gap-8 mr-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link key={link.name} href={link.path} className="relative group">
                      <span className={`text-sm font-medium transition-colors duration-200 ${
                        isActive 
                          ? "text-brand-orange" 
                          : "text-gray-200 hover:text-white"
                      }`}>
                        {link.name}
                      </span>
                      {isActive && (
                        <motion.div 
                          layoutId="active-underline" 
                          className="absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-brand-orange" 
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
              
              <div className="flex items-center gap-3 border-l border-white/20 pl-6">
                <Link href="/login" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
                  Sign In
                </Link>
                <Link href="/join">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 rounded-xl font-semibold text-black bg-white hover:bg-brand-orange hover:text-white shadow-lg transition-all text-sm"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              aria-label={isOpen ? "Close menu" : "Open menu"} 
              className="md:hidden text-white hover:text-brand-orange transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-6 right-6 mt-4 pointer-events-auto"
          >
            <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl px-6 py-6 flex flex-col gap-2 overflow-hidden">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all ${
                    pathname === link.path 
                      ? "bg-brand-orange/10 text-brand-orange" 
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                <Link 
                  href="/login" 
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-center text-gray-300 font-medium"
                >
                  Sign In
                </Link>
                <Link 
                  href="/join" 
                  onClick={() => setIsOpen(false)} 
                  className="px-4 py-3 rounded-xl bg-brand-orange text-white font-semibold text-center hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
