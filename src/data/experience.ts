// Roles, newest first. Dates are "YYYY-MM"; leave `end` out for a current role.
export type Role = {
  id: string;
  company: string;
  role: string;
  start: string;
  end?: string;
  mode: "Remote" | "On-site";
  description: string;
  stack: string[];
};

export const roles: Role[] = [
  {
    id: "dordor", company: "Dordor Games", role: "Web Developer & Administrator", start: "2026-07", mode: "Remote",
    description: "Run and maintain dordor.games, a bilingual Arabic and English party game platform. Ship new features, fix issues and keep the site running smoothly for hosts and players.",
    stack: ["React", "Vite"],
  },
  {
    id: "zekrion", company: "Zekrion Technologies", role: "Backend Developer", start: "2025-08", end: "2025-09", mode: "On-site",
    description: "Developed Node.js and Express backend applications, designed APIs and optimized database interactions. Worked on a modular architecture split into routes, controllers, services and middleware, with JWT authentication and request validation.",
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
  },
  {
    id: "rusanov", company: "Mikhail Rusanov", role: "Full Stack Developer", start: "2024-06", end: "2025-05", mode: "Remote",
    description: "Built and maintained MERN applications for an individual entrepreneur, owning frontend and backend components. Implemented backend functionality and collaborated on new features and production fixes.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: "fastech", company: "Fastech Systems", role: "Web Developer", start: "2023-05", end: "2023-09", mode: "On-site",
    description: "Developed reusable React components, integrated REST APIs with the backend team and helped improve performance and resolve production issues.",
    stack: ["React", "REST APIs"],
  },
];

export const toDate = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return new Date(y, m - 1);
};

/** Inclusive month count, e.g. May–Sep = 5. */
export const monthsBetween = (a: Date, b: Date) => (b.getFullYear() - a.getFullYear()) * 12 + b.getMonth() - a.getMonth() + 1;

const mon = (d: Date) => d.toLocaleString("en-US", { month: "short" });

export function period({ start, end }: Role) {
  const s = toDate(start);
  if (!end) return `${mon(s)} ${s.getFullYear()} – Present`;
  const e = toDate(end);
  return s.getFullYear() === e.getFullYear()
    ? `${mon(s)} – ${mon(e)} ${e.getFullYear()}`
    : `${mon(s)} ${s.getFullYear()} – ${mon(e)} ${e.getFullYear()}`;
}

export function duration(role: Role) {
  const n = monthsBetween(toDate(role.start), role.end ? toDate(role.end) : new Date());
  const y = Math.floor(n / 12), m = n % 12;
  return [y && `${y} yr`, m && `${m} mo${m > 1 ? "s" : ""}`].filter(Boolean).join(" ");
}
