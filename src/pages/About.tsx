import { useEffect } from "react";
import SectionLabel from "../components/ui/SectionLabel";

const principles = [
  { title: "Ship, then refine", text: "Get a usable product in front of real users fast, then iterate with feedback instead of guessing in isolation." },
  { title: "Own the whole stack", text: "Frontend, backend, database and deployment in one workflow — fewer handoffs, fewer things lost in translation." },
  { title: "Clear over clever", text: "Readable code and honest communication with founders and non-technical clients beat impressive-but-fragile solutions." },
  { title: "Automate the boring", text: "Use AI agents and automation where they save time for small teams." },
];
const capabilities = [
  { title: "FRONTEND", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { title: "BACKEND", items: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB"] },
  { title: "SYSTEMS", items: ["REST & GraphQL APIs", "Authentication", "WebSockets", "Databases", "Deployment"] },
  { title: "TOOLS", items: ["Git", "Docker", "Nginx", "Vercel", "Prisma", "Redis"] },
];

export function AboutIntro({ page = false }: { page?: boolean }) {
  const Heading = page ? "h1" : "h2";
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <SectionLabel>01 / About</SectionLabel>
      <div className="about-grid">
        <Heading id="about-title" className="about-statement">i like building things<br />people actually use.</Heading>
        <div className="about-copy text-body">
          <p>I'm Aboubakar, a full-stack engineer working with startups and small businesses that need web products shipped with speed and practicality.</p>
          <p>My strongest stack is MongoDB, Express, React, Node.js and Next.js. I care about the whole product: how it feels, how it works, and what it takes to get it live.</p>
        </div>
      </div>
      <dl className="about-facts">
        <div><dt className="metadata">LOCATION</dt><dd>Sindh, Pakistan</dd></div>
        <div><dt className="metadata">FOCUS</dt><dd>Full-stack / Product Engineering</dd></div>
        <div><dt className="metadata">CURRENTLY</dt><dd>Building + looking for opportunities</dd></div>
      </dl>
    </section>
  );
}

export function Capabilities() {
  return (
    <section id="capabilities" className="section" aria-labelledby="capabilities-title">
      <SectionLabel>04 / Capabilities</SectionLabel>
      <h2 id="capabilities-title" className="section-title">from the browser<br />to the backend.</h2>
      <div className="capabilities-grid">
        {capabilities.map((group, i) => (
          <div key={group.title} className="capability">
            <span className="metadata">0{i + 1}</span>
            <h3>{group.title}</h3>
            <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function About() {
  useEffect(() => { document.title = "Aboubakar Isar — About"; }, []);
  return (
    <div className="wrap page">
      <AboutIntro page />
      <div className="about-detail">
        <img className="portrait" src="/ab.webp" alt="Aboubakar Isar" width="680" height="850" loading="lazy" decoding="async" />
        <div>
          <SectionLabel>Stuff I care about</SectionLabel>
          <div className="principles">
            {principles.map((p, i) => <article key={p.title}><span className="metadata">0{i + 1}</span><h3>{p.title}</h3><p className="text-body">{p.text}</p></article>)}
          </div>
          <div className="link-row" style={{ marginTop: 32 }}>
            <a className="text-link" href="https://contra.com/abou_bakar_fyf4x3wq" target="_blank" rel="noopener noreferrer">Hire on Contra <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="mailto:aboubakar.dev@gmail.com">Say hello <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <Capabilities />
    </div>
  );
}
