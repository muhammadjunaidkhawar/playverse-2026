import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarDays,
  FaClock,
} from "react-icons/fa6";

const schedule = [
  {
    day: "DAY 01",
    title: "Campus Championship",
    status: "Schedule to be announced",
  },
  {
    day: "DAY 02",
    title: "Campus Championship",
    status: "Schedule to be announced",
  },
  {
    day: "GRAND",
    title: "Grand Inter-Campus Championship",
    status: "Calendar to be announced",
  },
];

function Schedule() {
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

          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                Event Calendar
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              The schedule.
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
              The final timetable will be published after
              confirmation of player numbers, venues, match
              duration, officials and other operational
              requirements.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {schedule.map((item, index) => (
              <motion.div
                key={item.day}
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="group grid gap-5 rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:grid-cols-[120px_1fr_auto] sm:items-center"
              >
                <div className="text-sm font-black tracking-[0.2em] text-cyan-300">
                  {item.day}
                </div>

                <div>
                  <h2 className="text-xl font-black text-white">
                    {item.title}
                  </h2>

                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-600">
                    <FaClock />
                    {item.status}
                  </div>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-400/20">
                  <FaCalendarDays />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Schedule;