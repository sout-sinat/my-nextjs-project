import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/user", label: "Users" },
  { href: "/dashboard/team", label: "Team" },
  { href: "/dashboard/products", label: "Products" },
];

export default function Sidebar() {
  return (
    <nav aria-label="Dashboard" className="rounded-xl border bg-card p-3">
      <p className="px-3 py-2 text-sm font-semibold">Workspace</p>
      <ul className="space-y-1">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
