"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WA_URL =
  "https://wa.me/50683121442?text=Hola%2C%20quiero%20reservar%20una%20cancha";

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="ubicacion" className="py-24 bg-navy border-b border-line" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em]">
              (05) Ubicación
            </span>
            <span className="flex-1 h-px bg-line" />
            <span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em] hidden sm:block">
              09°56′N · 84°09′W
            </span>
          </div>
          <h2
            className="font-heading font-medium text-white tracking-[-0.03em]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.02 }}
          >
            DÓNDE{" "}
            <span className="text-lime">ENCONTRARNOS</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded overflow-hidden border border-line shadow-xl aspect-video lg:aspect-auto lg:h-[420px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5!2d-84.31930!3d10.06480!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0b7c2b2b2b2b2%3A0x0!2sTribunales+de+Justicia+de+Grecia%2C+Grecia%2C+Alajuela%2C+Costa+Rica!5e0!3m2!1ses!2scr!4v1713000000000!5m2!1ses!2scr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "340px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Epic Padel en Grecia, Alajuela"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="bg-navy-card rounded border border-line p-8 flex flex-col gap-6"
            id="contacto"
          >
            <h3 className="font-heading text-[22px] font-semibold text-white tracking-[-0.01em]">
              EPIC PADEL
            </h3>

            <div className="flex flex-col gap-5 text-white/60">
              <div className="flex gap-4 items-start">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C8F135"
                  strokeWidth="1.5"
                  className="shrink-0 mt-0.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-white font-medium text-[14px]">500m de los Tribunales de Grecia</p>
                  <p className="text-[13px] text-white/45 mt-0.5">20301, Grecia, Alajuela, Costa Rica</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C8F135"
                  strokeWidth="1.5"
                  className="shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a
                  href="tel:+50683121442"
                  className="text-white font-medium text-[14px] hover:text-lime transition-colors"
                >
                  +506 8312-1442
                </a>
              </div>

              <div className="flex gap-4 items-start">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C8F135"
                  strokeWidth="1.5"
                  className="shrink-0 mt-0.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="text-white font-medium text-[14px]">Horario</p>
                  <p className="text-[13px] text-white/45 mt-0.5">3:00 PM – 10:00 PM · Todos los días</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C8F135"
                  strokeWidth="1.5"
                  className="shrink-0"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="12" y1="3" x2="12" y2="21" />
                </svg>
                <p className="text-white font-medium text-[14px]">
                  3 canchas profesionales
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2 pt-4 border-t border-line">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-lime text-accent-ink font-heading text-[14px] font-semibold tracking-tight py-3 rounded hover:bg-lime-dark transition-colors text-center"
              >
                WHATSAPP
              </a>
              <a
                href="tel:+50683121442"
                className="flex-1 border border-line text-white/60 font-heading text-[14px] font-medium tracking-tight py-3 rounded hover:border-lime hover:text-lime transition-colors text-center"
              >
                LLAMAR
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
