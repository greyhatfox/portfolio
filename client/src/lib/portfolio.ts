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
  email: "irfanahmed25046@gmail.com",
  intro: "I build digital tools\nwith a purpose.",
  bio: "I’m Mohammad Irfan Ahmed, a developer focused on making useful, accessible products with blockchain, AI, and thoughtful interface design. I enjoy turning ambitious ideas into clear tools people can actually use.",
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
      title: "Vote The Vote",
      description: "A blockchain-based voting application designed around transparent, tamper-resistant participation.",
      type: "Blockchain application",
      year: "2026",
      tags: ["Blockchain", "Voting", "Web app"],
      url: "https://votethevotegng.netlify.app/",
      thumbnail: "", // Add a thumbnail here, e.g. "/thumbnails/vote-the-vote.png".
      accent: "red",
    },
    {
      number: "02",
      title: "Donation System",
      description: "A blockchain-based donation system that brings traceability and trust to giving.",
      type: "Blockchain application",
      year: "2026",
      tags: ["Blockchain", "Donations", "Transparency"],
      url: "https://donationsystem.netlify.app/",
      thumbnail: "", // Add a thumbnail here, e.g. "/thumbnails/donation-system.png".
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
      thumbnail: "", // Add a thumbnail here, e.g. "/thumbnails/studykorner.png".
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
      thumbnail: "", // Add a thumbnail here, e.g. "/thumbnails/student-tools.png".
      accent: "cream",
    },
  ] satisfies Project[],

  // Add your certificates here. Replace the sample rows with your own title, issuer, year, and URL.
  certificates: [
    {
      title: "Your certificate title",
      issuer: "Issuing organization",
      year: "20XX",
      url: "https://example.com/your-certificate",
    },
  ] satisfies Certificate[],

  services: [
    "Blockchain applications",
    "AI-integrated products",
    "Student-focused tools",
    "Creative frontend development",
  ],
} as const;
