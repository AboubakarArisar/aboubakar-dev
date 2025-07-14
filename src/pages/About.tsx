import React from "react";
import { motion } from "motion/react";

const About: React.FC = () => {
  return (
    <div className='min-h-screen bg-dark-900 text-white pt-24 flex items-center justify-center'>
      <div className='container mx-auto px-6 py-16 max-w-4xl flex flex-col md:flex-row items-center gap-12 bg-dark-800 rounded-xl shadow-lg'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className='flex-shrink-0 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-[#1F2937] bg-dark-700 shadow-lg'
        >
          <img
            src='/ab.jpeg'
            alt='Abou Bakar profile'
            className='w-full h-full object-cover object-center'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className='flex-1'
        >
          <h1 className='text-4xl font-bold font-mono text-[#94A3B8] mb-4'>
            About me
          </h1>
          <p className='text-lg text-white/90 mb-6 font-mono leading-relaxed'>
            Based in Sindh, Pakistan, I build web applications and digital
            products that focus on reliability and user experience. My main
            stack is{" "}
            <span className='text-[#34D399]'>
              MongoDB, Express, React, and Node.js
            </span>
            , and I enjoy working on AI agent integrations and automation tools.
            <br />
            <br />
            With over two years of hands-on experience, I am currently in my
            final year at Sukkur IBA University, where I continue to expand my
            skills in both software engineering and applied AI.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 items-center md:items-start'>
            <span className='px-6 py-2 rounded-full bg-[#1F2937] text-[#34D399] font-bold font-mono border border-[#34D399]/30 shadow-md text-base'>
              Available for Freelance
            </span>
            <span className='px-6 py-2 rounded-full bg-[#1F2937] text-[#60A5FA] font-bold font-mono border border-[#60A5FA]/30 shadow-md text-base'>
              Open to Collaborate
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
