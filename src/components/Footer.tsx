import React from "react";
import { motion } from "motion/react";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='bg-dark-800/50 border-t border-[#1E293B] py-8'
    >
      <div className='container mx-auto px-6'>
        <div className='flex flex-col gap-6 md:flex-row md:gap-0 justify-between items-center'>
          <div className='text-white/80 font-mono text-center md:text-left'>
            © {new Date().getFullYear()}{" "}
            <span className='text-[#60A5FA]'>Abou Bakar</span>. All rights
            reserved.
          </div>
          <div className='flex flex-col gap-4 sm:flex-row sm:gap-6 items-center'>
            <a
              href='https://github.com/AboubakarArisar'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-[#60A5FA] transition-colors font-mono cursor-pointer text-lg sm:text-base'
            >
              GitHub →
            </a>
            <a
              href='https://linkedin.com/in/aboubakarisar'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-[#60A5FA] transition-colors font-mono cursor-pointer text-lg sm:text-base'
            >
              LinkedIn →
            </a>
            <a
              href='mailto:aboubakar.dev@gmail.com'
              className='text-white hover:text-[#60A5FA] transition-colors font-mono cursor-pointer text-lg sm:text-base'
            >
              Email →
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
