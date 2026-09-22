import { motion } from "framer-motion";

function StageCard({ stage, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className="relative"
    >
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-9">
        <div className="flex items-start justify-between gap-5">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
              {stage.subtitle}
            </span>

            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              {stage.title}
            </h3>
          </div>

          <div className="text-4xl">
            {stage.icon}
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-500">
          {stage.description}
        </p>

        <div className="mt-7 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 text-xs font-black text-slate-950">
            {stage.number}
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

export default StageCard;