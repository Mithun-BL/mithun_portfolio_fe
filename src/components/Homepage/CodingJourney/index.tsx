export default function CodingJourney() {
    const stats = [
        {
            id: "experience",
            number: "5+",
            label: "Years of Experience",
            description: "Building modern scalable web apps",
            icon: (
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            glowColor: "from-purple-600/25 via-indigo-600/15 to-transparent",
            borderColor: "group-hover:border-purple-500/60"
        },
        {
            id: "projects",
            number: "15+",
            label: "Projects Completed",
            description: "Delivered for clients & production",
            icon: (
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            glowColor: "from-indigo-600/25 via-purple-600/15 to-transparent",
            borderColor: "group-hover:border-indigo-500/60"
        },
        {
            id: "commits",
            number: "3,000+",
            label: "Code Commits",
            description: "Active contributor & continuous learner",
            icon: (
                <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            glowColor: "from-violet-600/25 via-purple-600/15 to-transparent",
            borderColor: "group-hover:border-violet-500/60"
        }
    ];

    return (
        <section className="relative overflow-hidden py-16 md:py-28 bg-[#040407] text-white border-b border-white/10">
            {/* Rich Atmospheric Glow Orbs */}
            <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="container relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-12 md:mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-purple-300 bg-purple-500/10 border border-purple-500/25 backdrop-blur-md mb-5 uppercase shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
                        </span>
                        Milestones & Impact
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                        Coding{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
                            Journey
                        </span>
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
                        A quantitative snapshot of my software engineering growth, technical achievements, and dedication to crafting high-performance web applications.
                    </p>

                    <div className="w-full h-px bg-gradient-to-r from-purple-500/50 via-indigo-500/30 to-transparent mt-8" />
                </div>

                {/* Stat Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className={`group relative overflow-hidden rounded-3xl bg-[#0b0b12]/90 border border-white/10 backdrop-blur-xl p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] ${stat.borderColor}`}
                        >
                            {/* Card Ambient Glow Hover Effect */}
                            <div
                                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${stat.glowColor} pointer-events-none`}
                            />

                            <div className="relative z-10 flex flex-col justify-between h-full">
                                {/* Top Row: Icon Box */}
                                <div className="mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300 shadow-md">
                                        {stat.icon}
                                    </div>
                                </div>

                                {/* Metric Number */}
                                <div>
                                    <h3 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white bg-gradient-to-r from-white via-purple-100 to-slate-200 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:via-indigo-200 group-hover:to-white transition-all duration-500 mb-2">
                                        {stat.number}
                                    </h3>
                                    <h4 className="text-lg sm:text-xl font-bold text-slate-100 mb-1">
                                        {stat.label}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-400 font-medium">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
