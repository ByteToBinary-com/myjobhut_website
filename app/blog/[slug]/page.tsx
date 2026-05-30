import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { blogs, getBlogBySlug } from "@/data/blogs";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <main>
      <article className="bg-white py-20">
        <div data-reveal className="section-shell max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#69608F]">{post.category}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-sm text-slate-500">{post.date} · {post.readTime}</p>
          <p className="mt-8 text-xl leading-8 text-slate-700">{post.excerpt}</p>
          <div className="mt-10 grid gap-6">
            {post.content.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-slate-700">{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
      <CTASection title="Need help with hiring planning?" description="My Job Hut supports employers with practical recruitment guidance and hiring coordination." />
    </main>
  );
}
