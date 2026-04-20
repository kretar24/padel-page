const quickLinks = [
  { href: "#canchas", label: "Canchas" },
  { href: "#precios", label: "Precios" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

function PadelBallIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill="#C8F135" />
      <path
        d="M3.5 8.5 Q12 13 20.5 8.5"
        stroke="#0A0E1A"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M3.5 15.5 Q12 11 20.5 15.5"
        stroke="#0A0E1A"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-card border-t border-white/10 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2">
              <PadelBallIcon />
              <span className="font-heading text-2xl tracking-widest leading-none">
                <span className="text-white">EPIC</span>
                <span className="text-lime ml-1">PADEL</span>
              </span>
            </a>
            <p className="text-white/40 text-sm">El pádel llegó a Grecia.</p>
          </div>

          <div>
            <h4 className="font-heading text-lg tracking-widest text-white/60 mb-4">
              ENLACES
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-lime transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg tracking-widest text-white/60 mb-4">
              CONTACTO
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-white/50">
              <li>
                <a
                  href="tel:+50689527591"
                  className="hover:text-lime transition-colors"
                >
                  +506 8952-7591
                </a>
              </li>
              <li>Grecia, Alajuela, Costa Rica</li>
              <li>3:00 PM – 10:00 PM · Todos los días</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/30 text-xs">
          © 2025 Epic Padel · Grecia, Alajuela, Costa Rica
        </div>
      </div>
    </footer>
  );
}
