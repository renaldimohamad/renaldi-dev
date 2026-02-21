import { posts } from "@/src/lib/posts";
import Link from "next/link";

export default function WritingList() {
  return (
    <section>
      <h2 className="text-lg font-medium mb-10">Writing</h2>

      <ul className="space-y-14">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block transition-all duration-300 active:scale-[0.99]"
            >
              {/* Tag */}
              <div className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-2">
                {post.tag}
              </div>

              {/* Title */}
              <p className="text-neutral-900 dark:text-neutral-100 text-lg font-medium">
                {post.title}
              </p>

              {/* Excerpt */}
              <p className="mt-3 text-neutral-600 dark:text-neutral-400 leading-relaxed text-[15px]">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="mt-4 text-sm text-neutral-500 dark:text-neutral-500 flex items-center gap-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              {/* Always Visible Read More */}
              <div className="mt-4 text-sm text-neutral-700 dark:text-neutral-300 font-medium flex items-center gap-2">
                Read article
                <span>→</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
