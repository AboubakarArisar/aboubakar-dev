import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { PopupModal } from "react-calendly";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Abou Bakar | Contact";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isCalendlyOpen, setCalendlyOpen] = useState(false);
  const rootElement = document.getElementById("root") ?? document.body;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Project Inquiry from ${formData.name || "Website Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nProject details:\n${formData.message}`
    );

    window.location.href = `mailto:aboubakar.dev@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='min-h-screen bg-dark-900 px-6 pt-28 text-white'>
      <div className='container mx-auto max-w-6xl pb-16'>
        <div className='grid gap-8 lg:grid-cols-[0.95fr_1.05fr]'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className='rounded-[2rem] border border-white/10 bg-[#0f172a]/85 p-8 md:p-10'
          >
            <p className='text-sm uppercase tracking-[0.3em] text-[#94a3b8]'>
              Contact
            </p>
            <h1 className='mt-4 text-4xl font-bold text-white md:text-6xl'>
              Send the project details and I will reply with a practical next step.
            </h1>
            <p className='mt-6 text-base leading-8 text-slate-300'>
              Best inquiries include what you are building, what is blocked right
              now, your timeline, and whether you need frontend, backend, or full
              product development.
            </p>

            <div className='mt-8 grid gap-4'>
              <div className='rounded-2xl border border-[#233047] bg-[#111827] p-5'>
                <p className='text-sm uppercase tracking-[0.25em] text-[#cbd5e1]'>
                  Good fit
                </p>
                <p className='mt-3 text-sm leading-7 text-slate-300'>
                  MVP builds, startup product work, backend APIs, dashboards,
                  automations, and product improvements that need fast execution.
                </p>
              </div>
              <div className='rounded-2xl border border-[#233047] bg-[#111827] p-5'>
                <p className='text-sm uppercase tracking-[0.25em] text-[#cbd5e1]'>
                  Fastest way
                </p>
                <p className='mt-3 text-sm leading-7 text-slate-300'>
                  Use the form, email me directly, or book a short call if the scope
                  is already clear.
                </p>
              </div>
            </div>

            <div className='mt-8 flex flex-col gap-4 text-sm text-slate-300'>
              <a
                href='mailto:aboubakar.dev@gmail.com'
                className='inline-flex items-center gap-3 hover:text-white'
              >
                <FaEnvelope />
                aboubakar.dev@gmail.com
              </a>
              <a
                href='https://linkedin.com/in/aboubakarisar'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-3 hover:text-white'
              >
                <FaLinkedin />
                LinkedIn profile
              </a>
              <a
                href='https://github.com/AboubakarArisar'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-3 hover:text-white'
              >
                <FaGithub />
                GitHub profile
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className='rounded-[2rem] border border-white/10 bg-[#111827]/80 p-8 md:p-10'
          >
            <form onSubmit={handleSubmit} className='space-y-5'>
              <div>
                <label htmlFor='name' className='mb-2 block text-sm text-slate-300'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full rounded-xl border border-[#334155] bg-[#020617] px-4 py-3 text-white outline-none transition-colors focus:border-[#f97316]'
                  required
                />
              </div>

              <div className='grid gap-5 md:grid-cols-2'>
                <div>
                  <label
                    htmlFor='email'
                    className='mb-2 block text-sm text-slate-300'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full rounded-xl border border-[#334155] bg-[#020617] px-4 py-3 text-white outline-none transition-colors focus:border-[#f97316]'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='company'
                    className='mb-2 block text-sm text-slate-300'
                  >
                    Company or product
                  </label>
                  <input
                    type='text'
                    id='company'
                    name='company'
                    value={formData.company}
                    onChange={handleChange}
                    className='w-full rounded-xl border border-[#334155] bg-[#020617] px-4 py-3 text-white outline-none transition-colors focus:border-[#f97316]'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='mb-2 block text-sm text-slate-300'
                >
                  Project brief
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={7}
                  placeholder='What are you building, what do you need help with, and what is the timeline?'
                  className='w-full resize-none rounded-xl border border-[#334155] bg-[#020617] px-4 py-3 text-white outline-none transition-colors focus:border-[#f97316]'
                  required
                />
              </div>

              <button
                type='submit'
                className='w-full rounded-xl bg-[#f97316] px-6 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-[#fb923c]'
              >
                Send inquiry by email
              </button>
            </form>

            <div className='mt-6 rounded-2xl border border-[#233047] bg-[#020617] p-5'>
              <p className='text-sm uppercase tracking-[0.25em] text-[#cbd5e1]'>
                Prefer a call?
              </p>
              <p className='mt-3 text-sm leading-7 text-slate-300'>
                Book a short intro call if you already have the project scope in
                mind and want to discuss delivery.
              </p>
              <button
                type='button'
                onClick={() => setCalendlyOpen(true)}
                className='mt-4 inline-flex items-center justify-center rounded-xl border border-[#334155] bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1f2937]'
              >
                Schedule a call
              </button>
              <PopupModal
                url='https://calendly.com/aboubakar-dev/30min'
                onModalClose={() => setCalendlyOpen(false)}
                open={isCalendlyOpen}
                rootElement={rootElement}
                pageSettings={{
                  backgroundColor: "0f172a",
                  textColor: "ffffff",
                  primaryColor: "f97316",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
