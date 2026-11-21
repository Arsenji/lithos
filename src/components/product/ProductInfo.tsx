import Link from "next/link";
import { getCollectionById } from "@/data/collections";
import { formatPrice, hasConceptImage, statusLabel } from "@/lib/utils";
import type { Product } from "@/types/product";
import { ProductCTA } from "@/components/product/ProductCTA";

export function ProductInfo({ product }: { product: Product }) {
  const collection = getCollectionById(product.collectionId);

  return (
    <div className="lg:pt-4">
      {collection ? (
        <Link href={`/collections/${collection.slug}`} className="text-[11px] tracking-[0.24em] text-gold uppercase">
          {collection.name}
        </Link>
      ) : null}
      <h1 className="mt-3 font-serif text-5xl tracking-wide sm:text-6xl">{product.name}</h1>
      <p className="mt-4 text-lg text-muted">{product.shortDescription}</p>
      <p className="mt-6 font-serif text-3xl">{formatPrice(product.price)}</p>
      <p className="mt-1 text-sm text-muted">Ориентировочная стоимость. Итог согласуется после заявки.</p>
      <p className="mt-6 text-sm text-gold">{statusLabel(product.status)}</p>
      {hasConceptImage(product) ? (
        <p className="mt-4 border border-line px-4 py-3 text-sm leading-relaxed text-paper">
          Визуализация концепта. Фактический внешний вид изделия может отличаться.
        </p>
      ) : null}
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
        <p className="text-base text-paper">{product.description}</p>
        <div>
          <p className="mb-2 text-[11px] tracking-[0.22em] text-paper uppercase">Материалы</p>
          <p>{product.materials.join(" · ")}</p>
        </div>
        <div>
          <p className="mb-2 text-[11px] tracking-[0.22em] text-paper uppercase">Размеры</p>
          <p>{product.availableSizes.map((size) => `${size} см`).join(" · ")}</p>
        </div>
        <p>Каждая нить собирается вручную. Срок изготовления обычно 5–10 дней и подтверждается после заявки.</p>
        <p>Изделие приезжает в фирменной коробке, мешочке, с карточкой LITHOS и памяткой по уходу.</p>
        <p className="text-paper">Оставьте заявку, чтобы уточнить возможность изготовления, размер и окончательную стоимость изделия.</p>
      </div>
      <ProductCTA product={product} />
    </div>
  );
}
