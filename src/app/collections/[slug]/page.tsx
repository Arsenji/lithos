import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { TrackView } from "@/components/common/TrackView";
import { TelegramButton } from "@/components/common/TelegramButton";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { getActiveCollections, getCollectionBySlug } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";

type Params = { slug: string };

export function generateStaticParams() {
  return getActiveCollections().map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return { title: "Коллекция" };
  return { title: collection.name, description: collection.description };
}

export default async function CollectionPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();
  const products = getProductsByCollection(collection.id);

  return (
    <main>
      <TrackView event="view_collection" id={collection.id} />
      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[70vw] lg:min-h-[80vh]">
          <Image src={collection.coverImage} alt={collection.coverAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col justify-center px-5 py-14 sm:px-10 lg:px-16">
          <p className="text-[11px] tracking-[0.24em] text-gold uppercase">{collection.concept}</p>
          <h1 className="mt-3 font-serif text-6xl tracking-wide">{collection.name}</h1>
          <p className="mt-5 max-w-md text-lg text-muted">{collection.description}</p>
          <p className="mt-4 text-sm text-muted">{collection.materials.join(" · ")}</p>
          <TelegramButton payload={collection.telegramStartPayload} className="mt-8" event="click_telegram">
            Заявка на коллекцию
          </TelegramButton>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="mb-8 font-serif text-4xl">Модели</h2>
        <ProductGrid products={products} />
      </section>
    </main>
  );
}
