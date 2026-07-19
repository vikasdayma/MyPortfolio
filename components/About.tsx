"use client";

import { MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const FACTS = [
  { key: "location", value: "Madhya Pradesh, India" },
  { key: "education", value: "BTech Computer Engineering, 2026" },
  { key: "experience", value: "Zolosoft, AB Nextgen Webmasters" },
  { key: "focus", value: "Frontend & Full-stack Web Apps" },
];

const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Redux Toolkit",
  "TanStack Query",
  "Three.js",
  "React Three Fiber",
  "Shadcn/ui",
  "Git",
];

const JOURNEY = [
  {
    year: "2023",
    title: "Started My Frontend Journey",
    desc: "Discovered React and began building responsive websites while exploring modern frontend development.",
  },
  {
    year: "2024",
    title: "Building Real Projects",
    desc: "Focused on creating production-quality applications, experimenting with animations, UI design, and interactive user experiences.",
  },
  {
    year: "2025",
    title: "Professional Experience",
    desc: "Worked with startups, collaborated on real-world projects, and gained experience building scalable frontend applications.",
  },
  {
    year: "Now",
    title: "Always Building",
    desc: "Currently improving my frontend architecture, creating polished products, and preparing for frontend engineering roles.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function About() {
  return (
    <main
      id="about"
      className="relative flex flex-1 flex-col overflow-hidden px-4 py-6 sm:px-8 md:px-12"
    >
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
        className="pointer-events-none absolute left-1/3 top-0 h-[500px] w-[650px] -translate-x-1/2 rounded-full opacity-[0.14] blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, #7c5cfc 0%, #c7f547 40%, transparent 70%)",
        }}
      />

      {/* Intro */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center overflow-hidden xl:flex-row"
      >
        <div className="relative z-10 w-full max-w-2xl py-1 sm:px-8 md:px-2">
          <motion.div
            variants={item}
            className="mb-7 flex items-start gap-2 rounded-full border border-[#232323] px-3.5 py-1.5 font-mono text-[11px] tracking-[0.1em] text-[#c7f547] backdrop-blur-sm sm:inline-flex"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c7f547] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#c7f547]" />
            </span>
            About me
          </motion.div>

          <motion.h2
            variants={item}
            className="mb-6 text-center font-mono text-3xl font-bold uppercase leading-[1.08] tracking-tight text-[#f2f2ee] md:text-start md:text-[48px] xl:text-5xl"
          >
            Hi, I&apos;m Vikas Dayma —
            I Build{" "}
            <span
              className="ml-2 text-[#c7f547]"
              style={{ textShadow: "0 0 18px rgba(199,245,71,0.45)" }}
            >
              Products
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mb-6 text-center text-[16px] leading-[1.7] text-[#c9c9c4] md:text-start"
          >
            I&apos;m a frontend developer and final-year Computer Engineering
            student. I care about clean code, thoughtful interfaces, and
            shipping things that actually work — not just demos. Most of my
            time goes into building full-stack products end-to-end, from
            database schema to the last pixel of the UI.
          </motion.p>
        </div>

      
          <Image
            src="/1.png"
            width={700}
            height={700}
            alt="about"
            className="h-auto w-[90%] xl:w-1/2"
          />
        </motion.div>
     

      {/* Quick Facts */}
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 mt-16"
      >
        <p className="mb-5 font-mono text-[13px] tracking-[0.2em] text-[#7c5cfc]">
          ( 01 — QUICK FACTS )
        </p>

        <div
          className="relative overflow-hidden rounded-2xl border border-[#232323] bg-[#0d0e0f]"
          style={{ boxShadow: "0 0 60px -15px rgba(199,245,71,0.08)" }}
        >
          <span className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-[#c7f547]" />
          <span className="pointer-events-none absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-[#c7f547]" />

          {/* window chrome */}
          <div className="flex items-center gap-2 border-b border-[#232323] bg-[#111214] px-5 py-3.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3a]" />
            </div>
            <span className="ml-2 font-mono text-[12px] tracking-[0.05em] text-[#5a5a56]">
              about.ts
            </span>
          </div>

          {/* code body */}
          <div className="px-6 py-7 sm:px-8">
            <pre className="overflow-x-auto font-mono text-[13.5px] leading-[2] sm:text-[14.5px]">
              <code>
                <span className="text-[#7c5cfc]">const</span>{" "}
                <span className="text-[#f2f2ee]">vikas</span>{" "}
                <span className="text-[#5a5a56]">=</span>{" "}
                <span className="text-[#5a5a56]">{"{"}</span>
                {"\n"}
                {FACTS.map((fact, i) => (
                  <span key={fact.key}>
                    {"  "}
                    <span className="text-[#c7f547]">{fact.key}</span>
                    <span className="text-[#5a5a56]">: </span>
                    <span className="text-[#e8e6df]">
                      &quot;{fact.value}&quot;
                    </span>
                    <span className="text-[#5a5a56]">
                      {i < FACTS.length - 1 ? "," : ""}
                    </span>
                    {"\n"}
                  </span>
                ))}
                <span className="text-[#5a5a56]">{"}"}</span>
                <span className="ml-0.5 inline-block h-[15px] w-[7px] translate-y-[2px] animate-pulse bg-[#c7f547]" />
              </code>
            </pre>
          </div>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 mt-16"
      >
        <p className="mb-5 font-mono text-[13px] tracking-[0.2em] text-[#7c5cfc]">
          ( 02 — TECH STACK )
        </p>
        <div className="flex flex-wrap gap-2.5">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#232323] px-4 py-2 font-mono text-[12px] tracking-[0.05em] text-[#f2f2ee] transition-colors hover:border-[#c7f547] hover:text-[#c7f547]"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Journey */}
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 mt-16 pb-16"
      >
        <p className="mb-5 font-mono text-[13px] tracking-[0.2em] text-[#7c5cfc]">
          ( 03 — MY JOURNEY )
        </p>
        <div className="flex flex-col gap-6 border-l border-[#232323] pl-6">
          {JOURNEY.map((entry) => (
            <div key={entry.title} className="relative">
              <span
                className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#c7f547]"
                style={{ boxShadow: "0 0 8px rgba(199,245,71,0.6)" }}
              />
              <p className="font-mono text-[11px] tracking-[0.1em] text-[#8a8a85]">
                {entry.year}
              </p>
              <h3 className="mt-1 font-mono text-[16px] font-semibold text-[#f2f2ee]">
                {entry.title}
              </h3>
              <p className="mt-1 max-w-2xl text-[14px] leading-[1.6] text-[#8a8a85]">
                {entry.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}