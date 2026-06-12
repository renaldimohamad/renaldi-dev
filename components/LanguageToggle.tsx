"use client";

import { useLanguage } from "@/src/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  let lengageTitleHover =
    lang === "en" ? "Switch to Indonesian" : "Beralih ke Bahasa Inggris";

  return (
    <button
      onClick={toggleLang}
      className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-400 transition-colors duration-300 cursor-pointer"
      title={lengageTitleHover}>
      {lang === "en" ? "ID" : "EN"}
    </button>
  );
}
