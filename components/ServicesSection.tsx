import { services } from "@/data/services";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="Recruitment services built for candidates and employers"
          description="From job placement services to employer hiring solutions, MyJobhut keeps recruitment practical, transparent, and aligned with real business outcomes."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
