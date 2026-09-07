import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AboutIntro, Capabilities } from "./About";
import { SelectedWork } from "./Projects";
import { ContactSection } from "./Contact";
import Experience from "../components/Experience";

export default function Homepage() {
  useEffect(() => { document.title = "Aboubakar Isar — Full-stack engineer"; }, []);

  return (
    <div className="wrap">
      <section className="hero" aria-labelledby="hero-title">
        <p className="metadata hero-kicker">ABOUBAKAR ISAR / FULL-STACK ENGINEER</p>
        <h1 id="hero-title" className="hero-title">
          <span className="hero-line hero-opening">I build web<span className="mobile-break" /> products </span>
          <span className="hero-line hero-middle">from<span className="mobile-break" /> interface to</span>
          <span className="hero-line">infrastructure.</span>
        </h1>
        <div className="hero-support">
          <p className="hero-description">Full-stack engineer building reliable web products — from thoughtful interfaces to backend systems.</p>
          <div className="hero-details">
            <span className="metadata">BASED IN PAKISTAN</span>
            <span className="metadata status">AVAILABLE FOR OPPORTUNITIES</span>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="link-row">
            <a className="text-link" href="#work">Explore my work <span aria-hidden="true">↗</span></a>
            <Link className="text-link" to="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
          </div>
          <a className="metadata scroll-link" href="#about">SCROLL ↓</a>
        </div>
      </section>
      <AboutIntro />
      <SelectedWork />
      <Experience />
      <Capabilities />
      <ContactSection />
    </div>
  );
}
