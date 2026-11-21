import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { getActiveCollections } from "@/data/collections";

export const metadata: Metadata = {
  title: "Коллекции",
  description: "Sea Mist, Massive Stone и Red Earth — три цветовых направления LITHOS.",
};

export default function CollectionsPage() {
  const collections = getActiveCollections();

  return (
    <main className="py-14 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Коллекции" title="Пейзажи камня" text="Три направления. Внутри каждого — камни одной природной гаммы." />
        <div className="mt-12 grid gap-10">
          {collections.map((collection) => (
            <article key={collection.id} className="grid items-center gap-6 border-t border-line pt-10 md:grid-cols-[0.8fr_1.2fr]">
              <Link href={`/collections/${collection.slug}`} className="relative block aspect-[4/5] bg-card md:aspect-[5/4]">
                <Image src={collection.coverImage} alt={collection.coverAlt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
              </Link>
              <div>
                <p className="text-[11px] tracking-[0.22em] text-gold uppercase">{collection.concept}</p>
                <h2 className="mt-2 font-serif text-5xl">{collection.name}</h2>
                <p className="mt-4 max-w-lg text-muted">{collection.description}</p>
                <p className="mt-4 text-sm text-muted">{collection.materials.join(" · ")}</p>
                <Link href={`/collections/${collection.slug}`} className="mt-6 inline-block text-[12px] tracking-[0.16em] uppercase">
                  Открыть коллекцию
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
