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
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-white/80 mb-4 md:mb-0 font-mono'>
            © {new Date().getFullYear()}{" "}
            <span className='text-[#60A5FA]'>Abou Bakar</span>. All rights
            reserved.
          </div>
          <div className='flex space-x-6'>
            <a
              href='https://github.com/AboubakarArisar'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-[#60A5FA] transition-colors font-mono cursor-pointer'
            >
              GitHub →
            </a>
            <a
              href='https://linkedin.com/in/aboubakarisar'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white hover:text-[#60A5FA] transition-colors font-mono cursor-pointer'
            >
              LinkedIn →
            </a>
            <a
              href='mailto:aboubakar.dev@gmail.com'
              className='text-white hover:text-[#60A5FA] transition-colors font-mono cursor-pointer'
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
