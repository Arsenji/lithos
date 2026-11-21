import { ProductCard } from "@/components/catalog/ProductCard";
import type { Product } from "@/types/product";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return <p className="text-muted">В этой подборке пока нет изделий.</p>;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
