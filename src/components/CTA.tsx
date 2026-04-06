"use client";

import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section id="begin" className="bg-blush-pale py-section">
      <div className="mx-auto max-w-content px-6 md:px-10 text-center">
        <ScrollReveal>
          <h2 className="font-serif font-light text-4xl md:text-[3.25rem] text-charcoal leading-[1.1] mb-4">
            You&rsquo;ve carried enough
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="font-serif font-light text-2xl md:text-3xl text-charcoal-light mb-12">
            Let us carry you.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <a
            href="mailto:hello@bornewell.com"
            className="inline-block bg-sage text-white font-sans font-medium text-sm px-10 py-4 tracking-wide hover:bg-sage-dark transition-colors"
          >
            Begin Your Stay
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
