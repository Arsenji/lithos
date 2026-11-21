import type { Product } from "@/types/product";

const sizes = ["16", "17", "18", "19", "20"];

export const products: Product[] = [
  {
    id: "sea_mist",
    slug: "sea-mist",
    name: "Sea Mist",
    collectionId: "sea_mist",
    price: 2790,
    shortDescription: "Светлая нить в холодной гамме тумана и воды.",
    description:
      "Браслет из светлых натуральных камней. Каждый камень отобран вручную: у лабрадорита и перламутра свой рисунок, поэтому две нити не повторяют друг друга. Длина согласуется по обхвату запястья.",
    materials: ["Лабрадорит", "Перламутр", "Горный хрусталь", "Серебро 925"],
    availableSizes: sizes,
    images: [
      {
        src: "/images/products/sea-mist.jpg",
        type: "actual",
        alt: "Браслет Sea Mist на тёмном песке у кромки воды",
      },
    ],
    status: "made_to_order",
    isActive: true,
    popularity: 100,
    telegramStartPayload: "product_sea_mist",
  },
  {
    id: "blue_horizon",
    slug: "blue-horizon",
    name: "Blue Horizon",
    collectionId: "sea_mist",
    price: 3490,
    shortDescription: "Многослойная нить с холодным блеском лабрадорита.",
    description:
      "Модель для тех, кто носит несколько нитей вместе. В основе лабрадорит и светлый жемчуг. Оттенок вспышки камня зависит от партии и не повторяется.",
    materials: ["Лабрадорит", "Жемчуг", "Содалит", "Серебро 925"],
    availableSizes: sizes,
    images: [
      {
        src: "/images/products/blue-horizon.jpg",
        type: "actual",
        alt: "Стопка браслетов с лабрадоритом и жемчугом на каменной сфере",
      },
    ],
    status: "in_development",
    isActive: true,
    popularity: 80,
    telegramStartPayload: "product_blue_horizon",
  },
  {
    id: "black_core",
    slug: "black-core",
    name: "Black Core",
    collectionId: "massive_stone",
    price: 4290,
    shortDescription: "Плотная тёмная нить с редкими вспышками лабрадорита.",
    description:
      "Сдержанное украшение из оникса, агата и лабрадорита. Камень холодный на ощупь, поверхность матовая или со слабым блеском. Собирается вручную на прочной ювелирной нити.",
    materials: ["Оникс", "Чёрный агат", "Лабрадорит", "Жемчуг", "Серебро 925"],
    availableSizes: sizes,
    images: [
      {
        src: "/images/products/black-core.jpg",
        type: "actual",
        alt: "Тёмное ожерелье с лабрадоритом и жемчугом на базальте",
      },
    ],
    status: "made_to_order",
    isActive: true,
    popularity: 90,
    telegramStartPayload: "product_black_core",
  },
  {
    id: "massive_stone",
    slug: "massive-stone",
    name: "Massive Stone",
    collectionId: "massive_stone",
    price: 4590,
    shortDescription: "Крупные цилиндры агата и яшмы. Вес и графит.",
    description:
      "Нить с крупными бусинами. Форма камня сохраняет природную неровность, фурнитура минимальна. Подходит как одиночное украшение.",
    materials: ["Чёрный агат", "Яшма", "Гематит", "Лабрадорит", "Серебро 925"],
    availableSizes: sizes,
    images: [
      {
        src: "/images/products/massive-stone.jpg",
        type: "actual",
        alt: "Ожерелье Massive Stone из тёмных цилиндрических бусин на камне",
      },
    ],
    status: "made_to_order",
    isActive: true,
    popularity: 95,
    telegramStartPayload: "product_massive_stone",
  },
  {
    id: "red_earth",
    slug: "red-earth",
    name: "Red Earth",
    collectionId: "red_earth",
    price: 3190,
    shortDescription: "Тёплая нить из красного камня и барочного жемчуга.",
    description:
      "Короткое ожерелье в терракотовой гамме. Барочный жемчуг ставится как единственный светлый акцент. Длина и замок согласуются перед сборкой.",
    materials: ["Красная яшма", "Коралл", "Барочный жемчуг", "Позолота 14K"],
    availableSizes: sizes,
    images: [
      {
        src: "/images/products/red-earth.jpg",
        type: "actual",
        alt: "Ожерелье Red Earth из красных бусин и жемчуга",
      },
    ],
    status: "made_to_order",
    isActive: true,
    popularity: 88,
    telegramStartPayload: "product_red_earth",
  },
  {
    id: "terra",
    slug: "terra",
    name: "Terra",
    collectionId: "red_earth",
    price: 3890,
    shortDescription: "Браслет с тигровым глазом и тёмным камнем.",
    description:
      "Мужская и универсальная нить: тигровый глаз, гематит и оникс. Носится как личный знак, без декоративной фурнитуры.",
    materials: ["Тигровый глаз", "Гематит", "Оникс", "Сердолик"],
    availableSizes: sizes,
    images: [
      {
        src: "/images/products/terra.jpg",
        type: "actual",
        alt: "Браслеты Terra с тигровым глазом на запястье",
      },
    ],
    status: "available",
    isActive: true,
    popularity: 70,
    telegramStartPayload: "product_terra",
  },
  {
    id: "archive_sample",
    slug: "archive-sample",
    name: "Archive",
    collectionId: "massive_stone",
    price: 1900,
    shortDescription: "Скрытая позиция для проверки каталога.",
    description: "Не показывается в каталоге.",
    materials: ["Оникс"],
    availableSizes: sizes,
    images: [
      {
        src: "/images/products/black-core.jpg",
        type: "actual",
        alt: "Скрытое изделие",
      },
    ],
    status: "unavailable",
    isActive: false,
    popularity: 0,
    telegramStartPayload: "product_archive_sample",
  },
];

export function getActiveProducts() {
  return products.filter((product) => product.isActive);
}

export function getProductBySlug(slug: string) {
  return getActiveProducts().find((product) => product.slug === slug);
}

export function getProductsByCollection(collectionId: string) {
  return getActiveProducts().filter((product) => product.collectionId === collectionId);
}

export function getFeaturedProducts() {
  return [...getActiveProducts()].sort((a, b) => b.popularity - a.popularity).slice(0, 3);
}
