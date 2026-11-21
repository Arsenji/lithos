"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductImage } from "@/types/product";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [active, setActive] = useState(0);
  const image = images[active] ?? images[0];
  if (!image) return null;

  return (
    <div>
      <div className="relative aspect-[4/5] bg-card">
        <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        {image.type === "concept" ? (
          <span className="absolute bottom-3 left-3 bg-ink/85 px-2 py-1 text-[10px] tracking-[0.16em] uppercase">
            Концептуальная визуализация
          </span>
        ) : null}
      </div>
      {images.length > 1 ? (
        <div className="mt-3 grid grid-cols-4 gap-2">
          {images.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(index)}
              className={`relative aspect-square ${index === active ? "outline outline-1 outline-gold" : ""}`}
              aria-label={`Фото ${index + 1}`}
            >
              <Image src={item.src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
