import type { Metadata } from "next";
import { CartProvider } from "@/components/cart-provider";
import { SiteHeader } from "@/components/site-header";
import { appIdentity } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: "L’Artisan Indien (Hastkala)",
  description: appIdentity,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-stone-50 text-stone-900">
        <CartProvider>
          <SiteHeader />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
