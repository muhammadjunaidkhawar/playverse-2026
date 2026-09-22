import { useEffect, useState } from "react";
import {
  FaBars,
  FaXmark,
  FaArrowRight,
} from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

import { NAV_LINKS } from "../utils/constants";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#05080d]/85 shadow-2xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-shell">
        <div className="flex h-20 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-lg">
              <img
                src="/logo.png"
                alt="Mannabi PlayVerse"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <div className="text-sm font-black tracking-[0.18em] text-white">
                PLAYVERSE
              </div>

              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                2026 Championship
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-cyan-300"
                      : "text-slate-400 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/registration"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Registration
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            isOpen
              ? "max-h-[500px] pb-5 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="rounded-2xl border border-white/10 bg-[#0a111b]/95 p-3 backdrop-blur-xl">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-semibold ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/registration"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-black text-slate-950"
            >
              Registration
              <FaArrowRight />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;