"use client";

import { useLanguage } from "@/src/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300"
    >
      {lang === "en" ? "ID" : "EN"}
    </button>
  );
}
