import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaLocationDot,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function CampusCard({ campus, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        x: index === 0 ? -30 : 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
      }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 sm:p-9"
    >
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/5 blur-3xl transition duration-500 group-hover:bg-cyan-400/10" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <span className="text-sm font-black tracking-[0.25em] text-slate-600">
            {campus.number}
          </span>

          <span className="rounded-full border border-cyan-400/15 bg-cyan-400/5 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-cyan-300">
            {campus.status}
          </span>
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <FaLocationDot className="text-cyan-400" />
            {campus.location}
          </div>

          <h3 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            {campus.name}
          </h3>

          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-500">
            {campus.description}
          </p>
        </div>

        <div className="mt-8">
          <Link
            to="/championship"
            className="group/link inline-flex items-center gap-3 text-sm font-bold text-slate-300 transition hover:text-cyan-300"
          >
            Explore campus championship
            <FaArrowRight className="transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default CampusCard;