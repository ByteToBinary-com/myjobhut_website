"use client";

import { BriefcaseBusiness, Building2, Compass, Headset, UsersRound } from "lucide-react";
import { motion } from "framer-motion";
import type { IconMap, Service } from "@/types/content";

const icons: IconMap = {
  briefcase: BriefcaseBusiness,
  users: UsersRound,
  headset: Headset,
  building: Building2,
  compass: Compass
};

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = icons[service.icon];

  return (
    <motion.article
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-950/8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
    </motion.article>
  );
}
