"use client";

import { Instagram, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/src/context/LanguageContext";
import { translations } from "@/src/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="mt-32 pt-12 border-t border-neutral-100 dark:border-neutral-900 pb-12">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-neutral-400 dark:text-neutral-500 text-sm font-light">
            © {new Date().getFullYear()} Renaldi Mohamad.
          </p>

          <a
            href="https://me.renaldi.fun"
            target="_blank"
            className="text-xs font-medium text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300"
          >
            {t.viewSelectedWork} →
          </a>
        </div>

        <div className="flex items-center gap-4 text-neutral-400 dark:text-neutral-500">
          <Link
            href="https://www.instagram.com/aldybalagtown/"
            target="_blank"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300"
          >
            Instagram
          </Link>
          <span className="opacity-20 text-xs">/</span>
          <Link
            href="https://www.linkedin.com/in/renaldimohamad/"
            target="_blank"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300"
          >
            LinkedIn
          </Link>
          <span className="opacity-20 text-xs">/</span>
          <Link
            href="https://www.facebook.com/renaldi.gtown?locale=id_ID"
            target="_blank"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300"
          >
            Facebook
          </Link>
        </div>
      </div>
    </footer>
  );
}
