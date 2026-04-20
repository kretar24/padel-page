"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PLAYTOMIC_URL = "https://playtomic.com/clubs/epic-padel";
const WA_URL =
  "https://wa.me/50689527591?text=Hola%2C%20quiero%20reservar%20una%20cancha";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative py-32 bg-navy overflow-hidden" ref={ref}>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse at 50% 50%, rgba(200,241,53,0.04) 0%, transparent 65%)",
            "radial-gradient(ellipse at 50% 50%, rgba(200,241,53,0.10) 0%, transparent 65%)",
            "radial-gradient(ellipse at 50% 50%, rgba(200,241,53,0.04) 0%, transparent 65%)",
          ],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,241,53,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,241,53,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-tight"
        >
          ¿LISTO PARA TU{" "}
          <span className="text-lime">PRIMER PARTIDO</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg text-white/55 max-w-xl mx-auto"
        >
          Reserva en segundos. Sin complicaciones. Nos vemos en la cancha.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href={PLAYTOMIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-lime text-navy font-heading text-2xl tracking-wider px-10 py-5 rounded-full hover:bg-lime-dark transition-colors shadow-[0_0_30px_rgba(200,241,53,0.25)]"
          >
            RESERVAR EN PLAYTOMIC
          </a>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-white/25 text-white font-heading text-2xl tracking-wider px-10 py-5 rounded-full hover:border-lime hover:text-lime transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            VÍA WHATSAPP
          </a>
        </motion.div>
      </div>
    </section>
  );
}
