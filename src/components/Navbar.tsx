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
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 h-[64px] md:h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-[#1a1a1a] text-lg md:text-xl font-bold tracking-tight"
          >
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

          {/* Mobile hamburger — three lines, last one shorter */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-[1.5px] bg-[#1a1a1a]" />
            <span className="block w-6 h-[1.5px] bg-[#1a1a1a]" />
            <span className="block w-4 h-[1.5px] bg-[#1a1a1a] self-end" />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-[#1a1a1a] flex flex-col transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* X button — top right */}
        <div className="flex justify-end px-5 pt-5">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 text-white"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.5"
                y1="1.5"
                x2="20.5"
                y2="20.5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <line
                x1="20.5"
                y1="1.5"
                x2="1.5"
                y2="20.5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Centered nav links */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-8 px-8 -mt-16">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-[32px] font-light tracking-wide hover:text-[#C4714A] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Terracotta pill CTA */}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="w-full mt-2 inline-flex items-center justify-center bg-[#C4714A] hover:bg-[#b5603a] text-white text-base font-medium px-8 py-4 rounded-full transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </nav>
      </div>
    </>
  );
}
