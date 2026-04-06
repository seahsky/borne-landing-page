"use client";

import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: "24/7", label: "Expert care" },
  { value: "5", label: "Days of recovery", suffix: " days" },
  { value: "40+", label: "Years combined experience" },
  { value: "1 in 5", label: "Mothers affected" },
];

export default function Stats() {
  return (
    <section className="relative bg-sage noise-texture py-section overflow-hidden">
      <div className="relative z-10 mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 text-center">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div>
                <AnimatedCounter
                  value={stat.value}
                  className="block font-serif font-light text-4xl md:text-5xl text-white mb-2"
                />
                <p className="text-white/70 text-sm font-sans tracking-wide">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
