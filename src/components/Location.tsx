"use client";

import ScrollReveal from "./ScrollReveal";

export default function Location() {
  return (
    <section className="bg-cream py-section">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — Details */}
          <div>
            <ScrollReveal>
              <p className="text-overline uppercase tracking-overline text-charcoal-light mb-6">
                Your home for five days
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif font-light text-4xl md:text-5xl text-charcoal leading-[1.1] mb-8">
                InterContinental Sydney,
                <br />
                Double Bay
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  Nestled in one of Sydney&rsquo;s most sought-after harbourside villages, the InterContinental Double Bay provides the serene five-star setting that postpartum recovery deserves.
                </p>
                <p>
                  Private suites, 24-hour room service, and&nbsp;harbour views&thinsp;&mdash;&thinsp;because healing happens faster when every detail feels considered.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <address className="not-italic mt-8 pt-8 border-t border-stone/30">
                <p className="font-serif text-lg text-charcoal mb-1">
                  33 Cross Street
                </p>
                <p className="text-charcoal-light text-sm">
                  Double Bay NSW 2028, Australia
                </p>
              </address>
            </ScrollReveal>
          </div>

          {/* Right — Google Maps embed */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="aspect-[4/5] relative overflow-hidden bg-ivory">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8!2d151.2437!3d-33.8765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae1f2e8b1c7b%3A0x9e3f8a2e4c3b2a1d!2sInterContinental%20Sydney%20Double%20Bay!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="InterContinental Sydney Double Bay location"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
