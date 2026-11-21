import type { ReactNode } from "react";
import Link from "next/link";
import { getActiveCollections } from "@/data/collections";
import type { CatalogQuery } from "@/lib/utils";

const prices = [
  { value: "", label: "Любая стоимость" },
  { value: "under-3000", label: "До 3 000 ₽" },
  { value: "3000-6000", label: "3 000–6 000 ₽" },
  { value: "over-6000", label: "От 6 000 ₽" },
];

const sorts = [
  { value: "popular", label: "Сначала популярные" },
  { value: "price-asc", label: "Сначала дешевле" },
  { value: "price-desc", label: "Сначала дороже" },
];

function hrefFor(query: CatalogQuery, patch: CatalogQuery) {
  const next = { ...query, ...patch };
  const params = new URLSearchParams();
  if (next.collection) params.set("collection", next.collection);
  if (next.price) params.set("price", next.price);
  if (next.sort && next.sort !== "popular") params.set("sort", next.sort);
  const search = params.toString();
  return search ? `/catalog?${search}` : "/catalog";
}

export function ProductFilters({ query }: { query: CatalogQuery }) {
  const collections = getActiveCollections();

  return (
    <div className="mb-10 space-y-6 border-b border-line pb-8">
      <div className="flex flex-wrap gap-2">
        <FilterLink href={hrefFor(query, { collection: undefined })} active={!query.collection}>
          Все
        </FilterLink>
        {collections.map((collection) => (
          <FilterLink
            key={collection.id}
            href={hrefFor(query, { collection: collection.id })}
            active={query.collection === collection.id}
          >
            {collection.name}
          </FilterLink>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <fieldset>
          <legend className="mb-2 text-[11px] tracking-[0.22em] text-muted uppercase">Стоимость</legend>
          <div className="flex flex-wrap gap-2">
            {prices.map((price) => (
              <FilterLink key={price.label} href={hrefFor(query, { price: price.value })} active={(query.price ?? "") === price.value}>
                {price.label}
              </FilterLink>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="mb-2 text-[11px] tracking-[0.22em] text-muted uppercase">Сортировка</legend>
          <div className="flex flex-wrap gap-2">
            {sorts.map((sort) => (
              <FilterLink
                key={sort.value}
                href={hrefFor(query, { sort: sort.value })}
                active={(query.sort ?? "popular") === sort.value}
              >
                {sort.label}
              </FilterLink>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
}

function FilterLink({ href, active, children }: { href: string; active: boolean; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`border px-3 py-2 text-sm ${active ? "border-gold text-paper" : "border-line text-muted hover:border-paper"}`}
      aria-current={active ? "true" : undefined}
    >
      {children}
    </Link>
  );
}
