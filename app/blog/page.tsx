import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import WritingList from "@/components/WritingList";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <div className="flex flex-col gap-10">
          <Link
            href="/"
            className="text-sm text-neutral-500 dark:text-neutral-400 hover:opacity-70 transition"
          >
            ← Back
          </Link>

          <WritingList />

          {/* FOOTER */}
          <Reveal delay={400}>
            <Footer />
          </Reveal>
        </div>
      </div>
    </main>
  );
}
