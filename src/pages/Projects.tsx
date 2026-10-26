import { useEffect } from "react";
import { Link } from "react-router-dom";
import { featuredProjects, otherProjects } from "../data/projects";
import type { Project } from "../data/projects";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const external = { target: "_blank", rel: "noopener noreferrer" } as const;

function Cover({ project, sizes }: { project: Project; sizes: string }) {
  const { slug, title, cover, video } = project;
  const poster = cover ? `/work/${slug}-1600.webp` : undefined;
  if (video) {
    return <video src={video} poster={poster} muted loop playsInline autoPlay={!reduceMotion} preload="metadata" aria-label={cover?.alt ?? title} />;
  }
  if (cover) {
    return (
      <img
        src={`/work/${slug}-1600.webp`}
        srcSet={`/work/${slug}-800.webp 800w, /work/${slug}-1600.webp 1600w`}
        sizes={sizes}
        width={cover.width}
        height={cover.height}
        alt={cover.alt}
        loading="lazy"
        decoding="async"
      />
    );
  }
  return <div className="type-cover" aria-hidden="true"><span className="type-cover-title">{title}</span></div>;
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <>
      {project.liveUrl && <a className="link" href={project.liveUrl} {...external}>{project.liveLabel ?? "Visit site"} <span aria-hidden="true">↗</span><span className="sr-only"> (opens {project.title} in a new tab)</span></a>}
      {project.repoUrl && <a className="link" href={project.repoUrl} {...external}>Source <span aria-hidden="true">↗</span><span className="sr-only"> code for {project.title}</span></a>}
      {!project.repoUrl && project.sourceNote && <span className="meta">{project.sourceNote}</span>}
    </>
  );
}

function Feature({ project, index }: { project: Project; index: number }) {
  const { slug, title, category, year, summary, stack, caseStudy, role, liveUrl } = project;
  const sizes = index % 3 === 0 ? "(max-width: 1440px) 100vw, 1440px" : "(max-width: 860px) 100vw, 60vw";
  return (
    <article className="feature grid" aria-labelledby={`project-${slug}`}>
      {liveUrl
        ? <a className="feature-media" href={liveUrl} {...external} tabIndex={-1} aria-hidden="true" data-label={project.liveLabel ?? "Visit site"}><Cover project={project} sizes={sizes} /></a>
        : <div className="feature-media"><Cover project={project} sizes={sizes} /></div>}
      <div className="feature-head">
        <p className="meta">{String(index + 1).padStart(2, "0")} — {category}{year && ` · ${year}`}</p>
        <h3 id={`project-${slug}`} className="feature-title">{title}</h3>
      </div>
      <div className="feature-detail">
        <p className="feature-summary">{summary}</p>
        <p className="meta feature-stack">{stack.join("  ·  ")}</p>
        <div className="feature-links"><ProjectLinks project={project} /></div>
        {caseStudy && (
          <details className="case">
            <summary className="meta">How it's built</summary>
            <div className="case-body">
              {caseStudy.map(text => <p key={text}>{text}</p>)}
              {role && <p className="meta">Role — {role}</p>}
            </div>
          </details>
        )}
      </div>
    </article>
  );
}

function ProjectIndex({ detailed = false }: { detailed?: boolean }) {
  return (
    <ol className="index">
      {otherProjects.map(project => (
        <li key={project.slug} className="index-row grid">
          {project.cover && (
            <div className="index-thumb">
              <img src={`/work/${project.slug}-800.webp`} width={800} height={500} alt="" loading="lazy" decoding="async" />
            </div>
          )}
          <div className="index-main" style={project.cover ? undefined : { gridColumnStart: 1 }}>
            <h3 className="index-title">{project.title}</h3>
            <p className="meta">{project.category}{project.year && ` · ${project.year}`}</p>
          </div>
          <div className="index-summary">
            <p>{project.summary}</p>
            {detailed && project.caseStudy?.map(text => <p key={text}>{text}</p>)}
            {detailed && <p className="meta feature-stack">{project.stack.join("  ·  ")}</p>}
          </div>
          <div className="index-links"><ProjectLinks project={project} /></div>
        </li>
      ))}
    </ol>
  );
}

export function SelectedWork({ page = false }: { page?: boolean }) {
  const Heading = page ? "h1" : "h2";
  return (
    <section id="work" className="section wrap" aria-labelledby="work-title">
      <div className="section-head">
        <div>
          <p className="meta">(01) Selected work</p>
          <Heading id="work-title" className="section-title">Things I've built and shipped.</Heading>
        </div>
      </div>
      <div>
        {featuredProjects.map((project, index) => <Feature key={project.slug} project={project} index={index} />)}
      </div>
      <div className="index-head">
        <h2 className="meta">More work</h2>
        <span className="meta">{otherProjects.length} projects</span>
      </div>
      <ProjectIndex detailed={page} />
      {!page && <p className="all-work"><Link className="link" to="/projects">Every project, with details <span aria-hidden="true">→</span></Link></p>}
    </section>
  );
}

export default function Projects() {
  useEffect(() => { document.title = "Projects | Abou Bakar"; }, []);
  return (
    <div className="page">
      <SelectedWork page />
    </div>
  );
}
