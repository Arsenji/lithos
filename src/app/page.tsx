import type { Metadata } from "next";
import { BrandPhilosophy } from "@/components/home/BrandPhilosophy";
import { CollectionsSection } from "@/components/home/CollectionsSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { HandmadeSection } from "@/components/home/HandmadeSection";
import { Hero } from "@/components/home/Hero";
import { LeadForm } from "@/components/lead/LeadForm";
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
      <section className="border-t border-line bg-ink">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <LeadForm className="mt-0" />
        </div>
      </section>
      <PackagingSection />
    </main>
  );
}
