import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className='fixed w-full top-0 z-50 bg-dark-800/50 backdrop-blur-sm border-b border-[#1E293B]'
    >
      <nav className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <Link
            to='/'
            className='text-2xl font-bold font-mono text-white hover:text-[#60A5FA] transition-colors'
          >
            <span className='text-[#60A5FA]'>&lt;</span>
            Abou Bakar
            <span className='text-[#60A5FA]'>/&gt;</span>
          </Link>
          <div className='flex items-center space-x-8'>
            <Link
              to='/'
              className='text-white hover:text-[#60A5FA] transition-colors cursor-pointer'
            >
              Home
            </Link>
            <Link
              to='/projects'
              className='text-white hover:text-[#60A5FA] transition-colors cursor-pointer'
            >
              Projects
            </Link>
            <Link
              to='/about'
              className='text-white hover:text-[#60A5FA] transition-colors cursor-pointer'
            >
              About
            </Link>
            <Link
              to='/contact'
              className='text-white hover:text-[#60A5FA] transition-colors cursor-pointer'
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
