"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// PLACEHOLDER CONTENT — replace with real reviews from your players
// (e.g. pulled from Google or Instagram, with their permission).
const testimonials = [
  {
    quote:
      "Por fin pádel en Grecia. Antes manejaba hasta San José; ahora juego a 5 minutos de casa. Las canchas están increíbles.",
    name: "Andrés Mora",
    role: "Juega desde 2024",
  },
  {
    quote:
      "Reservar por Playtomic es facilísimo y al ser indoor nunca se nos cae el partido por lluvia. La comunidad es buenísima.",
    name: "Valeria Jiménez",
    role: "Pozo de Cuarta",
  },
  {
    quote:
      "Empecé sin saber nada y me sentí bienvenida desde el primer día. La tienda en el club es un plus enorme.",
    name: "Carolina Rojas",
    role: "Principiante",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#1B4FD8"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="py-24 bg-white border-b border-slate-200" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[0.68rem] text-slate-500 uppercase tracking-[0.06em]">
              (06) Comunidad
            </span>
            <span className="flex-1 h-px bg-slate-200" />
          </div>
          <h2
            className="font-heading font-extrabold text-[#1A1A2E] tracking-[-0.03em]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.02 }}
          >
            LO QUE DICEN{" "}
            <span className="text-blue">NUESTROS JUGADORES</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="bg-blue-light border border-slate-200 rounded-xl p-7 flex flex-col gap-5"
            >
              <Stars />
              <blockquote className="text-[#1A1A2E] leading-relaxed text-[15px] flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-1 border-t border-slate-200">
                <span className="w-10 h-10 rounded-full bg-blue text-white font-heading font-semibold flex items-center justify-center text-[15px] mt-4">
                  {t.name.charAt(0)}
                </span>
                <span className="mt-4">
                  <span className="block font-heading font-semibold text-[#1A1A2E] text-[15px] leading-tight">
                    {t.name}
                  </span>
                  <span className="block font-mono text-[0.62rem] text-slate-500 uppercase tracking-[0.06em] mt-0.5">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
