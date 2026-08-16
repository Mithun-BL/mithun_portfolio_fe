import Link from "next/link";
import Image from "next/image";

export default function HomepageBanner() {
    return (
        <section className="relative overflow-hidden py-6 md:py-12 mb-[56px] md:mb-[100px]">
            {/* Glowing Decorative Backdrop Aura */}

            <div className="container banner_container relative z-10">
                <div className="text-center max-w-[950px] mx-auto">
                    {/* Modern Pulsing Badge */}
                    <span className="relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] text-xs md:text-sm font-semibold tracking-wide text-slate-800 dark:text-slate-200 backdrop-blur-md mb-8 hover:scale-[1.02] transition-transform duration-300">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        Hi, I'm Mithun BL
                    </span>

                    {/* Premium Typography Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900 dark:text-white">
                        A passionate{" "}
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-500 dark:from-purple-400 dark:to-indigo-300 bg-clip-text text-transparent">
                            web developer
                        </span>{" "}
                        who loves to build creative and{" "}
                        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">
                            interactive websites
                        </span>
                    </h1>

                    {/* Subtitle / Description */}
                    <p className="text-base sm:text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-[640px] mx-auto mb-10 leading-relaxed font-medium">
                        Designing and building modern digital experiences with clean code, premium aesthetics, and user-centric interactions.
                    </p>

                    {/* Premium CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/projects"
                            className="group relative inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-900 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-black/5 hover:shadow-purple-500/10 hover:scale-[1.02] w-full sm:w-auto justify-center"
                        >
                            My Work
                            <Image
                                src="/images/arrow-right.svg"
                                alt="Arrow Right"
                                width={16}
                                height={16}
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 dark:invert"
                            />
                        </Link>

                        <Link
                            href="/about-us"
                            className="group inline-flex items-center gap-2 border border-slate-200 hover:border-purple-500/30 dark:border-slate-800 dark:hover:border-purple-400/30 hover:bg-slate-50/50 dark:hover:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300 hover:shadow-lg hover:shadow-purple-500/5 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] backdrop-blur-md w-full sm:w-auto justify-center"
                        >
                            About Me
                            <Image
                                src="/images/user.svg"
                                alt="User Icon"
                                width={16}
                                height={16}
                                className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 dark:invert"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
