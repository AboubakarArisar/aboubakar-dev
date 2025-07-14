import React, { useEffect } from "react";
import { motion } from "motion/react";
import Lenis from "lenis";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaPython,
  FaGithub,
  FaRust,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGo,
  SiN8N,
  SiTensorflow,
} from "react-icons/si";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  useEffect(() => {
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

  const techStack = [
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-500",
      hoverColor: "group-hover:text-green-500",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "text-gray-400",
      hoverColor: "group-hover:text-gray-400",
    },
    {
      name: "React",
      icon: FaReact,
      color: "text-cyan-400",
      hoverColor: "group-hover:text-cyan-400",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "text-green-500",
      hoverColor: "group-hover:text-green-500",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-cyan-500",
      hoverColor: "group-hover:text-cyan-500",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-gray-200",
      hoverColor: "group-hover:text-gray-200",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-cyan-400",
      hoverColor: "group-hover:text-cyan-400",
    },
    {
      name: "Git",
      icon: FaGitAlt,
      color: "text-orange-500",
      hoverColor: "group-hover:text-orange-500",
    },
    {
      name: "Rust",
      icon: FaRust,
      color: "text-orange-600",
      hoverColor: "group-hover:text-orange-600",
    },
    {
      name: "Golang",
      icon: SiGo,
      color: "text-teal-400",
      hoverColor: "group-hover:text-teal-400",
    },
    {
      name: "n8n",
      icon: SiN8N,
      color: "text-purple-500",
      hoverColor: "group-hover:text-purple-500",
    },
    {
      name: "Java",
      icon: FaJava,
      color: "text-red-500",
      hoverColor: "group-hover:text-red-500",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      color: "text-gray-200",
      hoverColor: "group-hover:text-gray-200",
    },
    {
      name: "Python",
      icon: FaPython,
      color: "text-yellow-500",
      hoverColor: "group-hover:text-yellow-500",
    },
    {
      name: "TensorFlow",
      icon: SiTensorflow,
      color: "text-orange-500",
      hoverColor: "group-hover:text-orange-500",
    },
  ];

  return (
    <div className='min-h-screen bg-dark-900 text-white'>
      <div className='pt-24'>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='container mx-auto px-6 py-20'
        >
          <div className='max-w-4xl mx-auto text-center'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className='text-6xl md:text-8xl font-bold mb-6 font-mono'
            >
              <span className='text-[#64748B]'>&lt;</span>
              Hello World
              <span className='text-[#64748B]'>/&gt;</span>
              <br />
              <span className='text-white'>I'm</span>{" "}
              <span className='text-[#94A3B8]'>Abou Bakar</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='text-2xl md:text-3xl text-white/80 mb-8 font-mono'
            >
              MERN Stack Developer & AI Agents Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='flex justify-center gap-6'
            >
              <Link
                to='/projects'
                className='px-8 py-3 bg-[#1F2937] text-white font-bold hover:bg-[#374151] font-mono border border-white/10 hover:border-white/20 rounded transition-all duration-300 hover:scale-105'
              >
                View Projects
              </Link>
              <Link
                to='/contact'
                className='px-8 py-3 bg-[#111827] text-white font-bold hover:bg-[#1F2937] font-mono border border-white/10 hover:border-white/20 rounded transition-all duration-300 hover:scale-105'
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='container mx-auto px-6 py-20 bg-dark-800'
        >
          <h2 className='text-3xl font-bold text-center mb-12 font-mono text-[#94A3B8]'>
            Tech Stack
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-8'>
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className='flex flex-col items-center gap-4 group'
              >
                <div className='w-24 h-24 rounded-full bg-dark-700 border-2 border-dark-600 flex items-center justify-center group-hover:border-current transition-colors'>
                  <tech.icon
                    className={`w-12 h-12 ${tech.color} ${tech.hoverColor} transition-colors`}
                  />
                </div>
                <p
                  className={`text-center font-mono text-gray-400 ${tech.hoverColor} transition-colors`}
                >
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id='projects'
          className='container mx-auto px-6 py-20'
        >
          <h2 className='text-3xl font-bold text-center mb-12 font-mono text-[#94A3B8]'>
            Featured Projects
          </h2>
          <div className='grid md:grid-cols-2 gap-8 max-w-7xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className='relative bg-dark-800/50 backdrop-blur-sm rounded-xl overflow-hidden group'
            >
              <div className='aspect-video w-full relative'>
                <img
                  src='/droplr.jpeg'
                  alt='Droplr Project Screenshot'
                  className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700'
                />

                <div className='hidden md:block absolute inset-0 bg-[#0f172a]/90 backdrop-blur-[2px] flex flex-col justify-between p-6 h-full min-h-full group-hover:translate-y-3 translate-y-full transition-transform duration-500'>
                  <div>
                    <p className='text-gray-200 text-lg leading-relaxed mb-6'>
                      A location-based file sharing web application that allows
                      users to share files within a 200m radius. Files
                      automatically expire after 20 minutes for enhanced
                      privacy. Built with MERN stack and styled with Tailwind
                      CSS.
                    </p>
                    <div className='flex gap-2 flex-wrap bg-dark-700/60 rounded-lg p-2 border border-[#34D399]/30'>
                      <span className='px-3 py-1 bg-[#222c2b] border border-[#34D399] rounded-full text-sm text-[#34D399] font-semibold tracking-wide'>
                        MongoDB
                      </span>
                      <span className='px-3 py-1 bg-[#23272b] border border-[#6366F1] rounded-full text-sm text-[#6366F1] font-semibold tracking-wide'>
                        Express.js
                      </span>
                      <span className='px-3 py-1 bg-[#1e293b] border border-[#06b6d4] rounded-full text-sm text-[#06b6d4] font-semibold tracking-wide'>
                        React
                      </span>
                      <span className='px-3 py-1 bg-[#222c2b] border border-[#34D399] rounded-full text-sm text-[#34D399] font-semibold tracking-wide'>
                        Node.js
                      </span>
                      <span className='px-3 py-1 bg-[#1e293b] border border-[#38bdf8] rounded-full text-sm text-[#38bdf8] font-semibold tracking-wide'>
                        Tailwind CSS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-6 w-full'>
                <h3 className='text-2xl font-bold font-mono text-white text-center mb-6'>
                  Droplr - Proximity File Sharing
                </h3>
                <div className='flex flex-col md:flex-row gap-4 justify-between w-full'>
                  <a
                    href='https://droplr-front.vercel.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-[#1F2937] text-white font-bold hover:bg-[#374151] font-mono border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 hover:scale-105'
                  >
                    Live Demo →
                  </a>
                  <a
                    href='http://github.com/AboubakarArisar/Droplr'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-[#111827] text-white font-bold hover:bg-[#1F2937] font-mono border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 hover:scale-105'
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className='relative bg-dark-800/50 backdrop-blur-sm rounded-xl overflow-hidden group'
            >
              <div className='aspect-video w-full relative'>
                <img
                  src='/noteswap.jpeg'
                  alt='NoteSwap Project Screenshot'
                  className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700'
                />
                <div className='hidden md:block absolute inset-0 bg-[#0f172a]/90 backdrop-blur-[2px] flex flex-col justify-between p-6 h-full min-h-full group-hover:translate-y-3 translate-y-full transition-transform duration-500'>
                  <div>
                    <p className='text-gray-200 text-lg leading-relaxed mb-6'>
                      A Scribd-inspired platform for university students to
                      share and exchange notes using a points system. Users earn
                      points by uploading notes and spend points to download.
                      Built with MERN stack and Tailwind CSS.
                    </p>
                    <div className='flex gap-2 flex-wrap bg-dark-700/60 rounded-lg p-2 border border-[#6366F1]/30'>
                      <span className='px-3 py-1 bg-[#222c2b] border border-[#34D399] rounded-full text-sm text-[#34D399] font-semibold tracking-wide'>
                        MongoDB
                      </span>
                      <span className='px-3 py-1 bg-[#23272b] border border-[#6366F1] rounded-full text-sm text-[#6366F1] font-semibold tracking-wide'>
                        Express.js
                      </span>
                      <span className='px-3 py-1 bg-[#1e293b] border border-[#06b6d4] rounded-full text-sm text-[#06b6d4] font-semibold tracking-wide'>
                        React
                      </span>
                      <span className='px-3 py-1 bg-[#222c2b] border border-[#34D399] rounded-full text-sm text-[#34D399] font-semibold tracking-wide'>
                        Node.js
                      </span>
                      <span className='px-3 py-1 bg-[#1e293b] border border-[#38bdf8] rounded-full text-sm text-[#38bdf8] font-semibold tracking-wide'>
                        Tailwind CSS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-6 w-full'>
                <h3 className='text-2xl font-bold font-mono text-white text-center mb-6'>
                  NoteSwap - University Notes Exchange
                </h3>
                <div className='flex flex-col md:flex-row gap-4 justify-between w-full'>
                  <a
                    href='https://noteswap-sigma.vercel.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-[#1F2937] text-white font-bold hover:bg-[#374151] font-mono border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 hover:scale-105'
                  >
                    Live Demo →
                  </a>
                  <a
                    href='https://github.com/AboubakarArisar/NoteSwap-Frontend'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 bg-[#111827] text-white font-bold hover:bg-[#1F2937] font-mono border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 hover:scale-105'
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id='contact'
          className='container mx-auto px-6 py-20 bg-dark-800'
        >
          <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-8 font-mono text-[#94A3B8]'>
              Let's Connect
            </h2>
            <p className='text-white/80 mb-8 font-mono'>
              Ready to bring your ideas to life? Let's create something amazing
              together.
            </p>
            <a
              href='mailto:your.email@example.com'
              className='inline-block px-8 py-3 bg-[#1F2937] text-white font-bold hover:bg-[#374151] font-mono border border-white/10 hover:border-white/20 rounded transition-all duration-300 hover:scale-105'
            >
              Get in Touch →
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Homepage;
