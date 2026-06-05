import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Jobhut Consultancy, a recruitment and staffing consultancy established on 8 March 2022 and serving employers and job seekers across India."
};

const industries = [
  "Pharmaceutical",
  "Manufacturing",
  "Power & Energy",
  "FMCG",
  "Steel",
  "Engineering",
  "Automotive",
  "Real Estate",
  "And many other sectors"
];

const achievements = [
  "1500+ Successful Placements",
  "Pan India Recruitment Services",
  "Trusted by companies across various industries",
  "100+ Clients Served"
];

const values = ["Reliability", "Efficiency", "Professional service", "Candidate respect", "Employer focus", "Career growth"];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Jobhut Consultancy"
        title="Connecting talented professionals with top organizations across India."
        description="Jobhut Consultancy is a leading recruitment and staffing consultancy established on 8 March 2022, dedicated to helping businesses grow and careers flourish."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Recruitment agency team collaborating around a conference table"
      />

      <section className="bg-white py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="A recruitment partner built for dependable hiring outcomes"
              description="Since 8 March 2022, Jobhut Consultancy has supported employers and candidates with reliable, efficient, and professional recruitment solutions. We focus on practical role understanding, targeted sourcing, candidate communication, and timely coordination across the hiring journey."
            />
          </div>
          <div data-reveal="right" className="rounded-3xl bg-[#EFF6FF] p-6">
            <h2 className="text-xl font-semibold text-slate-950">Our Mission</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              To bridge the gap between employers and job seekers by providing reliable, efficient, and professional recruitment solutions that help businesses grow and careers flourish.
            </p>
            <h2 className="mt-6 text-xl font-semibold text-slate-950">Locations We Serve</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              We provide recruitment solutions across Pan India, helping employers find the right talent and candidates secure the right opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Our Expertise" title="Specialized hiring across multiple industries" description="We support hiring mandates across high-demand, technical, operational, and growth-focused sectors." />
          <div className="reveal-grid mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry} data-reveal className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <CheckCircle2 className="text-[#3673B7]" size={24} aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Our Achievements" title="Trusted recruitment support with measurable impact" />
          <div className="reveal-grid mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement) => (
              <div key={achievement} data-reveal className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <CheckCircle2 className="text-[#3673B7]" size={24} aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{achievement}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading align="left" eyebrow="Company profile" title="Serving employers and candidates across India" description={`From our office at ${siteConfig.address}, Jobhut Consultancy delivers Pan India recruitment services and supports job seekers through direct enquiries, candidate registration, and WhatsApp updates.`} />
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">Connect with Jobhut Consultancy</h3>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <p><strong>Phone / WhatsApp:</strong> {siteConfig.phoneNumbers.map((phone) => phone.label).join(", ")}</p>
              <p><strong>Email:</strong> {siteConfig.emails.join(", ")}</p>
              <p><strong>Working Hours:</strong> {siteConfig.workingHours}</p>
              <p><strong>Candidate Registration:</strong> <a className="underline" href={siteConfig.candidateRegistrationForm} target="_blank">Apply for jobs</a></p>
              <p><strong>WhatsApp Channel:</strong> <a className="underline" href={siteConfig.whatsappChannel} target="_blank">Join our channel</a></p>
            </div>
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
      <CTASection title="Want to work with Jobhut Consultancy?" description="Contact us for Pan India recruitment support, staffing consultancy, candidate screening, and hiring coordination." />
    </main>
  );
}
