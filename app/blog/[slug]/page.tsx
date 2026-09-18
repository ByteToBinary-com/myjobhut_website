import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#3673B7]">{post.category}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-sm text-slate-500">{post.date} · {post.readTime}</p>
          <p className="mt-8 text-xl leading-8 text-slate-700">{post.excerpt}</p>
          <div className="mt-10 grid gap-6">
            {post.content.map((block, index) => {
              if (typeof block === "string" || block.type === "paragraph") {
                return <p key={index} className="text-lg leading-8 text-slate-700">{typeof block === "string" ? block : block.text}</p>;
              }
              if (block.type === "heading") {
                const Heading = block.level === 2 ? "h2" : "h3";
                return <Heading key={index} className={block.level === 2 ? "mt-6 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl" : "mt-2 text-xl font-semibold text-slate-950"}>{block.text}</Heading>;
              }
              if (block.type === "list") {
                const List = block.ordered ? "ol" : "ul";
                return <List key={index} className={`space-y-3 pl-6 text-lg leading-8 text-slate-700 ${block.ordered ? "list-decimal" : "list-disc"}`}>
                  {block.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
                </List>;
              }
              return (
                <div key={index} className="min-w-0 overflow-x-auto rounded-lg border border-slate-200" role="region" aria-label={block.caption || "Fresher and experienced resume comparison"} tabIndex={0}>
                  <table className="w-full min-w-[32rem] border-collapse text-left text-base leading-7 text-slate-700">
                    {block.caption && <caption className="p-4 text-left font-semibold text-slate-950">{block.caption}</caption>}
                    <thead className="bg-slate-100 text-slate-950">
                      <tr>{block.headers.map((header, cellIndex) => <th key={cellIndex} scope="col" className="border-b border-slate-200 px-4 py-3 font-semibold">{header}</th>)}</tr>
                    </thead>
                    <tbody>{block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="even:bg-slate-50">{row.map((cell, cellIndex) => <td key={cellIndex} className="whitespace-pre-line border-b border-slate-200 px-4 py-3 align-top">{cell}</td>)}</tr>
                    ))}</tbody>
                  </table>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </main>
  );
}
