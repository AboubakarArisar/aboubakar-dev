import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LocalTime } from "./Portrait";
import { site } from "../data/site";

export default function Footer() {
  const { pathname } = useLocation();
  const [grid, setGrid] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.grid = grid ? "on" : "off";
  }, [grid]);

  // "G" toggles the layout grid, unless the visitor is typing.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== "g" || event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.target instanceof HTMLElement && event.target.closest("input, textarea, [contenteditable]")) return;
      setGrid(on => !on);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <footer className="site-footer">
      <div className="grid-overlay" aria-hidden="true">
        <div className="wrap grid">{Array.from({ length: 12 }, (_, i) => <span key={i} />)}</div>
      </div>
      <div className="wrap">
        {pathname !== "/contact" && (
          <div className="footer-cta">
            <p className="meta">(05) Contact</p>
            <h2 className="footer-title">Have something worth building?</h2>
            <a className="contact-email" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        )}
        <div className="footer-grid grid">
          <div className="footer-links">
            <a className="link" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="link" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="link" href={site.contra} target="_blank" rel="noopener noreferrer">Contra</a>
            <a className="link" href={site.resume} target="_blank" rel="noopener noreferrer">Résumé</a>
            <Link className="link" to="/contact">Contact</Link>
          </div>
          <p className="footer-closing">Designed and built with <svg className="heart-sticker" viewBox="-2.5 -1 31 26" role="img" aria-label="love"><path d="M13 21.5 3.6 12.6a5.6 5.6 0 0 1 7.9-7.9L13 6.2l1.5-1.5a5.6 5.6 0 0 1 7.9 7.9Z" /></svg> in Pakistan.</p>
          <div className="footer-tools meta">
            <button type="button" aria-pressed={grid} onClick={() => setGrid(!grid)} title="Shortcut: G">{grid ? "Hide grid" : "Show grid"}</button>
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}>Back to top ↑</button>
          </div>
          <div className="footer-legal meta">
            <span>© {new Date().getFullYear()} {site.name}</span>
            <LocalTime />
          </div>
        </div>
      </div>
    </footer>
  );
}
