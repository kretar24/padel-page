"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { INSTAGRAM_IMAGES } from "@/lib/images";

const INSTAGRAM_URL = "https://www.instagram.com/epicpadelcr/";

function PostTile({ src, index }: { src: string; index: number }) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="aspect-square rounded-lg overflow-hidden relative group block"
      aria-label={`Ver publicación ${index + 1} en el Instagram de Epic Padel`}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 640px) 33vw, 220px"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-blue/0 group-hover:bg-blue/30 transition-colors duration-200 flex items-center justify-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
        </svg>
      </span>
    </a>
  );
}

export default function Instagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="py-24 bg-blue-light border-b border-slate-200" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="flex-1 h-px bg-slate-200" />
            <span className="font-mono text-[0.68rem] text-slate-500 uppercase tracking-[0.06em]">
              Instagram
            </span>
            <span className="flex-1 h-px bg-slate-200" />
          </div>

          <h2
            className="font-heading font-extrabold text-[#1A1A2E] tracking-[-0.03em] mb-3"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.05 }}
          >
            SEGUINOS EN{" "}
            <span className="text-blue">INSTAGRAM</span>
          </h2>

          <p className="text-blue font-heading text-[22px] sm:text-[28px] font-semibold tracking-[-0.02em] mb-4">
            @epicpadelcr
          </p>

          <p className="text-slate-500 text-[16px] max-w-md mx-auto">
            Torneos, partidos y la comunidad de pádel que está creciendo en Grecia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto mb-10"
        >
          {INSTAGRAM_IMAGES.map((src, i) => (
            <PostTile key={i} src={src} index={i} />
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
          <p className="font-mono text-[0.62rem] text-slate-500 uppercase tracking-[0.06em]">
            Seguinos para ver los últimos partidos y torneos
          </p>
        </motion.div>
      </div>
    </section>
  );
}
