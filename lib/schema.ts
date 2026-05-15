import { services } from "@/data/services";
import { siteSeo } from "@/data/seo";

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: siteSeo.name,
  url: siteSeo.url,
  logo: `${siteSeo.url}/logo.svg`,
  image: `${siteSeo.url}/og-image.svg`,
  description: siteSeo.description,
  telephone: siteSeo.phone,
  email: siteSeo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteSeo.address,
    addressCountry: "IN"
  },
  areaServed: "India",
  knowsAbout: [
    "Recruitment agency",
    "Job placement services",
    "Hiring solutions",
    "Career guidance",
    "Staffing solutions"
  ],
  sameAs: [siteSeo.url],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteSeo.phone,
    email: siteSeo.email,
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"]
  }
};

export const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: siteSeo.title,
  url: siteSeo.url,
  description: siteSeo.description,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "EmploymentAgency",
          name: siteSeo.name
        }
      }
    }))
  }
};
