import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { LeadForm } from "@/components/lead/LeadForm";
import { getActiveCollections } from "@/data/collections";

export const metadata: Metadata = {
  title: "Индивидуальный заказ",
  description: "Подбор натуральных камней и сборка украшения LITHOS по заявке в Telegram.",
};

const steps = ["Тип украшения", "Камни и гамма", "Размер", "Ориентир по бюджету", "Контакт и комментарий"];

export default function CustomOrderPage() {
  const collections = getActiveCollections();

  return (
    <main className="py-14 sm:py-20">
      <Container>
        <p className="text-[11px] tracking-[0.28em] text-muted uppercase">Индивидуальный заказ</p>
        <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-tight tracking-wide sm:text-6xl">Украшение, созданное под вас</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          Выберите направление, которое вам близко. Мы поможем подобрать натуральные камни и собрать украшение с учётом ваших пожеланий.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {collections.map((collection) => (
            <article key={collection.id} className="border border-line p-5">
              <h2 className="font-serif text-3xl">{collection.name}</h2>
              <p className="mt-3 text-sm text-muted">{collection.concept}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{collection.materials.join(" · ")}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 border-t border-line pt-10">
          <h2 className="font-serif text-3xl">Как согласуем</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step}>
                <span className="text-[11px] tracking-[0.2em] text-gold">0{index + 1}</span>
                <p className="mt-2 text-sm">{step}</p>
              </li>
            ))}
          </ol>
        </div>
        <LeadForm />
      </Container>
    </main>
  );
}
