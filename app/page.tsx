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
        "This is not a portfolio. It’s a reflective space — where I write about mindset, consistency, and the quiet process of becoming better over time.",

      journeyTitle: "Journey",
      journey1:
        "I left home to build something of my own. No guarantees. No shortcuts. Just a decision to continue moving forward, even when things felt uncertain.",
      journey2:
        "Living away from familiarity taught me resilience. It taught me that progress is rarely loud — and that most growth happens in silence.",
      journey3:
        "You don’t always feel stronger while growing. Sometimes you just feel tired. But growth doesn’t require excitement — it requires continuation.",
      journey4:
        "I grew up without a father figure. My mother carried everything quietly. Strength, responsibility, sacrifice — without noise.",
      journey5:
        "My sister stood beside her. Everything I build today stands on their patience, love, and belief. Depth begins at home.",

      principlesTitle: "Principles",
      principles: [
        "Clarity over noise.",
        "Consistency over intensity.",
        "Depth over visibility.",
        "Build slowly. Build steadily.",
      ],

      notesTitle: "Reflections",
      notes: [
        "Invisible habits create visible change.",
        "Discipline protects momentum.",
        "Not everything meaningful needs an audience.",
      ],

      nowTitle: "Now",
      nowDesc:
        "Currently focused on building a life that values depth over noise — through discipline, thoughtful work, and steady growth.",
    },
    id: {
      philosophyTitle:
        "Saya tertarik pada pertumbuhan — bagaimana ia terbentuk secara diam-diam, bagaimana disiplin membentuk arah, dan bagaimana kejelasan mengubah keputusan.",

      philosophyDesc:
        "Ini bukan portfolio. Ini ruang refleksi — tentang konsistensi, kedewasaan berpikir, dan proses menjadi lebih baik secara perlahan.",

      journeyTitle: "Perjalanan",
      journey1:
        "Saya pernah meninggalkan rumah untuk membangun sesuatu dari awal. Tanpa kepastian. Tanpa jaminan. Hanya keputusan untuk terus melangkah.",
      journey2:
        "Hidup jauh dari zona nyaman mengajarkan saya bahwa pertumbuhan jarang terasa heroik. Ia sering terasa sepi — dan justru di situlah kekuatannya.",
      journey3:
        "Kita tidak selalu merasa kuat saat bertumbuh. Kadang hanya terasa lelah. Tapi pertumbuhan tidak membutuhkan semangat besar — ia membutuhkan keberlanjutan.",
      journey4:
        "Saya tumbuh tanpa sosok ayah. Ibu saya memikul tanggung jawab itu dengan tenang. Tanpa banyak bicara, tapi penuh kekuatan.",
      journey5:
        "Kakak saya berdiri di sampingnya. Apa pun yang saya bangun hari ini berdiri di atas doa, kesabaran, dan cinta mereka. Kedalaman selalu berawal dari rumah.",

      principlesTitle: "Prinsip",
      principles: [
        "Kejelasan lebih penting daripada kebisingan.",
        "Konsistensi lebih kuat daripada semangat sesaat.",
        "Kedalaman lebih berarti daripada validasi.",
        "Bangun perlahan. Bangun dengan sadar.",
      ],

      notesTitle: "Refleksi",
      notes: [
        "Kebiasaan kecil membentuk perubahan besar.",
        "Disiplin menjaga momentum tetap hidup.",
        "Tidak semua hal bermakna perlu diumumkan.",
      ],

      nowTitle: "Saat Ini",
      nowDesc:
        "Saat ini saya fokus membangun hidup yang lebih dalam daripada bising — melalui disiplin, pekerjaan yang penuh makna, dan pertumbuhan yang konsisten.",
    },
  };

  const t = content[lang];

  return (
    <main className="min-h-screen transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-6 py-32 space-y-20">
        {/* HERO */}
        <Reveal delay={0}>
          <Hero />
        </Reveal>

        {/* PHILOSOPHY */}
        <Reveal delay={100}>
          <section className="space-y-6">
            <p className="text-[18px] leading-snug text-neutral-900 dark:text-neutral-100">
              {t.philosophyTitle}
            </p>

            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {t.philosophyDesc}
            </p>
          </section>
        </Reveal>

        {/* PRINCIPLES */}
        <Reveal delay={150}>
          <section className="space-y-6">
            <h2 className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
              {t.principlesTitle}
            </h2>

            <ul className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {t.principles.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* DIVIDER */}
        <Reveal delay={200}>
          <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
        </Reveal>

        {/* WRITING */}
        <Reveal delay={250}>
          <WritingList />
        </Reveal>

        {/* NOTES */}
        <Reveal delay={300}>
          <section className="space-y-6">
            <h2 className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
              {t.notesTitle}
            </h2>

            {t.notes.map((note, index) => (
              <p
                key={index}
                className="text-neutral-600 dark:text-neutral-400 leading-relaxed"
              >
                {note}
              </p>
            ))}
          </section>
        </Reveal>

        {/* NOW */}
        <Reveal delay={350}>
          <section className="pt-10 border-t border-neutral-200 dark:border-neutral-800">
            <h2 className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-500 mb-4">
              {t.nowTitle}
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {t.nowDesc}
            </p>
          </section>
        </Reveal>

        {/* JOURNEY */}
        <Reveal delay={130}>
          <section className="space-y-6">
            <h2 className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
              {t.journeyTitle}
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {t.journey1}
            </p>

            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {t.journey2}
            </p>

            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {t.journey3}
            </p>
          </section>
        </Reveal>

        {/* FOOTER */}
        <Reveal delay={400}>
          <Footer />
        </Reveal>
      </div>
    </main>
  );
}
