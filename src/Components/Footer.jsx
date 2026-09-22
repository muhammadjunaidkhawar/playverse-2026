import {
  FaArrowUp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-[#03060a]">
      <div className="container-shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-xl bg-white p-1">
                <img
                  src="/logo.png"
                  alt="Mannabi PlayVerse"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <div className="font-black tracking-[0.2em]">
                  PLAYVERSE
                </div>

                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  2026
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
              Mannabi Inter-Campus Championship connecting
              Islamabad and Sialkot through sport, teamwork,
              discipline and competition.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Explore
            </h3>

            <div className="mt-5 space-y-3">
              <Link
                to="/sports"
                className="block text-sm text-slate-500 transition hover:text-cyan-300"
              >
                Sports
              </Link>

              <Link
                to="/championship"
                className="block text-sm text-slate-500 transition hover:text-cyan-300"
              >
                Championship
              </Link>

              <Link
                to="/rules"
                className="block text-sm text-slate-500 transition hover:text-cyan-300"
              >
                Rules
              </Link>

              <Link
                to="/schedule"
                className="block text-sm text-slate-500 transition hover:text-cyan-300"
              >
                Schedule
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Connect
            </h3>

            <p className="mt-5 text-sm text-slate-500">
              Follow the championship for announcements,
              results and media updates.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                <FaFacebookF />
              </a>

              <button
                type="button"
                onClick={scrollTop}
                aria-label="Back to top"
                className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                <FaArrowUp />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Mannabi PlayVerse. All rights reserved.
          </p>

          <p>
            Two Campuses. One Championship.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;