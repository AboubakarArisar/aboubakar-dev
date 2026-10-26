import { useEffect } from "react";
import { Portrait } from "../components/Portrait";
import { site } from "../data/site";

const principles = [
  { title: "Ship, then refine", text: "Get a usable product in front of real users fast, then iterate with feedback instead of guessing in isolation." },
  { title: "Own the whole stack", text: "Frontend, backend, database and deployment in one workflow — fewer handoffs, fewer things lost in translation." },
  { title: "Clear over clever", text: "Readable code and honest communication with founders and non-technical clients beat impressive-but-fragile solutions." },
  { title: "Automate the boring", text: "Use AI agents and automation where they save time for small teams." },
];

export function AboutIntro({ page = false }: { page?: boolean }) {
  const Heading = page ? "h1" : "h2";
  return (
    <section id="about" className="section wrap" aria-labelledby="about-title">
      <p className="meta" style={{ marginBottom: 20 }}>(02) About</p>
      <div className="grid">
        <Heading id="about-title" className="about-statement">I'm Abou Bakar. I like owning the whole thing, from the first sketch to the server it runs on.</Heading>
        <div className="about-copy">
          <p>I graduated in <strong>Computer Science from Sukkur IBA University</strong> in 2026, and I've been shipping for the web since 2023. Most days that means TypeScript on both ends: interfaces, APIs, databases and the deploy pipeline.</p>
          <p>Some of my work is for teams and clients. A lot of it starts as something I wanted to exist: a community space for builders, a typing arcade with no ads, a football game you play by drawing.</p>
          <p>The part I care about most comes after launch: whether people come back, whether it's fast on an ordinary phone, and whether the next developer can read the code.</p>
        </div>
        <dl className="facts">
          <div><dt className="meta">Based in</dt><dd>Pakistan</dd></div>
          <div><dt className="meta">Education</dt><dd>Computer Science, Sukkur IBA University, 2026</dd></div>
          <div><dt className="meta">Currently</dt><dd>Building, and open to new opportunities</dd></div>
        </dl>
      </div>
    </section>
  );
}

export default function About() {
  useEffect(() => { document.title = "About | Abou Bakar"; }, []);
  return (
    <div className="page">
      <AboutIntro page />
      <section className="wrap grid" aria-labelledby="principles-title">
        <figure className="about-page-photo">
          <Portrait sizes="(max-width: 768px) 92vw, 30vw" />
          <figcaption className="meta">Abou Bakar Arisar</figcaption>
        </figure>
        <div className="principles">
          <h2 id="principles-title" className="meta" style={{ gridColumn: "1 / -1" }}>How I work</h2>
          {principles.map((p, i) => (
            <article key={p.title}>
              <span className="meta">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
          <div className="contact-links" style={{ gridColumn: "1 / -1", marginTop: 0 }}>
            <a className="link" href={site.contra} target="_blank" rel="noopener noreferrer">Hire on Contra <span aria-hidden="true">↗</span></a>
            <a className="link" href={`mailto:${site.email}`}>Say hello <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </div>
  );
}
