import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/common/Logo";

export function Hero() {
  return (
    <section className="relative lg:grid lg:min-h-[760px] lg:grid-cols-2">
      <div className="pointer-events-none absolute inset-0 lg:hidden" aria-hidden="true">
        <Image src="/images/hero.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
      </div>
      <div className="relative flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-16 lg:py-20">
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
      <div className="relative hidden min-h-[760px] lg:block">
        <Image
          src="/images/hero.jpg"
          alt="Браслет из натуральных камней на тёмной каменной поверхности"
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
