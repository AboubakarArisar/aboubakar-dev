import React, { useEffect } from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Reveal from "../components/ui/Reveal";
import SectionLabel from "../components/ui/SectionLabel";
import Magnetic from "../components/ui/Magnetic";

type Project = {
  title: string;
  label: string;
  year: string;
  image: string;
  description: string;
  outcome: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
};

const featuredProjects: Project[] = [
  {
    title: "Droplr",
    label: "Privacy-focused file sharing",
    year: "2024",
    image: "/droplr.jpeg",
    description:
      "A location-based file sharing app designed for quick transfers between nearby users, with automatic expiry for cleaner privacy controls.",
    outcome:
      "Product thinking around real-time behavior, constrained access, and a focused mobile-first use case.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    liveUrl: "https://droplr-front.vercel.app/",
    repoUrl: "http://github.com/AboubakarArisar/Droplr",
  },
  {
    title: "NoteSwap",
    label: "Notes marketplace for students",
    year: "2024",
    image: "/noteswap.jpeg",
    description:
      "A structured sharing platform where students earn points by uploading notes and use those points to access other content.",
    outcome:
      "Marketplace logic, incentives, content organization, and full-stack product execution.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
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
    document.title = "Aboubakar — Work";
  }, []);

  return (
    <div className='relative px-6 pb-20 pt-36 text-white md:pt-44'>
      <div className='mx-auto max-w-6xl'>
        <Reveal className='max-w-3xl'>
          <SectionLabel>Case studies</SectionLabel>
          <h1 className='mt-5 text-4xl font-bold tracking-tight md:text-6xl'>
            <span className='text-gradient'>Products, </span>
            <span className='text-accent'>not just screens.</span>
          </h1>
          <p className='mt-6 text-lg leading-8 text-slate-300'>
            Landing here from a DM or cold email? This page should make one thing
            clear: I can take an idea, design the workflow, build the product, and
            get it live.
          </p>
        </Reveal>

        <div className='mt-16 flex items-end justify-between border-b border-white/10 pb-4'>
          <SectionLabel>All projects</SectionLabel>
          <span className='font-mono text-sm text-[#b8b2a4]'>
            {String(featuredProjects.length).padStart(2, "0")} shipped
          </span>
        </div>

        <div className='mt-8 grid gap-6 md:grid-cols-2'>
          {featuredProjects.map((project, index) => (
            <Reveal as='article' key={project.title} delay={index * 0.08}>
              <div className='group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.035]'>
                {/* image */}
                <div className='relative aspect-[16/10] overflow-hidden'>
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/10 to-transparent' />
                  <span className='absolute left-4 top-4 rounded-full glass px-3 py-1 text-xs font-medium text-paper'>
                    {project.label}
                  </span>
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Open ${project.title} live`}
                    className='absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full glass text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-white/15'
                  >
                    <FaArrowUpRightFromSquare className='text-xs' />
                  </a>
                </div>

                {/* body */}
                <div className='flex flex-1 flex-col p-6'>
                  <div className='flex items-baseline justify-between'>
                    <h2 className='text-2xl font-semibold text-white'>
                      {project.title}
                    </h2>
                    <span className='font-mono text-xs text-[#807c74]'>
                      {project.year}
                    </span>
                  </div>

                  <p className='mt-3 text-sm leading-7 text-slate-400'>
                    {project.description}
                  </p>

                  <div className='mt-4 flex gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4'>
                    <span className='mt-0.5 font-mono text-xs text-accent'>
                      ↳
                    </span>
                    <p className='text-sm leading-6 text-slate-400'>
                      {project.outcome}
                    </p>
                  </div>

                  <div className='mt-5 flex flex-wrap gap-2'>
                    {project.stack.map((item) => (
                      <span key={item} className='chip'>
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* footer pinned to bottom */}
                  <div className='mt-auto flex flex-wrap gap-3 pt-6'>
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn-primary px-5 py-2.5 text-sm'
                    >
                      Live demo
                      <FaArrowRight className='text-xs' />
                    </a>
                    <a
                      href={project.repoUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn-ghost px-5 py-2.5 text-sm'
                    >
                      <FaGithub />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* fit + CTA */}
        <Reveal className='mt-20'>
          <div className='grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12'>
            <div>
              <SectionLabel>Best fit</SectionLabel>
              <h2 className='mt-4 text-3xl font-bold tracking-tight'>
                The work I'm most useful for
              </h2>
              <div className='mt-6 grid gap-3'>
                {projectFit.map((item) => (
                  <div
                    key={item}
                    className='flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm leading-7 text-slate-200'
                  >
                    <span className='flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-white/10 text-xs text-accent'>
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className='flex flex-col justify-center rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8'>
              <h3 className='text-2xl font-semibold text-white'>
                Need someone to own the build?
              </h3>
              <p className='mt-4 text-sm leading-7 text-slate-300'>
                Send your product idea, current stage and deadline. I help with
                MVP builds, feature development, backend work and selected AI
                automation.
              </p>
              <Magnetic className='mt-6 self-start'>
                <Link
                  to='/contact'
                  className='btn-primary px-6 py-3 text-sm'
                >
                  Send project scope
                  <FaArrowRight />
                </Link>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Projects;
