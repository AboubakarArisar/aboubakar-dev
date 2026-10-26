/*
 * Single source of truth for every project on the site.
 *
 * To add a project, append an entry below:
 *   - `featured: true` puts it in the large showcase (order = display order).
 *   - Covers live in /public/work as <slug>-800.webp and <slug>-1600.webp.
 *     Without a cover, featured projects show the title as a typographic
 *     cover and the index simply shows no thumbnail.
 *   - `video` (optional) is a short muted loop shown instead of the cover.
 *   - Leave `year` out until it is verified.
 */

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  caseStudy?: string[];
  stack: string[];
  role?: string;
  year?: string;
  cover?: { alt: string; width: number; height: number };
  video?: string;
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
  sourceNote?: string;
  featured?: boolean;
};

const screenshot = { width: 1600, height: 1000 };

export const projects: Project[] = [
  {
    slug: "castlehub",
    title: "CastleHub",
    category: "Community platform",
    year: "2026",
    featured: true,
    summary: "A social home for the SkyCastle builder community. Builders post work in progress, launch finished projects and find other people who build: games, websites, AI tools, music, art and video.",
    caseStudy: [
      "CastleHub sits somewhere between a launch board and a social feed. Builders share the messy middle of a build, then give a finished project its own page and enter the weekly Launchpad or let people find it in Discover.",
      "Around that core: posts, project pages, comments, reactions, notifications and voice comments, plus a few things that make it feel like a place rather than a feed: Builder Roulette to meet a random builder, a builder world map, and the Castle Wall, a shared mural anyone can draw on.",
      "Sign-in uses the community's existing Slack accounts, so nobody needs a new password. CastleHub only posts to Slack when a builder asks it to, and never reads messages.",
    ],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Auth.js", "Vercel Blob", "Tailwind CSS"],
    role: "Design & full-stack development",
    cover: { alt: "CastleHub landing page: the headline 'show the castle what you're building' above an illustrated castle on floating islands with the app's feed in the foreground.", ...screenshot },
    liveUrl: "https://castlehub.aboubakarisar.tech",
    repoUrl: "https://github.com/AboubakarArisar/castlehub",
  },
  {
    slug: "lastlight",
    title: "Last Light",
    category: "Browser game",
    year: "2026",
    featured: true,
    summary: "A football game you play by drawing. Sketch the pass, bend the shot and create the one move that decides the match, through a career, daily challenges and replays of your best moments.",
    caseStudy: [
      "Built with Three.js and TypeScript, combining ball physics, opponent AI and touch-friendly drawing controls with career progression and optional Supabase cloud saves.",
    ],
    stack: ["TypeScript", "Three.js", "Vite", "Supabase"],
    role: "Game design & development",
    cover: { alt: "Last Light title screen: the headline 'One move. Everything.' over a 3D football stadium with players on the pitch.", ...screenshot },
    liveUrl: "https://lastlight.aboubakarisar.tech",
    liveLabel: "Play the game",
    repoUrl: "https://github.com/AboubakarArisar/last_light",
  },
  {
    slug: "typeverse",
    title: "Typeverse",
    category: "Typing arcade",
    year: "2026",
    featured: true,
    summary: "A typing arcade, not a typing drill. One shared typing engine powers eight games, each training a different skill. No accounts, no ads and no analytics, and it keeps working offline.",
    caseStudy: [
      "Every mode runs on the same engine: target locking, combo multipliers, live WPM and accuracy, and per-key error tracking that feeds a heatmap of the keys you actually miss.",
      "Logic runs on a fixed 60 Hz timestep with pooled entities, so frame rate never changes the game. First load is around 39 KB of gzipped JavaScript; each mode is a small lazy-loaded chunk.",
      "Progress lives in the browser's IndexedDB. A service worker makes it installable and playable with the network off. Menus are fully keyboard-driven, honour reduced motion and handle IME input for Urdu and Arabic.",
    ],
    stack: ["TypeScript", "Preact", "Signals", "Vite", "IndexedDB", "PWA", "Vitest", "Playwright"],
    role: "Design & development",
    cover: { alt: "Typeverse home screen: the headline 'Turn your typing into a game.' beside an illustrated keyboard with a quick typing check.", ...screenshot },
    liveUrl: "https://typeverse.aboubakarisar.tech",
    liveLabel: "Play the game",
    repoUrl: "https://github.com/AboubakarArisar/typeverse",
  },
  {
    slug: "pindari",
    title: "Pindari Coders",
    category: "Developer learning platform",
    year: "2026",
    summary: "A developer workshop with interactive coding labs, learning roadmaps, curated resources and a community project wall.",
    caseStudy: [
      "Brings together eighteen interactive modules across four lab domains, browser-saved roadmap progress, Sanity-managed resources and a moderated project wall backed by Supabase.",
    ],
    stack: ["Next.js", "React", "JavaScript", "Sanity", "Supabase"],
    role: "Co-founder & full-stack development",
    cover: { alt: "Pindari Coders landing page with the headline 'learn a little. build something. stay curious.'", ...screenshot },
    liveUrl: "https://pindari.dpdns.org/",
    repoUrl: "https://github.com/AboubakarArisar/pindari-coders",
  },
  {
    slug: "steward",
    title: "Steward",
    category: "Full-stack SaaS",
    year: "2026",
    summary: "A project and financial management platform for freelancers and small teams. Projects, clients and income tracking in one place.",
    caseStudy: [
      "Built project tracking, client management and financial dashboards, supported by REST APIs, authentication and optimized database queries.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Zustand"],
    cover: { alt: "Steward landing page with the headline 'Less juggling. More building.' above a project board.", ...screenshot },
    liveUrl: "https://trysteward.vercel.app/",
    repoUrl: "https://github.com/AboubakarArisar/projects-and-payments",
  },
  {
    slug: "dastakhat",
    title: "Dastakhat",
    category: "Document workflows",
    year: "2026",
    summary: "An e-signature platform for creating, signing and sharing documents, with ready-to-use agreements and custom document creation.",
    caseStudy: [
      "Implemented electronic signatures, document sharing and role-based access for both signing parties.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    cover: { alt: "Dastakhat landing page with the headline 'Send a contract. Get it signed.' beside a document awaiting signature.", ...screenshot },
    liveUrl: "https://dastakhat.vercel.app/",
    repoUrl: "https://github.com/AboubakarArisar/dastakhat",
  },
  {
    slug: "postdigital",
    title: "The Post Digital",
    category: "Performance & backend",
    year: "2026",
    summary: "A production news platform with server-side rendering and a backend built to handle daily publishing traffic.",
    caseStudy: [
      "Identified excessive PostgreSQL data transfer and introduced Redis caching, reducing database bandwidth from gigabytes to a few megabytes.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Tailwind CSS"],
    liveUrl: "https://www.thepostdigital.net/",
    sourceNote: "Private repository",
  },
  {
    slug: "droplr",
    title: "Droplr",
    category: "File sharing",
    year: "2025",
    summary: "A location-based file sharing app for quick transfers between nearby users, with automatic expiry for cleaner privacy controls.",
    caseStudy: ["Secure uploads, downloads and geolocation-based sharing, built across the MERN stack."],
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    cover: { alt: "Droplr landing page with the headline 'Share files instantly with people around you.' beside a nearby sharing room.", ...screenshot },
    liveUrl: "https://droplr-front.vercel.app/",
    repoUrl: "https://github.com/AboubakarArisar/Droplr",
  },
  {
    slug: "noteswap",
    title: "NoteSwap",
    category: "Student notes marketplace",
    year: "2024",
    summary: "A sharing platform where students earn points by uploading notes and spend them to access other content.",
    caseStudy: ["Connects uploading, discovery and downloads through a points-based exchange for academic material."],
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    cover: { alt: "NoteSwap landing page with the headline 'Learn. Share. Lead. Sukkur IBA's Knowledge Hub'.", ...screenshot },
    liveUrl: "https://noteswap-sigma.vercel.app/",
    repoUrl: "https://github.com/AboubakarArisar/NoteSwap-Frontend",
  },
  {
    slug: "torah",
    title: "Torah Learning Platform",
    category: "Online learning",
    year: "2025",
    summary: "A full-stack learning platform with video calling and real-time messaging.",
    caseStudy: ["Uses WebRTC for video calls and Socket.io for real-time messaging."],
    stack: ["React", "Node.js", "MongoDB", "WebRTC", "Socket.io"],
  },
];

export const featuredProjects = projects.filter(p => p.featured);
export const otherProjects = projects.filter(p => !p.featured);
