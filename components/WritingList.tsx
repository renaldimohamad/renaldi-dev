import { posts } from "@/src/lib/posts";
import Link from "next/link";
import { useLanguage } from "@/src/context/LanguageContext";
import { translations } from "@/src/lib/translations";

export default function WritingList() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="space-y-16">
      <div className="flex items-center justify-between">
        <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-medium">
          {t.writing}
        </h2>
      </div>

      <div className="flex flex-col gap-16 md:gap-20">
        {posts.map((post) => {
          const content = post[lang];
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block space-y-5 transition-all duration-500">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] text-neutral-400 dark:text-neutral-500 uppercase">
                  <span className="text-neutral-900 dark:text-neutral-400">
                    {content.tag}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                  <span>{content.date}</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-300 leading-snug">
                    {content.title}
                  </h3>

                  <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-sm md:text-base font-light max-w-xl">
                    {content.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="text-[11px] font-medium tracking-wide uppercase italic opacity-80">
                    {content.readTime}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium light:text-neutral-900 dark:text-neutral-500 transition-all duration-500 md:opacity-0 md:group-hover:opacity-100 md:-translate-x-2 md:group-hover:translate-x-0">
                    <span>Read article</span>
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
