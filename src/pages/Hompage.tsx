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
              Full Stack Developer & AI/ML Enthusiast
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='flex justify-center gap-6'
            >
              <a
                href='#projects'
                className='px-8 py-3 bg-[#1F2937] text-white font-bold hover:bg-[#374151] font-mono border border-white/10 hover:border-white/20 rounded transition-all duration-300 hover:scale-105'
              >
                View Projects
              </a>
              <a
                href='#contact'
                className='px-8 py-3 bg-[#111827] text-white font-bold hover:bg-[#1F2937] font-mono border border-white/10 hover:border-white/20 rounded transition-all duration-300 hover:scale-105'
              >
                Contact Me
              </a>
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
          <div className='grid md:grid-cols-2 gap-8'>
            {[1, 2].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className='bg-dark-800 rounded-lg border border-[#1E293B] hover:border-[#3B82F6]/30 group hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]'
              >
                <div className='h-48 bg-dark-700 rounded-t-lg'></div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-2 font-mono group-hover:text-[#60A5FA] transition-colors'>
                    Project Title
                  </h3>
                  <p className='text-white/70 mb-4'>
                    A brief description of the project and the technologies
                    used.
                  </p>
                  <div className='flex gap-4'>
                    <a
                      href='#'
                      className='px-4 py-2 bg-[#1F2937] text-white font-bold hover:bg-[#374151] font-mono border border-white/10 hover:border-white/20 rounded transition-all duration-300 hover:scale-105'
                    >
                      Demo →
                    </a>
                    <a
                      href='#'
                      className='px-4 py-2 bg-[#111827] text-white font-bold hover:bg-[#1F2937] font-mono border border-white/10 hover:border-white/20 rounded transition-all duration-300 hover:scale-105'
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
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
