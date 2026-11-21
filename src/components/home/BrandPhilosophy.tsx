import { Container } from "@/components/common/Container";

export function BrandPhilosophy() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-[11px] tracking-[0.28em] text-muted uppercase">Философия</p>
          <h2 className="font-serif text-5xl tracking-wide sm:text-6xl">Нить времени</h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p className="font-quote text-2xl leading-snug text-paper italic sm:text-3xl">
            Каждая бусина — камень, которому тысячи и миллионы лет. Мы собираем его в нить под конкретного человека.
          </p>
          <p>Минерал не повторяется: рисунок, вес и прохлада у каждого свои. Поэтому украшение собирается вручную, а не выпускается партией.</p>
          <p>LITHOS говорит о материале, размере и сборке. Без лечебных обещаний и без сезонного шума.</p>
        </div>
      </Container>
    </section>
  );
}
