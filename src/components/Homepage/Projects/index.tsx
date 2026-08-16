"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function HomepageProjects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!trackRef.current || !sectionRef.current) return;

            const track = trackRef.current;
            const section = sectionRef.current;

            const getScrollAmount = () => {
                if (!trackRef.current) return 0;
                const trackEl = trackRef.current;
                const lastChild = trackEl.lastElementChild as HTMLElement;
                if (!lastChild) return 0;
                const rightPadding = window.innerWidth >= 1024 ? 64 : window.innerWidth >= 640 ? 32 : 16;
                const totalTrackWidth = lastChild.offsetLeft + lastChild.offsetWidth + rightPadding;
                return Math.max(0, totalTrackWidth - window.innerWidth);
            };

            const holdDistance = 350;

            const tween = gsap.to(track, {
                x: () => -getScrollAmount(),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${getScrollAmount() + holdDistance}`,
                    pin: true,
                    anticipatePin: 1,
                    scrub: 0.6,
                    invalidateOnRefresh: true
                }
            });

            // Ensure ScrollTrigger recalculates after component render and resize
            const handleRefresh = () => ScrollTrigger.refresh();
            window.addEventListener("resize", handleRefresh);

            const timer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 150);

            return () => {
                window.removeEventListener("resize", handleRefresh);
                clearTimeout(timer);
                tween.kill();
            };
        },
        { scope: sectionRef }
    );

    return (
        <section ref={sectionRef} className="relative w-full bg-slate-50 dark:bg-[#08080a] text-slate-900 dark:text-white overflow-hidden transition-colors duration-300" id="Projects">
            <div className="projects_container min-h-screen w-full flex flex-col justify-between py-4 sm:py-6 relative overflow-hidden">
                {/* Header Row */}
                <div className="px-4 sm:px-8 md:px-12 lg:px-16 pt-6 sm:pt-8 pb-4 sm:pb-6 flex items-center justify-between relative z-10 border-b border-slate-300 dark:border-white/15">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                        My Work
                    </h2>
                </div>

                {/* Horizontal Sliding Track */}
                <div className="w-full relative z-10 flex-1 flex items-center overflow-hidden my-auto py-2 sm:py-4">
                    <div
                        ref={trackRef}
                        className="flex w-max h-[78vh] min-h-[460px] sm:min-h-[500px] max-h-[660px] will-change-transform px-4 sm:px-8 md:px-12 lg:px-16"
                    >
                        {projectsData.slice(0, 3).map((project, idx) => {
                            const isEven = idx % 2 === 1;

                            return (
                                <div
                                    key={project.id}
                                    className="w-[88vw] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] flex-shrink-0 h-full border-r border-slate-300 dark:border-white/15 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between relative bg-white/95 dark:bg-[#09090b]/80 backdrop-blur-md group"
                                >
                                    {isEven ? (
                                        /* EVEN INDEX (02, 04): Image at top, Text below */
                                        <>
                                            {/* Image Frame */}
                                            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-violet-500/40 dark:border-blue-500/60 shadow-[0_10px_30px_rgba(139,92,246,0.12)] dark:shadow-[0_0_30px_rgba(59,130,246,0.3)] bg-slate-100 dark:bg-slate-900 mb-3 sm:mb-4">
                                                <Image
                                                    src={project.image}
                                                    alt={`${project.title} preview`}
                                                    fill
                                                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 500px, 600px"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    priority
                                                />
                                            </div>

                                            {/* Number & Title */}
                                            <div className="flex items-start justify-between mb-2 sm:mb-3">
                                                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-slate-900 dark:text-white">
                                                    {project.num}
                                                </span>
                                                <div className="text-right">
                                                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-0.5">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                                                        {project.subtitle}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Tools and features */}
                                            <div className="mt-auto pt-2">
                                                <h4 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">
                                                    Tools and features
                                                </h4>
                                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3 sm:mb-4">
                                                    {project.tags.join(", ")}
                                                </p>

                                                {/* GitHub Link */}
                                                <div className="pt-2.5 sm:pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                                                    <Link
                                                        href={project.link || "#"}
                                                        target="_blank"
                                                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-[#c084fc] transition-colors"
                                                    >
                                                        <span>GitHub Repository</span>
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 00-2 2h10a2 2 0 00-2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        /* ODD INDEX (01, 03, 05): Text at top, Image at bottom */
                                        <>
                                            {/* Number & Title */}
                                            <div className="flex items-start justify-between mb-2 sm:mb-3">
                                                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter text-slate-900 dark:text-white">
                                                    {project.num}
                                                </span>
                                                <div className="text-right">
                                                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-0.5">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                                                        {project.subtitle}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Tools and features */}
                                            <div className="mb-3 sm:mb-4">
                                                <h4 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">
                                                    Tools and features
                                                </h4>
                                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                    {project.tags.join(", ")}
                                                </p>
                                            </div>

                                            {/* Image Frame */}
                                            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-violet-500/40 dark:border-blue-500/60 shadow-[0_10px_30px_rgba(139,92,246,0.12)] dark:shadow-[0_0_30px_rgba(59,130,246,0.3)] bg-slate-100 dark:bg-slate-900 mt-auto mb-3 sm:mb-4">
                                                <Image
                                                    src={project.image}
                                                    alt={`${project.title} preview`}
                                                    fill
                                                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 500px, 600px"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    priority
                                                />
                                            </div>

                                            {/* GitHub Link */}
                                            <div className="pt-2.5 sm:pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                                                <Link
                                                    href={project.link || "#"}
                                                    target="_blank"
                                                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-[#c084fc] transition-colors"
                                                >
                                                    <span>GitHub Repository</span>
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 00-2 2h10a2 2 0 00-2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}

                        {/* LAST CARD: Want to see more? */}
                        <div className="w-[88vw] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] flex-shrink-0 h-full border-r border-slate-300 dark:border-white/15 p-5 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center relative bg-white/95 dark:bg-[#09090b]/90 overflow-hidden">
                            {/* Glowing Background Orb */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-violet-500/10 dark:bg-[#c084fc]/15 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10 max-w-[380px] sm:max-w-[400px]">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                                    Want to see more?
                                </h3>
                                <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium mb-8 sm:mb-10 leading-relaxed">
                                    Explore all of my projects and creations
                                </p>

                                <Link
                                    href="/projects"
                                    className="inline-flex items-center gap-2 sm:gap-2.5 bg-violet-600 hover:bg-violet-700 text-white dark:bg-[#c084fc] dark:hover:bg-[#d8b4fe] dark:text-slate-950 text-sm sm:text-base font-bold py-3.5 px-7 sm:py-4 sm:px-8 rounded-full shadow-[0_10px_30px_rgba(139,92,246,0.3)] dark:shadow-[0_0_40px_rgba(192,132,252,0.6)] hover:scale-105 transition-all duration-300"
                                >
                                    <span>See All Works</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
