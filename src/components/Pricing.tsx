"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PLAYTOMIC_URL = "https://playtomic.com/clubs/epic-padel";
const WA_URL =
  "https://wa.me/50683121442?text=Hola%2C%20quiero%20reservar%20una%20cancha";

const plans = [
  {
    id: "morning",
    title: "MAÑANA",
    hours: "3PM – 5PM",
    price: "$30",
    unit: "/hora y media",
    badge: "PRECIO ESPECIAL",
    badgeClass: "bg-line/60 text-white/50",
    featured: false,
    description:
      "La hora perfecta para una sesión tranquila entre semana.",
  },
  {
    id: "evening",
    title: "TARDE / NOCHE",
    hours: "5PM – 10PM",
    price: "$40",
    unit: "/hora y media",
    badge: "MÁS POPULAR",
    badgeClass: "bg-lime text-accent-ink",
    featured: true,
    description:
      "El horario favorito para jugar después del trabajo o el fin de semana.",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="precios" className="py-24 bg-navy-light border-b border-line" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em]">
              (03) Tarifas
            </span>
            <span className="flex-1 h-px bg-line" />
          </div>
          <h2
            className="font-heading font-medium text-white tracking-[-0.03em]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.02 }}
          >
            PRECIOS SIMPLES,{" "}
            <span className="text-lime">SIN SORPRESAS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className={`relative rounded p-8 flex flex-col gap-4 ${
                plan.featured
                  ? "bg-navy border border-lime shadow-[0_0_40px_rgba(200,241,53,0.08)]"
                  : "bg-navy border border-line"
              }`}
            >
              <span
                className={`self-start font-mono text-[0.62rem] tracking-[0.06em] uppercase px-3 py-1.5 rounded-full ${plan.badgeClass}`}
              >
                {plan.badge}
              </span>

              <h3 className="font-heading text-[24px] font-semibold text-white tracking-[-0.01em]">
                {plan.title}
              </h3>

              <p className="text-white/40 text-[13px] font-mono uppercase tracking-[0.04em]">{plan.hours}</p>

              <div className="flex items-end gap-1.5 my-1">
                <span
                  className={`font-heading text-[64px] leading-none font-medium tracking-[-0.03em] ${
                    plan.featured ? "text-lime" : "text-white"
                  }`}
                >
                  {plan.price}
                </span>
                <span className="text-white/40 mb-2 text-[14px]">{plan.unit}</span>
              </div>

              <p className="text-white/45 text-[14px] leading-relaxed">
                {plan.description}
              </p>

              <a
                href={PLAYTOMIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto block text-center font-heading text-[14px] font-semibold tracking-tight py-3.5 rounded transition-colors ${
                  plan.featured
                    ? "bg-lime text-accent-ink hover:bg-lime-dark"
                    : "border border-line text-white/70 hover:border-lime hover:text-lime"
                }`}
              >
                RESERVAR EN PLAYTOMIC
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-white/35 mt-10 max-w-md mx-auto text-[13px]"
        >
          El precio es por cancha completa. Divídelo entre tus 4 jugadores.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10"
        >
          <a
            href={PLAYTOMIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-lime text-accent-ink font-heading text-[15px] font-semibold tracking-tight px-8 py-4 rounded-full hover:bg-lime-dark transition-colors"
          >
            RESERVAR EN PLAYTOMIC
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-line text-white/60 font-heading text-[15px] font-medium tracking-tight px-8 py-4 rounded-full hover:border-lime hover:text-lime transition-colors"
          >
            O VÍA WHATSAPP
          </a>
        </motion.div>
      </div>
    </section>
  );
}
