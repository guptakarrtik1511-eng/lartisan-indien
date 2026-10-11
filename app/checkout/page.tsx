"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart-provider";
import { formatPrice } from "@/lib/format";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-stone-900">Order placed successfully</h1>
        <p className="mt-2 text-stone-600">
          Thank you for supporting Indian artisans. A confirmation message has been prepared for this demo flow.
        </p>
        <Link href="/products" className="mt-4 inline-block rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-stone-900">Checkout</h1>
        <p className="mt-2 text-sm text-stone-600">Complete this mock checkout flow for the MVP demo.</p>
        <form onSubmit={onSubmit} className="mt-5 space-y-4">
          <div>
            <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-stone-700">
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              required
              className="w-full rounded-md border border-stone-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-stone-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full rounded-md border border-stone-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="address" className="mb-1 block text-sm font-medium text-stone-700">
              Shipping address
            </label>
            <textarea
              id="address"
              name="address"
              rows={4}
              required
              className="w-full rounded-md border border-stone-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={items.length === 0}
            className="rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Place order
          </button>
        </form>
      </section>

      <aside className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-stone-900">Order details</h2>
        {items.length === 0 ? (
          <p className="mt-3 text-sm text-stone-600">Your cart is empty. Add products before checkout.</p>
        ) : (
          <>
            <ul className="mt-3 space-y-2 text-sm text-stone-600">
              {items.map((item) => (
                <li key={item.product.id} className="flex items-start justify-between gap-3">
                  <span>
                    {item.product.name} × {item.quantity}
                  </span>
                  <span className="font-semibold text-stone-900">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-stone-200 pt-3 text-base font-semibold text-stone-900">
              Total: {formatPrice(subtotal)}
            </p>
          </>
        )}
      </aside>
    </div>
  );
}
