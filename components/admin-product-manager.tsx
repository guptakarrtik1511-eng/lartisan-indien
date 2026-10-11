"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { productCategories, products } from "@/lib/data";

type AdminProduct = {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
};

const storageKey = "lartisan-admin-products";

const blankForm: AdminProduct = {
  id: "",
  name: "",
  category: productCategories[0],
  price: "",
  description: "",
};

export function AdminProductManager() {
  const [customProducts, setCustomProducts] = useState<AdminProduct[]>([]);
  const [form, setForm] = useState<AdminProduct>(blankForm);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCustomProducts(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(customProducts));
  }, [customProducts]);

  const onFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const resetForm = () => {
    setForm(blankForm);
    setEditingId(null);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalized: AdminProduct = {
      ...form,
      id: editingId ?? `${form.name.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}-${Date.now()}`,
    };

    if (editingId) {
      setCustomProducts((previous) =>
        previous.map((item) => (item.id === editingId ? normalized : item)),
      );
    } else {
      setCustomProducts((previous) => [normalized, ...previous]);
    }

    resetForm();
  };

  const onEdit = (product: AdminProduct) => {
    setForm(product);
    setEditingId(product.id);
  };

  const onDelete = (id: string) => {
    setCustomProducts((previous) => previous.filter((item) => item.id !== id));
    if (editingId === id) {
      resetForm();
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_1.3fr]">
      <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-stone-900">
          {editingId ? "Edit handcrafted product" : "Create handcrafted product"}
        </h2>
        <p className="text-sm text-stone-600">
          Save products locally for demo purposes without external services.
        </p>
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-stone-700">
            Product name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onFieldChange}
            required
            className="w-full rounded-md border border-stone-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none"
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="category" className="mb-1 block text-sm font-medium text-stone-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={form.category}
              onChange={onFieldChange}
              className="w-full rounded-md border border-stone-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none"
            >
              {productCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="price" className="mb-1 block text-sm font-medium text-stone-700">
              Price (INR)
            </label>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              value={form.price}
              onChange={onFieldChange}
              required
              className="w-full rounded-md border border-stone-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="mb-1 block text-sm font-medium text-stone-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={form.description}
            onChange={onFieldChange}
            required
            className="w-full rounded-md border border-stone-300 px-3 py-2 text-sm focus:border-amber-600 focus:outline-none"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-800"
          >
            {editingId ? "Update" : "Create"} product
          </button>
          {editingId ? (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-md border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700"
            >
              Cancel
            </button>
          ) : null}
        </div>
      </form>

      <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-stone-900">Current product listings</h2>
        <p className="mb-4 text-sm text-stone-600">
          Includes seeded handcrafted products and locally created entries.
        </p>
        <div className="space-y-3">
          {customProducts.concat(
            products.map((product) => ({
              id: product.id,
              name: product.name,
              category: product.category,
              price: String(product.price),
              description: product.shortDescription,
            })),
          ).map((product) => (
            <article key={product.id} className="rounded-xl border border-stone-200 p-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold text-stone-900">{product.name}</h3>
                  <p className="text-xs uppercase tracking-wide text-amber-700">{product.category}</p>
                  <p className="text-sm text-stone-600">₹{product.price}</p>
                  <p className="text-sm text-stone-600">{product.description}</p>
                </div>
                {customProducts.some((item) => item.id === product.id) ? (
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => onEdit(product)}
                      className="rounded border border-stone-300 px-3 py-1 text-xs font-semibold text-stone-700"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete(product.id)}
                      className="rounded border border-red-200 px-3 py-1 text-xs font-semibold text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <span className="text-xs font-semibold text-stone-500">Seeded</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
