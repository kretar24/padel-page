"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PLAYTOMIC_URL = "https://playtomic.com/clubs/epic-padel";
const WA_URL =
  "https://wa.me/50689527591?text=Hola%2C%20quiero%20reservar%20una%20cancha";

const plans = [
  {
    id: "morning",
    title: "MAÑANA",
    hours: "3PM – 4PM",
    price: "$30",
    unit: "/hora",
    badge: "PRECIO ESPECIAL",
    badgeClass: "bg-white/10 text-white/70",
    featured: false,
    description:
      "La hora perfecta para una sesión tranquila entre semana.",
  },
  {
    id: "evening",
    title: "TARDE / NOCHE",
    hours: "4PM – 10PM",
    price: "$40",
    unit: "/hora",
    badge: "MÁS POPULAR",
    badgeClass: "bg-lime text-navy",
    featured: true,
    description:
      "El horario favorito para jugar después del trabajo o el fin de semana.",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="precios" className="py-24 bg-navy" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl sm:text-6xl text-white tracking-wider">
            PRECIOS SIMPLES,{" "}
            <span className="text-lime">SIN SORPRESAS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className={`relative rounded-2xl p-8 flex flex-col gap-4 ${
                plan.featured
                  ? "bg-navy-card border-2 border-lime shadow-[0_0_40px_rgba(200,241,53,0.15)]"
                  : "bg-navy-card border border-white/10"
              }`}
            >
              <span
                className={`self-start text-xs font-heading tracking-widest px-3 py-1 rounded-full ${plan.badgeClass}`}
              >
                {plan.badge}
              </span>

              <h3 className="font-heading text-3xl text-white tracking-wider">
                {plan.title}
              </h3>

              <p className="text-white/50 text-sm">{plan.hours}</p>

              <div className="flex items-end gap-1 my-2">
                <span
                  className={`font-heading text-6xl leading-none ${
                    plan.featured ? "text-lime" : "text-white"
                  }`}
                >
                  {plan.price}
                </span>
                <span className="text-white/50 mb-2">{plan.unit}</span>
              </div>

              <p className="text-white/50 text-sm leading-relaxed">
                {plan.description}
              </p>

              <a
                href={PLAYTOMIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto block text-center font-heading text-xl tracking-wider py-3 rounded-xl transition-colors ${
                  plan.featured
                    ? "bg-lime text-navy hover:bg-lime-dark"
                    : "border border-white/20 text-white hover:border-lime hover:text-lime"
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
          className="text-center text-white/40 mt-10 max-w-md mx-auto text-sm"
        >
          El precio es por cancha completa. Divídelo entre tus 4 jugadores.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href={PLAYTOMIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-lime text-navy font-heading text-xl tracking-wider px-8 py-4 rounded-full hover:bg-lime-dark transition-colors"
          >
            RESERVAR EN PLAYTOMIC
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 text-white font-heading text-xl tracking-wider px-8 py-4 rounded-full hover:border-lime hover:text-lime transition-colors"
          >
            O VÍA WHATSAPP
          </a>
        </motion.div>
      </div>
    </section>
  );
}
