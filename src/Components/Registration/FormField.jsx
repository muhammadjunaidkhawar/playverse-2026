function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  options = [],
}) {
  const commonClasses =
    "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-cyan-400/[0.03]";

  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
        {label}
        {required && (
          <span className="ml-1 text-cyan-400">*</span>
        )}
      </span>

      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={commonClasses}
        >
          <option value="" className="bg-[#0a111b]">
            Select...
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-[#0a111b]"
            >
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={commonClasses}
        />
      )}
    </label>
  );
}

export default FormField;