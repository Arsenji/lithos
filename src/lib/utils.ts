import { getCollectionById } from "@/data/collections";
import type { Product, ProductStatus } from "@/types/product";

const statusLabels: Record<ProductStatus, string> = {
  concept: "Концепт",
  in_development: "Готовится к производству",
  available: "В наличии",
  made_to_order: "На заказ",
  unavailable: "Временно недоступно",
};

export function statusLabel(status: ProductStatus) {
  return statusLabels[status];
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(value);
}

export function collectionName(collectionId: string) {
  return getCollectionById(collectionId)?.name ?? collectionId;
}

export function hasConceptImage(product: Product) {
  return product.images.some((image) => image.type === "concept");
}

export type CatalogQuery = {
  collection?: string;
  price?: string;
  sort?: string;
};

export function filterProducts(items: Product[], query: CatalogQuery) {
  let next = [...items];

  if (query.collection) {
    next = next.filter((product) => product.collectionId === query.collection);
  }

  if (query.price === "under-3000") {
    next = next.filter((product) => product.price < 3000);
  } else if (query.price === "3000-6000") {
    next = next.filter((product) => product.price >= 3000 && product.price <= 6000);
  } else if (query.price === "over-6000") {
    next = next.filter((product) => product.price > 6000);
  }

  if (query.sort === "price-asc") {
    next.sort((a, b) => a.price - b.price);
  } else if (query.sort === "price-desc") {
    next.sort((a, b) => b.price - a.price);
  } else {
    next.sort((a, b) => b.popularity - a.popularity);
  }

  return next;
}
