import { Quote } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export function TestimonialCard({ name, role, company, quote }: TestimonialCardProps) {
  return (
    <article data-reveal className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <Quote className="text-[#69608F]" size={28} aria-hidden="true" />
      <blockquote className="mt-5 text-base leading-8 text-slate-700">"{quote}"</blockquote>
      <div className="mt-6 border-t border-slate-200 pt-5">
        <p className="font-semibold text-slate-950">{name}</p>
        <p className="mt-1 text-sm text-slate-600">{role}, {company}</p>
      </div>
    </article>
  );
}
