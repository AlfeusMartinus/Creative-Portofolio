import {
  react,
  js,
  twcss,
  cpp,
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
  canva,
  flyon,
  gamki,
  envisteam,
  gkp,
  gdsc,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project16,
  project17,
  project18,
  me,
  CV_Duncan,
  email,
  githubb,
  linkedin,
  instagram,
} from "../assets";

export const CVDuncan = CV_Duncan;

export const linkGithub = "https://github.com/AlfeusMartinus";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "cv",
    title: "Download CV",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "C++",
    icon: cpp,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Vannila JS",
    icon: js,
  },
  {
    title: "Tailwind CSS",
    icon: twcss,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "webflow",
    icon: webflow,
  },
  {
    name: "canva",
    icon: canva,
  },
];

const experiences = [
  {
    title: "Curriculum Web Developer",
    company_name: "Google Developer Students Club - UPI",
    icon: gdsc,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Present",
    points: [
      "Sharing about how a web page and its components work.",
      "Learn together in a case study, namely building a web page and publishing it for public viewing.",
      "Building portfolios and persona profiles of GDSC members via the LinkedIn platform.",
    ],
    id: 5,
  },
  {
    title:
      "Chairman of the Youth Management Commission (KPR) GKP Jemaat Cimahi",
    company_name: "KPR GKPJ CIMAHI",
    icon: gkp,
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    points: [
      "Led the youth of the Pasundan Christian Church in Cimahi city for the period 2023-2024, overseeing various aspects of their spiritual and social development.",
      "Organized and facilitated various events and activities for the youth, such as worship services, bible studies, retreats, and outreach programs.",
    ],
    id: 4,
  },
  {
    title:
      "Active member of the Indonesian Christian Youth Movement (GAMKI) DPC Kota Cimahi",
    company_name: "DPC GAMKI Kota Cimahi",
    icon: gamki,
    iconBg: "#E6DEDD",
    date: "2021 - Present",
    points: [
      "Held the position of External Division Staff, responsible for coordinating and communicating with external parties such as other organizations, and government agencies.",
      "Participated in various activities and programs organized by GAMKI, such as seminars, workshops, social services, and internal activites.",
    ],
    id: 3,
  },
  {
    title: "Frontend Developer",
    company_name: "Envi-STEAM",
    icon: envisteam,
    iconBg: "#E6DEDD",
    date: "January - August 2023",
    points: [
      "Development commercial multipage education website. The site is organized into multiple pages, each containing valuable information and tools for students, educators, and anyone interested in learning.",
      "Development using HTML, CSS, Javascript (Vanilla)",
      "SEO Performance and HTTPS Protocol Network",
    ],
    id: 2,
  },
  {
    title: "Frontend Developer",
    company_name: "Flyon Tech - Digital Marketing Agency",
    icon: flyon,
    iconBg: "#E6DEDD",
    date: "June 2022 - September 2023",
    points: [
      "Development commercial website of UMKM products using Elementor Framework, Wordpress, SEO, and Integration with Google Web technologies.",
    ],
    id: 1,
  },
];

const myWords = [
  {
    text: "Here you can download my СV by clicking on Download button. I will be glad to our cooperation. ➡️",
    name: "Alfeus Martinus",
    designation: "Software Engineering",
    company: "Universitas Pendidikan Indonesia",
    image: me,
  },
];

const projects = [
  {
    name: "Envi-STEAM",
    description:
      "Envi-STEAM is a website that provides various interactive and engaging learning modules about environmental topics",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/AlfeusMartinus/Envi-STEAM",
    demo_link: "https://envisteam.my.id/",
  },
  {
    name: "Abon Burung",
    description:
      "Responsive Landing page website for UMKM Products Abon Cap Burung in Boyolali - Semarang",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "elementor",
        color: "green-text-gradient",
      },
      {
        name: "astra",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://abonburungofficialstore.com/",
    demo_link: "https://abonburungofficialstore.com/",
  },
  {
    name: "Movie Web",
    description:
      "Learn React by creating a movie web, using bootstrap and learn how to fetch data from TMDb API.",
    tags: [
      {
        name: "jsx",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/AlfeusMartinus/movie-web",
    demo_link: "https://github.com/AlfeusMartinus/movie-web",
  },
  {
    name: "Single Page Porto",
    description:
      "Create a single page portofolio website using HTML, CSS, JavaScript and AOS (Animate On Scroll) Library",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/AlfeusMartinus/porto-web",
    demo_link: "https://profile-set.netlify.app/",
  },
  {
    name: "Quotes Site",
    description:
      "Random Quotes is a web that generates random quotes. This website is built using Node JS and uses the API from RapidApi.com",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/AlfeusMartinus/quotes-site",
    demo_link: "https://quote-site.netlify.app/",
  },
  {
    name: "Calculator",
    description:
      "A calculator website using JavaScript HTML CSS can perform basic mathematical operations",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/AlfeusMartinus/calculator-web",
    demo_link: "https://lets-calculate-web.vercel.app",
  },
  {
    name: "College Alfe.",
    description:
      "Blog Website for Attachment Work College build using CMS",
    tags: [
      {
        name: "cms",
        color: "green-text-gradient",
      },
      {
        name: "webflow",
        color: "pink-text-gradient",
      },
    ],
    image: project16,
    source_code_link: "https://alfeus-college-blog.webflow.io/",
    demo_link: "https://alfeus-college-blog.webflow.io/",
  },
  {
    name: "Your Notes",
    description:
      "Web App Notes Create Use ReactJS and Build Tool Vite",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
    ],
    image: project17,
    source_code_link: "https://github.com/AlfeusMartinus/Your-Notes",
    demo_link: "https://notes-app-landing.netlify.app/",
  },
  {
    name: "Book Shelf Apps",
    description:
      "Submission of Data Management Applications Using DOM and Web Storage",
    tags: [
      {
        name: "Native",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: project18,
    source_code_link: "https://github.com/AlfeusMartinus/bookshelf-apps",
    demo_link: "https://bookslistapp.netlify.app/",
  },
];

const SocialMedia = [
  {
    id: 1,
    icon: email,
    navigate:
      "mailto:feusmartinus@gmail.com?subject=Hai%20Alfeus%20Martinus%21%20Bisakah%20Saya%20Menghubungi%20Anda%3F",
  },
  {
    id: 2,
    icon: githubb,
    navigate: "https://github.com/AlfeusMartinus",
  },
  {
    id: 3,
    icon: linkedin,
    navigate: "https://www.linkedin.com/in/alfeusmartinus/",
  },
  {
    id: 4,
    icon: instagram,
    navigate: "https://www.instagram.com/feusmrtns_/",
  },
];

export { services, technologies, experiences, myWords, projects, SocialMedia };
