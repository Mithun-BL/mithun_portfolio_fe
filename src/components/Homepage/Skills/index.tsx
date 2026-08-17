"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface Skill {
    name: string;
    icon: string;
}

const skillRows: Skill[][] = [
    // Row 1
    [
        { name: 'HTML', icon: '/images/skills/html.svg' },
        { name: 'CSS', icon: '/images/skills/css.svg' },
        { name: 'Bootstrap', icon: '/images/skills/bootstrap.svg' },
        { name: 'Tailwind', icon: '/images/skills/tailwind.svg' },
        { name: 'JavaScript', icon: '/images/skills/javascript.svg' },
        { name: 'React.js', icon: '/images/skills/react.svg' },
    ],
    // Row 2
    [
        { name: 'Next.js', icon: '/images/skills/nextjs.svg' },
        { name: 'TypeScript', icon: '/images/skills/typescript.svg' },
        { name: 'Node.js', icon: '/images/skills/nodejs.svg' },
        { name: 'MySQL', icon: '/images/skills/mysql.svg' },
        { name: 'MongoDB', icon: '/images/skills/mongodb.svg' },
    ],
    // Row 3
    [
        { name: 'GitHub', icon: '/images/skills/github.svg' },
        { name: 'Linux', icon: '/images/skills/linux.svg' },
        { name: 'AWS', icon: '/images/skills/aws.svg' },
        { name: 'Docker', icon: '/images/skills/docker.svg' },
    ],
    // Row 4
    [
        { name: 'Kubernetes', icon: '/images/skills/kubernetes.svg' },
        { name: 'Vercel', icon: '/images/skills/vercel.svg' },
        { name: 'Figma', icon: '/images/skills/figma.svg' },
    ],
];

const allSkills: Skill[] = skillRows.flat();

const Skills = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleMobileSkills = showAll ? allSkills : allSkills.slice(0, 10);

    return (
        <section className="tech-stack-bg py-16 md:py-32 relative overflow-hidden border-y border-black/[0.03] dark:border-white/[0.03]" id="Skills">
            <div className="container skills_container relative z-10">
                {/* Sleek Glowing Heading */}
                <h2 className="text-center text-[32px] sm:text-[40px] md:text-[64px] font-extrabold tracking-widest text-slate-800 dark:text-[#E8E6FF] drop-shadow-[0_0_30px_var(--tech-text-glow)] mb-10 md:mb-16 uppercase">
                    Tech Stack
                </h2>

                {/* Mobile 2-Column Grid Layout (0 to 767px) */}
                <div className="md:hidden flex flex-col items-center">
                    <div className="grid grid-cols-2 gap-3 justify-items-center w-full max-w-[320px] sm:max-w-[360px] mx-auto">
                        {visibleMobileSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="group flex flex-col items-center justify-center w-full h-[88px] bg-[#fdfdfd]/70 dark:bg-slate-900/40 border border-black/5 dark:border-white/5 backdrop-blur-md rounded-2xl transition-all duration-300 ease-out hover:scale-105 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] dark:hover:bg-slate-900/60 cursor-pointer"
                            >
                                <div className="relative w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Image
                                        src={skill.icon}
                                        width={36}
                                        height={36}
                                        alt={`${skill.name} logo`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-2 truncate max-w-full px-1 text-center group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* View More / View Less CTA Button for Mobile */}
                    <div className="mt-8">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wider text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 border border-black/10 dark:border-white/10 rounded-full shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 uppercase cursor-pointer"
                        >
                            <span>{showAll ? 'View Less' : 'View More'}</span>
                            <svg
                                className={`w-3.5 h-3.5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Desktop Pyramid Grid Layout (768px+) */}
                <div className="hidden md:flex flex-col items-center gap-3 md:gap-4">
                    {skillRows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="flex flex-row flex-wrap justify-center gap-2 md:gap-4 w-full"
                        >
                            {row.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="group flex flex-col items-center justify-center w-[96px] h-[105px] bg-[#fdfdfd]/70 dark:bg-slate-900/40 border border-black/5 dark:border-white/5 backdrop-blur-md rounded-2xl transition-all duration-300 ease-out hover:scale-105 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] dark:hover:bg-slate-900/60 cursor-pointer"
                                >
                                    <div className="relative w-9 h-9 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src={skill.icon}
                                            width={36}
                                            height={36}
                                            alt={`${skill.name} logo`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-2.5 truncate max-w-full px-1 text-center group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;