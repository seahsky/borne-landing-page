"use client";

import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "I arrived exhausted and overwhelmed. By day three, I felt like myself again\u200A\u2014\u200Aonly stronger. The night nursery alone was worth every cent.",
    name: "Jessica",
    featured: true,
  },
  {
    quote:
      "The midwives didn\u2019t just help with feeding\u200A\u2014\u200Athey helped me trust my own instincts. I left feeling genuinely confident as a mother.",
    name: "Sarah",
    featured: false,
  },
  {
    quote:
      "I wish every new mum could experience this. The food, the care, the sleep. It\u2019s not a luxury\u200A\u2014\u200Ait\u2019s what postpartum should look like.",
    name: "Madeleine",
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ivory py-section">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <ScrollReveal>
          <p className="text-overline uppercase tracking-overline text-charcoal-light mb-6">
            From our guests
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-charcoal mb-16 leading-[1.1]">
            In their words
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
          {testimonials.map((t, i) => (
            <ScrollReveal
              key={t.name}
              delay={i * 0.12}
              className={t.featured ? "md:row-span-1 md:-mt-0" : i === 2 ? "md:mt-12" : ""}
            >
              <blockquote
                className={`relative ${
                  t.featured ? "bg-blush-pale p-8 md:p-10" : "bg-cream p-8"
                }`}
              >
                {/* Decorative quotation mark */}
                <span
                  className="absolute top-4 left-6 font-serif text-[5rem] leading-none text-gold/[0.15] select-none pointer-events-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p
                  className={`relative z-10 font-serif italic leading-relaxed text-charcoal ${
                    t.featured ? "text-xl md:text-[1.35rem]" : "text-lg"
                  }`}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-5 text-sm text-charcoal-light font-sans">
                  &mdash;&thinsp;{t.name}
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
