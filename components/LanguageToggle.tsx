"use client";

import { useLanguage } from "@/src/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="text-xs tracking-wide text-neutral-500 dark:text-neutral-400 hover:opacity-70 transition"
    >
      {lang === "en" ? "ID" : "EN"}
    </button>
  );
}
