import Link from "next/link";

export default function UserSummary() {
  return (
    <Link href="/dashboard/user" className="rounded-xl border bg-card p-5 hover:bg-muted/50">
      <h2 className="font-semibold">Users</h2>
    </Link>
  );
}
