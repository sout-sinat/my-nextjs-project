
import { Suspense } from "react";
import Link from "next/link";
import ProductDetailDisplayComponent from "@/components/categories/detail/ProductDatailDisplayComponent";
import type { ProductResponse } from "@/components/categories/productCardComponent";

const getSingleProduct = async (proId: string): Promise<ProductResponse> => {
  const baseUrl = process.env.NEXT_PUBLIC_DUMMY_BASE_URL;
  if (!baseUrl) throw new Error("NEXT_PUBLIC_DUMMY_BASE_URL is not configured");

  const response = await fetch(`${baseUrl}/products/${proId}`);
  if (!response.ok) throw new Error(`Failed to load product (${response.status})`);
  return response.json();
};

async function CategoryProductDetails({ params }: { params: Promise<{ categoryId: string }> }) {
  try {
    const { categoryId } = await params;
    const product = await getSingleProduct(categoryId);
    return <ProductDetailDisplayComponent product={product} />;
  } catch {
    return (
      <section role="alert" className="space-y-4 p-8 text-center">
        <p className="text-destructive">
          Product details are unavailable. Check your connection and try again.
        </p>
        <Link href="/category" className="underline">
          Back to products
        </Link>
      </section>
    );
  }
}

export default function CategoryDetailPage({ params }: { params: Promise<{ categoryId: string }> }) {
  return (
    <Suspense fallback={<p className="p-8 text-center">Loading product…</p>}>
      <CategoryProductDetails params={params} />
    </Suspense>
  );
}
