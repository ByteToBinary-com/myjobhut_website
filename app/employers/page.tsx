import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { EmployerForm } from "@/components/forms/EmployerForm";
import { processSteps } from "@/data/services";

export const metadata: Metadata = {
  title: "Employers",
  description: "Hire qualified candidates faster with My Job Hut employer hiring services, recruitment consulting, and candidate screening support."
};

export default function EmployersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Employers"
        title="Hire qualified candidates faster with structured recruitment support."
        description="Share role requirements, screen candidates, and coordinate interviews with a recruitment partner built for practical hiring outcomes."
        primaryCta={{ label: "Request Hiring Support", href: "#employer-form" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
        image="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Employer and recruiter discussing hiring requirements in a professional meeting"
      />
      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Employer benefits" title="Hiring solutions that reduce screening load" />
          <div className="reveal-grid mt-10 grid gap-5 md:grid-cols-3">
            {["Relevant shortlists", "Faster coordination", "Better role positioning"].map((benefit) => (
              <article key={benefit} data-reveal className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-950">{benefit}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">Practical support designed to improve quality, communication, and hiring speed.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Process" title="A clear hiring workflow" />
            <div className="reveal-grid mt-8 grid gap-4">
              {processSteps.map((step, index) => (
                <div key={step.title} data-reveal className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-sm font-bold text-[#69608F]">Step {index + 1}</p>
                  <h3 className="mt-2 font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div id="employer-form" data-reveal="right">
            <EmployerForm />
          </div>
        </div>
      </section>
    </main>
  );
}
