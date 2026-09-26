// EDIT THIS FILE FIRST when you want to personalize the portfolio.
// The interface reads from this file only; there is no content editor on the hosted site.

export type Project = {
  number: string;
  title: string;
  description: string;
  type: string;
  year: string;
  tags: string[];
  url: string;
  // THUMBNAIL GUIDE: add a hosted image URL or local public path here, e.g. "/thumbnails/vote.png".
  // Leave it as "" to keep the built-in vector artwork for that project.
  thumbnail: string;
  accent: "red" | "cream" | "ink";
};

export type EducationItem = {
  institution: string;
  location: string;
  degree: string;
  description: string;
  badge: string;
  year: string;
  accent: "red" | "cream" | "ink";
};

export type SkillCategory = {
  name: string;
  category: string;
  description: string;
  tags: string[];
  wide?: boolean;
};

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  url: string;
};

export const portfolio = {
  name: "Mohammad Irfan Ahmed",
  monogram: "MIA",
  role: "Blockchain & AI developer",
  location: "Based in India · working worldwide",
  availability: "Open to internships, collaborations & build ideas",
  email: "irfan.ahm.mohammad@gmail.com",
  intro: "Building digital tools\nwith a purpose.",
  bio: "I’m Mohammad Irfan Ahmed, a developer focused on making useful, accessible products with blockchain, AI, and an easily navigatable interface design. I turn ambitious ideas into functional tools that people can actually use.",
  year: "2026",

  links: {
    github: { label: "GitHub", url: "https://github.com/greyhatfox" },
    linkedin: { label: "LinkedIn", url: "https://linkedin.com/in/irfan-ahmed-mohammad-28295331b" },
  },

  // Add, remove, or reorder websites. The project cards update automatically.
  // THUMBNAILS: set each `thumbnail` to your image URL/path. Suggested ratio: 16:10.
  projects: [
    {
      number: "01",
      title: "Voting System",
      description: "A blockchain-based voting application designed around transparent, tamper-resistant participation.",
      type: "Blockchain application",
      year: "2026",
      tags: ["Blockchain", "Voting", "Web app"],
      url: "https://votethevotegng.netlify.app/",
      thumbnail: "thumbnails/vote.png", // Add a thumbnail here, e.g. "/thumbnails/vote-the-vote.png".
      accent: "red",
    },
    {
      number: "02",
      title: "Donation System",
      description: "A blockchain-based donation system that brings traceability and trust to giving.",
      type: "Blockchain application",
      year: "2026",
      tags: ["Blockchain", "Donations", "Transparency"],
      url: "https://testdon.netlify.app/",
      thumbnail: "thumbnails/donation.png", // Add a thumbnail here, e.g. "/thumbnails/donation-system.png".
      accent: "cream",
    },
    {
      number: "03",
      title: "StudyKorner",
      description: "An AI-integrated study platform helping students learn with more focus and less friction.",
      type: "AI learning platform",
      year: "2026",
      tags: ["AI", "Education", "Product design"],
      url: "https://studykorner.netlify.app/",
      thumbnail: "thumbnails/study.png", // Add a thumbnail here, e.g. "/thumbnails/studykorner.png".
      accent: "ink",
    },
    {
      number: "04",
      title: "Student Planner Tools",
      description: "A focused toolkit for students, including a CGPA predictor and leave scheduler.",
      type: "Student productivity",
      year: "2026",
      tags: ["CGPA", "Planner", "Utilities"],
      url: "https://student-planner-tools.netlify.app/",
      thumbnail: "thumbnails/tools.png", // Add a thumbnail here, e.g. "/thumbnails/student-tools.png".
      accent: "cream",
    },
  ] satisfies Project[],

  education: [
    {
      institution: "Vellore Institute of Technology",
      location: "Amaravathi, Andhra Pradesh, India",
      degree: "B.Tech — Bachelor of Technology",
      description: "Currently pursuing B.Tech, focusing on Computer Science, Web Development, DSA, and Smart Contract engineering.",
      badge: "PURSUING B.TECH",
      year: "GRADUATION 2028",
      accent: "red",
    },
    {
      institution: "Narayana Junior College",
      location: "Nellore, Andhra Pradesh, India",
      degree: "12th Grade (Higher Secondary)",
      description: "Studied 12th grade under the State Board of Intermediate Education and secured an overall score of 85%.",
      badge: "85% SCORE",
      year: "STATE BOARD",
      accent: "cream",
    },
    {
      institution: "Ithaka ENG MED School",
      location: "Nellore, Andhra Pradesh, India",
      degree: "10th Grade (Secondary School)",
      description: "Completed 10th grade CBSE Examinations with an aggregate score of 92%.",
      badge: "92% SCORE",
      year: "CBSE BOARD",
      accent: "ink",
    },
  ] satisfies EducationItem[],

  skills: [
    {
      name: "JAVA",
      category: "Core & OOP",
      description: "Strong foundation in Java programming, Object-Oriented paradigm, multithreading, and data structures.",
      tags: ["Java", "OOP", "Backend"],
    },
    {
      name: "C",
      category: "Systems & Fundamentals",
      description: "Procedural programming, low-level memory management, pointers, and performance optimization.",
      tags: ["C", "Memory", "Logic"],
    },
    {
      name: "Solidity",
      category: "Blockchain & Smart Contracts",
      description: "Developing decentralized applications (dApps), Ethereum smart contracts, and Web3 ecosystem tools.",
      tags: ["Solidity", "EVM", "Web3"],
    },
    {
      name: "Web Dev",
      category: "Full-Stack & Frontend",
      description: "Building responsive, accessible web applications using modern HTML, CSS, JavaScript, and React.",
      tags: ["HTML/CSS", "JS", "React"],
    },
    {
      name: "DSA",
      category: "Data Structures & Algorithms",
      description: "Algorithmic problem solving, time & space complexity optimization, trees, graphs, and dynamic programming.",
      tags: ["Algorithms", "Data Structures", "Optimization"],
      wide: true,
    },
  ] satisfies SkillCategory[],

  // Add your certificates here. Replace the sample rows with your own title, issuer, year, and URL.
  certificates: [
    {
      title: "Hashgraph Developer",
      issuer: "The Hashgraph Association",
      year: "2026",
      url: "/certificates/hashgraph-developer.pdf",
    },

    {
      title: "MATLAB Onramp",
      issuer: "MathWorks Training Services",
      year: "2024",
      url: "/certificates/matlab-onramp.pdf",
    },
  ] satisfies Certificate[],

  services: [
    "Blockchain applications",
    "AI-integrated products",
    "Student-focused tools",
    "Creative frontend development",
  ],
} as const;

