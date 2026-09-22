import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

import SectionHeading from "../components/SectionHeading";
import SportsGrid from "../components/Sport/SportsGrid";
import { sports } from "../data/sports";

function Sports() {
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
            eyebrow="PlayVerse 2026"
            title="The sports."
            description="Nine sports form the PlayVerse 2026 competition programme across the campus championship structure."
          />

          <div className="mt-12">
            <SportsGrid sports={sports} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sports;