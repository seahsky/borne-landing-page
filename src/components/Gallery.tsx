"use client";

import ScrollReveal from "./ScrollReveal";

const images = [
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant cream-toned hotel suite with tufted headboard and natural light",
    className: "md:col-span-2 aspect-[16/9]",
  },
  {
    src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",
    alt: "Intimate bedroom corner with soft lamp and crisp linens",
    className: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
    alt: "Relaxing wellness treatment in a serene spa setting",
    className: "aspect-[4/5]",
  },
];

export default function Gallery() {
  return (
    <section className="bg-ivory py-section overflow-hidden" aria-label="Interior gallery">
      <div className="mx-auto max-w-full-bleed px-6 md:px-10">
        <ScrollReveal>
          <p className="text-overline uppercase tracking-overline text-charcoal-light mb-10 text-center">
            A place designed for rest
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((image, i) => (
            <ScrollReveal key={image.src} delay={i * 0.12} className={image.className}>
              <div className="relative overflow-hidden h-full group">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                {/* Subtle warm overlay to unify colour temperature */}
                <div className="absolute inset-0 bg-blush-pale/10 mix-blend-multiply pointer-events-none" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
