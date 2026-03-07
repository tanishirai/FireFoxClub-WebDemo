import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-linear-to-r from-transparent via-brand-purple to-transparent opacity-20"></div>

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="col-span-1 md:col-span-2 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center relative">
                            <Image
                                src="/firefox-logo.svg"
                                alt="Firefox Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-bold text-white">
                            Mozilla Firefox Club
                        </span>
                    </div>
                    <p className="max-w-md text-sm text-gray-400 leading-relaxed">
                        A university-based developer community dedicated to open-source innovation and tech education at VIT Bhopal.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all">
                            <Github size={20} />
                        </a>
                        <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all">
                            <Twitter size={20} />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-6 text-sm">Links</h3>
                    <ul className="space-y-3">
                        {["About Us", "Events", "Projects", "Team"].map((link) => (
                            <li key={link}>
                                <Link href={`/${link.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-brand-purple transition-colors">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-6 text-sm">Contact</h3>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <p className="text-gray-400 mb-1">Email</p>
                            <a href="mailto:hello@mozilla-vitbhopal.club" className="text-brand-purple hover:text-purple-600 transition-colors">
                                hello@mozilla-vitbhopal.club
                            </a>
                        </li>
                        <li>
                            <p className="text-gray-400 mb-1">Location</p>
                            <p className="text-gray-400">VIT Bhopal, India</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600">
                <p>&copy; {currentYear} Mozilla Firefox Club. All rights reserved.</p>
                <p className="mt-2 md:mt-0 flex gap-4">
                    <Link href="/privacy" className="hover:text-brand-purple transition-colors">Privacy</Link>
                    <Link href="/terms" className="hover:text-brand-purple transition-colors">Terms</Link>
                </p>
            </div>
        </footer>
    );
}
