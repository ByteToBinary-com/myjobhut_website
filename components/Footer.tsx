import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-md">
            <Image src="/logo.svg" alt="" width={42} height={42} />
            <span className="text-xl font-extrabold">{siteConfig.name}</span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            A modern recruitment agency helping employers hire confidently with clear role intake, screening, coordination, and hiring support.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-400">Pages</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="focus-ring rounded-md text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-400">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <a href={`tel:${siteConfig.phoneHref}`} className="focus-ring flex items-center gap-2 rounded-md transition hover:text-white">
              <Phone size={16} aria-hidden="true" /> {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="focus-ring flex items-center gap-2 rounded-md transition hover:text-white">
              <Mail size={16} aria-hidden="true" /> {siteConfig.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" /> {siteConfig.address}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-shell text-sm text-slate-400">Copyright {new Date().getFullYear()} MyJobHut. All rights reserved.</div>
      </div>
    </footer>
  );
}
