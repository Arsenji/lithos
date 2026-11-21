import type { Metadata } from "next";
import { Container } from "@/components/common/Container";

export const metadata: Metadata = {
  title: "Упаковка",
  description: "Фирменная упаковка LITHOS: коробка, мешочек, карточка, памятка по уходу и защита при доставке.",
};

const items = [
  { title: "Коробка", text: "Жёсткая коробка в цвете камня. Без глянца и без лишней графики: имя бренда и больше ничего." },
  { title: "Мешочек", text: "Мягкий чехол для хранения. Украшение не лежит в коробке после того, как её открыли." },
  { title: "Карточка", text: "Название модели и перечень камней. Это запись о составе, а не сертификат лечебных свойств." },
  { title: "Уход", text: "Короткая памятка: снимать перед водой и спортом, хранить отдельно от металла, протирать мягкой тканью." },
  { title: "Защита", text: "Внешний конверт или короб для доставки, чтобы фирменная упаковка доехала целой." },
];

export default function PackagingPage() {
  return (
    <main className="bg-sand py-14 text-ink sm:py-20">
      <Container className="max-w-3xl">
        <p className="text-[11px] tracking-[0.28em] text-line uppercase">Упаковка</p>
        <h1 className="mt-3 font-serif text-5xl tracking-wide sm:text-6xl">Фирменный комплект</h1>
        <p className="mt-5 text-lg text-ink/70">Украшение приезжает собранным комплектом. Состав один и тот же для каждой модели.</p>
        <div className="mt-10 space-y-6">
          {items.map((item) => (
            <article key={item.title} className="border-t border-line/40 pt-6">
              <h2 className="font-serif text-3xl">{item.title}</h2>
              <p className="mt-2 text-ink/75">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
