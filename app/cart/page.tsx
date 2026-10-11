"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-provider";
import { formatPrice } from "@/lib/format";

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">Shopping cart</h1>
        <p className="mt-2 text-stone-600">Review your handcrafted picks before checkout.</p>
      </header>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-10 text-center">
          <p className="text-stone-600">Your cart is empty.</p>
          <Link href="/products" className="mt-3 inline-block text-sm font-semibold text-amber-700 hover:text-amber-800">
            Browse products
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <section className="space-y-3">
            {items.map(({ product, quantity }) => (
              <article key={product.id} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="font-semibold text-stone-900">{product.name}</h2>
                    <p className="text-sm text-stone-600">{formatPrice(product.price)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="h-8 w-8 rounded border border-stone-300 text-stone-700"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="h-8 w-8 rounded border border-stone-300 text-stone-700"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                      className="rounded border border-red-200 px-3 py-1 text-xs font-semibold text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <aside className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-stone-900">Order summary</h2>
            <div className="mt-3 space-y-2 text-sm text-stone-600">
              <p className="flex items-center justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-stone-900">{formatPrice(subtotal)}</span>
              </p>
              <p className="flex items-center justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-stone-900">Free</span>
              </p>
              <p className="border-t border-stone-200 pt-2 text-base font-semibold text-stone-900">
                Total: {formatPrice(subtotal)}
              </p>
            </div>
            <Link
              href="/checkout"
              className="mt-4 block rounded-md bg-amber-700 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-amber-800"
            >
              Proceed to checkout
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
