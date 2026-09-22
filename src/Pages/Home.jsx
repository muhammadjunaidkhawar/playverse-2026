import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

import Hero from "../Components/Hero/Hero";
import SectionHeading from "../Components/SectionHeading";
import SportsGrid from "../Components/Sport/SportsGrid";
import CampusSection from "../Components/Campus/CampusSection";
import HouseGrid from "../Components/Houses/HouseGrid";
import ChampionshipTimeline from "../Components/Championship/ChampionshipTimeline";

import { sports } from "../Data/sports";
import { campuses } from "../Data/campuses";
import { houses } from "../Data/houses";
import { championshipStages } from "../data/championship";

function Home() {
  return (
    <>
      <Hero />

      <section
        id="about"
        className="section-pad border-y border-white/5"
      >
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <SectionHeading
              eyebrow="About PlayVerse"
              title="Built around the spirit of competition."
              description="PlayVerse creates a common sporting platform for students to compete, develop teamwork and strengthen relationships across campuses."
            />

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
              className="grid gap-4 sm:grid-cols-3"
            >
              {[
                {
                  title: "Compete",
                  text: "Structured competition across multiple sports.",
                },
                {
                  title: "Connect",
                  text: "Stronger interaction between campuses.",
                },
                {
                  title: "Lead",
                  text: "Teamwork, leadership and discipline.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.025] p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                    <FaCheck />
                  </div>

                  <h3 className="mt-5 text-lg font-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Sports"
              title="Nine ways to compete."
              description="Explore the sports and competition formats planned for PlayVerse 2026."
            />

            <Link
              to="/sports"
              className="group hidden shrink-0 items-center gap-3 text-sm font-bold text-cyan-300 sm:flex"
            >
              View all sports
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12">
            <SportsGrid sports={sports} />
          </div>

          <Link
            to="/sports"
            className="mt-6 flex items-center justify-center gap-2 rounded-full border border-white/10 py-3 text-sm font-bold text-slate-300 sm:hidden"
          >
            View all sports
            <FaArrowRight />
          </Link>
        </div>
      </section>

      <CampusSection campuses={campuses} />

      <section className="section-pad border-y border-white/5 bg-white/[0.015]">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <SectionHeading
              eyebrow="House System"
              title="Represent your house."
              description="The proposal establishes four houses at each campus. The current document provides the Islamabad house names; Sialkot names will be added when officially provided."
            />

            <div className="space-y-10">
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                    Islamabad
                  </h3>

                  <span className="text-xs text-slate-600">
                    4 houses listed
                  </span>
                </div>

                <HouseGrid
                  houses={houses.islamabad}
                  campusName="Islamabad"
                />
              </div>

              <div>
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                    Sialkot
                  </h3>
                </div>

                <HouseGrid
                  houses={houses.sialkot}
                  campusName="Sialkot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <SectionHeading
              eyebrow="Championship Journey"
              title="From campus competition to the grand stage."
              description="PlayVerse moves through campus championships before bringing qualified champions together for the Grand Inter-Campus Championship."
            />

            <ChampionshipTimeline stages={championshipStages} />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-transparent p-8 sm:p-12">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                  Ready for PlayVerse?
                </div>

                <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
                  Step onto the field. Represent your campus.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                  Explore the championship structure, sports and
                  participation information.
                </p>
              </div>

              <Link
                to="/registration"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
              >
                Registration
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;