import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-grid absolute inset-0 opacity-50" />

      <motion.div
        className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-24 top-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#05080d] to-transparent" />
    </div>
  );
}

export default AnimatedBackground;