import { ArrowRight, CheckCircle2, Search } from "lucide-react";
import Image from "next/image";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { StatCard } from "@/components/StatCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { blogs } from "@/data/blogs";
import { processSteps, services } from "@/data/services";
import { partnerLogos, stats, testimonials } from "@/data/testimonials";

export default function HomePage() {
  return (
    <main>
      <section className="hero-grid overflow-hidden bg-slate-50">
        <div className="section-shell grid min-h-[calc(100vh-64px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div data-reveal="left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DED9EA] bg-white px-3 py-1.5 text-sm font-bold text-[#69608F] shadow-sm">
              <Search size={16} aria-hidden="true" /> Recruitment support for modern hiring
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Hire qualified talent with a recruitment partner built for focused hiring.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A professional recruitment agency for employers, recruiters, and companies that need clearer shortlists, faster coordination, and dependable hiring support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/employers">Hire Talent <ArrowRight className="ml-2" size={18} /></Button>
              <Button href="/contact" variant="secondary">Contact Us</Button>
            </div>
          </div>
          <div data-reveal="right" className="relative min-h-[460px]">
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-slate-950/12">
              <div className="relative aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                  alt="Hiring team reviewing candidate requirements during a recruitment planning meeting"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-5 left-4 right-4 rounded-3xl border border-white/80 bg-white/95 p-5 shadow-xl backdrop-blur sm:left-8 sm:right-auto sm:w-80">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 text-[#69608F]" size={24} aria-hidden="true" />
                <div>
                  <p className="font-semibold text-slate-950">Hiring support that stays practical</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Shortlists, hiring brief support, screening, and interview coordination.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="section-shell">
          <p className="text-center text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Trusted companies and hiring partners</p>
          <div className="reveal-grid mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {partnerLogos.map((logo) => (
              <div key={logo} data-reveal="scale" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-center text-sm font-bold text-slate-600">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Services" title="Recruitment services with depth" description="Support for employers and candidates across the hiring journey." />
          <div className="reveal-grid mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => <ServiceCard key={service.title} {...service} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#F0EEF7] py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading align="left" eyebrow="Why choose MyJobHut" title="A sharper way to match talent with opportunity" description="We combine recruitment discipline, career support, and employer-focused process design to improve hiring outcomes." />
          <div className="reveal-grid grid gap-4 sm:grid-cols-2">
            {["Verified opportunities", "Role-fit shortlisting", "Interview coordination", "Career-focused guidance"].map((item) => (
              <div key={item} data-reveal className="rounded-3xl bg-white p-6 shadow-sm">
                <CheckCircle2 className="text-[#69608F]" size={24} />
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{item}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">Clear process, practical communication, and support designed around real hiring needs.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Hiring process" title="From role clarity to joining support" description="A simple recruitment process that keeps employers and candidates aligned." />
          <div className="reveal-grid mt-12 grid gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} data-reveal className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#69608F] text-sm font-bold text-white">{index + 1}</div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="section-shell reveal-grid grid gap-6 md:grid-cols-2">
          <div data-reveal className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Recruitment consulting</h2>
            <p className="mt-3 text-slate-600">Clarify role requirements, hiring priorities, compensation alignment, and screening criteria before sourcing begins.</p>
            <Button href="/services" className="mt-6">Explore Services</Button>
          </div>
          <div data-reveal className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Employer benefits</h2>
            <p className="mt-3 text-slate-600">Hire qualified candidates faster with hiring brief support, screening, salary insights, and recruitment coordination.</p>
            <Button href="/employers" className="mt-6">Hire Talent</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="reveal-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
          </div>
          <div className="reveal-grid mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} {...testimonial} />)}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="section-shell">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading align="left" eyebrow="Blog" title="Hiring and career insights" description="Helpful guidance for candidates, employers, and recruitment teams." />
            <Button href="/blog" variant="secondary">Read Blog</Button>
          </div>
          <div className="reveal-grid mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {blogs.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
