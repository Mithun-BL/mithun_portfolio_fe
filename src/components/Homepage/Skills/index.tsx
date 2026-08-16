import Image from 'next/image';

interface Skill {
    name: string;
    icon: string;
}

const skillRows: Skill[][] = [
    // Row 1: 12 items
    [
        { name: 'HTML', icon: '/images/skills/html.svg' },
        { name: 'CSS', icon: '/images/skills/css.svg' },
        { name: 'Bootstrap', icon: '/images/skills/bootstrap.svg' },
        { name: 'Tailwind', icon: '/images/skills/tailwind.svg' },
        { name: 'JavaScript', icon: '/images/skills/javascript.svg' },
        { name: 'React.js', icon: '/images/skills/react.svg' },
        // { name: 'Python', icon: '/images/skills/python.svg' },
        // { name: 'C', icon: '/images/skills/c.svg' },
        // { name: 'Redis', icon: '/images/skills/redis.svg' },


    ],
    // Row 2: 10 items
    [
        { name: 'Next.js', icon: '/images/skills/nextjs.svg' },
        { name: 'TypeScript', icon: '/images/skills/typescript.svg' },
        { name: 'Node.js', icon: '/images/skills/nodejs.svg' },
        { name: 'MySQL', icon: '/images/skills/mysql.svg' },
        { name: 'MongoDB', icon: '/images/skills/mongodb.svg' },

    ],
    // Row 3: 8 items
    [
        { name: 'GitHub', icon: '/images/skills/github.svg' },
        { name: 'Linux', icon: '/images/skills/linux.svg' },
        { name: 'AWS', icon: '/images/skills/aws.svg' },
        { name: 'Docker', icon: '/images/skills/docker.svg' },
    ],

    // Row 5: 4 items
    [
        // { name: 'Jupyter', icon: '/images/skills/jupyter.svg' },
        { name: 'Kubernetes', icon: '/images/skills/kubernetes.svg' },
        { name: 'Vercel', icon: '/images/skills/vercel.svg' },
        { name: 'Figma', icon: '/images/skills/figma.svg' },
        // { name: 'Photoshop', icon: '/images/skills/photoshop.svg' }
    ],

];

const Skills = () => {
    return (
        <section className="tech-stack-bg py-20 md:py-32 relative overflow-hidden border-y border-black/[0.03] dark:border-white/[0.03]" id="Skills">
            {/* Glowing Central Aura Sphere */}
            {/* <div className=" bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[80px] md:blur-[120px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" /> */}

            <div className="container skills_container relative z-10">
                {/* Sleek Glowing Heading */}
                <h2 className="text-center text-[40px] md:text-[64px] font-extrabold tracking-widest text-slate-800 dark:text-[#E8E6FF] drop-shadow-[0_0_30px_var(--tech-text-glow)] mb-16 uppercase">
                    Tech Stack
                </h2>

                {/* Pyramid Skills Grid */}
                <div className="flex flex-col items-center gap-3 md:gap-4">
                    {skillRows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="flex flex-row flex-wrap justify-center gap-2 md:gap-4 w-full"
                        >
                            {row.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="group flex flex-col items-center justify-center w-[76px] h-[84px] md:w-[96px] md:h-[105px] bg-[#fdfdfd]/70 dark:bg-slate-900/40 border border-black/5 dark:border-white/5 backdrop-blur-md rounded-2xl transition-all duration-300 ease-out hover:scale-105 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] dark:hover:bg-slate-900/60 cursor-pointer"
                                >
                                    <div className="relative w-7 h-7 md:w-9 md:h-9 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src={skill.icon}
                                            width={36}
                                            height={36}
                                            alt={`${skill.name} logo`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-[10px] md:text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-2.5 truncate max-w-full px-1 text-center group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
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