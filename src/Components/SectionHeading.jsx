import { motion } from "framer-motion";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <motion.div
      className={`max-w-2xl ${alignment}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
    >
      {eyebrow && (
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-cyan-400" />

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;