import Image from "next/image";
import { Container } from "@/components/common/Container";

export function HandmadeSection() {
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/brand/handmade.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
      </div>
      <Container className="relative py-20 sm:py-28">
        <p className="mb-3 text-[11px] tracking-[0.28em] text-muted uppercase">Сборка</p>
        <h2 className="max-w-xl font-serif text-5xl tracking-wide">Руками, по одной бусине</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Мастер раскладывает камни, согласует длину и фурнитуру, затем собирает нить. Срок обычно составляет 5–10 дней и называется после заявки, а не до неё.
        </p>
      </Container>
    </section>
  );
}
