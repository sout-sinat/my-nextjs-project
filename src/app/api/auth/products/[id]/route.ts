import { DUMMYJSON_BASE_URL } from "@/lib/dummyson";
import { isProduct } from "@/lib/products";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  const { productId } = await params;
  const id = Number(productId);

  if (!Number.isSafeInteger(id) || id < 1) {
    return Response.json({ error: "Invalid product ID." }, { status: 400 });
  }

  try {
    const response = await fetch(`${DUMMYJSON_BASE_URL}/products/${id}`);

    if (response.status === 404) {
      return Response.json({ error: "Product not found." }, { status: 404 });
    }

    if (!response.ok) {
      return Response.json(
        { error: "The product service could not load this product." },
        { status: 502 }
      );
    }

    const product: unknown = await response.json();

    if (!isProduct(product)) {
      return Response.json(
        { error: "The product service returned an invalid response." },
        { status: 502 }
      );
    }

    return Response.json(product);
  } catch {
    return Response.json(
      { error: "The product service is unavailable." },
      { status: 502 }
    );
  }
}