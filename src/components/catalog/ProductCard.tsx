import Image from "next/image";
import Link from "next/link";
import { collectionName, formatPrice, statusLabel } from "@/lib/utils";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];

  return (
    <article className="group">
      <Link href={`/catalog/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-card">
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          ) : null}
          {image?.type === "concept" ? (
            <span className="absolute bottom-3 left-3 bg-ink/80 px-2 py-1 text-[10px] tracking-[0.16em] text-paper uppercase">
              Концептуальная визуализация
            </span>
          ) : null}
        </div>
        <div className="pt-4">
          <p className="text-[11px] tracking-[0.2em] text-muted uppercase">{collectionName(product.collectionId)}</p>
          <h3 className="mt-1 font-serif text-2xl tracking-wide">{product.name}</h3>
          <p className="mt-2 text-sm text-muted">{product.shortDescription}</p>
          <div className="mt-3 flex items-center justify-between gap-3 text-sm">
            <span>{formatPrice(product.price)}</span>
            <span className="text-gold">{statusLabel(product.status)}</span>
          </div>
          <span className="mt-4 inline-block text-[12px] tracking-[0.16em] text-paper uppercase underline-offset-4 group-hover:underline">
            Подробнее
          </span>
        </div>
      </Link>
    </article>
  );
}
