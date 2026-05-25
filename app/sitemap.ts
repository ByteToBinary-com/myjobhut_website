import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/employers", "/blog", "/contact"];
  return [
    ...pages.map((page) => ({
      url: `${siteConfig.url}${page}`,
      lastModified: new Date("2026-05-25"),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8
    })),
    ...blogs.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
}
