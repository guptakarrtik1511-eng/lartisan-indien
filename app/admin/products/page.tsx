import { AdminProductManager } from "@/components/admin-product-manager";

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">Admin product management</h1>
        <p className="mt-2 text-stone-600">
          Create and edit handcrafted product listings for this MVP. Data is persisted in browser storage for demo use.
        </p>
      </header>
      <AdminProductManager />
    </div>
  );
}
