import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
    metadataBase: new URL("https://mithunbl.vercel.app"),
    title: {
        default: "Mithun BL | A Passionate Web Developer",
        template: "%s | Mithun BL",
    },
    description:
        "A passionate web developer who loves to build creative and interactive websites using modern technologies.",
    keywords: [
        "Mithun BL",
        "Web Developer",
        "Frontend Developer",
        "React Developer",
        "Next.js Developer",
        "TypeScript Developer",
        "Portfolio",
    ],
    authors: [{ name: "Mithun BL" }],
    creator: "Mithun BL",
    openGraph: {
        title: "Mithun BL | A Passionate Web Developer",
        description:
            "A passionate web developer who loves to build creative and interactive websites.",
        url: "https://mithunbl.vercel.app",
        siteName: "Mithun BL Portfolio",
        images: [
            {
                url: "https://mithunbl.vercel.app/og-image.png",
                width: 1200,
                height: 630,
                alt: "Mithun BL Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mithun BL | A Passionate Web Developer",
        description:
            "A passionate web developer who loves to build creative and interactive websites.",
        images: ["https://mithunbl.vercel.app/og-image.png"],
    },
};

export default defaultMetadata;
