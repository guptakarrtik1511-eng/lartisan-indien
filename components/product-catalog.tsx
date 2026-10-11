"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { productCategories, products } from "@/lib/data";
import { ProductCategory } from "@/lib/types";

interface ProductCatalogProps {
  initialCategory: "All" | ProductCategory;
}

export function ProductCatalog({ initialCategory }: ProductCatalogProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | ProductCategory>(
    initialCategory,
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">Marketplace products</h1>
        <p className="mt-2 text-stone-600">
          Browse handcrafted products, filter by craft, and discover artisan stories.
        </p>
      </header>

      <section className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search products..."
            className="w-full rounded-md border border-stone-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none"
          />
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value as "All" | ProductCategory)}
            className="rounded-md border border-stone-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none"
          >
            <option value="All">All categories</option>
            {productCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section>
        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-10 text-center text-stone-600">
            No products match your search.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
