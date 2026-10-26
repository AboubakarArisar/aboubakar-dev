import { lazy, Suspense, useEffect, useState } from "react";
import type { FormEvent } from "react";
import { site } from "../data/site";

const PopupModal = lazy(() => import("react-calendly").then(module => ({ default: module.PopupModal })));

export default function Contact() {
  const [isCalendlyOpen, setCalendlyOpen] = useState(false);
  const [formError, setFormError] = useState("");
  const darkMode = document.documentElement.dataset.theme === "dark";
  useEffect(() => { document.title = "Contact | Abou Bakar"; }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setFormError("Please add your name, email and a short project brief.");
      return;
    }
    setFormError("");
    const body = encodeURIComponent(`Visitor from portfolio\nName: ${name}\nEmail: ${email}\nCompany: ${company}\n\nProject details:\n${message}`);
    window.location.assign(`https://wa.me/${site.whatsapp}?text=${body}`);
  };

  return (
    <div className="page wrap">
      <section aria-labelledby="contact-title">
        <p className="meta" style={{ marginBottom: 24 }}>Contact</p>
        <h1 id="contact-title" className="contact-title">Have something <span className="accent">worth building?</span></h1>
        <a className="contact-email" href={`mailto:${site.email}`}>{site.email}</a>
        <div className="contact-links">
          <a className="link" href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a className="link" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a className="link" href={site.contra} target="_blank" rel="noopener noreferrer">Contra ↗</a>
          <a className="link" href={site.resume} target="_blank" rel="noopener noreferrer">Résumé ↗</a>
        </div>
      </section>
      <section className="contact-brief grid" aria-labelledby="brief-title">
        <div className="contact-brief-intro">
          <h2 id="brief-title" className="section-title">What are you working on?</h2>
          <p>Share what you're building, what's blocked and your timeline. This form opens WhatsApp with your brief ready to review.</p>
          <button className="link" type="button" onClick={() => setCalendlyOpen(true)}>Prefer a short call? <span aria-hidden="true">↗</span></button>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name<input name="name" autoComplete="name" required maxLength={120} placeholder="Your name" /></label>
          <div className="form-pair">
            <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" /></label>
            <label>Company or product<input name="company" autoComplete="organization" maxLength={160} placeholder="Optional" /></label>
          </div>
          <label>Project brief<textarea name="message" rows={5} required maxLength={3000} placeholder="What are you building, and where can I help?" /></label>
          {formError && <p role="alert" className="form-error">{formError}</p>}
          <button className="button" type="submit">Continue in WhatsApp <span aria-hidden="true">↗</span></button>
        </form>
      </section>
      {isCalendlyOpen && <Suspense fallback={<p role="status">Loading scheduling…</p>}>
        <PopupModal url={site.calendly} onModalClose={() => setCalendlyOpen(false)} open rootElement={document.getElementById("root") ?? document.body} pageSettings={{ backgroundColor: darkMode ? "0d0b0a" : "f2ede6", textColor: darkMode ? "efe8df" : "171311", primaryColor: darkMode ? "ff4d3d" : "b8241a" }} />
      </Suspense>}
    </div>
  );
}
