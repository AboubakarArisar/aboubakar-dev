import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
            className='flex-shrink-0 text-2xl font-bold text-white transition-colors hover:text-[#fb923c]'
          >
            <span className='text-[#fb923c]'>Abou</span> Bakar
          </Link>

          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className='cursor-pointer text-white transition-colors hover:text-[#fb923c]'
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className='md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50 ml-auto'
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`block w-7 h-0.5 rounded bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-7 h-0.5 rounded bg-white my-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-7 h-0.5 rounded bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 w-full min-h-screen z-[9999] bg-[#10151c] flex flex-col md:hidden pointer-events-auto overflow-y-auto'
          >
            <div className='flex items-center justify-between px-6 py-5 border-b border-[#1E293B] shadow-lg shadow-black/30'>
              <Link
                to='/'
                className='text-2xl font-bold text-white transition-colors hover:text-[#fb923c]'
                onClick={() => setMenuOpen(false)}
              >
                <span className='text-[#fb923c]'>Abou</span> Bakar
              </Link>
              <button
                className='w-10 h-10 flex items-center justify-center ml-2 focus:outline-none'
                aria-label='Close menu'
                onClick={() => setMenuOpen(false)}
              >
                <span className='text-3xl text-white'>&times;</span>
              </button>
            </div>
            <div className='flex-1 flex flex-col items-center justify-center min-h-[60vh] gap-8'>
              {navLinks.map((link, idx) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className='rounded-lg bg-[#181e25] px-8 py-3 text-2xl text-white tracking-wide shadow-md drop-shadow-lg transition-colors hover:bg-[#232b36] hover:text-[#fb923c]'
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
