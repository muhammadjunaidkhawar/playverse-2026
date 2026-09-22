import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function SportCard({ sport, index = 0 }) {
  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -7,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.035]"
    >
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/5 blur-3xl transition duration-500 group-hover:bg-cyan-400/10" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <span className="text-xs font-black tracking-[0.2em] text-slate-600">
            {sport.number}
          </span>

          <div className="text-3xl grayscale transition duration-300 group-hover:grayscale-0">
            {sport.icon}
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full border border-cyan-400/15 bg-cyan-400/5 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-cyan-300">
              {sport.format}
            </span>

            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
              {sport.category}
            </span>
          </div>

          <h3 className="text-2xl font-black text-white">
            {sport.name}
          </h3>

          <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
            {sport.description}
          </p>
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-xs font-bold text-slate-600 transition group-hover:text-slate-400">
            View details
          </span>

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-500 transition group-hover:border-cyan-400/30 group-hover:text-cyan-300">
            <FaArrowUpRightFromSquare className="text-[10px]" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default SportCard;