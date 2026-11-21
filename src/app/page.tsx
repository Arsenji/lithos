import type { Metadata } from "next";
import { BrandPhilosophy } from "@/components/home/BrandPhilosophy";
import { CollectionsSection } from "@/components/home/CollectionsSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { HandmadeSection } from "@/components/home/HandmadeSection";
import { Hero } from "@/components/home/Hero";
import { IndividualOrder } from "@/components/home/IndividualOrder";
import { PackagingSection } from "@/components/home/PackagingSection";
import { TrackView } from "@/components/common/TrackView";

export const metadata: Metadata = {
  title: "LITHOS — украшения, созданные природой",
  description: "Натуральные камни, ручная сборка и индивидуальный подход. Каталог LITHOS и заявка в Telegram.",
};

export default function HomePage() {
  return (
    <main>
      <TrackView event="view_home" />
      <Hero />
      <CollectionsSection />
      <FeaturedProducts />
      <BrandPhilosophy />
      <HandmadeSection />
      <IndividualOrder />
      <PackagingSection />
    </main>
  );
}
