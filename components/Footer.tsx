import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <>
      <section className="bg-[#4868BF] py-14 text-white">
        <div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to move your career or hiring search forward?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#E7ECFF]">
              Talk to MyJobHut for hiring solutions, recruitment consulting, and practical employer support.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-white/80 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#10002B]"
            >
              Contact Us <ArrowRight className="ml-2" size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/employers"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-[#10002B] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#10002B]/20 transition hover:-translate-y-0.5 hover:bg-[#1B0A3D]"
            >
              Hire Talent
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#10002B] text-white">
        <div className="section-shell grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="focus-ring inline-flex items-center rounded-xl bg-white p-2 shadow-sm" aria-label="MyJobHut home">
              <img src={siteConfig.logo} alt="" className="h-14 w-auto max-w-[225px] shrink-0" />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#D8D4E8]">
              A leading recruitment and staffing consultancy connecting talented professionals with top organizations across India.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-[#D8D4E8] transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/15 hover:text-white"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-[#D8D4E8] transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/15 hover:text-white"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-[#D8D4E8] transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/15 hover:text-white"
              >
                <Facebook size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Pages</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="focus-ring rounded-md text-sm text-[#D8D4E8] transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Contact</h2>
            <address className="mt-5 grid gap-4 text-sm not-italic text-[#D8D4E8]">
              <a href={`tel:${siteConfig.phoneHref}`} className="focus-ring flex items-center gap-3 rounded-md transition hover:text-white">
                <Phone className="text-[#BFDBFE]" size={17} aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center gap-3 rounded-md transition hover:text-white"
              >
                <MessageCircle className="text-[#BFDBFE]" size={17} aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="focus-ring flex items-center gap-3 rounded-md transition hover:text-white">
                <Mail className="text-[#BFDBFE]" size={17} aria-hidden="true" />
                {siteConfig.email}
              </a>
              <span className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-[#BFDBFE]" size={17} aria-hidden="true" />
                <span>
                  B-89, Block B, Second Floor, Wazirpur Industrial Area,
                  Ashok Vihar, Delhi - 110052
                </span>
              </span>
            </address>
          </div>
        </div>

        <div className="border-t border-white/15 py-5">
          <div className="section-shell text-sm text-[#D8D4E8]">Copyright 2026 Jobhut Consultancy. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
