import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrackView } from "@/components/common/TrackView";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { getActiveProducts, getProductBySlug } from "@/data/products";

type Params = { slug: string };

export function generateStaticParams() {
  return getActiveProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Изделие" };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: { images: [{ url: product.images[0]?.src ?? "/images/hero.jpg", alt: product.images[0]?.alt }] },
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <main className="py-10 sm:py-16">
      <TrackView event="view_product" id={product.id} />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>
    </main>
  );
}
