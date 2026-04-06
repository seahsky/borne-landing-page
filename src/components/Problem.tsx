"use client";

import ScrollReveal from "./ScrollReveal";

export default function Problem() {
  return (
    <section className="bg-cream py-section">
      <div className="mx-auto max-w-[680px] px-6 md:px-10">
        <ScrollReveal>
          <p className="text-overline uppercase tracking-overline text-charcoal-light mb-6">
            The fourth trimester
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-charcoal leading-[1.1] mb-12">
            The hardest days shouldn&rsquo;t be
            <br className="hidden md:block" /> the loneliest
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-8 mb-12">
          <ScrollReveal delay={0.2}>
            <div>
              <span className="block font-serif font-light text-5xl md:text-6xl text-sage mb-2">
                1&thinsp;in&thinsp;5
              </span>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Australian mothers experience postnatal depression or anxiety in the first year
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div>
              <span className="block font-serif font-light text-5xl md:text-6xl text-sage mb-2">
                3&times;
              </span>
              <p className="text-sm text-charcoal-light leading-relaxed">
                higher developmental risk when mothers don&rsquo;t receive adequate postpartum support
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="space-y-5 text-charcoal-light leading-[1.75]">
            <p>
              The weeks after birth are among the most physically demanding and emotionally vulnerable of a woman&rsquo;s life&thinsp;&mdash;&thinsp;yet in Australia, new mothers are routinely discharged within hours and left to navigate recovery alone.
            </p>
            <p>
              Borne exists to close that gap. We believe the transition into motherhood deserves the same level of expert care, attentive nourishment, and intentional rest that we invest in every other milestone of life.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
