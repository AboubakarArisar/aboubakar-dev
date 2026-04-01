import React, { useEffect } from "react";
import { motion } from "motion/react";

const strengths = [
  "Clear communication with founders and non-technical clients",
  "Frontend and backend ownership in one workflow",
  "Comfort with shipping MVPs quickly, then iterating",
  "Interest in AI agents and process automation where they make business sense",
];

const About: React.FC = () => {
  useEffect(() => {
    document.title = "Abou Bakar | About";
  }, []);

  return (
    <div className='min-h-screen bg-dark-900 px-6 pb-16 pt-28 text-white'>
      <div className='container mx-auto max-w-6xl'>
        <div className='grid gap-10 rounded-[2rem] border border-white/10 bg-[#0f172a]/80 p-8 shadow-2xl shadow-black/20 md:grid-cols-[0.8fr_1.2fr] md:p-10'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className='overflow-hidden rounded-[2rem] border border-[#1f2937] bg-[#111827]'
          >
            <img
              src='/ab.jpeg'
              alt='Abou Bakar profile'
              className='h-full w-full object-cover object-center'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className='text-sm uppercase tracking-[0.3em] text-[#94a3b8]'>
              About
            </p>
            <h1 className='mt-4 text-4xl font-bold text-white md:text-5xl'>
              Developer focused on startup execution, not just portfolio aesthetics.
            </h1>
            <div className='mt-6 space-y-5 text-base leading-8 text-slate-300'>
              <p>
                I am based in Sindh, Pakistan and work with startups and small
                businesses that need web products shipped with speed and
                practicality. My strongest stack is MongoDB, Express, React,
                Node.js, and Next.js.
              </p>
              <p>
                I have spent the last few years building product-style projects,
                learning deployment, refining UI work, and moving deeper into AI
                agents and automation. The work I enjoy most is where there is a
                real business problem and a short path from idea to usable product.
              </p>
              <p>
                If someone reaches out from LinkedIn, a cold email, or a referral,
                I want this page to answer the real question: can this developer
                understand the product and ship it responsibly? That is the standard
                I am optimizing for.
              </p>
            </div>

            <div className='mt-8 grid gap-4 sm:grid-cols-2'>
              {strengths.map((item) => (
                <div
                  key={item}
                  className='rounded-2xl border border-[#233047] bg-[#111827] p-4 text-sm leading-7 text-slate-200'
                >
                  {item}
                </div>
              ))}
            </div>

            <div className='mt-8 flex flex-wrap gap-4'>
              <span className='rounded-full border border-[#22c55e]/30 bg-[#052e16] px-5 py-2 text-sm font-semibold text-[#86efac]'>
                Available for freelance
              </span>
              <span className='rounded-full border border-[#38bdf8]/30 bg-[#082f49] px-5 py-2 text-sm font-semibold text-[#7dd3fc]'>
                Open to startup work
              </span>
            </div>

            <div className='mt-8'>
              <a
                href='https://contra.com/abou_bakar_fyf4x3wq'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-3 rounded-xl border border-[#2b3340] bg-[#18181b] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#232326]'
              >
                <img src='/contra.jpeg' alt='Contra' className='h-6 w-6' />
                Hire me on Contra
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
