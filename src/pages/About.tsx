import React, { useEffect } from "react";
import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa";
import Reveal from "../components/ui/Reveal";
import SectionLabel from "../components/ui/SectionLabel";
import Magnetic from "../components/ui/Magnetic";

const principles = [
  {
    title: "Ship, then refine",
    text: "Get a usable product in front of real users fast, then iterate with feedback instead of guessing in isolation.",
  },
  {
    title: "Own the whole stack",
    text: "Frontend, backend, database and deployment in one workflow — fewer handoffs, fewer things lost in translation.",
  },
  {
    title: "Clear over clever",
    text: "Readable code and honest communication with founders and non-technical clients beat impressive-but-fragile solutions.",
  },
  {
    title: "Automate the boring",
    text: "Use AI agents and automation where they genuinely save time — not as a buzzword, but as leverage for small teams.",
  },
];

const skills = [
  { name: "Frontend — React / Next.js / Tailwind", level: 92 },
  { name: "Backend — Node / Express / APIs", level: 90 },
  { name: "Databases — MongoDB / PostgreSQL", level: 85 },
  { name: "API Design & Integration", level: 90 },
  { name: "Deployment & DevOps", level: 90 },
];

const About: React.FC = () => {
  useEffect(() => {
    document.title = "Aboubakar — About";
  }, []);

  return (
    <div className='relative px-5 pb-20 pt-28 text-white sm:px-6 sm:pt-36 md:pt-44'>
      <div className='mx-auto max-w-6xl'>
        <Reveal className='max-w-3xl'>
          <SectionLabel>About me</SectionLabel>
          <h1 className='mt-5 text-4xl font-bold tracking-tight md:text-6xl'>
            <span className='text-gradient'>Engineer focused on</span>{" "}
            <span className='text-accent'>execution, not just aesthetics.</span>
          </h1>
        </Reveal>

        <div className='mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]'>
          {/* profile */}
          <Reveal>
            <div className='border-gradient relative overflow-hidden rounded-3xl glass-strong'>
              <div
                className='pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-50 blur-3xl'
                style={{ background: "rgba(244,241,234,0.18)" }}
              />
              <img
                src='/ab.jpeg'
                alt='Aboubakar'
                className='aspect-[4/5] w-full object-cover object-center'
              />
              <div className='flex flex-wrap gap-2 p-5'>
                <span className='rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300'>
                  ● Available for Opportunities
                </span>
                <span className='rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-paper'>
                  Sindh, Pakistan
                </span>
              </div>
            </div>
          </Reveal>

          {/* bio + skills */}
          <Reveal delay={0.1}>
            <div className='space-y-6 text-base leading-8 text-slate-300'>
              <p>
                I'm <span className='font-semibold text-white'>Aboubakar</span>,
                a full-stack engineer working with startups and small businesses
                that need web products shipped with speed and practicality. My
                strongest stack is{" "}
                <span className='text-accent'>
                  MongoDB, Express, React, Node.js and Next.js
                </span>
                .
              </p>
              <p>
                Over the last few years I've built product-style projects,
                learned deployment end-to-end, sharpened my UI craft, and moved
                deeper into AI agents and automation. The work I enjoy most is
                where there's a real business problem and a short path from idea
                to usable product.
              </p>
              <p>
                Whether you find me through a referral, LinkedIn or a cold email,
                I want one question answered: can this developer understand the
                product and ship it responsibly? That's the standard I optimize
                for.
              </p>
            </div>

            {/* skill bars */}
            <div className='mt-10 space-y-5'>
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className='mb-2 flex items-center justify-between text-sm'>
                    <span className='text-slate-200'>{skill.name}</span>
                    <span className='font-mono text-accent'>
                      {skill.level}%
                    </span>
                  </div>
                  <div className='h-2 overflow-hidden rounded-full bg-white/[0.06]'>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.1,
                        delay: i * 0.12,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className='h-full rounded-full bg-gradient-to-r from-[#f4f1ea] to-[#9b978e]'
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* principles */}
        <div className='mt-24'>
          <Reveal className='mb-12 max-w-2xl'>
            <SectionLabel>How I work</SectionLabel>
            <h2 className='mt-4 text-3xl font-bold tracking-tight md:text-4xl'>
              Principles I build by.
            </h2>
          </Reveal>
          <div className='grid gap-6 sm:grid-cols-2'>
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className='group h-full rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.035]'>
                  <div className='flex items-center gap-3'>
                    <span className='font-mono text-sm text-accent'>
                      0{i + 1}
                    </span>
                    <span className='h-px flex-1 bg-gradient-to-r from-white/30 to-transparent' />
                  </div>
                  <h3 className='mt-4 text-xl font-semibold text-white'>
                    {p.title}
                  </h3>
                  <p className='mt-2.5 text-sm leading-7 text-slate-400'>
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* hire CTA */}
        <Reveal className='mt-20'>
          <div className='flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.025] p-8 md:flex-row md:p-10'>
            <div>
              <h3 className='text-2xl font-semibold text-white'>
                Want to work together?
              </h3>
              <p className='mt-2 text-sm text-slate-400'>
                Open to freelance and startup product work.
              </p>
            </div>
            <div className='flex flex-wrap gap-3'>
              <a
                href='https://contra.com/abou_bakar_fyf4x3wq'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10'
              >
                <img src='/contra.jpeg' alt='Contra' className='h-5 w-5 rounded' />
                Hire on Contra
              </a>
              <Magnetic>
                <a
                  href='/contact'
                  className='btn-primary px-6 py-3 text-sm'
                >
                  Contact me
                  <FaArrowRight />
                </a>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
