"use client";

import { Mail, MapPin, Phone, Send, Smartphone } from "lucide-react";
import { FormEvent, useState } from "react";
import { siteSeo } from "@/data/seo";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";

export function ContactSection() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setStatus("Please complete the required fields.");
      return;
    }
    const formData = new FormData(form);
    const subject = encodeURIComponent(`MyJobhut enquiry from ${formData.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nPhone: ${formData.get("phone")}\nMessage: ${formData.get("message")}`
    );
    window.location.href = `mailto:${siteSeo.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email app with the enquiry details.");
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionReveal>
          <SectionHeading
            eyebrow="Contact us"
            title="Discuss hiring support or career opportunities"
            description="Reach MyJobhut for recruitment agency support, job placement services, staffing solutions, or candidate career guidance."
            align="left"
          />
          <div className="mt-8 grid gap-4">
            <a
              href={siteSeo.whatsappHref}
              className="focus-ring flex items-center gap-4 rounded-3xl border border-teal-200 bg-teal-50 p-5 text-teal-900 transition hover:-translate-y-1 hover:bg-teal-100"
              aria-label="Contact MyJobhut on WhatsApp"
            >
              <Smartphone size={24} aria-hidden="true" />
              <span>
                <span className="block font-semibold">WhatsApp</span>
                <span className="mt-1 block text-sm">{siteSeo.phone}</span>
              </span>
            </a>
            <a
              href={`tel:${siteSeo.phoneHref}`}
              className="focus-ring flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-slate-950/8"
            >
              <Phone size={24} className="text-teal-700" aria-hidden="true" />
              <span>
                <span className="block font-semibold">Call</span>
                <span className="mt-1 block text-sm">{siteSeo.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${siteSeo.email}`}
              className="focus-ring flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-slate-950/8"
            >
              <Mail size={24} className="text-teal-700" aria-hidden="true" />
              <span>
                <span className="block font-semibold">Email</span>
                <span className="mt-1 block text-sm">{siteSeo.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900">
              <MapPin size={24} className="text-teal-700" aria-hidden="true" />
              <span>
                <span className="block font-semibold">Address</span>
                <span className="mt-1 block text-sm">{siteSeo.address}</span>
              </span>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <form
            className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-xl shadow-slate-950/6 sm:p-8"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-800">
                Full name
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="focus-ring rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-normal text-slate-950"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-800">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="focus-ring rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-normal text-slate-950"
                  placeholder="you@example.com"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">
                Phone
                <input
                  required
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  pattern="[0-9+\-\s()]{7,}"
                  className="focus-ring rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-normal text-slate-950"
                  placeholder="+91 98765 43210"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="focus-ring resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-normal text-slate-950"
                  placeholder="Tell us about your hiring requirement or career support need."
                />
              </label>
            </div>
            <button
              type="submit"
              className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-slate-950/12 transition hover:-translate-y-0.5 hover:bg-teal-800 sm:w-auto"
            >
              Send Enquiry <Send size={18} aria-hidden="true" />
            </button>
            <p className="mt-4 min-h-6 text-sm text-slate-600" aria-live="polite">
              {status}
            </p>
          </form>
        </MotionReveal>
      </div>
    </section>
  );
}
