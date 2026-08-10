"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectDetailProps {
    project: Project;
    prevProject?: Project;
    nextProject?: Project;
}

export default function ProjectDetail({ project, prevProject, nextProject }: ProjectDetailProps) {
    return (
        <article className="py-10 md:py-20 relative overflow-hidden">
            <div className="container max-w-5xl mx-auto px-4 sm:px-6">

                {/* Back to Projects Navigation */}
                <div className="mb-8 md:mb-12">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all duration-300 group"
                    >
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Back to All Projects</span>
                    </Link>
                </div>

                {/* Project Header */}
                <header className="mb-10 md:mb-14">


                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
                        {project.title}
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-3xl mb-8">
                        {project.description}
                    </p>

                    {/* CTA Links Header Bar */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                        {project.link && (
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md shadow-blue-500/20 hover:scale-102"
                            >
                                <span>Live Demo</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 00-2 2h10a2 2 0 00-2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </Link>
                        )}
                        {project.githubUrl && (
                            <Link
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all duration-300 border border-slate-700 hover:scale-102"
                            >
                                <span>GitHub Repository</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 00-2 2h10a2 2 0 00-2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </Link>
                        )}
                    </div>
                </header>

                {/* Browser Frame Screenshot Showcase */}
                <div className="mb-14 md:mb-20">
                    <div className="rounded-[24px] md:rounded-[32px] overflow-hidden bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl">
                        {/* Browser Window Title Bar */}
                        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/90 border-b border-slate-800">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="px-4 py-1 rounded-full bg-slate-800/80 text-[11px] font-mono text-slate-400 truncate max-w-[240px] sm:max-w-[320px] text-center">
                                {project.link ? project.link.replace("https://", "") : `${project.id}.demo`}
                            </div>
                            <div className="w-12" />
                        </div>

                        {/* High Quality Cover Screenshot */}
                        <figure className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-slate-950 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={`${project.title} full interface screenshot`}
                                fill
                                sizes="(max-width: 1280px) 100vw, 1200px"
                                className="object-cover"
                                priority
                            />
                        </figure>
                    </div>

                    {/* Screenshot Gallery Grid if available */}
                    {project.screenshots && project.screenshots.length > 1 && (
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {project.screenshots.slice(1).map((src, idx) => (
                                <figure key={idx} className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                                    <Image
                                        src={src}
                                        alt={`${project.title} screenshot ${idx + 2}`}
                                        fill
                                        sizes="(max-width: 768px) 50vw, 400px"
                                        className="object-cover"
                                    />
                                </figure>
                            ))}
                        </div>
                    )}
                </div>

                {/* Metadata Specifications Grid (Year & Technologies) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 mb-14 md:mb-20">
                    {project.year && (
                        <div>
                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                                Year
                            </span>
                            <span className="text-sm md:text-base font-bold text-slate-900 dark:text-white">
                                {project.year}
                            </span>
                        </div>
                    )}
                    <div>
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                            Technologies
                        </span>
                        <div className="flex flex-wrap gap-2.5 mt-1">
                            {project.tags.map((tag) => (
                                <span key={tag} className="text-xs md:text-sm font-bold text-blue-600 dark:text-blue-400">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content (Overview, Challenge, Solution, Features) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 mb-16 md:mb-24">

                    {/* Left Column: Full Story */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Executive Overview */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                                Project Overview
                            </h2>
                            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                                {project.fullOverview}
                            </p>
                        </section>

                        {/* Problem & Solution Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                            <div className="bg-amber-500/5 p-6 md:p-8 rounded-2xl border border-amber-500/20">
                                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2 block">
                                    The Challenge
                                </span>
                                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                    {project.challenge}
                                </p>
                            </div>

                            <div className="bg-blue-500/5 p-6 md:p-8 rounded-2xl border border-blue-500/20">
                                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block">
                                    The Solution
                                </span>
                                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                    {project.solution}
                                </p>
                            </div>
                        </div>

                        {/* Key Capabilities / Features */}
                        {project.features && project.features.length > 0 && (
                            <section className="pt-6 border-t border-slate-200 dark:border-slate-800">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
                                    Key Features & Capabilities
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {project.features.map((feature, idx) => (
                                        <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                                            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm mb-3">
                                                0{idx + 1}
                                            </div>
                                            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Right Column: Stats & Tech Stack */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Metrics Box */}
                        {project.stats && project.stats.length > 0 && (
                            <div className="bg-slate-950 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-6">
                                    Performance Metrics
                                </h3>
                                <div className="space-y-6">
                                    {project.stats.map((stat, idx) => (
                                        <div key={idx} className="border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                                            <span className="block text-3xl md:text-4xl font-extrabold text-white">
                                                {stat.value}
                                            </span>
                                            <span className="text-xs font-medium text-slate-400">
                                                {stat.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* All Technologies */}
                        <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                                Technologies & Tools
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Navigation to Next/Prev Project */}
                <footer className="pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                    {prevProject ? (
                        <Link
                            href={`/projects/${prevProject.id}`}
                            className="w-full sm:w-auto p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex items-center gap-4 group"
                        >
                            <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                            </svg>
                            <div>
                                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Previous Project</span>
                                <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                    {prevProject.title}
                                </span>
                            </div>
                        </Link>
                    ) : <div />}

                    {nextProject ? (
                        <Link
                            href={`/projects/${nextProject.id}`}
                            className="w-full sm:w-auto p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all duration-300 flex items-center justify-end text-right gap-4 group"
                        >
                            <div>
                                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Next Project</span>
                                <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                    {nextProject.title}
                                </span>
                            </div>
                            <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    ) : <div />}
                </footer>

            </div>
        </article>
    );
}
