import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaShieldHalved,
} from "react-icons/fa6";

import SectionHeading from "../components/SectionHeading";
import { rules } from "../data/rules";

function Rules() {
  return (
    <div className="min-h-screen pt-28">
      <section className="section-pad">
        <div className="container-shell">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-cyan-300"
          >
            <FaArrowLeft />
            Back home
          </Link>

          <SectionHeading
            eyebrow="Competition Rules"
            title="Know the rules. Respect the game."
            description="Key participation and eligibility requirements from the PlayVerse championship proposal."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {rules.map((rule, index) => (
              <motion.article
                key={rule.number}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-400/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <FaShieldHalved />
                  </div>

                  <span className="text-xs font-black tracking-[0.2em] text-slate-600">
                    {rule.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-black text-white">
                  {rule.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {rule.description}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-amber-400/10 bg-amber-400/[0.025] p-6">
            <p className="text-sm leading-7 text-slate-500">
              Final competition regulations, scoring systems,
              tie-breakers, protest deadlines and detailed sport
              procedures are to be approved before final
              implementation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rules;