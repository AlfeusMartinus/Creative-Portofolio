import {
  react,
  android,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  vite,
  webflow,
  flyon,
  gamki,
  envisteam,
  gkp,
  gdsc,
  bangkit,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project16,
  project17,
  project18,
  avatar,
  email,
  githubb,
  linkedin,
  instagram,
  amanah,
  kotlinTech,
  compose,
  retrofit,
  postman,
  androidStudio,
  project19,
  project20,
  project21,
  typescript,
  nextjs,
  express,
  postgresql,
  mongodb,
  redis,
  flutter,
  docker,
  aws,
  telkom,
  dbs,
  pyromi,
} from "../assets";

export const linkGithub = "https://github.com/AlfeusMartinus";

// ===== NAVIGATION =====
export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

// ===== PERSONAL INFO =====
export const personalInfo = {
  name: "Alfeus Martinus",
  title: "Software Engineer",
  location: "Bandung, Indonesia",
  email: "feusmartinus@gmail.com",
  phone: "+62 881-0234-10516",
  website: "alfeus.space",
  bio: "Software Engineering Graduate from Universitas Pendidikan Indonesia, completed degree in 3.5 years with a 3.87/4.00 GPA (Cumlaude). Full-stack Developer with 2+ years of experience building production-grade systems, including high-impact internal modules at Telkom Indonesia and international projects at Pyromi Pte. Ltd.",
  tagline: "Building high-performance digital ecosystems through elegant code.",
};

// ===== STATS =====
export const stats = [
  { value: "2+", label: "Years Exp" },
  { value: "50+", label: "Projects" },
  { value: "12", label: "Clients" },
  { value: "99%", label: "SLA Rate" },
];

// ===== SERVICES =====
export const services = [
  {
    title: "Frontend Development",
    icon: react,
    description: "Next.js, React, TypeScript, Tailwind",
  },
  {
    title: "Mobile Development",
    icon: android,
    description: "Kotlin, Jetpack Compose, Flutter",
  },
  {
    title: "Backend Development",
    icon: nodejs,
    description: "Node.js, Express, PostgreSQL",
  },
  {
    title: "DevOps & CI/CD",
    icon: git,
    description: "Docker, GCP, AWS",
  },
];

// ===== TECHNOLOGIES =====
export const technologies = [
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: reactjs },
  { name: "Next.js", icon: nextjs },
  { name: "Node.js", icon: nodejs },
  { name: "Kotlin", icon: kotlinTech },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Docker", icon: docker },
  { name: "GCP/AWS", icon: aws },
];

// ===== EDUCATION =====
export const education = {
  institution: "Universitas Pendidikan Indonesia",
  degree: "Bachelor of Software Engineering",
  period: "Aug 2022 - Feb 2026",
  gpa: "3.87 / 4.00",
  thesis: "Development of Web Accessibility Violation Detection Tool (WCAG 2.1 Level A) using Static Code Analysis and DOM Tree for React Applications.",
  notableProjects: "Developed a static code analysis tool to detect WCAG 2.1 Level A violations in React applications, utilizing DOM Tree traversal to automate accessibility auditing.",
};

// ===== KEY ACHIEVEMENTS =====
export const achievements = [
  {
    title: "Jabar Future Leaders Scholarship (JFLS) 2023",
    description: "Granted by the Governor of West Java and West Java Education Department for outstanding leadership and activism.",
  },
  {
    title: "Bangkit Academy 2024 - Distinction Graduate",
    description: "Top 10% of cohort. Certificate of Completion in Mobile Development.",
  },
];

// ===== PROFESSIONAL EXPERIENCE =====
export const experiences = [
  {
    title: "Mentor Full-Stack Developer",
    company_name: "Coding Camp powered by DBS Foundation",
    icon: dbs,
    iconBg: "#E6DEDD",
    date: "Jan 2026 - Present",
    points: [
      "Facilitating and mentoring students in a nationwide full-stack development program, focusing on industry-standard web technologies and clean code practices.",
      "Conducting technical guidance and code reviews to ensure participants build scalable and maintainable web applications.",
      "Collaborating with the instructional team to deliver case-based learning sessions and improve student learning outcomes.",
    ],
    id: 1,
  },
  {
    title: "Software Developer",
    company_name: "Pyromi Pte. Ltd. (Remote - Singapore)",
    icon: pyromi,
    iconBg: "#E6DEDD",
    date: "Oct 2025 - Present",
    points: [
      "Developing high-performance software solutions for an international startup based in Singapore, focusing on video editing technology.",
      "Architecting and implementing features for the Pyromi platform, ensuring a seamless and responsive user experience for professional video workflows.",
      "Managing cross-border collaboration and agile delivery within a distributed engineering team.",
    ],
    id: 2,
  },
  {
    title: "Frontend Developer",
    company_name: "Telkom Indonesia",
    icon: telkom,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Sep 2025",
    points: [
      "Served as a Front-End Developer in the development of Telkom Partner Network (TPN), an internal platform designed to facilitate management and collaboration with strategic partners.",
      "Developed website interface enhancements for the partnership section and created a user notification module.",
      "INFINITE — HKI module: built IP submission & review workflows, advanced validation forms, RBAC, and audit trail; FE with React (TS) & Tailwind.",
      "Facility Management (FM): improved asset mapping and issue tracking UX; integrated notifications and search; delivered UI polish for internal users.",
      "GCT: developed internal dashboards and tooling to streamline operations and reporting across teams.",
    ],
    id: 3,
  },
  {
    title: "Web Developer",
    company_name: "PT Digital House Nusantara",
    icon: flyon,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Apr 2025",
    points: [
      "Led company website development, coordinating with management and engineering to define milestones and align delivery with business goals.",
      "Delivered key features: portfolio showcase, career pages, and admin dashboard.",
      "Practiced agile execution using Taiga; drove stakeholder communication and progress tracking.",
    ],
    id: 4,
  },
  {
    title: "Android Developer & Project Manager",
    company_name: "PT Amanah Karya Indonesia",
    icon: amanah,
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Feb 2025",
    points: [
      "Served as Project Manager and Tech Lead for Android Development, overseeing the marketplace module in the Berbagi.link application.",
      "Built features including store pages, product management, sales tracking, and marketing tools.",
      "Utilized Kotlin with MVVM clean architecture to ensure a scalable and maintainable codebase.",
    ],
    id: 5,
  },
  {
    title: "Mobile Development Cohort",
    company_name: "Bangkit Academy by Google, GoTo, Tokopedia, Traveloka",
    icon: bangkit,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Jan 2025",
    points: [
      "Converted 20 SKS with focus on Android Development, Firebase, and Google Cloud Integration.",
      "Experienced in building scalable Android applications with Kotlin, adhering to clean architecture principles and MVVM design pattern.",
      "Proficient in Retrofit for API integration, Firebase for backend services, JUnit and MockK for unit testing, and implementing Machine Learning models on Android platforms.",
    ],
    id: 6,
  },
];

// ===== ORGANIZATIONAL EXPERIENCE =====
export const organizationalExperience = [
  {
    title: "Core Team Member",
    organization: "Google Developer Group Bandung",
    date: "Apr 2025 - Present",
    points: [
      "Serving as a Core Team member to strategize and execute large-scale developer events, fostering a local ecosystem of 1,000+ tech enthusiasts.",
      "JuaraGCP Facilitator: Actively facilitating the JuaraGCP Bandung event, guiding participants through Google Cloud Skills Boost labs.",
      "DevFest Bandung 2025 (Speaker Liaison): Acted as the dedicated Liaison Officer for high-profile keynote speakers.",
      "Facilitated technical discussions and built professional rapport with industry leaders and Google Developer Experts (GDEs).",
    ],
  },
  {
    title: "Web Curriculum",
    organization: "Google Developer Students Club (GDSC) Chapter UPI",
    date: "Nov 2023 - May 2024",
    points: [
      "Facilitated collaborative learning sessions via Google Meet, focusing on case-based studies like building web pages and publishing them for public access.",
      "Contributed to portfolio development and LinkedIn profiles for GDSC members, aiming to enhance professional networking and online presence.",
    ],
  },
];

// ===== MY WORDS =====
export const myWords = [
  {
    text: "Download my CV to learn more about my experience and skills. I'm excited about the opportunity to collaborate! ➡️",
    name: "Alfeus Martinus",
    designation: "Software Engineering",
    company: "Universitas Pendidikan Indonesia",
    image: avatar,
  },
];

// ===== PROJECTS =====
export const projects = [
  {
    name: "Berbagi.link",
    description: "A mobile Android app with an online store, events, real-time updates, and MVVM architecture",
    tags: [
      { name: "kotlin", color: "green-text-gradient" },
      { name: "MVVM", color: "blue-text-gradient" },
      { name: "retrofit", color: "pink-text-gradient" },
    ],
    image: project19,
    source_code_link: "https://github.com/AlfeusMartinus",
    demo_link: "https://berbagi.link/",
  },
  {
    name: "Coin Market",
    description: "A mobile app offering cryptocurrency prices, market trends, API integration, and efficient data visualization",
    tags: [
      { name: "recycle-view", color: "green-text-gradient" },
      { name: "kotlin", color: "blue-text-gradient" },
      { name: "crypto", color: "pink-text-gradient" },
    ],
    image: project20,
    source_code_link: "https://github.com/AlfeusMartinus",
    demo_link: "https://github.com/AlfeusMartinus",
  },
  {
    name: "CeritaMu",
    description: "A storytelling app allowing users to register, log in, upload, and share their personal stories",
    tags: [
      { name: "maps", color: "green-text-gradient" },
      { name: "intent-camera", color: "blue-text-gradient" },
      { name: "kotlin", color: "pink-text-gradient" },
    ],
    image: project21,
    source_code_link: "https://github.com/AlfeusMartinus",
    demo_link: "https://github.com/AlfeusMartinus",
  },
  {
    name: "Envi-STEAM",
    description: "A website that provides various interactive and engaging learning modules about environmental topics",
    tags: [
      { name: "html", color: "green-text-gradient" },
      { name: "js", color: "blue-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/AlfeusMartinus/Envi-STEAM",
    demo_link: "https://envisteam.my.id/",
  },
  {
    name: "Your Notes",
    description: "Web App Notes Create Use ReactJS and Build Tool Vite with modern UI",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "Vite", color: "green-text-gradient" },
    ],
    image: project17,
    source_code_link: "https://github.com/AlfeusMartinus/Your-Notes",
    demo_link: "https://notes-app-landing.netlify.app/",
  },
  {
    name: "Book Shelf Apps",
    description: "Submission of Data Management Applications Using DOM and Web Storage",
    tags: [
      { name: "Native", color: "blue-text-gradient" },
      { name: "Javascript", color: "green-text-gradient" },
    ],
    image: project18,
    source_code_link: "https://github.com/AlfeusMartinus/bookshelf-apps",
    demo_link: "https://bookslistapp.netlify.app/",
  },
];

// ===== SOCIAL MEDIA =====
export const SocialMedia = [
  {
    id: 1,
    icon: email,
    navigate: "mailto:feusmartinus@gmail.com?subject=Hello%20Alfeus!",
    label: "Email",
  },
  {
    id: 2,
    icon: githubb,
    navigate: "https://github.com/AlfeusMartinus",
    label: "GitHub",
  },
  {
    id: 3,
    icon: linkedin,
    navigate: "https://www.linkedin.com/in/alfeusmartinus/",
    label: "LinkedIn",
  },
  {
    id: 4,
    icon: instagram,
    navigate: "https://www.instagram.com/feusmrtns_/",
    label: "Instagram",
  },
];
