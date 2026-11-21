import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-5 py-24">
      <p className="text-[11px] tracking-[0.28em] text-muted uppercase">404</p>
      <h1 className="mt-3 font-serif text-5xl">Страница не найдена</h1>
      <Link href="/catalog" className="mt-8 inline-block text-[12px] tracking-[0.16em] text-gold uppercase">
        В каталог
      </Link>
    </main>
  );
}
