import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Recruitment Services",
  description: "Explore Jobhut Consultancy recruitment services including talent acquisition, candidate screening, hiring brief support, and employer guidance."
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Hiring solutions and career support for every stage."
        description="From talent acquisition to interview coordination and salary insights, Jobhut Consultancy supports employers with focused recruitment services."
        primaryCta={{ label: "Hire Talent", href: "/employers" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Recruitment consultants mapping hiring services and candidate screening steps"
      />
      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="What we do" title="Service depth for modern recruitment" />
          <div className="reveal-grid mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => <ServiceCard key={service.title} {...service} />)}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="section-shell reveal-grid grid gap-5 md:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <article key={service.title} data-reveal className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">{service.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{service.description} We tailor the process to role complexity, urgency, and hiring team capacity.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
