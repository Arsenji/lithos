import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductFilters } from "@/components/catalog/ProductFilters";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { getActiveProducts } from "@/data/products";
import { filterProducts, type CatalogQuery } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Каталог",
  description: "Украшения LITHOS из натуральных камней. Ориентировочная стоимость, материалы и заявка в Telegram.",
};

type Search = Record<string, string | string[] | undefined>;

function read(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function CatalogPage({ searchParams }: { searchParams: Promise<Search> }) {
  const params = await searchParams;
  const query: CatalogQuery = {
    collection: read(params.collection),
    price: read(params.price),
    sort: read(params.sort),
  };
  const products = filterProducts(getActiveProducts(), query);

  return (
    <main className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Каталог"
          title="Изделия"
          text="Стоимость ориентировочная. Заказ не оформляется на сайте: заявка уходит в Telegram и согласуется вручную."
        />
        <div className="mt-10">
          <ProductFilters query={query} />
          <ProductGrid products={products} />
        </div>
      </Container>
    </main>
  );
}
