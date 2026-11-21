export type LeadDraft = {
  productId: string | null;
  collectionId: string | null;
  intent: "product" | "collection" | "custom_order";
  size: string;
  name: string;
  contact: string;
  city: string;
  comment: string;
};

export type LeadRecord = LeadDraft & {
  id: string;
  createdAt: string;
  status: "new";
};

export type LeadChannel = "telegram" | "vk";

export type BraceletLead = {
  productId: string;
  diameterCm: number;
  channel: LeadChannel;
  nickname: string;
};
