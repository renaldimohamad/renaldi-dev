import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import Reveal from "./Reveal";
import { useLanguage } from "@/src/context/LanguageContext";
import { translations } from "@/src/lib/translations";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const heroRef = useRef<HTMLDivElement>(null);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();

      // hero masih kelihatan di viewport
      const isHeroVisible = rect.bottom > 80;

      setShowHeader(isHeroVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="space-y-8">
      <div
        className={`
    flex justify-between items-center
    transition-all duration-300
    ${showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
  `}>
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 grayscale-[0.5] hover:grayscale-0 transition-all duration-500">
            <Image
              src="/images/profile_aldi_2.jpg"
              alt="Renaldi Mohamad"
              fill
              className="rounded-full object-cover ring-1 ring-neutral-200 dark:ring-neutral-800"
              priority
            />
          </div>

          <h1 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
            Renaldi Mohamad
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          <div className="w-px h-3 bg-neutral-200 dark:bg-neutral-800" />
          <ThemeToggle />
        </div>
      </div>

      <div className="space-y-6 max-w-xl">
        <h3 className="lg:text-xs">{t.heroTitle}</h3>

        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 font-light italic opacity-80">
          {t.heroDesc}
        </p>
      </div>

      <div className="pt-4">
        <div className="h-px w-full bg-gradient-to-r from-neutral-200 dark:from-neutral-800 to-transparent" />
      </div>
    </section>
  );
}
