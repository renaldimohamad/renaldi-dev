"use client";

import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function FloatingToolbar() {
  const [visible, setVisible] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const show = () => {
      setVisible(true);

      if (timer.current) clearTimeout(timer.current);

      timer.current = setTimeout(() => {
        setVisible(false);
      }, 2000);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) show();
      else setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", show);
    window.addEventListener("keydown", show);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", show);
      window.removeEventListener("keydown", show);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <div
      className={`
      fixed top-4 right-4 z-50
      flex items-center gap-2 sm:gap-2
      px-4 sm:px-4 py-1 sm:py-1
      rounded-3xl
      backdrop-blur-md
      bg-neutral
      border border-neutral-200/70 dark:border-neutral-800/50
      shadow-sm
      transition-all duration-300 ease-out
      text-xs sm:text-sm
      ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
      }
    `}>
      <LanguageToggle />

      <div className="ml-2 w-px h-3 sm:h-4 bg-neutral-300/60 dark:bg-neutral-700/60" />

      <ThemeToggle />
    </div>
  );
}
