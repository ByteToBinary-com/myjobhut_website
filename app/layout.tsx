import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteSeo } from "@/data/seo";
import { businessJsonLd } from "@/lib/schema";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f766e"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteSeo.url),
  title: {
    default: siteSeo.title,
    template: `%s | ${siteSeo.name}`
  },
  description: siteSeo.description,
  applicationName: siteSeo.name,
  keywords: siteSeo.keywords,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteSeo.title,
    description: siteSeo.description,
    url: siteSeo.url,
    siteName: siteSeo.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "MyJobhut recruitment and job placement services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteSeo.title,
    description: siteSeo.description,
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
