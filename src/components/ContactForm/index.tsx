"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedName, setSubmittedName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const emailValue = watch("email");
    const showPhoneField = Boolean(emailValue && emailValue.trim().length > 0);

    // Auto reset back to form after 10 seconds of showing the thank-you screen
    useEffect(() => {
        if (!isSubmitted) return;

        const timer = setTimeout(() => {
            setIsSubmitted(false);
            setSubmittedName("");
        }, 10000);

        return () => clearTimeout(timer);
    }, [isSubmitted]);

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setSubmittedName(data.name);
                setIsSubmitted(true);
                reset();
            } else {
                setErrorMessage(result.message || "Something went wrong. Please try again.");
            }
        } catch {
            setErrorMessage("Network error. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-8 sm:p-10 rounded-3xl bg-white/90 dark:bg-slate-900/80 border border-black/5 dark:border-white/10 shadow-2xl backdrop-blur-md">
            {isSubmitted ? (
                <div className="text-center py-10 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                        Thanks &quot;{submittedName}&quot;!
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-300 font-medium">
                        Will get back to you in a hours.
                    </p>
                    <button
                        onClick={() => {
                            setIsSubmitted(false);
                            setSubmittedName("");
                        }}
                        className="btn_black text-sm px-6 py-2.5 mt-4"
                    >
                        Send Another Message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    {errorMessage && (
                        <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-medium">
                            {errorMessage}
                        </div>
                    )}

                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-2">
                            Your Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            {...register("name")}
                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border ${
                                errors.name ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                            } focus:outline-none focus:border-slate-400 dark:focus:border-slate-500 text-sm transition-all`}
                        />
                        {errors.name && (
                            <p className="text-xs text-rose-500 mt-1.5 font-medium">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-2">
                            Your Email <span className="text-rose-500">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            {...register("email")}
                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border ${
                                errors.email ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                            } focus:outline-none focus:border-slate-400 dark:focus:border-slate-500 text-sm transition-all`}
                        />
                        {errors.email && (
                            <p className="text-xs text-rose-500 mt-1.5 font-medium">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Conditional Phone Field (Revealed when email has input) */}
                    <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${
                            showPhoneField ? "max-h-28 opacity-100 mt-1" : "max-h-0 opacity-0 pointer-events-none"
                        }`}
                    >
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-2">
                            Phone Number <span className="text-gray-400 font-normal lowercase">(optional)</span>
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            {...register("phone")}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-slate-400 dark:focus:border-slate-500 text-sm transition-all"
                        />
                    </div>

                    {/* Send Message Field */}
                    <div>
                        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-2">
                            Send Message <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            placeholder="Hello Mithun, I'd like to discuss a new project..."
                            {...register("message")}
                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border ${
                                errors.message ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                            } focus:outline-none focus:border-slate-400 dark:focus:border-slate-500 text-sm transition-all resize-none`}
                        />
                        {errors.message && (
                            <p className="text-xs text-rose-500 mt-1.5 font-medium">{errors.message.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn_black text-center text-sm w-full py-3.5 mt-2 hover:scale-[0.99] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin w-4 h-4 text-current" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                <span>Sending...</span>
                            </>
                        ) : (
                            <span>Submit</span>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}
