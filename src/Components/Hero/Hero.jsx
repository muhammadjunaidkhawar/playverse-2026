import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaArrowRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

import AnimatedBackground from "../AnimatedBackground";
import HeroStats from "./HeroStats";

function Hero() {
  return (
    <section className="noise relative flex min-h-[760px] items-center overflow-hidden pt-24">
      <AnimatedBackground />

      <div className="container-shell relative z-10 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-cyan-400" />

              <span className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
                Mannabi Inter-Campus Championship
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-8xl"
            >
              PLAY
              <span className="text-gradient">VERSE</span>

              <span className="mt-3 block text-xl font-bold tracking-normal text-slate-400 sm:text-2xl lg:text-3xl">
                2026
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg"
            >
              Two campuses. Nine sports. One championship.
              A competitive platform built around teamwork,
              leadership, discipline and the spirit of sport.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="/sports"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Explore Sports
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/championship"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
              >
                Championship Journey
              </Link>
            </motion.div>

            <HeroStats />
          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              rotate: 2,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="relative mx-auto w-full max-w-md"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/[0.03] to-blue-600/10 p-6 shadow-2xl">
                <div className="grid-pattern absolute inset-0 opacity-30" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">
                      Championship
                    </span>

                    <span className="text-xs font-bold text-slate-500">
                      2026
                    </span>
                  </div>

                  <div className="flex min-h-[390px] items-center justify-center py-12">
                    <div className="relative">
                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 24,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute -inset-16 rounded-full border border-dashed border-cyan-400/20"
                      />

                      <motion.div
                        animate={{
                          rotate: -360,
                        }}
                        transition={{
                          duration: 18,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute -inset-8 rounded-full border border-dashed border-blue-500/20"
                      />

                      <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-white/10 bg-[#070c13] p-7 shadow-[0_0_80px_rgba(34,211,238,0.12)] sm:h-60 sm:w-60">
                        <img
                          src="/logo.png"
                          alt="Mannabi PlayVerse logo"
                          className="w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-xs uppercase tracking-widest text-slate-500">
                        Campus
                      </div>

                      <div className="mt-1 text-sm font-bold">
                        Islamabad
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="text-xs uppercase tracking-widest text-slate-500">
                        Campus
                      </div>

                      <div className="mt-1 text-sm font-bold">
                        Sialkot
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.4,
          }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition hover:text-cyan-300 sm:flex"
        >
          <span className="text-[9px] font-black uppercase tracking-[0.3em]">
            Scroll
          </span>

          <FaArrowDown className="animate-bounce text-xs" />
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;