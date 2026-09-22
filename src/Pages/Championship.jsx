import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowDown } from "react-icons/fa6";

import SectionHeading from "../components/SectionHeading";
import ChampionshipTimeline from "../components/Championship/ChampionshipTimeline";
import { championshipStages } from "../data/championship";

function Championship() {
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

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading
              eyebrow="Championship Structure"
              title="Two stages. One destination."
              description="The championship begins at campus level and progresses to the Grand Inter-Campus Championship."
            />

            <div className="grid grid-cols-2 gap-3">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-6"
              >
                <div className="text-3xl font-black text-cyan-300">
                  01
                </div>

                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                  Campus Stage
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.1,
                }}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-6"
              >
                <div className="text-3xl font-black text-cyan-300">
                  02
                </div>

                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                  Grand Stage
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-16">
            <ChampionshipTimeline
              stages={championshipStages}
            />
          </div>

          <div className="mx-auto mt-16 max-w-3xl text-center">
            <FaArrowDown className="mx-auto animate-bounce text-cyan-400" />

            <h2 className="mt-6 text-2xl font-black sm:text-3xl">
              Grand Inter-Campus Championship
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              The proposal specifies Islamabad as the host
              location for the Grand Inter-Campus Championship.
              The final event calendar and detailed competition
              regulations remain subject to approval.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Championship;