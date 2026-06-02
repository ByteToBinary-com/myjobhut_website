import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollReveal } from "@/components/ScrollReveal";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { siteConfig } from "@/data/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#69608F"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Recruitment Agency & Hiring Solutions`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: siteConfig.icon,
    shortcut: siteConfig.logo
  },
  openGraph: {
    title: `${siteConfig.name} | Recruitment Agency & Employer Hiring Services`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: `${siteConfig.name} recruitment platform` }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Recruitment Agency`,
    description: siteConfig.description,
    images: ["/og-image.svg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <Header />
        <ScrollReveal />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
