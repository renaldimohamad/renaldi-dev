"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const changeThemeTitle = isDark
    ? "Switch to light theme"
    : "Switch to dark theme";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        p-2
        rounded-md
        text-neutral-500
        dark:text-neutral-400
        hover:text-black
        dark:hover:text-neutral-400
        transition-colors
        duration-200
        cursor-pointer
      "
      title={changeThemeTitle}>
      {isDark ? <Sun size={18} /> : <Moon size={16} />}
    </button>
  );
}
