import { useEffect } from "react";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

export default function ExperiencePage() {
  useEffect(() => { document.title = "Experience | Abou Bakar"; }, []);
  return (
    <div className="page">
      <Experience page />
      <section className="section wrap" style={{ paddingTop: 0 }} aria-labelledby="education-title">
        <p className="meta" style={{ marginBottom: 20 }}>Education</p>
        <ol className="roles">
          <li className="role">
            <h3 id="education-title" className="role-company">Sukkur IBA University</h3>
            <dl className="role-specs grid">
              <div><dt className="meta">Degree</dt><dd>Computer Science</dd></div>
              <div><dt className="meta">Graduated</dt><dd>2026</dd></div>
              <div><dt className="meta">Location</dt><dd>Pakistan</dd></div>
            </dl>
          </li>
        </ol>
      </section>
      <Skills />
    </div>
  );
}
