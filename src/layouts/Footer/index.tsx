"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';

const Footer = () => {
    const [copied, setCopied] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHoveringCard, setIsHoveringCard] = useState(false);
    const ctaCardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ctaCardRef.current) return;
        const rect = ctaCardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("mithunbl@gmail.com");
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <footer className="relative border-t bg-slate-50 dark:bg-[#030712] border-black/[0.06] dark:border-white/[0.06] text-black dark:text-white py-20 px-6 md:px-12 transition-all duration-500 overflow-hidden">
            {/* Background soft neutral blur effects for dark mode */}
            <div
                className="absolute bottom-[-100px] right-[10%] w-[350px] h-[350px] rounded-full blur-[130px] opacity-0 dark:opacity-[0.06] pointer-events-none transition-opacity duration-1000 bg-white"
            />

            <div className="max-w-[1280px] mx-auto relative z-10">
                {/* Top Part: Stunning CTA banner */}
                <div
                    ref={ctaCardRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHoveringCard(true)}
                    onMouseLeave={() => setIsHoveringCard(false)}
                    className="group relative flex flex-col md:flex-row justify-between items-center p-8 md:p-14 gap-8 rounded-[36px] border bg-white/80 dark:bg-slate-950/40 border-black/5 dark:border-white/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-500 mb-20 overflow-hidden"
                >
                    {/* Card Hover Glow effect */}
                    {isHoveringCard && (
                        <div
                            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                            style={{
                                background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, var(--glow-color), transparent 85%)`
                            }}
                        />
                    )}

                    <div className="text-center md:text-left max-w-[550px] z-10">
                        <span className="inline-block text-[11px] font-bold tracking-[3px] text-gray-500 dark:text-gray-400 mb-3 uppercase">
                            Let&apos;s collaborate
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-4">
                            Have an idea? Let&apos;s build it together.
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                            Whether you want to discuss a new project, seek a consultation, or just say hello, my inbox is always open.
                        </p>
                    </div>

                    <div>
                        <Link
                            href="/contact-us"
                            className="btn_black text-center text-sm w-full sm:w-auto hover:scale-98 active:scale-95 transition-all duration-300"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>

                {/* Middle Part: Navigation Links & Branding Column */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
                    {/* Logo & Pitch */}
                    <div className="md:col-span-5 flex flex-col items-start gap-4">
                        <Link href="/" className="text-[20px] md:text-[32px] leading-none font-bold hover:opacity-85 transition-opacity">
                            <span>Mithun BL</span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-[360px] text-gray-600 dark:text-gray-400">
                            Creating premium, responsive, and highly interactive web applications with modern styling, seamless animations, and structured user experiences.
                        </p>
                    </div>

                    {/* Spacer Column */}
                    <div className="hidden md:block md:col-span-1" />

                    {/* Sitemap */}
                    <div className="md:col-span-3 flex flex-col gap-4">
                        <h4 className="text-xs font-bold tracking-[2px] text-gray-500 dark:text-gray-400 uppercase mb-1">
                            Sitemap
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {[
                                { label: "About", href: "/about-us" },
                                { label: "Projects", href: "/#Projects" },
                                { label: "Contact Us", href: "/contact-us" }
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                                    >
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Networks */}
                    <div className="md:col-span-3 flex flex-col gap-4">
                        <h4 className="text-xs font-bold tracking-[2px] text-gray-500 dark:text-gray-400 uppercase mb-1">
                            Connect
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {[
                                { label: "GitHub Portfolio", href: "https://github.com", external: true },
                                { label: "LinkedIn Profile", href: "https://linkedin.com", external: true },
                                { label: "Twitter / X Profile", href: "https://twitter.com", external: true },
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                                    >
                                        <span>{link.label}</span>
                                        <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Part: Horizontal Line & Copyright Metadata */}
                <div className="w-full">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent mb-8" />
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-gray-400 dark:text-gray-500 text-center sm:text-left">
                            &copy; {new Date().getFullYear()} Mithun BL. All rights reserved.
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                            <span>Engineered with design precision &bull; Next.js</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;