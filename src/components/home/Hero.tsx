import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/common/Logo";

export function Hero() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 lg:hidden" aria-hidden="true">
        <Image src="/images/hero.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
      </div>
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src="/images/hero.jpg"
          alt="Браслет из натуральных камней на тёмной каменной поверхности"
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col justify-center px-5 py-14 sm:px-8 lg:min-h-[760px] lg:px-0 lg:py-20">
        <div className="lg:w-1/2 lg:pr-16 lg:pl-8">
          <p className="text-[11px] tracking-[0.28em] text-muted uppercase">LITHOS · 2026</p>
          <Logo className="mt-6 h-16 w-16" />
          <h1 className="mt-5 max-w-xl font-serif text-5xl leading-tight font-normal tracking-wide sm:text-6xl">
            Украшения, созданные природой
          </h1>
          <p className="mt-4 max-w-md text-lg text-muted">Натуральные камни. Ручная сборка. Индивидуальный подход.</p>
          <Link
            href="/collections"
            className="mt-8 inline-flex min-h-12 w-fit items-center bg-gold px-6 text-[12px] font-medium tracking-[0.16em] text-ink uppercase"
          >
            Смотреть коллекцию
          </Link>
        </div>
      </div>
    </section>
  );
}
