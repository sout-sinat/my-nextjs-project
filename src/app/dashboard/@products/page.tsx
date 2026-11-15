import Link from "next/link";

export default function ProductsSummary() {
  return (
    <Link href="/dashboard/products" className="rounded-xl border bg-card p-5 hover:bg-muted/50">
      <h2 className="font-semibold">Products</h2>
    </Link>
  );
}
