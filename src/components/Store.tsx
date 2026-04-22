"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pills = [
  {
    label: "Raquetas",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C8F135"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14.5 2.5c0 1.5-1.5 5-1.5 5h-2S9 4 9 2.5a2.5 2.5 0 0 1 5 0z" />
        <path d="M9 7.5v9l1.5 1.5h3l1.5-1.5v-9" />
        <line x1="9" y1="12" x2="15" y2="12" />
      </svg>
    ),
  },
  {
    label: "Accesorios",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C8F135"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    label: "Ropa",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C8F135"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
      </svg>
    ),
  },
];

export default function Store() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="py-24 bg-navy-light border-b border-line" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em]">
              (03) Tienda
            </span>
            <span className="flex-1 h-px bg-line" />
          </div>
          <h2
            className="font-heading font-medium text-white tracking-[-0.03em]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.02 }}
          >
            TIENDA DE PÁDEL{" "}
            <span className="text-lime">EN EL CLUB</span>
          </h2>
          <p className="mt-3 text-white/45 text-[16px] max-w-xl">
            Todo lo que necesitás para jugar, disponible en nuestras canchas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="bg-navy border border-line rounded p-8 md:p-12 flex flex-col md:flex-row gap-10 md:gap-16 items-start md:items-center"
        >
          <div className="flex-1">
            <p className="text-white/60 leading-relaxed text-[16px] max-w-xl mb-8">
              <span className="text-white font-medium">Punto Pádel CR</span> tiene su tienda física dentro de Epic Padel. Raquetas, pelotas, grips, ropa y accesorios de las mejores marcas.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {pills.map((pill) => (
                <span
                  key={pill.label}
                  className="flex items-center gap-2 bg-lime/5 border border-lime/15 px-4 py-2 rounded-full"
                >
                  {pill.icon}
                  <span className="font-mono text-[0.72rem] text-white/70 uppercase tracking-[0.05em]">
                    {pill.label}
                  </span>
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.puntopadelcr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime text-accent-ink font-heading text-[14px] font-semibold tracking-tight px-7 py-3.5 rounded-full hover:bg-lime-dark transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                VER TIENDA ONLINE <span aria-hidden>→</span>
              </a>
              <span className="border border-line text-white/45 font-heading text-[14px] font-medium tracking-tight px-7 py-3.5 rounded-full text-center flex items-center justify-center">
                O visitanos en cancha
              </span>
            </div>
          </div>

          <div className="shrink-0 hidden md:block">
            <svg
              width="180"
              height="180"
              viewBox="0 0 180 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="1" y="1" width="178" height="178" rx="8" stroke="#C8F135" strokeWidth="1" strokeDasharray="8 4" opacity="0.2" />
              <rect x="16" y="16" width="148" height="148" rx="4" fill="#13192C" stroke="#C8F135" strokeWidth="1" opacity="0.4" />
              <path d="M90 50 C 100 65, 100 95, 90 110 M 90 50 C 80 65, 80 95, 90 110" stroke="#C8F135" strokeWidth="1.5" opacity="0.6" />
              <line x1="60" y1="80" x2="120" y2="80" stroke="#C8F135" strokeWidth="1.5" opacity="0.5" />
              <circle cx="90" cy="80" r="4" fill="#C8F135" opacity="0.8" />
              <circle cx="90" cy="80" r="20" stroke="#C8F135" strokeWidth="1" opacity="0.15" />
              <text x="90" y="138" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#C8F135" opacity="0.5" letterSpacing="2">PUNTO PÁDEL CR</text>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
