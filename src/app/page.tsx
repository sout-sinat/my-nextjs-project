
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold">
          Next.js Search Project
        </h1>

        <Link
          href="/products"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white"
        >
          View Products
        </Link>
      </div>
    </main>
  );
}
