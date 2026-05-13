"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WritingList from "@/components/WritingList";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Home() {
  const { lang } = useLanguage();

  const content = {
    en: {
      philosophyTitle:
        "I’m interested in growth — how it forms quietly, how discipline compounds, and how clarity reshapes direction.",

      philosophyDesc:
        "This is not a portfolio. It’s a reflective space about consistency, depth of thought, and the quiet process of becoming better over time.",

      buildTitle: "What I Build",
      buildLink: "Some of my work →",
      buildItems: [
        {
          title: "Dashboards & Systems",
          desc: "Turning complex data into clear, fast, and functional interfaces. Focused on structure and performance.",
        },
        {
          title: "Tools & Products",
          desc: "Simple software that solves specific problems without the noise.",
        },
      ],

      principlesTitle: "Principles",
      principles: [
        {
          label: "Clarity over noise",
          desc: "Remove the unnecessary until only the essential remains.",
        },
        {
          label: "Consistency over intensity",
          desc: "Small, steady actions are more powerful than occasional bursts.",
        },
        {
          label: "Depth over visibility",
          desc: "Focus on quality and understanding, not just being seen.",
        },
      ],

      writingTitle: "Writing",

      nowTitle: "Now",
      nowDesc:
        "Currently focused on building a life that values depth over noise — through discipline, meaningful work, and steady growth.",

      ctaTitle:
        "I’m open to freelance projects that focus on quality, structure, and clear user experience.",
      ctaDesc:
        "If you have a specific need or an idea you’d like to build, let’s talk.",
      ctaPortfolio: "For selected work and projects, see",
      ctaLink: "Contact via Email",
    },
    id: {
      philosophyTitle:
        "Saya tertarik pada pertumbuhan — bagaimana ia terbentuk secara diam-diam, bagaimana disiplin membentuk arah, dan bagaimana kejelasan mengubah keputusan.",

      philosophyDesc:
        "Ini bukan portfolio. Ini ruang refleksi tentang konsistensi, kedalaman berpikir, dan proses menjadi lebih baik secara perlahan.",

      buildTitle: "Apa Yang Saya Bangun",
      buildLink: "Beberapa hasil karya →",
      buildItems: [
        {
          title: "Dashboard & Sistem",
          desc: "Mengubah data kompleks menjadi antarmuka yang jelas, cepat, dan fungsional. Fokus pada struktur dan performa.",
        },
        {
          title: "Tools & Products",
          desc: "Software sederhana yang menyelesaikan masalah spesifik tanpa kebisingan.",
        },
      ],

      principlesTitle: "Prinsip",
      principles: [
        {
          label: "Kejelasan di atas kebisingan",
          desc: "Hapus hal yang tidak perlu hingga tersisa yang esensial.",
        },
        {
          label: "Konsistensi di atas intensitas",
          desc: "Tindakan kecil yang stabil lebih kuat daripada ledakan sesaat.",
        },
        {
          label: "Kedalaman di atas visibilitas",
          desc: "Fokus pada kualitas, bukan sekadar terlihat.",
        },
      ],

      writingTitle: "Tulisan",

      nowTitle: "Saat Ini",
      nowDesc:
        "Saat ini saya fokus membangun hidup yang lebih dalam daripada kebisingan — melalui disiplin, pekerjaan yang bermakna, dan pertumbuhan yang konsisten.",

      ctaTitle:
        "Saya terbuka untuk proyek freelance yang fokus pada kualitas, struktur, dan pengalaman pengguna yang jelas.",
      ctaDesc:
        "Jika Anda memiliki kebutuhan atau ide, mari berdiskusi.",
      ctaPortfolio: "Untuk karya dan proyek terpilih, lihat",
      ctaLink: "Contact via Email",
    },
  };

  const t = content[lang];

  return (
    <main className="min-h-screen selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <div className="max-w-2xl mx-auto px-6 py-24 md:py-32 space-y-32">
        {/* HERO */}
        <Reveal delay={0}>
          <Hero />
        </Reveal>

        {/* PHILOSOPHY */}
        <Reveal delay={100}>
          <section className="space-y-8">
            <h3 className="text-xs md:text-xs font-medium tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
              {t.philosophyTitle}
            </h3>

            <p className="text-lg text-neutral-500 dark:text-neutral-400 font-light max-w-xl">
              {t.philosophyDesc}
            </p>
          </section>
        </Reveal>

        {/* WHAT I BUILD */}
        <Reveal delay={200}>
          <section className="space-y-12">
            <div className="flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-medium">
                {t.buildTitle}
              </h3>

              <a
                href="https://me.renaldi.fun"
                target="_blank"
                className="text-xs font-medium text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300"
              >
                {t.buildLink}
              </a>
            </div>

            <div className="grid gap-10">
              {t.buildItems.map((item, index) => (
                <div key={index} className="group space-y-2">
                  <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* PRINCIPLES */}
        <Reveal delay={300}>
          <section className="space-y-12">
            <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-medium">
              {t.principlesTitle}
            </h2>

            <div className="space-y-10">
              {t.principles.map((principle, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-base font-medium text-neutral-800 dark:text-neutral-200">
                    {principle.label}
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* WRITING */}
        <Reveal delay={400}>
          <WritingList />
        </Reveal>

        {/* NOW */}
        <Reveal delay={500}>
          <section className="space-y-8">
            <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-medium">
              {t.nowTitle}
            </h2>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-xl italic">
              “{t.nowDesc}”
            </p>
          </section>
        </Reveal>

        {/* CTA */}
        <Reveal delay={600}>
          <section className="p-8 md:p-12 rounded-2xl bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800/50 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-medium leading-tight">{t.ctaTitle}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-lg">
                {t.ctaDesc}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:renaldimohamad@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300"
              >
                {t.ctaLink} <span>→</span>
              </a>

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800/50">
                <p className="text-sm text-neutral-400 dark:text-neutral-500 font-light">
                  {t.ctaPortfolio}{" "}
                  <a
                    href="https://me.renaldi.fun"
                    target="_blank"
                    className="text-neutral-900 dark:text-neutral-100 font-medium hover:underline decoration-neutral-300 underline-offset-4"
                  >
                    me.renaldi.fun
                  </a>
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* FOOTER */}
        <Reveal delay={700}>
          <Footer />
        </Reveal>
      </div>
    </main>
  );
}
