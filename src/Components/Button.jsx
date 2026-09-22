import { ArrowUpRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}) {
  const baseClasses =
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50";

  const variants = {
    primary:
      "bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:-translate-y-0.5 shadow-[0_12px_35px_rgba(34,211,238,0.18)]",

    secondary:
      "border border-white/10 bg-white/[0.04] text-white hover:border-cyan-400/40 hover:bg-cyan-400/10",

    ghost:
      "text-slate-300 hover:text-cyan-300",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {variant !== "ghost" && (
        <ArrowUpRight className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default Button;