import { motion } from "motion/react";

export function FloatingElements() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          x: [0, 28, 0],
          y: [0, -22, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-24 top-16 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(118,151,255,0.22),transparent_62%)] blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          x: [0, -24, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 top-8 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(213,175,107,0.18),transparent_64%)] blur-3xl"
      />

      <motion.div
        animate={{ rotate: [0, 10, 0] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[8%] top-[22%] h-56 w-56 rounded-full border border-white/8"
      />

      <motion.div
        animate={{ rotate: [0, -12, 0] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[10%] top-[18%] h-72 w-72 rounded-full border border-[#d5ae67]/14"
      />

      <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scaleX: [0.95, 1.03, 0.95],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 right-0 top-[16rem] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scaleX: [0.9, 1.05, 0.9],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[18rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d5ae67]/40 to-transparent"
      />

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[12%] left-[12%] h-32 w-32 rounded-full border border-white/8"
      />

      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[10%] right-[16%] h-44 w-44 rounded-full border border-[#9fc3ff]/12"
      />
    </div>
  );
}
