"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/SectionHeading";

export function TestimonialSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardId = useMemo(() => "testimonial-card", []);

  function scroll(direction: "left" | "right") {
    const track = trackRef.current;
    if (!track) return;
    const distance = Math.min(track.clientWidth, 420);
    track.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" });
  }

  return (
    <section id="testimonials" className="bg-slate-50 py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Testimonials"
            title="What job seekers and employers say"
            description="Realistic feedback from candidates and hiring teams who value clear communication, stronger shortlists, and dependable recruitment support."
            align="left"
          />
          <div className="flex gap-2" aria-label="Testimonial controls">
            <button
              type="button"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 transition hover:border-teal-300 hover:text-teal-700"
              aria-label="Previous testimonials"
              onClick={() => scroll("left")}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 transition hover:border-teal-300 hover:text-teal-700"
              aria-label="Next testimonials"
              onClick={() => scroll("right")}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Testimonials slider"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              id={`${cardId}-${index}`}
              key={testimonial.name}
              className="min-w-[86%] snap-start rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:min-w-[420px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-800">
                  {testimonial.type}
                </span>
                <Quote className="text-teal-700" size={24} aria-hidden="true" />
              </div>
              <blockquote className="mt-6 text-lg leading-8 text-slate-800">"{testimonial.quote}"</blockquote>
              <div className="mt-8 border-t border-slate-200 pt-5">
                <p className="font-semibold text-slate-950">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
