"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart-provider";
import { formatPrice } from "@/lib/format";
import { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      <div className="bg-amber-50 p-3">
        <Image
          src={product.image}
          alt={product.name}
          width={800}
          height={600}
          className="h-44 w-full rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">{product.category}</p>
          <h3 className="text-lg font-semibold text-stone-900">{product.name}</h3>
          <p className="text-sm text-stone-600">{product.shortDescription}</p>
        </div>
        <p className="text-base font-bold text-stone-900">{formatPrice(product.price)}</p>
        <div className="mt-auto flex gap-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 rounded-md border border-stone-300 px-3 py-2 text-center text-sm font-medium text-stone-700 transition hover:border-amber-500 hover:text-amber-700"
          >
            View details
          </Link>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex-1 rounded-md bg-amber-700 px-3 py-2 text-sm font-medium text-white transition hover:bg-amber-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
