"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
    imageSrc?: string;
}

function ImageSlider({ imageSrc = "/images/mithun_profile.png" }: ImageSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        let percentage = (x / rect.width) * 100;
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;
        setSliderPosition(percentage);
    }, []);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    }, [isDragging, handleMove]);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    }, [isDragging, handleMove]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

    return (
        <div
            ref={containerRef}
            tabIndex={0}
            role="slider"
            aria-label="Image comparison slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') {
                    setSliderPosition((prev) => Math.max(0, prev - 5));
                } else if (e.key === 'ArrowRight') {
                    setSliderPosition((prev) => Math.min(100, prev + 5));
                }
            }}
            onMouseDown={(e) => {
                setIsDragging(true);
                handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
                setIsDragging(true);
                handleMove(e.touches[0].clientX);
            }}
            className="relative w-full aspect-[3/4] sm:aspect-[4/5] max-w-[420px] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl select-none cursor-ew-resize group touch-none focus:outline-none focus:ring-2 focus:ring-purple-500/50"
        >
            {/* Base Layer: Dark / Grayscale Image (Right Side) */}
            <div className="absolute inset-0 bg-slate-950 flex items-center justify-center overflow-hidden">
                <Image
                    src={imageSrc}
                    alt="Dark Profile"
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1000px"
                    className="object-cover object-center filter grayscale contrast-125 brightness-50"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            </div>

            {/* Top Layer: Full Color Image Clipped up to sliderPosition (Left Side) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
                <div className="relative w-full h-full bg-slate-900 flex items-center justify-center">
                    <Image
                        src={imageSrc}
                        alt="Color Profile"
                        fill
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1000px"
                        className="object-cover object-center"
                        priority
                    />
                </div>
            </div>

            {/* Vertical Divider Bar */}
            <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] pointer-events-none z-20"
                style={{ left: `${sliderPosition}%` }}
            >
                {/* Circular Slider Drag Handle */}
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-slate-900 shadow-xl border-2 border-purple-500 flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform duration-200">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default function AboutContent() {
    const [isGlobalDark, setIsGlobalDark] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const checkDarkTheme = () => {
            const rootBg = document.documentElement.style.getPropertyValue("--background");
            const hasDarkVariable = rootBg === "#000000" || rootBg === "#000" || rootBg.trim() === "rgb(0, 0, 0)";
            setIsGlobalDark(hasDarkVariable);
        };

        checkDarkTheme();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "style") {
                    checkDarkTheme();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["style"],
        });

        return () => observer.disconnect();
    }, []);

    const textSecondary = isGlobalDark ? "text-gray-400" : "text-gray-600";
    const textMuted = isGlobalDark ? "text-gray-500" : "text-gray-400";

    return (
        <section className="mb-16 px-4 md:px-8">
            <div className="container about_container">
                {/* Section Header */}
                <div className="text-center md:text-left mb-16">
                    <h6 className="text-[12px] tracking-[3px] font-bold text-violet-500 uppercase mb-3">ABOUT ME</h6>
                    <h1 className="text-[36px] md:text-[60px] font-bold tracking-tight leading-tight max-w-[900px] mb-6">
                        Designing & developing interactive web experiences.
                    </h1>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Interactive Drag Image Comparison Slider */}
                    <div className="lg:col-span-5 flex justify-center w-full max-w-[420px] mx-auto lg:max-w-none">
                        <ImageSlider imageSrc="/images/mithun_profile.png" />
                    </div>

                    {/* Right Column: Personal Story and Stats */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <div className="flex flex-col gap-5 text-[16px] md:text-[18px] leading-relaxed">
                            <p className="font-semibold text-violet-600 dark:text-violet-400">
                                Hello! I&apos;m Mithun BL, a dedicated Frontend Developer based in Bangalore, India, with 5+ years of hands-on experience creating modern, responsive, and performance-oriented web applications.
                            </p>
                            <p className={textSecondary}>
                                Throughout my 5 years in frontend engineering, I have specialized in turning complex UI/UX designs into pixel-perfect, interactive digital experiences. My tech stack includes <strong className="font-bold text-slate-900 dark:text-white">React.js</strong>, <strong className="font-bold text-slate-900 dark:text-white">Next.js</strong>, <strong className="font-bold text-slate-900 dark:text-white">TypeScript</strong>, <strong className="font-bold text-slate-900 dark:text-white">JavaScript</strong>, <strong className="font-bold text-slate-900 dark:text-white">Tailwind CSS</strong>, <strong className="font-bold text-slate-900 dark:text-white">Bootstrap</strong>, <strong className="font-bold text-slate-900 dark:text-white">jQuery</strong>, <strong className="font-bold text-slate-900 dark:text-white">HTML5</strong>, and <strong className="font-bold text-slate-900 dark:text-white">CSS3</strong>.
                            </p>
                            <p className={textSecondary}>
                                I bridge the gap between creative visual design and robust code architecture. My approach focuses on building clean, scalable components, optimizing Core Web Vitals for instant load times, and ensuring seamless cross-browser accessibility.
                            </p>
                        </div>



                        {/* Direct contact details prompt */}
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                            <span className={`text-[12px] font-semibold ${textMuted}`}>Interested in what I do?</span>
                            <a
                                href="/contact-us"
                                className="btn_black text-[14px] hover:scale-[0.98] transition-transform"
                            >
                                Let&apos;s Work Together
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
