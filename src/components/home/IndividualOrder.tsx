import { Container } from "@/components/common/Container";
import { TelegramButton } from "@/components/common/TelegramButton";
import { customOrderPayload } from "@/lib/telegram";

export function IndividualOrder() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        <p className="mb-3 text-[11px] tracking-[0.28em] text-muted uppercase">На заказ</p>
        <h2 className="max-w-3xl font-serif text-5xl leading-tight tracking-wide sm:text-6xl">
          Создайте украшение, которое отражает вас
        </h2>
        <p className="mt-5 max-w-xl text-lg text-muted">
          Палитра, размер и камни согласуются в переписке. Готового прайса под индивидуальную нить нет, пока не выбран материал.
        </p>
        <TelegramButton payload={customOrderPayload} event="click_custom_order" className="mt-8">
          Индивидуальный заказ
        </TelegramButton>
      </Container>
    </section>
  );
}
