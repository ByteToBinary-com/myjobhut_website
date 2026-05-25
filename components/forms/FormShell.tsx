"use client";

import { FormEvent, ReactNode, useState } from "react";
import type { FormStatus } from "@/types/content";

type FormShellProps = {
  title: string;
  children: ReactNode;
  successMessage: string;
  submitLabel?: string;
  formName: string;
};

export function FormShell({ title, children, successMessage, submitLabel = "Submit", formName }: FormShellProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    console.log(`${formName} submission`, data);
    setStatus("success");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/8 sm:p-8">
      <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
      <div className="mt-6 grid gap-5">{children}</div>
      <button
        type="submit"
        className="focus-ring mt-6 inline-flex w-full justify-center rounded-full bg-[#69608F] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#69608F]/20 transition hover:-translate-y-0.5 hover:bg-[#5A527C] sm:w-auto"
      >
        {submitLabel}
      </button>
      <p className="mt-4 min-h-6 text-sm font-medium text-[#69608F]" aria-live="polite">
        {status === "success" ? successMessage : ""}
      </p>
    </form>
  );
}

export function TextInput({
  label,
  name,
  type = "text",
  required = true,
  placeholder
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-800">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="focus-ring rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-normal text-slate-950"
      />
    </label>
  );
}

export function TextArea({ label, name, placeholder }: { label: string; name: string; placeholder?: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-800">
      {label}
      <textarea
        name={name}
        required
        rows={5}
        placeholder={placeholder}
        className="focus-ring resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-normal text-slate-950"
      />
    </label>
  );
}

export function SelectInput({
  label,
  name,
  options
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-800">
      {label}
      <select
        name={name}
        required
        className="focus-ring rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-normal text-slate-950"
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
