const quickLinks = [
  { href: "#canchas", label: "Canchas" },
  { href: "#precios", label: "Precios" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

function LogoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M14 1 C 20 8, 20 20, 14 27 M14 1 C 8 8, 8 20, 14 27 M1 14 L27 14"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="14" cy="14" r="2" fill="#C8F135" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-line py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2">
              <LogoIcon />
              <span className="font-heading text-[16px] font-semibold tracking-[-0.01em] leading-none">
                <span className="text-white">EPIC</span>
                <span className="text-lime ml-1">PADEL</span>
              </span>
            </a>
            <p className="text-white/35 text-[13px] mt-1">El pádel llegó a Grecia.</p>
            <p className="font-mono text-[0.62rem] text-muted uppercase tracking-[0.06em] mt-1">
              CR · EST 2024
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[0.62rem] text-muted uppercase tracking-[0.06em] mb-5">
              ENLACES
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/45 hover:text-lime transition-colors text-[14px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[0.62rem] text-muted uppercase tracking-[0.06em] mb-5">
              CONTACTO
            </h4>
            <ul className="flex flex-col gap-2.5 text-[14px] text-white/45">
              <li>
                <a
                  href="tel:+50683121442"
                  className="hover:text-lime transition-colors"
                >
                  +506 8312-1442
                </a>
              </li>
              <li>500m de los Tribunales de Grecia</li>
              <li>20301, Grecia, Alajuela, Costa Rica</li>
              <li>3:00 PM – 10:00 PM · Todos los días</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[0.6rem] text-muted uppercase tracking-[0.06em]">
            © 2025 Epic Padel · Grecia, Alajuela, Costa Rica
          </p>
          <p className="font-mono text-[0.6rem] text-muted uppercase tracking-[0.06em]">
            09°56′N · 84°09′W
          </p>
        </div>
      </div>
    </footer>
  );
}
