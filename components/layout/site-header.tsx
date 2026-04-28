"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <header className={isHome ? "absolute inset-x-0 top-0 z-50" : "sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl"}>
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-lg font-semibold tracking-[0.3em] text-paper">DK</span>
        </Link>

        <button
          type="button"
          className="rounded-full border border-white/10 px-4 py-2 text-sm text-paper md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "bg-white/10 text-paper" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {isOpen ? (
        <nav
          id="mobile-nav"
          className={`container-shell flex flex-col gap-2 pb-5 md:hidden ${isHome ? "bg-[#0b0f15]/95 pt-3" : "border-t border-white/10"}`}
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "bg-white/10 text-paper" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
