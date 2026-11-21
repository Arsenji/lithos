import { LeadForm } from "@/components/lead/LeadForm";
import type { Product } from "@/types/product";

export function ProductCTA({ product }: { product: Product }) {
  return <LeadForm productId={product.id} />;
}