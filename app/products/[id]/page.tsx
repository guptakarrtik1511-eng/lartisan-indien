import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import {
  getArtisanById,
  getProductById,
  getRelatedProducts,
  products,
} from "@/lib/data";
import { formatPrice } from "@/lib/format";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-10 text-center">
        <h1 className="text-2xl font-semibold text-stone-900">Product not found</h1>
        <Link href="/products" className="mt-3 inline-block text-sm font-semibold text-amber-700 hover:text-amber-800">
          Back to products
        </Link>
      </div>
    );
  }

  const artisan = getArtisanById(product.artisanId);
  const related = getRelatedProducts(product.id, product.category);

  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-3">
          <Image
            src={product.gallery[0]}
            alt={product.name}
            width={800}
            height={600}
            className="h-80 w-full rounded-2xl border border-stone-200 bg-white object-cover p-2"
          />
          <div className="grid grid-cols-3 gap-3">
            {product.gallery.slice(1).map((image) => (
              <Image
                key={image}
                src={image}
                alt={`${product.name} view`}
                width={800}
                height={600}
                className="h-24 w-full rounded-xl border border-stone-200 bg-white object-cover p-1"
              />
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">{product.category}</p>
          <h1 className="text-3xl font-bold tracking-tight text-stone-900">{product.name}</h1>
          <p className="text-2xl font-bold text-stone-900">{formatPrice(product.price)}</p>
          <p className="text-sm text-stone-600">{product.description}</p>
          <div>
            <h2 className="text-sm font-semibold text-stone-900">Materials</h2>
            <ul className="mt-2 list-inside list-disc text-sm text-stone-600">
              {product.materials.map((material) => (
                <li key={material}>{material}</li>
              ))}
            </ul>
          </div>
          <Link
            href="/products"
            className="inline-block rounded-md border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-amber-500 hover:text-amber-700"
          >
            Continue shopping
          </Link>
        </div>
      </section>

      {artisan ? (
        <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-900">Meet the artisan</h2>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Image
              src={artisan.avatar}
              alt={artisan.name}
              width={64}
              height={64}
              className="h-16 w-16 rounded-full border border-amber-100"
            />
            <div>
              <h3 className="text-lg font-semibold text-stone-900">{artisan.name}</h3>
              <p className="text-sm text-amber-700">{artisan.specialty}</p>
              <p className="text-sm text-stone-600">{artisan.region}</p>
              <p className="mt-1 text-sm text-stone-600">{artisan.bio}</p>
            </div>
          </div>
        </section>
      ) : null}

      <section>
        <h2 className="mb-4 text-xl font-semibold text-stone-900">Related products</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </section>
    </div>
  );
}
