import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { getActiveCollections } from "@/data/collections";

export function CollectionsSection() {
  const collections = getActiveCollections();

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Коллекции"
          title="Три пейзажа камня"
          text="Каждая коллекция собрана вокруг одной природной гаммы: вода, графит или земля."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {collections.map((collection) => (
            <article key={collection.id}>
              <Link href={`/collections/${collection.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-card">
                  <Image
                    src={collection.coverImage}
                    alt={collection.coverAlt}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 font-serif text-3xl tracking-wide">{collection.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{collection.description}</p>
                <span className="mt-4 inline-block text-[12px] tracking-[0.16em] uppercase">Перейти к коллекции</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
