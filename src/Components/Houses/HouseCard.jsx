import { motion } from "framer-motion";

function HouseCard({ house, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
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
        duration: 0.5,
        delay: index * 0.06,
      }}
      whileHover={{
        y: -5,
      }}
      className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-400/30"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-lg font-black text-cyan-300">
          {house.symbol}
        </div>

        <span className="text-xs font-black tracking-[0.2em] text-slate-600">
          {house.number}
        </span>
      </div>

      <h3 className="mt-7 text-xl font-black text-white">
        {house.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {house.description}
      </p>

      <div className="mt-5 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-400/70">
        {house.campus} Campus
      </div>
    </motion.div>
  );
}

export default HouseCard;