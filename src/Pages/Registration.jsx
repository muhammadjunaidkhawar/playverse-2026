import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

import SectionHeading from "../Components/SectionHeading";
import RegistrationForm from "../Components/Registration/RegistrationForm";

function Registration() {
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

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="PlayVerse Registration"
                title="Step into the championship."
                description="Complete the frontend registration interface using the information required by the championship proposal."
              />

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-6">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                  Before registering
                </h3>

                <ul className="mt-5 space-y-4">
                  {[
                    "Use your official full name.",
                    "Provide your student ID.",
                    "Select your campus and house.",
                    "Choose your sport and category.",
                    "Remember the maximum two-event rule.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-slate-500"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <RegistrationForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registration;