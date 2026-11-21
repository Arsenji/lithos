export type AnalyticsEvent =
  | "view_home"
  | "view_collection"
  | "view_product"
  | "click_telegram"
  | "click_custom_order"
  | "bot_redirect";

type AnalyticsParams = Record<string, string | number | boolean>;

export function track(event: AnalyticsEvent, params?: AnalyticsParams) {
  if (typeof window === "undefined") return;
  const metrikaId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;
  if (!metrikaId) return;

  const ym = (window as Window & { ym?: (...args: unknown[]) => void }).ym;
  ym?.(Number(metrikaId), "reachGoal", event, params);
}
