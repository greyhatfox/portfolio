import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Moon,
  MoveUpRight,
  Sun,
  X,
} from "lucide-react";
import { portfolio, type Project } from "@/lib/portfolio";

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function ThemeToggle({ isDark, onToggle }: { isDark: boolean; onToggle: () => void }) {
  return (
    <button
      className="theme-toggle"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={onToggle}
      type="button"
    >
      <span className="theme-toggle-icon">{isDark ? <Sun size={15} /> : <Moon size={15} />}</span>
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

function LinkTransition({ label }: { label: string | null }) {
  return (
    <div className={`link-transition ${label ? "link-transition-active" : ""}`} aria-hidden="true">
      <div className="transition-grid" />
      <div className="transition-core"><span /> <small>Opening {label}</small></div>
    </div>
  );
}

function SignalOrb({ onOrbClick }: { onOrbClick: () => void }) {
  return (
    <div className="signal-orb">
      <svg viewBox="0 0 520 520" role="presentation">
        <defs>
          <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--blood)" stopOpacity="0.48" />
            <stop offset="48%" stopColor="var(--blood)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--blood)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="orbStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--blood-soft)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--blood)" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <circle cx="260" cy="260" r="245" fill="url(#orbGlow)" />
        <circle className="orb-ring ring-a" cx="260" cy="260" r="190" />
        <circle className="orb-ring ring-b" cx="260" cy="260" r="142" />
        <circle className="orb-ring ring-c" cx="260" cy="260" r="92" />
        <path className="orb-sweep" d="M 94 218 C 131 84, 332 35, 438 160 C 515 251, 436 395, 298 415 C 167 434, 72 347, 94 218 Z" />
        <path className="orb-sweep orb-sweep-two" d="M 153 383 C 65 283, 125 137, 240 104 C 356 71, 455 142, 450 257 C 445 383, 281 459, 153 383 Z" />
        <g className="orb-core-group" onClick={onOrbClick} role="button" tabIndex={0} aria-label="Interactive signal core">
          <circle className="orb-core" cx="260" cy="260" r="26" />
          <circle className="orb-pulse" cx="260" cy="260" r="38" />
        </g>
        <circle className="orb-node" cx="449" cy="157" r="5" />
        <circle className="orb-node node-two" cx="94" cy="218" r="4" />
        <path className="orb-crosshair" d="M 260 37 V 76 M 260 444 V 483 M 37 260 H 76 M 444 260 H 483" />
      </svg>
      <span className="orb-label orb-label-top">SCROLL TO EXPLORE</span>
      <span className="orb-label orb-label-bottom">BE CURIOUS</span>
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`project-visual visual-${project.accent}`} aria-hidden="true">
      <span className="visual-index">{project.number}</span>
      {project.thumbnail && <img className="project-thumbnail" src={project.thumbnail} alt="" />}
      <svg viewBox="0 0 620 360" role="presentation">
        <defs>
          <linearGradient id={`visual-gradient-${project.number}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        {project.number === "01" && (
          <>
            <rect x="104" y="62" width="340" height="220" rx="4" className="visual-frame" />
            <path d="M 138 112 H 366 M 138 133 H 300" className="visual-line" />
            <path d="M 138 184 H 408 M 138 207 H 340 M 138 230 H 382" className="visual-line muted" />
            <circle cx="405" cy="124" r="19" className="visual-fill" />
            <path d="M 104 292 H 444" className="visual-line bold" />
          </>
        )}
        {project.number === "02" && (
          <>
            <circle cx="294" cy="181" r="126" className="visual-orbit" />
            <circle cx="294" cy="181" r="75" className="visual-orbit dashed" />
            <path d="M 96 260 C 194 120, 304 335, 497 96" className="visual-line bold" />
            <circle cx="294" cy="181" r="15" className="visual-fill" />
            <path d="M 294 55 V 306 M 168 181 H 420" className="visual-line muted" />
          </>
        )}
        {project.number === "03" && (
          <>
            <path d="M 122 278 L 206 178 L 282 242 L 372 90 L 500 218" className="visual-line bold" />
            <path d="M 122 278 L 206 178 L 282 242 L 372 90 L 500 218 V 278 Z" fill={`url(#visual-gradient-${project.number})`} className="visual-shape" />
            <circle cx="206" cy="178" r="7" className="visual-fill" />
            <circle cx="372" cy="90" r="7" className="visual-fill" />
            <path d="M 122 300 H 500" className="visual-line muted" />
          </>
        )}
      </svg>
    </div>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem("signal-theme") !== "light";
  });
  const [transitionLabel, setTransitionLabel] = useState<string | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<(typeof portfolio.certificates)[number] | null>(null);
  const [orbClicks, setOrbClicks] = useState(0);
  const [easterEggPhase, setEasterEggPhase] = useState<"hidden" | "phase1" | "phase2" | "closing">("hidden");
  const aboutRef = useReveal();
  const workRef = useReveal();
  const contactRef = useReveal();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("signal-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    if (easterEggPhase === "phase1") {
      const timer = setTimeout(() => {
        setEasterEggPhase("phase2");
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (easterEggPhase === "phase2") {
      const timer = setTimeout(() => {
        setEasterEggPhase("closing");
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (easterEggPhase === "closing") {
      const timer = setTimeout(() => {
        setEasterEggPhase("hidden");
      }, 420);
      return () => clearTimeout(timer);
    }
  }, [easterEggPhase]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCertificate(null);
        setEasterEggPhase("hidden");
      }
    };
    document.body.style.overflow = activeCertificate || easterEggPhase !== "hidden" ? "hidden" : "";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeCertificate, easterEggPhase]);

  const toggleTheme = () => setIsDark((current) => !current);
  const handleExternalLink = (label: string) => {
    setTransitionLabel(label);
    window.setTimeout(() => setTransitionLabel(null), 650);
  };

  const handleOrbClick = () => {
    if (easterEggPhase !== "hidden") return;
    setOrbClicks((prev) => {
      const next = prev + 1;
      if (next >= 5) {
        setEasterEggPhase("phase1");
        return 0;
      }
      return next;
    });
  };

  return (
    <div className="site-shell">
      <header className="site-nav">
        <a className="wordmark" href="#top" aria-label={`${portfolio.name} home`}>
          <span className="wordmark-mark">{portfolio.monogram}</span>
          <span className="wordmark-name">{portfolio.name}</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <a className="nav-cta" href={`mailto:${portfolio.email}`}>
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section snap-section">
          <div className="hero-copy reveal is-visible">
            <p className="eyebrow"><span className="status-dot" /> {portfolio.availability}</p>
            <h1>{portfolio.intro.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
            <p className="hero-subcopy">{portfolio.bio}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View selected work <ArrowDownRight size={17} /></a>
              <a className="text-link" href={`mailto:${portfolio.email}`}>Send an email <MoveUpRight size={15} /></a>
            </div>
          </div>
          <div className="hero-visual reveal is-visible" style={{ animationDelay: "120ms" }}>
            <SignalOrb onOrbClick={handleOrbClick} />
          </div>
          <div className="hero-meta">
            <span>01 / 05</span>
            <span>Independent digital practice</span>
            <span>{portfolio.location}</span>
          </div>
        </section>

        <section className="content-section work-section snap-section" id="work" ref={workRef}>
          <div className="section-heading">
            <div>
              <p className="section-kicker">02 / Selected work</p>
              <h2>Built for the<br /><em>people.</em></h2>
            </div>
            <p className="section-intro">A small selection of recent work!.</p>
          </div>
          <div className="project-list">
            {portfolio.projects.map((project) => (
              <a className="project-card" key={project.number} href={project.url} target="_blank" rel="noreferrer" onClick={() => handleExternalLink(project.title)}>
                <ProjectVisual project={project} />
                <div className="project-info">
                  <div className="project-heading">
                    <div>
                      <p className="project-type">{project.type} · {project.year}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <span className="project-arrow"><ArrowUpRight size={20} /></span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="content-section about-section snap-section" id="about" ref={aboutRef}>
          <div className="about-aside">
            <p className="section-kicker">03 / About</p>
            <div className="about-stamp">
              <svg viewBox="0 0 160 160" aria-hidden="true">
                <circle cx="80" cy="80" r="61" />
                <path d="M 80 19 V 34 M 80 126 V 141 M 19 80 H 34 M 126 80 H 141" />
                <circle cx="80" cy="80" r="11" />
              </svg>
              <span></span>
            </div>
          </div>
          <div className="about-main">
            <p className="about-lede">Build tools with features and <span>a purpose</span>.</p>
            <p className="about-copy">{portfolio.bio} I care about every detail that counts : the way a system behaves, the functionality of a page, and the tiny featuress that fascinate people.</p>
            <div className="services-grid">
              {portfolio.services.map((service, index) => (
                <div className="service-item" key={service}><span>0{index + 1}</span><strong>{service}</strong><Check size={15} /></div>
              ))}
            </div>
            <div className="external-links">
              <a href={portfolio.links.github.url} target="_blank" rel="noreferrer" onClick={() => handleExternalLink(portfolio.links.github.label)}><Github size={17} /> {portfolio.links.github.label} <ArrowUpRight size={14} /></a>
              <a href={portfolio.links.linkedin.url} target="_blank" rel="noreferrer" onClick={() => handleExternalLink(portfolio.links.linkedin.label)}><Linkedin size={17} /> {portfolio.links.linkedin.label} <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>

        <section className="content-section certificates-section snap-section" id="certificates">
          <div className="section-heading certificate-heading">
            <div>
              <p className="section-kicker">04 / Certifications</p>
              <h2>Proof of<br /><em>practice.</em></h2>
            </div>
            <p className="section-intro">A growing archive of learning milestones.</p>
          </div>
          <div className="certificate-list">
            {portfolio.certificates.map((certificate, index) => (
              <button className="certificate-card" key={`${certificate.title}-${index}`} type="button" onClick={() => setActiveCertificate(certificate)}>
                <span className="certificate-number">0{index + 1}</span>
                <span className="certificate-copy"><strong>{certificate.title}</strong><small>{certificate.issuer} · {certificate.year}</small></span>
                <span className="certificate-arrow"><ExternalLink size={17} /></span>
              </button>
            ))}
          </div>
        </section>

        <section className="contact-section snap-section" id="contact" ref={contactRef}>
          <div className="contact-grid">
            <div>
              <p className="section-kicker">05 / Contact</p>
              <h2>Contact Me!</h2>
            </div>
            <div className="contact-copy">
              <p>Tell me what you&apos;re building, where you&apos;re stuck, or what you&apos;re curious about. I&apos;ll get back to you soon.</p>
              <a className="email-link" href={`mailto:${portfolio.email}`}><Mail size={19} /> {portfolio.email} <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <footer className="site-footer">
            <span>© {portfolio.year} {portfolio.name}</span>
            <span>Designed & built with intention.</span>
            <a href="#top">Back to top <ArrowUpRight size={14} /></a>
          </footer>
        </section>
      </main>
      <LinkTransition label={transitionLabel} />
      {activeCertificate && (
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={`${activeCertificate.title} certificate`}>
          <div className="certificate-modal-backdrop" onClick={() => setActiveCertificate(null)} />
          <div className="certificate-modal-panel">
            <div className="certificate-modal-header">
              <div><p className="section-kicker">Certificate preview</p><h3>{activeCertificate.title}</h3><small>{activeCertificate.issuer} · {activeCertificate.year}</small></div>
              <a className="certificate-open-link" href={activeCertificate.url} target="_blank" rel="noreferrer" onClick={() => handleExternalLink(activeCertificate.title)}>Open PDF <ArrowUpRight size={14} /></a>
              <button className="modal-close" type="button" onClick={() => setActiveCertificate(null)} aria-label="Close certificate preview"><X size={19} /></button>
            </div>
            <iframe className="certificate-frame" src={`${activeCertificate.url}#toolbar=1&navpanes=0`} title={activeCertificate.title} />
          </div>
        </div>
      )}
      {easterEggPhase !== "hidden" && (
        <div
          className={`easter-egg-overlay ${easterEggPhase === "closing" ? "is-closing" : ""}`}
          onClick={() => setEasterEggPhase("closing")}
          role="dialog"
          aria-modal="true"
          aria-label="Secret message"
        >
          <div className="easter-egg-content" key={easterEggPhase === "closing" ? "phase2" : easterEggPhase}>
            <h2 className="easter-egg-text">
              {easterEggPhase === "phase1" ? "Getting Curious huh" : "I like that!"}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
