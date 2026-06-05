import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#3673B7] text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-md">
              <img src={siteConfig.logo} alt="" width={225} height={54} className="h-14 w-auto max-w-[225px] shrink-0" />
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#EFF6FF]">
            A leading recruitment and staffing consultancy established on 8 March 2022, connecting talented professionals with top organizations across India.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#EFF6FF]">
            <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" className="focus-ring rounded-md underline transition hover:text-white">LinkedIn</a>
            <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer" className="focus-ring rounded-md underline transition hover:text-white">Instagram</a>
            <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer" className="focus-ring rounded-md underline transition hover:text-white">Facebook</a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/75">Pages</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="focus-ring rounded-md text-sm text-[#EFF6FF] transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white/75">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-[#EFF6FF]">
            <a href={`tel:${siteConfig.phoneHref}`} className="focus-ring flex items-center gap-2 rounded-md transition hover:text-white">
              <Phone size={16} aria-hidden="true" /> {siteConfig.phone}
            </a>
            <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer" className="focus-ring flex items-center gap-2 rounded-md transition hover:text-white">
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp: {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="focus-ring flex items-center gap-2 rounded-md transition hover:text-white">
              <Mail size={16} aria-hidden="true" /> {siteConfig.email}
            </a>
            <span className="flex items-start gap-2">
              <MapPin size={16} aria-hidden="true" className="mt-1 shrink-0" /> {siteConfig.address}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-5">
        <div className="section-shell text-sm text-[#EFF6FF]">Copyright {new Date().getFullYear()} Jobhut Consultancy. All rights reserved.</div>
      </div>
    </footer>
  );
}
