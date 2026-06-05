import Image from "next/image";
import { Button } from "@/components/Button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: string;
  imageAlt?: string;
};

export function PageHero({ eyebrow, title, description, primaryCta, secondaryCta, image, imageAlt }: PageHeroProps) {
  return (
    <section className="overflow-hidden bg-slate-50">
      <div className="section-shell grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
        <div data-reveal="left">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#3673B7]">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
          {(primaryCta || secondaryCta) ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? <Button href={primaryCta.href}>{primaryCta.label}</Button> : null}
              {secondaryCta ? <Button href={secondaryCta.href} variant="secondary">{secondaryCta.label}</Button> : null}
            </div>
          ) : null}
        </div>
        <div data-reveal="right" className="relative min-h-80 overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-slate-950/10">
          <Image
            src={image || "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"}
            alt={imageAlt || "Recruitment professionals collaborating in a modern office"}
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
