import { siteConfig } from "@/config/site";

export function telegramHref(startPayload: string) {
  const username = siteConfig.telegramBotUsername;
  if (!username || !startPayload) return null;
  return `https://t.me/${username}?start=${encodeURIComponent(startPayload)}`;
}

export const customOrderPayload = "custom_order";
