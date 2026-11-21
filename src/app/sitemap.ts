import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getActiveCollections } from "@/data/collections";
import { getActiveProducts } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/catalog",
    "/collections",
    "/about",
    "/custom-order",
    "/packaging",
    "/privacy",
    "/consent",
    "/contacts",
    "/order-terms",
    ...getActiveCollections().map((collection) => `/collections/${collection.slug}`),
    ...getActiveProducts().map((product) => `/catalog/${product.slug}`),
  ];

  return paths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));
}
