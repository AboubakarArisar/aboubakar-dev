import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Abou Bakar | 404";
  }, []);

  return (
    <div className='min-h-screen bg-dark-900 flex flex-col items-center justify-center p-4 pt-24'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='bg-dark-800/80 border border-[#1E293B] rounded-2xl shadow-xl p-10 flex flex-col items-center max-w-lg w-full '
      >
        <h1 className='text-7xl md:text-9xl font-extrabold font-mono text-[#64748B] mb-4 select-none'>
          404
        </h1>
        <p className='text-2xl md:text-3xl font-mono text-white/90 mb-6 text-center'>
          Oops! The page you’re looking for doesn’t exist.
          <br />
          Maybe it was moved, or you found a broken link.
        </p>
        <Link
          to='/'
          className='mt-2 px-8 py-3 bg-[#1F2937] text-white font-bold font-mono border border-white/10 hover:bg-[#374151] hover:border-white/20 rounded-lg transition-all duration-300 hover:scale-105 text-lg shadow-md'
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
