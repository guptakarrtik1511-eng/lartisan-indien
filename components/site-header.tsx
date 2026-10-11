"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-provider";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Admin", href: "/admin/products" },
  { label: "Checkout", href: "/checkout" },
];

export function SiteHeader() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-20 border-b border-amber-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight text-amber-900">
          L’Artisan Indien
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-stone-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-amber-700">
              {link.label}
            </Link>
          ))}
          <Link
            href="/cart"
            className="rounded-full bg-amber-700 px-3 py-1.5 text-white transition hover:bg-amber-800"
          >
            Cart ({itemCount})
          </Link>
        </nav>
      </div>
    </header>
  );
}
