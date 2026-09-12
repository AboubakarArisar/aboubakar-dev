import { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionLabel from "../components/ui/SectionLabel";

type Project = {
  title: string;
  year: string;
  description: string;
  outcome: string;
  stack: string[];
  focus: string;
  role?: string;
  liveUrl?: string;
  repoUrl?: string;
  liveLabel?: string;
  sourceStatus?: string;
};

const featuredProjects: Project[] = [
  {
    title: "Last Light", year: "2026",
    description: "A browser-based football game where you draw passes and shots to create the decisive attacking move. Play through a career, take on daily challenges and replay your best moments.",
    outcome: "Built with Three.js and TypeScript, combining ball physics, opponent AI and touch-friendly drawing controls with career progression and optional Supabase cloud saves.",
    stack: ["TypeScript", "Three.js", "Vite", "Supabase"],
    role: "Game design & development",
    liveUrl: "https://lastlight.aboubakarisar.tech/", repoUrl: "https://github.com/AboubakarArisar/last_light",
    liveLabel: "Play game",
    focus: "BROWSER FOOTBALL GAME",
  },
  {
    title: "Droplr", year: "2025",
    description: "A location-based file sharing app for quick transfers between nearby users, with automatic expiry for cleaner privacy controls.",
    outcome: "Secure uploads, downloads and geolocation-based sharing, built across the MERN stack.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    liveUrl: "https://droplr-front.vercel.app/", repoUrl: "https://github.com/AboubakarArisar/Droplr",
    focus: "REAL-TIME FILE SHARING",
  },
  {
    title: "Steward", year: "2026",
    liveUrl: "https://trysteward.vercel.app/", repoUrl: "https://github.com/AboubakarArisar/projects-and-payments",
    description: "A project and financial management platform for freelancers and small teams. Projects, clients and income tracking in one place.",
    outcome: "Built project tracking, client management and financial dashboards, supported by REST APIs, authentication and optimized database queries.",
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind", "Zustand"],
    focus: "FULL-STACK SAAS",
  },
  {
    title: "Dastakhat", year: "2026",
    liveUrl: "http://dastakhat.vercel.app/", repoUrl: "https://github.com/aboubakarArisar/dastakhat",
    description: "An e-signature platform for creating, signing and sharing documents, with ready-to-use agreements and custom document creation.",
    outcome: "Implemented electronic signatures, document sharing and role-based access for both signing parties.",
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind"],
    focus: "DOCUMENT WORKFLOWS",
  },
  {
    title: "The Post Digital", year: "2026",
    liveUrl: "https://www.thepostdigital.net/", sourceStatus: "Source unavailable",
    description: "A production news platform with server-side rendering and a backend built to handle daily publishing traffic.",
    outcome: "Identified excessive PostgreSQL data transfer and introduced Redis caching, reducing database bandwidth from gigabytes to a few megabytes.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Tailwind"],
    focus: "PERFORMANCE & BACKEND SYSTEMS",
  },
];

const otherProjects: Project[] = [
  {
    title: "NoteSwap", year: "2024", focus: "STUDENT NOTES MARKETPLACE",
    description: "A structured sharing platform where students earn points by uploading notes and use those points to access other content.",
    outcome: "Connects uploading, discovery and downloads through a points-based exchange for academic material.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    liveUrl: "https://noteswap-sigma.vercel.app/", repoUrl: "https://github.com/AboubakarArisar/NoteSwap-Frontend",
  },
  {
    title: "Torah Learning Platform", year: "2025", focus: "ONLINE LEARNING",
    description: "A full-stack learning platform with video calling and real-time messaging.",
    outcome: "Uses WebRTC for video calls and Socket.io for real-time messaging.",
    stack: ["React", "Node.js", "MongoDB", "WebRTC", "Socket.io"],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-number metadata"><span>{String(index + 1).padStart(2, "0")} / {project.focus}</span><span>{project.year}</span></div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description text-body">{project.description}</p>
      <div className="project-working">
        <p className="metadata">HOW IT WORKS</p>
        <p className="text-body">{project.outcome}</p>
      </div>
      <dl className="project-facts">
        <div><dt className="metadata">ROLE</dt><dd>{project.role ?? "Full-stack development"}</dd></div>
        <div><dt className="metadata">TECH STACK</dt><dd className="project-stack">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</dd></div>
      </dl>
      <div className="project-actions">
        {project.liveUrl
          ? <a className="project-button" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.liveLabel ?? "Visit live site"}: ${project.title}`}>{project.liveLabel ?? "Visit live site"} <span aria-hidden="true">↗</span></a>
          : <button className="project-button" type="button" disabled>Live link pending</button>}
        {project.repoUrl
          ? <a className="project-button project-button-secondary" href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Source code: ${project.title}`}>Source code <span aria-hidden="true">↗</span></a>
          : <button className="project-button project-button-secondary" type="button" disabled>{project.sourceStatus ?? "Source link pending"}</button>}
      </div>
    </article>
  );
}

export function SelectedWork({ page = false }: { page?: boolean }) {
  const Heading = page ? "h1" : "h2";
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <SectionLabel>02 / Selected work</SectionLabel>
      <div className="work-heading">
        <Heading id="work-title" className="section-title">things i've built.</Heading>
        {!page && <Link className="text-link" to="/projects">All work <span aria-hidden="true">↗</span></Link>}
      </div>
      <div className="project-grid">
        {featuredProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
    </section>
  );
}

export default function Projects() {
  useEffect(() => { document.title = "Abou Bakar Arisar — Work"; }, []);
  return (
    <div className="wrap page">
      <SelectedWork page />
      <section className="section" aria-labelledby="other-work">
        <SectionLabel>More from the workbench</SectionLabel>
        <h2 id="other-work" className="section-title">other things i've made.</h2>
        <div className="project-grid other-projects">
          {otherProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
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
