export type Collection = {
  id: string;
  slug: string;
  name: string;
  description: string;
  concept: string;
  materials: string[];
  coverImage: string;
  coverAlt: string;
  isActive: boolean;
  telegramStartPayload: string;
};
