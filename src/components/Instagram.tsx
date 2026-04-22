"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function PostPlaceholder({ index }: { index: number }) {
  const isVideo = index === 1 || index === 4;
  return (
    <div className="aspect-square bg-navy border border-lime/20 rounded overflow-hidden relative flex items-center justify-center group hover:border-lime/50 transition-colors duration-200">
      <div className="absolute inset-0 bg-gradient-to-br from-lime/[0.04] to-transparent" />
      {isVideo ? (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C8F135"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-30 group-hover:opacity-50 transition-opacity"
          aria-hidden="true"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      ) : (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C8F135"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-30 group-hover:opacity-50 transition-opacity"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      )}
    </div>
  );
}

export default function Instagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="py-24 bg-navy-light border-b border-line" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="flex-1 h-px bg-line" />
            <span className="font-mono text-[0.68rem] text-muted uppercase tracking-[0.06em]">
              Instagram
            </span>
            <span className="flex-1 h-px bg-line" />
          </div>

          <h2
            className="font-heading font-medium text-white tracking-[-0.03em] mb-3"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.05 }}
          >
            SEGUINOS EN{" "}
            <span className="text-lime">INSTAGRAM</span>
          </h2>

          <p className="text-lime font-heading text-[22px] sm:text-[28px] font-semibold tracking-[-0.02em] mb-4">
            @epicpadelcr
          </p>

          <p className="text-white/45 text-[16px] max-w-md mx-auto">
            Torneos, partidos y la comunidad de pádel que está creciendo en Grecia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto mb-10"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <PostPlaceholder key={i} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center gap-3"
        >
          <a
            href="https://www.instagram.com/epicpadelcr/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime text-accent-ink font-heading text-[15px] font-semibold tracking-tight px-8 py-4 rounded-full hover:bg-lime-dark transition-colors inline-flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
            VER NUESTRO INSTAGRAM
          </a>
          <p className="font-mono text-[0.62rem] text-muted uppercase tracking-[0.06em]">
            Seguinos para ver los últimos partidos y torneos
          </p>
        </motion.div>
      </div>
    </section>
  );
}
