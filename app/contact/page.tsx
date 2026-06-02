import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact My Job Hut for recruitment agency support, Pan India staffing services, candidate screening, and recruitment consulting."
};

export default function ContactPage() {
  const primaryWhatsappHref = `https://wa.me/${siteConfig.whatsappNumber}`;

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Talk to My Job Hut about hiring support."
        description="Reach us for Pan India recruitment services, candidate screening, staffing consultancy, job applications, and general enquiries."
        primaryCta={{ label: "Call Now", href: `tel:${siteConfig.phoneHref}` }}
        secondaryCta={{ label: "WhatsApp Us", href: primaryWhatsappHref }}
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Recruitment support specialist responding to employer enquiries"
      />
      <section className="bg-slate-50 py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal-grid grid gap-4">
            <div data-reveal className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <Phone className="text-[#69608F]" size={24} />
                <h2 className="font-semibold text-slate-950">Phone</h2>
              </div>
              <div className="mt-3 grid gap-2 text-sm text-slate-600">
                {siteConfig.phoneNumbers.map((phone) => (
                  <a key={phone.href} href={`tel:${phone.href}`} className="underline">{phone.label}</a>
                ))}
              </div>
            </div>

            <div data-reveal className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <MessageCircle className="text-[#69608F]" size={24} />
                <h2 className="font-semibold text-slate-950">WhatsApp</h2>
              </div>
              <div className="mt-3 grid gap-2 text-sm text-slate-600">
                {siteConfig.phoneNumbers.map((phone) => (
                  <a key={phone.whatsapp} href={`https://wa.me/${phone.whatsapp}`} target="_blank" rel="noreferrer" className="underline">{phone.label}</a>
                ))}
              </div>
            </div>

            <div data-reveal className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <Mail className="text-[#69608F]" size={24} />
                <h2 className="font-semibold text-slate-950">Email</h2>
              </div>
              <div className="mt-3 grid gap-2 text-sm text-slate-600">
                {siteConfig.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="underline">{email}</a>
                ))}
              </div>
            </div>

            <div data-reveal className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <MapPin className="text-[#69608F]" size={24} />
                <span>
                  <span className="block font-semibold text-slate-950">Office Address</span>
                  <span className="mt-1 block text-sm text-slate-600">{siteConfig.address}</span>
                </span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.5790552242674!2d77.16631617550334!3d28.702236075626754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03757a618399%3A0x2209bad8df31d761!2sMyjobhut.com%20owned%20by%20Jobhut%20Consultancy%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1780405558722!5m2!1sen!2sin"
                title="My Job Hut office location on Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mt-4 h-64 w-full rounded-2xl border-0"
              />
              <a
                href="https://maps.app.goo.gl/8sXteMZ8CNr1VbYh9"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-[#69608F] underline"
              >
                Open in Google Maps
              </a>
            </div>
            <div data-reveal className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <Clock3 className="text-[#69608F]" size={24} />
              <span>
                <span className="block font-semibold text-slate-950">Working Hours</span>
                <span className="mt-1 block text-sm text-slate-600">{siteConfig.workingHours}</span>
              </span>
            </div>
            <div data-reveal className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-950">Social Media</h3>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
                <a className="underline" href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="underline" href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer">Instagram</a>
                <a className="underline" href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer">Facebook</a>
              </div>
            </div>
            <div data-reveal className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-950">Apply for Jobs</h3>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <p><a className="underline" href={siteConfig.candidateRegistrationForm} target="_blank" rel="noreferrer">Candidate Registration Form</a></p>
                <p><a className="underline" href={siteConfig.whatsappChannel} target="_blank" rel="noreferrer">Join Our WhatsApp Channel</a></p>
              </div>
            </div>
            <div data-reveal className="rounded-3xl border border-[#C9C2DD] bg-[#F7F5FB] p-5 text-sm font-semibold text-slate-700">
              Need staff urgently? <a href={primaryWhatsappHref} target="_blank" rel="noreferrer" className="underline">Chat with us on WhatsApp.</a><br />
              Looking for a job? <a href={siteConfig.candidateRegistrationForm} target="_blank" rel="noreferrer" className="underline">Register as a candidate.</a>
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
