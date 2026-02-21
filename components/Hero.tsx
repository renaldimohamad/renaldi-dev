import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Hero() {
  return (
    <section className="space-y-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14">
            <Image
              src="/images/profile_aldi_2.jpg"
              alt="Renaldi Mohamad"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>

          {/* <div className="relative w-14 h-14">
            <Image
              src="/images/paraf_aldi.png"
              alt="Renaldi Mohamad"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div> */}

          {/* Name lebih soft */}
          <span className="text-[18px] md:text-[19px] font-normal text-neutral-800 dark:text-neutral-500">
            Hi, I’m Renaldi.
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* <LanguageToggle /> */}
          <ThemeToggle />
        </div>
      </div>

      <p className="text-[19px] md:text-[20px] leading-[1.5] font-normal text-neutral-800 dark:text-neutral-100">
        I’m building quietly — in systems, in habits, and in life.
      </p>

      <p className="text-[16px] leading-[1.8] text-neutral-600 dark:text-neutral-400 max-w-xl">
        This is a space for reflection — on growth that isn’t loud, discipline
        that compounds, and clarity that takes time.
      </p>

      <div className="pt-2">
        <p className="text-neutral-400 dark:text-neutral-500 text-sm">
          — Renaldi
        </p>
      </div>
    </section>
  );
}
