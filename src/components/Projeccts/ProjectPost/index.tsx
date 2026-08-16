import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";

export default function ProjectPost() {
    return (
        <section className="py-12 md:py-20 relative overflow-hidden">
            <div className="container project_post_container">
                {/* Page Header */}
                <div className="text-center max-w-[800px] mx-auto mb-16 md:mb-20">
                    <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 mb-4 inline-block">
                        My Work
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white leading-tight">
                        Projects & Creations
                    </h1>
                    <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        Explore the complete catalog of projects I've built, ranging from smart conversational models and artificial intelligence tools to decentralized web3 applications.
                    </p>
                </div>

                {/* Projects Grid Aligned with 2nd Image Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projectsData.map((project) => (
                        <article
                            key={project.id}
                            className="group flex flex-col h-full cursor-pointer"
                        >
                            {/* Project Image Frame (Rounded like Reference Image 2) */}
                            <div className="relative w-full aspect-[1.45/1] rounded-[24px] md:rounded-[28px] overflow-hidden bg-slate-100 dark:bg-slate-900 mb-5 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                    priority
                                />
                            </div>

                            {/* Project Content Area */}
                            <div className="flex flex-col flex-1 px-1">
                                {/* Subtitle / Category Label */}
                                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                                    {project.subtitle}
                                </span>

                                {/* Project Title */}
                                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-3 leading-snug">
                                    {project.title}
                                </h2>

                                {/* Description */}
                                {project.description && (
                                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                )}

                                {/* Read More Link */}
                                <div className="mt-auto pt-2">
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 dark:text-blue-400 hover:gap-2.5 transition-all duration-300"
                                    >
                                        <span>Read More</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}