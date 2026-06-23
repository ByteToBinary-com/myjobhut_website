import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Jobhut Consultancy, a leading recruitment and staffing solutions provider founded on 8 March 2022 to connect talent with opportunity."
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
  "5000+ Successful Placements",
  "Pan India & Overseas Recruitment Services",
  "Trusted by companies across various industries",
  "100+ Clients Served"
];

const values = ["Reliability", "Efficiency", "Professional service", "Candidate respect", "Employer focus", "Career growth"];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Jobhut Consultancy"
        title="Connecting Talent with Opportunity"
        description="Founded on 8 March 2022, Jobhut Consultancy is a leading recruitment and staffing solutions provider dedicated to helping organizations build exceptional teams and professionals achieve their career aspirations."
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
              title="Connecting Talent with Opportunity"
              description="Founded on 8 March 2022, Jobhut Consultancy is a leading recruitment and staffing solutions provider dedicated to helping organizations build exceptional teams and professionals achieve their career aspirations."
            />
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                The company was founded by Anshu Sahu, a recruitment professional with over 10 years of experience in talent acquisition and talent hunting across diverse industries. With a deep understanding of workforce dynamics and hiring challenges, he established Jobhut Consultancy with a vision to bridge the gap between exceptional talent and growing organizations.
              </p>
              <p>
                At Jobhut Consultancy, we specialize in identifying, attracting, and placing top talent through customized recruitment and staffing solutions. Our client-centric approach, extensive talent network, and industry expertise enable us to deliver quality hiring outcomes that support business growth and career advancement.
              </p>
              <p>
                We believe that people are the most valuable asset of any organization. By connecting the right talent with the right opportunities, we help businesses succeed and professionals build rewarding careers.
              </p>
              <p>
                Whether you are an employer seeking skilled professionals or a candidate looking for your next career opportunity, Jobhut Consultancy is your trusted partner in growth and success.
              </p>
              <p className="font-semibold text-slate-950">Jobhut Consultancy – Connecting Talent, Empowering Growth.</p>
            </div>
          </div>
          <div data-reveal="right" className="rounded-3xl bg-[#EFF6FF] p-6">
            <h2 className="text-xl font-semibold text-slate-950">Our Mission</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              To bridge the gap between exceptional talent and growing organizations by providing customized recruitment and staffing solutions that help businesses succeed and professionals build rewarding careers.
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
    </main>
  );
}
