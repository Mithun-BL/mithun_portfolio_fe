import React from "react";
import ContactForm from "@/components/ContactForm";

export default function ContactUs() {
    return (
        <main className="min-h-screen pt-28 pb-20 relative overflow-hidden bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-500">
            {/* Soft Ambient Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="container contact_container relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="inline-block text-[12px] font-bold tracking-[3px] text-violet-600 dark:text-violet-400 uppercase mb-3">
                        Get In Touch
                    </span>
                    <h1 className="text-[36px] sm:text-[48px] md:text-[60px] font-extrabold tracking-tight mb-4">
                        Let&apos;s Build Something Together.
                    </h1>
                    <p className="text-[14px] sm:text-[16px] text-gray-600 dark:text-gray-400 leading-relaxed">
                        Have a project in mind, want to collaborate, or just want to say hello? Fill out the form below and I&apos;ll get back to you promptly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-black/5 dark:border-white/10 shadow-xl backdrop-blur-md flex flex-col gap-6">
                            <h3 className="text-[20px] font-bold tracking-tight">Contact Details</h3>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider">Email</span>
                                    <p className="text-[14px] font-medium text-slate-800 dark:text-slate-200 mt-0.5">mithunbl@icloud.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider">Location</span>
                                    <p className="text-[14px] font-medium text-slate-800 dark:text-slate-200 mt-0.5">Bangalore, Karnataka, India</p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-black/5 dark:border-white/10">
                                <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider mb-3 block">Connect Online</span>
                                <div className="flex items-center gap-3">
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-all hover:scale-105"
                                        aria-label="GitHub"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white flex items-center justify-center transition-all hover:scale-105"
                                        aria-label="LinkedIn"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Component */}
                    <div className="lg:col-span-7">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    );
}