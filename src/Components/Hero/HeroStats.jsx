import { motion } from "framer-motion";

import { championshipHighlights } from "../../data/championship";

function HeroStats() {
  return (
    <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
      {championshipHighlights.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8 + index * 0.12,
            duration: 0.5,
          }}
          className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-md"
        >
          <div className="text-2xl font-black text-cyan-300">
            {item.value}
          </div>

          <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default HeroStats;