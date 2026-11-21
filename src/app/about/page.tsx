import type { Metadata } from "next";
import { Container } from "@/components/common/Container";

export const metadata: Metadata = {
  title: "О бренде",
  description: "LITHOS собирает украшения из натуральных камней вручную, под одного человека.",
};

const points = [
  {
    title: "Происхождение",
    text: "Камень старше любого украшения. Мы не пересказываем его «историю» как легенду, а оставляем видимой фактуру, которая сложилась в породе.",
  },
  {
    title: "Неповторяемость",
    text: "Рисунок, вес и оттенок минерала не тиражируются. Две нити с одним названием всё равно различаются.",
  },
  {
    title: "Сборка",
    text: "Бусины раскладываются и нанизываются вручную. Длина и замок согласуются до сборки.",
  },
  {
    title: "Деталь",
    text: "Фурнитура — серебро 925 или позолота 14K. Пластик, стекло и имитации камня не используются.",
  },
];

export default function AboutPage() {
  return (
    <main className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <p className="text-[11px] tracking-[0.28em] text-muted uppercase">О бренде</p>
        <h1 className="mt-3 font-serif text-5xl tracking-wide sm:text-6xl">Нить времени</h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
          <p>
            LITHOS делает украшения из натуральных камней. Не серию одинаковых изделий, а нить, собранную под размер, палитру и характер одного человека.
          </p>
          <p>
            Мы описываем материал и работу. Не приписываем камням лечебные свойства и не обещаем, что украшение изменит состояние человека.
          </p>
        </div>
        <div className="mt-12 space-y-8 border-t border-line pt-10">
          {points.map((point) => (
            <article key={point.title}>
              <h2 className="font-serif text-3xl">{point.title}</h2>
              <p className="mt-3 text-muted">{point.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
