import type { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
  sidebar: ReactNode;
  user: ReactNode;
  team: ReactNode;
  products: ReactNode;
};

export default function DashboardLayout({
  children,
  sidebar,
  user,
  team,
  products,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6">
        <aside className="w-56 shrink-0">{sidebar}</aside>
        <main className="min-w-0 flex-1 space-y-6">
          {children}
          <div className="grid gap-4 md:grid-cols-3">
            {user}
            {team}
            {products}
          </div>
        </main>
      </div>  
    </div>
  );
}
