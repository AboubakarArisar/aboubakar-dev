import React, { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import Reveal from "../components/ui/Reveal";
import SectionLabel from "../components/ui/SectionLabel";

const contactMethods = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "aboubakar.dev@gmail.com",
    href: "mailto:aboubakar.dev@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "/in/aboubakarisar",
    href: "https://linkedin.com/in/aboubakarisar",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "/AboubakarArisar",
    href: "https://github.com/AboubakarArisar",
  },
];

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Aboubakar — Contact";
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
    setFormData((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-white/35 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(244,241,234,0.12)]";

  return (
    <div className='relative px-6 pb-20 pt-36 text-white md:pt-44'>
      <div className='mx-auto max-w-6xl'>
        <Reveal className='max-w-3xl'>
          <SectionLabel>Get in touch</SectionLabel>
          <h1 className='mt-5 text-4xl font-bold tracking-tight md:text-6xl'>
            <span className='text-gradient'>Let's turn your idea into</span>{" "}
            <span className='text-accent'>a shipped product.</span>
          </h1>
          <p className='mt-6 text-lg leading-8 text-slate-300'>
            The best inquiries say what you're building, what's blocked, your
            timeline, and whether you need frontend, backend or full product
            development.
          </p>
        </Reveal>

        <div className='mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]'>
          {/* left: methods */}
          <Reveal>
            <div className='flex h-full flex-col gap-4'>
              {contactMethods.map((m) => {
                const Icon = m.icon;
                return (
                  <a
                    key={m.label}
                    href={m.href}
                    target={m.href.startsWith("http") ? "_blank" : undefined}
                    rel='noopener noreferrer'
                    className='group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.035]'
                  >
                    <span className='icon-tile h-12 w-12 text-lg'>
                      <Icon />
                    </span>
                    <span className='min-w-0'>
                      <span className='block text-xs uppercase tracking-wider text-slate-400'>
                        {m.label}
                      </span>
                      <span className='block truncate text-sm font-medium text-white'>
                        {m.value}
                      </span>
                    </span>
                    <FaArrowRight className='ml-auto text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white' />
                  </a>
                );
              })}

              <div className='mt-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6'>
                <p className='text-xs uppercase tracking-[0.2em] text-[#b8b2a4]'>
                  Prefer a call?
                </p>
                <p className='mt-3 text-sm leading-7 text-slate-300'>
                  Book a short intro call if your scope is already clear and you
                  want to discuss delivery.
                </p>
                <button
                  type='button'
                  onClick={() => setCalendlyOpen(true)}
                  className='mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10'
                >
                  Schedule a call
                  <FaArrowRight className='text-xs' />
                </button>
              </div>
            </div>
          </Reveal>

          {/* right: form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className='border-gradient rounded-[2rem] glass-strong p-8 md:p-10'
            >
              <div className='space-y-5'>
                <div>
                  <label
                    htmlFor='name'
                    className='mb-2 block text-sm text-slate-300'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Jane Founder'
                    className={inputClass}
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
                      placeholder='you@company.com'
                      className={inputClass}
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
                      placeholder='Acme Inc.'
                      className={inputClass}
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
                    rows={6}
                    placeholder='What are you building, what do you need help with, and what is the timeline?'
                    className={`${inputClass} resize-none`}
                    required
                  />
                </div>

                <button
                  type='submit'
                  className='btn-primary group w-full px-6 py-4 text-sm'
                >
                  Send inquiry
                  <FaArrowRight className='transition-transform duration-300 group-hover:translate-x-1' />
                </button>
              </div>
            </form>
          </Reveal>
        </div>

        <PopupModal
          url='https://calendly.com/aboubakar-dev/30min'
          onModalClose={() => setCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={rootElement}
          pageSettings={{
            backgroundColor: "141416",
            textColor: "ffffff",
            primaryColor: "e8e2d2",
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
