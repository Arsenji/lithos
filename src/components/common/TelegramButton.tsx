"use client";

import { track, type AnalyticsEvent } from "@/lib/analytics";
import { telegramHref } from "@/lib/telegram";

export function TelegramButton({
  payload,
  children,
  event = "click_telegram",
  note,
  className = "",
}: {
  payload: string;
  children: React.ReactNode;
  event?: AnalyticsEvent;
  note?: string;
  className?: string;
}) {
  const href = telegramHref(payload);

  if (!href) {
    return (
      <div className={className}>
        <p className="border border-line px-5 py-4 text-sm leading-relaxed text-muted">
          Заявки принимаются в Telegram. Канал бренда ещё не подключён.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          track(event, { start: payload });
          track("bot_redirect", { start: payload });
        }}
        className="inline-flex min-h-12 items-center justify-center bg-gold px-6 text-[12px] font-medium tracking-[0.16em] text-ink uppercase transition hover:bg-[#cbb892]"
      >
        {children}
      </a>
      {note ? <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{note}</p> : null}
    </div>
  );
}
