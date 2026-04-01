import React, { useEffect } from "react";
import { motion } from "motion/react";
import Lenis from "lenis";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const proofCards = [
  {
    title: "Real-time product builds",
    text: "MERN and Next.js apps for startups that need a fast MVP without cutting core product quality.",
  },
  {
    title: "Automation-ready workflows",
    text: "AI agents and backend automations for teams that want fewer repetitive tasks and cleaner operations.",
  },
  {
    title: "Deployment included",
    text: "From local development to production deployment, with practical decisions around speed, reliability, and maintainability.",
  },
];

const serviceCards = [
  {
    title: "MVP Development",
    text: "Landing pages, dashboards, SaaS products, internal tools, and client portals built with React, Next.js, and Node.",
  },
  {
    title: "Backend and APIs",
    text: "REST APIs, auth, database design, file uploads, and integrations that keep products stable as usage grows.",
  },
  {
    title: "AI and Automation",
    text: "Agent workflows, process automation, and productivity tooling when your business needs more output from the same team.",
  },
];

const caseStudies = [
  {
    title: "Droplr",
    category: "Location-based file sharing app",
    summary:
      "Built a privacy-focused web app for sharing files with nearby users inside a limited radius, with automatic expiry and a clean mobile-friendly UI.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://droplr-front.vercel.app/",
    repoUrl: "http://github.com/AboubakarArisar/Droplr",
    image: "/droplr.jpeg",
  },
  {
    title: "NoteSwap",
    category: "Student marketplace for notes",
    summary:
      "Created a notes exchange platform with a points-based system so users could upload, discover, and download academic material in a structured way.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://noteswap-sigma.vercel.app/",
    repoUrl: "https://github.com/AboubakarArisar/NoteSwap-Frontend",
    image: "/noteswap.jpeg",
  },
];

const outreachSteps = [
  "Founder or operator lands here from LinkedIn, email, or a referral.",
  "They immediately see what you build, the type of clients you help, and proof of execution.",
  "They can book a call or send a direct inquiry without hunting for the next step.",
];

const Homepage: React.FC = () => {
  useEffect(() => {
    document.title = "Abou Bakar | Web Apps for Startups";

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

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className='min-h-screen bg-dark-900 text-white'>
      <div className='relative z-10 pt-24'>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='container mx-auto px-6 py-16 md:py-24'
        >
          <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.25fr_0.85fr] lg:items-center'>
            <div>
              <div className='mb-6 inline-flex items-center rounded-full border border-[#334155] bg-[#0f172a]/80 px-4 py-2 text-sm font-medium text-[#cbd5e1]'>
                Available for freelance work, MVP builds, and backend development
              </div>
              <h1 className='max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl'>
                I build web apps for startups that need product work shipped fast.
              </h1>
              <p className='mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl'>
                MERN, Next.js, backend APIs, and practical AI automation for founders
                who want a developer that can take an idea from brief to production.
              </p>
              <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
                <Link
                  to='/contact'
                  className='inline-flex items-center justify-center gap-3 rounded-xl bg-[#f97316] px-7 py-4 text-base font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#fb923c]'
                >
                  Start a project
                  <FaArrowRight />
                </Link>
                <Link
                  to='/projects'
                  className='inline-flex items-center justify-center gap-3 rounded-xl border border-[#334155] bg-[#111827]/80 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#475569] hover:bg-[#1f2937]'
                >
                  View case studies
                </Link>
              </div>
              <div className='mt-8 flex flex-wrap gap-5 text-sm text-slate-300'>
                <a
                  href='mailto:aboubakar.dev@gmail.com'
                  className='inline-flex items-center gap-2 hover:text-white'
                >
                  <FaEnvelope />
                  aboubakar.dev@gmail.com
                </a>
                <a
                  href='https://linkedin.com/in/aboubakarisar'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 hover:text-white'
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
                <a
                  href='https://github.com/AboubakarArisar'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 hover:text-white'
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>

            <div className='rounded-[2rem] border border-white/10 bg-[#0f172a]/80 p-6 shadow-2xl shadow-black/20'>
              <div className='rounded-[1.5rem] border border-[#1e293b] bg-[#020617]/90 p-6'>
                <p className='text-sm uppercase tracking-[0.3em] text-[#94a3b8]'>
                  Best fit
                </p>
                <div className='mt-6 space-y-5 text-slate-200'>
                  <div className='rounded-2xl border border-[#1e293b] bg-[#111827] p-5'>
                    <h2 className='text-xl font-semibold text-white'>
                      Startups and small businesses
                    </h2>
                    <p className='mt-2 text-sm leading-7 text-slate-300'>
                      You need a product developer who can build fast, communicate
                      clearly, and own both frontend and backend work.
                    </p>
                  </div>
                  <div className='grid gap-4 sm:grid-cols-2'>
                    <div className='rounded-2xl border border-[#1e293b] bg-[#111827] p-5'>
                      <p className='text-3xl font-bold text-[#f97316]'>MERN</p>
                      <p className='mt-2 text-sm text-slate-300'>
                        Full-stack execution from UI to APIs and deployment.
                      </p>
                    </div>
                    <div className='rounded-2xl border border-[#1e293b] bg-[#111827] p-5'>
                      <p className='text-3xl font-bold text-[#f3f4f6]'>Next.js</p>
                      <p className='mt-2 text-sm text-slate-300'>
                        Fast marketing sites, product frontends, and SEO-ready pages.
                      </p>
                    </div>
                  </div>
                  <div className='rounded-2xl border border-[#334155] bg-[#111827] p-5'>
                    <p className='text-sm uppercase tracking-[0.25em] text-[#cbd5e1]'>
                      Response promise
                    </p>
                    <p className='mt-2 text-base leading-7 text-slate-200'>
                      If you send a serious project inquiry, I will reply with a
                      concrete next step instead of a generic "let's connect."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section className='container mx-auto px-6 py-8 md:py-12'>
          <div className='mx-auto grid max-w-6xl gap-6 md:grid-cols-3'>
            {proofCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className='rounded-3xl border border-white/10 bg-[#0f172a]/70 p-6'
              >
                <h2 className='text-xl font-semibold text-white'>{card.title}</h2>
                <p className='mt-3 text-sm leading-7 text-slate-300'>{card.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className='container mx-auto px-6 py-20'>
          <div className='mx-auto max-w-6xl'>
            <div className='mb-10 max-w-2xl'>
              <p className='text-sm uppercase tracking-[0.3em] text-[#94a3b8]'>
                Services
              </p>
              <h2 className='mt-4 text-3xl font-bold text-white md:text-5xl'>
                What I can help you ship
              </h2>
            </div>
            <div className='grid gap-6 md:grid-cols-3'>
              {serviceCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className='rounded-3xl border border-white/10 bg-[#111827]/75 p-7'
                >
                  <h3 className='text-2xl font-semibold text-white'>{card.title}</h3>
                  <p className='mt-4 text-sm leading-7 text-slate-300'>{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className='container mx-auto px-6 py-20'>
          <div className='mx-auto max-w-6xl'>
            <div className='mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
              <div className='max-w-2xl'>
                <p className='text-sm uppercase tracking-[0.3em] text-[#94a3b8]'>
                  Selected Work
                </p>
                <h2 className='mt-4 text-3xl font-bold text-white md:text-5xl'>
                  Proof that I can take an idea and turn it into a product
                </h2>
              </div>
              <Link
                to='/projects'
                className='inline-flex items-center gap-3 text-sm font-semibold text-[#fdba74] hover:text-[#fed7aa]'
              >
                See more work
                <FaArrowRight />
              </Link>
            </div>
            <div className='grid gap-8 lg:grid-cols-2'>
              {caseStudies.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className='overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f172a]/80'
                >
                  <div className='aspect-[16/10] overflow-hidden'>
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className='h-full w-full object-cover transition-transform duration-700 hover:scale-105'
                    />
                  </div>
                  <div className='p-7'>
                    <p className='text-sm uppercase tracking-[0.25em] text-[#cbd5e1]'>
                      {project.category}
                    </p>
                    <h3 className='mt-3 text-3xl font-semibold text-white'>
                      {project.title}
                    </h3>
                    <p className='mt-4 text-sm leading-7 text-slate-300'>
                      {project.summary}
                    </p>
                    <div className='mt-5 flex flex-wrap gap-2'>
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className='rounded-full border border-[#334155] bg-[#111827] px-3 py-1 text-xs text-slate-200'
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className='mt-6 flex flex-wrap gap-4'>
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 rounded-xl bg-[#f97316] px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-[#fb923c]'
                      >
                        Live demo
                        <FaArrowRight />
                      </a>
                      <a
                        href={project.repoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 rounded-xl border border-[#334155] bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1f2937]'
                      >
                        Source code
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className='container mx-auto px-6 py-20'>
          <div className='mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-white/10 bg-[#111827]/75 p-8 md:grid-cols-[1fr_0.85fr] md:p-10'>
            <div>
              <p className='text-sm uppercase tracking-[0.3em] text-[#94a3b8]'>
                For lead generation
              </p>
              <h2 className='mt-4 text-3xl font-bold text-white md:text-4xl'>
                This site now supports your cold outreach instead of fighting it.
              </h2>
              <div className='mt-6 space-y-4 text-sm leading-7 text-slate-300'>
                {outreachSteps.map((step) => (
                  <p key={step}>{step}</p>
                ))}
              </div>
            </div>
            <div className='rounded-[1.5rem] border border-[#334155] bg-[#020617] p-6'>
              <p className='text-sm uppercase tracking-[0.25em] text-[#cbd5e1]'>
                CTA block
              </p>
              <h3 className='mt-4 text-2xl font-semibold text-white'>
                Need a developer for your startup or client project?
              </h3>
              <p className='mt-4 text-sm leading-7 text-slate-300'>
                Send the project brief, current blockers, and target timeline. If
                the fit is right, I will reply with scope, next steps, or a call.
              </p>
              <div className='mt-6 flex flex-col gap-4'>
                <a
                  href='mailto:aboubakar.dev@gmail.com?subject=Project%20Inquiry&body=Hi%20Abou%2C%0A%0AHere%20is%20what%20I%27m%20building%3A%0A%0ATimeline%3A%0ABudget%3A%0A'
                  className='inline-flex items-center justify-center gap-3 rounded-xl bg-[#e2e8f0] px-6 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-white'
                >
                  Send project email
                </a>
                <Link
                  to='/contact'
                  className='inline-flex items-center justify-center gap-3 rounded-xl border border-[#334155] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#111827]'
                >
                  Open contact page
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
