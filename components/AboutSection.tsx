import Image from "next/image";
import { BarChart3, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";

const reasons = [
  {
    title: "Why Choose MyJobhut",
    copy: "A focused recruitment company with clear screening, practical role alignment, and communication that respects every stakeholder.",
    icon: ShieldCheck
  },
  {
    title: "Hiring Support",
    copy: "Shortlists are shaped around role requirements, availability, compensation fit, and employer expectations.",
    icon: Handshake
  },
  {
    title: "Career Opportunities",
    copy: "Candidates receive career guidance that improves readiness and helps them evaluate opportunities with confidence.",
    icon: Sparkles
  },
  {
    title: "Trusted Recruitment Partner",
    copy: "Our process supports repeat hiring needs through dependable staffing solutions and relationship-led service.",
    icon: BarChart3
  }
];

export function AboutSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24" aria-labelledby="why-heading">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <MotionReveal className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-slate-950/10">
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=80"
                alt="Hiring team reviewing candidate profiles during a recruitment meeting"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
            </div>
          </div>
        </MotionReveal>

        <div>
          <SectionHeading
            eyebrow="Recruitment partner"
            title="A cleaner hiring experience from first conversation to final shortlist"
            description="MyJobhut brings structure to recruitment so employers get qualified candidates and job seekers get guidance that improves decision quality."
            align="left"
          />
          <div id="why-heading" className="sr-only">
            Why choose MyJobhut
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <MotionReveal
                  key={reason.title}
                  delay={index * 0.05}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <Icon className="text-teal-700" size={24} aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{reason.copy}</p>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
