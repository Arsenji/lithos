import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";

const links = [
  { href: "/", label: "Главная" },
  { href: "/collections", label: "Коллекции" },
  { href: "/catalog", label: "Каталог" },
  { href: "/about", label: "О бренде" },
  { href: "/custom-order", label: "Индивидуальный заказ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-ink/95">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center gap-6 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="LITHOS, на главную">
          <Logo />
          <span className="font-serif text-sm tracking-[0.32em]">LITHOS</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Основное меню">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-[12px] tracking-[0.14em] text-muted uppercase hover:text-paper">
              {link.label}
            </Link>
          ))}
        </nav>
        <MobileMenu links={links} />
      </div>
    </header>
  );
}
