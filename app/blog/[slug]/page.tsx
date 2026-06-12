"use client";

import Image from "next/image";
import Link from "next/link";
import { posts } from "@/src/lib/posts";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { useLanguage } from "@/src/context/LanguageContext";
import { translations } from "@/src/lib/translations";
import { use } from "react";

export default function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { lang } = useLanguage();
  const t = translations[lang];
  const { slug } = use(params);
  const cleanSlug = slug.replace(/^\/+/, "").trim();

  const post = posts.find((p) => p.slug.replace(/^\/+/, "") === cleanSlug);

  if (!post) return notFound();

  const content = post[lang];

  return (
    <main className="min-h-screen selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <div className="max-w-2xl mx-auto px-6 py-24 md:py-32 space-y-16">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300 group">
          <span className="group-hover:-translate-x-1 transition-transform duration-300">
            ←
          </span>
          <span>{t.backToWriting}</span>
        </Link>

        {/* Header */}
        <header className="space-y-8">
          <div className="flex items-center gap-3 text-xs font-medium text-neutral-400 dark:text-neutral-500 tracking-[0.2em]">
            <span className="uppercase">{content.tag}</span>
            <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <span>{content.date}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-medium tracking-tight leading-[1.2] text-neutral-900 dark:text-neutral-100">
            {content.title}
          </h1>
        </header>

        {/* Cover Image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800">
          <Image
            src={post.cover}
            alt={content.title}
            fill
            className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            priority
          />
        </div>

        {/* Article */}
        <article className="space-y-10 text-editorial text-neutral-600 dark:text-neutral-400">
          {content.content
            .trim()
            .split("\n\n")
            .map((paragraph, index) => (
              <p key={index} className="max-w-[65ch]">
                {paragraph}
              </p>
            ))}

          {/* Highlight Quote */}
          <blockquote className="py-8 border-y border-neutral-100 dark:border-neutral-900 text-lg md:text-xl font-light text-neutral-900 dark:text-neutral-500 italic leading-relaxed text-center max-w-[65ch] mx-auto">
            “{content.highlight}”
          </blockquote>
        </article>

        {/* FOOTER */}
        <div className="pt-0">
          <Reveal delay={400}>
            <Footer />
          </Reveal>
        </div>
      </div>
    </main>
  );
}
