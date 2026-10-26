import { useEffect } from "react";
import { LocalTime, Portrait } from "../components/Portrait";
import { AboutIntro } from "./About";
import Skills from "../components/Skills";
import { SelectedWork } from "./Projects";
import Experience from "../components/Experience";
import { site } from "../data/site";

export default function Homepage() {
  useEffect(() => { document.title = "Abou Bakar | Portfolio"; }, []);

  return (
    <>
      <section className="hero wrap grid" aria-labelledby="hero-title">
        <div className="hero-text">
          <p className="meta hero-eyebrow">Abou Bakar Arisar — Full-stack software engineer</p>
          <h1 id="hero-title" className="hero-title">I build software people <span className="accent">actually use.</span></h1>
          <p className="hero-lede">
            Web apps, browser games and community products, designed and built end to end.
            Lately: <strong>a home for a builder community</strong>, <strong>a football game you play by drawing</strong>,
            and <strong>a typing arcade with eight games</strong>.
          </p>
          <div className="hero-actions">
            <a className="button" href="#work">See the work <span aria-hidden="true">↓</span></a>
            <a className="link" href={site.resume} target="_blank" rel="noopener noreferrer">Résumé <span aria-hidden="true">↗</span></a>
            <a className="link" href={`mailto:${site.email}`}>Email me</a>
          </div>
        </div>
        <figure className="hero-figure">
          <div className="hero-frame">
            <div className="hero-photo"><Portrait eager sizes="(max-width: 560px) 92vw, (max-width: 860px) 440px, 34vw" /></div>
          </div>
          <figcaption className="meta">
            <span>Pakistan</span>
            <LocalTime />
          </figcaption>
        </figure>
      </section>
      <SelectedWork />
      <AboutIntro />
      <Experience />
      <Skills />
    </>
  );
}
