"use client";

import { useState, useEffect } from "react";

const PLAYTOMIC_URL = "https://playtomic.com/clubs/epic-padel";

const navLinks = [
  { href: "#canchas", label: "Canchas" },
  { href: "#precios", label: "Precios" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

function LogoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M14 1 C 20 8, 20 20, 14 27 M14 1 C 8 8, 8 20, 14 27 M1 14 L27 14"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="14" cy="14" r="2.5" fill="#C8F135" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy/85 backdrop-blur-md border-b border-line shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="flex items-center gap-2.5">
              <LogoIcon />
              <span className="font-heading text-[17px] font-semibold tracking-[-0.01em] leading-none">
                <span className="text-white">EPIC</span>
                <span className="text-lime ml-1">PADEL</span>
              </span>
              <span className="hidden lg:block font-mono text-[0.65rem] text-muted uppercase tracking-[0.06em] ml-1.5">
                CR · EST 2024
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/55 hover:text-lime transition-colors text-[13px] font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <a
                href={PLAYTOMIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime text-accent-ink font-heading text-[13px] font-semibold tracking-tight px-5 py-2.5 rounded-full hover:bg-lime-dark transition-colors"
              >
                RESERVAR AHORA
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {menuOpen ? (
                  <>
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-4xl font-medium text-white hover:text-lime transition-colors tracking-[-0.02em]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PLAYTOMIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-lime text-accent-ink font-heading text-xl font-semibold tracking-tight px-8 py-3 rounded-full hover:bg-lime-dark transition-colors"
          >
            RESERVAR AHORA
          </a>
        </div>
      )}
    </>
  );
}
