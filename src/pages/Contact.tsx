import { lazy, Suspense, useEffect, useState } from "react";
import type { FormEvent } from "react";
import SectionLabel from "../components/ui/SectionLabel";

const PopupModal = lazy(() => import("react-calendly").then(module => ({ default: module.PopupModal })));
const resumeUrl = "https://drive.google.com/file/d/1LUnXffI_I_U9BTVVbfA7adIKPiQgQndJ/view";

export function ContactSection({ page = false }: { page?: boolean }) {
  const Heading = page ? "h1" : "h2";
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <SectionLabel>05 / Contact</SectionLabel>
      <div className="contact-main">
        <Heading id="contact-title" className="contact-title">have something<br />worth building?</Heading>
        <div className="contact-actions">
          <a className="text-link" href="mailto:aboubakar.dev@gmail.com">Let's talk <span aria-hidden="true">↗</span></a><br />
          <a className="contact-email" href="mailto:aboubakar.dev@gmail.com">aboubakar.dev@gmail.com</a>
        </div>
      </div>
      <div className="contact-links metadata">
        <a href="mailto:aboubakar.dev@gmail.com">EMAIL ↗</a>
        <a href="https://github.com/AboubakarArisar" target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
        <a href="https://linkedin.com/in/aboubakarisar" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">RÉSUMÉ ↗</a>
      </div>
    </section>
  );
}

export default function Contact() {
  const [isCalendlyOpen, setCalendlyOpen] = useState(false);
  const [formError, setFormError] = useState("");
  useEffect(() => { document.title = "Aboubakar Isar — Contact"; }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
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
    window.location.assign(`https://wa.me/923483624912?text=${body}`);
  };

  return (
    <div className="wrap page">
      <ContactSection page />
      <section className="contact-form-section" aria-labelledby="brief-title">
        <div>
          <SectionLabel>A little context helps</SectionLabel>
          <h2 id="brief-title" className="section-title">what are you working on?</h2>
          <p className="text-body project-fit">Share what you're building, what's blocked and your timeline. This form opens WhatsApp with your brief ready to review.</p>
          <button className="text-link" type="button" onClick={() => setCalendlyOpen(true)}>Prefer a short call? <span aria-hidden="true">↗</span></button>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name<input name="name" autoComplete="name" required maxLength={120} placeholder="Your name" /></label>
          <div className="form-pair">
            <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" /></label>
            <label>Company or product<input name="company" autoComplete="organization" maxLength={160} placeholder="Optional" /></label>
          </div>
          <label>Project brief<textarea name="message" rows={5} required maxLength={3000} placeholder="What are you building, and where can I help?" /></label>
          {formError && <p role="alert" className="form-error">{formError}</p>}
          <button className="btn-primary" type="submit">Continue in WhatsApp ↗</button>
        </form>
      </section>
      {isCalendlyOpen && <Suspense fallback={<p role="status">Loading scheduling…</p>}>
        <PopupModal url="https://calendly.com/aboubakar-dev/30min" onModalClose={() => setCalendlyOpen(false)} open rootElement={document.getElementById("root") ?? document.body} pageSettings={{ backgroundColor: "0d0d0d", textColor: "f2f0eb", primaryColor: "b8b2a4" }} />
      </Suspense>}
    </div>
  );
}
