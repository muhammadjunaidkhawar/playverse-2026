import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6 pt-20">
      <div className="text-center">
        <div className="text-8xl font-black text-cyan-400/20">
          404
        </div>

        <h1 className="mt-3 text-3xl font-black">
          Page not found
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
        >
          <FaArrowLeft />
          Back home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;