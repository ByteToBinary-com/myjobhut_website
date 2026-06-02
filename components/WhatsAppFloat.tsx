import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact My Job Hut on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-[#1EBE5D] sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={28} aria-hidden="true" />
    </a>
  );
}
