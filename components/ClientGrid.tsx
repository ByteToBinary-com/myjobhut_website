import { clients } from "@/data/clients";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";

export function ClientGrid() {
  return (
    <section id="clients" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Client information"
          title="Trusted by companies building dependable teams"
          description="MyJobhut supports hiring across technology, finance, healthcare, retail, manufacturing, consulting, SaaS, and infrastructure teams."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {clients.map((client, index) => (
            <MotionReveal
              key={client.name}
              delay={index * 0.03}
              className="group flex min-h-32 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-slate-950/8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-bold text-teal-800 shadow-sm transition group-hover:bg-teal-700 group-hover:text-white">
                {client.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-950">{client.name}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">{client.industry}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
