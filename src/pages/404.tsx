import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Aboubakar — 404";
  }, []);

  return (
    <div className='relative flex min-h-screen flex-col items-center justify-center px-6 text-center'>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className='flex max-w-lg flex-col items-center'
      >
        <h1 className='select-none text-[7rem] font-bold leading-none text-gradient md:text-[11rem]'>
          404
        </h1>
        <p className='font-mono text-sm text-[#b8b2a4]'>
          route not found
        </p>
        <h2 className='mt-5 text-2xl font-semibold text-white md:text-3xl'>
          This page took a wrong turn.
        </h2>
        <p className='mt-3 text-sm leading-7 text-slate-400'>
          The link may be broken or the page may have moved. Let's get you back
          to safe ground.
        </p>
        <Link
          to='/'
          className='btn-primary group mt-8 px-7 py-3.5 text-sm'
        >
          <FaArrowLeft className='transition-transform duration-300 group-hover:-translate-x-1' />
          Back home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
