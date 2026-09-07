import { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionLabel from "../components/ui/SectionLabel";

const featuredProjects = [
  {
    title: "Droplr", year: "2025", image: "/droplr",
    description: "A location-based file sharing app for quick transfers between nearby users, with automatic expiry for cleaner privacy controls.",
    outcome: "Secure uploads, downloads and geolocation-based sharing, built across the MERN stack.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    liveUrl: "https://droplr-front.vercel.app/", repoUrl: "https://github.com/AboubakarArisar/Droplr",
    focus: "REAL-TIME FILE SHARING",
  },
  {
    title: "Steward", year: "2026",
    description: "A project and financial management platform for freelancers and small teams. Projects, clients and income tracking in one place.",
    outcome: "Built project tracking, client management and financial dashboards, supported by REST APIs, authentication and optimized database queries.",
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind", "Zustand"],
    focus: "FULL-STACK SAAS",
  },
  {
    title: "Dastakhat", year: "2026",
    description: "An e-signature platform for creating, signing and sharing documents, with ready-to-use agreements and custom document creation.",
    outcome: "Implemented electronic signatures, document sharing and role-based access for both signing parties.",
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind"],
    focus: "DOCUMENT WORKFLOWS",
  },
  {
    title: "The Post Digital", year: "2026",
    description: "A production news platform with server-side rendering and a backend built to handle daily publishing traffic.",
    outcome: "Identified excessive PostgreSQL data transfer and introduced Redis caching, reducing database bandwidth from gigabytes to a few megabytes.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Tailwind"],
    focus: "PERFORMANCE & BACKEND SYSTEMS",
  },
];

export function SelectedWork({ page = false }: { page?: boolean }) {
  const Heading = page ? "h1" : "h2";
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <SectionLabel>02 / Selected work</SectionLabel>
      <div className="work-heading">
        <Heading id="work-title" className="section-title">things i've built.</Heading>
        {!page && <Link className="text-link" to="/projects">All work <span aria-hidden="true">↗</span></Link>}
      </div>
      {featuredProjects.map((project, index) => (
        <article className="project-row" key={project.title}>
          <div className="project-copy">
            <div className="project-number metadata"><span>0{index + 1}</span><span>{project.year}</span></div>
            <h3 className="project-title">{project.title}</h3>
            <p className="text-body">{project.description}</p>
            <dl className="project-facts">
              <div><dt className="metadata">ROLE</dt><dd>Full-stack development</dd></div>
              <div><dt className="metadata">STACK</dt><dd className="stack">{project.stack.join(" / ")}</dd></div>
            </dl>
            {project.liveUrl && <div className="link-row">
              <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">View project <span aria-hidden="true">↗</span></a>
              <a className="text-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer">Source <span aria-hidden="true">↗</span></a>
            </div>}
          </div>
          {project.image ? (
            <a className="project-media" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live`}>
              <img src={`${project.image}.webp`} srcSet={`${project.image}-700.webp 700w, ${project.image}.webp 1024w`} sizes="(max-width: 768px) calc(100vw - 40px), 60vw" alt="Droplr project preview" width="1024" height="1024" loading="lazy" decoding="async" />
            </a>
          ) : (
            <div className="project-engineering">
              <p className="metadata">{project.focus}</p>
              <p className="body-large">{project.outcome}</p>
            </div>
          )}
        </article>
      ))}
    </section>
  );
}

export default function Projects() {
  useEffect(() => { document.title = "Aboubakar Isar — Work"; }, []);
  return (
    <div className="wrap page">
      <SelectedWork page />
      <section className="section" aria-labelledby="other-work">
        <SectionLabel>More from the workbench</SectionLabel>
        <h2 id="other-work" className="section-title">other things i've made.</h2>
        <article className="other-project">
          <img src="/noteswap.webp" srcSet="/noteswap-700.webp 700w, /noteswap.webp 1024w" sizes="260px" alt="NoteSwap project preview" width="1024" height="1024" loading="lazy" decoding="async" />
          <div>
            <span className="metadata">2024 / MERN STACK</span>
            <h3>NoteSwap</h3>
            <p className="text-body">A structured sharing platform where students earn points by uploading notes and use those points to access other content.</p>
            <div className="link-row">
              <a className="text-link" href="https://noteswap-sigma.vercel.app/" target="_blank" rel="noopener noreferrer">View project <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="https://github.com/AboubakarArisar/NoteSwap-Frontend" target="_blank" rel="noopener noreferrer">Source <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </article>
        <article className="other-project text-only">
          <span className="metadata">2025 / REACT · NODE.JS · MONGODB</span>
          <div><h3>Torah Learning Platform</h3><p className="text-body">A full-stack learning platform with video calling and real-time messaging, built with WebRTC and Socket.io.</p></div>
        </article>
      </section>
      <div className="section">
        <SectionLabel>Best fit</SectionLabel>
        <h2 className="section-title">a clear idea.<br />a working product.</h2>
        <p className="body-large project-fit">MVPs, custom dashboards, backend APIs and practical AI automation. Send your product idea, current stage and deadline.</p>
        <Link className="text-link" to="/contact">Send project scope <span aria-hidden="true">↗</span></Link>
      </div>
    </div>
  );
}
