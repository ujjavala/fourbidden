"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Upcoming Services" }
] as const;

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="site-nav" aria-label="Main navigation">
      <nav className="site-nav-inner">
        {NAV_ITEMS.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const classes = [
            "site-nav-link",
            isActive ? "is-active" : ""
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={classes}
              aria-current={isActive ? "page" : undefined}
            >
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
