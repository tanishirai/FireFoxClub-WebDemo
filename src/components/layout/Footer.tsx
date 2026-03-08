import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Instagram, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        explore: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Events", href: "/events" },
            { label: "Team", href: "/team" },
        ],
        discover: [
            { label: "Gallery", href: "/gallery" },
            { label: "Projects", href: "/projects" },
/*             { label: "Blog", href: "/blog" },
 */            { label: "Resources", href: "/resources" },
        ],
        community: [
            { label: "Join Us", href: "/join" },
            { label: "Contact", href: "/contact" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
        ],
    };

    const socialLinks = [
        { icon: Github, label: "GitHub", href: "https://github.com/mozilla-vitbhopal", ariaLabel: "GitHub" },
        { icon: Twitter, label: "Twitter", href: "https://twitter.com/firefoxclub_vit", ariaLabel: "Twitter (X)" },
        { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/mozilla-firefox-club-vitbhopal", ariaLabel: "LinkedIn" },
        { icon: Instagram, label: "Instagram", href: "https://instagram.com/firefoxclub_vit", ariaLabel: "Instagram" },
    ];

    return (
        <footer className="bg-gray-900 text-gray-400 relative overflow-hidden">
            {/* Gradient Border Top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-30" />

            {/* Main Footer Content */}
            <div className="container mx-auto px-6 md:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center relative rounded-lg bg-brand-purple/10 border border-brand-purple/30">
                                <Image
                                    src="/firefox-logo.svg"
                                    alt="Firefox Club Logo"
                                    fill
                                    className="object-contain p-1.5"
                                />
                            </div>
                            <div>
                                <span className="font-bold text-white text-lg block">Firefox Club</span>
                                <span className="text-xs text-brand-purple">Mozilla VIT Bhopal</span>
                            </div>
                        </div>
                        <p className="max-w-sm text-sm text-gray-400 leading-relaxed">
                            A vibrant community of 500+ developers committed to open-source innovation, privacy advocacy, and tech education at VIT Bhopal. We build, collaborate, and innovate together.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3 pt-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.ariaLabel}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group w-10 h-10 rounded-full bg-gray-800 hover:bg-brand-purple flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-brand-purple/50"
                                    >
                                        <Icon size={18} className="text-gray-300 group-hover:text-white transition-colors" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Explore Links */}
                    <div>
                        <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Explore</h3>
                        <ul className="space-y-3">
                            {footerLinks.explore.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-brand-purple transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        {link.label}
                                        <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Discover Links */}
                    <div>
                        <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Discover</h3>
                        <ul className="space-y-3">
                            {footerLinks.discover.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-brand-purple transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        {link.label}
                                        <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community & Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Community</h3>
                        <ul className="space-y-3 mb-6">
                            {footerLinks.community.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-brand-purple transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        {link.label}
                                        <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Quick Contact */}
                        <div className="space-y-3 border-t border-gray-800 pt-6">
                            <div className="flex items-start gap-3">
                                <Mail size={16} className="text-brand-purple mt-0.5 flex-shrink-0" />
                                <a href="mailto:hello@mozilla-vitbhopal.club" className="text-sm text-gray-400 hover:text-brand-purple transition-colors break-all">
                                    hello@mozilla-vitbhopal.club
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="text-brand-purple mt-0.5 flex-shrink-0" />
                                <div className="text-sm text-gray-400">
                                    <p>VIT Bhopal University</p>
                                    <p>Bhopal, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-600">
                    <p>&copy; {currentYear} Mozilla Firefox Club VIT Bhopal. All rights reserved.</p>
                    <p className="text-center md:text-right">
                        Made with <span className="text-brand-purple">❤</span> by the Firefox Community
                    </p>
                </div>
            </div>

            {/* Schema.org Structured Data Comment */}
            {/* For SEO: Add organization schema in layout.tsx or root */}
        </footer>
    );
}
