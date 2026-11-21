export type ProductStatus =
  | "concept"
  | "in_development"
  | "available"
  | "made_to_order"
  | "unavailable";

export type ImageKind = "concept" | "actual";

export type ProductImage = {
  src: string;
  type: ImageKind;
  alt: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  collectionId: string;
  price: number;
  description: string;
  shortDescription: string;
  materials: string[];
  availableSizes: string[];
  images: ProductImage[];
  status: ProductStatus;
  isActive: boolean;
  popularity: number;
  telegramStartPayload: string;
};
