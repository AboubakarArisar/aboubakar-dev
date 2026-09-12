import SectionLabel from "./ui/SectionLabel";

const experience = [
  {
    company: "Developers Hub Corporation", role: "Backend Developer Intern", period: "Aug – Sep 2025",
    description: "Developed Node.js and Express backend applications, designed APIs and optimized database interactions. Worked on modular architecture and server-side performance.",
  },
  {
    company: "Mikhail Rusanov", role: "Full Stack Developer · Freelance", period: "Jun 2024 – May 2025",
    description: "Built and maintained MERN applications for an individual entrepreneur, owning frontend and backend components. Implemented backend functionality and collaborated on new features and production fixes.",
  },
  {
    company: "Fastech Systems", role: "Web Developer Intern", period: "May – Sep 2023",
    description: "Developed reusable React components, integrated REST APIs with the backend team and helped improve performance and resolve production issues.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <SectionLabel>03 / Experience</SectionLabel>
      <div className="experience-heading">
        <h2 id="experience-title" className="section-title">where i've contributed.</h2>
        <a className="text-link" href="https://drive.google.com/file/d/1LUnXffI_I_U9BTVVbfA7adIKPiQgQndJ/view" target="_blank" rel="noopener noreferrer">View résumé <span aria-hidden="true">↗</span></a>
      </div>
      <div className="experience-grid">
      {experience.map(job => (
        <article className="experience-card" key={job.company}>
          <div className="experience-card-header metadata"><span>{job.period}</span><span>REMOTE</span></div>
          <h3>{job.company}</h3>
          <p className="experience-role">{job.role}</p>
          <p className="experience-description">{job.description}</p>
        </article>
      ))}
      </div>
      <p className="metadata experience-location">ALL ROLES REMOTE / BASED IN PAKISTAN</p>
    </section>
  );
}
