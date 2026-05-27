import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact MyJobHut for recruitment agency support, employer hiring services, candidate screening, and recruitment consulting."
};

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}`;

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Talk to MyJobHut about hiring support."
        description="Reach us for employer hiring services, candidate screening, recruitment consulting, and general enquiries."
        primaryCta={{ label: "Call Now", href: `tel:${siteConfig.phoneHref}` }}
        secondaryCta={{ label: "Email Us", href: `mailto:${siteConfig.email}` }}
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Recruitment support specialist responding to employer enquiries"
      />
      <section className="bg-slate-50 py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal-grid grid gap-4">
            {[
              { label: "WhatsApp", value: siteConfig.phone, href: whatsappHref, icon: MessageCircle },
              { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phoneHref}`, icon: Phone },
              { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} data-reveal className="focus-ring flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1">
                  <Icon className="text-[#69608F]" size={24} />
                  <span>
                    <span className="block font-semibold text-slate-950">{item.label}</span>
                    <span className="mt-1 block text-sm text-slate-600">{item.value}</span>
                  </span>
                </a>
              );
            })}
            <div data-reveal className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <MapPin className="text-[#69608F]" size={24} />
              <span>
                <span className="block font-semibold text-slate-950">Office Address</span>
                <span className="mt-1 block text-sm text-slate-600">{siteConfig.address}</span>
              </span>
            </div>
            <div data-reveal className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <Clock3 className="text-[#69608F]" size={24} />
              <span>
                <span className="block font-semibold text-slate-950">Working Hours</span>
                <span className="mt-1 block text-sm text-slate-600">Monday to Saturday, 9:30 AM - 7:00 PM IST</span>
              </span>
            </div>
            <div data-reveal className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-950">Social Media</h3>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
                <a className="underline" href="https://www.linkedin.com" target="_blank">LinkedIn</a>
                <a className="underline" href="https://www.instagram.com" target="_blank">Instagram</a>
                <a className="underline" href="https://www.facebook.com" target="_blank">Facebook</a>
                <a className="underline" href="https://x.com" target="_blank">X (Twitter)</a>
              </div>
            </div>
            <div data-reveal className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-950">Quick Links</h3>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <p><a className="underline" href="https://forms.gle/your-google-form-link" target="_blank">Google Form: Share Hiring Requirement / Job Application</a></p>
                <p><a className="underline" href="https://whatsapp.com/channel/your-channel-link" target="_blank">Join Our WhatsApp Channel</a></p>
              </div>
            </div>
            <div data-reveal className="rounded-3xl border border-[#C9C2DD] bg-[#F7F5FB] p-5 text-sm font-semibold text-slate-700">
              Need staff urgently? <a href={whatsappHref} className="underline">Chat with us on WhatsApp.</a><br />
              Looking for a job? <a href={whatsappHref} className="underline">Send your CV now.</a>
            </div>
          </div>
          <div data-reveal="right">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
