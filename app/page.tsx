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
        "I’m interested in how systems scale, how ideas spread, and how clarity changes everything.",
      philosophyDesc:
        "This is not a portfolio. It’s a thinking room — a place where I document lessons from building, explore ideas quietly, and reflect on what actually works.",

      journeyTitle: "Journey",
      journey1:
        "I am a wanderer at heart — building a life away from where I started. No guarantees, no shortcuts — just a quiet determination to learn and build something meaningful.",
      journey2:
        "Living in someone else’s city taught me more than any course could. It taught me resilience, humility, and how to stay consistent even when no one is watching.",
      journey3:
        "Growth rarely happens in comfort. It happens when you choose to keep going anyway.",
      journey4:
        "I grew up without the presence of a father. My mother carried the responsibility of raising us on her own — quietly, consistently, and with strength that didn’t need to be loud.",
      journey5:
        "My sister stood beside her, and together they became my foundation. Everything I build today carries their sacrifice, their support, and their love. I love you, Mom. I love you, my family.",

      principlesTitle: "Principles",
      principles: [
        "Clarity over complexity.",
        "Systems should scale without drama.",
        "Good UI reduces cognitive load.",
        "Simplicity is engineered, not accidental.",
      ],

      notesTitle: "Notes",
      notes: [
        "Most systems fail not because of scale, but because of hidden complexity.",
        "A dashboard is a decision-making tool, not a decoration.",
        "Simplicity is often the hardest engineering decision.",
      ],

      nowTitle: "Now",
      nowDesc:
        "Currently building data-heavy applications and exploring system architecture patterns that reduce complexity instead of adding more layers.",
    },

    id: {
      philosophyTitle:
        "Saya tertarik pada bagaimana sistem berkembang, bagaimana ide menyebar, dan bagaimana kejelasan mengubah segalanya.",
      philosophyDesc:
        "Ini bukan portfolio. Ini ruang berpikir — tempat saya menuliskan pelajaran dari proses membangun, mengeksplorasi ide dengan tenang, dan merefleksikan apa yang benar-benar berhasil.",

      journeyTitle: "Perjalanan",
      journey1:
        "Saya adalah seorang perantau — membangun hidup jauh dari tempat saya berasal. Tanpa kepastian, tanpa jalan pintas — hanya tekad untuk terus belajar dan membangun sesuatu yang bermakna.",
      journey2:
        "Hidup di tempat yang bukan milik sendiri mengajarkan saya lebih dari sekadar teori. Ia mengajarkan ketahanan, kerendahan hati, dan konsistensi meski tidak ada yang melihat.",
      journey3:
        "Pertumbuhan jarang terjadi di zona nyaman. Ia lahir dari keputusan untuk tetap berjalan meski pelan.",
      journey4:
        "Sejak kecil saya tumbuh tanpa sosok ayah. Ibu saya membesarkan kami dengan kekuatan yang tidak banyak bicara, tetapi selalu nyata dalam tindakan.",
      journey5:
        "Kakak saya berdiri di sampingnya. Tanpa mereka, perjalanan ini akan terasa jauh lebih berat. Apa pun yang saya bangun hari ini, berdiri di atas pengorbanan dan doa mereka. Saya mencintai keluarga saya. I love you, Mom.",

      principlesTitle: "Prinsip",
      principles: [
        "Kejelasan lebih penting daripada kompleksitas.",
        "Sistem harus berkembang tanpa drama.",
        "UI yang baik mengurangi beban berpikir.",
        "Kesederhanaan adalah hasil rekayasa, bukan kebetulan.",
      ],

      notesTitle: "Catatan",
      notes: [
        "Banyak sistem gagal bukan karena skala, tetapi karena kompleksitas tersembunyi.",
        "Dashboard adalah alat pengambilan keputusan, bukan sekadar hiasan.",
        "Kesederhanaan sering kali adalah keputusan teknis yang paling sulit.",
      ],

      nowTitle: "Saat Ini",
      nowDesc:
        "Saat ini saya membangun aplikasi berbasis data dan mengeksplorasi pola arsitektur sistem yang mengurangi kompleksitas, bukan menambah lapisan baru.",
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
