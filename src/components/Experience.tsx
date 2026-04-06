"use client";

import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Arrive & Exhale",
    description:
      "Check in to your suite at the InterContinental Double Bay. Your care team introduces themselves, your birth story is heard, and a personalised wellness plan is set.",
  },
  {
    number: "02",
    title: "Rest & Recover",
    description:
      "Night nursery support means uninterrupted sleep\u200A\u2014\u200Afor the first time in weeks. Midwives and lactation consultants are on call around the clock.",
  },
  {
    number: "03",
    title: "Learn & Connect",
    description:
      "Join small mothers\u2019 groups, one-on-one feeding sessions, and gentle movement classes. Build confidence with expert guidance and genuine peer connection.",
  },
  {
    number: "04",
    title: "Leave Stronger",
    description:
      "Depart with a take-home care plan, ongoing telehealth access, and the knowledge that you\u2019ve given yourself and your baby the strongest possible start.",
  },
];

export default function Experience() {
  return (
    <section className="bg-ivory py-section">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <ScrollReveal>
          <p className="text-overline uppercase tracking-overline text-charcoal-light mb-6 text-center">
            The Borne experience
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-charcoal text-center mb-20 leading-[1.1]">
            Five days that change everything
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-stone/40 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-stone/40 md:hidden" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal
                  key={step.number}
                  direction={isEven ? "left" : "right"}
                  delay={i * 0.1}
                >
                  <div className="relative md:grid md:grid-cols-2 md:gap-16 items-start">
                    {/* Dot on timeline */}
                    <div className="absolute left-6 md:left-1/2 top-2 w-3 h-3 rounded-full bg-sage border-2 border-cream -translate-x-1/2 z-10" />

                    {/* Content */}
                    <div
                      className={`pl-14 md:pl-0 ${
                        isEven
                          ? "md:text-right md:pr-16"
                          : "md:col-start-2 md:pl-16"
                      }`}
                    >
                      <span className="block font-serif font-light text-7xl md:text-8xl text-sage-light/60 leading-none mb-2 select-none">
                        {step.number}
                      </span>
                      <h3 className="font-serif font-normal text-2xl md:text-3xl text-charcoal mb-3">
                        {step.title}
                      </h3>
                      <p className="text-charcoal-light leading-relaxed max-w-md inline-block">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
