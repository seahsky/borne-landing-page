"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-cream to-blush-pale">
      {/* Decorative botanical SVG */}
      <svg
        className="absolute top-12 right-8 md:right-16 w-48 md:w-72 opacity-[0.12] text-sage"
        viewBox="0 0 200 320"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        aria-hidden="true"
      >
        <path d="M100 310 C100 310 100 20 100 20" />
        <path d="M100 60 C70 40 50 55 45 80 C40 105 65 100 100 80" />
        <path d="M100 100 C130 80 150 95 155 120 C160 145 135 140 100 120" />
        <path d="M100 150 C70 130 45 145 40 170 C35 195 60 190 100 170" />
        <path d="M100 200 C130 180 155 195 160 220 C165 245 140 240 100 220" />
        <path d="M100 250 C75 235 55 245 50 265 C47 280 65 278 100 260" />
      </svg>

      <svg
        className="absolute bottom-20 left-6 md:left-12 w-36 md:w-56 opacity-[0.08] text-blush rotate-12"
        viewBox="0 0 200 320"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        aria-hidden="true"
      >
        <path d="M100 310 C100 310 100 40 100 40" />
        <path d="M100 80 C70 60 50 75 45 100 C40 125 65 120 100 100" />
        <path d="M100 140 C130 120 150 135 155 160 C160 185 135 180 100 160" />
        <path d="M100 210 C75 195 55 205 50 225 C47 240 65 238 100 220" />
      </svg>

      <div className="relative z-10 mx-auto max-w-content px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-overline uppercase tracking-overline text-charcoal-light mb-6"
        >
          Australia&rsquo;s first postpartum wellness hotel
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-serif font-light text-display text-charcoal mb-8 max-w-3xl mx-auto"
        >
          Where motherhood begins
          <br />
          with rest
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-charcoal-light text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Five transformative days of expert care, nourishment, and&nbsp;uninterrupted sleep at the InterContinental Double&nbsp;Bay.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#begin"
            className="inline-block bg-sage text-white font-sans font-medium text-sm px-8 py-3.5 tracking-wide hover:bg-sage-dark transition-colors"
          >
            Explore Your Stay
          </a>
          <a
            href="#services"
            className="inline-block text-charcoal-light font-sans text-sm border-b border-charcoal-light/40 pb-0.5 hover:text-charcoal hover:border-charcoal transition-colors"
          >
            Our Packages
          </a>
        </motion.div>
      </div>
    </section>
  );
}
