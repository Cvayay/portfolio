/* =============== NAVIGATION LINKS =============== */
export const navLinks = [
    { name: "Home", hash: "#home" },
    { name: "About", hash: "#about" },
    { name: "Projects", hash: "#portfolio" },
    { name: "Contact", hash: "#contact" },
];

/* =============== HOME / HERO DATA =============== */
export const homeData = {
    greeting: "Hello, I’m",
    firstName: "SHIVAJI",
    lastName: "SAHANI",
    roles: [
        "SOFTWARE DEVELOPER",
        "MS OFFICE & EXCEL",
        "FIGMA UI / UX",
        "NOTION EXPERT",
        "POWER BI ANALYST"
    ],
    tagline: "Builder • Problem solver • Lifelong learner",
    description: "I create practical digital products that feel polished, useful, and built with intention.",
    location: "Based in India",
    stats: [
        { label: "Projects built", value: "10+" },
        { label: "Focus areas", value: "Java / React / Python" },
        { label: "Mindset", value: "Design + engineering" },
    ],
};

/* =============== ABOUT DATA =============== */
export const aboutData = {
    title: "Building digital experiences with clarity, purpose, and care.",
    description: [
        "I’m a software developer from India with a strong foundation in Java, Python, React, and database-driven applications.",
        "I enjoy creating products that feel simple on the surface but are crafted with careful engineering underneath. My goal is to build experiences that are useful, polished, and meaningful.",
    ],
    note: "Always learning, always building. 📚"
};

/* =============== SKILLS DATA =============== */
export const skillsData = [
    {
        title: "Core Development",
        skills: [
            { name: "Java / JavaFX", level: "Advanced" },
            { name: "Python", level: "Intermediate" },
            { name: "C / C++", level: "Intermediate" },
            { name: "SQLite / DBMS", level: "Advanced" },
        ]
    },
    {
        title: "Web & Product",
        skills: [
            { name: "React.js", level: "Intermediate" },
            { name: "CSS / UI Design", level: "Advanced" },
            { name: "Git / GitHub", level: "Intermediate" },
        ]
    }
];

/* =============== WORK / PROJECTS DATA =============== */
export const projectsData = [
    {
        id: 1,
        title: "JewelleryERP",
        category: ".NET / WPF",
        description: "A desktop ERP for jewellery businesses with customer management, invoicing, role-based access, and SQLite-backed storage.",
        link: "https://github.com/Cvayay/JewelleryERP",
        tech: [".NET", "WPF", "SQLite"]
    },
    {
        id: 2,
        title: "Greatkart Ecommerce",
        category: "Django",
        description: "A full-stack ecommerce project with categories, carts, orders, product management, and admin workflows.",
        link: "https://github.com/Cvayay/Greatkart-Ecommerce",
        tech: ["Django", "HTML", "SQLite"]
    },
    {
        id: 3,
        title: "CampusFind",
        category: "JavaScript / AI",
        description: "A campus lost-and-found platform designed to help students recover missing items with a simple, helpful experience.",
        link: "https://github.com/Cvayay/CampusFind-AI-Lost-Found",
        tech: ["JavaScript", "AI", "UI/UX"]
    },
    {
        id: 4,
        title: "Minimal Note",
        category: "Python",
        description: "A focused note-taking application built around a calm and lightweight workflow for everyday writing.",
        link: "https://github.com/Cvayay/minimal-note",
        tech: ["Python", "CLI", "Productivity"]
    },
    {
        id: 5,
        title: "DSA HeatMap",
        category: "Algorithms",
        description: "A six-month daily LeetCode tracking project that visualizes consistency while strengthening problem-solving skills.",
        link: "https://github.com/Cvayay/DSA-HeatMap",
        tech: ["Algorithms", "Data Structures", "Consistency"]
    }
];

// FIX: Export all named exports from the bottom so other components don't crash
export default {
    navLinks,
    homeData,
    aboutData,
    skillsData,
    projectsData
};