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
        "FULL STACK DEVELOPER",
        "SOFTWARE ENGINEER",
        "WEB APPLICATION DEVELOPER",
        "BACKEND DEVELOPER"
    ],
    tagline: "Builder • Problem solver • Lifelong learner",
    description: "I build practical web applications and business software, bringing together thoughtful interfaces, reliable backend logic, and data-driven workflows.",
    location: "Based in India",
    stats: [
        { label: "Featured projects", value: "5" },
        { label: "Core technologies", value: "React / Node / Java" },
        { label: "Approach", value: "Product-minded engineering" },
    ],
};

/* =============== ABOUT DATA =============== */
export const aboutData = {
    title: "Building useful software, one thoughtful solution at a time.",
    description: [
        "I’m a developer from India and an MCA student at Chandigarh University, with hands-on experience building web applications, APIs, and database-driven software.",
        "I enjoy working across the stack—from shaping a clear user experience to implementing backend workflows and data storage. I’m focused on writing maintainable code and solving real problems for people and businesses.",
    ],
    note: "Always learning, always building. 📚"
};

/* =============== SKILLS DATA =============== */
export const skillsData = [
    {
        title: "Languages & Backend",
        skills: [
            { name: "Java", level: "Working knowledge" },
            { name: "Python", level: "Working knowledge" },
            { name: "JavaScript", level: "Working knowledge" },
            { name: "Node.js / Express", level: "Project experience" },
            { name: "SQL / SQLite", level: "Project experience" },
        ]
    },
    {
        title: "Frontend & Tools",
        skills: [
            { name: "React.js", level: "Project experience" },
            { name: "HTML / CSS", level: "Project experience" },
            { name: ".NET / WPF", level: "Project experience" },
            { name: "Git / GitHub", level: "Working knowledge" },
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
        tech: [".NET 8", "WPF", "EF Core", "SQLite"]
    },
    {
        id: 2,
        title: "CampusFind AI Lost & Found",
        category: "Full Stack / AI",
        description: "A campus lost-and-found platform concept that brings item reporting and discovery into one student-friendly workflow.",
        link: "https://github.com/Cvayay/CampusFind-AI-Lost-Found",
        tech: ["React", "Node.js", "Express", "Gemini"]
    },
    {
        id: 3,
        title: "Greatkart Ecommerce",
        category: "Django",
        description: "A full-stack ecommerce project with categories, carts, orders, product management, and admin workflows.",
        link: "https://github.com/Cvayay/Greatkart-Ecommerce",
        tech: ["Django", "HTML", "SQLite"]
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
        description: "A daily coding-practice tracker concept that visualizes consistency while strengthening problem-solving skills.",
        link: "https://github.com/Cvayay/DSA-HeatMap",
        tech: ["Algorithms", "Data Structures", "JavaScript"]
    }
];

// Keep the named exports available to the components that consume this file.
export default {
    navLinks,
    homeData,
    aboutData,
    skillsData,
    projectsData
};