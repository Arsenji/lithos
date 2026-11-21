import type { Collection } from "@/types/collection";

export const collections: Collection[] = [
  {
    id: "sea_mist",
    slug: "sea-mist",
    name: "Sea Mist",
    description:
      "Холодные природные оттенки: сизый, молочный, серо-голубой. Коллекция про воду, туман и тихий свет камня.",
    concept: "Вода и туман",
    materials: ["Лабрадорит", "Содалит", "Перламутр", "Горный хрусталь"],
    coverImage: "/images/collections/sea-mist.jpg",
    coverAlt: "Чокер Sea Mist из светлых камней на тёмном песке",
    isActive: true,
    telegramStartPayload: "collection_sea_mist",
  },
  {
    id: "massive_stone",
    slug: "massive-stone",
    name: "Massive Stone",
    description:
      "Чёрные, графитовые и тёмно-серые камни. Минимализм, вес и фактура, без лишнего декора.",
    concept: "Масса и графит",
    materials: ["Чёрный агат", "Оникс", "Гематит", "Яшма"],
    coverImage: "/images/collections/massive-stone.jpg",
    coverAlt: "Тёмное ожерелье из агата и лабрадорита на камне",
    isActive: true,
    telegramStartPayload: "collection_massive_stone",
  },
  {
    id: "red_earth",
    slug: "red-earth",
    name: "Red Earth",
    description:
      "Тёплые оттенки земли: терракота, охра, глубокий красный. Камни с природной текстурой.",
    concept: "Земля и тепло",
    materials: ["Красная яшма", "Тигровый глаз", "Сердолик", "Коралл"],
    coverImage: "/images/collections/red-earth.jpg",
    coverAlt: "Ожерелье Red Earth из красных камней и жемчуга",
    isActive: true,
    telegramStartPayload: "collection_red_earth",
  },
];

export function getActiveCollections() {
  return collections.filter((collection) => collection.isActive);
}

export function getCollectionBySlug(slug: string) {
  return getActiveCollections().find((collection) => collection.slug === slug);
}

export function getCollectionById(id: string) {
  return collections.find((collection) => collection.id === id);
}
