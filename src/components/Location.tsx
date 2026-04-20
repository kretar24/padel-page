"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WA_URL =
  "https://wa.me/50689527591?text=Hola%2C%20quiero%20reservar%20una%20cancha";

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="ubicacion" className="py-24 bg-navy-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-5xl sm:text-6xl text-white tracking-wider text-center mb-14"
        >
          DÓNDE{" "}
          <span className="text-lime">ENCONTRARNOS</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-auto lg:h-[420px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15709.123456789!2d-84.3200!3d10.0650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f3c3c3c3c3c3%3A0x0!2sGrecia%2C+Alajuela!5e0!3m2!1sen!2scr!4v1234567890"
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
            className="bg-navy-card rounded-2xl p-8 border border-white/10 flex flex-col gap-6"
            id="contacto"
          >
            <h3 className="font-heading text-3xl text-white tracking-wider">
              EPIC PADEL
            </h3>

            <div className="flex flex-col gap-5 text-white/70">
              <div className="flex gap-4 items-start">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C8F135"
                  strokeWidth="2"
                  className="shrink-0 mt-0.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-white font-medium">Canchas en Creta</p>
                  <p className="text-sm">Grecia, Alajuela, Costa Rica</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C8F135"
                  strokeWidth="2"
                  className="shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.94 6.94l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a
                  href="tel:+50689527591"
                  className="text-white font-medium hover:text-lime transition-colors"
                >
                  +506 8952-7591
                </a>
              </div>

              <div className="flex gap-4 items-start">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C8F135"
                  strokeWidth="2"
                  className="shrink-0 mt-0.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <p className="text-white font-medium">Horario</p>
                  <p className="text-sm">3:00 PM – 10:00 PM · Todos los días</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C8F135"
                  strokeWidth="2"
                  className="shrink-0"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="12" y1="3" x2="12" y2="21" />
                </svg>
                <p>
                  <span className="text-white font-medium">
                    3 canchas profesionales
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-lime text-navy font-heading text-lg tracking-wider py-3 rounded-xl hover:bg-lime-dark transition-colors text-center"
              >
                WHATSAPP
              </a>
              <a
                href="tel:+50689527591"
                className="flex-1 border border-white/20 text-white font-heading text-lg tracking-wider py-3 rounded-xl hover:border-lime hover:text-lime transition-colors text-center"
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
