"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { label: "Work", href: "#work" },
    { label: "Expertise", href: "#expertise" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="bg-white w-full">
        <div className="max-w-[1400px] mx-auto px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-[#1a1a1a] text-xl font-bold tracking-tight">
            Rachael
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] text-[#3a3a3a] hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center justify-center bg-[#1a1a1a] hover:bg-black text-white text-[15px] font-medium px-6 py-2.5 rounded-full transition-colors"
          >
            Let&apos;s Talk
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-[1.5px] bg-[#1a1a1a]" />
            <span className="block w-6 h-[1.5px] bg-[#1a1a1a]" />
            <span className="block w-4 h-[1.5px] bg-[#1a1a1a] self-end" />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[100] bg-[#1a1a1a] flex flex-col transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-end px-6 pt-6">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-white p-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="2" y1="2" x2="22" y2="22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="22" y1="2" x2="2" y2="22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col px-8 pt-12 gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-4xl font-medium hover:text-[#C4714A] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center bg-[#C4714A] text-white text-base font-medium px-8 py-4 rounded-full transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </nav>
      </div>
    </>
  );
}
