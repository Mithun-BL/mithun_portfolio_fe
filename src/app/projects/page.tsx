import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <section className="py-12 md:py-20 relative overflow-hidden">
            {/* Glowing Decorative Background Aura */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-gradient-to-tr from-violet-600/5 to-indigo-600/5 dark:from-violet-500/10 dark:to-indigo-500/10 rounded-full blur-[100px] md:blur-[180px] pointer-events-none z-0" />

            <div className="container relative z-10 max-w-[1240px] mx-auto px-4">
                {/* Page Header */}
                <div className="text-center max-w-[800px] mx-auto mb-16 md:mb-24">
                    <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 bg-violet-500/5 px-4 py-1.5 rounded-full border border-violet-500/10 mb-4 inline-block">
                        My Work
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white leading-tight">
                        Projects & Creations
                    </h1>
                    <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        Explore the complete catalog of projects I've built, ranging from smart conversational models and artificial intelligence tools to decentralized web3 applications and interactive games.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="group flex flex-col h-full bg-[#fdfdfd]/80 dark:bg-slate-950/40 border border-black/5 dark:border-white/5 backdrop-blur-md rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:border-violet-500/20 hover:shadow-[0_20px_50px_rgba(139,92,246,0.08)] dark:hover:shadow-[0_20px_50px_rgba(139,92,246,0.12)]"
                        >
                            {/* Project Image Frame */}
                            <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-black/[0.03] dark:border-white/[0.03]">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                    priority
                                />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3.5 py-1 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm border border-black/5 dark:border-white/5">
                                    {project.num}
                                </div>
                            </div>

                            {/* Project Content Area */}
                            <div className="flex flex-col flex-1 p-6 md:p-8">
                                <div className="mb-4">
                                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                                        {project.title}
                                    </h2>
                                    <p className="text-xs md:text-sm font-semibold text-slate-400 dark:text-slate-500 mt-1">
                                        {project.subtitle}
                                    </p>
                                </div>

                                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Technologies Badges */}
                                <div className="flex flex-wrap gap-1.5 mb-8 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded-lg border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] text-slate-500 dark:text-slate-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center justify-between pt-4 border-t border-black/[0.03] dark:border-white/[0.03]">
                                    <Link
                                        href={project.link || "#"}
                                        target="_blank"
                                        className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                                    >
                                        GitHub Repository
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 00-2 2h10a2 2 0 00-2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}