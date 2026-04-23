"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WA_NUMBER = "50683121442";

function waLink(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const pozos = [
  {
    level: "Cuarta",
    day: "Martes",
    time: "7PM – 9PM",
    msg: "Hola, quiero apuntarme al Pozo de Cuarta del martes en Epic Pádel",
  },
  {
    level: "Quinta",
    day: "Miércoles",
    time: "7PM – 9PM",
    msg: "Hola, quiero apuntarme al Pozo de Quinta del miércoles en Epic Pádel",
  },
  {
    level: "Tercera",
    day: "Jueves",
    time: "7PM – 9PM",
    msg: "Hola, quiero apuntarme al Pozo de Tercera del jueves en Epic Pádel",
  },
];

const proximamente = ["Pozo Femenino", "Pozos Mixtos"];

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function Pozos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="pozos" className="py-24 bg-navy-card border-b border-line" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em]">
              (03) Pozos de la Semana
            </span>
            <span className="flex-1 h-px bg-line" />
          </div>
          <h2
            className="font-heading font-extrabold text-white tracking-[-0.03em]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.02 }}
          >
            POZOS DE{" "}
            <span className="text-lime">LA SEMANA</span>
          </h2>
          <p className="mt-3 text-white/45 text-[16px] max-w-xl">
            Jugá con personas de tu nivel. Inscribite por WhatsApp y asegurá tu lugar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {pozos.map((pozo, i) => (
            <motion.div
              key={pozo.level}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="bg-navy border border-line rounded-lg overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-1">
                <span className="font-heading font-semibold text-[0.62rem] text-lime uppercase tracking-[0.08em] bg-lime/10 border border-lime/20 px-2.5 py-1 rounded-full">
                  {pozo.day}
                </span>
                <h3 className="font-heading text-[22px] font-semibold text-white tracking-[-0.02em] mt-4">
                  Pozo de {pozo.level}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <svg
                    className="w-4 h-4 text-white/35"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                  </svg>
                  <span className="font-mono text-[0.75rem] text-white/40">{pozo.time}</span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <a
                  href={waLink(pozo.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-lime text-accent-ink font-heading text-[14px] font-semibold tracking-tight py-3 rounded hover:bg-lime-dark transition-colors"
                >
                  <WhatsAppIcon />
                  INSCRIBIRME
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="border border-dashed border-line rounded-lg px-6 py-5"
        >
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[0.62rem] text-white/30 uppercase tracking-[0.08em] shrink-0">
              Próximamente
            </span>
            <span className="h-px flex-1 bg-line/40 hidden sm:block" />
            <div className="flex flex-wrap gap-3">
              {proximamente.map((label) => (
                <span
                  key={label}
                  className="font-mono text-[0.7rem] text-white/30 uppercase tracking-[0.06em] bg-white/5 border border-white/10 px-4 py-2 rounded-full"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
