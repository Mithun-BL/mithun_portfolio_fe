export interface ProjectFeature {
    title: string;
    description: string;
}

export interface ProjectStat {
    label: string;
    value: string;
}

export interface Project {
    id: string;
    num: string;
    title: string;
    subtitle: string;
    description: string;
    fullOverview: string;
    challenge: string;
    solution: string;
    features: ProjectFeature[];
    stats: ProjectStat[];
    tags: string[];
    image: string;
    screenshots?: string[];
    link?: string;
    githubUrl?: string;
    role?: string;
    year?: string;
    client?: string;
}

export const projectsData: Project[] = [
    {
        id: "oculus-cliniques",
        num: "01",
        title: "Oculus Cliniques",
        subtitle: "Healthcare & Medical Consultation Portal",
        description: "A modern healthcare and clinic booking platform built with Next.js, React, TypeScript, and Tailwind CSS.",
        fullOverview: "Oculus Cliniques is a full-featured medical clinic web application designed to streamline patient appointments, specialist consultations, and clinic location discovery. It features localized multi-lingual support, real-time doctor availability slots, and an accessible booking flow.",
        challenge: "Integrating multi-lingual dynamic content routing alongside complex doctor scheduling slots without compromising initial page load performance or lighthouse SEO metrics.",
        solution: "Engineered a Next.js App Router solution with Server-Side Rendering (SSR) and dynamic client-side hydration for booking modals. Utilized Tailwind CSS for pixel-perfect responsive layouts and CookieYes accessibility integration.",
        features: [
            {
                title: "Doctor Booking & Consultation Engine",
                description: "Interactive calendar picker allowing patients to book appointments with specialists in real-time."
            },
            {
                title: "Multi-Clinic Location Finder",
                description: "Map integration and search system for finding nearby medical clinics and opening hours."
            },
            {
                title: "Multi-Lingual Localization",
                description: "Seamless language switching between English and French with zero layout shifts."
            },
            {
                title: "High Performance & Accessibility",
                description: "Optimized for core web vitals with 99+ Accessibility rating and dynamic font preloading."
            }
        ],
        stats: [
            { label: "Page Speed Score", value: "98/100" },
            { label: "Accessibility Rating", value: "99%" },
            { label: "Monthly Patient Visits", value: "25,000+" }
        ],
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
        image: "/images/projects/oculus_cliniques.png",
        screenshots: [
            "/images/projects/oculus_cliniques.png"
        ],
        link: "https://oculus.terralogic.in",
        githubUrl: "https://github.com/mithun/oculus-cliniques",
        role: "Frontend Developer",
        year: "2024",
        client: "Terralogic / Oculus Healthcare"
    },
    {
        id: "nexus-saas",
        num: "02",
        title: "Nexus SaaS Dashboard",
        subtitle: "Enterprise Analytics Platform",
        description: "High-performance SaaS analytics web application featuring real-time data charts and team management.",
        fullOverview: "Nexus SaaS is a powerful analytics dashboard designed for enterprise teams. Built with Next.js, TypeScript, and Tailwind CSS, it provides interactive data visualization charts, financial revenue tracking, and automated workflow triggers.",
        challenge: "Rendering large datasets and real-time chart streams without causing main-thread stuttering or slow frame rates during active user interactions.",
        solution: "Architected custom lightweight canvas chart components, modularized client-side state hooks, and integrated lazy loading for heavy data tables.",
        features: [
            {
                title: "Real-Time Revenue Analytics",
                description: "Interactive line charts and revenue metrics updated automatically."
            },
            {
                title: "User Cohort & Funnel Analysis",
                description: "Detailed acquisition channel breakdown and retention tracking metrics."
            },
            {
                title: "Team Permissions & RBAC",
                description: "Granular user role management and activity audit logs."
            },
            {
                title: "Obsidian Dark Mode UI",
                description: "Modern dark aesthetic engineered with custom Tailwind CSS variables."
            }
        ],
        stats: [
            { label: "Chart Render Speed", value: "<16ms" },
            { label: "Data Throughput", value: "50k ops/sec" },
            { label: "Active Enterprise Users", value: "8,500+" }
        ],
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
        image: "/images/projects/nexus_saas.png",
        screenshots: [
            "/images/projects/nexus_saas.png"
        ],
        link: "https://nexus-saas.demo",
        githubUrl: "https://github.com/mithun/nexus-saas",
        role: "Lead Web Developer",
        year: "2024",
        client: "SaaS Tech Corp"
    },
    {
        id: "apex-wordpress",
        num: "03",
        title: "Apex Agency Theme",
        subtitle: "Corporate WordPress Web Solution",
        description: "Custom WordPress corporate website featuring custom Gutenberg blocks, ultra-fast performance, and tailored CMS controls.",
        fullOverview: "Apex Agency is a bespoke corporate web solution developed on WordPress. Combining PHP custom block development with modern JavaScript frontend components, it delivers complete content editing freedom for marketing teams while maintaining sub-second load times.",
        challenge: "Legacy WordPress themes are often bloated with third-party plugin overhead. The goal was to build a clean, custom Gutenberg-native theme with zero bloated plugins.",
        solution: "Engineered lightweight custom ACF Gutenberg blocks, optimized Asset loading pipelines, and implemented Redis object caching for database query acceleration.",
        features: [
            {
                title: "Custom Gutenberg Block Engine",
                description: "Modular drag-and-drop block library allowing marketing teams to build pages effortlessly."
            },
            {
                title: "Case Studies & Portfolio Engine",
                description: "Custom Post Types (CPT) with taxonomy filtering for corporate portfolio items."
            },
            {
                title: "Sub-Second Page Loads",
                description: "Optimized database queries and asset minification delivering <0.8s LCP speeds."
            },
            {
                title: "Dynamic Lead Capture",
                description: "Custom AJAX contact form handler with CRM pipeline integration."
            }
        ],
        stats: [
            { label: "GTmetrix Grade", value: "100% A" },
            { label: "Load Time", value: "0.6s" },
            { label: "Client Satisfaction", value: "100%" }
        ],
        tags: ["WordPress", "PHP", "React", "JavaScript", "CSS3", "MySQL"],
        image: "/images/projects/apex_wordpress.png",
        screenshots: [
            "/images/projects/apex_wordpress.png"
        ],
        link: "https://apex-agency.demo",
        githubUrl: "https://github.com/mithun/apex-wordpress",
        role: "WordPress & Frontend Engineer",
        year: "2023",
        client: "Apex Digital Marketing"
    },
    {
        id: "luxuria-ecommerce",
        num: "04",
        title: "Luxuria E-Commerce",
        subtitle: "Premium Online Storefront",
        description: "Full-stack e-commerce web application featuring dynamic product customizers, Stripe checkout, and SSR optimization.",
        fullOverview: "Luxuria is a luxury fashion marketplace engineered for high conversion rates. Powered by React, Next.js, and TypeScript, it features real-time shopping cart drawers, instant search filtering, and seamless Stripe payment gateway integration.",
        challenge: "Managing fast-changing stock inventory, preventing checkout drop-offs, and providing a 60fps responsive UI across mobile and desktop devices.",
        solution: "Built on Next.js App Router with Server-Side Rendering for instant page loads. Implemented optimistic cart updates and Stripe dynamic payment intent flows.",
        features: [
            {
                title: "Instant Cart & Checkout Drawer",
                description: "Slide-out cart drawer with real-time price totals and coupon validation."
            },
            {
                title: "Interactive Product Customizer",
                description: "Dynamic color swatch selection and high-res gallery zoom previews."
            },
            {
                title: "Instant Search & Filtering",
                description: "Facet filtering by category, size, price range, and availability."
            },
            {
                title: "Stripe Payment Gateway",
                description: "Secure 1-click checkout with Apple Pay and Google Pay integration."
            }
        ],
        stats: [
            { label: "Page Speed Score", value: "99/100" },
            { label: "Monthly Transactions", value: "15,000+" },
            { label: "Conversion Lift", value: "+28%" }
        ],
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "Node.js"],
        image: "/images/projects/luxuria_ecommerce.png",
        screenshots: [
            "/images/projects/luxuria_ecommerce.png"
        ],
        link: "https://luxuria-store.demo",
        githubUrl: "https://github.com/mithun/luxuria-ecommerce",
        role: "Full Stack Engineer",
        year: "2024",
        client: "Luxuria Fashion Group"
    },
    {
        id: "devpulse-portfolio",
        num: "05",
        title: "DevPulse Developer Hub",
        subtitle: "Modern Portfolio & Technical Blog",
        description: "A feature-packed developer portfolio and blog web application built with Next.js App Router, React, and MDX.",
        fullOverview: "DevPulse is a modern developer portfolio platform designed to showcase projects, technical articles, and open-source contributions. It includes interactive code block syntax highlighting, dynamic tag filtering, and dark mode toggles.",
        challenge: "Combining static MDX blog publishing with dynamic project portfolio cards while maintaining clean code architecture and light/dark theme synchronization.",
        solution: "Utilized Next.js App Router static site generation (SSG) with Tailwind CSS custom utility classes and zero runtime overhead.",
        features: [
            {
                title: "MDX Blog Publishing Engine",
                description: "Write articles in Markdown with interactive React component embeds."
            },
            {
                title: "Interactive Code Snippets",
                description: "Syntax highlighted code blocks with 1-click copy code functionality."
            },
            {
                title: "Dynamic Project Showcase",
                description: "Filterable project cards with modal views and link navigation."
            },
            {
                title: "Dark Mode Aesthetic",
                description: "Tailwind CSS v4 variables with system theme detection."
            }
        ],
        stats: [
            { label: "Lighthouse Performance", value: "100/100" },
            { label: "Static Load Time", value: "<0.4s" },
            { label: "SEO Rating", value: "100%" }
        ],
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MDX"],
        image: "/images/projects/devpulse.png",
        screenshots: [
            "/images/projects/devpulse.png"
        ],
        link: "https://devpulse.demo",
        githubUrl: "https://github.com/mithun/devpulse",
        role: "Full Stack Developer",
        year: "2024",
        client: "Personal Portfolio Project"
    }
];
