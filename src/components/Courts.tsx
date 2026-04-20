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
        rx="5"
        stroke="#C8F135"
        strokeWidth="2"
        strokeDasharray="9 5"
        fill="none"
        opacity="0.45"
      />
      <rect
        x="14"
        y="14"
        width="172"
        height="272"
        rx="2"
        fill="#141929"
        stroke="#C8F135"
        strokeWidth="1.5"
      />
      <line x1="14" y1="150" x2="186" y2="150" stroke="#C8F135" strokeWidth="2.5" />
      <circle cx="14" cy="150" r="3.5" fill="#C8F135" />
      <circle cx="186" cy="150" r="3.5" fill="#C8F135" />
      <line
        x1="14"
        y1="90"
        x2="186"
        y2="90"
        stroke="white"
        strokeWidth="1"
        opacity="0.3"
      />
      <line
        x1="100"
        y1="90"
        x2="100"
        y2="150"
        stroke="white"
        strokeWidth="1"
        opacity="0.3"
      />
      <line
        x1="14"
        y1="210"
        x2="186"
        y2="210"
        stroke="white"
        strokeWidth="1"
        opacity="0.3"
      />
      <line
        x1="100"
        y1="150"
        x2="100"
        y2="210"
        stroke="white"
        strokeWidth="1"
        opacity="0.3"
      />
      <circle cx="100" cy="150" r="3" fill="#C8F135" />
      <ellipse cx="100" cy="150" rx="40" ry="14" fill="#C8F135" opacity="0.05" />
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
    <section id="canchas" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl sm:text-6xl text-navy tracking-wider">
            3 CANCHAS{" "}
            <span className="text-lime-dark">PROFESIONALES</span>
          </h2>
          <p className="mt-4 text-navy/60 text-lg max-w-xl mx-auto">
            Pistas de última generación, perfectas para jugar con amigos o
            competir en serio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {courts.map((court, i) => (
            <motion.div
              key={court.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="bg-navy rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="p-8 pb-4">
                <CourtTopViewSVG />
              </div>
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading text-2xl text-white tracking-wider">
                    {court.name}
                  </h3>
                  <span className="bg-green-500/20 text-green-400 text-xs font-medium px-3 py-1 rounded-full border border-green-500/30">
                    Disponible
                  </span>
                </div>
                <a
                  href={PLAYTOMIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-lime text-navy font-heading text-lg tracking-wider py-3 rounded-xl hover:bg-lime-dark transition-colors text-center"
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
