
// 'use client'
// import { AnimatePresence, motion, useReducedMotion } from "motion/react";
// import { useEffect, useState } from "react";
// import { useBootStage } from "./BootStageProvider";

// const STEP = 700; // Time between each line (ms)

// const LINES = [
//   { text: "Vikas-Dayma@portfolio %" },
//   { text: "" },
//   { text: "npm run dev" },
//   { text: "" },
//   { text: "> Starting Development Server..." },
//   { text: "✓ Loading React", stage: 1 },
//   { text: "✓ Loading Components", stage: 2 },
//   { text: "✓ Initializing Animations", stage: 3 },
//   { text: "✓ Preparing Experience", stage: 4 },
//   { text: "✓ Rendering Interface", stage: 5 },
//   { text: "✓ Ready in 742ms", stage: 6 },
//   { text: "" },
//   { text: "Launching Portfolio...", stage: 7 },
// ];

// export function Terminal() {
//   const { setStage, bootDone, setBootDone } = useBootStage();

//   const [visible, setVisible] = useState(0);
//   const [dim, setDim] = useState(false);

//   const reduce = useReducedMotion();

//   useEffect(() => {
//     if (reduce) {
//       setStage(7);
//       setBootDone(true);
//       return;
//     }

//     const timers: number[] = [];

//     LINES.forEach((line, index) => {
//       timers.push(
//         window.setTimeout(() => {
//           setVisible(index + 1);

//           if (line.stage) {
//             setStage(line.stage);

//             if (line.stage >= 5) {
//               setDim(true);
//             }
//           }
//         }, index * STEP),
//       );
//     });

//     timers.push(
//       window.setTimeout(() => {
//         setBootDone(true);
//       }, LINES.length * STEP + 1200),
//     );

//     return () => timers.forEach(clearTimeout);
//   }, [reduce, setStage, setBootDone]);

//   const skip = () => {
//     setStage(7);
//     setBootDone(true);
//   };

//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         skip();
//       }
//     };

//     window.addEventListener("keydown", onKey);

//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   return (
//     <AnimatePresence>
//       {!bootDone && (
//         <motion.div
//           key="boot"
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 1 }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           onClick={skip}
//           className="fixed inset-0 z-50 flex items-center justify-center bg-[#050608] cursor-pointer"
//         >
//           <div className="w-full max-w-3xl px-8 font-mono text-[17px] leading-9 text-white">
//             {LINES.slice(0, visible).map((line, i) => (
//               <motion.div
//                 key={i}
//                 initial={{
//                   opacity: 0,
//                   y: 8,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.35,
//                   ease: "easeOut",
//                 }}
//                 className={
//                   line.text.startsWith("✓")
//                     ? "text-[#66FF99]"
//                     : line.text.startsWith(">")
//                     ? "text-gray-300"
//                     : line.text.startsWith("Launching")
//                     ? "text-violet-300"
//                     : "text-white"
//                 }
//               >
//                 {line.text || "\u00A0"}
//               </motion.div>
//             ))}

//             <motion.span
//               animate={{
//                 opacity: [1, 0, 1],
//               }}
//               transition={{
//                 duration:2,
//                 repeat: Infinity,
//               }}
//               className="ml-1 inline-block h-5 w-[2px] bg-white align-middle"
//             />
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { useBootStage } from "./BootStageProvider";

const STEP = 700; // Time between each line (ms)

const LINES = [
  { text: "Vikas-Dayma@portfolio %" },
  { text: "" },
  { text: "npm run dev" },
  { text: "" },
  { text: "> Starting Development Server..." },
  { text: "✓ Loading React", stage: 1 },
  { text: "✓ Loading Components", stage: 2 },
  { text: "✓ Initializing Animations", stage: 3 },
  { text: "✓ Preparing Experience", stage: 4 },
  { text: "✓ Rendering Interface", stage: 5 },
  { text: "✓ Ready in 742ms", stage: 6 },
  { text: "" },
  { text: "Launching Portfolio...", stage: 7 },
];

export function Terminal() {
  const { setStage, bootDone, setBootDone } = useBootStage();

  const [visible, setVisible] = useState(0);
  const [dim, setDim] = useState(false);

  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setStage(7);
      setBootDone(true);
      return;
    }

    const timers: number[] = [];

    LINES.forEach((line, index) => {
      timers.push(
        window.setTimeout(() => {
          setVisible(index + 1);

          if (line.stage) {
            setStage(line.stage);

            if (line.stage >= 5) {
              setDim(true);
            }
          }
        }, index * STEP),
      );
    });

    timers.push(
      window.setTimeout(() => {
        setBootDone(true);
      }, LINES.length * STEP + 1200),
    );

    return () => timers.forEach(clearTimeout);
  }, [reduce, setStage, setBootDone]);

  const skip = () => {
    setStage(7);
    setBootDone(true);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        skip();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const currentStage = LINES.slice(0, visible).reduce(
    (acc, l) => l.stage ?? acc,
    0,
  );
  const progress = Math.min(100, Math.round((currentStage / 7) * 100));

  return (
    <AnimatePresence>
      {!bootDone && (
        <motion.div
          key="boot"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: "brightness(2)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onClick={skip}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#050608] cursor-pointer"
        >
          {/* background grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(#c7f547 1px, transparent 1px), linear-gradient(90deg, #c7f547 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* radial glow behind terminal */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, #7c5cfc 0%, #c7f547 40%, transparent 70%)",
            }}
          />

          {/* scanline sweep */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="scanline absolute left-0 h-32 w-full bg-gradient-to-b from-transparent via-[#c7f547]/[0.06] to-transparent" />
          </div>

          {/* CRT vignette */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              boxShadow: "inset 0 0 220px 60px rgba(0,0,0,0.85)",
            }}
          />

          {/* HUD corner labels */}
          <div className="pointer-events-none absolute left-6 top-6 font-mono text-[10px] tracking-[0.25em] text-[#c7f547]/70">
            SYSTEM BOOT
          </div>
          <div className="pointer-events-none absolute right-6 top-6 font-mono text-[10px] tracking-[0.25em] text-[#7c5cfc]/70">
            v1.0.0
          </div>
          <div className="pointer-events-none absolute bottom-6 right-6 font-mono text-[10px] tracking-[0.25em] text-[#8a8a85]">
            [ESC] TO SKIP
          </div>

          {/* terminal panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full max-w-3xl px-10 py-9"
          >
            {/* corner brackets */}
            <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-[#c7f547]" />
            <span className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-[#c7f547]" />
            <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-[#c7f547]" />
            <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[#c7f547]" />

            <div
              className="border border-[#232323]/80 bg-[#0a0b0d]/90 px-8 py-8 backdrop-blur-sm"
              style={{ boxShadow: "0 0 60px -10px rgba(199,245,71,0.15)" }}
            >
              <div className="font-mono text-[16px] leading-9 text-white sm:text-[17px]">
                {LINES.slice(0, visible).map((line, i) => {
                  const isCheck = line.text.startsWith("✓");
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={
                        isCheck
                          ? { opacity: [0, 1, 0.7, 1], x: [0, -2, 2, 0], y: 0 }
                          : { opacity: 1, y: 0 }
                      }
                      transition={{ duration: isCheck ? 0.4 : 0.35, ease: "easeOut" }}
                      className={
                        isCheck
                          ? "text-[#66FF99] [text-shadow:0_0_8px_rgba(102,255,153,0.5)]"
                          : line.text.startsWith(">")
                          ? "text-gray-300"
                          : line.text.startsWith("Launching")
                          ? "text-violet-300 [text-shadow:0_0_10px_rgba(124,92,252,0.6)]"
                          : "text-white"
                      }
                    >
                      {line.text || "\u00A0"}
                    </motion.div>
                  );
                })}

                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="ml-1 inline-block h-5 w-[2px] bg-white align-middle [box-shadow:0_0_6px_rgba(255,255,255,0.8)]"
                />
              </div>

              {/* progress bar */}
              <div className="mt-8 flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#8a8a85]">
                  LOAD
                </span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#1a1a1a]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#c7f547] to-[#7c5cfc]"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ boxShadow: "0 0 10px rgba(199,245,71,0.6)" }}
                  />
                </div>
                <span className="font-mono text-[11px] tabular-nums text-[#c7f547]">
                  {progress}%
                </span>
              </div>
            </div>
          </motion.div>

          <style jsx>{`
            .scanline {
              animation: scan 3.2s linear infinite;
              top: -128px;
            }
            @keyframes scan {
              0% {
                transform: translateY(0);
              }
              100% {
                transform: translateY(calc(100vh + 128px));
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}