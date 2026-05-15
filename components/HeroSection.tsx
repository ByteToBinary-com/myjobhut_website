"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Search } from "lucide-react";
import Image from "next/image";

const metrics = [
  ["72h", "shortlist turnaround"],
  ["5+", "core hiring services"],
  ["100%", "static, fast experience"]
];

export function HeroSection() {
  return (
    <section className="hero-grid overflow-hidden bg-slate-50">
      <div className="section-shell grid min-h-[calc(100vh-64px)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-3 py-1.5 text-sm font-semibold text-teal-800 shadow-sm">
            <Search size={16} aria-hidden="true" />
            Recruitment agency for focused hiring
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Reliable job placement services and hiring solutions for growing teams.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            MyJobhut helps employers build stronger talent pipelines and supports candidates with professional career guidance, staffing solutions, and placement support.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-teal-800"
            >
              Contact Us <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-800"
            >
              Explore Services
            </a>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
            {metrics.map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
                <div className="text-2xl font-bold text-slate-950">{value}</div>
                <div className="mt-1">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[460px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-x-8 top-8 h-72 rounded-[2rem] bg-amber-300/35 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-slate-950/12">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                alt="Recruitment consultants discussing hiring plans in a professional office"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-5 left-4 right-4 rounded-2xl border border-white/80 bg-white/92 p-4 shadow-xl backdrop-blur sm:left-8 sm:right-auto sm:w-80">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 text-teal-700" size={22} aria-hidden="true" />
              <div>
                <p className="font-semibold text-slate-950">Trusted recruitment partner</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Structured hiring support for employers and career-focused placement support for candidates.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
