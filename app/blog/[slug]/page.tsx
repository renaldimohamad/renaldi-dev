export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { posts } from "@/src/lib/posts";
import { notFound } from "next/navigation";

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cleanSlug = slug.replace(/^\/+/, "").trim();

  const post = posts.find((p) => p.slug.replace(/^\/+/, "") === cleanSlug);

  if (!post) return notFound();

  return (
    <main className="min-h-screen transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-32 space-y-16">
        {/* Back */}
        <Link
          href="/"
          className="text-sm text-neutral-500 dark:text-neutral-400 hover:opacity-70 transition"
        >
          ← Back
        </Link>

        {/* Header */}
        <header className="space-y-6">
          <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
            {post.tag}
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900 dark:text-neutral-100">
            {post.title}
          </h1>

          <div className="text-sm text-neutral-500 dark:text-neutral-500 flex items-center gap-3">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />

        {/* Article */}
        <article className="space-y-8 text-[18px] leading-relaxed text-neutral-700 dark:text-neutral-300">
          {post.content
            .trim()
            .split("\n\n")
            .map((paragraph, index) => {
              // Dropcap for first paragraph
              if (index === 0) {
                return (
                  <p key={index} className="text-xl leading-relaxed">
                    <span className="float-left text-5xl font-semibold mr-3 mt-1 text-neutral-900 dark:text-neutral-100">
                      {paragraph.charAt(0)}
                    </span>
                    {paragraph.slice(1)}
                  </p>
                );
              }

              return <p key={index}>{paragraph}</p>;
            })}

          {/* Highlight Quote */}
          <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-600 pl-6 italic text-neutral-600 dark:text-neutral-400">
            Clarity is not about having less information. It’s about having the
            right information.
          </blockquote>
        </article>

        {/* CTA Section */}
        <section className="pt-16 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
          <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            If this helped you,
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Share it with someone building something meaningful.
          </p>
        </section>
      </div>
    </main>
  );
}
