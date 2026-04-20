"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto block text-center font-heading text-xl tracking-wider py-3 rounded-xl transition-colors ${
                  plan.featured
                    ? "bg-lime text-navy hover:bg-lime-dark"
                    : "border border-white/20 text-white hover:border-lime hover:text-lime"
                }`}
              >
                RESERVAR AHORA
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
          className="text-center mt-10"
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-lime text-navy font-heading text-xl tracking-wider px-10 py-4 rounded-full hover:bg-lime-dark transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            RESERVAR VÍA WHATSAPP
          </a>
        </motion.div>
      </div>
    </section>
  );
}
