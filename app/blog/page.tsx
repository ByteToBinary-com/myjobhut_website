import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { PageHero } from "@/components/PageHero";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read Jobhut Consultancy hiring trends, career advice, interview preparation, and resume tips."
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Career and hiring insights for India."
        description="Practical articles for employers, recruiters, and companies improving their hiring process."
        primaryCta={{ label: "View Services", href: "/services" }}
        secondaryCta={{ label: "Hire Talent", href: "/employers" }}
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Modern office workspace used for recruitment research and hiring insights"
      />
      <section className="bg-slate-50 py-20">
        <div className="section-shell reveal-grid grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      </section>
    </main>
  );
}
