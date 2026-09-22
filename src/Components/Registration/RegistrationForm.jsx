import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTriangleExclamation } from "react-icons/fa6";

import FormField from "./FormField";
import { sports } from "../../Data/sports";

const initialForm = {
  fullName: "",
  studentId: "",
  campus: "",
  house: "",
  sport: "",
  category: "",
  phone: "",
  email: "",
};

function RegistrationForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    window.scrollTo({
      top: document.getElementById("registration-form")?.offsetTop - 120,
      behavior: "smooth",
    });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/[0.04] p-8 text-center sm:p-12"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400 text-2xl text-slate-950">
          <FaCheck />
        </div>

        <h3 className="mt-6 text-2xl font-black text-white">
          Form completed
        </h3>

        <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-500">
          This is a frontend-only registration interface.
          No information has been stored or submitted to a
          server.
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm(initialForm);
          }}
          className="mt-7 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-400/30 hover:text-cyan-300"
        >
          Fill Again
        </button>
      </motion.div>
    );
  }

  return (
    <form
      id="registration-form"
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Full Name"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Enter full name"
          required
        />

        <FormField
          label="Student ID"
          name="studentId"
          value={form.studentId}
          onChange={handleChange}
          placeholder="Enter student ID"
          required
        />

        <FormField
          label="Campus"
          name="campus"
          type="select"
          value={form.campus}
          onChange={handleChange}
          options={[
            "Islamabad",
            "Sialkot",
          ]}
          required
        />

        <FormField
          label="House"
          name="house"
          value={form.house}
          onChange={handleChange}
          placeholder="Enter house"
          required
        />

        <FormField
          label="Sport"
          name="sport"
          type="select"
          value={form.sport}
          onChange={handleChange}
          options={sports.map((sport) => sport.name)}
          required
        />

        <FormField
          label="Category"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="e.g. Men's Singles"
          required
        />

        <FormField
          label="Phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="03XX XXXXXXX"
          required
        />

        <FormField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="name@example.com"
          required
        />
      </div>

      <div className="mt-6 rounded-2xl border border-amber-400/10 bg-amber-400/[0.03] p-4">
        <div className="flex gap-3">
          <FaTriangleExclamation className="mt-0.5 shrink-0 text-amber-300" />

          <p className="text-xs leading-6 text-slate-500">
            Frontend demo only: this form does not store,
            email or transmit registration data.
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-2xl bg-cyan-400 px-5 py-4 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Complete Registration Form
      </button>
    </form>
  );
}

export default RegistrationForm;