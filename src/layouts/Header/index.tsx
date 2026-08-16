"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isDark, setIsDark] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Set initial theme state on client mount
    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleTheme = () => {
        const nextDark = !isDark;
        setIsDark(nextDark);
        if (nextDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };

    const ThemeToggle = () => (
        <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative overflow-hidden"
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6 flex items-center justify-center">
                {/* Sun Icon (Visible in Dark Mode) */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-5 h-5 text-amber-500 absolute transition-all duration-500 ease-in-out ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
                        }`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                </svg>

                {/* Moon Icon (Visible in Light Mode) */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-5 h-5 text-indigo-400 absolute transition-all duration-500 ease-in-out ${isDark ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                        }`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                </svg>
            </div>
        </button>
    );

    return (
        <header className="fixed w-full top-0 z-50 mt-5">
            <div className="container header_container">
                <nav className="flex justify-between md:grid md:grid-cols-3 items-center p-4 rounded-2xl bg-white/80 dark:bg-zinc-900/85 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-lg transition-all duration-300">
                    {/* Logo Section */}
                    <div className="flex justify-start items-center">
                        <Link href="/" className="text-[24px] md:text-[54px] font-bold leading-none tracking-wider hover:opacity-85 transition-opacity flex items-center select-none">
                            m
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex justify-center items-center space-x-8">
                        <Link href="/" className={`text-sm hover:opacity-75 transition-all pb-1 border-b-2 ${isActive('/') ? 'font-extrabold border-violet-600 dark:border-violet-400 text-foreground' : 'font-medium border-transparent text-foreground/85'}`}>Home</Link>
                        <Link href="/about-us" className={`text-sm hover:opacity-75 transition-all pb-1 border-b-2 ${isActive('/about-us') ? 'font-extrabold border-violet-600 dark:border-violet-400 text-foreground' : 'font-medium border-transparent text-foreground/85'}`}>About</Link>
                        <Link href="/projects" className={`text-sm hover:opacity-75 transition-all pb-1 border-b-2 ${isActive('/projects') ? 'font-extrabold border-violet-600 dark:border-violet-400 text-foreground' : 'font-medium border-transparent text-foreground/85'}`}>Projects</Link>
                    </div>

                    {/* Theme Toggle & CTA Section */}
                    <div className="flex justify-end items-center">
                        <div className="hidden md:flex items-center space-x-5">
                            <ThemeToggle />
                            <Link className="btn_black flex items-center justify-center text-sm font-semibold hover:scale-102 active:scale-98 transition-all duration-300" href="/contact-us" style={{ padding: '12px 24px' }}>
                                Get in Touch
                            </Link>
                        </div>

                        {/* Mobile Hamburger Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </nav>

                {/* Mobile menu dropdown */}
                <div className={`md:hidden mt-2 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 rounded-2xl shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-64 p-5' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                    <div className="flex flex-col space-y-4">
                        <Link onClick={() => setIsOpen(false)} href="/" className={`text-base hover:opacity-75 transition-all pb-1 border-b-2 w-fit ${isActive('/') ? 'font-extrabold border-violet-600 dark:border-violet-400 text-foreground' : 'font-medium border-transparent text-foreground/85'}`}>Home</Link>
                        <Link onClick={() => setIsOpen(false)} href="/about-us" className={`text-base hover:opacity-75 transition-all pb-1 border-b-2 w-fit ${isActive('/about-us') ? 'font-extrabold border-violet-600 dark:border-violet-400 text-foreground' : 'font-medium border-transparent text-foreground/85'}`}>About</Link>
                        <Link onClick={() => setIsOpen(false)} href="/projects" className={`text-base hover:opacity-75 transition-all pb-1 border-b-2 w-fit ${isActive('/projects') ? 'font-extrabold border-violet-600 dark:border-violet-400 text-foreground' : 'font-medium border-transparent text-foreground/85'}`}>Projects</Link>
                        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800/50">
                            <ThemeToggle />
                            <Link onClick={() => setIsOpen(false)} className="btn_black text-sm" href="/contact-us">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;