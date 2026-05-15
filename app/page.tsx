import { AboutSection } from "@/components/AboutSection";
import { ClientGrid } from "@/components/ClientGrid";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { pageJsonLd } from "@/lib/schema";

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ClientGrid />
      <TestimonialSlider />
      <ContactSection />
    </main>
  );
}
