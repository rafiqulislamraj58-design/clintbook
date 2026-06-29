"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardSidebar() {
  const pathname = usePathname();

  const menu = [
    {
      name: "User Dashboard",
      href: "/dashboard/user",
    },
    {
      name: "Librarian",
      href: "/dashboard/librarian",
    },
    {
      name: "Admin",
      href: "/dashboard/admin",
    },
  ];

  return (
    <aside className="w-72 bg-blue-300 border-r">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-blue-600">
          BiblioDrop
        </h2>
      </div>

      <nav className="p-4 space-y-2">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-lg px-4 py-3 transition ${
              pathname === item.href
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}