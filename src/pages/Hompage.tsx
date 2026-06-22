import React, { useEffect } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import Lenis from "lenis";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaCode, FaServer, FaRobot } from "react-icons/fa6";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiGraphql,
  SiSocketdotio,
  SiApachekafka,
  SiRabbitmq,
  SiFirebase,
  SiJsonwebtokens,
  SiDocker,
  SiNginx,
  SiPython,
  SiGit,
  SiVercel,
} from "react-icons/si";
import { Link } from "react-router-dom";
import Reveal from "../components/ui/Reveal";
import Magnetic from "../components/ui/Magnetic";
import SectionLabel from "../components/ui/SectionLabel";
import CountUp from "../components/ui/CountUp";
import Typewriter from "../components/ui/Typewriter";

const stats = [
  { to: 15, suffix: "+", label: "Products shipped" },
  { to: 3, suffix: "+", label: "Years building" },
  { to: 100, suffix: "%", label: "Full-stack ownership" },
  { to: 24, suffix: "h", label: "Avg. reply time" },
];

const frontendStack = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiVercel, name: "Vercel" },
  { icon: SiGit, name: "Git" },
];

const backendStack = [
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiNestjs, name: "NestJS" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiPrisma, name: "Prisma" },
  { icon: SiRedis, name: "Redis" },
  { icon: SiGraphql, name: "GraphQL" },
  { icon: SiSocketdotio, name: "WebSockets" },
  { icon: SiApachekafka, name: "Kafka" },
  { icon: SiRabbitmq, name: "RabbitMQ" },
  { icon: SiFirebase, name: "Pub/Sub" },
  { icon: SiJsonwebtokens, name: "JWT" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiNginx, name: "Nginx" },
  { icon: SiPython, name: "Python" },
];

const services = [
  {
    icon: FaCode,
    title: "Frontend & MVPs",
    text: "Landing pages, dashboards, SaaS products and client portals built with React, Next.js and Tailwind — pixel-precise and fast.",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    icon: FaServer,
    title: "Backend & APIs",
    text: "REST & GraphQL APIs, auth, database design, file handling and integrations engineered to stay stable as usage scales.",
    tags: ["Node", "MongoDB", "Postgres"],
  },
  {
    icon: FaRobot,
    title: "AI & Automation",
    text: "Agent workflows, process automation and productivity tooling that get more output from the same team — without overengineering.",
    tags: ["Agents", "Automation", "LLMs"],
  },
];

const caseStudies = [
  {
    title: "Droplr",
    category: "Location-based file sharing",
    summary:
      "Privacy-focused web app for sharing files with nearby users inside a limited radius, with automatic expiry and a clean mobile-first UI.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    liveUrl: "https://droplr-front.vercel.app/",
    repoUrl: "http://github.com/AboubakarArisar/Droplr",
    image: "/droplr.jpeg",
  },
  {
    title: "NoteSwap",
    category: "Student notes marketplace",
    summary:
      "A points-based notes exchange where students upload, discover and download academic material — marketplace logic and full-stack execution.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    liveUrl: "https://noteswap-sigma.vercel.app/",
    repoUrl: "https://github.com/AboubakarArisar/NoteSwap-Frontend",
    image: "/noteswap.jpeg",
  },
];

const headlineContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const headlineWord: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const headline = "I build web products from interface to infrastructure.";
const emphasis = ["interface", "infrastructure."];

const Homepage: React.FC = () => {
  useEffect(() => {
    document.title = "Aboubakar — Full-Stack Engineer";

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className='relative text-white'>
      {/* ============ HERO ============ */}
      <section className='relative mx-auto max-w-6xl px-6 pb-16 pt-36 md:pt-44'>
        <div className='grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]'>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm text-paper'
            >
              <span className='relative flex h-2 w-2'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
                <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-400' />
              </span>
              Available for freelance &amp; MVP builds
            </motion.div>

            <motion.h1
              variants={headlineContainer}
              initial='hidden'
              animate='show'
              className='mt-6 max-w-2xl text-[2.6rem] font-bold leading-[1.05] tracking-tight text-[#f4f1ea] md:text-6xl'
            >
              {headline.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={headlineWord}
                  className={`mr-[0.25em] inline-block ${
                    emphasis.includes(word)
                      ? "border-b-2 border-[#e8e2d2]/45 pb-1"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className='mt-6 max-w-xl text-lg leading-8 text-slate-300'
            >
              I'm <span className='font-semibold text-white'>Aboubakar</span> — a
              full-stack engineer crafting sleek frontends and dependable
              backends with MERN, Next.js and practical AI automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className='mt-9 flex flex-col gap-4 sm:flex-row sm:items-center'
            >
              <Magnetic>
                <Link to='/contact' className='btn-primary group px-7 py-4 text-base'>
                  Start a project
                  <FaArrowRight className='transition-transform duration-300 group-hover:translate-x-1' />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link to='/projects' className='btn-ghost px-7 py-4 text-[#f4f1ea]'>
                  View work
                </Link>
              </Magnetic>

              <div className='flex items-center gap-2 sm:ml-2'>
                <a
                  href='https://github.com/AboubakarArisar'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='GitHub'
                  className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white'
                >
                  <FaGithub />
                </a>
                <a
                  href='https://linkedin.com/in/aboubakarisar'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                  className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white'
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          </div>

          {/* terminal / system card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className='border-gradient glass-strong relative overflow-hidden rounded-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]'
          >
            <div className='flex items-center gap-2 border-b border-white/10 px-4 py-3'>
              <span className='h-3 w-3 rounded-full bg-white/15' />
              <span className='h-3 w-3 rounded-full bg-white/15' />
              <span className='h-3 w-3 rounded-full bg-white/15' />
              <span className='ml-3 font-mono text-xs text-slate-500'>
                api/server.ts
              </span>
            </div>
            <div className='space-y-1.5 p-5 font-mono text-[13px] leading-6'>
              <p className='text-slate-400'>
                <span className='text-white'>import</span> express{" "}
                <span className='text-white'>from</span>{" "}
                <span className='text-[#cfc9bb]'>"express"</span>;
              </p>
              <p className='text-slate-400'>
                <span className='text-white'>const</span> app ={" "}
                <span className='text-slate-200'>express</span>();
              </p>
              <p className='text-slate-600'>// ship fast, stay reliable</p>
              <p className='text-slate-400'>
                app.<span className='text-slate-200'>get</span>(
                <span className='text-[#cfc9bb]'>"/status"</span>, (req, res)
                =&gt; {"{"}
              </p>
              <p className='pl-5 text-slate-400'>
                res.<span className='text-slate-200'>json</span>({"{"} ok:{" "}
                <span className='text-white'>true</span> {"}"});
              </p>
              <p className='text-slate-400'>{"});"}</p>
              <div className='mt-3 flex items-center gap-2 border-t border-white/10 pt-3 text-slate-400'>
                <span className='text-emerald-400/80'>➜</span>
                <Typewriter
                  className='text-slate-200'
                  lines={[
                    "deploying to production…",
                    "200 OK · 42ms response",
                    "building your MVP…",
                    "npm run ship",
                  ]}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* stats */}
        <Reveal
          delay={0.2}
          className='glass mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl md:grid-cols-4'
        >
          {stats.map((s) => (
            <div key={s.label} className='bg-white/[0.012] px-6 py-7 text-center'>
              <div className='text-gradient text-3xl font-bold md:text-4xl'>
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <p className='mt-1.5 text-xs uppercase tracking-wider text-slate-500'>
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ============ SKILLS MARQUEE ============ */}
      <section className='py-12'>
        <div className='mx-auto mb-8 max-w-6xl px-6'>
          <SectionLabel>The stack</SectionLabel>
        </div>
        <div className='pause-on-hover relative flex flex-col gap-4'>
          <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0a0b] to-transparent' />
          <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0a0b] to-transparent' />

          <Marquee items={frontendStack} />
          <Marquee items={backendStack} reverse />
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className='mx-auto max-w-6xl px-6 py-20'>
        <Reveal className='mb-12 max-w-2xl'>
          <SectionLabel>What I do</SectionLabel>
          <h2 className='mt-4 text-3xl font-bold tracking-tight md:text-5xl'>
            From the first pixel to the production server.
          </h2>
        </Reveal>

        <div className='grid gap-6 md:grid-cols-3'>
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal as='article' delay={i * 0.1} key={service.title}>
                <div className='group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.035]'>
                  <div className='icon-tile h-12 w-12 text-xl'>
                    <Icon />
                  </div>
                  <h3 className='mt-5 text-xl font-semibold text-white'>
                    {service.title}
                  </h3>
                  <p className='mt-3 text-sm leading-7 text-slate-400'>
                    {service.text}
                  </p>
                  <div className='mt-5 flex flex-wrap gap-2'>
                    {service.tags.map((t) => (
                      <span key={t} className='chip'>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ============ SELECTED WORK ============ */}
      <section className='mx-auto max-w-6xl px-6 py-20'>
        <Reveal className='mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between'>
          <div className='max-w-2xl'>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className='mt-4 text-3xl font-bold tracking-tight md:text-5xl'>
              Ideas taken from brief to live product.
            </h2>
          </div>
          <Link
            to='/projects'
            className='group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white'
          >
            See all work
            <FaArrowRight className='transition-transform duration-300 group-hover:translate-x-1' />
          </Link>
        </Reveal>

        <div className='grid gap-8 lg:grid-cols-2'>
          {caseStudies.map((project, i) => (
            <Reveal as='article' delay={i * 0.1} key={project.title}>
              <div className='group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-white/25'>
                <div className='relative aspect-[16/10] overflow-hidden'>
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent' />
                </div>
                <div className='p-7'>
                  <p className='text-xs uppercase tracking-[0.2em] text-[#b8b2a4]'>
                    {project.category}
                  </p>
                  <h3 className='mt-2 text-2xl font-semibold text-white'>
                    {project.title}
                  </h3>
                  <p className='mt-3 text-sm leading-7 text-slate-400'>
                    {project.summary}
                  </p>
                  <div className='mt-5 flex flex-wrap gap-2'>
                    {project.stack.map((item) => (
                      <span key={item} className='chip'>
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className='mt-6 flex flex-wrap gap-3'>
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
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className='mx-auto max-w-6xl px-6 py-20'>
        <Reveal>
          <div className='border-gradient glass-strong relative overflow-hidden rounded-[2rem] p-10 text-center md:p-16'>
            <div
              className='pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full opacity-[0.12] blur-[100px]'
              style={{ background: "rgba(244,241,234,0.8)" }}
            />
            <SectionLabel className='justify-center'>Let's build</SectionLabel>
            <h2 className='mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl'>
              Have a product idea that needs{" "}
              <span className='border-b-2 border-[#e8e2d2]/45 pb-1'>
                shipping?
              </span>
            </h2>
            <p className='mx-auto mt-5 max-w-xl text-base leading-8 text-slate-300'>
              Send your brief, current blockers and timeline. If it's a fit,
              you'll get a concrete next step — not a generic "let's connect."
            </p>
            <div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
              <Magnetic>
                <Link to='/contact' className='btn-primary px-8 py-4 text-base'>
                  Start a conversation
                  <FaArrowRight />
                </Link>
              </Magnetic>
              <a
                href='mailto:aboubakar.dev@gmail.com'
                className='btn-ghost px-8 py-4 text-[#f4f1ea]'
              >
                aboubakar.dev@gmail.com
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

/* horizontally scrolling row of tech, duplicated for a seamless loop */
const Marquee: React.FC<{
  items: { icon: React.ComponentType<{ className?: string }>; name: string }[];
  reverse?: boolean;
}> = ({ items, reverse }) => {
  const row = [...items, ...items];
  return (
    <div className='flex w-max'>
      <div className={reverse ? "animate-marquee-rev flex" : "animate-marquee flex"}>
        {row.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className='mx-2 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-slate-400 transition-colors duration-300 hover:border-white/25 hover:text-white'
            >
              <Icon className='text-xl text-[#cfc9bb]' />
              <span className='whitespace-nowrap text-sm font-medium'>
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
