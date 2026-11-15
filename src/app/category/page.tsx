import { Suspense } from "react";
import ProductCardListUseHookComponent from "@/components/categories/ProductCardHookComponent";
import type { ProductResponse } from "@/components/categories/productCardComponent";

async function getAllProducts(): Promise<ProductResponse[]> {
  const baseUrl = process.env.NEXT_PUBLIC_DUMMY_BASE_URL;
  if (!baseUrl) throw new Error("NEXT_PUBLIC_DUMMY_BASE_URL is not configured");

  const response = await fetch(`${baseUrl}/products`);
  if (!response.ok) throw new Error(`Failed to load products (${response.status})`);

  const data: { products: ProductResponse[] } = await response.json();
  return data.products;
}

async function CategoryProducts() {
  try {
    const products = await getAllProducts();
    return <ProductCardListUseHookComponent products={products} />;
  } catch {
    return (
      <p role="alert" className="p-8 text-center text-destructive">
        Products are temporarily unavailable. Check your connection and try again.
      </p>
    );
  }
}

export default function CategoryPage() {
  return (
    <Suspense fallback={<p className="p-8 text-center">Loading products…</p>}>
      <CategoryProducts />
    </Suspense>
  );
}
