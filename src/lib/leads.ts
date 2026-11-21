import { getProductById } from "@/data/products";
import type { BraceletLead, LeadChannel } from "@/types/lead";

const recent = new Map<string, number>();

export function parseBraceletLead(input: unknown): { lead: BraceletLead } | { error: string } {
  if (!input || typeof input !== "object") return { error: "Заполните форму целиком." };
  const body = input as Record<string, unknown>;
  const product = getProductById(String(body.productId ?? ""));
  if (!product) return { error: "Выберите модель из каталога." };

  const diameter = Number(String(body.diameterCm ?? "").replace(",", "."));
  if (!Number.isFinite(diameter) || diameter < 12 || diameter > 26) {
    return { error: "Укажите диаметр руки от 12 до 26 см." };
  }
  const rounded = Math.round(diameter * 10) / 10;

  const channel = body.channel === "vk" ? "vk" : body.channel === "telegram" ? "telegram" : null;
  if (!channel) return { error: "Выберите Telegram или ВКонтакте." };

  const nickname = String(body.nickname ?? "")
    .trim()
    .replace(/^@+/, "");
  const min = channel === "telegram" ? 5 : 3;
  if (!/^[a-zA-Z0-9._]+$/.test(nickname) || nickname.length < min || nickname.length > 32) {
    return {
      error:
        channel === "telegram"
          ? "Ник Telegram: от 5 до 32 символов, латиница, цифры и подчёркивание."
          : "Ник ВКонтакте: от 3 до 32 символов, латиница, цифры, точка или подчёркивание.",
    };
  }

  return { lead: { productId: product.id, diameterCm: rounded, channel, nickname } };
}

export async function deliverBraceletLead(lead: BraceletLead, ip: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    return { ok: false as const, status: 503, message: "Канал заявок ещё не подключён. Сообщение не отправлено." };
  }

  const chatId = await resolveChatId(token);
  if (!chatId) {
    return {
      ok: false as const,
      status: 503,
      message: "Напишите @lithossbot и нажмите «Старт», затем отправьте заявку ещё раз. Сообщение пока не доставлено.",
    };
  }

  const product = getProductById(lead.productId);
  if (!product) return { ok: false as const, status: 400, message: "Выберите модель из каталога." };

  const now = Date.now();
  const last = recent.get(ip) ?? 0;
  if (now - last < 20_000) return { ok: false as const, status: 429, message: "Подождите немного и отправьте заявку ещё раз." };
  recent.set(ip, now);

  const id = leadNumber();
  const text = [
    `Заявка #${id}`,
    `Модель: ${product.name}`,
    `Диаметр руки: ${formatDiameter(lead.diameterCm)} см`,
    `Связь: ${contactLine(lead.channel, lead.nickname)}`,
    "Заявка не подтверждает заказ.",
  ].join("\n");

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  const payload = (await response.json().catch(() => null)) as { ok?: boolean } | null;
  if (!response.ok || !payload?.ok) {
    recent.delete(ip);
    return { ok: false as const, status: 502, message: "Не удалось отправить заявку. Попробуйте ещё раз." };
  }

  return { ok: true as const, status: 200, id };
}

async function resolveChatId(token: string) {
  const configured = process.env.TELEGRAM_LEADS_CHAT_ID?.trim();
  if (configured) return configured;

  const response = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
  const payload = (await response.json().catch(() => null)) as {
    ok?: boolean;
    result?: { message?: { chat?: { id?: number; type?: string } } }[];
  } | null;
  if (!payload?.ok) return null;

  let chatId = "";
  for (const update of payload.result ?? []) {
    const chat = update.message?.chat;
    if (chat?.id && chat.type === "private") chatId = String(chat.id);
  }
  return chatId || null;
}

function leadNumber() {
  const date = new Date();
  const part = (value: number) => String(value).padStart(2, "0");
  const stamp = `${String(date.getFullYear()).slice(2)}${part(date.getMonth() + 1)}${part(date.getDate())}-${part(date.getHours())}${part(date.getMinutes())}${part(date.getSeconds())}`;
  return `LTH-${stamp}`;
}

function formatDiameter(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1).replace(".", ",");
}

function contactLine(channel: LeadChannel, nickname: string) {
  if (channel === "vk") return `ВКонтакте https://vk.com/${nickname}`;
  return `Telegram @${nickname}`;
}
