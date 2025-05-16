"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Resources", "FAQ", "Contact"];

export default function Navbar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-300 px-6 py-4 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-serif text-green-700">NOTARY NEXUS</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-base">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className={`hover:text-teal-600 transition-colors duration-200 ${
                  active === item ? "text-teal-600 font-semibold" : "text-gray-800"
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <ul className="md:hidden mt-4 flex flex-col items-start gap-3 px-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className={`block py-1 transition-colors duration-200 ${
                  active === item ? "text-teal-600 font-semibold" : "text-gray-800"
                }`}
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
