import Image from "next/image";
import { Container } from "@/components/common/Container";

export function HandmadeSection() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[16/10] bg-card">
          <Image
            src="/images/brand/handmade.jpg"
            alt="Руки мастера нанизывают жемчужину на ювелирную нить"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-3 text-[11px] tracking-[0.28em] text-muted uppercase">Сборка</p>
          <h2 className="font-serif text-5xl tracking-wide">Руками, по одной бусине</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Мастер раскладывает камни, согласует длину и фурнитуру, затем собирает нить. Срок обычно составляет 5–10 дней и называется после заявки, а не до неё.
          </p>
        </div>
      </Container>
    </section>
  );
}
