import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/common/Logo";

export function Hero() {
  return (
    <section className="grid min-h-[calc(100svh-72px)] lg:grid-cols-[0.9fr_1.1fr]">
      <div className="order-2 flex flex-col justify-center px-5 py-14 sm:px-8 lg:order-1 lg:px-16">
        <p className="text-[11px] tracking-[0.28em] text-muted uppercase">LITHOS · 2026</p>
        <Logo className="mt-8 h-28 w-28" />
        <h1 className="mt-6 max-w-xl font-serif text-5xl leading-tight font-normal tracking-wide sm:text-6xl">
          Украшения, созданные природой
        </h1>
        <p className="mt-5 max-w-md text-lg text-muted">Натуральные камни. Ручная сборка. Индивидуальный подход.</p>
        <Link
          href="/collections"
          className="mt-8 inline-flex min-h-12 w-fit items-center bg-gold px-6 text-[12px] font-medium tracking-[0.16em] text-ink uppercase"
        >
          Смотреть коллекцию
        </Link>
      </div>
      <div className="relative order-1 min-h-[68vw] lg:order-2 lg:min-h-full">
        <Image
          src="/images/hero.jpg"
          alt="Браслет из натуральных камней на тёмной каменной поверхности"
          fill
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
