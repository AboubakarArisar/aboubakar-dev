import React from "react";
import { motion } from "motion/react";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='border-t border-[#1E293B] bg-dark-800/50 py-8'
    >
      <div className='container mx-auto px-6'>
        <div className='flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0'>
          <div className='text-center text-sm text-white/80 md:text-left'>
            © {new Date().getFullYear()} <span className='text-[#fb923c]'>Abou Bakar</span>. Built for startup leads, client trust, and project inquiries.
          </div>
          <div className='flex flex-col items-center gap-4 sm:flex-row sm:gap-6'>
            <a
              href='https://github.com/AboubakarArisar'
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer text-lg text-white transition-colors hover:text-[#fb923c] sm:text-base'
            >
              GitHub →
            </a>
            <a
              href='https://linkedin.com/in/aboubakarisar'
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer text-lg text-white transition-colors hover:text-[#fb923c] sm:text-base'
            >
              LinkedIn →
            </a>
            <a
              href='mailto:aboubakar.dev@gmail.com'
              className='cursor-pointer text-lg text-white transition-colors hover:text-[#fb923c] sm:text-base'
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
