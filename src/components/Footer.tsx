import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const socials = [
  { href: "https://github.com/AboubakarArisar", label: "GitHub", icon: FaGithub },
  {
    href: "https://linkedin.com/in/aboubakarisar",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  { href: "mailto:aboubakar.dev@gmail.com", label: "Email", icon: FaEnvelope },
];

const Footer: React.FC = () => {
  return (
    <footer className='relative mt-10 px-4 pb-8'>
      <div className='mx-auto max-w-6xl'>
        <div className='glass overflow-hidden rounded-3xl p-8 md:p-10'>
          <div className='flex flex-col gap-10 md:flex-row md:items-end md:justify-between'>
            <div className='max-w-md'>
              <Link
                to='/'
                className='flex items-center text-lg font-semibold text-white'
              >
                Aboubakar<span className='text-accent'>.</span>
              </Link>
              <p className='mt-4 text-sm leading-7 text-slate-400'>
                Full-stack engineer building fast, reliable web products for
                startups. Available for freelance MVP builds, backend work, and
                AI automation.
              </p>
              <a
                href='mailto:aboubakar.dev@gmail.com'
                className='mt-4 inline-block text-sm font-medium text-accent transition-colors hover:text-white'
              >
                aboubakar.dev@gmail.com
              </a>
            </div>

            <div className='flex flex-col gap-6'>
              <div className='flex gap-3'>
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={s.label}
                      className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white'
                    >
                      <Icon className='text-lg' />
                    </a>
                  );
                })}
              </div>
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className='inline-flex items-center justify-center gap-2 self-start rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-white/25 hover:text-white md:self-end'
              >
                Back to top
                <FaArrowUp className='text-xs' />
              </button>
            </div>
          </div>

          <div className='mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row'>
            <p>
              © {new Date().getFullYear()} Aboubakar. Designed & built from
              scratch.
            </p>
            <p className='font-mono'>React · TypeScript · Tailwind · Motion</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
