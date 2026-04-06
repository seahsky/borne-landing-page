"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-stone/30"
        >
          <div className="mx-auto max-w-full-bleed px-6 md:px-10 flex items-center justify-between h-16">
            <span className="font-serif text-lg tracking-wordmark text-charcoal">
              BORNE
            </span>
            <a
              href="#begin"
              className="inline-block bg-sage text-white text-sm font-sans font-medium px-5 py-2.5 tracking-wide hover:bg-sage-dark transition-colors"
            >
              Explore Your Stay
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
