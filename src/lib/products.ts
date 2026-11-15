
export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
};

export function isProduct(value: unknown): value is Product {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const product = value as Record<string, unknown>;

  return (
    Number.isSafeInteger(product.id) &&
    typeof product.title === "string" &&
    typeof product.description === "string" &&
    typeof product.price === "number" &&
    Array.isArray(product.images) &&
    product.images.every((image) => typeof image === "string")
  );
}