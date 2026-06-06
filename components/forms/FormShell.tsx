"use client";

import { FormEvent, ReactNode, useState } from "react";
import type { FormStatus } from "@/types/content";

type FormShellProps = {
  title: string;
  children: ReactNode;
  successMessage: string;
  errorMessage?: string;
  submitLabel?: string;
  formName: string;
  action?: string;
  method?: "GET" | "POST";
  hiddenFields?: Record<string, string>;
};

export function FormShell({
  title,
  children,
  successMessage,
  errorMessage = "Sorry, there was a problem submitting the form. Please try again.",
  submitLabel = "Submit",
  formName,
  action,
  method = "POST",
  hiddenFields
}: FormShellProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);

    if (action) {
      setStatus("submitting");
      try {
        const response = await fetch(action, {
          method,
          body: formData
        });
        const result = await response.json();

        if (!response.ok || !result.success) {
          setStatus("error");
          return;
        }

        setStatus("success");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    const data = Object.fromEntries(formData.entries());
    console.log(`${formName} submission`, data);
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-[2rem] border border-[#BFDBFE] bg-white p-6 text-center shadow-xl shadow-slate-950/8 sm:p-8">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#3673B7] text-xl font-bold text-white">
          ✓
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-slate-950">Thank you</h2>
        <p className="mt-3 text-base leading-7 text-slate-600">{successMessage}</p>
      </div>
    );
  }

  return (
    <form action={action} method={method} onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/8 sm:p-8">
      {hiddenFields
        ? Object.entries(hiddenFields).map(([name, value]) => <input key={name} type="hidden" name={name} value={value} />)
        : null}
      <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
      <div className="mt-6 grid gap-5">{children}</div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring mt-6 inline-flex w-full justify-center rounded-full bg-[#3673B7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#3673B7]/20 transition hover:-translate-y-0.5 hover:bg-[#1D4ED8] sm:w-auto"
      >
        {status === "submitting" ? "Submitting..." : submitLabel}
      </button>
      <p className="mt-4 min-h-6 text-sm font-medium text-[#3673B7]" aria-live="polite">
        {status === "error" ? errorMessage : ""}
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
