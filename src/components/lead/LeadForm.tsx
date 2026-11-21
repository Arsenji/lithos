"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { getActiveProducts } from "@/data/products";
import { track } from "@/lib/analytics";

const fieldClass = "mt-2 w-full border border-line bg-ink px-3 py-3 text-base text-paper outline-none focus:border-gold";

export function LeadForm({
  productId,
  anchor = "zayavka",
  className = "mt-10",
}: {
  productId?: string;
  anchor?: string;
  className?: string;
}) {
  const products = getActiveProducts();
  const initial = products.some((product) => product.id === productId) ? productId! : (products[0]?.id ?? "");
  const [model, setModel] = useState(initial);
  const [diameter, setDiameter] = useState("");
  const [channel, setChannel] = useState<"telegram" | "vk">("telegram");
  const [nickname, setNickname] = useState("");
  const [consent, setConsent] = useState(false);
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; text: string } | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(null);
    setPending(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ productId: model, diameterCm: diameter, channel, nickname }),
      });
      const payload = (await response.json()) as { ok?: boolean; id?: string; message?: string };
      if (payload.ok && payload.id) {
        track("lead_submitted", { product: model });
        setResult({
          ok: true,
          text: `Заявка #${payload.id} отправлена. Это ещё не подтверждение заказа: мы напишем по указанному нику и согласуем размер и стоимость.`,
        });
        setDiameter("");
        setNickname("");
        setConsent(false);
      } else {
        setResult({ ok: false, text: payload.message || "Не удалось отправить заявку. Попробуйте ещё раз." });
      }
    } catch {
      setResult({ ok: false, text: "Не удалось отправить заявку. Попробуйте ещё раз." });
    } finally {
      setPending(false);
    }
  }

  if (!initial) return null;

  return (
    <form id={anchor} onSubmit={onSubmit} className={`${className} max-w-xl scroll-mt-24 space-y-5`}>
      <div>
        <h2 className="font-serif text-3xl">Заявка</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Оставьте модель, диаметр руки и ник. Сообщение придёт команде LITHOS. Оплаты на сайте нет.
        </p>
      </div>
      <label className="block text-sm">
        Модель
        <select className={fieldClass} value={model} onChange={(event) => setModel(event.target.value)} required>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        Диаметр руки, см
        <input
          className={fieldClass}
          inputMode="decimal"
          value={diameter}
          onChange={(event) => setDiameter(event.target.value)}
          placeholder="16,5"
          required
        />
      </label>
      <fieldset>
        <legend className="text-sm">Куда написать</legend>
        <div className="mt-2 flex gap-2">
          {(
            [
              ["telegram", "Telegram"],
              ["vk", "ВКонтакте"],
            ] as const
          ).map(([value, label]) => (
            <label
              key={value}
              className={`border px-3 py-2 text-sm ${channel === value ? "border-gold text-paper" : "border-line text-muted"}`}
            >
              <input
                className="sr-only"
                type="radio"
                name="channel"
                value={value}
                checked={channel === value}
                onChange={() => setChannel(value)}
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block text-sm">
        {channel === "telegram" ? "Ник в Telegram" : "Ник во ВКонтакте"}
        <input
          className={fieldClass}
          value={nickname}
          onChange={(event) => setNickname(event.target.value)}
          placeholder={channel === "telegram" ? "username" : "nickname"}
          autoComplete="off"
          required
        />
      </label>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
        <input
          className="mt-1"
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
        />
        <span>
          Соглашаюсь передать эти данные команде LITHOS, чтобы ответить на заявку.{" "}
          <Link href="/consent" className="text-paper underline-offset-4 hover:underline">
            Подробнее
          </Link>
        </span>
      </label>
      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 items-center bg-gold px-6 text-[12px] font-medium tracking-[0.16em] text-ink uppercase disabled:opacity-60"
      >
        {pending ? "Отправляем" : "Отправить заявку"}
      </button>
      {result ? <p className={`text-sm leading-relaxed ${result.ok ? "text-paper" : "text-gold"}`}>{result.text}</p> : null}
    </form>
  );
}
