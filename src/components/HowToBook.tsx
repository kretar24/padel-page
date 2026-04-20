"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WA_URL =
  "https://wa.me/50689527591?text=Hola%2C%20quiero%20reservar%20una%20cancha";

const steps = [
  {
    number: "01",
    title: "Elige tu horario",
    body: "Decide el día y la hora que más te convenga entre las 3PM y las 10PM.",
  },
  {
    number: "02",
    title: "Escríbenos por WhatsApp",
    body: "Confirma tu reserva en segundos. Sin formularios complicados.",
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
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl sm:text-6xl text-navy tracking-wider">
            ¿CÓMO{" "}
            <span className="text-lime-dark">RESERVAR</span>?
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute top-10 left-[calc(16.666%+1.5rem)] right-[calc(16.666%+1.5rem)] h-0.5 bg-lime/20" />

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
                <div className="relative w-20 h-20 bg-lime rounded-full flex items-center justify-center mb-6 z-10 shadow-lg">
                  <span className="font-heading text-3xl text-navy leading-none">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading text-2xl text-navy tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="text-navy/55 leading-relaxed">{step.body}</p>
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
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy text-white font-heading text-xl tracking-wider px-10 py-4 rounded-full hover:bg-navy-light transition-colors"
          >
            EMPEZAR A RESERVAR
          </a>
        </motion.div>
      </div>
    </section>
  );
}
