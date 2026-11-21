import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { TelegramButton } from "@/components/common/TelegramButton";
import { customOrderPayload } from "@/lib/telegram";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Связь с LITHOS через Telegram. Заявка не является заказом.",
};

export default function ContactsPage() {
  return (
    <main className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <p className="text-[11px] tracking-[0.28em] text-muted uppercase">Контакты</p>
        <h1 className="mt-3 font-serif text-5xl tracking-wide">Написать LITHOS</h1>
        <p className="mt-5 text-lg text-muted">
          Единственный канал заявки на этом этапе — Telegram. Телефон, почта и адрес шоурума появятся здесь, когда бренд их опубликует. Мы не указываем вымышленные контакты.
        </p>
        <TelegramButton payload={customOrderPayload} event="click_custom_order" className="mt-8">
          Открыть Telegram
        </TelegramButton>
      </Container>
    </main>
  );
}
