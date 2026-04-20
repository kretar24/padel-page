"use client";

import { motion } from "framer-motion";

const PLAYTOMIC_URL = "https://playtomic.com/clubs/epic-padel";
const WA_URL =
  "https://wa.me/50689527591?text=Hola%2C%20quiero%20reservar%20una%20cancha";

const stats = [
  {
    label: "3 Canchas",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C8F135"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
  {
    label: "Abierto hoy 3pm",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C8F135"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Primero en Grecia",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C8F135"
        strokeWidth="2"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

function HeroCourtSVG() {
  return (
    <svg
      viewBox="0 0 380 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xs lg:max-w-sm opacity-90"
      aria-hidden="true"
    >
      <rect
        x="10"
        y="10"
        width="360"
        height="540"
        rx="6"
        stroke="#C8F135"
        strokeWidth="2.5"
        strokeDasharray="14 7"
        fill="none"
        opacity="0.5"
      />
      <rect
        x="28"
        y="28"
        width="324"
        height="504"
        rx="3"
        fill="#141929"
        stroke="#C8F135"
        strokeWidth="1.5"
        opacity="0.9"
      />
      <line x1="28" y1="280" x2="352" y2="280" stroke="#C8F135" strokeWidth="3" />
      <circle cx="28" cy="280" r="5" fill="#C8F135" />
      <circle cx="352" cy="280" r="5" fill="#C8F135" />
      <line
        x1="28"
        y1="168"
        x2="352"
        y2="168"
        stroke="white"
        strokeWidth="1.2"
        opacity="0.35"
      />
      <line
        x1="190"
        y1="168"
        x2="190"
        y2="280"
        stroke="white"
        strokeWidth="1.2"
        opacity="0.35"
      />
      <line
        x1="28"
        y1="392"
        x2="352"
        y2="392"
        stroke="white"
        strokeWidth="1.2"
        opacity="0.35"
      />
      <line
        x1="190"
        y1="280"
        x2="190"
        y2="392"
        stroke="white"
        strokeWidth="1.2"
        opacity="0.35"
      />
      <circle cx="190" cy="280" r="5" fill="#C8F135" />
      <ellipse cx="190" cy="280" rx="70" ry="22" fill="#C8F135" opacity="0.06" />
      <rect x="10" y="10" width="30" height="30" rx="6" fill="#C8F135" opacity="0.08" />
      <rect x="340" y="10" width="30" height="30" rx="6" fill="#C8F135" opacity="0.08" />
      <rect x="10" y="520" width="30" height="30" rx="6" fill="#C8F135" opacity="0.08" />
      <rect x="340" y="520" width="30" height="30" rx="6" fill="#C8F135" opacity="0.08" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,241,53,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,241,53,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-3">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="font-heading text-[5rem] sm:text-[7rem] lg:text-[9rem] xl:text-[10rem] text-white leading-none tracking-tight"
            >
              PÁDEL EN
              <br />
              <span className="text-lime">GRECIA.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-lg sm:text-xl text-white/65 max-w-lg leading-relaxed"
            >
              Las únicas canchas de pádel en la zona.
              <br />
              Sin viajar a San José.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href={PLAYTOMIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime text-navy font-heading text-xl tracking-wider px-8 py-4 rounded-full hover:bg-lime-dark transition-colors text-center"
              >
                RESERVAR EN PLAYTOMIC
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/30 text-white font-heading text-xl tracking-wider px-8 py-4 rounded-full hover:border-lime hover:text-lime transition-colors text-center"
              >
                RESERVAR VÍA WHATSAPP
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.55 },
                },
              }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.4 },
                    },
                  }}
                  className="bg-navy-light border border-lime/25 px-4 py-2 rounded-full flex items-center gap-2"
                >
                  {stat.icon}
                  <span className="text-white/85 text-sm font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex lg:col-span-2 justify-center items-center"
          >
            <HeroCourtSVG />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
