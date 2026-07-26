export interface Project {
    id: string;
    num: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    image: string;
    link?: string;
}

export const projectsData: Project[] = [
    {
        id: "drishti",
        num: "01",
        title: "Drishti",
        subtitle: "Smart AI Chatbot",
        description: "An advanced conversational assistant powered by natural language processing and computer vision.",
        tags: ["Python", "PyTorch", "Transformers", "Flask", "WebRTC"],
        image: "/images/projects/drishti.png",
        link: "https://github.com"
    },
    {
        id: "votechain",
        num: "02",
        title: "VoteChain",
        subtitle: "Decentralized Voting System",
        description: "A highly secure, tamper-proof voting system built on blockchain technology.",
        tags: ["Solidity", "Web3.js", "React", "Ethereum", "Metamask"],
        image: "/images/projects/votechain.png",
        link: "https://github.com"
    },
    {
        id: "eie",
        num: "03",
        title: "EIE",
        subtitle: "Earthquake Impact Estimator",
        description: "A machine learning platform for estimating and analyzing geological damage and epicenter impacts.",
        tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Flask"],
        image: "/images/projects/eie.png",
        link: "https://github.com"
    },
    {
        id: "gamekroy",
        num: "04",
        title: "GameKroy",
        subtitle: "E-Commerce Gaming Platform",
        description: "A premium web application for buying and selling games, consoles, and accessories.",
        tags: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        image: "/images/projects/gamekroy.png",
        link: "https://github.com"
    },
    {
        id: "redxchess",
        num: "05",
        title: "RedxChess",
        subtitle: "Multiplayer Online Chess",
        description: "A real-time chess platform with socket communication, custom rules, and a retro-neon look.",
        tags: ["Python", "Pygame", "Socket.io", "Multithreading"],
        image: "/images/projects/redxchess.png",
        link: "https://github.com"
    }
];
