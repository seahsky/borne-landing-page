"use client";

import { useInView, motion, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const numericMatch = value.match(/^(\d+)/);

  if (!numericMatch) {
    return (
      <motion.span
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={className}
      >
        {value}
      </motion.span>
    );
  }

  const target = parseInt(numericMatch[1]);
  const suffix = value.slice(numericMatch[1].length);

  return (
    <NumericCounter
      containerRef={ref}
      isInView={isInView}
      target={target}
      suffix={suffix}
      className={className}
    />
  );
}

function NumericCounter({
  containerRef,
  isInView,
  target,
  suffix,
  className,
}: {
  containerRef: React.RefObject<HTMLSpanElement | null>;
  isInView: boolean;
  target: number;
  suffix: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={containerRef as React.LegacyRef<HTMLSpanElement>} className={className}>
      {isInView ? `${display}${suffix}` : `0${suffix}`}
    </span>
  );
}
