"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PLAYTOMIC_URL = "https://playtomic.com/clubs/epic-padel";

function CourtTopViewSVG() {
  return (
    <svg
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="192"
        height="292"
        rx="3"
        stroke="#C8F135"
        strokeWidth="1.5"
        strokeDasharray="9 5"
        fill="none"
        opacity="0.4"
      />
      <rect
        x="14"
        y="14"
        width="172"
        height="272"
        rx="2"
        fill="#13192C"
        stroke="#C8F135"
        strokeWidth="1.5"
      />
      <line x1="14" y1="150" x2="186" y2="150" stroke="#C8F135" strokeWidth="2" />
      <circle cx="14" cy="150" r="3.5" fill="#C8F135" />
      <circle cx="186" cy="150" r="3.5" fill="#C8F135" />
      <line x1="14" y1="90" x2="186" y2="90" stroke="white" strokeWidth="1" opacity="0.2" />
      <line x1="100" y1="90" x2="100" y2="150" stroke="white" strokeWidth="1" opacity="0.2" />
      <line x1="14" y1="210" x2="186" y2="210" stroke="white" strokeWidth="1" opacity="0.2" />
      <line x1="100" y1="150" x2="100" y2="210" stroke="white" strokeWidth="1" opacity="0.2" />
      <circle cx="100" cy="150" r="3" fill="#C8F135" />
      <ellipse cx="100" cy="150" rx="40" ry="14" fill="#C8F135" opacity="0.04" />
    </svg>
  );
}

const courts = [
  { number: 1, name: "Cancha 1" },
  { number: 2, name: "Cancha 2" },
  { number: 3, name: "Cancha 3" },
];

export default function Courts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="canchas" className="py-24 bg-navy border-b border-line" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em]">
              (02) Instalaciones
            </span>
            <span className="flex-1 h-px bg-line" />
          </div>
          <h2
            className="font-heading font-medium text-white tracking-[-0.03em]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.02 }}
          >
            3 CANCHAS{" "}
            <span className="text-lime">PROFESIONALES</span>
          </h2>
          <p className="mt-3 text-white/45 text-[16px] max-w-xl">
            Pistas de última generación, perfectas para jugar con amigos o
            competir en serio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {courts.map((court, i) => (
            <motion.div
              key={court.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="bg-navy-card border border-line rounded overflow-hidden"
            >
              <div className="p-8 pb-4">
                <CourtTopViewSVG />
              </div>
              <div className="border-t border-line px-6 py-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading text-[19px] font-semibold text-white tracking-[-0.01em]">
                    {court.name}
                  </h3>
                  <span className="font-mono text-[0.62rem] text-lime uppercase tracking-[0.06em] bg-lime/10 border border-lime/20 px-2.5 py-1 rounded-full">
                    Disponible
                  </span>
                </div>
                <a
                  href={PLAYTOMIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-lime text-accent-ink font-heading text-[14px] font-semibold tracking-tight py-3 rounded hover:bg-lime-dark transition-colors text-center"
                >
                  RESERVAR EN PLAYTOMIC
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
