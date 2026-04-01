import React, { useEffect } from "react";
import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa";

const featuredProjects = [
  {
    title: "Droplr",
    label: "Privacy-focused file sharing",
    image: "/droplr.jpeg",
    description:
      "A location-based file sharing app designed for quick transfers between nearby users, with automatic expiry for cleaner privacy controls.",
    outcome:
      "Shows product thinking around real-time behavior, constrained access, and a focused mobile-first use case.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://droplr-front.vercel.app/",
    repoUrl: "http://github.com/AboubakarArisar/Droplr",
  },
  {
    title: "NoteSwap",
    label: "Notes marketplace for students",
    image: "/noteswap.jpeg",
    description:
      "A structured sharing platform where students earn points by uploading notes and use those points to access other content.",
    outcome:
      "Demonstrates marketplace logic, incentives, content organization, and full-stack product execution.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://noteswap-sigma.vercel.app/",
    repoUrl: "https://github.com/AboubakarArisar/NoteSwap-Frontend",
  },
];

const projectFit = [
  "Founder needs an MVP shipped fast",
  "Small business needs a custom dashboard or portal",
  "Team wants backend APIs and integrations cleaned up",
  "Product needs AI automation added without overengineering",
];

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = "Abou Bakar | Projects";
  }, []);

  return (
    <div className='min-h-screen bg-dark-900 px-6 pb-16 pt-28 text-white'>
      <div className='container mx-auto max-w-6xl'>
        <div className='max-w-3xl'>
          <p className='text-sm uppercase tracking-[0.3em] text-[#94a3b8]'>
            Case Studies
          </p>
          <h1 className='mt-4 text-4xl font-bold text-white md:text-6xl'>
            Projects that show how I build products, not just screens.
          </h1>
          <p className='mt-6 text-base leading-8 text-slate-300 md:text-lg'>
            If someone lands here from a DM or cold email, this page should make one
            thing clear: I can take an idea, design the workflow, build the product,
            and get it live.
          </p>
        </div>

        <div className='mt-12 grid gap-8'>
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className='overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f172a]/85'
            >
              <div className='grid gap-0 lg:grid-cols-[0.95fr_1.05fr]'>
                <div className='aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full'>
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='p-8 md:p-10'>
                  <p className='text-sm uppercase tracking-[0.25em] text-[#cbd5e1]'>
                    {project.label}
                  </p>
                  <h2 className='mt-4 text-3xl font-semibold text-white md:text-4xl'>
                    {project.title}
                  </h2>
                  <p className='mt-5 text-sm leading-7 text-slate-300 md:text-base'>
                    {project.description}
                  </p>
                  <div className='mt-6 rounded-2xl border border-[#233047] bg-[#111827] p-5'>
                    <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#cbd5e1]'>
                      Why it matters
                    </p>
                    <p className='mt-3 text-sm leading-7 text-slate-300 md:text-base'>
                      {project.outcome}
                    </p>
                  </div>
                  <div className='mt-6 flex flex-wrap gap-2'>
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className='rounded-full border border-[#334155] bg-[#020617] px-3 py-1 text-xs text-slate-200'
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className='mt-8 flex flex-wrap gap-4'>
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 rounded-xl bg-[#f97316] px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-[#fb923c]'
                    >
                      Open live project
                      <FaArrowRight />
                    </a>
                    <a
                      href={project.repoUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 rounded-xl border border-[#334155] bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1f2937]'
                    >
                      View source
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className='mt-14 grid gap-8 rounded-[2rem] border border-white/10 bg-[#111827]/80 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10'>
          <div>
            <p className='text-sm uppercase tracking-[0.3em] text-[#94a3b8]'>
              Best project fit
            </p>
            <h2 className='mt-4 text-3xl font-bold text-white'>
              The work I am most useful for
            </h2>
            <div className='mt-6 grid gap-4'>
              {projectFit.map((item) => (
                <div
                  key={item}
                  className='rounded-2xl border border-[#233047] bg-[#0f172a] p-4 text-sm leading-7 text-slate-200'
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className='rounded-[1.5rem] border border-[#334155] bg-[#020617] p-6'>
            <p className='text-sm uppercase tracking-[0.25em] text-[#cbd5e1]'>
              Hiring note
            </p>
            <h3 className='mt-4 text-2xl font-semibold text-white'>
              Need a developer who can own the build?
            </h3>
            <p className='mt-4 text-sm leading-7 text-slate-300'>
              Send your product idea, current stage, and deadline. I can help with
              MVP builds, feature development, backend work, and selected AI
              automation.
            </p>
            <div className='mt-6'>
              <a
                href='mailto:aboubakar.dev@gmail.com?subject=Project%20Scope%20Request'
                className='inline-flex items-center gap-2 rounded-xl bg-[#e2e8f0] px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-white'
              >
                Send project scope
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
