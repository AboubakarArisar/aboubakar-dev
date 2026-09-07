import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div><Link to="/">Aboubakar Isar</Link><p>Full-stack engineer</p></div>
          <div className="footer-location"><p>Pakistan</p><p>© {new Date().getFullYear()}</p></div>
        </div>
        <div className="footer-bottom">
          <div className="link-row">
            <a href="https://github.com/AboubakarArisar" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/aboubakarisar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:aboubakar.dev@gmail.com">Email</a>
          </div>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}>Back to top ↑</button>
        </div>
        <p className="partner">Partner: <a href="https://www.consulics.com" target="_blank" rel="noopener noreferrer">Consulics | IRS Authorized Form 2290 &amp; HVUT E-File Provider</a> — Consulics is an IRS Authorized Form 2290 and Form 8849 e-file provider helping truck owners, fleets, and tax professionals file HVUT taxes online.</p>
      </div>
    </footer>
  );
}
