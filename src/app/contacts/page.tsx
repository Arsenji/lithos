import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { LeadForm } from "@/components/lead/LeadForm";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Заявка LITHOS: модель, диаметр руки и ник в Telegram или ВКонтакте.",
};

export default function ContactsPage() {
  return (
    <main className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <p className="text-[11px] tracking-[0.28em] text-muted uppercase">Контакты</p>
        <h1 className="mt-3 font-serif text-5xl tracking-wide">Написать LITHOS</h1>
        <p className="mt-5 text-lg text-muted">
          Напишите через форму: модель, диаметр руки и ник в Telegram или ВКонтакте. Телефон, почта и адрес шоурума появятся здесь, когда бренд их опубликует.
        </p>
        <LeadForm />
      </Container>
    </main>
  );
}
