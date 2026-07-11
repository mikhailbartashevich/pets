import { useState } from "react";
import { Menu, PawPrint, X } from "lucide-react";

const navigation = [
  { href: "#gallery", label: "Explore" },
  { href: "#story", label: "Our story" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <a href="#" className="flex items-center gap-2 text-xl font-extrabold tracking-[-0.04em]">
          <span className="grid size-9 rotate-[-8deg] place-items-center rounded-xl bg-[#ff6846] text-white">
            <PawPrint size={20} />
          </span>
          pawfolio
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-[#ff6846]">
              {item.label}
            </a>
          ))}
          <a
            href="#share"
            className="rounded-full bg-[#22221f] px-5 py-3 text-white transition hover:-translate-y-0.5 hover:bg-[#ff6846]"
          >
            Share your pet
          </a>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mx-5 mb-4 grid gap-3 rounded-2xl bg-white p-5 text-sm font-semibold shadow-lg md:hidden">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#share">Share your pet</a>
        </nav>
      )}
    </>
  );
}
