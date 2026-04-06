"use client";

import ScrollReveal from "./ScrollReveal";

const heroServices = [
  {
    title: "24/7 Midwife & Lactation Support",
    description:
      "Registered midwives and certified lactation consultants available around the clock. From breastfeeding guidance to newborn assessments, expert care is always a call away.",
    accent: "border-sage",
  },
  {
    title: "Night Nursery",
    description:
      "Our supervised night nursery lets you sleep deeply while your baby is cared for by experienced nurses\u200A\u2014\u200Abrought to you only for feeds, or on your preferred schedule.",
    accent: "border-blush",
  },
];

const standardServices = [
  {
    title: "Postpartum Nutrition",
    description:
      "Chef-prepared meals designed for recovery and lactation. Every dish is nutrient-dense, anti-inflammatory, and genuinely delicious.",
    accent: "border-sage",
  },
  {
    title: "Wellness & Recovery",
    description:
      "Curated treatments including postnatal massage, acupuncture, and gentle movement sessions tailored to your stage of recovery.",
    accent: "border-blush",
  },
  {
    title: "Mental Health Support",
    description:
      "Confidential sessions with perinatal psychologists. We screen, support, and refer\u200A\u2014\u200Abecause emotional wellbeing is not optional.",
    accent: "border-sage",
  },
  {
    title: "Mothers\u2019 Groups",
    description:
      "Small, curated groups that become lasting support networks. Share experiences, learn together, and leave with friends who truly understand.",
    accent: "border-blush",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-section">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <ScrollReveal>
          <p className="text-overline uppercase tracking-overline text-charcoal-light mb-6">
            What&rsquo;s included
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-charcoal mb-16 leading-[1.1]">
            Every detail, considered
          </h2>
        </ScrollReveal>

        {/* Hero cards — two large feature cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {heroServices.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div
                className={`border-l-2 ${service.accent} bg-ivory p-8 md:p-10 h-full`}
              >
                <h3 className="font-serif font-normal text-2xl md:text-[1.7rem] text-charcoal mb-4 leading-snug">
                  {service.title}
                </h3>
                <p className="text-charcoal-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Standard cards — clean 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {standardServices.map((service, i) => (
            <ScrollReveal key={service.title} delay={0.05 + i * 0.08}>
              <div
                className={`border-l-2 ${service.accent} bg-ivory p-8 h-full`}
              >
                <h3 className="font-serif font-normal text-xl text-charcoal mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-charcoal-light text-[0.935rem] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
