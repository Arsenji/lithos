import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Каталог" title="Избранные изделия" />
          <Link href="/catalog" className="text-[12px] tracking-[0.16em] text-gold uppercase">
            Весь каталог
          </Link>
        </div>
        <ProductGrid products={getFeaturedProducts()} />
      </Container>
    </section>
  );
}
