import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Abou Bakar | Contact";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='min-h-screen bg-dark-900 pt-24'>
      <div className='container mx-auto px-6 py-12'>
        <div className='grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto'>
          {/* Left Side - Animated Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-8'
          >
            <motion.h1
              className='text-6xl md:text-8xl font-bold text-white font-mono'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Let's
              <motion.span
                className='block text-[#94A3B8]'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Create
              </motion.span>
              <motion.span
                className='block text-[#64748B]'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                Together
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className='space-y-6'
            >
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center'>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className='w-6 h-6 rounded-full bg-[#94A3B8]'
                  />
                </div>
                <p className='text-xl text-gray-300'>Available for Freelance</p>
              </div>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center'>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className='w-6 h-6 bg-[#64748B] rotate-45'
                  />
                </div>
                <p className='text-xl text-gray-300'>Open to Collaboration</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl border border-[#1E293B]'
          >
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-gray-300 font-mono mb-2'
                >
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-lg bg-dark-700 border border-[#1E293B] text-white focus:outline-none focus:border-[#94A3B8] transition-colors'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-gray-300 font-mono mb-2'
                >
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-lg bg-dark-700 border border-[#1E293B] text-white focus:outline-none focus:border-[#94A3B8] transition-colors'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-gray-300 font-mono mb-2'
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className='w-full px-4 py-3 rounded-lg bg-dark-700 border border-[#1E293B] text-white focus:outline-none focus:border-[#94A3B8] transition-colors resize-none'
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type='submit'
                className='w-full px-8 py-4 bg-[#1F2937] text-white font-bold hover:bg-[#374151] font-mono border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300'
              >
                Send Message →
              </motion.button>
            </form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className='mt-8 pt-8 border-t border-[#1E293B]'
            >
              <div className='flex flex-col gap-4'>
                <a
                  href='mailto:aboubakar.dev@gmail.com'
                  className='text-gray-300 hover:text-white transition-colors flex items-center gap-2'
                >
                  <span className='w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center'>
                    ✉️
                  </span>
                  Email{" "}
                </a>
                <a
                  href='https://github.com/AboubakarArisar'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-white transition-colors flex items-center gap-2'
                >
                  <span className='w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center'>
                    🔗
                  </span>
                  Github
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
