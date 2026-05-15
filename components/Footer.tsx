import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { siteSeo } from "@/data/seo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <a href="#" className="focus-ring inline-flex items-center gap-3 rounded-md">
            <Image src="/logo.svg" alt="" width={42} height={42} />
            <span className="text-xl font-bold">{siteSeo.name}</span>
          </a>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            MyJobhut is a recruitment company providing job placement services, hiring solutions, staffing support, and career guidance for modern teams and professionals.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Navigation</h2>
          <div className="mt-4 grid gap-3">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="focus-ring rounded-md text-sm text-slate-300 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <a href={`tel:${siteSeo.phoneHref}`} className="focus-ring flex items-center gap-2 rounded-md transition hover:text-white">
              <Phone size={16} aria-hidden="true" /> {siteSeo.phone}
            </a>
            <a href={`mailto:${siteSeo.email}`} className="focus-ring flex items-center gap-2 rounded-md transition hover:text-white">
              <Mail size={16} aria-hidden="true" /> {siteSeo.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-shell flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} MyJobhut. All rights reserved.</p>
          <p>Static, SEO-focused recruitment website.</p>
        </div>
      </div>
    </footer>
  );
}
