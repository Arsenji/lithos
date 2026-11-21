export const siteConfig = {
  name: "LITHOS",
  tagline: "Нить времени",
  description:
    "Украшения LITHOS из натуральных камней. Ручная сборка и индивидуальный подход. Заявка оформляется в Telegram.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  telegramBotUsername: (process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME || "lithossbot").replace(/^@/, ""),
  locale: "ru_RU",
};
