import Link from "next/link";
import { Container } from "@/components/common/Container";

const items = [
  { title: "Коробка", text: "Плотный картон цвета камня, без глянцевой печати." },
  { title: "Мешочек", text: "Мягкий чехол, в котором нить хранится после носки." },
  { title: "Карточка", text: "Имя модели и короткая запись о камнях." },
  { title: "Уход", text: "Памятка: как снять, как хранить, чего избегать." },
  { title: "Защита", text: "Плотная внешняя упаковка для доставки." },
];

export function PackagingSection() {
  return (
    <section className="bg-sand py-20 text-ink sm:py-28">
      <Container>
        <p className="mb-3 text-[11px] tracking-[0.28em] text-line uppercase">Упаковка</p>
        <h2 className="font-serif text-5xl tracking-wide">Как изделие приезжает</h2>
        <div className="mt-10 grid gap-px bg-line/30 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <article key={item.title} className="bg-sand p-5">
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.text}</p>
            </article>
          ))}
        </div>
        <Link href="/packaging" className="mt-8 inline-block text-[12px] tracking-[0.16em] uppercase">
          Подробнее об упаковке
        </Link>
      </Container>
    </section>
  );
}
