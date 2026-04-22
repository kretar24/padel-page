"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PLAYTOMIC_URL = "https://playtomic.com/clubs/epic-padel";

const steps = [
  {
    number: "01",
    title: "Elige tu horario",
    body: "Decide el día y la hora que más te convenga entre las 3PM y las 10PM.",
  },
  {
    number: "02",
    title: "Reserva en Playtomic",
    body: "Usa Playtomic para reservar online al instante. También puedes escribirnos por WhatsApp.",
  },
  {
    number: "03",
    title: "¡A jugar!",
    body: "Llega a la cancha y disfruta. Así de simple.",
  },
];

export default function HowToBook() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-navy-light border-b border-line" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em]">
              (04) Proceso
            </span>
            <span className="flex-1 h-px bg-line" />
          </div>
          <h2
            className="font-heading font-medium text-white tracking-[-0.03em]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.02 }}
          >
            ¿CÓMO{" "}
            <span className="text-lime">RESERVAR</span>?
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute top-10 left-[calc(16.666%+1.5rem)] right-[calc(16.666%+1.5rem)] h-px bg-line" />

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-20 h-20 bg-lime rounded-full flex items-center justify-center mb-6 z-10 shadow-[0_0_30px_rgba(200,241,53,0.2)]">
                  <span className="font-heading text-[26px] font-semibold text-accent-ink leading-none tracking-tight">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading text-[19px] font-semibold text-white tracking-[-0.01em] mb-3">
                  {step.title}
                </h3>
                <p className="text-white/45 leading-relaxed text-[15px]">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href={PLAYTOMIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-lime text-accent-ink font-heading text-[15px] font-semibold tracking-tight px-10 py-4 rounded-full hover:bg-lime-dark transition-colors"
          >
            RESERVAR EN PLAYTOMIC
          </a>
        </motion.div>
      </div>
    </section>
  );
}
