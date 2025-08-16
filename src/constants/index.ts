import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    nextjs,
    python,
    docker,
    golang,
    nethues,
    hyprcom,
    ecommerce,
    socialize,
    musify,
    s7works,
} from "../assets";
export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Experience",
    },
    {
        id: "tech",
        title: "Skills",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];
const introduction =
    "Hello! I'm a seasoned Full Stack Software Engineer with 3+ years of experience building scalable, cloud-native applications. I specialize in React.js, Java Spring Boot, Golang, and Node.js, with expertise in microservices architecture, AI/ML API integration, and performance optimization. I've delivered enterprise solutions that serve 1,000+ concurrent users and improved system performance by up to 70%. My passion lies in designing secure, high-performance applications using modern cloud technologies (AWS, GCP) and driving impactful results through innovative engineering solutions.";
const services = [
    {
        title: "Full Stack Developer",
        icon: web,
    },
    {
        title: "Cloud Engineer",
        icon: backend,
    },
    {
        title: "AI/ML Integration",
        icon: creator,
    },
    {
        title: "Microservices Architect",
        icon: mobile,
    },
];

const technologies = [
    // Programming Languages
    {
        name: "JavaScript",
        icon: javascript,
        category: "Programming Languages",
    },
    {
        name: "TypeScript",
        icon: typescript,
        category: "Programming Languages",
    },
    {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        category: "Programming Languages",
    },
    {
        name: "Python",
        icon: python,
        category: "Programming Languages",
    },
    {
        name: "Go",
        icon: golang,
        category: "Programming Languages",
    },
    
    // Frameworks & Libraries
    {
        name: "React.js",
        icon: reactjs,
        category: "Frameworks & Libraries",
    },
    {
        name: "Next.js",
        icon: nextjs,
        category: "Frameworks & Libraries",
    },
    {
        name: "Node.js",
        icon: nodejs,
        category: "Frameworks & Libraries",
    },
    {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        category: "Frameworks & Libraries",
    },
    {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        category: "Frameworks & Libraries",
    },
    {
        name: "Gin",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        category: "Frameworks & Libraries",
    },
    {
        name: "Gorilla Mux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        category: "Frameworks & Libraries",
    },
    {
        name: "net/http",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        category: "Frameworks & Libraries",
    },
    {
        name: "Redux",
        icon: redux,
        category: "Frameworks & Libraries",
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
        category: "Frameworks & Libraries",
    },
    
    // Databases
    {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        category: "Databases",
    },
    {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        category: "Databases",
    },
    {
        name: "MongoDB",
        icon: mongodb,
        category: "Databases",
    },
    {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        category: "Databases",
    },
    {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
        category: "Databases",
    },
    
    // Cloud & Tools
    {
        name: "AWS",
        icon: "https://skillicons.dev/icons?i=aws",
        category: "Cloud & Tools",
    },
    {
        name: "Google Cloud",
        icon: "https://skillicons.dev/icons?i=gcp",
        category: "Cloud & Tools",
    },
    {
        name: "Docker",
        icon: docker,
        category: "Cloud & Tools",
    },
    {
        name: "Jenkins",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        category: "Cloud & Tools",
    },
    {
        name: "Kafka",
        icon: "https://skillicons.dev/icons?i=kafka",
        category: "Cloud & Tools",
    },
    {
        name: "Git",
        icon: git,
        category: "Cloud & Tools",
    },
    {
        name: "Stripe",
        icon: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
        category: "Cloud & Tools",
    },
];

const experiences = [
    {
        title: "Software Engineer (Full Stack)",
        company_name: "Nethues Technologies",
        icon: nethues,
        iconBg: "#000000",
        date: "April 2024 - Present",
        points: [
            "Built Harbor, an AI-powered article generation platform using Perplexity, Claude, and ChatGPT APIs, reducing generation time by 65%.",
            "Developed Avatar, an AI-driven customer support training simulator with real-time persona chat and GCP Speech-to-Text integration.",
            "Refactored Spring Boot monolith into microservices architecture with comprehensive unit testing and Redis-based rate limiting.",
            "Designed canvas-based quoting tool with React Konva achieving <16ms response time and 50% faster quote cycles.",
            "Technologies: React.js, Node.js, Spring Boot, FastAPI, MySQL, Docker, AWS, GCP, Redis, Jenkins",
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "Hyprcom",
        icon: hyprcom,
        iconBg: "#000000",
        date: "November 2023 - March 2024",
        points: [
            "Built comprehensive admin panel for e-commerce + social platform with brand onboarding and campaign management.",
            "Optimized video streaming with AWS CloudFront & prefetching, reducing media load time by 70%.",
            "Implemented advanced pagination strategies, reducing API payload size by 60%.",
            "Deployed scalable applications using AWS CI/CD pipelines with GitHub Actions integration.",
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "S7 Works",
        icon: s7works,
        iconBg: "#000000",
        date: "July 2022 - November 2023",
        points: [
            "Engineered WorkaHub CRM with real-time employee tracking dashboards, improving load time by 35%.",
            "Bootstrapped Bitwork prompt management tool with RBAC and browser extension for ChatGPT/Perplexity integration.",
            "Implemented i18n support and performance optimization features for enterprise applications.",
            "Led development of secure prompt-sharing features with team collaboration and role-based access control.",
        ],
    },
];


const projects = [
     {
        name: "Socialize - Social Media Platform",
        description:
            "Real-time social media platform supporting 1,000+ concurrent users. Built with React.js, Node.js, and Socket.IO for instant messaging. Features include posts, media sharing, comments with optimized performance and 99.9% uptime.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "socket.io",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
            {
                name: "real-time",
                color: "orange-text-gradient",
            },
        ],
        image: socialize,
        source_code_link: "https://github.com/GauravKumar547/socialfrontend",
        source_code_link2: "https://github.com/GauravKumar547/socialbackend",
        live_link: "https://socialize-delta.vercel.app",
    },
    {
        name: "E-Commerce Microservices Platform",
        description:
            "Enterprise-level microservices eCommerce platform built with Spring Boot, supporting 5,000+ users/day. Features TDD approach, Kafka event-driven architecture, Redis caching, and payment gateway integration with Stripe/Razorpay.",
        tags: [
            {
                name: "spring-boot",
                color: "blue-text-gradient",
            },
            {
                name: "microservices",
                color: "green-text-gradient",
            },
            {
                name: "kafka",
                color: "pink-text-gradient",
            },
            {
                name: "redis",
                color: "orange-text-gradient",
            },
        ],
        image: ecommerce,
        source_code_link: "https://github.com/GauravKumar547/ecommerce",
        live_link: "",
    },
    {
        name: "Musify - Spotify Clone",
        description:
            "Engineered Musify, a scalable Spotify clone with Next.js, TypeScript, and Stripe, catering to various users. Integrated Supabase for seamless addition of songs, showcasing full-stack proficiency with modern payment processing.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "stripe",
                color: "pink-text-gradient",
            },
            {
                name: "supabase",
                color: "orange-text-gradient",
            },
        ],
        image: musify,
        source_code_link: "https://github.com/GauravKumar547/musify",
        live_link: "",
    }
];

export { services, introduction, technologies, experiences, projects };
