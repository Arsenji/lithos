import type { Metadata } from "next";
import { Container } from "@/components/common/Container";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных",
  description: "Как LITHOS запрашивает согласие перед отправкой заявки в Telegram.",
};

export default function ConsentPage() {
  return (
    <main className="py-14 sm:py-20">
      <Container className="max-w-3xl space-y-5 text-muted">
        <p className="text-[11px] tracking-[0.28em] uppercase">Документ</p>
        <h1 className="font-serif text-5xl text-paper">Обработка персональных данных</h1>
        <p className="text-sm text-gold">Рабочий текст для проверки юристом. Оператор, адрес и реквизиты нужно вписать до запуска бота.</p>
        <p>
          Персональные данные появляются только если человек сам отправляет заявку в Telegram. До кнопки «Отправить заявку» бот показывает, какие сведения уйдут команде LITHOS, и просит явное подтверждение.
        </p>
        <p>Согласие можно не давать: без него заявка не уходит. Отзыв согласия направляется тем же каналом, которым пришла заявка.</p>
        <p>Состав данных ограничен: имя, контакт, город, размер и комментарий к изделию. Паспорт, платёжные реквизиты и данные карты не запрашиваются.</p>
        <p>Сайт не сохраняет эту информацию у себя. Передача происходит внутри Telegram после подтверждения на стороне бота.</p>
      </Container>
    </main>
  );
}
