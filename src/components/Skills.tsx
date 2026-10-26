import { projects } from "../data/projects";
import { roles } from "../data/experience";

// Only list what shows up in real projects or past roles.
const groups = [
  { group: "Frontend", items: ["TypeScript", "JavaScript", "React", "Next.js", "Preact", "Tailwind CSS", "Three.js"] },
  { group: "Backend", items: ["Node.js", "Express", "NestJS", "REST & GraphQL APIs", "Auth & JWT", "WebSockets", "Socket.io", "WebRTC"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase", "Sanity", "IndexedDB"] },
  { group: "Tools & infra", items: ["Git", "Docker", "Nginx", "Vercel", "Vite", "Vitest", "Playwright"] },
];

// Skill names that appear under different labels in project/role stacks.
const aliases: Record<string, string[]> = {
  "REST & GraphQL APIs": ["REST APIs"],
  "Auth & JWT": ["JWT", "Auth.js"],
  "Vercel": ["Vercel Blob"],
};

const work = [...projects.map(p => ({ name: p.title, stack: p.stack })), ...roles.map(r => ({ name: r.company, stack: r.stack }))];
const usedIn = (skill: string) => work.filter(w => [skill, ...(aliases[skill] ?? [])].some(s => w.stack.includes(s))).map(w => w.name);

export default function Skills() {
  return (
    <section id="skills" className="section wrap" aria-labelledby="skills-title">
      <div className="section-head">
        <div>
          <p className="meta">(04) Tools</p>
          <h2 id="skills-title" className="section-title">What I reach for.</h2>
        </div>
        <p className="meta skills-key">Number = projects and roles on this site that use it</p>
      </div>
      <div className="skills">
        {groups.map(({ group, items }, i) => (
          <section key={group} className="skill-col" aria-labelledby={`skills-${i}`}>
            <h3 id={`skills-${i}`} className="meta"><span className="accent">0{i + 1}</span> {group}</h3>
            <ul>
              {items.map(item => {
                const used = usedIn(item);
                return (
                  <li key={item} title={used.length ? `Used in ${used.join(", ")}` : undefined}>
                    <span>{item}</span>
                    {used.length > 0 && <span className="skill-count meta"><span className="sr-only">used in </span>{String(used.length).padStart(2, "0")}</span>}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
