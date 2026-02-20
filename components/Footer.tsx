"use client";

import { Instagram, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 pt-12 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-sm text-neutral-500 dark:text-neutral-400">
        <p>© {new Date().getFullYear()} Renaldi Mohamad.</p>

        <div className="flex items-center gap-3 text-sm">
          <Link
            href="https://www.instagram.com/aldybalagtown/"
            target="_blank"
            className="hover:opacity-70 transition"
          >
            Instagram
          </Link>
          <span className="opacity-40">/</span>
          <Link
            href="https://www.linkedin.com/in/renaldimohamad/"
            target="_blank"
            className="hover:opacity-70 transition"
          >
            LinkedIn
          </Link>
          <span className="opacity-40">/</span>
          <Link
            href="https://www.facebook.com/renaldi.gtown?locale=id_ID"
            target="_blank"
            className="hover:opacity-70 transition"
          >
            Facebook
          </Link>
        </div>
      </div>
    </footer>
  );
}
