"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "¿Necesito llevar mi propia pala?",
    a: "No hace falta. Tenemos la tienda Punto Pádel CR dentro del club donde podés comprar o consultar por alquiler de palas y pelotas. Si ya tenés tu equipo, ¡traelo!",
  },
  {
    q: "¿Cuánto cuesta jugar?",
    a: "El precio es por cancha completa: $30 de 3PM a 5PM y $40 de 5PM a 10PM, por hora y media. Como juegan 4 personas, lo dividís entre todos.",
  },
  {
    q: "Soy principiante, ¿puedo jugar?",
    a: "Claro. Recibimos a jugadores de todos los niveles. Para empezar a jugar con gente de tu nivel, sumate a uno de nuestros pozos semanales por WhatsApp.",
  },
  {
    q: "¿Cómo reservo una cancha?",
    a: "Reservá al instante en Playtomic, o escribinos por WhatsApp y te ayudamos a coordinar día y hora.",
  },
  {
    q: "¿Las canchas son al aire libre?",
    a: "No. Nuestras 3 canchas son 100% indoor, así que jugás con lluvia, sol o viento sin que el clima cancele tu partido.",
  },
];

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;
  return (
    <div className="border border-slate-200 rounded-xl bg-white overflow-hidden">
      <h3>
        <button
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-blue-light/60 transition-colors"
        >
          <span className="font-heading text-[18px] font-semibold text-[#1A1A2E] tracking-[-0.01em]">
            {q}
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1B4FD8"
            strokeWidth="2"
            strokeLinecap="round"
            className={`shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-slate-600 leading-relaxed text-[15px]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-blue-light border-b border-slate-200" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[0.68rem] text-slate-500 uppercase tracking-[0.06em]">
              (09) Preguntas
            </span>
            <span className="flex-1 h-px bg-slate-200" />
          </div>
          <h2
            className="font-heading font-extrabold text-[#1A1A2E] tracking-[-0.03em]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.02 }}
          >
            PREGUNTAS{" "}
            <span className="text-blue">FRECUENTES</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col gap-3"
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              index={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
