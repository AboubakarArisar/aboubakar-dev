import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
}

const GITHUB_USERNAME = "AboubakarArisar";
const PER_PAGE = 9;

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${PER_PAGE}&page=${page}`
    )
      .then((res) => {
        // Check if there are more pages using the Link header
        const link = res.headers.get("Link");
        setHasNext(!!(link && link.includes('rel="next"')));
        setHasPrev(page > 1);
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  }, [page]);

  return (
    <div className='min-h-screen bg-dark-900 pt-24 pb-16 px-4'>
      <div className='container mx-auto max-w-7xl'>
        <h1 className='text-4xl md:text-5xl font-bold font-mono text-[#94A3B8] mb-12 text-center'>
          My GitHub Projects
        </h1>
        {loading ? (
          <div className='flex justify-center items-center h-64'>
            <span className='text-lg text-gray-400 font-mono'>
              Loading projects...
            </span>
          </div>
        ) : (
          <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {repos.map((repo, idx) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.07, duration: 0.5 }}
                  viewport={{ once: true }}
                  className='relative group bg-dark-800/80 border border-[#1E293B] rounded-2xl shadow-lg p-6 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:border-[#94A3B8]/40 transition-all duration-300'
                >
                  <div className='flex-1'>
                    <h2 className='text-2xl font-bold font-mono text-white mb-2 group-hover:text-[#60A5FA] transition-colors'>
                      {repo.name}
                    </h2>
                    <p className='text-gray-300 text-base mb-4 min-h-[48px]'>
                      {repo.description || "No description provided."}
                    </p>
                  </div>
                  <div className='flex items-center justify-between mt-4'>
                    <span className='inline-block px-3 py-1 rounded-full bg-dark-700 text-xs font-mono text-gray-300 border border-[#374151]'>
                      {repo.language || "Other"}
                    </span>
                    <span className='inline-flex items-center gap-1 text-xs text-[#FBBF24] font-mono'>
                      ★ {repo.stargazers_count}
                    </span>
                    <a
                      href={repo.html_url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='ml-2 px-4 py-2 rounded-lg bg-[#1F2937] text-white font-bold font-mono border border-white/10 hover:bg-[#374151] hover:border-white/20 transition-all duration-200 text-xs'
                    >
                      GitHub ↗
                    </a>
                  </div>
                  <motion.div
                    className='absolute -bottom-8 -right-8 w-32 h-32 bg-[#1F2937]/30 rounded-full blur-2xl opacity-60 group-hover:scale-110 transition-transform duration-500'
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              ))}
            </div>
            <div className='flex justify-center items-center gap-4 mt-12'>
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={!hasPrev}
                className={`px-5 py-2 cursor-pointer rounded-lg font-mono border border-[#374151] bg-dark-700 text-white transition-all duration-200 ${
                  !hasPrev
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-[#23272b]"
                }`}
              >
                Previous
              </button>
              <span className='text-gray-400 font-mono text-lg'>
                Page {page}
              </span>
              <button
                onClick={() => setPage((p) => p + 1)}
                disabled={!hasNext}
                className={`px-5 py-2 cursor-pointer rounded-lg font-mono border border-[#374151] bg-dark-700 text-white transition-all duration-200 ${
                  !hasNext
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-[#23272b]"
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
