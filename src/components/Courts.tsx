"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { COURT_IMAGES } from "@/lib/images";

const PLAYTOMIC_URL = "https://playtomic.com/clubs/epic-padel";

const courts = [
  { number: 1, name: "Cancha 1", image: COURT_IMAGES[0] },
  { number: 2, name: "Cancha 2", image: COURT_IMAGES[1] },
  { number: 3, name: "Cancha 3", image: COURT_IMAGES[2] },
];

export default function Courts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="canchas" className="py-24 bg-white border-b border-slate-200" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[0.68rem] text-slate-500 uppercase tracking-[0.06em]">
              (02) Instalaciones
            </span>
            <span className="flex-1 h-px bg-slate-200" />
          </div>
          <h2
            className="font-heading font-extrabold text-[#1A1A2E] tracking-[-0.03em]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.02 }}
          >
            3 CANCHAS{" "}
            <span className="text-blue">PROFESIONALES</span>
          </h2>
          <p className="mt-3 text-slate-500 text-[16px] max-w-xl">
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
              className="bg-blue-light border border-slate-200 rounded-xl overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={court.image}
                  alt={`Cancha de pádel indoor — ${court.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t border-slate-200 px-6 py-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-[19px] font-semibold text-[#1A1A2E] tracking-[-0.01em]">
                    {court.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-semibold text-[0.62rem] text-slate-600 uppercase tracking-[0.06em] bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
                      Indoor
                    </span>
                    <span className="font-heading font-semibold text-[0.62rem] text-accent-ink uppercase tracking-[0.06em] bg-lime border border-lime-dark px-2.5 py-1 rounded-full">
                      Disponible
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="mt-10 flex justify-center"
        >
          <a
            href={PLAYTOMIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-lime text-accent-ink font-heading text-[15px] font-semibold tracking-tight px-10 py-4 rounded-full hover:bg-lime-dark transition-colors"
          >
            RESERVAR CANCHA EN PLAYTOMIC
          </a>
        </motion.div>
      </div>
    </section>
  );
}
