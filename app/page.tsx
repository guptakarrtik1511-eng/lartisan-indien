import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import {
  appIdentity,
  artisans,
  featuredCollections,
  featuredProducts,
  productCategories,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-gradient-to-r from-amber-100 via-orange-50 to-rose-100 p-6 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Handcrafted in India</p>
        <h1 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Discover timeless Indian handicrafts from verified artisan clusters.
        </h1>
        <p className="mt-4 max-w-2xl text-stone-700">{appIdentity}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/products"
            className="rounded-md bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-800"
          >
            Explore products
          </Link>
          <Link
            href="/admin/products"
            className="rounded-md border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-700 transition hover:border-amber-500 hover:text-amber-700"
          >
            Manage listings
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold text-stone-900">Featured collections</h2>
          <Link href="/products" className="text-sm font-semibold text-amber-700 hover:text-amber-800">
            Shop all products
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCollections.map((collection) => (
            <article key={collection.name} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">Collection</p>
              <h3 className="mt-2 text-lg font-semibold text-stone-900">{collection.name}</h3>
              <p className="mt-1 text-sm text-stone-600">{collection.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-stone-900">Featured products</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-stone-900">Shop by craft</h2>
        <div className="flex flex-wrap gap-3">
          {productCategories.map((category) => (
            <Link
              key={category}
              href="/products"
              className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-amber-500 hover:text-amber-700"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-stone-900">Artisan highlights</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {artisans.map((artisan) => (
            <article key={artisan.id} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <Image
                src={artisan.avatar}
                alt={artisan.name}
                width={64}
                height={64}
                className="h-16 w-16 rounded-full border border-amber-100"
              />
              <h3 className="mt-3 font-semibold text-stone-900">{artisan.name}</h3>
              <p className="text-sm text-amber-700">{artisan.specialty}</p>
              <p className="text-sm text-stone-600">{artisan.region}</p>
              <p className="mt-2 text-sm text-stone-600">{artisan.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
