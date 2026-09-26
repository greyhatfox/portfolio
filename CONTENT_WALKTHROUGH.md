# Portfolio Content & Customization Guide

This guide walks you through editing text, projects, certificates, images, colors, and layout in your Signal Portfolio.

---

## 📁 Key File Locations at a Glance

| Content / Feature | File Location | What it Controls |
| :--- | :--- | :--- |
| **Main Content & Data** | `client/src/lib/portfolio.ts` | Name, Bio, Links, Email, Projects, Certificates, Services |
| **Page Layout & Structure** | `client/src/pages/Home.tsx` | HTML sections, JSX structure, interactive components |
| **Styles, Colors & Fonts** | `client/src/index.css` | Color themes (dark/light), typography, spacing, scroll snap |
| **Images & Assets** | `client/public/` | Static images, PDFs, project thumbnails, icons |
| **Deployment Config** | `netlify.toml` | Build settings & SPA redirects for Netlify |

---

## 1. ✏️ Editing Portfolio Content (The Easy Way)

Almost all content displayed on your website is centralized in **[`client/src/lib/portfolio.ts`](file:///c:/Users/irfan/Downloads/signal-portfolio/client/src/lib/portfolio.ts)**.

### A. Personal Information & Social Links
Open `client/src/lib/portfolio.ts` and edit the `portfolio` object:

```typescript
export const portfolio = {
  name: "Mohammad Irfan Ahmed",         // Your full name
  monogram: "MIA",                      // Monogram logo text
  role: "Blockchain & AI developer",    // Your role title
  location: "Based in India · working worldwide",
  availability: "Open to internships, collaborations & build ideas",
  email: "irfanahmed25046@gmail.com",   // Email address
  intro: "I build digital tools\nwith a purpose.", // Hero heading (\n = new line)
  bio: "I’m Mohammad Irfan Ahmed...",   // Bio description

  links: {
    github: { label: "GitHub", url: "https://github.com/greyhatfox" },
    linkedin: { label: "LinkedIn", url: "https://linkedin.com/in/irfan-ahmed-mohammad-28295331b" },
  },
  ...
}
```

---

### B. Adding / Editing Projects
Projects shown in **02 / Selected Work** are listed inside the `projects` array in `portfolio.ts`:

```typescript
projects: [
  {
    number: "01",
    title: "Vote The Vote",
    description: "A blockchain-based voting application...",
    type: "Blockchain application",
    year: "2026",
    tags: ["Blockchain", "Voting", "Web app"],
    url: "https://votethevotegng.netlify.app/",
    thumbnail: "/thumbnails/vote.png", // Path inside client/public/ (or full URL)
    accent: "red", // Card theme accent: "red" | "cream" | "ink"
  },
  // Add more project objects here!
]
```

---

### C. Adding Certificates
Certificates shown in **04 / Proof of Practice** are listed inside `certificates`:

```typescript
certificates: [
  {
    title: "Full Stack Web Development",
    issuer: "Coursera / Meta",
    year: "2026",
    url: "/certificates/meta-fullstack.pdf", // Link to hosted PDF or web URL
  },
]
```

---

### D. Adding Project Images / Thumbnails

1. Place your thumbnail images (e.g. `vote.jpg` or `study.png`) in the `client/public/thumbnails/` directory.
2. In `portfolio.ts`, update the `thumbnail` property:
   ```typescript
   thumbnail: "/thumbnails/vote.jpg"
   ```

---

## 2. 🎨 Changing Colors, Themes & Styling

All visual styling is located in **[`client/src/index.css`](file:///c:/Users/irfan/Downloads/signal-portfolio/client/src/index.css)**.

### Light & Dark Mode Color Palette
Look for the CSS variables at the top of `index.css`:

```css
:root {
  --bg: #e9e6df;          /* Light mode background */
  --ink: #171717;        /* Main text color */
  --blood: #a41521;      /* Accent color */
}

:root.dark {
  --bg: #111111;          /* Dark mode background */
  --ink: #eeece7;        /* Dark mode main text */
  --blood: #bd2634;      /* Dark mode accent color */
}
```

---

## 3. 🛠️ Running & Testing Locally

To preview your changes in real-time on your computer:

1. Open your terminal in the project directory:
   ```bash
   cd c:\Users\irfan\Downloads\signal-portfolio
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   *(or `npx pnpm dev`)*

3. Open your browser to the URL displayed in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

---

## 4. 🚀 Deploying Your Changes to Netlify

Once you are satisfied with your edits:

1. Stage and commit your changes:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   ```
2. Push to GitHub:
   ```bash
   git push origin main
   ```
3. Netlify will automatically detect the push and deploy your new updates live within seconds!
