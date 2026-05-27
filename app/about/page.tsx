import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about MyJobHut, a modern recruitment agency in India built for better hiring support and employer services."
};

const values = ["Trust", "Clarity", "Speed", "Candidate respect", "Employer focus", "Long-term fit"];

const team = [
  {
    name: "Amit Verma",
    role: "Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Nisha Kapoor",
    role: "Recruitment Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Rohit Bansal",
    role: "Employer Success Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  }
];

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
          <SectionHeading eyebrow="Team" title="Meet our recruitment leadership and support team" description="Real team photographs and director profile for stronger trust and transparency." />
          <div className="reveal-grid mt-10 grid gap-5 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} data-reveal className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="relative h-72 w-full">
                  <Image src={member.image} alt={`${member.name} - ${member.role}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-slate-950">{member.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{member.role}</p>
                </div>
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
