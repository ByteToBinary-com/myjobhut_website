import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about MyJobHut, a modern recruitment agency in India built for better hiring support and employer services."
};

const values = ["Trust", "Clarity", "Speed", "Candidate respect", "Employer focus", "Long-term fit"];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About MyJobHut"
        title="We exist to make hiring clearer and recruitment more focused."
        description="MyJobHut brings recruitment agency discipline and practical hiring support together for employers, recruiters, and growing companies."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Recruitment agency team collaborating around a conference table"
      />
      <section className="bg-white py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading align="left" eyebrow="Our story" title="Built for practical hiring outcomes" description="Hiring can become slow when role clarity, screening, and communication are disconnected. MyJobHut exists to bring these pieces together with a professional, candidate-aware process." />
          </div>
          <div data-reveal="right" className="rounded-3xl bg-[#F0EEF7] p-6">
            <h2 className="text-xl font-semibold text-slate-950">Mission</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Help people find meaningful work and help employers build reliable teams through transparent recruitment support.</p>
            <h2 className="mt-6 text-xl font-semibold text-slate-950">Vision</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Become a trusted recruitment agency and employer hiring services partner across India.</p>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Team" title="Recruitment specialists, career guides, and hiring coordinators" description="Use this section for team profiles, leadership introductions, or consultant highlights as the company grows." />
          <div className="reveal-grid mt-10 grid gap-5 md:grid-cols-3">
            {["Recruitment Lead", "Employer Success", "Career Advisor"].map((role) => (
              <div key={role} data-reveal className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#DED9EA] text-2xl font-bold text-[#69608F]">{role[0]}</div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{role}</h3>
                <p className="mt-2 text-sm text-slate-600">Team profile placeholder</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Values" title="The standards behind our work" />
          <div className="reveal-grid mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value} data-reveal className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">{value}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">A simple operating principle that keeps recruitment professional, transparent, and outcome-oriented.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Want to work with MyJobHut?" description="Contact us for hiring support, recruitment consulting, and candidate screening." />
    </main>
  );
}
