import type { Metadata } from "next";
import { Container } from "@/components/common/Container";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Как LITHOS обращается с данными на сайте и в Telegram-заявке.",
};

export default function PrivacyPage() {
  return (
    <main className="py-14 sm:py-20">
      <Container className="max-w-3xl space-y-5 text-muted">
        <p className="text-[11px] tracking-[0.28em] uppercase">Документ</p>
        <h1 className="font-serif text-5xl text-paper">Политика конфиденциальности</h1>
        <p className="text-sm text-gold">Рабочий текст для проверки юристом перед публикацией. Это не замена юридической консультации.</p>
        <p>Сайт LITHOS показывает каталог и ведёт в Telegram. Сам сайт не принимает оплату и не хранит заявку.</p>
        <h2 className="pt-4 font-serif text-3xl text-paper">Какие данные могут появиться</h2>
        <p>Имя, контакт, город и комментарий человек сообщает уже в Telegram-боте, если решает оставить заявку. Эти сведения не кладутся в адрес страницы.</p>
        <h2 className="pt-4 font-serif text-3xl text-paper">Зачем они нужны</h2>
        <p>Чтобы ответить на заявку: подтвердить размер, материал, срок и ориентировочную стоимость. Других целей у этого обмена нет.</p>
        <h2 className="pt-4 font-serif text-3xl text-paper">Где они оказываются</h2>
        <p>Сообщение получает команда бренда в закрытом чате Telegram. Пока бот не подключён, сайт данные не собирает.</p>
        <h2 className="pt-4 font-serif text-3xl text-paper">Аналитика</h2>
        <p>Яндекс Метрика не включается, пока человек не дал согласие. В события не передаются имя, телефон и город.</p>
      </Container>
    </main>
  );
}
