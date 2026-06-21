import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className='fixed inset-x-0 top-0 z-50 px-4 pt-4'
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "glass-strong shadow-[0_8px_40px_-12px_rgba(124,58,237,0.4)]"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Link
          to='/'
          className='group flex items-center text-lg font-semibold tracking-tight text-white'
        >
          <span>
            Aboubakar<span className='text-accent'>.</span>
          </span>
        </Link>

        <div className='hidden items-center gap-1 md:flex'>
          {navLinks.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId='nav-active'
                    className='absolute inset-0 -z-10 rounded-xl border border-white/10 bg-white/5'
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
          <Link to='/contact' className='btn-primary ml-2 px-4 py-2 text-sm'>
            Let's talk
          </Link>
        </div>

        <button
          className='relative z-50 flex h-10 w-10 flex-col items-center justify-center md:hidden'
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 rounded bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-[5px] rotate-45" : ""
            }`}
          />
          <span
            className={`my-1 block h-0.5 w-6 rounded bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-[5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='glass-strong fixed inset-0 z-40 flex flex-col items-center justify-center gap-3 md:hidden'
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + idx * 0.07 }}
              >
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`text-3xl font-semibold tracking-tight transition-colors ${
                    pathname === link.to
                      ? "text-accent"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + navLinks.length * 0.07 }}
            >
              <Link
                to='/contact'
                onClick={() => setMenuOpen(false)}
                className='btn-primary mt-4 px-7 py-3 text-base'
              >
                Start a project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
