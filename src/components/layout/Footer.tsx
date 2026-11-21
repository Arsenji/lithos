import Link from "next/link";
import { Logo } from "@/components/common/Logo";
import { telegramHref, customOrderPayload } from "@/lib/telegram";

const navigation = [
  { href: "/collections", label: "Коллекции" },
  { href: "/catalog", label: "Каталог" },
  { href: "/about", label: "О бренде" },
  { href: "/custom-order", label: "Индивидуальный заказ" },
  { href: "/packaging", label: "Упаковка" },
  { href: "/contacts", label: "Контакты" },
];

const legal = [
  { href: "/privacy", label: "Политика конфиденциальности" },
  { href: "/consent", label: "Обработка персональных данных" },
  { href: "/order-terms", label: "Условия заявки" },
];

export function Footer() {
  const telegram = telegramHref(customOrderPayload);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Logo />
            <span className="font-serif tracking-[0.28em]">LITHOS</span>
          </Link>
          <p className="mt-4 font-quote text-2xl text-gold italic">Нить времени</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Украшения из натуральных камней. Каждая нить собирается вручную под одного человека.
          </p>
        </div>
        <div>
          <p className="mb-4 text-[11px] tracking-[0.24em] text-muted uppercase">Навигация</p>
          <ul className="space-y-2 text-sm">
            {navigation.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-[11px] tracking-[0.24em] text-muted uppercase">Связь</p>
          <Link href="/#zayavka" className="text-sm hover:text-gold">
            Оставить заявку
          </Link>
          {telegram ? (
            <a href={telegram} className="mt-3 block text-sm text-muted hover:text-gold" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          ) : null}
          <ul className="mt-6 space-y-2 text-sm text-muted">
            {legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
