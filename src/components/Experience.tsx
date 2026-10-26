import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import { roles, toDate, monthsBetween, period, duration } from "../data/experience";

/* Every role plotted on a shared year axis, oldest at the top. */
function Timeline() {
  const now = new Date();
  const firstYear = Math.min(...roles.map(r => toDate(r.start).getFullYear()));
  const axisStart = new Date(firstYear, 0);
  const years = Array.from({ length: now.getFullYear() - firstYear + 1 }, (_, i) => firstYear + i);
  const total = years.length * 12;
  const pos = (d: Date) => ((monthsBetween(axisStart, d) - 1) / total) * 100;

  return (
    <figure className="timeline" style={{ "--years": years.length, "--now": monthsBetween(axisStart, now) / total } as CSSProperties}>
      <figcaption className="sr-only">Timeline of roles from {firstYear} to now</figcaption>
      <div className="timeline-axis meta" aria-hidden="true">
        {years.map(y => <span key={y}>{y}</span>)}
      </div>
      <ol className="timeline-rows">
        {[...roles].reverse().map(r => {
          const start = toDate(r.start);
          const end = r.end ? toDate(r.end) : now;
          const style = { "--l": `${pos(start)}%`, "--w": `${(monthsBetween(start, end) / total) * 100}%` } as CSSProperties;
          return (
            <li key={r.id} className="timeline-row" style={style}>
              <span className="timeline-label">{r.company}<span className="sr-only">, {period(r)}</span></span>
              <span className="timeline-track"><span className={`timeline-bar${r.end ? "" : " is-now"}`} /></span>
            </li>
          );
        })}
      </ol>
      <span className="timeline-now meta" aria-hidden="true">Now</span>
    </figure>
  );
}

function RoleSheet({ role: r }: { role: (typeof roles)[number] }) {
  return (
    <li id={r.id} className="role">
      <h3 className="role-company">{r.company}{!r.end && <span className="now-tag meta">Now</span>}</h3>
      <dl className="role-specs grid">
        <div><dt className="meta">Role</dt><dd>{r.role}</dd></div>
        <div><dt className="meta">Period</dt><dd>{period(r)}<span className="muted"> · {duration(r)} · {r.mode}</span></dd></div>
        <div><dt className="meta">Stack</dt><dd>{r.stack.join(", ")}</dd></div>
      </dl>
      <p className="role-desc">{r.description}</p>
    </li>
  );
}

export default function Experience({ page = false }: { page?: boolean }) {
  const Heading = page ? "h1" : "h2";
  return (
    <section id="experience" className="section wrap" aria-labelledby="experience-title">
      <div className="section-head">
        <div>
          <p className="meta">(03) Experience</p>
          <Heading id="experience-title" className="section-title">Where I've worked.</Heading>
        </div>
        <a className="link" href={site.resume} target="_blank" rel="noopener noreferrer">Full résumé <span aria-hidden="true">↗</span></a>
      </div>
      <Timeline />
      {page ? (
        <ol className="roles">{roles.map(r => <RoleSheet key={r.id} role={r} />)}</ol>
      ) : (
        <>
          <ol className="roles-compact">
            {roles.map(r => (
              <li key={r.id}>
                <Link to={`/experience#${r.id}`} className="role-line grid">
                  <span className="role-line-company">{r.company}{!r.end && <span className="now-tag meta">Now</span>}</span>
                  <span className="role-line-role">{r.role}</span>
                  <span className="role-line-when meta">{period(r)}</span>
                </Link>
              </li>
            ))}
          </ol>
          <p className="all-work"><Link className="link" to="/experience">What I did at each <span aria-hidden="true">→</span></Link></p>
        </>
      )}
    </section>
  );
}
