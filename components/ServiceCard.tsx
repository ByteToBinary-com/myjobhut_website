import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <article data-reveal className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#DED9EA] hover:shadow-xl hover:shadow-slate-950/8">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0EEF7] text-[#69608F] transition group-hover:bg-[#69608F] group-hover:text-white">
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}
