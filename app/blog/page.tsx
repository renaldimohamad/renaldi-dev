"use client";

import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import WritingList from "@/components/WritingList";
import Link from "next/link";
import { useLanguage } from "@/src/context/LanguageContext";
import { translations } from "@/src/lib/translations";

export default function BlogPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <main className="min-h-screen selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <div className="max-w-2xl mx-auto px-6 py-24 md:py-32 space-y-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          <span>{t.backToHome}</span>
        </Link>

        <WritingList />

        <Reveal delay={400}>
          <Footer />
        </Reveal>
      </div>
    </main>
  );
}
