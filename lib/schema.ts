import { siteConfig } from "@/data/site";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressCountry: "IN"
  },
  areaServed: "India",
  knowsAbout: siteConfig.keywords,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: siteConfig.phone,
    email: siteConfig.email
  }
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name
  }
};
