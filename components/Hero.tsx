import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  return (
    <section className="space-y-10">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14">
            <Image
              src="/images/profile_aldi_1.png"
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

      {/* Statement lebih hidup */}
      <p className="text-[19px] md:text-[20px] leading-[1.5] font-normal text-neutral-800 dark:text-neutral-100">
        I build systems that make complex data feel simple.
      </p>

      {/* Body lebih ringan */}
      <p className="text-[16px] leading-[1.8] text-neutral-600 dark:text-neutral-400 max-w-xl">
        This is my digital space — where I document thoughts, lessons, and quiet
        realizations about engineering, clarity, and building things that
        actually work.
      </p>

      <div className="pt-2">
        <p className="text-neutral-400 dark:text-neutral-500 text-sm">
          — Renaldi
        </p>
      </div>
    </section>
  );
}
