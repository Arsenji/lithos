import { TelegramButton } from "@/components/common/TelegramButton";
import type { Product } from "@/types/product";

export function ProductCTA({ product }: { product: Product }) {
  return (
    <>
      <TelegramButton payload={product.telegramStartPayload} className="mt-8 hidden lg:block">
        Оставить заявку в Telegram
      </TelegramButton>
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-ink/95 p-4 lg:hidden">
        <TelegramButton payload={product.telegramStartPayload} className="[&_a]:w-full">
          Оставить заявку в Telegram
        </TelegramButton>
      </div>
    </>
  );
}
