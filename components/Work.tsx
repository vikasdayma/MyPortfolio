// "use client";

// import { useState } from "react";
// import {  ExternalLink, X, Play } from "lucide-react";
// import { FaGithub } from "react-icons/fa";
// type Project = {
//   id: string;
//   title: string;
//   description: string;
//   tags: string[];
//   liveUrl: string;
//   githubUrl: string;
//   thumbnail: string; // gradient class or image path
//   canEmbed: boolean; // false if the site blocks iframes or needs auth
// };

// const PROJECTS: Project[] = [
//   {
//     id: "farmsync",
//     title: "FarmSync",
//     description:
//       "Agricultural SaaS platform with role-based dashboards, loan application state machine, and agronomist tools. Built solo end-to-end.",
//     tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Redis"],
//     liveUrl: "https://farm-sync-two.vercel.app",
//     githubUrl: "https://github.com/vikasdayma/farmsync",
//     thumbnail: "/farmsync.png",
//     canEmbed: true,
//   },
//   {
//     id: "taskflow",
//     title: "Momentum", // 
//     description:
//       "ClickUp/Linear-style project management tool — Workspace → Space → List → Task hierarchy with Kanban board and real-time sync.",
//     tags: ["React", "TypeScript", "Supabase", "TanStack Query"],
//     liveUrl: "https://momentum-tawny-zeta.vercel.app/", 
//     githubUrl: "https://github.com/vikasdayma/taskflow", 
//     thumbnail: "/momentum.png",
//     canEmbed: true,
//   },
//   {
//     id: "reeleditor",
//     title: "Overlaps AI",
//     description:
//       "Landing page for an AI startup — built to communicate the product vision with a bold, modern design system, smooth scroll-triggered animations, and a conversion-focused layout.",
//     tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
//     liveUrl: "https://your-reeleditor-url.vercel.app", 
//     githubUrl: "https://github.com/vikasdayma/reel-editor-portfolio",
//     thumbnail: "/overlapsai.png",
//     canEmbed: true,
//   },
// ];

// export default function Work() {
//   const [activeProject, setActiveProject] = useState<Project | null>(null);

//   return (
//     <section id="work" className="px-6 py-20 md:px-12 lg:px-20">
//       <div className="mb-12">
//         <p className="font-mono text-[13px] tracking-[0.2em] text-[#c7f547]">
//           ( 01 — SELECTED WORK )
//         </p>
//         <h2 className="mt-3 font-mono text-[32px] font-bold text-[#f2f2ee] md:text-[42px]">
//           PROJECTS
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
//         {PROJECTS.map((project) => (
//           <div
//             key={project.id}
//             className="group flex flex-col overflow-hidden rounded-2xl border border-[#232323] bg-[#111214] transition-colors hover:border-[#c7f547]/40"
//           >
//             {/* Thumbnail */}
//             <div
//               className={`relative bg-cover flex h-64 items-center justify-center 
//                 `}
//                 style={{backgroundImage:`url(${project.thumbnail})`}}
//             >
//               <button
//                 onClick={() => setActiveProject(project)}
//                 className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c7f547] text-[#0b0b0b] opacity-90 transition-transform group-hover:scale-110"
//                 aria-label={`Run ${project.title} live`}
//               >
//                 <Play size={22} fill="#0b0b0b" />
//               </button>
//             </div>

//             <div className="flex flex-1 flex-col gap-4 p-6">
//               <h3 className="font-mono text-[18px] font-bold text-[#f2f2ee]">
//                 {project.title}
//               </h3>
//               <p className="text-[14px] leading-relaxed text-[#8a8a85]">
//                 {project.description}
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {project.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="rounded-full border border-[#232323] px-3 py-1 font-mono text-[11px] tracking-[0.05em] text-[#7c5cfc]"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               <div className="mt-auto flex items-center gap-3 pt-2">
//                 <button
//                   onClick={() => setActiveProject(project)}
//                   className="flex items-center gap-2 rounded-lg bg-[#c7f547] px-4 py-2 font-mono text-[13px] font-semibold text-[#0b0b0b] transition-opacity hover:opacity-90"
//                 >
//                   <Play size={14} fill="#0b0b0b" />
//                   RUN LIVE
//                 </button>
//                     <a
//                   href={project.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#232323] text-[#8a8a85] transition-colors hover:border-[#c7f547] hover:text-[#c7f547]"
//                   aria-label="Open live site in new tab"
//                 >
//                   <ExternalLink size={16} />
//                 </a>
//                      <a
//                   href={project.githubUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#232323] text-[#8a8a85] transition-colors hover:border-[#c7f547] hover:text-[#c7f547]"
//                   aria-label="View source on GitHub"
//                 >
//                   <FaGithub size={16} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {activeProject && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
//           onClick={() => setActiveProject(null)}
//         >
//           <div
//             className="relative flex h-[85vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-[#232323] bg-[#111214]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex items-center justify-between border-b border-[#232323] px-5 py-3">
//               <p className="font-mono text-[13px] tracking-[0.1em] text-[#f2f2ee]">
//                 {activeProject.title.toUpperCase()} — LIVE PREVIEW
//               </p>
//               <div className="flex items-center gap-3">
//                      <a
//                   href={activeProject.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-1.5 font-mono text-[12px] text-[#8a8a85] hover:text-[#c7f547]"
//                 >
//                   <ExternalLink size={14} />
//                   OPEN IN NEW TAB
//                 </a>
//                 <button
//                   onClick={() => setActiveProject(null)}
//                   className="flex h-8 w-8 items-center justify-center rounded-lg text-[#8a8a85] hover:bg-white/5 hover:text-[#f2f2ee]"
//                   aria-label="Close preview"
//                 >
//                   <X size={18} />
//                 </button>
//               </div>
//             </div>

//             {activeProject.canEmbed ? (
//               <iframe
//                 src={activeProject.liveUrl}
//                 className="h-full w-full flex-1 bg-white"
//                 loading="lazy"
//                 title={`${activeProject.title} live preview`}
//               />
//             ) : (
//               <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
//                 <p className="max-w-sm text-[14px] text-[#8a8a85]">
//                   This project can&apos;t be embedded directly. Open it in a
//                   new tab instead.
//                 </p>
//                      <a
//                   href={activeProject.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="rounded-lg bg-[#c7f547] px-5 py-2.5 font-mono text-[13px] font-semibold text-[#0b0b0b]"
//                 >
//                   OPEN {activeProject.title.toUpperCase()}
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, X, Play } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  thumbnail: string;
  canEmbed: boolean;
};

const PROJECTS: Project[] = [
  {
    id: "farmsync",
    title: "FarmSync",
    description:
      "Agricultural SaaS platform with role-based dashboards, loan application state machine, and agronomist tools. Built solo end-to-end.",
    tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Redis"],
    liveUrl: "https://farm-sync-two.vercel.app",
    githubUrl: "https://github.com/vikasdayma/farmsync",
    thumbnail: "/farmsync.png",
    canEmbed: true,
  },
  {
    id: "taskflow",
    title: "Momentum",
    description:
      "ClickUp/Linear-style project management tool — Workspace → Space → List → Task hierarchy with Kanban board and real-time sync.",
    tags: ["React", "TypeScript", "Supabase", "TanStack Query"],
    liveUrl: "https://momentum-tawny-zeta.vercel.app/",
    githubUrl: "https://github.com/vikasdayma/taskflow",
    thumbnail: "/momentum.png",
    canEmbed: true,
  },
  {
    id: "reeleditor",
    title: "Overlaps AI",
    description:
      "Landing page for an AI startup — built to communicate the product vision with a bold, modern design system, smooth scroll-triggered animations, and a conversion-focused layout.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://your-reeleditor-url.vercel.app",
    githubUrl: "https://github.com/vikasdayma/reel-editor-portfolio",
    thumbnail: "/overlapsai.png",
    canEmbed: true,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Work() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative overflow-hidden px-6 py-20 md:px-12 lg:px-20">
      {/* background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#c7f547 1px, transparent 1px), linear-gradient(90deg, #c7f547 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      {/* radial glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[600px] rounded-full opacity-[0.12] blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, #7c5cfc 0%, #c7f547 40%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mb-12"
      >
        <p className="font-mono text-[13px] tracking-[0.2em] text-[#c7f547]">
          ( 01 — SELECTED WORK )
        </p>
        <h2 className="mt-3 font-mono text-[32px] font-bold text-[#f2f2ee] md:text-[42px]">
          PROJECTS
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            variants={card}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#232323] bg-[#111214] transition-colors hover:border-[#c7f547]/40"
            style={{ boxShadow: "0 0 0 0 rgba(199,245,71,0)" }}
          >
            {/* corner brackets, revealed on hover */}
            <span className="pointer-events-none absolute left-2 top-2 z-20 h-4 w-4 border-l-2 border-t-2 border-[#c7f547] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute right-2 top-2 z-20 h-4 w-4 border-r-2 border-t-2 border-[#c7f547] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute bottom-2 left-2 z-20 h-4 w-4 border-b-2 border-l-2 border-[#c7f547] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute bottom-2 right-2 z-20 h-4 w-4 border-b-2 border-r-2 border-[#c7f547] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Thumbnail */}
            <div
              className="relative flex h-64 items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${project.thumbnail})` }}
            >
              <div className="absolute inset-0 bg-[#0b0b0b]/0 transition-colors duration-300 group-hover:bg-[#0b0b0b]/40" />
              <button
                onClick={() => setActiveProject(project)}
                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#c7f547] text-[#0b0b0b] opacity-90 transition-transform group-hover:scale-110"
                style={{ boxShadow: "0 0 24px rgba(199,245,71,0.35)" }}
                aria-label={`Run ${project.title} live`}
              >
                <Play size={22} fill="#0b0b0b" />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="font-mono text-[18px] font-bold text-[#f2f2ee]">
                {project.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#8a8a85]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#232323] px-3 py-1 font-mono text-[11px] tracking-[0.05em] text-[#7c5cfc]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveProject(project)}
                  className="flex items-center gap-2 rounded-lg bg-[#c7f547] px-4 py-2 font-mono text-[13px] font-semibold text-[#0b0b0b] transition-opacity hover:opacity-90"
                >
                  <Play size={14} fill="#0b0b0b" />
                  RUN LIVE
                </button>
                     <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#232323] text-[#8a8a85] transition-colors hover:border-[#c7f547] hover:text-[#c7f547]"
                  aria-label="Open live site in new tab"
                >
                  <ExternalLink size={16} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#232323] text-[#8a8a85] transition-colors hover:border-[#c7f547] hover:text-[#c7f547]"
                  aria-label="View source on GitHub"
                >
                  <FaGithub size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {activeProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-[85vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-[#232323] bg-[#111214]"
            style={{ boxShadow: "0 0 80px -20px rgba(199,245,71,0.15)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="pointer-events-none absolute left-0 top-0 z-20 h-5 w-5 border-l-2 border-t-2 border-[#c7f547]" />
            <span className="pointer-events-none absolute right-0 top-0 z-20 h-5 w-5 border-r-2 border-t-2 border-[#c7f547]" />

            <div className="flex items-center justify-between border-b border-[#232323] px-5 py-3">
              <p className="font-mono text-[13px] tracking-[0.1em] text-[#f2f2ee]">
                {activeProject.title.toUpperCase()} — LIVE PREVIEW
              </p>
              <div className="flex items-center gap-3">
                   <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[12px] text-[#8a8a85] hover:text-[#c7f547]"
                >
                  <ExternalLink size={14} />
                  OPEN IN NEW TAB
                </a>
                <button
                  onClick={() => setActiveProject(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-[#8a8a85] hover:bg-white/5 hover:text-[#f2f2ee]"
                  aria-label="Close preview"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {activeProject.canEmbed ? (
              <iframe
                src={activeProject.liveUrl}
                className="h-full w-full flex-1 bg-white"
                loading="lazy"
                title={`${activeProject.title} live preview`}
              />
            ) : (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
                <p className="max-w-sm text-[14px] text-[#8a8a85]">
                  This project can&apos;t be embedded directly. Open it in a
                  new tab instead.
                </p>
                   <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#c7f547] px-5 py-2.5 font-mono text-[13px] font-semibold text-[#0b0b0b]"
                >
                  OPEN {activeProject.title.toUpperCase()}
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}