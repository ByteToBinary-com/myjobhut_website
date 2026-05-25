import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/data/blogs";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article data-reveal className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#DED9EA] hover:shadow-xl hover:shadow-slate-950/8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#69608F]">{post.category}</p>
      <Link href={`/blog/${post.slug}`} className="focus-ring rounded-md">
        <h3 className="mt-4 text-xl font-semibold text-slate-950 transition hover:text-[#69608F]">{post.title}</h3>
      </Link>
      <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
      <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
        <span>{post.readTime}</span>
        <Link href={`/blog/${post.slug}`} className="focus-ring inline-flex items-center gap-2 rounded-md font-semibold text-[#69608F]">
          Read <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
