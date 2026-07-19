// "use client";

// import Image from "next/image";
// import { ArrowRight, ArrowUpRight } from "lucide-react";
// import Developer from "./Developer";
// import Guy from "../public/developer.json";
// import Link from "next/link";
// export default function Hero() {
//   return (
//     <main className="relative flex flex-col xl:flex-row   flex-1 items-center  overflow-hidden
//      ">



   
//       <div className="relative z-10 md:pt-12 sm:max-w-205 sm:px-8 py-1 md:px-12">
//         <div className="mb-7 flex sm:inline-flex items-center gap-2 rounded-full border border-[#232323]  px-3.5 py-1.5 font-mono text-[11px] tracking-[0.1em] text-[#c7f547] backdrop-blur-sm">
//           <span className="relative flex h-1.5 w-1.5">
//             <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c7f547] opacity-75" />
//             <span className="relative inline-flex h-1.5 w-1.5 rounded-full b" />
//           </span>
//           AVAILABLE FOR WORK 
//         </div>

//         <h2 className="mb-6 font-mono text-center md:text-start text-3xl font-bold uppercase leading-[1.08] tracking-tight text-[#f2f2ee]  md:text-[56px] xl:text-5xl">
//           Frontend developer
//           <br />
    
// Building<span className="text-[#c7f547] ml-4">Products</span>,
//           <br />
//           That Scale
//         </h2>

//         <p className="mb-9 px-4 sm:px-0 text-18 text-center md:text-start  text-wrap leading-[1.7] max-w-6xl text-[#c9c9c4]">
//     I build modern web applications using React, Next.js, TypeScript, Tailwind CSS, and REST APIs. I focus on writing clean, maintainable code and creating fast, responsive interfaces that deliver a great user experience. de and creating fast, responsive interfaces that deliver a great user experience.
//         </p>

//         <div className="flex justify-center md:justify-start flex-wrap gap-3.5">
//           <Link
//             href="/work"
//             className="inline-flex items-center gap-2.5 rounded-[10px] bg-[#c7f547] px-5 py-3.5 font-mono text-[12px] tracking-[0.08em] text-[#0b0b0b] transition-transform hover:-translate-y-0.5"
//           >
//            Explore My Work  <ArrowRight size={14} />
//           </Link>
//           <a
//             href="/contact"
//             className="inline-flex items-center gap-2.5 rounded-[10px] border border-[#3a3a3a] bg-[#0b0b0b]/40 px-5 py-3.5 font-mono text-[12px] tracking-[0.08em] text-[#f2f2ee] backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:border-[#8a8a85]"
//           >
//             Hire Me <ArrowUpRight size={14} />
//           </a>
//         </div>
//       </div>
//         <Developer source={Guy}/>
//     </main>
    
//   );
// }

"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import Guy from '../public/developer.json'
import Developer from "@/components/Developer";

const HEADLINE_LINE_1 = "Frontend developer";
const HEADLINE_LINE_2 = ["Building", "Products,"];
const HEADLINE_LINE_3 = "That Scale";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.3 },
  },
};

const word = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <main className="relative flex flex-1 flex-col items-center overflow-hidden xl:flex-row">
      {/* background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#c7f547 1px, transparent 1px), linear-gradient(90deg, #c7f547 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* radial glow */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/3 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, #7c5cfc 0%, #c7f547 40%, transparent 70%)",
        }}
      />

      {/* scanline sweep */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-scanline absolute left-0 h-32 w-full bg-gradient-to-b from-transparent via-[#c7f547]/[0.05] to-transparent" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 md:pt-12 sm:max-w-205 sm:px-8 py-1 md:px-12"
      >
        <motion.div
          variants={word}
          className="mb-7 flex sm:inline-flex items-center gap-2 rounded-full border border-[#232323] px-3.5 py-1.5 font-mono text-[11px] tracking-[0.1em] text-[#c7f547] backdrop-blur-sm"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c7f547] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#c7f547]" />
          </span>
          AVAILABLE FOR WORK (REMOTE)
        </motion.div>

        <h2 className="mb-6 flex flex-col items-center font-mono text-3xl font-bold uppercase leading-[1.08] tracking-tight text-[#f2f2ee] md:items-start md:text-[56px] xl:text-5xl">
          <motion.span variants={word}>{HEADLINE_LINE_1}</motion.span>
          <span>
            {HEADLINE_LINE_2.map((w, i) => (
              <motion.span
                key={w}
                variants={word}
                className={i === 1 ? "ml-4 text-[#c7f547]" : ""}
                style={
                  i === 1
                    ? { textShadow: "0 0 18px rgba(199,245,71,0.45)" }
                    : undefined
                }
              >
                {w}{" "}
              </motion.span>
            ))}
          </span>
          <motion.span variants={word}>{HEADLINE_LINE_3}</motion.span>
        </h2>

        <motion.p
          variants={word}
          className="mb-9 px-4 sm:px-0 text-18 text-center md:text-start text-wrap leading-[1.7] max-w-6xl text-[#c9c9c4]"
        >
          I build modern web applications using React, Next.js, TypeScript,
          Tailwind CSS, and REST APIs. I focus on writing clean, maintainable
          code and creating fast, responsive interfaces that deliver a great
          user experience.
        </motion.p>

        <motion.div
          variants={word}
          className="flex justify-center md:justify-start flex-wrap gap-3.5"
        ><a
          
            href="#"
            className="inline-flex items-center gap-2.5 rounded-[10px] bg-[#c7f547] px-5 py-3.5 font-mono text-[12px] tracking-[0.08em] text-[#0b0b0b] transition-transform hover:-translate-y-0.5"
          >
            BOOK A CALL <ArrowRight size={14} />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2.5 rounded-[10px] border border-[#3a3a3a] bg-[#0b0b0b]/40 px-5 py-3.5 font-mono text-[12px] tracking-[0.08em] text-[#f2f2ee] backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:border-[#8a8a85]"
          >
            VIEW PROJECTS <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative z-10"
      >
        <Developer source={Guy} />
      </motion.div>

      <style jsx>{`
        .hero-scanline {
          animation: hero-scan 4s linear infinite;
          top: -128px;
        }
        @keyframes hero-scan {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(100vh + 128px));
          }
        }
      `}</style>
    </main>
  );
}