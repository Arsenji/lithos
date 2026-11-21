import type { Metadata } from "next";
import { Container } from "@/components/common/Container";

export const metadata: Metadata = {
  title: "Условия оформления заявки",
  description: "Заявка в Telegram не подтверждает заказ и не принимает оплату.",
};

export default function OrderTermsPage() {
  return (
    <main className="py-14 sm:py-20">
      <Container className="max-w-3xl space-y-5 text-muted">
        <p className="text-[11px] tracking-[0.28em] uppercase">Документ</p>
        <h1 className="font-serif text-5xl text-paper">Условия заявки</h1>
        <p>Цена в каталоге ориентировочная. Она зависит от партии камней, размера и фурнитуры.</p>
        <p>Кнопка на сайте открывает Telegram. Сообщение боту ещё не заявка, пока человек не подтвердил сводку.</p>
        <p>Отправка заявки не означает, что заказ принят, оплачен или поставлен в работу. Команда LITHOS отвечает отдельно: можно ли собрать изделие, какая итоговая стоимость и какой срок.</p>
        <p>Оплаты на сайте нет. Реквизиты, если они понадобятся, согласуются после заявки и не запрашиваются заранее.</p>
      </Container>
    </main>
  );
}
